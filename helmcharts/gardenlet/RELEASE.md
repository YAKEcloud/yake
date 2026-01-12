# [github.com/gardener/gardener:v1.134.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Refactor the collector `journald` receiver to capture kernel logs via a more stable method. by @rrhubenov [[#13730](https://github.com/gardener/gardener/pull/13730)]
- `[OPERATOR]` An issue causing credentials rotation for the Garden resource to fail is now fixed. by @ialidzhikov [[#13738](https://github.com/gardener/gardener/pull/13738)]
- `[DEVELOPER]` Change the registry port in the local setup to `:5001`. by @LucaBernstein [[#13672](https://github.com/gardener/gardener/pull/13672)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.1`
