#!/usr/bin/env bash

CONTEXT="${CONTEXT:-23ke}"

kind create cluster --config hack/kind-config.yaml --name $CONTEXT

export KUBECONTEXT=kind-$CONTEXT
kubectl config use-context $KUBECONTEXT
echo "using kubectl context: $KUBECONTEXT"

echo "install minio"
kubectl apply -f hack/minio.yaml

hack/metallb/setup-lb.sh

./hack/wait-for-service.sh minio default

flux install
kubectl apply -f hack/23ke-flux-bucket.yaml
