# [github.com/gardener/gardener:v1.125.4]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the update of existing `CustomResourceDefinitions` to be no-op is now fixed. by @shafeeqes [[#12973](https://github.com/gardener/gardener/pull/12973)]

## 🏃 Others
- `[OPERATOR]` Monitoring the Istio Ingress Gateways is temporarily disabled to mitigate a metric leak issue. This does not affect the monitoring of the shoot control planes where these metrics are not used. by @gardener-ci-robot [[#12936](https://github.com/gardener/gardener/pull/12936)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.125.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.125.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.125.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.125.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.125.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.125.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.125.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.125.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.125.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.125.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.125.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.125.4`
