# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where gardenlet was missing permissions to read `v1.Events` in the istio ingress namespace in the seed cluster. by @vpnachev [#11163]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.34.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.34.0) by @gardener-ci-robot [#11161]
- `[OPERATOR]` Fix a bug in the gardener operator where the issuer URL domain for workload identity tokens was not prefixed with `discovery.` resulting in invalid OIDC tokens and discovery documents. by @vpnachev [#11158]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.3`
