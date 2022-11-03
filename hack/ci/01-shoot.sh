#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml

# Wait for shoot to become available
echo "Waiting for shoot creation..."

while [ ! "$(kubectl get shoot "$SHOOT" -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]; do
  PERCENTAGE=$(kubectl get shoot "$SHOOT" -o jsonpath="{.status.lastOperation.progress}")
  echo "Creating shoot: $PERCENTAGE%"
	sleep 5
done
echo "Shoot creation succeeded"

# Get shoot kubeconfig
kubectl get secret "$SHOOT".kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > hack/ci/secrets/shoot-kubeconfig.yaml
export KUBECONFIG=hack/ci/secrets/shoot-kubeconfig.yaml

# install flux
kubectl apply -f flux-system/gotk-components.yaml

# Download azure blob storage secret from host gardener, and upload it again
kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret azure-blob-storage-key -o yaml \
  | yq eval '.metadata.labels as $labels | del(.metadata)| .metadata.name = "azure-blob-storage-key" | .metadata.namespace = "flux-system" | .metadata.labels = $labels' - \
  | kubectl apply -f - 

RCLONE_AZUREBLOB_KEY=$(kubectl get secret -n flux-system azure-blob-storage-key -o go-template='{{.data.accountKey|base64decode}}')

cat << EOF >> hack/ci/handy.sh
export REMOTE=23KETESTBED
export RCLONE_CONFIG_${REMOTE}_KEY=$RCLONE_AZUREBLOB_KEY
export RCLONE_CONFIG_${REMOTE}_TYPE="azureblob"
export RCLONE_CONFIG_${REMOTE}_ACCOUNT=23ketestbed
EOF

echo -e "Shoot ready ✅"
