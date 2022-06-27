#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

# FIXME: maybe do in a single get
echo "Fetching DNS secret from base gardener"
AZURE_BASE_DOMAIN=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_BASE_DOMAIN|base64decode}}')
AZURE_TENANT_ID=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_TENANT_ID}}')
AZURE_SUBSCRIPTION_ID=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_SUBSCRIPTION_ID}}')
AZURE_SECRET_ID=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_SECRET_ID}}')
AZURE_SECRET_VALUE=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_SECRET_VALUE}}')

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
  ENV: ingress
  BASE_DOMAIN: ${SHOOT_DOMAIN}
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

# Create or update secret
kubectl create secret generic -n flux-system minio-local --from-literal=accesskey=minio --from-literal=secretkey="$MINIO_PW" --save-config --dry-run=client -o yaml | kubectl apply -f -

flux create source bucket 23ke --insecure --endpoint=minio.minio:9000 --bucket-name="$BUCKET" --secret-ref=minio-local
flux create source bucket 23ke-config --insecure --endpoint=minio.minio:9000 --bucket-name="$CONFIG_BUCKET" --secret-ref=minio-local
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
