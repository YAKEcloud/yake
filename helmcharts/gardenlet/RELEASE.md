# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12303]
## 🏃 Others

- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12291]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.2`
