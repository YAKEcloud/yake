#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

# delete buckets on azure
rclone -q purge $REMOTE:$BACKUP_BUCKET || echo "Deleting backup bucket failed"

# delete 23ke bucket
mc rb -q --dangerous --force $MC_ALIAS/$BUCKET_23KE || echo "Deleting bucket failed"

echo "Deleting shoot"
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml
kubectl annotate shoot "$SHOOT" confirmation.gardener.cloud/deletion=true --overwrite=true || echo "Annotating shoot failed"
kubectl delete shoot "$SHOOT" --wait=false || echo "Deleting shoot failed"
