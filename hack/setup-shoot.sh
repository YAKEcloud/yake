#!/usr/bin/env bash
RANDOM=$(openssl rand -hex 2)
echo got random name $RANDOM
export SHOOT="23ke-run-$RANDOM"
export KUBECONFIG=.github/gardener-kubeconfig.yaml

# Alter shoot template
yq eval '.metadata.name = env(SHOOT)' -i hack/shoot-template.yaml
echo altered shoot template

# Create Shoot
kubectl apply -f hack/shoot-template.yaml || ( echo "kubectl apply unsuccessful, exiting..." && exit 1 )
echo called kubectl to apply shoot-template

# Wait for shoot to become available
while [ ! "$(kubectl get shoot $SHOOT -n garden-23t-test -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]
do
	echo waiting for Shoot...
	sleep 20
done

# Get shoot kubeconfig
kubectl get secret -n garden-23t-test $SHOOT.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > hack/shoot-kubeconfig.yaml

export KUBECONFIG=hack/shoot-kubeconfig.yaml

# Talk to the new Shoot
kubectl get nodes
#hack/ci/setup-ci.sh ci-${BRANCH_NAME}"
#hack/ci/test-ci.sh ci-${BRANCH_NAME}"
