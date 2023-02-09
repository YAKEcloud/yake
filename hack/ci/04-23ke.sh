#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

echo "Installing 23KE"
cat hack/ci/misc/23kectl-config.yaml.tmpl | DOLLAR='$' envsubst > hack/ci/misc/23kectl-config.yaml
repoRoot=$(pwd)
cd hack/go/23kectl
go run main.go install --kubeconfig $repoRoot/hack/ci/secrets/shoot-kubeconfig.yaml --config $repoRoot/hack/ci/misc/23kectl-config.yaml
cd $repoRoot

echo "Waiting for Kustomization pre-gardener"
kubectl wait kustomization 23ke-base -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }
kubectl wait kustomization 23ke-env -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }
kubectl wait kustomization 23ke-env-config -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }
kubectl wait kustomization pre-gardener -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }


echo "Waiting for Kustomization gardener"
# sleep until hr kube-apiserver appears
while ! kubectl get helmrelease kube-apiserver -n flux-system; do sleep 10; done
# Wait for vgarden kube-apiserver, extract vgarden kubeconfig and upload hosting shoots kubeconfig to vgarden, a secret referenced by internal-gardenlet
kubectl wait helmrelease kube-apiserver -n flux-system --for=condition=ready --timeout=10m || { dumpHr; exit 1; }
# sleep until dnsentry appears and is ready
while ! dnsentryname="$(kubectl get dnsentries -n garden -o name | grep apiserver-ingress-ingress)"; do sleep 1; done
kubectl wait $dnsentryname -n garden --for=jsonpath='{.status.state}'=Ready
# wait for gardener-application so garden namespace exists
kubectl wait helmrelease gardener-application -n flux-system --for=condition=ready --timeout=10m || { dumpHr; exit 1; }
kubectl get secrets -n garden garden-kubeconfig-for-admin -o go-template='{{.data.kubeconfig | base64decode }}' > hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml
kubectl create secret generic hcloud-hel1-0-kubeconfig -n garden --from-file=kubeconfig=hack/ci/secrets/shoot-kubeconfig.yaml --save-config --dry-run=client -o yaml | kubectl --context garden apply -f -

kubectl wait kustomization gardener -n flux-system --for=condition=ready --timeout=10m  || { dumpKs; exit 1; }


echo "Waiting for all KS and HR to be ready"
kubectl wait helmrelease -A --all --for=condition=ready --timeout=10m || { dumpHr; exit 1; }
kubectl wait kustomization -A --all --for=condition=ready --timeout=10m || { dumpKs; exit 1; }


echo -e "23KE Ready ✅"
