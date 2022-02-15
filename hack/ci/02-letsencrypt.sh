#/usr/bin/env bash

source hack/ci/handy.sh

echo -n "Deploying Letsencrypt"
# Install and configure cert-manger
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.yaml > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while deploying cert-manager ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
kubectl wait -n cert-manager deploy cert-manager-webhook --for=condition=Available > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for  cert-manager-webhook ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
kubectl wait -n cert-manager deploy cert-manager --for=condition=Available > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for  cert-manager ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
kubectl wait -n cert-manager deploy cert-manager-cainjector --for=condition=Available > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for  cert-manager-cainjector ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
kubectl apply -f hack/ci/misc/letsencrypt.yaml > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while deploying cluster-issuer crd ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -e "\rLetsencrypt ready    ✅                       "
