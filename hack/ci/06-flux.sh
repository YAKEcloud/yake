#/usr/bin/env bash

source hack/handy.sh
if [[ $CI == "true" ]]
then
    wget -q https://github.com/fluxcd/flux2/releases/download/v0.17.1/flux_0.17.1_linux_amd64.tar.gz
    tar xfvz flux_0.17.1_linux_amd64.tar.gz --directory /tmp > /dev/null
    FLUX=/tmp/flux
else
    FLUX=$(which flux)
fi
# Install flux
echo -n "Installing Flux"
$FLUX install > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while installing Flux ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."

# We are using letsencrypt staging for testing purposes
if ! kubectl -n flux-system get configmap le-staging > /tmp/stdout 2> /tmp/stderr
then
	kubectl create configmap le-staging -n flux-system --from-file=le-staging.pem=hack/le-staging.pem > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating le-staging.pem configmap ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
fi
echo -n "."

kubectl patch -n flux-system deployment source-controller --patch-file hack/flux-source-controller.patch > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while adding le-staging cert to source-controller deployment. ❌" ; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
echo -e "\rFlux installed       ✅                  "
