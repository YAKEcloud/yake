# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `controllerinstallation` controller should not recreate MR secrets that differ just in the order of annotations. by @Kostov6 [#10163]
## 🏃 Others

- `[OPERATOR]` Extend pending time to 30 minutes for `SeedCondtionFailing` alerts to reduce alert noise. by @vicwicker [#10187]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.2`
