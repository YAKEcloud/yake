#/usr/bin/env bash

source hack/handy.sh

echo -e -n "\rDeploying gardenlet"
export CA_GARDENER_APISERVER=$(kubectl get secret -n garden garden-kube-apiserver-ca -ogo-template='{{index .data "ca.crt" }}')
echo -n "."

yq eval '.data."values.yaml"' hack/dev-env/gardenlet/config/internal-gardenlet-values.yaml.tmpl > /tmp/values.yaml
yq eval '.global.gardenlet.config.seedConfig.spec.dns.ingressDomain = "ingress." + env(SHOOT) + ".23t-test.okeanos.dev"' -i /tmp/values.yaml

yq eval '.global.gardenlet.config.gardenClientConnection.bootstrapKubeconfig.kubeconfig' /tmp/values.yaml > /tmp/kubeconfig.yaml
yq eval '.clusters[0].cluster.certificate-authority-data = env(CA_GARDENER_APISERVER)' -i /tmp/kubeconfig.yaml
yq eval '.users[0].user.token = strenv(TOKEN_ID) + "." + strenv(TOKEN_ID_SECRET)' -i /tmp/kubeconfig.yaml

export KUBECONFIG_VALUES=$(cat /tmp/kubeconfig.yaml)
yq eval '.global.gardenlet.config.gardenClientConnection.bootstrapKubeconfig.kubeconfig = strenv(KUBECONFIG_VALUES)' -i /tmp/values.yaml
export VALUES=$(cat /tmp/values.yaml)
yq eval '.data."values.yaml" = strenv(VALUES)' hack/dev-env/gardenlet/config/internal-gardenlet-values.yaml.tmpl > hack/dev-env/gardenlet/config/internal-gardenlet-values.yaml

yq eval '.stringData.token-id = env(TOKEN_ID)' hack/dev-env/gardenlet/garden-content/token.yaml.tmpl > hack/dev-env/gardenlet/garden-content/token.yaml
yq eval '.metadata.name = "bootstrap-token-" + env(TOKEN_ID)' -i hack/dev-env/gardenlet/garden-content/token.yaml
yq eval '.stringData.token-secret = env(TOKEN_ID_SECRET)' -i hack/dev-env/gardenlet/garden-content/token.yaml

export CLOUD_TOKEN=$(cat hack/secrets/hcloud_token)
yq eval '.data.hcloudToken = env(CLOUD_TOKEN)' hack/dev-env/gardenlet/garden-content/cloud_secret.yaml.tmpl > hack/dev-env/gardenlet/garden-content/cloud_secret.yaml

bash hack/ci/05-config-bucket.sh > /dev/null
echo -n "."

rm hack/dev-env/gardenlet/garden-content/token.yaml
rm hack/dev-env/gardenlet/config/internal-gardenlet-values.yaml

flux create ks 23ke-env-gardenlet --source=Bucket/23ke-config --path=./dev-env/gardenlet > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating gardenlet kustomization ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }

echo -e -n "\rWaiting for ks 23ke-env-gardenlet"
kubectl wait kustomization -n flux-system 23ke-env-gardenlet --for=condition=ready --timeout=10m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for ks 23ke-env-gardenlet ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -e -n "\rWaiting for hr gardenlet"
kubectl wait helmrelease -n flux-system internal-gardenlet --for=condition=ready --timeout=20m > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for helmrelease internal-gardenlet ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -e -n "\r                                  "
echo -e -n "\rWaiting for gardenlet"
kubectl rollout status deployment -n garden gardenlet > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for deployment gardenlet ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -e -n "\r                                  "
echo -e -n "\rWaiting for seed"
until kubectl get seed hcloud-fsn1-0 --context garden > /tmp/stdout 2> /tmp/stderr
do
    sleep 1
    echo -n "."
done
kubectl wait seed hcloud-fsn1-0 --for=condition=Bootstrapped --timeout=20m --context garden > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while waiting for seed hcloud ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -e "\rgardenlet Ready       ✅                  "
