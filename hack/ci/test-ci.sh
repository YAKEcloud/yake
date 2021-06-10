#!/usr/bin/env bash

set +e

# use argv as context if supplied
[ ! -z "$1" ] && CONTEXT="$1"

CONTEXT="${CONTEXT:-23ke}"

kind export kubeconfig --name $CONTEXT --kubeconfig hack/access/kind-"${CONTEXT}".kubeconfig

if [ $? -ne 0 ]; then
  echo "No kind $CONTEXT found, exiting"
  exit 1
fi

export KUBECONFIG=hack/access/kind-$CONTEXT.kubeconfig
echo "using kubectl config: $KUBECONFIG"

kubectl get -n kube-system secrets dev-ca --output='go-template={{index .data "ca.crt"}}' | base64 -d  > /tmp/kind-ca

dashboard_url=$(kubectl get ingress gardener-dashboard-ingress -n garden -o json | jq -r .spec.rules[0].host)

kubectl get -n garden secrets/garden-kubeconfig-for-admin --template={{.data.kubeconfig}} | base64 -d > /tmp/garden-kubeconfig
export KUBECONFIG=/tmp/garden-kubeconfig

echo "--------------------"
echo "garden api resources"
kubectl api-resources 

echo "--------------------"
echo "test resources"
kubectl explain shoot > /dev/null
kubectl explain seed > /dev/null

echo "--------------------"
echo "check webui"

curl --cacert /tmp/kind-ca https://${dashboard_url}/login -o /dev/null
