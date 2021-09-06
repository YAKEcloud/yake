#!/usr/bin/env bash
RAND=$(openssl rand -hex 2)
MC_ALIAS=${MC_ALIAS:-shoot}
export SHOOT="23ke-run-$RAND"
export MINIO_HOSTNAME="minio.$SHOOT.23t-test.okeanos.dev"
export MINIO_URL="https://$MINIO_HOSTNAME"
export MINIO_PW=$(openssl rand -hex 20)
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME

BUCKET=${BUCKET:-23ke}
CONFIG_BUCKET=${CONFIG_BUCKET:-config}

export KUBECONFIG=.github/gardener-kubeconfig.yaml

echo "The script will now setup your development / testing environment."
echo
echo "shoot-name:   $SHOOT"
echo "S3-URL:       $MINIO_URL"
echo "S3-User:      minio"
if [[ $CI == "true" ]]
then
    echo "S3-Password:  <omitted in Github Action run>"
else
    echo "S3-Password:  $MINIO_PW"
fi
echo
echo "This line might be handy:"
echo "export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME"
echo

# Alter shoot template
yq eval '.metadata.name = env(SHOOT)' -i hack/shoot-template.yaml

# Create Shoot
kubectl apply -f hack/shoot-template.yaml > /dev/null || { echo "Shoot creation unsuccessful❌"; exit 1; }

# Restore shoot template
git checkout -q hack/shoot-template.yaml

# Wait for shoot to become available
echo -n "Creating shoot: 0%"
OLD_PERCENTAGE=0
while [ ! "$(kubectl get shoot $SHOOT -n garden-23t-test -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]
do
    sleep 5
    PERCENTAGE=$(kubectl get shoot -n garden-23t-test $SHOOT -o jsonpath="{.status.lastOperation.progress}")
    if [ $OLD_PERCENTAGE -le $PERCENTAGE ]
    then
        echo -n -e "\rCreating shoot: $PERCENTAGE%"
        OLD_PERCENTAGE=$PERCENTAGE
    fi
	sleep 1
done
echo  -e "\rshoot ready ✅               "

# Get shoot kubeconfig
kubectl get secret -n garden-23t-test $SHOOT.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > hack/shoot-kubeconfig.yaml

export KUBECONFIG=hack/shoot-kubeconfig.yaml

echo -n "Deploying Letsencrypt"
# Install and configure cert-manger
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.yaml > /dev/null || { echo "Error while deploying cert-manager ❌"; exit 1; }
echo -n "."
kubectl wait -n cert-manager deploy cert-manager-webhook --for=condition=Available > /dev/null
echo -n "."
kubectl wait -n cert-manager deploy cert-manager --for=condition=Available > /dev/null
echo -n "."
kubectl wait -n cert-manager deploy cert-manager-cainjector --for=condition=Available > /dev/null
kubectl apply -f hack/letsencrypt-prod.yaml > /dev/null || { echo "Error while deploying cluster-issuer crd ❌"; exit 1; }
echo  -e "\rLetsencrypt ready ✅                       "

# Install flux
echo -n "Installing Flux..."
flux install > /dev/null &2>&1 { echo "Error while installing Flux ❌" ; exit 1; }
echo -e "\rFlux installed ✅                  "

# Alter minio template
yq eval 'select(documentIndex == 1) .spec.template.spec.containers[0].env[1].value = env(MINIO_PW)' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .metadata.annotations."dns.gardener.cloud/class" = "garden"' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .metadata.annotations."dns.gardener.cloud/dnsnames" = env(MINIO_HOSTNAME)' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .spec.rules[0].host = env(MINIO_HOSTNAME)' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .spec.tls[0].hosts[0] = env(MINIO_HOSTNAME)' -i hack/minio.yaml

# Install minio
kubectl apply -f hack/minio.yaml > /dev/null || { echo "Minio deployment unsuccessful❌"; exit 1; }

# Restore minio template
git checkout -q hack/minio.yaml

echo -n "Deploying minio..."
# Wait for minio deployment to become ready
kubectl wait --for=condition=available --timeout=1m  deployment minio -n default > /dev/null || { echo "Minio deployment unsuccessful❌" ; exit 1; }
kubectl wait --for=condition=ready --timeout=3m  certificate minio-tls -n default > /dev/null || { echo "Minio deployment unsuccessful, Certificate error ❌"; exit 1; }
echo  -e "\rMinio ready ✅       "

# 23KE Bucket
echo  -n -e "\r23KE Bucket creating"
(mcli ls $MC_ALIAS/$BUCKET > /dev/null 2>&1 ) || mcli mb $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo "23KE Bucket did not exist. error while creating a new one ❌" ; exit 1; }
echo -n "."
# TODO: Upload only the necessary parts of the repository
mcli cp --recursive . $MC_ALIAS/$BUCKET > /dev/null &2>&1 { echo "Error while uploading 23KE to Bucket ❌" ; exit 1; }
echo -n "."
# we now upload packet versions which use a bucket instead of the GitRepository
for file in $(grep --exclude-dir=hack --exclude-dir=env-template/ -lr GitRepository); do
    echo $file
    cat $file | sed s/GitRepository/Bucket/ | mcli pipe $MC_ALIAS/$BUCKET/$file > /dev/null 2>&1 || { echo "Error while uploading to 23KE Bucket ❌" ; exit 1; }
done
echo -n "."
echo  -e "\r23KE Bucket ready ✅       "


# 23KE Config-Bucket
echo  -n -e "\rConfig Bucket creating"
(mcli ls $MC_ALIAS/$CONFIG_BUCKET > /dev/null 2>&1 ) || mcli mb $MC_ALIAS/$CONFIG_BUCKET > /dev/null 2>&1 || { echo "Config Bucket did not exist. error while creating a new one ❌" ; exit 1; }
echo -n "."
mcli cp --recursive hack/dev-env $MC_ALIAS/$CONFIG_BUCKET > /dev/null &2>&1 { echo "Error while uploading Config to Bucket ❌" ; exit 1; }
echo -n "."
echo  -e "\rConfig Bucket ready ✅       "

