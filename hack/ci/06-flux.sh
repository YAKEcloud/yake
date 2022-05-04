#/usr/bin/env bash

source hack/ci/handy.sh

# We are using letsencrypt staging for testing purposes
if ! kubectl -n flux-system get configmap le-staging > /tmp/stdout 2> /tmp/stderr
then
	kubectl create configmap le-staging -n flux-system --from-file=le-staging.pem=hack/ci/misc/le-staging.pem > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating le-staging.pem configmap ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
fi
echo -n "."

# Alternatively there is a local CA for signing minio
if ! kubectl -n flux-system get configmap local-ca > /tmp/stdout 2> /tmp/stderr
then
	kubectl create configmap local-ca -n flux-system --from-file=local-ca.pem=hack/ci/misc/local-ca.pem > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating local-ca.pem configmap ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
fi
echo -n "."

kubectl patch -n flux-system deployment source-controller --patch-file hack/ci/misc/flux-source-controller.patch > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while adding le-staging cert to source-controller deployment. ❌" ; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
echo -e "\rFlux installed       ✅                  "
