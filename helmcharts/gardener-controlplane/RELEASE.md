# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12305]
- `[OPERATOR]` The deletion of `NamespacedCloudProfile`s has been fixed. Previously, users could not delete these resources if objects with the same name but in different namespaces existed in the landscape. Gardener incorrectly reported them as still being referenced by shoot clusters. by @timuthy [#12195]
- `[USER]` An issue causing the in-place update to fail during credentials rotation without workers rollout is now fixed. by @shafeeqes [#12249]
## 🏃 Others

- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12293]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.118.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.3`
