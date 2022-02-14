#!/usr/bin/env bash
source hack/handy.sh
if rm hack/ci/secrets/shoot-kubeconfig.yaml 2> /dev/null
then
    echo "Deleted shoot-kubeconfig                  ✅"
else
    echo "shoot-kubeconfig absent                   ✅"
fi
if rm hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml 2> /dev/null
then
    echo "Deleted apiserver-in-shoot-kubeconfig     ✅"
else
    echo "apiserver-in-shoot-kubeconfig absent      ✅"
fi
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml
# Annotate Shoot for deletion
kubectl annotate shoot -n garden-23t-test $SHOOT confirmation.gardener.cloud/deletion=true > /tmp/stdout 2> /tmp/stderr || { echo "Error while setting shoot-deletion annotation ❌"; echo "STDOUT:"; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }

# Delete shoot
kubectl delete shoot -n garden-23t-test $SHOOT --wait=false > /tmp/stdout 2> /tmp/stderr || { echo -e "Shoot deletion unsuccessful ❌"; exit 1; }
echo "shoot annotated for deletion              ✅       "
