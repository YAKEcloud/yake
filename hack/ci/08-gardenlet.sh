#/usr/bin/env bash

source hack/handy.sh

export CA_GARDENER_APISERVER=$(kubectl get secret -n garden garden-kube-apiserver-ca -ogo-template='{{index .data "ca.crt" }}')

yq eval '.data."values.yaml"' hack/dev-env/gardenlet/config/internal-gardenlet-values.yaml.tmpl > /tmp/values.yaml
yq eval '.global.gardenlet.config.seedConfig.spec.dns.ingressDomain = "ingress." + env(SHOOT) + ".23t-test.okeanos.dev"' -i /tmp/values.yaml

yq eval '.global.gardenlet.config.gardenClientConnection.bootstrapKubeconfig.kubeconfig' /tmp/values.yaml > /tmp/kubeconfig.yaml
yq eval '.clusters[0].cluster.certificate-authority-data = env(CA_GARDENER_APISERVER)' -i /tmp/kubeconfig.yaml
yq eval '.users[0].user.token = env(TOKEN_ID) + "." + env(TOKEN_ID_SECRET)' -i /tmp/kubeconfig.yaml

export KUBECONFIG_VALUES=$(cat /tmp/kubeconfig.yaml)
yq eval '.global.gardenlet.config.gardenClientConnection.bootstrapKubeconfig.kubeconfig = strenv(KUBECONFIG_VALUES)' -i /tmp/values.yaml
export VALUES=$(cat /tmp/values.yaml)
yq eval '.data."values.yaml" = strenv(VALUES)' hack/dev-env/gardenlet/config/internal-gardenlet-values.yaml.tmpl > hack/dev-env/gardenlet/config/internal-gardenlet-values.yaml

yq eval '.stringData.token-id = env(TOKEN_ID)' hack/dev-env/gardenlet/garden-content/token.yaml.tmpl > hack/dev-env/gardenlet/garden-content/token.yaml
yq eval '.metadata.name = "bootstrap-token-" + env(TOKEN_ID)' -i hack/dev-env/gardenlet/garden-content/token.yaml
yq eval '.stringData.token-secret = env(TOKEN_ID_SECRET)' -i hack/dev-env/gardenlet/garden-content/token.yaml

bash hack/ci/05-config-bucket.sh

flux create ks 23ke-env-gardenlet --source=Bucket/23ke-config --path=./dev-env/gardenlet



rm hack/dev-env/gardenlet/garden-content/token.yaml
rm hack/dev-env/gardenlet/config/internal-gardenlet-values.yaml
