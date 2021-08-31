#!/usr/bin/env bash
sleep 10
export SHOOT=23ke-run-$(echo $GITHUB_SHA|head -c 4)
export KUBECONFIG=.github/gardener-kubeconfig.yaml

# Alter shoot template
yq w -i .github/shoot-template.yaml .metadata.name $SHOOT

# Create Shoot
kubectl apply -f .github/shoot-template.yaml || ( echo "kubectl apply unsuccessful, exiting..." && exit 1 )

# Wait for shoot to become available
while [ ! "$(kubectl get shoot $SHOOT -n garden-23t-test -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]
do
	echo waiting for Shoot...
	sleep 20
done

# Get shoot kubeconfig
kubectl get secret -n garden-23t-test $SHOOT.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > .github/shoot-kubeconfig.yaml

export KUBECONFIG=.github/shoot-kubeconfig.yaml

# Talk to the new Shoot
kubectl get nodes

export KUBECONFIG=.github/gardener-kubeconfig.yaml
# Annotate Shoot for deletion
kubectl annotate shoot -n garden-23t-test $SHOOT confirmation.gardener.cloud/deletion=true
# Delete shoot
kubectl delete shoot -n garden-23t-test $SHOOT
