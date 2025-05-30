# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The deletion of `NamespacedCloudProfile`s has been fixed. Previously, users could not delete these resources if objects with the same name but in different namespaces existed in the landscape. Gardener incorrectly reported them as still being referenced by shoot clusters. by @timuthy [#12193]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.6`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.6`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.6`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.6`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.6`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.6`
