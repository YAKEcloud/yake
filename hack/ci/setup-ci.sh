#!/usr/bin/env bash

set +xe

# use argv as context if supplied
[ ! -z "$1" ] && CONTEXT="$1"

CONTEXT="${CONTEXT:-23ke}"

kind export kubeconfig --name $CONTEXT

if [ $? -ne 0 ]; then
  echo "No kind $CONTEXT found, recreating kind cluster"
  ./hack/setup-kind.sh $CONTEXT
fi

./hack/upload-flux

kubectl wait kustomization -A --all --for=condition=ready --timeout=10m
kubectl wait helmrelease -A --all --for=condition=ready --timeout=20m

./hack/wait-for-clusterip.sh garden-kube-apiserver garden
./hack/wait-for-clusterip.sh gardener-dashboard-service garden
