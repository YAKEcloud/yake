# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @elankath [gardener/machine-controller-manager#866]
## 🏃 Others

- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @elankath [gardener/machine-controller-manager#866]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` New `Secret`s referenced in `ManagedResource`s will no longer be patched with the label `resources.gardener.cloud/garbage-collectable-reference` when the `ManagedResource` is reconciled. `Secret`s which already exist in the `ManagedResource` specification will still be patched if necessary. by @dimityrmirchev [#8788]
- `[OPERATOR]` ⚠️ The deprecated fields `spec.settings.dependencyWatchdog.endpoint` and `spec.settings.dependencyWatchdog.probe` have been removed from the Seed API. Please check your `Seed`s and remove any usage before upgrading to this Gardener version. by @himanshu-kun [#8747]
- `[USER]` A validation rule was added that forbids changing the primary DNS provider in `.spec.dns.providers` as soon as the shoot was scheduled. by @timuthy [#8761]
## 📰 Noteworthy

- `[DEVELOPER]` The `Secret` reconciler in `gardener-resource-manager` will now always remove its finalizer (if present). by @Kostov6 [#8745]
- `[DEVELOPER]` Vendoring has been removed from the project, i.e., there is no `vendor` folder anymore. by @afritzler [#8775]
## ✨ New Features

- `[OPERATOR]` The `deltaSnapshotRetentionPeriod` parameter has been introduced in the `etcdConfig` section of the `GardenletConfiguration`. This new feature allows users to configure the retention period for delta snapshots in the ETCD component. By making the delta snapshot retention period configurable, we provide a more flexible debugging experience. Delta snapshots can now be retained for a user-defined duration, offering a valuable window for reviewing changes in case of any issues.  by @seshachalam-yv [#8659]
- `[OPERATOR]` Enabled the `node-exporter`'s  [textfile collector](https://github.com/prometheus/node_exporter#textfile-collector). It will parse files matching the `*.prom` glob in the `/var/lib/node-exporter/textfile-collector` directory and load metrics from them so that they can be scraped by prometheus. by @plkokanov [#8721]
- `[OPERATOR]` Condition handling was improved for `Shoot`s of `ManagedSeed`s. Earlier, when unknown conditions were removed from seeds (e.g. maintained by third-party components), the affected condition was still present in the shoot's conditions. by @timuthy [#8736]
- `[USER]` The `kube-controller-manager` controllers are now disabled based on disabled APIs, which can be configured with `spec.kubernetes.kubeAPIServer.runtimeConfig` field in the Shoot API. All controllers are enabled by default for Shoot with workers. For workerless Shoots, some non-required APIs are disabled by default, which can be overridden by the above configuration. by @shafeeqes [#8763]
- `[DEVELOPER]` Use `ginkgolinter` instead of self baked `gomegacheck` by @afritzler [#8769]
## 🐛 Bug Fixes

- `[DEVELOPER]` A bug causing the crd generation for `druid.gardener.cloud` group to fail in extensions is now fixed. by @shafeeqes [#8789]
- `[OPERATOR]` During the `restore` phase of control plane migration, the `machine-controller-manager` is deployed with 0 replicas if it did not exist before or if it existed and was not scaled up yet. This fixes an issue that could cause the `Shoot`'s nodes to get recreated during control plane migration. by @plkokanov [#8742]
## 🏃 Others

- `[OPERATOR]` Control plane components `kube-apiserver`, `kube-controller-manager` and `kube-scheduler` now run as `nonroot` user and group `65532`. by @AleksandarSavchev [#8690]
- `[OPERATOR]` The credentials (CA) rotation has been made more robust. In some cases, the `Shoot` reconciliation stuck at `Deploying main and events etcd` when the rotation was in `Preparing` phase. by @timuthy [#8795]
- `[OPERATOR]` Control plane components `kube-apiserver`, `kube-controller-manager` and `kube-scheduler` now mount `key` files with `DefaultMode` set to `416`(`0640` permissions). by @AleksandarSavchev [#8790]
- `[OPERATOR]` Plutono is updated to v7.5.26.  
  Vali is updated to v2.2.11.  
  Kube-rbac-proxy is updated to v0.15.0. by @nickytd [#8799]
- `[OPERATOR]` The registry of the prometheus-operator image is switched from ghcr (`ghcr.io/prometheus-operator/prometheus-config-reloader`) to `quay.io` (`quay.io/prometheus-operator/prometheus-config-reloader`) because the ghcr does not support image pulls over IPv6. by @ialidzhikov [#8751]
- `[OPERATOR]` `gardener-apiserver` and `gardener-admission-controller` now mount `key` files with `DefaultMode` set to `416`(`0640` permissions). by @AleksandarSavchev [#8790]
- `[OPERATOR]` `NewClientForShoot` creates a client with a rest mapper using `LazyDiscovery`. by @acumino [#8781]
- `[OPERATOR]` Shoot control plane prometheus is now scraping kubelet volume metrics (`kubelet_volume_stats_available_bytes`, `kubelet_volume_stats_capacity_bytes` and `kubelet_volume_stats_used_bytes`) from the kube-system namespace. This allows Gardener extensions deploying PVCs to the Shoot's kube-system namespace (such as the registry-cache extension) to build alerting and plutono dashboard panels using these kubelet volume metrics. by @ialidzhikov [#8798]
- `[OPERATOR]` Prepare shared `component_descriptor` script for migration from GCR to Artifact Registry. by @ccwienk [#8755]
- `[OPERATOR]` metrics exposed by `cluster autoscaler` now scraped by `prometheus` by @aaronfern [#8750]
- `[DEVELOPER]` The component checklist is enhanced with 2 new rules for container images:  
  - Do not use container images from registries that don't support IPv6 - registries such as GHCR, ECR, MCR don't support image pulls over IPv6  
  - Do not use Shoot container images that are not multi-arch by @ialidzhikov [#8770]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.84.0`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.84.0`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.84.0`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.84.0`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.84.0`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.84.0`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.84.0`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.84.0`
