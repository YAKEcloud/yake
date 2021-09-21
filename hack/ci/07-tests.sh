#/usr/bin/env bash

source hack/handy.sh

echo -n "Running tests"
kubectl wait kustomization -A --all --for=condition=ready --timeout=10m > /dev/null 2>&1 || { echo -e "\rError while waiting for flux-kustomizations ❌"; exit 1; }
echo -n "."
kubectl wait helmrelease -A --all --for=condition=ready --timeout=20m > /dev/null 2>&1 || { echo -e "\rError while waiting for helmreleases ❌"; exit 1; }
echo -n "."
echo -e "\rAll tests passed     ✅                  "
