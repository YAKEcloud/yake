#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml

# Wait for shoot to become available
echo "Waiting for shoot creation..."

while [ ! "$(kubectl get shoot "$SHOOT" -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]; do
  PERCENTAGE=$(kubectl get shoot "$SHOOT" -o jsonpath="{.status.lastOperation.progress}")
  echo "Creating shoot: $PERCENTAGE%"
	sleep 5
done
echo "Shoot creation succeeded"

# Get shoot kubeconfig
kubectl get secret "$SHOOT".kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > hack/ci/secrets/shoot-kubeconfig.yaml
export KUBECONFIG=hack/ci/secrets/shoot-kubeconfig.yaml

# Wait for Toolchain (flux/minio/letsencrypt)
echo "Waiting for toolchain..."
kubectl wait ks -n flux-system main-ks --for=condition=ready --timeout=10m
kubectl wait hr -n default secrets --for=condition=ready --timeout=10m
kubectl wait hr -n default minio --for=condition=ready --timeout=10m
kubectl wait hr -n default cert-manager-manifest --for=condition=ready --timeout=10m
kubectl wait hr -n default letsencrypt --for=condition=ready --timeout=10m

# Configure Flux
# We are using letsencrypt staging for testing purposes
if ! kubectl -n flux-system get configmap le-staging > /tmp/stdout 2> /tmp/stderr
then
	kubectl create configmap le-staging -n flux-system --from-file=le-staging.pem=hack/ci/misc/le-staging.pem
fi

# Alternatively there is a local CA for signing minio
if ! kubectl -n flux-system get configmap local-ca > /tmp/stdout 2> /tmp/stderr
then
	kubectl create configmap local-ca -n flux-system --from-file=local-ca.pem=hack/ci/misc/local-ca.pem
fi

# Patch Flux Source Controller
kubectl patch -n flux-system deployment source-controller --patch-file hack/ci/misc/flux-source-controller.patch

# Get MinIO password
MINIO_PW=$(kubectl get secret -n secrets minio-pw -o go-template='{{.data.PASSWORD|base64decode}}')

cat << EOF >> hack/ci/handy.sh
export MINIO_PW=$MINIO_PW
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME
EOF

echo -e "Shoot ready ✅"
