#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "Deploying sample Shoot"

kubectl apply -f hack/ci/misc/shoot-microservice-"$PROVIDER".yaml --context garden

# Wait for shoot to become available
echo "Waiting for shoot creation..."

while [ ! "$(kubectl --context garden get shoot microservice -n garden-testing -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]; do
  PERCENTAGE=$(kubectl --context garden get shoot microservice -n garden-testing -o jsonpath="{.status.lastOperation.progress}")
  echo "Creating shoot: $PERCENTAGE%"
	sleep 5
done
echo "Shoot creation succeeded"

kubectl get secret -n garden-testing microservice.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' --context garden > hack/ci/secrets/shoot-microservice-kubeconfig.yaml

echo "Deploying microservice demo"
kubectl apply -n default -f hack/ci/misc/microservices-demo.yaml --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml
echo "Waiting for microservice demo"
sleep 5
kubectl wait --for=condition=available --timeout=600s -n default deployment/loadgenerator --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml 

echo -e "Demo-Deployment ready ✅"
