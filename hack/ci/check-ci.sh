#!/usr/bin/env bash

set +xe

./hack/setup-kind.sh
./hack/upload-flux

kubectl wait kustomization -A --all --for=condition=ready --timeout=10m
kubectl wait helmrelease -A --all --for=condition=ready --timeout=20m


./hack/wait-for-clusterip.sh garden-kube-apiserver garden
./hack/wait-for-clusterip.sh gardener-dashboard-service garden

./hack/ci/test-kind.sh