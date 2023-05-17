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
$KUBECTL get secret "$SHOOT".kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > hack/ci/secrets/shoot-kubeconfig.yaml
export KUBECONFIG=hack/ci/secrets/shoot-kubeconfig.yaml

# redirect hcloud requests:
$KUBECTL apply -f https://raw.githubusercontent.com/23technologies/debug-hcloud-api/5852b622e15760a6f69cd60f50cda3d6834e0cf3/k8s/mutatingwebhook.yaml


RCLONE_AZUREBLOB_KEY=$($KUBECTL --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret azure-blob-storage-key -o go-template='{{.data.accountKey|base64decode}}')

cat << EOF >> hack/ci/handy.sh
export REMOTE=23KETESTBED
export RCLONE_CONFIG_${REMOTE}_KEY=$RCLONE_AZUREBLOB_KEY
export RCLONE_CONFIG_${REMOTE}_TYPE="azureblob"
export RCLONE_CONFIG_${REMOTE}_ACCOUNT=23ketestbed
EOF

echo -e "Shoot ready ✅"
