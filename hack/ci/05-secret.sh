#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "Fetching and uploading secret for $PROVIDER"

# Download provider secret from host gardener, and upload it again
kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret "$PROVIDER"-secret -o yaml \
  | yq eval '.metadata.labels as $labels | del(.metadata)| .metadata.name = env(PROVIDER)+"-secret" | .metadata.namespace = "garden-testing" | .metadata.labels = $labels' - \
  | kubectl apply -f - --context garden

cat << EOF | kubectl apply -f - --context garden
apiVersion: core.gardener.cloud/v1beta1
kind: SecretBinding
metadata:
  labels:
    cloudprofile.garden.sapcloud.io/name: $PROVIDER
  name: $PROVIDER-secret
  namespace: garden-testing
provider:
  type:	$PROVIDER
secretRef:
  name: $PROVIDER-secret
  namespace: garden-testing
EOF
