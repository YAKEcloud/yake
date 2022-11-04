#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

# delete buckets on azure
rclone -q purge $REMOTE:$BUCKET || echo "Deleting bucket failed"
rclone -q purge $REMOTE:$CONFIG_BUCKET || echo "Deleting config bucket failed"

echo "Deleting shoot"
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml
kubectl annotate shoot "$SHOOT" confirmation.gardener.cloud/deletion=true --overwrite=true || echo "Annotating shoot failed"
kubectl delete shoot "$SHOOT" --wait=false || echo "Deleting shoot failed"
