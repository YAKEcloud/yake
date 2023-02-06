#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

dumpHr() {
	local helmreleases=$(kubectl get helmreleases -n flux-system | sed 1,1d | awk '{ if($3 != "True") print $1 }' | xargs echo)
	kubectl get hr $helmreleases -n flux-system -o wide
	echo ''
	kubectl get hr $helmreleases -n flux-system -o yaml
}

dumpKs() {
	local kustomizations=$(kubectl get kustomizations -n flux-system | sed 1,1d | awk '{ if($3 != "True") print $1 }' | xargs echo)
	kubectl get kustomizations $kustomizations -n flux-system -o wide
	echo ''
	kubectl get kustomizations $kustomizations -n flux-system -o yaml
}

echo "Installing 23KE"
cat hack/ci/misc/23kectl-config.yaml.tmpl | envsubst > hack/ci/misc/23kectl-config.yaml
cwd=$(pwd)
cd hack/go/23kectl
go run main.go install --kubeconfig $cwd/hack/ci/secrets/shoot-kubeconfig.yaml --config $cwd/hack/ci/misc/23kectl-config.yaml
cd $cwd

echo "Waiting for ks"
kubectl wait kustomization 23ke-base -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }
kubectl wait kustomization 23ke-env -n flux-system --for=condition=ready --timeout=10m  || { dumpKs; exit 1; }
kubectl wait kustomization -A --all --for=condition=ready --timeout=10m || { dumpKs; exit 1; }

echo "Waiting for helmreleases"
kubectl wait helmrelease -A --all --for=condition=ready --timeout=20m || { dumpHr; exit 1; }

# Extract apiserver-in-shoot-kubeconfig.yaml
kubectl get secrets -n garden garden-kubeconfig-for-admin -o go-template='{{.data.kubeconfig | base64decode }}' > hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml

# this is required for the webterminals to work with the internal-seed
kubectl create secret generic hcloud-hel1-0-kubeconfig -n garden --from-file=kubeconfig=hack/ci/secrets/shoot-kubeconfig.yaml --context garden

echo -e "23KE Ready ✅"
