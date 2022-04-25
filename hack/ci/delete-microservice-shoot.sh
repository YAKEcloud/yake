#/usr/bin/env bash

source hack/ci/handy.sh

echo -e -n "\rDelete Microservie"
kubectl delete -n default -f https://raw.githubusercontent.com/GoogleCloudPlatform/microservices-demo/main/release/kubernetes-manifests.yaml --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml --wait > /tmp/stdout 2> /tmp/stderr || { echo -e "\rUnsuccessful microservice deletion           ❌               "; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."

echo -n -e "\rDeleting shoot:           "
kubectl annotate shoot -n garden-testing microservice confirmation.gardener.cloud/deletion=true --context garden > /tmp/stdout 2> /tmp/stderr || { echo "Error while setting shoot-deletion annotation ❌"; echo "STDOUT:"; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }

kubectl delete shoot -n garden-testing microservice --wait=true --context garden > /tmp/stdout 2> /tmp/stderr || { echo -e "Shoot deletion unsuccessful ❌"; exit 1; }

echo -e "\rDemo-Shoot deleted✅                "
