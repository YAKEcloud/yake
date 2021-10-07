#/usr/bin/env bash

source hack/handy.sh

echo -n "Running tests"
kubectl wait kustomization 23ke-base -n flux-system --for=condition=ready --timeout=10m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for flux-kustomization 23ke-base ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
kubectl wait kustomization 23ke-env -n flux-system --for=condition=ready --timeout=10m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for flux-kustomization 23ke-env ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
kubectl wait kustomization -A --all --for=condition=ready --timeout=10m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for flux-kustomizations ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
kubectl wait helmrelease -A --all --for=condition=ready --timeout=20m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for helmreleases ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
# Extract apiserver-in-shoot-kubeconfig.yaml
kubectl get secrets -n garden garden-kubeconfig-for-admin -o go-template='{{.data.kubeconfig | base64decode }}' > hack/secrets/apiserver-in-shoot-kubeconfig.yaml 2> /tmp/stderr || { echo -e "\rError while extracting apiserver-in-shoot-kubeconfig ❌"; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
echo -e "\rAll tests passed     ✅                  "
