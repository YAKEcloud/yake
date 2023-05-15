#!/usr/bin/env bash

source hack/ci/util.sh
source hack/ci/handy.sh

# delete ingresses and dnsentries, so that the dnsentries are not leaked on azure
echo "Deleting dnsentries"
$KUBECTL delete --timeout=1m -n garden ingress apiserver-ingress
$KUBECTL delete --timeout=1m -n garden ingress gardener-dashboard-ingress
$KUBECTL delete --timeout=1m -n garden ingress identity-ingress
$KUBECTL delete --timeout=1m --all -n garden dnsentries.dns.gardener.cloud

# delete buckets on azure
rclone -q purge $REMOTE:$BACKUP_BUCKET || echo "Deleting backup bucket failed"

# delete 23ke bucket
$MC rb -q --dangerous --force $MC_ALIAS/$BUCKET_23KE || echo "Deleting bucket failed"

echo "Deleting shoot"
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml
$KUBECTL annotate shoot "$SHOOT" confirmation.gardener.cloud/deletion=true --overwrite=true || echo "Annotating shoot failed"
$KUBECTL delete shoot "$SHOOT" --wait=false || echo "Deleting shoot failed"
