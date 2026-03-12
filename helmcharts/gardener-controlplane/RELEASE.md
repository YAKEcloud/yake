# [github.com/gardener/gardener:v1.135.4]

## 🐛 Bug Fixes
- `[OPERATOR]` Additional finetuning to the `Collector` configuration has been applied for improved memory usage. by @rrhubenov [[#14130](https://github.com/gardener/gardener/pull/14130)]
- `[OPERATOR]` The per-worker-pool `node-local-dns` `Daemonset`s now also include the name of the worker in their label selector and in their Pods' labels. This resolves an issue where each of the corresponding `VPA`s targeted all `node-cache` containers from all of these `Daemonsets` resulting in incorrect resource recommendations. by @plkokanov [[#14297](https://github.com/gardener/gardener/pull/14297)]
- `[OPERATOR]` Fixed an issue with the maximum batch size that the `OpenTelemetry Collector` instances can send. by @rrhubenov [[#14130](https://github.com/gardener/gardener/pull/14130)]
- `[OPERATOR]` Add a network policy label for allowing communication from the OpenTelemetryCollector in the control plane to the Shoot Kubernetes API Server. by @rrhubenov [[#14223](https://github.com/gardener/gardener/pull/14223)]
- `[DEPENDENCY]` Fixing an issue where CA scale-downs were getting stuck when MCD replicas was updated with stale cache value of worker-controller by @r4mek [[#14299](https://github.com/gardener/gardener/pull/14299)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.135.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.135.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.135.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.135.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.135.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.135.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.135.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.135.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.135.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.135.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.135.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.135.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.135.4`
