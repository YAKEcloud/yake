#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

export _23KECTL_VERSION=v0.0.16

echo "Installing 23KE"

cat hack/ci/misc/23kectl-config.yaml.tmpl | \
  DOLLAR='$' \
  RCLONE_CONFIG_23KETESTBED_ACCOUNT_BASE64=$(echo -n $RCLONE_CONFIG_23KETESTBED_ACCOUNT | base64 -w0) \
  RCLONE_CONFIG_23KETESTBED_KEY_BASE64=$(echo -n $RCLONE_CONFIG_23KETESTBED_KEY | base64 -w0) \
  envsubst > hack/ci/misc/23kectl-config.yaml

# if we have a local development version of 23kectl in our local directory tree
# we use this version of 23kectl instead of a true release
if [ -d "hack/go/23kectl" ]; then
    repoRoot=$(pwd)
    cd hack/go/23kectl
		go build .
		cp 23kectl $repoRoot
    cd $repoRoot
else
		wget -q -O 23kectl https://github.com/23technologies/23kectl/releases/download/${_23KECTL_VERSION}/23kectl-${_23KECTL_VERSION}-linux-amd64
		chmod +x 23kectl
fi

./23kectl install --kubeconfig hack/ci/secrets/shoot-kubeconfig.yaml --config hack/ci/misc/23kectl-config.yaml

echo "Waiting for Kustomization gardener"
kubectl wait kustomization gardener -n flux-system --for=condition=ready --timeout=10m  || { ./23kectl doctor --kubeconfig hack/ci/secrets/shoot-kubeconfig.yaml; exit 1; }

echo "Waiting for all Helmreleases to be ready"
kubectl wait helmrelease -A --all --for=condition=ready --timeout=10m || { ./23kectl doctor --kubeconfig hack/ci/secrets/shoot-kubeconfig.yaml; exit 1; }

echo "Get the kubeconfig for the virtual garden"
kubectl get secrets -n garden garden-kubeconfig-for-admin -o go-template='{{.data.kubeconfig | base64decode }}' > hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml

echo -e "23KE Ready ✅"