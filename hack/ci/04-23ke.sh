#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "Installing 23KE"

# Templating 23ke-env-substitutions.yaml
cat << EOF | kubectl apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: 23ke-env-substitutions # only supports single line strings!
  namespace: flux-system
type: Opaque
stringData:
  CLUSTERIDENTITY: ${SHOOT}
  ENV: ${SHOOT}
  BASE_DOMAIN: ${AZURE_BASE_DOMAIN}
  DASHBOARD_CLIENTSECRET: ${DASHBOARD_CLIENTSECRET}
  DASHBOARD_SESSIONSECRET: ${DASHBOARD_SESSIONSECRET}
  KUBEAPISERVER_BASICAUTHPASSWORD: ${KUBEAPISERVER_BASICAUTHPASSWORD}
  AZURE_DOMAIN: ${SHOOT}.${AZURE_BASE_DOMAIN}
  AZURE_TENANT_ID: ${AZURE_TENANT_ID}
  AZURE_SUBSCRIPTION_ID: ${AZURE_SUBSCRIPTION_ID}
  AZURE_SECRET_ID: ${AZURE_SECRET_ID}
  AZURE_SECRET_VALUE: ${AZURE_SECRET_VALUE}
  TOKEN_ID: ${TOKEN_ID}
  TOKEN_SECRET: ${TOKEN_SECRET}
EOF

flux create source bucket 23ke --endpoint=https://23ketestbed.blob.core.windows.net --bucket-name="$SHOOT-23ke" --secret-ref=azure-blob-storage-key --provider=azure --interval=1m

flux create source bucket 23ke-config --endpoint=https://23ketestbed.blob.core.windows.net --bucket-name="$SHOOT-config" --secret-ref=azure-blob-storage-key --provider=azure --interval=1m

kubectl apply -f hack/ci/flux

echo "Waiting for ks"
kubectl wait kustomization 23ke-base -n flux-system --for=condition=ready --timeout=10m
kubectl wait kustomization 23ke-env -n flux-system --for=condition=ready --timeout=10m
kubectl wait kustomization -A --all --for=condition=ready --timeout=10m
echo "Waiting for helmreleases"
kubectl wait helmrelease -A --all --for=condition=ready --timeout=20m

# Extract apiserver-in-shoot-kubeconfig.yaml
kubectl get secrets -n garden garden-kubeconfig-for-admin -o go-template='{{.data.kubeconfig | base64decode }}' > hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml

echo -e "23KE Ready ✅"
