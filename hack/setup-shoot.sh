#!/usr/bin/env bash
RAND=$(openssl rand -hex 2)
export MINIO_RAND=$(openssl rand -hex 20)
export SHOOT="23ke-run-$RAND"
export MINIO_HOSTNAME="minio.$SHOOT.23t-test-okeanos.dev"

export KUBECONFIG=.github/gardener-kubeconfig.yaml

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


# Alter minio template
yq eval 'select(documentIndex == 1) .spec.template.spec.containers[0].env[1].value = env(MINIO_RAND)' -i hack/minio.yaml
yq eval 'select(documentIndex == 2) .metadata.annotations."dns.gardener.cloud/class" = "garden"' -i hack/minio.yaml
yq eval 'select(documentIndex == 2) .metadata.annotations."dns.gardener.cloud/dnsnames" = env(MINIO_HOSTNAME)' -i hack/minio.yaml

# Install minio
kubectl apply -f hack/minio.yaml > /dev/null || ( echo "Minio deployment unsuccessful❌\nexiting..." && exit 1 )

# Restore minio template
git checkout -q hack/minio.yaml

echo -n "Deploying minio..."
# Wait for minio deployment to become ready
kubectl wait --for=condition=available --timeout=1m  deployment minio -n default > /dev/null || ( echo "Minio deployment unsuccessful❌\nexiting..." && exit 1 )
echo  -e "\rMinio ready ✅       "
