#!/usr/bin/env bash
RAND=$(openssl rand -hex 2)
export SHOOT="23ke-run-$RAND"
export KUBECONFIG=.github/gardener-kubeconfig.yaml

# Alter shoot template
yq eval '.metadata.name = env(SHOOT)' -i hack/shoot-template.yaml

# Create Shoot
kubectl apply -f hack/shoot-template.yaml || ( echo "kubectl apply unsuccessful, exiting..." && exit 1 )

# Restore shoot template
yq eval '.metadata.name = 23ke-test' -i hack/shoot-template.yaml

# Wait for shoot to become available
while [ ! "$(kubectl get shoot $SHOOT -n garden-23t-test -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]
do
	echo waiting for Shoot...
	sleep 20
done

# Get shoot kubeconfig
kubectl get secret -n garden-23t-test $SHOOT.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > hack/shoot-kubeconfig.yaml

export KUBECONFIG=hack/shoot-kubeconfig.yaml

# Install minio
kubectl apply -f hack/minio.yaml
