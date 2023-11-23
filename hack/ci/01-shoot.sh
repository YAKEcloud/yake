#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml

# Wait for shoot to become available
echo "Waiting for shoot creation..."

while [ ! "$($KUBECTL get shoot "$SHOOT" -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]; do
  PERCENTAGE=$($KUBECTL get shoot "$SHOOT" -o jsonpath="{.status.lastOperation.progress}")
  echo "Creating shoot: $PERCENTAGE%"
	sleep 5
done
echo "Shoot creation succeeded"

# Get shoot kubeconfig
$KUBECTL create \
  -f <(printf '{"spec":{"expirationSeconds":86400}}') \
  --raw "/apis/core.gardener.cloud/v1beta1/namespaces/${NAMESPACE}/shoots/${SHOOT}/adminkubeconfig" | \
  jq -r ".status.kubeconfig" | \
  base64 -d > hack/ci/secrets/shoot-kubeconfig.yaml

RCLONE_AZUREBLOB_KEY=$($KUBECTL --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret azure-blob-storage-key -o go-template='{{.data.accountKey|base64decode}}')

cat << EOF >> hack/ci/handy.sh
export REMOTE=23KETESTBED
export RCLONE_CONFIG_${REMOTE}_KEY=$RCLONE_AZUREBLOB_KEY
export RCLONE_CONFIG_${REMOTE}_TYPE="azureblob"
export RCLONE_CONFIG_${REMOTE}_ACCOUNT=23ketestbed
EOF

echo -e "Shoot ready ✅"
