#!/usr/bin/env bash

# use argv as context if supplied
[ ! -z "$1" ] && CONTEXT="$1"

CONTEXT="${CONTEXT:-23ke}"

kind create cluster --config hack/kind-config.yaml --name $CONTEXT

export KUBECONTEXT=kind-$CONTEXT
kubectl config use-context $KUBECONTEXT
echo "using kubectl context: $KUBECONTEXT"

echo "install minio"
kubectl apply -f hack/minio.yaml

hack/metallb/setup-lb.sh

echo "Waiting for end point..."
minio_ip="$(./hack/wait-for-service.sh minio default)"
kubectl wait --for=condition=available --timeout=1m  deployment minio -n default
echo "Minio ready at ${minio_ip}"
mc --config-dir hack/mc-config config host add kind http://"${minio_ip}":9000 minio minio123

flux install
# kubectl apply -f hack/23ke-flux-bucket.yaml
