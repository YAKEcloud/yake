#!/usr/bin/env bash

set +xe

# use argv as context if supplied
[ ! -z "$1" ] && CONTEXT="$1"

CONTEXT="${CONTEXT:-23ke}"

kind export kubeconfig --name $CONTEXT --kubeconfig hack/access/kind-"${CONTEXT}".kubeconfig

if [ $? -ne 0 ]; then
  echo "No kind $CONTEXT found, recreating kind cluster"
  ./hack/setup-kind.sh $CONTEXT
fi

export KUBECONFIG=hack/access/kind-$CONTEXT.kubeconfig
echo "using kubectl config: $KUBECONFIG"

# use kind cluster as gardencluster
kubectl -n flux-system create secret generic target-gardencluster-kubeconfig --from-literal=value="$(cat $KUBECONFIG | sed 's&server:.*&server: https://kubernetes.default.svc/&g')"


./hack/upload-flux -c

nginx_ip=$(./hack/wait-for-service.sh kube-system-ingress-nginx-controller kube-system)

cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: 23ke-env-substitutions # only supports single line strings!
  namespace: flux-system
type: Opaque
stringData:
  ENV: ${CONTEXT}
  BASE_DOMAIN: ${nginx_ip}.nip.io
  DASHBOARD_CLIENTSECRET: no1EiH6eicee6iegaiji6nu
  DASHBOARD_SESSIONSECRET: 6E0368EB-410B-48AB-B13A-FE528ED87E69
  KUBEAPISERVER_BASICAUTHPASSWORD: weebie8Eiphee1reerookuN
EOF

kubectl wait kustomization -A --all --for=condition=ready --timeout=10m
kubectl wait helmrelease -A --all --for=condition=ready --timeout=20m

./hack/wait-for-clusterip.sh garden-kube-apiserver garden > /dev/null
./hack/wait-for-clusterip.sh gardener-dashboard-service garden > /dev/null

echo "Gardener Dashboard URL: https://dashboard.${CONTEXT}.${nginx_ip}.nip.io"
echo "kubeconfig: export KUBECONFIG=${KUBECONFIG}"
