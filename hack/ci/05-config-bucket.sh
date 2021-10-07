#/usr/bin/env bash

source hack/handy.sh

# 23KE Config-Bucket
echo  -n -e "\rConfig Bucket creating"
(mc ls $MC_ALIAS/$CONFIG_BUCKET > /tmp/stdout 2> /tmp/stderr ) || mc mb $MC_ALIAS/$CONFIG_BUCKET >> /tmp/stdout 2>> /tmp/stderr || { echo -e "\rConfig Bucket did not exist. error while creating a new one ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
mc cp --recursive hack/dev-env $MC_ALIAS/$CONFIG_BUCKET > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while uploading Config to Bucket ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
# Templating gardener-values.yaml
yq eval '.stringData."values.yaml"' hack/dev-env/config/gardener-values.yaml.tmpl > /tmp/values.yaml
yq eval '.global.internalDomain.domain = "internal." + env(SHOOT) + ".23t-test.okeanos.dev"' -i /tmp/values.yaml
yq eval '.stringData."values.yaml" = "'"$(< /tmp/values.yaml)"'"' hack/dev-env/config/gardener-values.yaml.tmpl > hack/dev-env/config/gardener-values.yaml

mc cp hack/dev-env/config/gardener-values.yaml $MC_ALIAS/$CONFIG_BUCKET/dev-env/config/ > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while uploading gardener-values.yaml to Bucket ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
rm hack/dev-env/config/gardener-values.yaml

# Templating 23ke-kube-apiserver-values.yaml
yq eval '.stringData."values.yaml"' hack/dev-env/config/kube-apiserver-values.yaml.tmpl > /tmp/values.yaml
yq eval '.ingress.annotations."dns.gardener.cloud/dnsnames" = "api.dev." + env(SHOOT) + ".23t-test.okeanos.dev"' -i /tmp/values.yaml
export VALUES=$(cat /tmp/values.yaml)
yq eval '.stringData."values.yaml" = strenv(VALUES)' hack/dev-env/config/kube-apiserver-values.yaml.tmpl > hack/dev-env/config/kube-apiserver-values.yaml
mc cp hack/dev-env/config/kube-apiserver-values.yaml $MC_ALIAS/$CONFIG_BUCKET/dev-env/config/ > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while uploading kube-apiserver-values.yaml to Bucket ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
rm hack/dev-env/config/kube-apiserver-values.yaml
echo -e "\rConfig Bucket ready  ✅       "
