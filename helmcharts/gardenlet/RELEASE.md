# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed which prevented `Shoot`s using Alertmanager from getting stuck in reconciliation with error `last error: more than one PV found with label disk-migration.monitoring.gardener.cloud/pvc-name=alertmanager-db-alertmanager-0`. by @rfranzke [#9341]
- `[USER]` A bug has been fixed which reported false negative health checks for the `ObservabilityComponentsHealthy` condition on `Shoot`s using Alertmanager if they have been reconciled with Gardener `>= 1.90`. by @rfranzke [#9340]
- `[USER]` An issue has been fixed which was causing scale-downs of `kube-controller-manager` and similar controllers due to prevented deletion of orphaned node `Lease`s. by @rfranzke [#9351]
- `[OPERATOR]` A bug causing the `gardener-resource-manager` configmap to be garbage collected because of missing reference annotation is now fixed. by @aaronfern [#9347]
- `[OPERATOR]` An issue causing the reconciliation of backupentries to be stuck when the extension fails to populate the status is now fixed. by @shafeeqes [#9336]
## 🏃 Others

- `[OPERATOR]` The skaffold version is downgraded from v2.10.1 to v2.9.0 to fix an issue with skaffold not detecting code changes on `make gardener-up`. by @dimityrmirchev [#9328]
- `[OPERATOR]` NodeNotHealthy prometheus alert disregards nodes with `deployment.machine.sapcloud.io/prefer-no-schedule` taint by @adenitiu [#9346]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.90.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.90.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.90.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.90.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.90.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.90.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.90.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.90.1`
