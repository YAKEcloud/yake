# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A permission issue was fixed that prevented the `VPAEvictionRequirements` controller to patch `VPA` resources in the garden runtime cluster, in case it is also registered as a seed. by @timuthy [#11143]
## 🏃 Others

- `[DEVELOPER]` The order of the predicates for extension controllers has been changed to ensure that class and types are checked first.   
  This avoids side effects by the passed predicates especially if the controller runs on the runtime cluster. by @oliver-goetz [#11133]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.2`
