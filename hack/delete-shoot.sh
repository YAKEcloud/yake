#!/usr/bin/env bash
export SHOOT=$(yq eval '.clusters[0].name' hack/shoot-kubeconfig.yaml|sed 's/shoot--23t-test--//')
export KUBECONFIG=.github/gardener-kubeconfig.yaml
# Annotate Shoot for deletion
kubectl annotate shoot -n garden-23t-test $SHOOT confirmation.gardener.cloud/deletion=true
# Delete shoot
kubectl delete shoot -n garden-23t-test $SHOOT
