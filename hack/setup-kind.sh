#!/usr/bin/env bash

# use argv as context if supplied
[ ! -z "$1" ] && CONTEXT="$1"

CONTEXT="${CONTEXT:-23ke}"

kind create cluster --config hack/kind-config.yaml --name $CONTEXT --kubeconfig hack/access/kind-"${CONTEXT}".kubeconfig

export KUBECONFIG=hack/access/kind-$CONTEXT.kubeconfig
echo "using kubectl config: $KUBECONFIG"

for i in $(cat hack/ci/images-preload); do
  echo "Preloading kind with image $i"
  if ! docker inspect $i > /dev/null; then
    echo "Pulling image $i to host docker"
    docker pull $i
  fi
  kind load docker-image $i --name $CONTEXT
done

echo "install minio"
kubectl apply -f hack/minio.yaml

hack/metallb/setup-lb.sh

echo "Waiting for end point..."
minio_ip="$(./hack/wait-for-service.sh minio default)"
kubectl wait --for=condition=available --timeout=1m  deployment minio -n default
sleep 5 # FIXME readyness check etc to be sure tcp port is reachable
echo "Minio ready at ${minio_ip}"
mc --config-dir hack/mc-config config host add kind-${CONTEXT} http://"${minio_ip}":9000 minio minio123

flux install
# kubectl apply -f hack/23ke-flux-bucket.yaml
