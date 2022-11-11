#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

PROVIDER=${PROVIDER:=hcloud}
ZONE=${ZONE:=hel1}

echo "Deploying sample Shoot"

kubectl apply -f hack/ci/misc/shoot-microservice-"$PROVIDER"-"$ZONE".yaml --context garden

# Wait for shoot to become available
echo "Waiting for shoot creation..."

MAX_WAIT=300
PERCENTAGE=0
LASTPERCENTAGE=0
LASTCHANGE=$(date +%s)
while [ ! "$(kubectl --context garden get shoot microservice -n garden-testing -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]; do
  NOW=$(date +%s)
  LASTPERCENTAGE=$PERCENTAGE
  PERCENTAGE=$(kubectl --context garden get shoot microservice -n garden-testing -o jsonpath="{.status.lastOperation.progress}")

  if [ "$LASTPERCENTAGE" -ne "$PERCENTAGE" ]; then
    LASTCHANGE=$NOW
  fi
  
  if [ "$(( $NOW - $LASTCHANGE ))" -ge "$MAX_WAIT" ]; then
    echo "No progress in $MAX_WAIT seconds. Exiting."
    
    kubectl --context garden get shoot microservice -n garden-testing -o yaml; exit 1;
  fi
  
  echo "Creating shoot: $PERCENTAGE%"
	sleep 5
done
echo "Shoot creation succeeded"

kubectl get secret -n garden-testing microservice.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' --context garden > hack/ci/secrets/shoot-microservice-kubeconfig.yaml

echo "Deploying microservice demo"
kubectl apply -n default -f hack/ci/misc/microservices-demo.yaml --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml
echo "Waiting for microservice demo"
sleep 5
kubectl wait --for=condition=available --timeout=600s -n default deployment/loadgenerator --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml \
  || { kubectl --context garden get shoot microservice -n garden-testing -o yaml; exit 1; }

echo -e "Demo-Deployment ready ✅"
