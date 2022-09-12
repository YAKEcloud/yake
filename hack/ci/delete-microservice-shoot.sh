#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "Deleting microservice"
kubectl delete -n default -f hack/ci/misc/microservices-demo.yaml --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml --wait

echo "Deleting demo shoot"
kubectl annotate shoot -n garden-testing microservice confirmation.gardener.cloud/deletion=true --context garden --overwrite=true
kubectl delete shoot -n garden-testing microservice --wait=true --context garden
echo "Demo shoot deleted ✅"
