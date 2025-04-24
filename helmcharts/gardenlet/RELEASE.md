# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug which might lead to a crash loop backoff of `gardener-controller-manager` when removing legacy seeds labels has been fixed. by @oliver-goetz [#11928]
## 🏃 Others

- `[OPERATOR]` Fix an issue where envoy filters to handle proxy-protocol are not deployed, even if configured for istio load-balancers. by @axel7born [#11919]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.1`
