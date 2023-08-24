# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The following mapper funcs from the extension library no longer accept a `context.Context` arg - `ClusterToContainerResourceMapper`, `ClusterToControlPlaneMapper`, `ClusterToDNSRecordMapper`, `ClusterToExtensionMapper`, `ClusterToInfrastructureMapper`, `ClusterToNetworkMapper`, `ClusterToWorkerMapper` and `ClusterToObjectMapper`. The `context.Context` arg was redundant and not used. by @acumino [#8321]
- `[USER]` Deprecated annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns` is removed. Use field `.spec.systemComponents.nodeLocalDNS.enabled` in `Shoot` instead. Switching on node-local-dns via shoot specification will roll the nodes even if node-local-dns was enabled beforehand via annotation. by @acumino [#8364]
- `[USER]` Deprecated annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns-force-tcp-to-{cluster-dns, upstream-dns}` is removed. Use field `.spec.systemComponents.nodeLocalDNS.{forceTCPToClusterDNS, forceTCPToUpstreamDNS}` in `Shoot` instead. by @acumino [#8364]
## ✨ New Features

- `[OPERATOR]` `kubectl get garden` now features additional printer column `Observability` providing information about the Observability components of the runtime cluster. by @gardener-ci-robot [#8384]
- `[OPERATOR]` It is possible now to trigger a seed reconciliation by annotating the Seed with `gardener.cloud/operation=reconcile`. by @shafeeqes [#8347]
- `[OPERATOR]` Status of `garden` now includes the `ObservabilityComponentsHealthy` condition which show the health of observability components in the garden runtime-cluster. by @oliver-goetz [#8346]
## 🐛 Bug Fixes

- `[OPERATOR]` `operator` now deletes `ManagedResources` deployed to the virtual-garden before deleting `virtual-garden-kube-apiserver`. by @oliver-goetz [#8368]
- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @istvanballok [#8371]
- `[OPERATOR]` A bug is fixed that rendered the "CPU usage" panel of the "VPN" Plutono dashboard blank. by @gardener-ci-robot [#8392]
- `[OPERATOR]` A bug is fixed in the Prometheus alert definitions that caused false positive KubePodNotReadyControlPlane alerts related to the etcd compaction job. by @rickardsjp [#8361]
## 🏃 Others

- `[OPERATOR]` Shoot node network and seed pod network need to be disjoint. This will be checked during scheduling of a shoot cluster, i.e. during initial admission or on control-plane migration. by @ScheererJ [#8353]
- `[OPERATOR]` Prometheus scrape job configs for targets in the shoot cluster have been improved. by @rickardsjp [#8360]
- `[OPERATOR]` The following images are updated:  
  - registry.k8s.io/metrics-server/metrics-server: v0.6.3 -> v0.6.4  
  - registry.k8s.io/cpa/cluster-proportional-autoscaler: v1.8.8 -> v1.8.9  
  - registry.k8s.io/coredns/coredns: v1.10.0 -> v1.10.1  
  - quay.io/prometheus/blackbox-exporter: v0.23.0 -> v0.24.0  
  - quay.io/prometheus/node-exporter: v1.5.0 -> v1.6.1  
  - ghcr.io/credativ/plutono: v7.5.22 -> v7.5.23  
  - ghcr.io/prometheus-operator/prometheus-config-reloader: v0.61.1 -> v0.67.1  
  - registry.k8s.io/dns/k8s-dns-node-cache: 1.22.20 -> 1.22.23 by @ialidzhikov [#8324]
- `[OPERATOR]` The following images are updated:  
  - `registry.k8s.io/kube-state-metrics/kube-state-metrics`: `v2.5.0` -> `v2.8.2` by @gardener-ci-robot [#8391]
- `[OPERATOR]` `gardener-operator` now takes over management of `plutono`. by @acumino [#8301]
- `[OPERATOR]` `kubectl proxy` now works as expected in the local development setup in conjunction with highly available vpn by @ScheererJ [#8370]
- `[DEPENDENCY]` Backupbucket/backupentry controllers: watch secret metadata only by @MartinWeindel [#8348]
- `[DEVELOPER]` Test-machinery integration tests are now using upstream K8s e2e test images such as `registry.k8s.io/e2e-test-images/busybox`, `registry.k8s.io/e2e-test-images/agnhost` instead Gardener images such as `eu.gcr.io/gardener-project/3rd/busybox`, `eu.gcr.io/gardener-project/3rd/alpine` and others. by @ialidzhikov [#8341]
# [gardener/etcd-druid]

## 🏃 Others

- `[OPERATOR]` Upgrade gardener/gardener from `1.65.0` to `1.76.0` by @acumino [gardener/etcd-druid#657]
- `[OPERATOR]` All default images are now present in `images.yaml` by @aaronfern [gardener/etcd-druid#673]
# [gardener/dependency-watchdog]

## 🏃 Others

- `[OPERATOR]` Bump g/g version to remove stale client-go dependency by @rishabh-11 [gardener/dependency-watchdog#92]
# [gardener/hvpa-controller]

## 🏃 Others

- `[OPERATOR]` Updated go to 1.20.7 by @voelzmo [gardener/hvpa-controller#126]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.78.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.78.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.78.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.78.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.78.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.78.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.78.0`