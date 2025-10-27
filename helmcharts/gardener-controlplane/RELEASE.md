# [github.com/gardener/gardener:v1.130.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue has been fixed which was preventing `gardenlet` from registering its `Gardenlet` resource when `selfUpgrade` was set in its Helm chart values. by @rfranzke [[#13244](https://github.com/gardener/gardener/pull/13244)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.1` to `v1.32.2`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.2) by @gardener-ci-robot [[#13246](https://github.com/gardener/gardener/pull/13246)]
- `[OPERATOR]` Fixed an issue that caused the `worker-pools-operatingsystemconfig-hashes` secret to be created as immutable during the restore phase of control plane migration. by @plkokanov [[#13271](https://github.com/gardener/gardener/pull/13271)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.130.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.130.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.130.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.130.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.130.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.130.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.130.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.130.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.130.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.130.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.130.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.130.1`
