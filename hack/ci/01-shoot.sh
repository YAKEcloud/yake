#/usr/bin/env bash


source hack/ci/handy.sh
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml
# Wait for shoot to become available
echo -n "Creating shoot: 0%"
OLD_PERCENTAGE=0
while [ ! "$(kubectl get shoot $SHOOT -n garden-23ke-ci -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]
do
    sleep 5
    PERCENTAGE=$(kubectl get shoot -n garden-23ke-ci $SHOOT -o jsonpath="{.status.lastOperation.progress}")
    if [ $OLD_PERCENTAGE -le $PERCENTAGE ]
    then
        echo -n -e "\rCreating shoot: $PERCENTAGE%"
        OLD_PERCENTAGE=$PERCENTAGE
    fi
	sleep 1
done


# Get shoot kubeconfig
kubectl get secret -n garden-23ke-ci $SHOOT.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > hack/ci/secrets/shoot-kubeconfig.yaml 2> /tmp/stderr || { echo -e "\rshoot creation unsuccessful            ❌               "; echo "STDERR:"; cat /tmp/stderr; exit 1; }
export KUBECONFIG=hack/ci/secrets/shoot-kubeconfig.yaml


# Wait for Toolchain (flux/minio/letsencrypt)
kubectl wait ks -n flux-system main-ks --for=condition=ready --timeout=10m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for kustomization toolchain(main-ks) ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
kubectl wait hr -n default secrets --for=condition=ready --timeout=10m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for helmrelease secrets ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
kubectl wait hr -n default minio --for=condition=ready --timeout=10m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for helmrelease minio ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
kubectl wait hr -n default cert-manager-manifest --for=condition=ready --timeout=10m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for helmrelease cert-manager-manifest ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
kubectl wait hr -n default letsencrypt --for=condition=ready --timeout=10m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for helmrelease letsencrypt ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }


# Configure Flux
  # We are using letsencrypt staging for testing purposes
if ! kubectl -n flux-system get configmap le-staging > /tmp/stdout 2> /tmp/stderr
then
	kubectl create configmap le-staging -n flux-system --from-file=le-staging.pem=hack/ci/misc/le-staging.pem > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating le-staging.pem configmap ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
fi

  # Alternatively there is a local CA for signing minio
if ! kubectl -n flux-system get configmap local-ca > /tmp/stdout 2> /tmp/stderr
then
	kubectl create configmap local-ca -n flux-system --from-file=local-ca.pem=hack/ci/misc/local-ca.pem > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating local-ca.pem configmap ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
fi

  # Patch Flux Source Controller
kubectl patch -n flux-system deployment source-controller --patch-file hack/ci/misc/flux-source-controller.patch > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while adding le-staging cert to source-controller deployment. ❌" ; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }


# Get MinIO password
export MINIO_PW=$(kubectl get secret -n secrets minio-pw -o go-template='{{.data.PASSWORD|base64decode}}' --kubeconfig hack/ci/secrets/shoot-kubeconfig.yaml)
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME


cat << EOF >> hack/ci/handy.sh
export MINIO_PW=$MINIO_PW
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME
EOF


echo -e "\rshoot ready          ✅               "
