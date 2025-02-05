# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug preventing the deletion of Shoots that previously failed to create due to an erroneous `kube-apiserver` has been fixed. by @shafeeqes [#11296]
- `[OPERATOR]` A bug which leads to a gardenlet nil pointer exception when running shoot deletion or migration flow for shoots where `shoot.status.networking == nil` has been fixed. by @oliver-goetz [#11307]
- `[OPERATOR]` A bug which might lead to duplicate config entries for `node-agent-authorizer` webhook has been fixed. by @oliver-goetz [#11302]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.56.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.56.0) by @gardener-ci-robot [#11299]
- `[DEPENDENCY]` The `gardener/autoscaler` image has been updated to `v1.30.2`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.30.2) by @gardener-ci-robot [#11298]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.111.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.111.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.111.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.111.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.111.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.111.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.111.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.111.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.111.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.111.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.111.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.111.2`
