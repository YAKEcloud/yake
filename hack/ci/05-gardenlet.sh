#/usr/bin/env bash

source hack/ci/handy.sh
export PROVIDER=${PROVIDER:=hcloud}

echo -e -n "\rDeploying gardenlet..."

if [[ $PROVIDER == "hcloud" ]]
then
  kubectl create secret generic cloud-secret -n garden-testing  --from-file=hcloudToken=hack/ci/secrets/hcloud_token --dry-run=client -oyaml | kubectl apply -f - --context garden > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating secret cloud-secret ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
  kubectl apply -f hack/ci/dev-env/garden-content/secret_binding_hcloud.yaml --context garden > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while applying secretbinding ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
elif [[ $PROVIDER == "betacloud" ]]
then
  kubectl apply -f hack/ci/secrets/openstack-secret.yaml --context garden > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating secret cloud-secret ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
  kubectl apply -f hack/ci/dev-env/garden-content/secret_binding_betacloud.yaml --context garden > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while applying secretbinding ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
else
  echo -e "\rError, no provider set in env. ❌"
  exit 1
fi
echo -e "\rgardenlet Ready      ✅                  "
