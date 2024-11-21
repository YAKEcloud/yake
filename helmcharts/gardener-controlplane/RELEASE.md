# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `seed.gardener.cloud/eu-access=true` label (in `CloudProfile`s and `Seeds`) or seed selector (in `Shoot`s) is no longer removed when the `eu-access-only` restriction is removed from the `.spec.accessRestrictions[]` field. Similarly, the `support.gardener.cloud/eu-access-for-cluster-{addons,nodes}` annotations in `Shoot`s are no longer removed when they are removed from the `.spec.accessRestrictions[].options` field. by @rfranzke [#10885]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.108.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.108.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.108.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.108.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.108.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.108.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.108.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.108.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.108.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.108.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.108.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.108.1`
