#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "Deleting microservice"
kubectl delete -n default -f hack/ci/misc/microservices-demo.yaml --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml --wait || echo "There was an error deleting the microservice"

echo "Deleting demo shoot"
kubectl annotate shoot -n garden-testing microservice confirmation.gardener.cloud/deletion=true --context garden --overwrite=true || echo "There was an error annotating the demo shoot"
kubectl delete shoot -n garden-testing microservice --wait=true --context garden || echo "There was an error deleting the demo shoot"
