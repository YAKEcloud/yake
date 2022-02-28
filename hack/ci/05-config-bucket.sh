#/usr/bin/env bash

source hack/ci/handy.sh
source hack/ci/secrets/azure_dns

# 23KE Config-Bucket
echo  -n -e "\rConfig Bucket creating"
(mc ls $MC_ALIAS/$CONFIG_BUCKET > /tmp/stdout 2> /tmp/stderr ) || mc mb $MC_ALIAS/$CONFIG_BUCKET >> /tmp/stdout 2>> /tmp/stderr || { echo -e "\rConfig Bucket did not exist. error while creating a new one ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
mc cp --recursive hack/ci/dev-env $MC_ALIAS/$CONFIG_BUCKET > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while uploading Config to Bucket ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."

mc cp hack/ci/dev-env/config/gardener-values.yaml $MC_ALIAS/$CONFIG_BUCKET/dev-env/config/ > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while uploading gardener-values.yaml to Bucket ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."

mc cp hack/ci/dev-env/config/kube-apiserver-values.yaml $MC_ALIAS/$CONFIG_BUCKET/dev-env/config/ > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while uploading kube-apiserver-values.yaml to Bucket ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."

mc cp hack/ci/dev-env/config/gardenlet-values.yaml $MC_ALIAS/$CONFIG_BUCKET/dev-env/config/ > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while uploading gardenlet-values.yaml to Bucket ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."

echo -e "\rConfig Bucket ready  ✅       "
