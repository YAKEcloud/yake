#!/usr/bin/env bash
set -euo pipefail

# todo: make configurable
BRANCH_LOW=release-v1.61
BRANCH_HIGH=release-v1.62

DIR_BASE=$(pwd)
DIR_WT="$DIR_BASE/hack/ci/tmp"

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

git worktree remove "$DIR_WT" || true
git worktree add "$DIR_WT" "$BRANCH_LOW"
cp hack/ci/secrets/gardener-kubeconfig.yaml "$DIR_WT/hack/ci/secrets/gardener-kubeconfig.yaml"

cd "$DIR_WT"

make -f hack/tools/tools.mk all
export PATH=hack/tools/bin:$PATH

hack/ci/00-environment.sh
hack/ci/01-shoot.sh
hack/ci/02-23ke-bucket.sh
hack/ci/03-23ke-config-bucket.sh
hack/ci/04-23ke.sh
hack/ci/05-secret.sh
hack/ci/06-microservice-shoot.sh
# hack/ci/delete-microservice-shoot.sh
# hack/ci/delete-shoot.sh

git checkout "$BRANCH_HIGH"

# hack/ci/00-environment.sh
# hack/ci/01-shoot.sh
hack/ci/02-23ke-bucket.sh
# hack/ci/03-23ke-config-bucket.sh
# hack/ci/04-23ke.sh

flux reconcile source bucket 23ke
# flux reconcile source bucket 23ke-config

kubectl wait kustomization gardener -n flux-system --for=condition=ready=false --timeout=10m
kubectl wait kustomization gardener -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }

# hack/ci/05-secret.sh
# hack/ci/06-microservice-shoot.sh
# hack/ci/delete-microservice-shoot.sh
# hack/ci/delete-shoot.sh

# todo: test if microservice is still up

# cd "$DIR_BASE"

# git worktree remove "$DIR_WT"