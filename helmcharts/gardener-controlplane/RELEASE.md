# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A race condition has been fixed which could cause unrelated `Pod`s to claim the `PersistentVolume` of a Prometheus or Alertmanager deployment during migration to the management of `prometheus-operator`. by @rfranzke [#9841]
- `[OPERATOR]` A bug has been fixed which prevented Plutono dashboards contributed from extensions to appear in the UI. by @rfranzke [#9809]
- `[USER]` A bug has been fixed which prevented `Shoot` deletion in case it was still annotated with `maintenance.gardener.cloud/operation`. by @rfranzke [#9860]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.94.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.94.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.94.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.94.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.94.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.94.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.94.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.94.3`
