---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update backup-s3 to <code>0.8.2</code></b></summary>

## General Changes

* Check if S3 bucket exists before creation (#25) @Gerrit91


</details>

<details>
<summary><b>Update shoot-flux to <code>0.25.0</code></b></summary>

## What's Changed

This release officially supports fluxcd>2.8

* 🤖 Update module golang.org/x/tools to v0.42.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/231
* 🤖 Update k8s.io/utils digest to b8788ab by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/232
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.28.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/228
* 🤖 Update k8s and gardener packages (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/239
* 🤖 Update module github.com/onsi/gomega to v1.39.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/227
* 🤖 Update docker/login-action action to v4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/240
* 🤖 Update fluxcd (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/235
* 🤖 Update k8s and gardener packages (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/241


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.24.1...v0.25.0

</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.37.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.37.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The name of the validating webhook configuration has been updated from `oidc-webhook-authenticator-shoot` to `oidc-webhook-authenticator` for better consistency with other resources naming. by @theoddora [[#433](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/433)]
- `[DEVELOPER]` The `GOARCH` makefile variable has been replaced by `TARGET_PLATFORM`. by @vpnachev [[#427](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/427)]

## ✨ New Features
- `[DEVELOPER]` Gardener extension `shoot-oidc-service` container image now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @vpnachev [[#427](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/427)]

## 🐛 Bug Fixes
- `[OPERATOR]` Switch the default port for exposing the extension mutating webhook to 10250. Configure `webhookConfig.serverPort` through values.yaml if you require a different port number. by @theoddora [[#439](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/439)]

## 🏃 Others
- `[OPERATOR]` `shoot-oidc-service` extension binaries are now built with Go 1.26.0. by @dependabot[bot] [[#440](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/440)]

# [github.com/gardener/oidc-webhook-authenticator:v0.42.0]

## 🏃 Others
- `[OPERATOR]` OWA is now built with Go 1.26.0 by @dependabot[bot] [[#220](https://github.com/gardener/oidc-webhook-authenticator/pull/220)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.37.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.37.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.53.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.53.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The `PLATFORM` makefile variable has been replaced by `TARGET_PLATFORM`. by @wpross [[#1272](https://github.com/gardener/gardener-extension-provider-openstack/pull/1272)]

## 📰 Noteworthy
- `[USER]` virtualCapacities can now be added to worker.providerConfig.nodeTemplate and will be mapped to the machineclass nodeTemplate by @aaronfern [[#1266](https://github.com/gardener/gardener-extension-provider-openstack/pull/1266)]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.35. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) before upgrading to 1.35. by @rfranzke [[#1256](https://github.com/gardener/gardener-extension-provider-openstack/pull/1256)]
- `[DEVELOPER]` Gardener extension provider-openstack container images now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @wpross [[#1272](https://github.com/gardener/gardener-extension-provider-openstack/pull/1272)]

## 🐛 Bug Fixes
- `[OPERATOR]` fix verbosity flag in manila csi-provider chart by @AndreasBurger [[#1277](https://github.com/gardener/gardener-extension-provider-openstack/pull/1277)]
- `[OPERATOR]` Fixed missing create event permissions in runtime cluster when publishing "became leader" event by @matthias-horne [[#1275](https://github.com/gardener/gardener-extension-provider-openstack/pull/1275)]
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @matthias-horne [[#1275](https://github.com/gardener/gardener-extension-provider-openstack/pull/1275)]
- `[USER]` Fixed an issue, where a router was not always created in the correct floating pool subnet if it was specified with a wildcard `*`. by @matthias-horne [[#1274](https://github.com/gardener/gardener-extension-provider-openstack/pull/1274)]

## 🏃 Others
- `[OPERATOR]` export testresults as inlined ocm-resource second trial by @heldkat [[#1265](https://github.com/gardener/gardener-extension-provider-openstack/pull/1265)]
- `[OPERATOR]` Allows to configure storage of etcd events in shoot cluster by @chungtd203338 [[#1080](https://github.com/gardener/gardener-extension-provider-openstack/pull/1080)]
- `[OPERATOR]` Add input validation for primary DNS provider secret referenced in the shoot spec. by @wpross [[#1259](https://github.com/gardener/gardener-extension-provider-openstack/pull/1259)]
- `[OPERATOR]` Fix cleanup logic when shoot is going to hibernation or waking up by @DockToFuture [[#1284](https://github.com/gardener/gardener-extension-provider-openstack/pull/1284)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#1270](https://github.com/gardener/gardener-extension-provider-openstack/pull/1270)]
- `[OPERATOR]` Prevent Calico from setting the `NetworkUnavailable` condition on nodes when overlay networking gets disabled, and ensures cleanup of existing Calico-set conditions. by @DockToFuture [[#1279](https://github.com/gardener/gardener-extension-provider-openstack/pull/1279)]
- `[USER]` worker.providerConfig.nodeTemplate can now be specified without having to add all core resources by @aaronfern [[#1266](https://github.com/gardener/gardener-extension-provider-openstack/pull/1266)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-attacher: v4.10.0 -> v4.11.0 (singleton)  
    - csi-driver-nfs: v4.12.1 -> v4.13.1 (singleton)  
    - csi-liveness-probe: v2.17.0 -> v2.18.0 (singleton)  
    - csi-node-driver-registrar: v2.15.0 -> v2.16.0 (singleton)  
    - csi-provisioner: v6.1.0 -> v6.1.1 (patch)  
    - csi-resizer: v2.0.0 -> v2.1.0 (minor)  
    - csi-snapshot-controller: v8.4.0 -> v8.5.0 (singleton)  
    - csi-snapshotter: v8.4.0 -> v8.5.0 (singleton) by @gardener-github-actions[bot] [[#1250](https://github.com/gardener/gardener-extension-provider-openstack/pull/1250)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.53.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.53.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.53.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.53.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.53.0`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.32.1</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-problemdetector:v0.32.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Missing go.mod dependency for nwpd was fixed by @domdom82 [[#342](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/pull/342)]

## Helm Charts
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.32.1`
## Container (OCI) Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.32.1`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.28.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-filter:v0.28.0]

## 🏃 Others
- `[OPERATOR]` Filter list secrets can be read from secrets in the shoot cluster. by @axel7born [[#335](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/335)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @ialidzhikov [[#325](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/325)]
- `[OPERATOR]` Hard resource limits are removed. by @domdom82 [[#330](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/330)]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.28.0`
- shoot-networking-filter-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-application:v0.28.0`
- shoot-networking-filter-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-runtime:v0.28.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.28.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-filter-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter-admission:v0.28.0`
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.28.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.28.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.5</code></b></summary>

# [github.com/gardener/gardener:v1.137.5]

## 🐛 Bug Fixes
- `[OPERATOR]` The per-worker-pool `node-local-dns` `Daemonset`s now also include the name of the worker in their label selector and in their Pods' labels. This resolves an issue where each of the corresponding `VPA`s targeted all `node-cache` containers from all of these `Daemonsets` resulting in incorrect resource recommendations. by @plkokanov [[#14295](https://github.com/gardener/gardener/pull/14295)]
- `[DEPENDENCY]` Fixing an issue where CA scale-downs were getting stuck when MCD replicas was updated with stale cache value of worker-controller by @r4mek [[#14293](https://github.com/gardener/gardener/pull/14293)]

## 🏃 Others
- `[OPERATOR]` The following dependency has been updated:  
  - `golang.org/x/net` from `v0.50.0` to `v0.51.0`. by @ScheererJ [[#14242](https://github.com/gardener/gardener/pull/14242)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.5`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.5</code></b></summary>

# [github.com/gardener/gardener:v1.137.5]

## 🐛 Bug Fixes
- `[OPERATOR]` The per-worker-pool `node-local-dns` `Daemonset`s now also include the name of the worker in their label selector and in their Pods' labels. This resolves an issue where each of the corresponding `VPA`s targeted all `node-cache` containers from all of these `Daemonsets` resulting in incorrect resource recommendations. by @plkokanov [[#14295](https://github.com/gardener/gardener/pull/14295)]
- `[DEPENDENCY]` Fixing an issue where CA scale-downs were getting stuck when MCD replicas was updated with stale cache value of worker-controller by @r4mek [[#14293](https://github.com/gardener/gardener/pull/14293)]

## 🏃 Others
- `[OPERATOR]` The following dependency has been updated:  
  - `golang.org/x/net` from `v0.50.0` to `v0.51.0`. by @ScheererJ [[#14242](https://github.com/gardener/gardener/pull/14242)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.5`


</details>

<details>
<summary><b>Update gardenlet to <code>1.137.5</code></b></summary>

# [github.com/gardener/gardener:v1.137.5]

## 🐛 Bug Fixes
- `[OPERATOR]` The per-worker-pool `node-local-dns` `Daemonset`s now also include the name of the worker in their label selector and in their Pods' labels. This resolves an issue where each of the corresponding `VPA`s targeted all `node-cache` containers from all of these `Daemonsets` resulting in incorrect resource recommendations. by @plkokanov [[#14295](https://github.com/gardener/gardener/pull/14295)]
- `[DEPENDENCY]` Fixing an issue where CA scale-downs were getting stuck when MCD replicas was updated with stale cache value of worker-controller by @r4mek [[#14293](https://github.com/gardener/gardener/pull/14293)]

## 🏃 Others
- `[OPERATOR]` The following dependency has been updated:  
  - `golang.org/x/net` from `v0.50.0` to `v0.51.0`. by @ScheererJ [[#14242](https://github.com/gardener/gardener/pull/14242)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.5`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.138.0</code></b></summary>

# [github.com/gardener/gardener:v1.138.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` `provider-extensions` setup has been replaced by `remote` setup which is `gardener-operator` based. by @oliver-goetz [[#13994](https://github.com/gardener/gardener/pull/13994)]
- `[DEVELOPER]` Makefile target  `make check-vulnerabilities` and `GO_VULN_CHECK` has been removed. by @acumino [[#14143](https://github.com/gardener/gardener/pull/14143)]
- `[DEVELOPER]` The local setup no longer requires manipulating the /etc/hosts file manually. Instead, a bind9 hosts the `local.gardener.cloud` DNS zone (accessible via 172.18.255.53 or fd00:ff::53).   
    
  Manual actions:  
  - Cleanup your /etc/hosts file by removing all entries for `local.gardener.cloud`  
  - If you are neither using macOS nor systemd-resolved you must manually configure the resolution of the `local.gardener.cloud` DNS zone via the local bind9 server. by @timebertt [[#14062](https://github.com/gardener/gardener/pull/14062)]
- `[DEVELOPER]` The kubeconfig of the runtime cluster in local setup was moved from `./example/gardener-local/kind/multi-zone/kubeconfig` to `./dev-setup/kubeconfigs/runtime/kubeconfig`. by @oliver-goetz [[#13994](https://github.com/gardener/gardener/pull/13994)]

## 📰 Noteworthy
- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDiscoveryServer` now accepts optional `domain` and `tlsSecretName` fields. Operators can use these to expose the OIDC discovery endpoint under a custom domain and optionally with a non-wildcard certificate. Additionally, validation now prevents disabling the discovery server once it is enabled, protecting already-issued tokens. The default behaviour is unchanged. by @jamand [[#14126](https://github.com/gardener/gardener/pull/14126)]
- `[OPERATOR]` prometheus-garden aggregates volume usage metrics from all seeds by @Kostov6 [[#13818](https://github.com/gardener/gardener/pull/13818)]
- `[OPERATOR]` Hard limits on nodelocaldns node cache have been removed. by @domdom82 [[#14200](https://github.com/gardener/gardener/pull/14200)]
- `[OPERATOR]` Hard memory limit on istio-ingress has been removed. Memory is managed by VPA in all cases now. by @domdom82 [[#14197](https://github.com/gardener/gardener/pull/14197)]
- `[OPERATOR]` The `VPAInPlaceUpdates` feature gate has been promoted to Beta and is enabled by default. by @vitanovs [[#14145](https://github.com/gardener/gardener/pull/14145)]

## ✨ New Features
- `[USER]` `gardenadm init/join` now supports `--zone` / `-z` flag to specify the node's availability zone. by @acumino [[#14081](https://github.com/gardener/gardener/pull/14081)]
- `[DEVELOPER]` Added optional DisplayName field to ShootAdvertisedAddress allowing UI friendly names for advertised endpoints via the endpoint.shoot.gardener.cloud/displayName Ingress label. by @nickytd [[#14140](https://github.com/gardener/gardener/pull/14140)]
- `[DEVELOPER]` `gardener-node-agent` can optionally coordinate `OperatingSystemConfig` reconciliation amongst other instances. This is helpful if you want to ensure that only one instance reconciles at a time. Read all about it [here](https://gardener.cloud/docs/gardener/concepts/node-agent/#serial-reconciliation). by @rfranzke [[#14129](https://github.com/gardener/gardener/pull/14129)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed a race condition in the `ControllerInstallation` reconciler that could create duplicate installations due to reading from a stale informer cache instead of the API server. by @rickardsjp [[#14274](https://github.com/gardener/gardener/pull/14274)]
- `[OPERATOR]` Add a network policy label for allowing communication from the OpenTelemetryCollector in the control plane to the Shoot Kubernetes API Server. by @rrhubenov [[#14196](https://github.com/gardener/gardener/pull/14196)]
- `[OPERATOR]` The per-worker-pool `node-local-dns` `Daemonset`s now also include the name of the worker in their label selector and in their Pods' labels. This resolves an issue where each of the corresponding `VPA`s targeted all `node-cache` containers from all of these `Daemonsets` resulting in incorrect resource recommendations. by @plkokanov [[#14294](https://github.com/gardener/gardener/pull/14294)]
- `[OPERATOR]` An issues has been fixed causing `gardener-resource-manager` crash loops in large clusters. by @timuthy [[#14212](https://github.com/gardener/gardener/pull/14212)]
- `[USER]` The machines of a deleted worker pool are able to join back cluster in healthy state. by @aniruddha2000 [[#13715](https://github.com/gardener/gardener/pull/13715)]
- `[DEVELOPER]` The healthcheck controller now supports the seed extension class. by @hown3d [[#14162](https://github.com/gardener/gardener/pull/14162)]
- `[DEPENDENCY]` Fixing an issue where CA scale-downs were getting stuck when MCD replicas was updated with stale cache value of worker-controller by @r4mek [[#14291](https://github.com/gardener/gardener/pull/14291)]

## 🏃 Others
- `[OPERATOR]` The dependency-watchdog component no longer defines resource limits. by @ashwani2k [[#14193](https://github.com/gardener/gardener/pull/14193)]
- `[OPERATOR]` Fluent-bit resource limits are increased. by @nickytd [[#14205](https://github.com/gardener/gardener/pull/14205)]
- `[OPERATOR]` CoreDNS memory limit has been removed. by @domdom82 [[#14163](https://github.com/gardener/gardener/pull/14163)]
- `[OPERATOR]` The following dependency has been updated:  
  - `golang.org/x/net` from `v0.50.0` to `v0.51.0`. by @ScheererJ [[#14234](https://github.com/gardener/gardener/pull/14234)]
- `[OPERATOR]` Fix CRD conversion webhook metric name by @chrkl [[#14209](https://github.com/gardener/gardener/pull/14209)]
- `[OPERATOR]` Following logging stack components are updated `fluent-bit` to v4.2.3, `fluent-bit-plugin` to v1.2.0 and `fluent-operator` to v3.7.0 by @nickytd [[#14256](https://github.com/gardener/gardener/pull/14256)]
- `[OPERATOR]` A regression in Gardener Node Agent that can occur on Debian based OS images and that prevents it to successfully reconcile nodes that run a containerd version that contains - according to semver - invalid characters in its version number was fixed. by @MrBatschner [[#14177](https://github.com/gardener/gardener/pull/14177)]
- `[OPERATOR]` The `UseUnifiedHTTPProxyPort` (part of GEP-30) can be disabled without disruption to shoots already using the unified HTTP proxy port. by @maboehm [[#14169](https://github.com/gardener/gardener/pull/14169)]
- `[OPERATOR]` Add startup probe to gardener-metrics-exporter by @chrkl [[#14207](https://github.com/gardener/gardener/pull/14207)]
- `[OPERATOR]` Added `nodeCIDRMaskSizeIPv6` field to `KubeControllerManagerConfig` to allow configuring the IPv6 node CIDR mask size (defaults to 64). This enables more flexible IPv6 network configurations in both dual-stack and IPv6-only clusters. by @axel7born [[#13955](https://github.com/gardener/gardener/pull/13955)]
- `[DEVELOPER]` A new `supported-kubernetes-versions.yaml` file is introduced in the root of the project. It describes the supported Kubernetes versions by Gardener in a machine-readable format. A machinery can use this file to build automation for the supported Kubernetes versions in a CloudProfile. by @ialidzhikov [[#14191](https://github.com/gardener/gardener/pull/14191)]
- `[DEVELOPER]` The RBAC for fluent-operator is allowing watching pods and namespaces resources, required by `gardener-otelcol-extension` scenario. by @nickytd [[#14265](https://github.com/gardener/gardener/pull/14265)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.7` to `1.83.8`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.8) by @gardener-ci-robot [[#14225](https://github.com/gardener/gardener/pull/14225)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.6` to `1.83.7`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.7) by @gardener-ci-robot [[#14201](https://github.com/gardener/gardener/pull/14201)]
- `[DEPENDENCY]` A new helper function is introduced to check for dual-stack IP family - `github.com/gardener/gardener/pkg/apis/{core,core/v1beta1}.IsDualStack`. by @hebelsan [[#13659](https://github.com/gardener/gardener/pull/13659)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.20.2` to `v0.21.0`. by @gardener-ci-robot [[#14168](https://github.com/gardener/gardener/pull/14168)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses` from `v0.52.0` to `v0.53.0`. [Release Notes](https://redirect.github.com/perses/perses/releases/tag/v0.53.0) by @gardener-ci-robot [[#14164](https://github.com/gardener/gardener/pull/14164)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.138.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.138.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.138.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.138.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.138.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.138.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.138.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.138.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.138.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.138.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.138.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.138.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.138.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.138.0</code></b></summary>

# [github.com/gardener/gardener:v1.138.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` `provider-extensions` setup has been replaced by `remote` setup which is `gardener-operator` based. by @oliver-goetz [[#13994](https://github.com/gardener/gardener/pull/13994)]
- `[DEVELOPER]` Makefile target  `make check-vulnerabilities` and `GO_VULN_CHECK` has been removed. by @acumino [[#14143](https://github.com/gardener/gardener/pull/14143)]
- `[DEVELOPER]` The local setup no longer requires manipulating the /etc/hosts file manually. Instead, a bind9 hosts the `local.gardener.cloud` DNS zone (accessible via 172.18.255.53 or fd00:ff::53).   
    
  Manual actions:  
  - Cleanup your /etc/hosts file by removing all entries for `local.gardener.cloud`  
  - If you are neither using macOS nor systemd-resolved you must manually configure the resolution of the `local.gardener.cloud` DNS zone via the local bind9 server. by @timebertt [[#14062](https://github.com/gardener/gardener/pull/14062)]
- `[DEVELOPER]` The kubeconfig of the runtime cluster in local setup was moved from `./example/gardener-local/kind/multi-zone/kubeconfig` to `./dev-setup/kubeconfigs/runtime/kubeconfig`. by @oliver-goetz [[#13994](https://github.com/gardener/gardener/pull/13994)]

## 📰 Noteworthy
- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDiscoveryServer` now accepts optional `domain` and `tlsSecretName` fields. Operators can use these to expose the OIDC discovery endpoint under a custom domain and optionally with a non-wildcard certificate. Additionally, validation now prevents disabling the discovery server once it is enabled, protecting already-issued tokens. The default behaviour is unchanged. by @jamand [[#14126](https://github.com/gardener/gardener/pull/14126)]
- `[OPERATOR]` prometheus-garden aggregates volume usage metrics from all seeds by @Kostov6 [[#13818](https://github.com/gardener/gardener/pull/13818)]
- `[OPERATOR]` Hard limits on nodelocaldns node cache have been removed. by @domdom82 [[#14200](https://github.com/gardener/gardener/pull/14200)]
- `[OPERATOR]` Hard memory limit on istio-ingress has been removed. Memory is managed by VPA in all cases now. by @domdom82 [[#14197](https://github.com/gardener/gardener/pull/14197)]
- `[OPERATOR]` The `VPAInPlaceUpdates` feature gate has been promoted to Beta and is enabled by default. by @vitanovs [[#14145](https://github.com/gardener/gardener/pull/14145)]

## ✨ New Features
- `[USER]` `gardenadm init/join` now supports `--zone` / `-z` flag to specify the node's availability zone. by @acumino [[#14081](https://github.com/gardener/gardener/pull/14081)]
- `[DEVELOPER]` Added optional DisplayName field to ShootAdvertisedAddress allowing UI friendly names for advertised endpoints via the endpoint.shoot.gardener.cloud/displayName Ingress label. by @nickytd [[#14140](https://github.com/gardener/gardener/pull/14140)]
- `[DEVELOPER]` `gardener-node-agent` can optionally coordinate `OperatingSystemConfig` reconciliation amongst other instances. This is helpful if you want to ensure that only one instance reconciles at a time. Read all about it [here](https://gardener.cloud/docs/gardener/concepts/node-agent/#serial-reconciliation). by @rfranzke [[#14129](https://github.com/gardener/gardener/pull/14129)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed a race condition in the `ControllerInstallation` reconciler that could create duplicate installations due to reading from a stale informer cache instead of the API server. by @rickardsjp [[#14274](https://github.com/gardener/gardener/pull/14274)]
- `[OPERATOR]` Add a network policy label for allowing communication from the OpenTelemetryCollector in the control plane to the Shoot Kubernetes API Server. by @rrhubenov [[#14196](https://github.com/gardener/gardener/pull/14196)]
- `[OPERATOR]` The per-worker-pool `node-local-dns` `Daemonset`s now also include the name of the worker in their label selector and in their Pods' labels. This resolves an issue where each of the corresponding `VPA`s targeted all `node-cache` containers from all of these `Daemonsets` resulting in incorrect resource recommendations. by @plkokanov [[#14294](https://github.com/gardener/gardener/pull/14294)]
- `[OPERATOR]` An issues has been fixed causing `gardener-resource-manager` crash loops in large clusters. by @timuthy [[#14212](https://github.com/gardener/gardener/pull/14212)]
- `[USER]` The machines of a deleted worker pool are able to join back cluster in healthy state. by @aniruddha2000 [[#13715](https://github.com/gardener/gardener/pull/13715)]
- `[DEVELOPER]` The healthcheck controller now supports the seed extension class. by @hown3d [[#14162](https://github.com/gardener/gardener/pull/14162)]
- `[DEPENDENCY]` Fixing an issue where CA scale-downs were getting stuck when MCD replicas was updated with stale cache value of worker-controller by @r4mek [[#14291](https://github.com/gardener/gardener/pull/14291)]

## 🏃 Others
- `[OPERATOR]` The dependency-watchdog component no longer defines resource limits. by @ashwani2k [[#14193](https://github.com/gardener/gardener/pull/14193)]
- `[OPERATOR]` Fluent-bit resource limits are increased. by @nickytd [[#14205](https://github.com/gardener/gardener/pull/14205)]
- `[OPERATOR]` CoreDNS memory limit has been removed. by @domdom82 [[#14163](https://github.com/gardener/gardener/pull/14163)]
- `[OPERATOR]` The following dependency has been updated:  
  - `golang.org/x/net` from `v0.50.0` to `v0.51.0`. by @ScheererJ [[#14234](https://github.com/gardener/gardener/pull/14234)]
- `[OPERATOR]` Fix CRD conversion webhook metric name by @chrkl [[#14209](https://github.com/gardener/gardener/pull/14209)]
- `[OPERATOR]` Following logging stack components are updated `fluent-bit` to v4.2.3, `fluent-bit-plugin` to v1.2.0 and `fluent-operator` to v3.7.0 by @nickytd [[#14256](https://github.com/gardener/gardener/pull/14256)]
- `[OPERATOR]` A regression in Gardener Node Agent that can occur on Debian based OS images and that prevents it to successfully reconcile nodes that run a containerd version that contains - according to semver - invalid characters in its version number was fixed. by @MrBatschner [[#14177](https://github.com/gardener/gardener/pull/14177)]
- `[OPERATOR]` The `UseUnifiedHTTPProxyPort` (part of GEP-30) can be disabled without disruption to shoots already using the unified HTTP proxy port. by @maboehm [[#14169](https://github.com/gardener/gardener/pull/14169)]
- `[OPERATOR]` Add startup probe to gardener-metrics-exporter by @chrkl [[#14207](https://github.com/gardener/gardener/pull/14207)]
- `[OPERATOR]` Added `nodeCIDRMaskSizeIPv6` field to `KubeControllerManagerConfig` to allow configuring the IPv6 node CIDR mask size (defaults to 64). This enables more flexible IPv6 network configurations in both dual-stack and IPv6-only clusters. by @axel7born [[#13955](https://github.com/gardener/gardener/pull/13955)]
- `[DEVELOPER]` A new `supported-kubernetes-versions.yaml` file is introduced in the root of the project. It describes the supported Kubernetes versions by Gardener in a machine-readable format. A machinery can use this file to build automation for the supported Kubernetes versions in a CloudProfile. by @ialidzhikov [[#14191](https://github.com/gardener/gardener/pull/14191)]
- `[DEVELOPER]` The RBAC for fluent-operator is allowing watching pods and namespaces resources, required by `gardener-otelcol-extension` scenario. by @nickytd [[#14265](https://github.com/gardener/gardener/pull/14265)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.7` to `1.83.8`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.8) by @gardener-ci-robot [[#14225](https://github.com/gardener/gardener/pull/14225)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.6` to `1.83.7`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.7) by @gardener-ci-robot [[#14201](https://github.com/gardener/gardener/pull/14201)]
- `[DEPENDENCY]` A new helper function is introduced to check for dual-stack IP family - `github.com/gardener/gardener/pkg/apis/{core,core/v1beta1}.IsDualStack`. by @hebelsan [[#13659](https://github.com/gardener/gardener/pull/13659)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.20.2` to `v0.21.0`. by @gardener-ci-robot [[#14168](https://github.com/gardener/gardener/pull/14168)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses` from `v0.52.0` to `v0.53.0`. [Release Notes](https://redirect.github.com/perses/perses/releases/tag/v0.53.0) by @gardener-ci-robot [[#14164](https://github.com/gardener/gardener/pull/14164)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.138.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.138.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.138.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.138.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.138.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.138.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.138.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.138.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.138.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.138.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.138.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.138.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.138.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.138.0</code></b></summary>

# [github.com/gardener/gardener:v1.138.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` `provider-extensions` setup has been replaced by `remote` setup which is `gardener-operator` based. by @oliver-goetz [[#13994](https://github.com/gardener/gardener/pull/13994)]
- `[DEVELOPER]` Makefile target  `make check-vulnerabilities` and `GO_VULN_CHECK` has been removed. by @acumino [[#14143](https://github.com/gardener/gardener/pull/14143)]
- `[DEVELOPER]` The local setup no longer requires manipulating the /etc/hosts file manually. Instead, a bind9 hosts the `local.gardener.cloud` DNS zone (accessible via 172.18.255.53 or fd00:ff::53).   
    
  Manual actions:  
  - Cleanup your /etc/hosts file by removing all entries for `local.gardener.cloud`  
  - If you are neither using macOS nor systemd-resolved you must manually configure the resolution of the `local.gardener.cloud` DNS zone via the local bind9 server. by @timebertt [[#14062](https://github.com/gardener/gardener/pull/14062)]
- `[DEVELOPER]` The kubeconfig of the runtime cluster in local setup was moved from `./example/gardener-local/kind/multi-zone/kubeconfig` to `./dev-setup/kubeconfigs/runtime/kubeconfig`. by @oliver-goetz [[#13994](https://github.com/gardener/gardener/pull/13994)]

## 📰 Noteworthy
- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDiscoveryServer` now accepts optional `domain` and `tlsSecretName` fields. Operators can use these to expose the OIDC discovery endpoint under a custom domain and optionally with a non-wildcard certificate. Additionally, validation now prevents disabling the discovery server once it is enabled, protecting already-issued tokens. The default behaviour is unchanged. by @jamand [[#14126](https://github.com/gardener/gardener/pull/14126)]
- `[OPERATOR]` prometheus-garden aggregates volume usage metrics from all seeds by @Kostov6 [[#13818](https://github.com/gardener/gardener/pull/13818)]
- `[OPERATOR]` Hard limits on nodelocaldns node cache have been removed. by @domdom82 [[#14200](https://github.com/gardener/gardener/pull/14200)]
- `[OPERATOR]` Hard memory limit on istio-ingress has been removed. Memory is managed by VPA in all cases now. by @domdom82 [[#14197](https://github.com/gardener/gardener/pull/14197)]
- `[OPERATOR]` The `VPAInPlaceUpdates` feature gate has been promoted to Beta and is enabled by default. by @vitanovs [[#14145](https://github.com/gardener/gardener/pull/14145)]

## ✨ New Features
- `[USER]` `gardenadm init/join` now supports `--zone` / `-z` flag to specify the node's availability zone. by @acumino [[#14081](https://github.com/gardener/gardener/pull/14081)]
- `[DEVELOPER]` Added optional DisplayName field to ShootAdvertisedAddress allowing UI friendly names for advertised endpoints via the endpoint.shoot.gardener.cloud/displayName Ingress label. by @nickytd [[#14140](https://github.com/gardener/gardener/pull/14140)]
- `[DEVELOPER]` `gardener-node-agent` can optionally coordinate `OperatingSystemConfig` reconciliation amongst other instances. This is helpful if you want to ensure that only one instance reconciles at a time. Read all about it [here](https://gardener.cloud/docs/gardener/concepts/node-agent/#serial-reconciliation). by @rfranzke [[#14129](https://github.com/gardener/gardener/pull/14129)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed a race condition in the `ControllerInstallation` reconciler that could create duplicate installations due to reading from a stale informer cache instead of the API server. by @rickardsjp [[#14274](https://github.com/gardener/gardener/pull/14274)]
- `[OPERATOR]` Add a network policy label for allowing communication from the OpenTelemetryCollector in the control plane to the Shoot Kubernetes API Server. by @rrhubenov [[#14196](https://github.com/gardener/gardener/pull/14196)]
- `[OPERATOR]` The per-worker-pool `node-local-dns` `Daemonset`s now also include the name of the worker in their label selector and in their Pods' labels. This resolves an issue where each of the corresponding `VPA`s targeted all `node-cache` containers from all of these `Daemonsets` resulting in incorrect resource recommendations. by @plkokanov [[#14294](https://github.com/gardener/gardener/pull/14294)]
- `[OPERATOR]` An issues has been fixed causing `gardener-resource-manager` crash loops in large clusters. by @timuthy [[#14212](https://github.com/gardener/gardener/pull/14212)]
- `[USER]` The machines of a deleted worker pool are able to join back cluster in healthy state. by @aniruddha2000 [[#13715](https://github.com/gardener/gardener/pull/13715)]
- `[DEVELOPER]` The healthcheck controller now supports the seed extension class. by @hown3d [[#14162](https://github.com/gardener/gardener/pull/14162)]
- `[DEPENDENCY]` Fixing an issue where CA scale-downs were getting stuck when MCD replicas was updated with stale cache value of worker-controller by @r4mek [[#14291](https://github.com/gardener/gardener/pull/14291)]

## 🏃 Others
- `[OPERATOR]` The dependency-watchdog component no longer defines resource limits. by @ashwani2k [[#14193](https://github.com/gardener/gardener/pull/14193)]
- `[OPERATOR]` Fluent-bit resource limits are increased. by @nickytd [[#14205](https://github.com/gardener/gardener/pull/14205)]
- `[OPERATOR]` CoreDNS memory limit has been removed. by @domdom82 [[#14163](https://github.com/gardener/gardener/pull/14163)]
- `[OPERATOR]` The following dependency has been updated:  
  - `golang.org/x/net` from `v0.50.0` to `v0.51.0`. by @ScheererJ [[#14234](https://github.com/gardener/gardener/pull/14234)]
- `[OPERATOR]` Fix CRD conversion webhook metric name by @chrkl [[#14209](https://github.com/gardener/gardener/pull/14209)]
- `[OPERATOR]` Following logging stack components are updated `fluent-bit` to v4.2.3, `fluent-bit-plugin` to v1.2.0 and `fluent-operator` to v3.7.0 by @nickytd [[#14256](https://github.com/gardener/gardener/pull/14256)]
- `[OPERATOR]` A regression in Gardener Node Agent that can occur on Debian based OS images and that prevents it to successfully reconcile nodes that run a containerd version that contains - according to semver - invalid characters in its version number was fixed. by @MrBatschner [[#14177](https://github.com/gardener/gardener/pull/14177)]
- `[OPERATOR]` The `UseUnifiedHTTPProxyPort` (part of GEP-30) can be disabled without disruption to shoots already using the unified HTTP proxy port. by @maboehm [[#14169](https://github.com/gardener/gardener/pull/14169)]
- `[OPERATOR]` Add startup probe to gardener-metrics-exporter by @chrkl [[#14207](https://github.com/gardener/gardener/pull/14207)]
- `[OPERATOR]` Added `nodeCIDRMaskSizeIPv6` field to `KubeControllerManagerConfig` to allow configuring the IPv6 node CIDR mask size (defaults to 64). This enables more flexible IPv6 network configurations in both dual-stack and IPv6-only clusters. by @axel7born [[#13955](https://github.com/gardener/gardener/pull/13955)]
- `[DEVELOPER]` A new `supported-kubernetes-versions.yaml` file is introduced in the root of the project. It describes the supported Kubernetes versions by Gardener in a machine-readable format. A machinery can use this file to build automation for the supported Kubernetes versions in a CloudProfile. by @ialidzhikov [[#14191](https://github.com/gardener/gardener/pull/14191)]
- `[DEVELOPER]` The RBAC for fluent-operator is allowing watching pods and namespaces resources, required by `gardener-otelcol-extension` scenario. by @nickytd [[#14265](https://github.com/gardener/gardener/pull/14265)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.7` to `1.83.8`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.8) by @gardener-ci-robot [[#14225](https://github.com/gardener/gardener/pull/14225)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.6` to `1.83.7`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.7) by @gardener-ci-robot [[#14201](https://github.com/gardener/gardener/pull/14201)]
- `[DEPENDENCY]` A new helper function is introduced to check for dual-stack IP family - `github.com/gardener/gardener/pkg/apis/{core,core/v1beta1}.IsDualStack`. by @hebelsan [[#13659](https://github.com/gardener/gardener/pull/13659)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.20.2` to `v0.21.0`. by @gardener-ci-robot [[#14168](https://github.com/gardener/gardener/pull/14168)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses` from `v0.52.0` to `v0.53.0`. [Release Notes](https://redirect.github.com/perses/perses/releases/tag/v0.53.0) by @gardener-ci-robot [[#14164](https://github.com/gardener/gardener/pull/14164)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.138.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.138.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.138.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.138.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.138.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.138.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.138.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.138.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.138.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.138.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.138.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.138.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.138.0`


</details>
