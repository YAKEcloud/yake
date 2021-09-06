#!/usr/bin/env bash
RAND=$(openssl rand -hex 2)
export SHOOT="23ke-run-$RAND"
export MINIO_HOSTNAME="minio.$SHOOT.23t-test.okeanos.dev"
export MINIO_URL="https://$MINIO_HOSTNAME"
export MINIO_PW=$(openssl rand -hex 20)

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

# Alter shoot template
yq eval '.metadata.name = env(SHOOT)' -i hack/shoot-template.yaml

# Create Shoot
kubectl apply -f hack/shoot-template.yaml > /dev/null || ( echo "Shoot creation unsuccessful❌\nexiting..." && exit 1 )

# Restore shoot template
git checkout -q hack/shoot-template.yaml

# Wait for shoot to become available
echo -n "Creating shoot: 0%"
OLD_PERCENTAGE=0
while [ ! "$(kubectl get shoot $SHOOT -n garden-23t-test -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]
do
    PERCENTAGE=$(kubectl get shoot -n garden-23t-test $SHOOT -o jsonpath="{.status.lastOperation.progress}")
    if [ $OLD_PERCENTAGE -lt $PERCENTAGE ]
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

echo -n "Deploying Letsencrypt...%"
# Install and configure cert-manger
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.yaml > /dev/null || ( echo "Error while deploying cert-manager ❌\nexiting..." && exit 1 )
kubectl apply -f hack/letsencrypt-prod.yaml > /dev/null || ( echo "Error while deploying cluster-issuer crd ❌\nexiting..." && exit 1 )
echo  -e "\rLetsencrypt ready ✅                       "

# Alter minio template
yq eval 'select(documentIndex == 1) .spec.template.spec.containers[0].env[1].value = env(MINIO_PW)' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .metadata.annotations."dns.gardener.cloud/class" = "garden"' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .metadata.annotations."dns.gardener.cloud/dnsnames" = env(MINIO_HOSTNAME)' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .spec.rules[0].host = env(MINIO_HOSTNAME)' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .spec.tls[0].hosts[0] = env(MINIO_HOSTNAME)' -i hack/minio.yaml

# Install minio
kubectl apply -f hack/minio.yaml > /dev/null || ( echo "Minio deployment unsuccessful❌\nexiting..." && exit 1 )

# Restore minio template
git checkout -q hack/minio.yaml

echo -n "Deploying minio..."
# Wait for minio deployment to become ready
kubectl wait --for=condition=available --timeout=1m  deployment minio -n default > /dev/null || ( echo "Minio deployment unsuccessful❌\nexiting..." && exit 1 )
echo  -e "\rMinio ready ✅       "
