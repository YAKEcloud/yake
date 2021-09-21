#/usr/bin/env bash

source hack/handy.sh

# 23KE Config-Bucket
echo  -n -e "\rConfig Bucket creating"
(mc ls $MC_ALIAS/$CONFIG_BUCKET > /dev/null 2>&1 ) || mc mb $MC_ALIAS/$CONFIG_BUCKET > /dev/null 2>&1 || { echo "Config Bucket did not exist. error while creating a new one ❌" ; exit 1; }
echo -n "."
mc cp --recursive hack/dev-env $MC_ALIAS/$CONFIG_BUCKET > /dev/null 2>&1 || { echo "Error while uploading Config to Bucket ❌" ; exit 1; }
echo -n "."
yq eval '.stringData."values.yaml"' hack/dev-env/config/gardener-values.yaml > /tmp/values.yaml
yq eval '.global.deployment.virtualGarden.clusterIP = "100.88.1.1"' -i /tmp/values.yaml
yq eval '.stringData."values.yaml" = "'"$(< /tmp/values.yaml)"'"' hack/dev-env/config/gardener-values.yaml.tmpl > hack/dev-env/config/gardener-values.yaml
mc cp hack/dev-env/config/gardener-values.yaml $MC_ALIAS/$CONFIG_BUCKET/dev-env/config/ > /dev/null 2>&1 || { echo "Error while uploading gardener-values.yaml to Bucket ❌" ; exit 1; }
echo -n "."
rm hack/dev-env/config/gardener-values.yaml
echo  -e "\rConfig Bucket ready ✅       "
