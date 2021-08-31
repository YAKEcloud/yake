#!/usr/bin/env bash
RAND=$(openssl rand -hex 2)
export SHOOT="23ke-run-$RAND"
export KUBECONFIG=.github/gardener-kubeconfig.yaml

# Alter shoot template
yq eval '.metadata.name = env(SHOOT)' -i hack/shoot-template.yaml

# Create Shoot
kubectl apply -f hack/shoot-template.yaml || ( echo "kubectl apply unsuccessful, exiting..." && exit 1 )

# Restore shoot template
git checkout hack/shoot-template.yaml

# Wait for shoot to become available
while [ ! "$(kubectl get shoot $SHOOT -n garden-23t-test -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]
do
	echo waiting for Shoot...
	sleep 20
done

# Get shoot kubeconfig
kubectl get secret -n garden-23t-test $SHOOT.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > hack/shoot-kubeconfig.yaml

export KUBECONFIG=hack/shoot-kubeconfig.yaml


export MINIO_RAND=$(openssl rand -hex 20)
export MINIO_HOSTNAME="minio.$SHOOT.23t-test-okeanos.dev"

# Alter minio template
yq eval 'select(documentIndex == 1) .spec.template.spec.containers[0].env[1].value = env(MINIO_RAND)' -i hack/minio.yaml
yq eval 'select(documentIndex == 2) .metadata.annotations."dns.gardener.cloud/class" = "garden"' -i hack/minio.yaml
yq eval 'select(documentIndex == 2) .metadata.annotations."dns.gardener.cloud/dnsnames" = env(MINIO_HOSTNAME)' -i hack/minio.yaml

# Install minio
kubectl apply -f hack/minio.yaml

# Restore minio template
git checkout hack/minio.yaml

# Wait for minio deployment to become ready
kubectl wait --for=condition=available --timeout=1m  deployment minio -n default
