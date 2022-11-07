#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "Installing 23KE"

# Templating 23ke-config.yaml
cat << EOF | kubectl apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: 23ke-config
  namespace: flux-system
type: Opaque
stringData:
  values.yaml: |
    # generate and hide from user?
    dashboardClientSecret: ${DASHBOARD_CLIENTSECRET}
    dashboardSessionSecret: ${DASHBOARD_SESSIONSECRET}
    kubeApiServerBasicAuthPassword: ${KUBEAPISERVER_BASICAUTHPASSWORD}
    tokenId: ${TOKEN_ID}
    tokenSecret: ${TOKEN_SECRET}
    clusterIdentity: ${SHOOT}

    # how to set as default?
    gardenletIngress: internal

    issuerEmailAddress: operations@23technologies.cloud

    domains:
    - type: global # means used for ingress, gardener defaultDomain and internalDomain
      domain: ${SHOOT}.${AZURE_BASE_DOMAIN}
      provider: azure-dns
      credentials:
        tenantID: ${AZURE_TENANT_ID}
        subscriptionID: ${AZURE_SUBSCRIPTION_ID}
        clientID: ${AZURE_SECRET_ID}
        clientSecret: ${AZURE_SECRET_VALUE}
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

# this is required for the webterminals to work with the internal-seed
kubectl create secret generic hcloud-hel1-0-kubeconfig -n garden --from-file=kubeconfig=hack/ci/secrets/shoot-kubeconfig.yaml --context garden

echo -e "23KE Ready ✅"
