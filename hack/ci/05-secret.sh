#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

echo "Fetching and uploading secret for $PROVIDER"

cat << EOF | kubectl apply -f - --context garden
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

# Download provider secret from host gardener, and upload it again
kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret "$PROVIDER"-secret -o yaml \
  | yq eval '.metadata.labels as $labels | del(.metadata)| .metadata.name = env(PROVIDER)+"-secret" | .metadata.namespace = "garden-testing" | .metadata.labels = $labels' - \
  | kubectl apply -f - --context garden

if [ $PROVIDER == "hcloud" ]
then
    PROVIDERTYPE=hcloud
elif [ $PROVIDER == "betacloud" ]
then
    PROVIDERTYPE=openstack
fi


cat << EOF | kubectl apply -f - --context garden
apiVersion: core.gardener.cloud/v1beta1
kind: SecretBinding
metadata:
  labels:
    cloudprofile.garden.sapcloud.io/name: $PROVIDER
  name: $PROVIDER-secret
  namespace: garden-testing
provider:
  type: $PROVIDERTYPE
secretRef:
  name: $PROVIDER-secret
  namespace: garden-testing
EOF
