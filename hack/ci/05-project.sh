#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

echo "Fetching and uploading secret for $PROVIDER"

cat << EOF | $KUBECTL apply -f - --context garden
apiVersion: v1
kind: Namespace
metadata:
  name: garden-testing
  labels:
    gardener.cloud/role: project
    project.gardener.cloud/name: testing
---
apiVersion: core.gardener.cloud/v1beta1
kind: Project
metadata:
  name: testing
spec:
  owner:
    apiGroup: rbac.authorization.k8s.io
    kind: User
    name: admin@localhost
  members:
    - apiGroup: rbac.authorization.k8s.io
      kind: User
      name: test@localhost
      role: admin
  namespace: garden-testing
EOF

if [ "$PROVIDER" == "regiocloud" ]; then
  SECRETNAME="regio-cloud-secret"
else
  SECRETNAME="$PROVIDER-secret"
fi
export SECRETNAME

# Download provider secret from host gardener, and upload it again
$KUBECTL --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret "$SECRETNAME" -o yaml \
  | $YQ eval '.metadata.labels as $labels | del(.metadata)| .metadata.name = env(SECRETNAME) | .metadata.namespace = "garden-testing" | .metadata.labels = $labels' - \
  | $KUBECTL apply -f - --context garden

if [ "$PROVIDER" == "hcloud" ]; then
  PROVIDERTYPE="hcloud"
elif [ "$PROVIDER" == "regiocloud" ]; then
  PROVIDERTYPE="openstack"
else
  echo "error: unknown provider type for provider $PROVIDER"
  exit 1
fi

cat << EOF | $KUBECTL apply -f - --context garden
apiVersion: core.gardener.cloud/v1beta1
kind: SecretBinding
metadata:
  labels:
    cloudprofile.garden.sapcloud.io/name: $PROVIDER
  name: $SECRETNAME
  namespace: garden-testing
provider:
  type: $PROVIDERTYPE
secretRef:
  name: $SECRETNAME
  namespace: garden-testing
EOF
