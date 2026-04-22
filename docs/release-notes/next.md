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
<summary><b>Update gardener-controlplane to <code>1.139.1</code></b></summary>

# [github.com/gardener/gardener:v1.139.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix a bug where the `shoot-care` controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and updated DNS credentials, i.e. `shoot.spec.dns.providers[].credentialsRef`, until the shoot is reconciled. by @vpnachev [[#14444](https://github.com/gardener/gardener/pull/14444)]

## 🏃 Others
- `[OPERATOR]` There is now `maxConnectionDuration` of 1 day for connections to kube-apiserver endpoints. Their `maxConnections` limit has been removed. by @oliver-goetz [[#14471](https://github.com/gardener/gardener/pull/14471)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.34.0` to `v1.34.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.34.1)  
  - `gardener/autoscaler` from `v1.33.0` to `v1.33.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.33.1)  
  - `gardener/autoscaler` from `v1.32.2` to `v1.32.3`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.3)  
  - `gardener/autoscaler` from `v1.31.0` to `v1.31.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.31.1)  
  - `gardener/autoscaler` from `v1.30.2` to `v1.30.3`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.30.3) by @aaronfern [[#14500](https://github.com/gardener/gardener/pull/14500)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.2` to `v0.61.3`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.3)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.2` to `v0.61.3`. by @gardener-ci-robot [[#14485](https://github.com/gardener/gardener/pull/14485)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.139.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.139.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.139.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.139.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.139.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.139.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.139.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.139.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.139.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.139.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.139.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.139.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.139.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.139.1</code></b></summary>

# [github.com/gardener/gardener:v1.139.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix a bug where the `shoot-care` controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and updated DNS credentials, i.e. `shoot.spec.dns.providers[].credentialsRef`, until the shoot is reconciled. by @vpnachev [[#14444](https://github.com/gardener/gardener/pull/14444)]

## 🏃 Others
- `[OPERATOR]` There is now `maxConnectionDuration` of 1 day for connections to kube-apiserver endpoints. Their `maxConnections` limit has been removed. by @oliver-goetz [[#14471](https://github.com/gardener/gardener/pull/14471)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.34.0` to `v1.34.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.34.1)  
  - `gardener/autoscaler` from `v1.33.0` to `v1.33.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.33.1)  
  - `gardener/autoscaler` from `v1.32.2` to `v1.32.3`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.3)  
  - `gardener/autoscaler` from `v1.31.0` to `v1.31.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.31.1)  
  - `gardener/autoscaler` from `v1.30.2` to `v1.30.3`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.30.3) by @aaronfern [[#14500](https://github.com/gardener/gardener/pull/14500)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.2` to `v0.61.3`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.3)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.2` to `v0.61.3`. by @gardener-ci-robot [[#14485](https://github.com/gardener/gardener/pull/14485)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.139.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.139.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.139.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.139.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.139.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.139.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.139.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.139.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.139.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.139.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.139.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.139.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.139.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.139.1</code></b></summary>

# [github.com/gardener/gardener:v1.139.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix a bug where the `shoot-care` controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and updated DNS credentials, i.e. `shoot.spec.dns.providers[].credentialsRef`, until the shoot is reconciled. by @vpnachev [[#14444](https://github.com/gardener/gardener/pull/14444)]

## 🏃 Others
- `[OPERATOR]` There is now `maxConnectionDuration` of 1 day for connections to kube-apiserver endpoints. Their `maxConnections` limit has been removed. by @oliver-goetz [[#14471](https://github.com/gardener/gardener/pull/14471)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.34.0` to `v1.34.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.34.1)  
  - `gardener/autoscaler` from `v1.33.0` to `v1.33.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.33.1)  
  - `gardener/autoscaler` from `v1.32.2` to `v1.32.3`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.3)  
  - `gardener/autoscaler` from `v1.31.0` to `v1.31.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.31.1)  
  - `gardener/autoscaler` from `v1.30.2` to `v1.30.3`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.30.3) by @aaronfern [[#14500](https://github.com/gardener/gardener/pull/14500)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.2` to `v0.61.3`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.3)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.2` to `v0.61.3`. by @gardener-ci-robot [[#14485](https://github.com/gardener/gardener/pull/14485)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.139.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.139.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.139.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.139.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.139.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.139.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.139.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.139.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.139.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.139.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.139.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.139.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.139.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.11</code></b></summary>

# [github.com/gardener/dashboard:1.83.11]

## 🐛 Bug Fixes
- `[OPERATOR]` Updated `undici` to `v7.24.6` to fix CVE-2026-1525 (Critical), CVE-2026-1526, CVE-2026-1528, CVE-2026-2229 (High) by @petersutter [[#2853](https://github.com/gardener/dashboard/pull/2853)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.11`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.11</code></b></summary>

# [github.com/gardener/dashboard:1.83.11]

## 🐛 Bug Fixes
- `[OPERATOR]` Updated `undici` to `v7.24.6` to fix CVE-2026-1525 (Critical), CVE-2026-1526, CVE-2026-1528, CVE-2026-2229 (High) by @petersutter [[#2853](https://github.com/gardener/dashboard/pull/2853)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.11`


</details>

<details>
<summary><b>Update provider-aws to <code>1.68.3</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.68.3]

## 🏃 Others
- `[OPERATOR]` updated github.com/gardener/gardener to v1.136.6 by @AndreasBurger [[#1734](https://github.com/gardener/gardener-extension-provider-aws/pull/1734)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.68.3`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.68.3`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.68.3`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.68.3`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.68.3`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.53.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.53.1]

## 🏃 Others
- `[OPERATOR]` updated github.com/gardener/gardener to v1.136.6 by @AndreasBurger [[#1295](https://github.com/gardener/gardener-extension-provider-openstack/pull/1295)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.53.1`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.53.1`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.53.1`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.53.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.53.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.140.1</code></b></summary>

# [github.com/gardener/gardener:v1.140.1]

## 🐛 Bug Fixes
- `[DEPENDENCY]` The `golangci-lint` makefile install recipe can be used in Gardener extensions again. by @timebertt [[#14564](https://github.com/gardener/gardener/pull/14564)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.1` to `v0.36.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.36.2)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.1` to `v0.36.2`. by @gardener-ci-robot [[#14581](https://github.com/gardener/gardener/pull/14581)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.140.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.140.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.140.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.140.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.140.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.140.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.140.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.140.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.140.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.140.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.140.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.140.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.140.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.140.1</code></b></summary>

# [github.com/gardener/gardener:v1.140.1]

## 🐛 Bug Fixes
- `[DEPENDENCY]` The `golangci-lint` makefile install recipe can be used in Gardener extensions again. by @timebertt [[#14564](https://github.com/gardener/gardener/pull/14564)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.1` to `v0.36.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.36.2)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.1` to `v0.36.2`. by @gardener-ci-robot [[#14581](https://github.com/gardener/gardener/pull/14581)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.140.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.140.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.140.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.140.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.140.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.140.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.140.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.140.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.140.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.140.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.140.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.140.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.140.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.140.1</code></b></summary>

# [github.com/gardener/gardener:v1.140.1]

## 🐛 Bug Fixes
- `[DEPENDENCY]` The `golangci-lint` makefile install recipe can be used in Gardener extensions again. by @timebertt [[#14564](https://github.com/gardener/gardener/pull/14564)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.1` to `v0.36.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.36.2)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.1` to `v0.36.2`. by @gardener-ci-robot [[#14581](https://github.com/gardener/gardener/pull/14581)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.140.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.140.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.140.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.140.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.140.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.140.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.140.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.140.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.140.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.140.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.140.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.140.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.140.1`


</details>

<details>
<summary><b>Update acl to <code>1.16.0</code></b></summary>

<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed

### New Features
* Switch `.spec.trafficDistribution` field to `PreferSameZone` for Kubernete 1.34+ by @Kostov6 in https://github.com/stackitcloud/gardener-extension-acl/pull/251

### 🤖 Dependencies
* Update module github.com/gardener/gardener to v1.133.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/241
* Update module github.com/onsi/gomega to v1.39.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/242
* Update module github.com/onsi/ginkgo/v2 to v2.28.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/244
* Update dependency go to v1.25.7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/245
* Update k8s.io/utils digest to b8788ab by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/248
* Update k8s packages to v0.34.4 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/250
* Update module github.com/gardener/gardener to v1.133.5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/252
* Update module golang.org/x/tools to v0.42.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/247
* Update dependency go to v1.25.7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/246
* Update k8s packages to v0.34.5 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/254
* Update dependency go to v1.26.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/249
* Update dependency go to v1.26.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/257
* Update module golang.org/x/tools to v0.43.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/258
* Update docker/login-action action to v4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/255
* Update k8s packages (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/239
* Update k8s packages to v0.35.3 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/259
### ℹ️ Other Changes
* Update the admission Service template by @ialidzhikov in https://github.com/stackitcloud/gardener-extension-acl/pull/253
* Remove dergeberl from CODEOWNERS by @dergeberl in https://github.com/stackitcloud/gardener-extension-acl/pull/256

## New Contributors
* @Kostov6 made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/251

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.15.0...v1.16.0

</details>

<details>
<summary><b>Update cert-management to <code>0.22.0</code></b></summary>



## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.22.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.22.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.39.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.39.0]

## ✨ New Features
- `[OPERATOR]` Add optional entries quota enforcement per provider by @MartinWeindel [[#840](https://github.com/gardener/external-dns-management/pull/840)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.39.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.39.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.39.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.44.0</code></b></summary>

# [github.com/gardener/gardener-metrics-exporter:0.44.0]

## 🏃 Others
- `[OPERATOR]` export testresults as inlined ocm-resource by @Franziska-Schallhorn [[#142](https://github.com/gardener/gardener-metrics-exporter/pull/142)]
- `[OPERATOR]` Add metrics for seed reconciliation `LastOperation` state by @adenitiu [[#146](https://github.com/gardener/gardener-metrics-exporter/pull/146)]
- `[OPERATOR]` Added `status` label to `garden_shoot_info` metric by @videlov [[#145](https://github.com/gardener/gardener-metrics-exporter/pull/145)]
- `[OPERATOR]` Fix ARM64 build target to not include an x86-64 binary. by @mstueer [[#143](https://github.com/gardener/gardener-metrics-exporter/pull/143)]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.44.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.44.0</code></b></summary>

# [github.com/gardener/gardener-metrics-exporter:0.44.0]

## 🏃 Others
- `[OPERATOR]` export testresults as inlined ocm-resource by @Franziska-Schallhorn [[#142](https://github.com/gardener/gardener-metrics-exporter/pull/142)]
- `[OPERATOR]` Add metrics for seed reconciliation `LastOperation` state by @adenitiu [[#146](https://github.com/gardener/gardener-metrics-exporter/pull/146)]
- `[OPERATOR]` Added `status` label to `garden_shoot_info` metric by @videlov [[#145](https://github.com/gardener/gardener-metrics-exporter/pull/145)]
- `[OPERATOR]` Fix ARM64 build target to not include an x86-64 binary. by @mstueer [[#143](https://github.com/gardener/gardener-metrics-exporter/pull/143)]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.44.0`


</details>

<details>
<summary><b>Update image-rewriter to <code>0.9.0</code></b></summary>

# [github.com/gardener/gardener-extension-image-rewriter:v0.9.0]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener/pkg/apis` from `v1.138.0` to `v1.138.1`. by @gardener-ci-robot [[#76](https://github.com/gardener/gardener-extension-image-rewriter/pull/76)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.138.2` to `v1.140.0`. by @gardener-ci-robot [[#78](https://github.com/gardener/gardener-extension-image-rewriter/pull/78)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener/pkg/apis` from `v1.138.1` to `v1.138.2`. by @gardener-ci-robot [[#80](https://github.com/gardener/gardener-extension-image-rewriter/pull/80)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.138.1` to `v1.138.2`. by @gardener-ci-robot [[#79](https://github.com/gardener/gardener-extension-image-rewriter/pull/79)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `go` from `1.26.1` to `1.26.2`. [Release Notes](https://redirect.github.com/go/releases/tag/1.26.2) by @gardener-ci-robot [[#83](https://github.com/gardener/gardener-extension-image-rewriter/pull/83)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.140.0` to `v1.140.1`.   
  - `github.com/gardener/gardener/pkg/apis` from `v1.140.0` to `v1.140.1`. by @gardener-ci-robot [[#85](https://github.com/gardener/gardener-extension-image-rewriter/pull/85)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.138.0` to `v1.138.1`. by @gardener-ci-robot [[#77](https://github.com/gardener/gardener-extension-image-rewriter/pull/77)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `golang` from `1.26.1` to `1.26.2`. by @gardener-ci-robot [[#82](https://github.com/gardener/gardener-extension-image-rewriter/pull/82)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `k8s.io/api` from `v0.35.3` to `v0.35.4`.   
  - `k8s.io/apimachinery` from `v0.35.3` to `v0.35.4`.   
  - `k8s.io/code-generator` from `v0.35.3` to `v0.35.4`.   
  - `k8s.io/component-base` from `v0.35.3` to `v0.35.4`. by @gardener-ci-robot [[#86](https://github.com/gardener/gardener-extension-image-rewriter/pull/86)]

## Helm Charts
- image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/image-rewriter:v0.9.0`
## Container (OCI) Images
- gardener-extension-image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/image-rewriter:v0.9.0`


</details>
