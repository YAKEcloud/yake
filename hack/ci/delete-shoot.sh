#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "Deleting shoot"
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml
kubectl annotate shoot "$SHOOT" confirmation.gardener.cloud/deletion=true --overwrite=true
kubectl delete shoot "$SHOOT" --wait=false
echo "Shoot will be deleted in the background ✅"
