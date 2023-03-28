#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

SHOOTNAME="test-${SHOOT#23ke-run-}"

echo "Deleting microservice"
kubectl delete -n default -f hack/ci/misc/microservices-demo.yaml --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml --wait || echo "There was an error deleting the microservice"

echo "Deleting shoot $SHOOTNAME"
kubectl annotate shoot -n garden-testing "$SHOOTNAME" confirmation.gardener.cloud/deletion=true --context garden --overwrite=true || echo "There was an error annotating the test shoot"
kubectl delete shoot -n garden-testing "$SHOOTNAME" --wait=true --context garden || echo "There was an error deleting the test shoot"
