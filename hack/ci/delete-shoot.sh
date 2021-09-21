#!/usr/bin/env bash
source hack/handy.sh
rm hack/shoot-kubeconfig.yaml
export KUBECONFIG=.github/gardener-kubeconfig.yaml
# Annotate Shoot for deletion
kubectl annotate shoot -n garden-23t-test $SHOOT confirmation.gardener.cloud/deletion=true > /dev/null 2>&1
# Delete shoot
kubectl delete shoot -n garden-23t-test $SHOOT --wait=false > /dev/null || (echo -e "Shoot deletion unsuccessful❌\nexiting..."; exit 1)
echo  -e "\rshoot deleted 🗑       "
