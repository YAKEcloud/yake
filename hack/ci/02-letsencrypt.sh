#/usr/bin/env bash

source hack/handy.sh

echo -n "Deploying Letsencrypt"
# Install and configure cert-manger
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.yaml > /dev/null || { echo "Error while deploying cert-manager ❌"; exit 1; }
echo -n "."
kubectl wait -n cert-manager deploy cert-manager-webhook --for=condition=Available > /dev/null
echo -n "."
kubectl wait -n cert-manager deploy cert-manager --for=condition=Available > /dev/null
echo -n "."
kubectl wait -n cert-manager deploy cert-manager-cainjector --for=condition=Available > /dev/null
kubectl apply -f hack/letsencrypt.yaml > /dev/null || { echo "Error while deploying cluster-issuer crd ❌"; exit 1; }
echo  -e "\rLetsencrypt ready ✅                       "
