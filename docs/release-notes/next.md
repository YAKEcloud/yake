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

<details>
<summary><b>Update networking-calico to <code>1.58.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-calico:v1.58.0]

## ✨ New Features
- `[OPERATOR]` Added ability to configure calico service loop prevention behavior by @adziauho [[#806](https://github.com/gardener/gardener-extension-networking-calico/pull/806)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix eviction of typha pod by cluster autoscaler if scaling down from 2 nodes. by @wpross [[#807](https://github.com/gardener/gardener-extension-networking-calico/pull/807)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.58.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.58.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.58.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.58.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.58.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.58.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.47.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-cilium:v1.47.0]

## 🏃 Others
- `[OPERATOR]` Hard resource limits have been removed except for Hubble which will be addressed in a future release. by @domdom82 [[#684](https://github.com/gardener/gardener-extension-networking-cilium/pull/684)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#679](https://github.com/gardener/gardener-extension-networking-cilium/pull/679)]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.47.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.47.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.47.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.47.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.47.0`


</details>

<details>
<summary><b>Update os-coreos to <code>1.29.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-coreos:v1.29.0]

## ✨ New Features
- `[OPERATOR]` Add option to configure ntpd to bind to specific interface(s) by @nschad [[#280](https://github.com/gardener/gardener-extension-os-coreos/pull/280)]

## Helm Charts
- os-coreos: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-coreos:v1.29.0`
## Container (OCI) Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.29.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.39.0</code></b></summary>



## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.39.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.39.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.38.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-ubuntu:v1.38.0]

## ✨ New Features
- `[OPERATOR]` Add option to configure ntpd to bind to specific interface(s) by @nschad [[#300](https://github.com/gardener/gardener-extension-os-ubuntu/pull/300)]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.38.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.38.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.59.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.59.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The `PLATFORM` makefile variable has been replaced by `TARGET_PLATFORM`. by @wpross [[#1453](https://github.com/gardener/gardener-extension-provider-azure/pull/1453)]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.35. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) before upgrading to 1.35. by @rfranzke [[#1443](https://github.com/gardener/gardener-extension-provider-azure/pull/1443)]
- `[DEVELOPER]` Gardener extension provider-azure container images now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @wpross [[#1453](https://github.com/gardener/gardener-extension-provider-azure/pull/1453)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed an issue that prevented featuregates from being rendered correctly by @AndreasBurger [[#1444](https://github.com/gardener/gardener-extension-provider-azure/pull/1444)]
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @matthias-horne [[#1460](https://github.com/gardener/gardener-extension-provider-azure/pull/1460)]
- `[OPERATOR]` Fixed missing create `event` permissions in runtime cluster when publishing "became leader" event by @matthias-horne [[#1460](https://github.com/gardener/gardener-extension-provider-azure/pull/1460)]

## 🏃 Others
- `[OPERATOR]` Fix premature deletion of the remedy-controller deployment on startup. It will be scaled to 0 by @kon-angelo [[#1461](https://github.com/gardener/gardener-extension-provider-azure/pull/1461)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#1452](https://github.com/gardener/gardener-extension-provider-azure/pull/1452)]
- `[OPERATOR]` Update gardener/gardener v1.137.4 -> v1.137.5 by @wpross [[#1480](https://github.com/gardener/gardener-extension-provider-azure/pull/1480)]
- `[OPERATOR]` Updated Azure `cloud-controller-manager` and `cloud-node-manager` image repositories to `mcr.microsoft.com/oss/v2/kubernetes` for Kubernetes versions `>= 1.32` to align with upstream Dalec build system changes. by @wpross [[#1474](https://github.com/gardener/gardener-extension-provider-azure/pull/1474)]
- `[USER]` Classified "CannotDeleteLoadBalancerWithPrivateLinkService" as a dependency error. by @acumino [[#1455](https://github.com/gardener/gardener-extension-provider-azure/pull/1455)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.32.11 -> v1.32.14 (patch)  
    - cloud-controller-manager: v1.33.6 -> v1.33.9 (patch)  
    - cloud-controller-manager: v1.34.5 -> v1.34.6 (patch)  
    - cloud-controller-manager: v1.35.0 -> v1.35.1 (patch)  
    - cloud-node-manager: v1.32.11 -> v1.32.14 (patch)  
    - cloud-node-manager: v1.33.6 -> v1.33.9 (patch)  
    - cloud-node-manager: v1.34.5 -> v1.34.6 (patch)  
    - cloud-node-manager: v1.35.0 -> v1.35.1 (patch)  
    - csi-driver-disk: v1.34.1 -> v1.34.2 (singleton)  
    - csi-driver-file: v1.35.0 -> v1.35.1 (singleton)  
    - csi-provisioner: v6.1.1 -> v6.2.0 (minor) by @federated-github-access[bot] [[#1472](https://github.com/gardener/gardener-extension-provider-azure/pull/1472)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.34.3 -> v1.34.5 (patch)  
    - cloud-controller-manager: v1.34.5 -> v1.35.0 (minor)  
    - cloud-node-manager: v1.34.3 -> v1.34.5 (patch)  
    - cloud-node-manager: v1.34.5 -> v1.35.0 (minor)  
    - csi-attacher: v4.10.0 -> v4.11.0 (singleton)  
    - csi-driver-file: v1.34.3 -> v1.35.0 (singleton)  
    - csi-liveness-probe: v2.17.0 -> v2.18.0 (singleton)  
    - csi-node-driver-registrar: v2.15.0 -> v2.16.0 (singleton)  
    - csi-provisioner: v6.1.0 -> v6.1.1 (patch)  
    - csi-resizer: v2.0.0 -> v2.1.0 (minor)  
    - csi-snapshot-controller: v8.4.0 -> v8.5.0 (singleton)  
    - csi-snapshotter: v8.4.0 -> v8.5.0 (singleton) by @ghost [[#1437](https://github.com/gardener/gardener-extension-provider-azure/pull/1437)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.59.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.59.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.59.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.59.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.59.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.50.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.50.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The `PLATFORM` makefile variable has been replaced by `TARGET_PLATFORM`. by @vpnachev [[#1322](https://github.com/gardener/gardener-extension-provider-gcp/pull/1322)]

## 📰 Noteworthy
- `[OPERATOR]` Ingress-gce no longer requires deployment of `BackendConfig` CRDs. In addition, the deployment of the default-http-backend in the shoot is no longer necessary and hence removed. by @kon-angelo [[#1320](https://github.com/gardener/gardener-extension-provider-gcp/pull/1320)]

## ✨ New Features
- `[OPERATOR]` `BackupBucketConfig.Endpoint` is introduced for specifying the regional endpoint at which the backup buckets are hosted, and this is passed to the etcd resource's backup specification. by @renormalize [[#1273](https://github.com/gardener/gardener-extension-provider-gcp/pull/1273)]
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.35. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) before upgrading to 1.35. by @rfranzke [[#1300](https://github.com/gardener/gardener-extension-provider-gcp/pull/1300)]
- `[USER]` Update ingress-gce to v1.38.2 by @kon-angelo [[#1320](https://github.com/gardener/gardener-extension-provider-gcp/pull/1320)]
- `[USER]` No rollout hot-update of ProviderConfig.NodeTemplate.VirtualCapacity with/without already existing ProviderConfig.  
  New hash strategy adopted for ProviderConfig for k8s versions >= 1.35 by @takoverflow [[#1318](https://github.com/gardener/gardener-extension-provider-gcp/pull/1318)]
- `[DEVELOPER]` Gardener extension provider-gcp container images now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @vpnachev [[#1322](https://github.com/gardener/gardener-extension-provider-gcp/pull/1322)]

## 🐛 Bug Fixes
- `[OPERATOR]` Allow private key to end without a newline character. by @wpross [[#1314](https://github.com/gardener/gardener-extension-provider-gcp/pull/1314)]
- `[OPERATOR]` Loosen secret validation to allow not only for user-generated service accounts in IAM, but also for Google-managed service accounts. by @wpross [[#1310](https://github.com/gardener/gardener-extension-provider-gcp/pull/1310)]
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @matthias-horne [[#1326](https://github.com/gardener/gardener-extension-provider-gcp/pull/1326)]
- `[OPERATOR]` Fixed missing create `event` permissions in runtime cluster when publishing "became leader" event by @matthias-horne [[#1326](https://github.com/gardener/gardener-extension-provider-gcp/pull/1326)]
- `[USER]` Set correct `onHostMaintenance: "TERMINATE"` flag for machine types, where live migration is not supported. by @matthias-horne [[#1329](https://github.com/gardener/gardener-extension-provider-gcp/pull/1329)]
- `[USER]` It is again allowed shoots to use `WorkloadIdentity` as credentials for DNS management, e.g. via the `shoot.spec.dns.providers[].credentialsRef` field. by @vpnachev [[#1346](https://github.com/gardener/gardener-extension-provider-gcp/pull/1346)]

## 🏃 Others
- `[OPERATOR]` Adopts Gardener MachineImage `Capabilities` and introduces `CapabilityFlavors` to `providerConfig`. by @Roncossek [[#1067](https://github.com/gardener/gardener-extension-provider-gcp/pull/1067)]
- `[OPERATOR]` The following image is updated:  
  - registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver: v1.22.1 -> v1.23.3 by @ialidzhikov [[#1319](https://github.com/gardener/gardener-extension-provider-gcp/pull/1319)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#1317](https://github.com/gardener/gardener-extension-provider-gcp/pull/1317)]
- `[OPERATOR]` Prevent Calico from setting the `NetworkUnavailable` condition on nodes when overlay networking gets disabled, and ensures cleanup of existing Calico-set conditions. by @DockToFuture [[#1309](https://github.com/gardener/gardener-extension-provider-gcp/pull/1309)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v35.0.0 -> v35.0.2 (patch)  
    - csi-attacher: v4.10.0 -> v4.11.0 (singleton)  
    - csi-driver-filestore: v1.11.4 -> v1.12.0 (singleton)  
    - csi-liveness-probe: v2.17.0 -> v2.18.0 (singleton)  
    - csi-node-driver-registrar: v2.15.0 -> v2.16.0 (singleton)  
    - csi-provisioner: v6.1.0 -> v6.1.1 (patch)  
    - csi-resizer: v2.0.0 -> v2.1.0 (minor)  
    - csi-snapshot-controller: v8.4.0 -> v8.5.0 (singleton)  
    - csi-snapshotter: v8.4.0 -> v8.5.0 (singleton) by @ghost [[#1297](https://github.com/gardener/gardener-extension-provider-gcp/pull/1297)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.50.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.50.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.50.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.50.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.50.0`


</details>

<details>
<summary><b>Update registry-cache to <code>0.21.0</code></b></summary>

# [github.com/gardener/gardener-extension-registry-cache:v0.21.0]

## ✨ New Features
- `[USER]` The registry-mirror extension now supports registry-mirrors with a self-signed certificate. For more details, see [How to provide a certificate authority bundle for a private mirror?](https://github.com/gardener/gardener-extension-registry-cache/blob/v0.21.0/docs/usage/registry-mirror/ca-bundle-for-private-mirror.md). by @ialidzhikov [[#547](https://github.com/gardener/gardener-extension-registry-cache/pull/547)]

## 🐛 Bug Fixes
- `[OPERATOR]` The registry-cache-admission's validatingwebhookconfiguration is no longer leaking in the virtual cluster when the registry-cache operator.gardener.cloud/v1alpha1.Extension resource is deleted. by @ialidzhikov [[#550](https://github.com/gardener/gardener-extension-registry-cache/pull/550)]

## 🏃 Others
- `[OPERATOR]` The VerticalPodAutoscaler resources managed by the registry-cache extension are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @ialidzhikov [[#533](https://github.com/gardener/gardener-extension-registry-cache/pull/533)]

## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.21.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.21.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.21.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.21.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.21.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.33.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.33.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260406.0. by @federated-github-access[bot] [[#387](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/387)]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.33.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.33.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.33.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.59.0</code></b></summary>



## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.59.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.59.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.81.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.81.0]

## 🐛 Bug Fixes
- `[OPERATOR]` The shoot-dns-service-admission's validatingwebhookconfiguration is no longer leaking in the virtual cluster when the shoot-dns-service operator.gardener.cloud/v1alpha1.Extension resource is deleted. by @MartinWeindel [[#689](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/689)]

# [github.com/gardener/external-dns-management:v0.38.0]

## 🐛 Bug Fixes
- `[OPERATOR]` [remote provider]: Set `MaxCallRecvMsgSize` for `getZoneState` from default of 4MB to `16 MB` by @MartinWeindel [[#830](https://github.com/gardener/external-dns-management/pull/830)]

# [github.com/gardener/external-dns-management:v0.39.0]

## ✨ New Features
- `[OPERATOR]` Add optional entries quota enforcement per provider by @MartinWeindel [[#840](https://github.com/gardener/external-dns-management/pull/840)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.81.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.81.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.81.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.81.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.81.0`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.29.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-filter:v0.29.0]

## 🐛 Bug Fixes
- `[OPERATOR]` The gardener-extension-shoot-networking-filter-admission's validatingwebhookconfiguration is no longer leaking in the virtual cluster when the shoot-networking-filter operator.gardener.cloud/v1alpha1.Extension resource is deleted. by @MartinWeindel [[#350](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/350)]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.29.0`
- shoot-networking-filter-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-application:v0.29.0`
- shoot-networking-filter-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-runtime:v0.29.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.29.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-filter-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter-admission:v0.29.0`
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.29.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.29.0`


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.38.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.38.0]

## ✨ New Features
- `[OPERATOR]` The `shoot-oidc-service` extension provides a new `garden-shoot-trust-configurator` controller that manages OIDC resources for trusted shoots in the garden cluster. When enabled in the `Garden` resource, it automatically configures trusted shoots (having `authentication.gardener.cloud/trusted=true` annotation) to create the corresponding OIDC resources. by @theoddora [[#445](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/445)]

## 🏃 Others
- `[OPERATOR]` The previously reported oidc-extension healthcheck conditions with type `ControlPlaneHealthy` are now cleaned up from shoots. by @theoddora [[#446](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/446)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.38.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.38.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.60.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-cert-service:v1.60.0]

## 🏃 Others
- `[OPERATOR]` Adds a fallback mechanism to handle shoot deletion failures when certificate resources have foreign finalizers that block CRD deletion. by @MartinWeindel [[#535](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/535)]

## application/spdx+json
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:ee4e13782d73945594387910a9d6c088043f974d5c8cc8904e0793039c3dd6ab`
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:f12a25c1cc4f0dba72d183ce8bb335719447d9d76e39720a3e1960019b977558`
## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.60.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.60.0`


</details>

<details>
<summary><b>Update registry-cache to <code>0.22.0</code></b></summary>

# [github.com/gardener/gardener-extension-registry-cache:v0.22.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The migration logic introduced in `registry-cache@v0.18.0` to update immutable fields of the registry cache StatefulSet is now removed. Before updating to this version of the extension, ensure that you have not skipped minor versions when upgrading the extension and that the migration was executed successfully for all Shoot clusters using the extension. You can use the following [script](https://gist.github.com/ialidzhikov/946baa944882da780c31d9ab66addb26) to perform the check. by @dimitar-kostadinov [[#568](https://github.com/gardener/gardener-extension-registry-cache/pull/568)]

## ✨ New Features
- `[USER]` The registry-mirror extension now supports configuring non-compliant mirror registries by allowing to:  
  - set an URL path segment in the `.mirrors[].hosts[].host` field   
  - define the `override_path` option in the containerd registry configuration by using the `.mirrors[].hosts[].overridePath` field. by @dimitar-kostadinov [[#554](https://github.com/gardener/gardener-extension-registry-cache/pull/554)]

## 🏃 Others
- `[OPERATOR]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/registry` image is updated from 3.0.0 to 3.1.0. by @dimitar-kostadinov [[#564](https://github.com/gardener/gardener-extension-registry-cache/pull/564)]

## application/spdx+json
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:4738cdf6a505b26a09768d62a277fc5a53e0fa4dc00b8fb9f2113fc89df97bf7`
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:e21ce931862221f16914ae9c20fe0c799fd0dfe95bafc29772a659eae039e2a3`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:5e509150aa3ea359ae94d4f655d09289c2788cde4e5b43e0de5178666022f0d7`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:8fed6ce0fea183f2209a74f6f826f783b491a042b4a7cf98525a2a2f76293109`
## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.22.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.22.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.22.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.22.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.22.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.140.2</code></b></summary>

# [github.com/gardener/gardener:v1.140.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed that caused unintentional `ShootState` creations for `Shoot`s running on managed seed clusters (those backed by `ManagedSeed` objects). The affected `ShootState` resources are automatically cleaned up by `gardenlet` during start-up. by @tobschli [[#14652](https://github.com/gardener/gardener/pull/14652)]
- `[USER]` Cluster-proportional autoscaling of coredns now works with Kubernetes >= 1.33 by @ScheererJ [[#14650](https://github.com/gardener/gardener/pull/14650)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-discovery-server` from `v0.9.0` to `v0.10.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.10.0) by @gardener-ci-robot [[#14609](https://github.com/gardener/gardener/pull/14609)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:8e632c165a58e3d73b7b8d91ba20c6c9c0d56eb2c77eb51ed8f68c53b7c119ec`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:b1bbf47c6050a0b0bd375b1caa6ed7676ab3f55c415ebf7d0b5ef6e474d6b3c0`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:3dbd103fd2bff6f557201f8c2089d835ab8690aa7c45fc2ab3ea9d246faa4d5c`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:bba291fa54adf1fee863013d8e1853eb1b69e269957837619ccb44882293d79e`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:197cc1f8adb17c6dedf2bff14cae41e2995101208b664ddea635e79410738d61`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:3f2d2108871940f6a8ad215cc221044fc27998f835ee4a4a5b486f7b0f14b080`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:666d9f776aa93a4aadc2abe094acfab8b042407255ee44f6f085e346741c3478`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:dfc8facb4841da0a19feea65952dbfc3306404ada2e595ef1ca322fd594db0c7`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:670478cf01ee601df03a77215e1c79fbda52181d4ec43c293b43cb2c4c468faf`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:e69825509720518c2419a2b701e9a9433359a4a3d067176473557d2587a4b4f6`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:0ce0315f2f8b870e9518a63a6ef3ce1d7c3b8f4871a049a5f645c7b6f1f41bb7`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:38781d55c778f4b5432c5b8189b06780eebe2850085ea3268a9111ec328afba7`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:649244b2bebce7cd92c3b6db632a7e8c26a0e4a9f40670ca2ce7da7f205551f4`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:b55360921c2a8c84a1897a3d64c25dfbb3f0603d0c3d9d20c516a0a2c3b76e26`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:5155120ca1aac1ce9b752b1a629fcef61c246e1e74621e3c58aead8bdfd33bac`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:b547e944c7be9504bc0ec013beaaf507bb4794e22ceb9d925456d1eab8430849`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:44b1e433d7e7870a787774b2964657a4113ca758ac1e5a6444ea820f484ec038`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:fe309373e4bd99f3a1ae293fefce589cd8a4afe69269db261ce6c1fd2986f1e4`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.140.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.140.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.140.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.140.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.140.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.140.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.140.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.140.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.140.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.140.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.140.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.140.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.140.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.140.2</code></b></summary>

# [github.com/gardener/gardener:v1.140.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed that caused unintentional `ShootState` creations for `Shoot`s running on managed seed clusters (those backed by `ManagedSeed` objects). The affected `ShootState` resources are automatically cleaned up by `gardenlet` during start-up. by @tobschli [[#14652](https://github.com/gardener/gardener/pull/14652)]
- `[USER]` Cluster-proportional autoscaling of coredns now works with Kubernetes >= 1.33 by @ScheererJ [[#14650](https://github.com/gardener/gardener/pull/14650)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-discovery-server` from `v0.9.0` to `v0.10.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.10.0) by @gardener-ci-robot [[#14609](https://github.com/gardener/gardener/pull/14609)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:8e632c165a58e3d73b7b8d91ba20c6c9c0d56eb2c77eb51ed8f68c53b7c119ec`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:b1bbf47c6050a0b0bd375b1caa6ed7676ab3f55c415ebf7d0b5ef6e474d6b3c0`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:3dbd103fd2bff6f557201f8c2089d835ab8690aa7c45fc2ab3ea9d246faa4d5c`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:bba291fa54adf1fee863013d8e1853eb1b69e269957837619ccb44882293d79e`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:197cc1f8adb17c6dedf2bff14cae41e2995101208b664ddea635e79410738d61`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:3f2d2108871940f6a8ad215cc221044fc27998f835ee4a4a5b486f7b0f14b080`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:666d9f776aa93a4aadc2abe094acfab8b042407255ee44f6f085e346741c3478`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:dfc8facb4841da0a19feea65952dbfc3306404ada2e595ef1ca322fd594db0c7`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:670478cf01ee601df03a77215e1c79fbda52181d4ec43c293b43cb2c4c468faf`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:e69825509720518c2419a2b701e9a9433359a4a3d067176473557d2587a4b4f6`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:0ce0315f2f8b870e9518a63a6ef3ce1d7c3b8f4871a049a5f645c7b6f1f41bb7`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:38781d55c778f4b5432c5b8189b06780eebe2850085ea3268a9111ec328afba7`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:649244b2bebce7cd92c3b6db632a7e8c26a0e4a9f40670ca2ce7da7f205551f4`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:b55360921c2a8c84a1897a3d64c25dfbb3f0603d0c3d9d20c516a0a2c3b76e26`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:5155120ca1aac1ce9b752b1a629fcef61c246e1e74621e3c58aead8bdfd33bac`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:b547e944c7be9504bc0ec013beaaf507bb4794e22ceb9d925456d1eab8430849`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:44b1e433d7e7870a787774b2964657a4113ca758ac1e5a6444ea820f484ec038`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:fe309373e4bd99f3a1ae293fefce589cd8a4afe69269db261ce6c1fd2986f1e4`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.140.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.140.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.140.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.140.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.140.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.140.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.140.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.140.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.140.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.140.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.140.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.140.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.140.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.140.2</code></b></summary>

# [github.com/gardener/gardener:v1.140.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed that caused unintentional `ShootState` creations for `Shoot`s running on managed seed clusters (those backed by `ManagedSeed` objects). The affected `ShootState` resources are automatically cleaned up by `gardenlet` during start-up. by @tobschli [[#14652](https://github.com/gardener/gardener/pull/14652)]
- `[USER]` Cluster-proportional autoscaling of coredns now works with Kubernetes >= 1.33 by @ScheererJ [[#14650](https://github.com/gardener/gardener/pull/14650)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-discovery-server` from `v0.9.0` to `v0.10.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.10.0) by @gardener-ci-robot [[#14609](https://github.com/gardener/gardener/pull/14609)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:8e632c165a58e3d73b7b8d91ba20c6c9c0d56eb2c77eb51ed8f68c53b7c119ec`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:b1bbf47c6050a0b0bd375b1caa6ed7676ab3f55c415ebf7d0b5ef6e474d6b3c0`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:3dbd103fd2bff6f557201f8c2089d835ab8690aa7c45fc2ab3ea9d246faa4d5c`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:bba291fa54adf1fee863013d8e1853eb1b69e269957837619ccb44882293d79e`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:197cc1f8adb17c6dedf2bff14cae41e2995101208b664ddea635e79410738d61`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:3f2d2108871940f6a8ad215cc221044fc27998f835ee4a4a5b486f7b0f14b080`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:666d9f776aa93a4aadc2abe094acfab8b042407255ee44f6f085e346741c3478`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:dfc8facb4841da0a19feea65952dbfc3306404ada2e595ef1ca322fd594db0c7`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:670478cf01ee601df03a77215e1c79fbda52181d4ec43c293b43cb2c4c468faf`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:e69825509720518c2419a2b701e9a9433359a4a3d067176473557d2587a4b4f6`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:0ce0315f2f8b870e9518a63a6ef3ce1d7c3b8f4871a049a5f645c7b6f1f41bb7`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:38781d55c778f4b5432c5b8189b06780eebe2850085ea3268a9111ec328afba7`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:649244b2bebce7cd92c3b6db632a7e8c26a0e4a9f40670ca2ce7da7f205551f4`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:b55360921c2a8c84a1897a3d64c25dfbb3f0603d0c3d9d20c516a0a2c3b76e26`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:5155120ca1aac1ce9b752b1a629fcef61c246e1e74621e3c58aead8bdfd33bac`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:b547e944c7be9504bc0ec013beaaf507bb4794e22ceb9d925456d1eab8430849`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:44b1e433d7e7870a787774b2964657a4113ca758ac1e5a6444ea820f484ec038`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:fe309373e4bd99f3a1ae293fefce589cd8a4afe69269db261ce6c1fd2986f1e4`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.140.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.140.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.140.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.140.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.140.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.140.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.140.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.140.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.140.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.140.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.140.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.140.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.140.2`


</details>

<details>
<summary><b>Update acl to <code>1.17.0</code></b></summary>

<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### 🤖 Dependencies
* Update k8s.io/utils digest to 28399d8 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/260
* Update k8s packages to v1.138.1 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/262
* Update k8s packages to v1.138.2 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/265
* Update dependency go to v1.26.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/266
* Update k8s packages to v1.139.1 (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/263
* Update dependency go to v1.26.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/267
* Update k8s packages to v1.139.2 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/270
* Update k8s packages to v1.140.1 (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/269
* Update k8s packages to v0.35.4 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/271
* Update k8s packages to v1.140.2 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/273
* Update module golang.org/x/tools to v0.44.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/268
### ℹ️ Other Changes
* fix: Fix documentation about compatibility issues of older versions with UseUnifiedHTTPProxyPort feature gate by @jamand in https://github.com/stackitcloud/gardener-extension-acl/pull/261
* admission: Prevent leaking the validatingwebhookconfiguration resource in virtual garden cluster by @ialidzhikov in https://github.com/stackitcloud/gardener-extension-acl/pull/264

## New Contributors
* @jamand made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/261

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.16.0...v1.17.0

</details>

<details>
<summary><b>Update dashboard to <code>1.84.0</code></b></summary>

# [github.com/gardener/dashboard:1.84.0]

## ✨ New Features
- `[OPERATOR]` Add `avatarSource` frontend config to control avatar display (values: `gravatar`, `none`). Setting `none` displays placeholder icons instead of Gravatar images. by @petersutter [[#2752](https://github.com/gardener/dashboard/pull/2752)]
- `[OPERATOR]` The dashboard now displays seeds in a dedicated table by @petersutter [[#2776](https://github.com/gardener/dashboard/pull/2776)]
- `[OPERATOR]` Vendor Branding  
  - Define order, name and icon of cloud providers in dashboard configuration  
  - Define order, name and icon of machine image vendors in dashboard configuration  
  - Extend built-in providers by providing additional configuration by @grolu [[#2695](https://github.com/gardener/dashboard/pull/2695)]
- `[OPERATOR]` A link to the seed plutono is displayed on the shoot details page by @petersutter [[#2805](https://github.com/gardener/dashboard/pull/2805)]
- `[OPERATOR]` Add optional PodDisruptionBudget, affinity, and securityContext configuration to the Helm chart for improved availability and security hardening. by @r3m1n0x [[#2745](https://github.com/gardener/dashboard/pull/2745)]
- `[USER]` Seed details page by @petersutter [[#2820](https://github.com/gardener/dashboard/pull/2820)]
- `[USER]` Prevent search engines from crawling the dashboard UI. The dashboard will no longer be automatically indexed by @klocke-io [[#2773](https://github.com/gardener/dashboard/pull/2773)]
- `[USER]` Added support for using Workload Identities when managing DNS providers in the dashboard by @grolu [[#2838](https://github.com/gardener/dashboard/pull/2838)]
- `[USER]` Landscape viewers with `create` `shoots/viewerkubeconfig` (in case of managed seeds) or `get` `configmaps` permission (in case of non-managed seeds) in the `garden` namespace now see the "Target Control Plane" gardenctl command without requiring admin access. by @petersutter [[#2890](https://github.com/gardener/dashboard/pull/2890)]
- `[USER]` Shoot and seed status tags in the cluster list are now horizontally scrollable when they overflow the available space by @grolu [[#2905](https://github.com/gardener/dashboard/pull/2905)]

## 🐛 Bug Fixes
- `[USER]` Fixed sorting by KIND column in infrastructure credentials table could lead to table not being rendered by @grolu [[#2916](https://github.com/gardener/dashboard/pull/2916)]
- `[USER]` Resolved multiple styling issues that resulted in unnecessary scrollbars in some environments by @grolu [[#2909](https://github.com/gardener/dashboard/pull/2909)]
- `[USER]` Use the new `rotate-etcd-encryption-key` annotation to rotate the ETCD encryption key. This operation is no longer performed in two steps. This updated approach is required for clusters running Kubernetes version 1.34.0 and later by @grolu [[#2908](https://github.com/gardener/dashboard/pull/2908)]
- `[USER]` Fixed an incorrect warning message for forced machine image update by @grolu [[#2775](https://github.com/gardener/dashboard/pull/2775)]
- `[USER]` Fixed an issue with web-terminals that require confirmation by @grolu [[#2864](https://github.com/gardener/dashboard/pull/2864)]

## 🏃 Others
- `[USER]` Refactored DNS secret handling to align with the new specification and remove deprecated fields by @grolu [[#2838](https://github.com/gardener/dashboard/pull/2838)]
- `[DEVELOPER]` Upgraded Gardener Dashboard to use Node.js 24 by @gardener-ci-robot [[#2749](https://github.com/gardener/dashboard/pull/2749)]
- `[DEVELOPER]` The firsttris.vscode-jest-runner extension has been replaced by the official Vitest extension (vitest.explorer) for running and debugging tests in VS Code by @grolu [[#2876](https://github.com/gardener/dashboard/pull/2876)]
- `[DEVELOPER]` Refactor cloud profile store by extracting functionality to dedicated composables by @klocke-io [[#2673](https://github.com/gardener/dashboard/pull/2673)]
- `[DEVELOPER]` Replaced Jest with Vitest across backend and all packages (kube-client, kube-config, request, logger, monitor, polling-watcher). Removed CommonJS transpilation (rollup) and legacy Jest fixtures/mocks by @grolu [[#2876](https://github.com/gardener/dashboard/pull/2876)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:4d71a510f2c66b58d3867a8815aea6fb39205dc385fc78fe5efb8b8557e6aa2b`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:dc92ab6c79b27b1264e7be7aacb1f48d8abb449e18fb2abbb708aeb2666f713d`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.84.0</code></b></summary>

# [github.com/gardener/dashboard:1.84.0]

## ✨ New Features
- `[OPERATOR]` Add `avatarSource` frontend config to control avatar display (values: `gravatar`, `none`). Setting `none` displays placeholder icons instead of Gravatar images. by @petersutter [[#2752](https://github.com/gardener/dashboard/pull/2752)]
- `[OPERATOR]` The dashboard now displays seeds in a dedicated table by @petersutter [[#2776](https://github.com/gardener/dashboard/pull/2776)]
- `[OPERATOR]` Vendor Branding  
  - Define order, name and icon of cloud providers in dashboard configuration  
  - Define order, name and icon of machine image vendors in dashboard configuration  
  - Extend built-in providers by providing additional configuration by @grolu [[#2695](https://github.com/gardener/dashboard/pull/2695)]
- `[OPERATOR]` A link to the seed plutono is displayed on the shoot details page by @petersutter [[#2805](https://github.com/gardener/dashboard/pull/2805)]
- `[OPERATOR]` Add optional PodDisruptionBudget, affinity, and securityContext configuration to the Helm chart for improved availability and security hardening. by @r3m1n0x [[#2745](https://github.com/gardener/dashboard/pull/2745)]
- `[USER]` Seed details page by @petersutter [[#2820](https://github.com/gardener/dashboard/pull/2820)]
- `[USER]` Prevent search engines from crawling the dashboard UI. The dashboard will no longer be automatically indexed by @klocke-io [[#2773](https://github.com/gardener/dashboard/pull/2773)]
- `[USER]` Added support for using Workload Identities when managing DNS providers in the dashboard by @grolu [[#2838](https://github.com/gardener/dashboard/pull/2838)]
- `[USER]` Landscape viewers with `create` `shoots/viewerkubeconfig` (in case of managed seeds) or `get` `configmaps` permission (in case of non-managed seeds) in the `garden` namespace now see the "Target Control Plane" gardenctl command without requiring admin access. by @petersutter [[#2890](https://github.com/gardener/dashboard/pull/2890)]
- `[USER]` Shoot and seed status tags in the cluster list are now horizontally scrollable when they overflow the available space by @grolu [[#2905](https://github.com/gardener/dashboard/pull/2905)]

## 🐛 Bug Fixes
- `[USER]` Fixed sorting by KIND column in infrastructure credentials table could lead to table not being rendered by @grolu [[#2916](https://github.com/gardener/dashboard/pull/2916)]
- `[USER]` Resolved multiple styling issues that resulted in unnecessary scrollbars in some environments by @grolu [[#2909](https://github.com/gardener/dashboard/pull/2909)]
- `[USER]` Use the new `rotate-etcd-encryption-key` annotation to rotate the ETCD encryption key. This operation is no longer performed in two steps. This updated approach is required for clusters running Kubernetes version 1.34.0 and later by @grolu [[#2908](https://github.com/gardener/dashboard/pull/2908)]
- `[USER]` Fixed an incorrect warning message for forced machine image update by @grolu [[#2775](https://github.com/gardener/dashboard/pull/2775)]
- `[USER]` Fixed an issue with web-terminals that require confirmation by @grolu [[#2864](https://github.com/gardener/dashboard/pull/2864)]

## 🏃 Others
- `[USER]` Refactored DNS secret handling to align with the new specification and remove deprecated fields by @grolu [[#2838](https://github.com/gardener/dashboard/pull/2838)]
- `[DEVELOPER]` Upgraded Gardener Dashboard to use Node.js 24 by @gardener-ci-robot [[#2749](https://github.com/gardener/dashboard/pull/2749)]
- `[DEVELOPER]` The firsttris.vscode-jest-runner extension has been replaced by the official Vitest extension (vitest.explorer) for running and debugging tests in VS Code by @grolu [[#2876](https://github.com/gardener/dashboard/pull/2876)]
- `[DEVELOPER]` Refactor cloud profile store by extracting functionality to dedicated composables by @klocke-io [[#2673](https://github.com/gardener/dashboard/pull/2673)]
- `[DEVELOPER]` Replaced Jest with Vitest across backend and all packages (kube-client, kube-config, request, logger, monitor, polling-watcher). Removed CommonJS transpilation (rollup) and legacy Jest fixtures/mocks by @grolu [[#2876](https://github.com/gardener/dashboard/pull/2876)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:4d71a510f2c66b58d3867a8815aea6fb39205dc385fc78fe5efb8b8557e6aa2b`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:dc92ab6c79b27b1264e7be7aacb1f48d8abb449e18fb2abbb708aeb2666f713d`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.39.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-ubuntu:v1.39.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix multiple interfaces in ntpd config by @dergeberl [[#310](https://github.com/gardener/gardener-extension-os-ubuntu/pull/310)]

## application/spdx+json
- gardener-extension-os-ubuntu-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:35fb228fe05f85534dbe1b0f65a9b196cad9b099b069c549c0a04656cb0c2a32`
- gardener-extension-os-ubuntu-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:7a3ef1ab8d36c74442675e5ea69d9c3e74a69695b4084f1fe5d6d97964970cae`
## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.39.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.39.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.141.0</code></b></summary>

# [github.com/gardener/gardener:v1.141.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `NewWorkerPoolHash` feature gate has been promoted to GA and can no longer be disabled. by @timuthy [[#14531](https://github.com/gardener/gardener/pull/14531)]
- `[OPERATOR]` ⚠️ Gardener does no longer support Garden, Seed, or Shoot clusters with Kubernetes versions <= 1.30. Make sure to upgrade all existing clusters before upgrading to this Gardener version. by @timuthy [[#14501](https://github.com/gardener/gardener/pull/14501)]
- `[USER]` Newly created `Shoot`s now have a set period of `28d` for etcd encryption key rotation. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]
- `[DEVELOPER]` `make gardenadm-up SCENARIO=connect` now deploys the Gardener (`gardener-operator` and `Garden` resource) directly into the self-hosted shoot. Previously, it was deploying them next to the machine pods of the self-hosted shoot in the kind cluster. Use `make gardenadm-up SCENARIO=connect-kind` for the out-of-self-hosted-shoot deployment mode. by @rfranzke [[#14387](https://github.com/gardener/gardener/pull/14387)]
- `[DEPENDENCY]` The obsolete `Provider` field was removed from the `extensionswebhook.Webhook` struct. The field can be removed without substitution. by @timuthy [[#14460](https://github.com/gardener/gardener/pull/14460)]

## 📰 Noteworthy
- `[OPERATOR]` The `gardener-resource-manager` HA config webhook now uses `ScheduleAnyway` instead of `DoNotSchedule` for the hostname topology spread constraint when there is at most one node in the cluster. A new `node-high-availability-config` controller re-triggers the webhook when the node count crosses this threshold. by @rfranzke [[#14595](https://github.com/gardener/gardener/pull/14595)]
- `[OPERATOR]` machine-controller-manager's RBAC permissions for the source cluster have been reduced to follow the principle of least privilege. by @dimityrmirchev [[#14372](https://github.com/gardener/gardener/pull/14372)]
- `[DEVELOPER]` Added panic recovery to `flow.Task` to prevent a single task failure from crashing the entire controller. If you previously implemented custom panic recovery within your tasks, you  can consider removing that custom panic recovery. by @dergeberl [[#14606](https://github.com/gardener/gardener/pull/14606)]
- `[DEVELOPER]` The local setup now includes a `cloud-controller-manager-local`, which is deployed for kind clusters (in the `kube-system` namespace) and for shoot clusters (in the control plane namespace). The cloud-controller-manager implements `Services` of type `LoadBalancer` by creating dedicated Docker containers listening on external IPs (automatically added to the host's loopback interface on kind cluster creation). This replaces previous hacks for implementing load balancers in provider-local and supports load balancers in shoot clusters for the first time. by @timebertt [[#14415](https://github.com/gardener/gardener/pull/14415)]
- `[DEPENDENCY]` Extension charts deployed on self-hosted shoot clusters may not receive `.Values.gardener.seed` when the shoot has not yet been promoted to a `Seed`. Charts should guard Seed-dependent values with `{{ if .Values.gardener.seed }}`. by @rfranzke [[#14395](https://github.com/gardener/gardener/pull/14395)]
- `[DEPENDENCY]` A new helper function `BuildExtensionTypeNamespaceSelector` has been introduced. It builds proper namespaces selectors for extension webhooks, based on the extension `type` and `class` attributes. by @timuthy [[#14460](https://github.com/gardener/gardener/pull/14460)]

## ✨ New Features
- `[OPERATOR]` Added `spec.runtimeCluster.settings.loadBalancerServices.proxyProtocol.allowed` and `spec.runtimeCluster.settings.loadBalancerServices.externalTrafficPolicy` to the `Garden` resource. When Allowed set to `true`, `gardener-operator` configures the Istio ingress gateway to terminate PROXY protocol, enabling preservation of the original client IP address for load balancers that use PROXY protocol. The explicit nature of the setting allows a seamless migration while enforcing a good security posture. `ExternalTrafficPolicy` allows configuring the Gateway either as `Cluster` (default) or `Local`, similar to the Seed. by @jamand [[#14420](https://github.com/gardener/gardener/pull/14420)]
- `[OPERATOR]` The `gardener-node-agent` now monitors the health of systemd units declared in the `OperatingSystemConfig` and reports a `SystemdUnitsReady` condition on the `Node`. Unhealthy units are surfaced on the `Shoot` via the `EveryNodeReady` condition. by @rfranzke [[#14496](https://github.com/gardener/gardener/pull/14496)]
- `[USER]` The `Shoot` spec field `spec.kubernetes.kubeAPIServer.encryptionConfig.provider.type` now supports the `aesgcm` and `secretbox` encryption provider types. The field is immutable. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]
- `[USER]` The `Garden` spec fields `spec.virtualCluster.kubernetes.kubeAPIServer.encryptionConfig.provider.type`and `spec.virtualCluster.gardener.gardenerAPIServer.encryptionConfig.provider.type` now support the `aesgcm` and `secretbox` encryption provider types. The fields are immutable. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]

## 🐛 Bug Fixes
- `[OPERATOR]` The garbage collection logic now also deletes pods that are stuck due to preemption by the kubelet or scheduler. by @rfranzke [[#14519](https://github.com/gardener/gardener/pull/14519)]
- `[OPERATOR]` The observability setup is deleted as late as possible so that, in case an error occurs during the deletion of any components, there is still enough information available to investigate the issue. by @iypetrov [[#14475](https://github.com/gardener/gardener/pull/14475)]
- `[OPERATOR]` A bug was fixed where `gardenadm init` could fail due to a transient error while fetching the `shoot-gardener-node-agent` ManagedResource when the Kubernetes API server is temporarily unavailable due to static pod rollout. by @ialidzhikov [[#14601](https://github.com/gardener/gardener/pull/14601)]
- `[OPERATOR]` A bug has been fixed that caused unintentional `ShootState` creations for `Shoot`s running on managed seed clusters (those backed by `ManagedSeed` objects). The affected `ShootState` resources are automatically cleaned up by `gardenlet` during start-up. by @plkokanov [[#14666](https://github.com/gardener/gardener/pull/14666)]
- `[USER]` Cluster-proportional autoscaling of coredns now works with Kubernetes >= 1.33 by @ScheererJ [[#14638](https://github.com/gardener/gardener/pull/14638)]
- `[DEPENDENCY]` The `golangci-lint` makefile install recipe can be used in Gardener extensions again. by @timebertt [[#14555](https://github.com/gardener/gardener/pull/14555)]

## 🏃 Others
- `[OPERATOR]` Gardener Discovery Server is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14587](https://github.com/gardener/gardener/pull/14587)]
- `[OPERATOR]` Alertmanager is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14575](https://github.com/gardener/gardener/pull/14575)]
- `[OPERATOR]` Vali is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14567](https://github.com/gardener/gardener/pull/14567)]
- `[OPERATOR]` OpenTelemetry Collector is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14585](https://github.com/gardener/gardener/pull/14585)]
- `[OPERATOR]` Use `Info` logging for admission denials instead of `Error` so that the full stack trace to every denial log entry does not get logged by @DockToFuture [[#14561](https://github.com/gardener/gardener/pull/14561)]
- `[OPERATOR]` Apiserver-Proxy uses a dedicated network interface `apiserver-proxy` for its advertised IP address. Requests from nodes such as kubelet probes will use the proper IP as per the route table again. by @domdom82 [[#14440](https://github.com/gardener/gardener/pull/14440)]
- `[OPERATOR]` Shoot advertised addresses are now configurable by extension components for Shoot VirtualService resources. by @ScheererJ [[#14534](https://github.com/gardener/gardener/pull/14534)]
- `[OPERATOR]` During `Shoot` reconciliation `MachineDeployment`s are now deployed in parallel. This should speed up the reconciliation of the `Worker` resource. by @plkokanov [[#14220](https://github.com/gardener/gardener/pull/14220)]
- `[OPERATOR]` Resource limits have been removed for node-problem-detector by @domdom82 [[#14450](https://github.com/gardener/gardener/pull/14450)]
- `[OPERATOR]` Prometheus is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14573](https://github.com/gardener/gardener/pull/14573)]
- `[OPERATOR]` Additional per nodegroup metrics can be exposed by `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.emitPerNodeGroupMetrics` in the `Shoot` API . by @aaronfern [[#14557](https://github.com/gardener/gardener/pull/14557)]
- `[OPERATOR]` Gardener Dashboard is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14586](https://github.com/gardener/gardener/pull/14586)]
- `[OPERATOR]` `Patch` is now used to label all `Machine`s with `force-deletion: True` instead of `Update` when the `Shoot` is being hibernated or deleted. Additionally, the function used to do this during the reconciliation of the `Worker` resource is now only executed once instead of for each `MachineDeployment`. by @plkokanov [[#14220](https://github.com/gardener/gardener/pull/14220)]
- `[OPERATOR]` The `gardenadm init` flow now determines Pod network availability by checking the Node's `NetworkUnavailable` condition instead of the `shoot-core-coredns` ManagedResource health. This is a prerequisite improvement for the control plane Node restoration feature. by @ialidzhikov [[#14523](https://github.com/gardener/gardener/pull/14523)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.2` to `v0.36.3`. [Release Notes](https://github.com/gardener/etcd-druid/releases/tag/v0.36.3)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.2` to `v0.36.3`. by @Shreyas-s14 [[#14661](https://github.com/gardener/gardener/pull/14661)]
- `[OPERATOR]` cluster-autoscaler now supports a new expander `least-nodes` from v1.31 onwards by @aaronfern [[#14558](https://github.com/gardener/gardener/pull/14558)]
- `[OPERATOR]` Plutono is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14142](https://github.com/gardener/gardener/pull/14142)]
- `[USER]` VPN-related dashboards now show a shared crosshair on all panels. by @domdom82 [[#14576](https://github.com/gardener/gardener/pull/14576)]
- `[DEVELOPER]` The DinD version used in the remote local setup has been updated to v29. by @vicwicker [[#14644](https://github.com/gardener/gardener/pull/14644)]
- `[DEVELOPER]` `make seed-down` and `make garden-down` cleanup additional resources by @matthias-horne [[#14547](https://github.com/gardener/gardener/pull/14547)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/node-exporter` from `v1.10.2` to `v1.11.1`. by @gardener-ci-robot [[#14508](https://github.com/gardener/gardener/pull/14508)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.29.1` to `1.29.2`.   
  - `gcr.io/istio-release/proxyv2` from `1.29.1` to `1.29.2`.   
  - `istio.io/api` from `v1.29.1` to `v1.29.2`. by @gardener-ci-robot [[#14582](https://github.com/gardener/gardener/pull/14582)]
- `[DEPENDENCY]` Update kindest/node image to v1.35.1 (Kubernetes v1.35.1, containerd v2.2.1). by @LucaBernstein [[#14421](https://github.com/gardener/gardener/pull/14421)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.31` to `v2.2.32`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.32) by @gardener-ci-robot [[#14611](https://github.com/gardener/gardener/pull/14611)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.5.5` to `2.6.0`. by @gardener-ci-robot [[#14537](https://github.com/gardener/gardener/pull/14537)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.1` to `v0.36.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.36.2)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.1` to `v0.36.2`. by @gardener-ci-robot [[#14579](https://github.com/gardener/gardener/pull/14579)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.46` to `v7.5.47`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.47) by @gardener-ci-robot [[#14613](https://github.com/gardener/gardener/pull/14613)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-discovery-server` from `v0.9.0` to `v0.10.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.10.0) by @gardener-ci-robot [[#14600](https://github.com/gardener/gardener/pull/14600)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/coredns-config-adapter` from `v0.5.0` to `v0.6.0`. [Release Notes](https://redirect.github.com/gardener/coredns-config-adapter/releases/tag/v0.6.0) by @gardener-ci-robot [[#14605](https://github.com/gardener/gardener/pull/14605)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.31.1` to `v0.32.0`. by @gardener-ci-robot [[#14538](https://github.com/gardener/gardener/pull/14538)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.37.0` to `v1.37.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.37.2) by @gardener-ci-robot [[#14563](https://github.com/gardener/gardener/pull/14563)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:4c0764b6cbd79bea391de905c444e8901f3ef901c9cc601a5b8fcf66394aa40a`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:a4bed35099c21fb59a719a718afc1f83040d4746a7dfaf81c4442e09725bf0ab`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:549aafc0b61b16d9e7d6fa1ab0bd95bd68f0d7dfac77989be541e9551f4dc726`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:b0675085cef3786d983b6a751cff7820b6dd896e55afccd99e07cefa2891f161`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:3757e8e04a1e555abbe832c72932211b4fb766ee8f3d6ded15c9acd6a14adde9`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:68bc182b3b1cbfcbbdb26bcb9b0ac5a182e0de0b1ae785c7f0fd9947e9653ccd`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:558ae9de4cfffe41cce57e22bc8505c9f38d54e0fb8feea7b06754970b9090a3`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:ca399bfd9253860c2a8f5287aec8ecdd90b8b4fa96e8694dede72a05f0fbe263`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:47b8d427ac8f6deee19004e196c2a3396edd5010293bb1272abd7aaa2d385dae`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:88953b01d223307b0ea3e05c8df24eeb1f08e5c1883b85be42b5e5da7a2f5af3`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:97bbf8d719ee9a6a441aee3ea1690bcb054eaf5ee23b3e98ee7ba580e5732a80`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b40af8512c84cb32e56541716cba9036152e4393e9c810d0ea109d9e89f3abe7`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:b687d0080c773f8b51d7e7fe262bd38774cace83dc175bd59e86b38d4378fa89`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:de2bed5eedb5348fb5399b7ade0ec3569a247f75a6ea532b1365cab8c84cba59`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:127276658aff87d975ce690a0a862c0073d1c119028110d0a4dcb1a71e281c50`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:637b96ae9ddebe86ce4b36cb9a275b88a5dcd6cc7a7c1ac3993d7d93c0b89374`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:118cf6da60ad6930362891b741ab79a4d596a5fc8933c2cef7f8cb9fe75653f8`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:f9aa546df5d17ae6fe8510da46bb403de6d5a594febec773258cf79886257ec6`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.141.0</code></b></summary>

# [github.com/gardener/gardener:v1.141.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `NewWorkerPoolHash` feature gate has been promoted to GA and can no longer be disabled. by @timuthy [[#14531](https://github.com/gardener/gardener/pull/14531)]
- `[OPERATOR]` ⚠️ Gardener does no longer support Garden, Seed, or Shoot clusters with Kubernetes versions <= 1.30. Make sure to upgrade all existing clusters before upgrading to this Gardener version. by @timuthy [[#14501](https://github.com/gardener/gardener/pull/14501)]
- `[USER]` Newly created `Shoot`s now have a set period of `28d` for etcd encryption key rotation. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]
- `[DEVELOPER]` `make gardenadm-up SCENARIO=connect` now deploys the Gardener (`gardener-operator` and `Garden` resource) directly into the self-hosted shoot. Previously, it was deploying them next to the machine pods of the self-hosted shoot in the kind cluster. Use `make gardenadm-up SCENARIO=connect-kind` for the out-of-self-hosted-shoot deployment mode. by @rfranzke [[#14387](https://github.com/gardener/gardener/pull/14387)]
- `[DEPENDENCY]` The obsolete `Provider` field was removed from the `extensionswebhook.Webhook` struct. The field can be removed without substitution. by @timuthy [[#14460](https://github.com/gardener/gardener/pull/14460)]

## 📰 Noteworthy
- `[OPERATOR]` The `gardener-resource-manager` HA config webhook now uses `ScheduleAnyway` instead of `DoNotSchedule` for the hostname topology spread constraint when there is at most one node in the cluster. A new `node-high-availability-config` controller re-triggers the webhook when the node count crosses this threshold. by @rfranzke [[#14595](https://github.com/gardener/gardener/pull/14595)]
- `[OPERATOR]` machine-controller-manager's RBAC permissions for the source cluster have been reduced to follow the principle of least privilege. by @dimityrmirchev [[#14372](https://github.com/gardener/gardener/pull/14372)]
- `[DEVELOPER]` Added panic recovery to `flow.Task` to prevent a single task failure from crashing the entire controller. If you previously implemented custom panic recovery within your tasks, you  can consider removing that custom panic recovery. by @dergeberl [[#14606](https://github.com/gardener/gardener/pull/14606)]
- `[DEVELOPER]` The local setup now includes a `cloud-controller-manager-local`, which is deployed for kind clusters (in the `kube-system` namespace) and for shoot clusters (in the control plane namespace). The cloud-controller-manager implements `Services` of type `LoadBalancer` by creating dedicated Docker containers listening on external IPs (automatically added to the host's loopback interface on kind cluster creation). This replaces previous hacks for implementing load balancers in provider-local and supports load balancers in shoot clusters for the first time. by @timebertt [[#14415](https://github.com/gardener/gardener/pull/14415)]
- `[DEPENDENCY]` Extension charts deployed on self-hosted shoot clusters may not receive `.Values.gardener.seed` when the shoot has not yet been promoted to a `Seed`. Charts should guard Seed-dependent values with `{{ if .Values.gardener.seed }}`. by @rfranzke [[#14395](https://github.com/gardener/gardener/pull/14395)]
- `[DEPENDENCY]` A new helper function `BuildExtensionTypeNamespaceSelector` has been introduced. It builds proper namespaces selectors for extension webhooks, based on the extension `type` and `class` attributes. by @timuthy [[#14460](https://github.com/gardener/gardener/pull/14460)]

## ✨ New Features
- `[OPERATOR]` Added `spec.runtimeCluster.settings.loadBalancerServices.proxyProtocol.allowed` and `spec.runtimeCluster.settings.loadBalancerServices.externalTrafficPolicy` to the `Garden` resource. When Allowed set to `true`, `gardener-operator` configures the Istio ingress gateway to terminate PROXY protocol, enabling preservation of the original client IP address for load balancers that use PROXY protocol. The explicit nature of the setting allows a seamless migration while enforcing a good security posture. `ExternalTrafficPolicy` allows configuring the Gateway either as `Cluster` (default) or `Local`, similar to the Seed. by @jamand [[#14420](https://github.com/gardener/gardener/pull/14420)]
- `[OPERATOR]` The `gardener-node-agent` now monitors the health of systemd units declared in the `OperatingSystemConfig` and reports a `SystemdUnitsReady` condition on the `Node`. Unhealthy units are surfaced on the `Shoot` via the `EveryNodeReady` condition. by @rfranzke [[#14496](https://github.com/gardener/gardener/pull/14496)]
- `[USER]` The `Shoot` spec field `spec.kubernetes.kubeAPIServer.encryptionConfig.provider.type` now supports the `aesgcm` and `secretbox` encryption provider types. The field is immutable. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]
- `[USER]` The `Garden` spec fields `spec.virtualCluster.kubernetes.kubeAPIServer.encryptionConfig.provider.type`and `spec.virtualCluster.gardener.gardenerAPIServer.encryptionConfig.provider.type` now support the `aesgcm` and `secretbox` encryption provider types. The fields are immutable. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]

## 🐛 Bug Fixes
- `[OPERATOR]` The garbage collection logic now also deletes pods that are stuck due to preemption by the kubelet or scheduler. by @rfranzke [[#14519](https://github.com/gardener/gardener/pull/14519)]
- `[OPERATOR]` The observability setup is deleted as late as possible so that, in case an error occurs during the deletion of any components, there is still enough information available to investigate the issue. by @iypetrov [[#14475](https://github.com/gardener/gardener/pull/14475)]
- `[OPERATOR]` A bug was fixed where `gardenadm init` could fail due to a transient error while fetching the `shoot-gardener-node-agent` ManagedResource when the Kubernetes API server is temporarily unavailable due to static pod rollout. by @ialidzhikov [[#14601](https://github.com/gardener/gardener/pull/14601)]
- `[OPERATOR]` A bug has been fixed that caused unintentional `ShootState` creations for `Shoot`s running on managed seed clusters (those backed by `ManagedSeed` objects). The affected `ShootState` resources are automatically cleaned up by `gardenlet` during start-up. by @plkokanov [[#14666](https://github.com/gardener/gardener/pull/14666)]
- `[USER]` Cluster-proportional autoscaling of coredns now works with Kubernetes >= 1.33 by @ScheererJ [[#14638](https://github.com/gardener/gardener/pull/14638)]
- `[DEPENDENCY]` The `golangci-lint` makefile install recipe can be used in Gardener extensions again. by @timebertt [[#14555](https://github.com/gardener/gardener/pull/14555)]

## 🏃 Others
- `[OPERATOR]` Gardener Discovery Server is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14587](https://github.com/gardener/gardener/pull/14587)]
- `[OPERATOR]` Alertmanager is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14575](https://github.com/gardener/gardener/pull/14575)]
- `[OPERATOR]` Vali is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14567](https://github.com/gardener/gardener/pull/14567)]
- `[OPERATOR]` OpenTelemetry Collector is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14585](https://github.com/gardener/gardener/pull/14585)]
- `[OPERATOR]` Use `Info` logging for admission denials instead of `Error` so that the full stack trace to every denial log entry does not get logged by @DockToFuture [[#14561](https://github.com/gardener/gardener/pull/14561)]
- `[OPERATOR]` Apiserver-Proxy uses a dedicated network interface `apiserver-proxy` for its advertised IP address. Requests from nodes such as kubelet probes will use the proper IP as per the route table again. by @domdom82 [[#14440](https://github.com/gardener/gardener/pull/14440)]
- `[OPERATOR]` Shoot advertised addresses are now configurable by extension components for Shoot VirtualService resources. by @ScheererJ [[#14534](https://github.com/gardener/gardener/pull/14534)]
- `[OPERATOR]` During `Shoot` reconciliation `MachineDeployment`s are now deployed in parallel. This should speed up the reconciliation of the `Worker` resource. by @plkokanov [[#14220](https://github.com/gardener/gardener/pull/14220)]
- `[OPERATOR]` Resource limits have been removed for node-problem-detector by @domdom82 [[#14450](https://github.com/gardener/gardener/pull/14450)]
- `[OPERATOR]` Prometheus is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14573](https://github.com/gardener/gardener/pull/14573)]
- `[OPERATOR]` Additional per nodegroup metrics can be exposed by `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.emitPerNodeGroupMetrics` in the `Shoot` API . by @aaronfern [[#14557](https://github.com/gardener/gardener/pull/14557)]
- `[OPERATOR]` Gardener Dashboard is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14586](https://github.com/gardener/gardener/pull/14586)]
- `[OPERATOR]` `Patch` is now used to label all `Machine`s with `force-deletion: True` instead of `Update` when the `Shoot` is being hibernated or deleted. Additionally, the function used to do this during the reconciliation of the `Worker` resource is now only executed once instead of for each `MachineDeployment`. by @plkokanov [[#14220](https://github.com/gardener/gardener/pull/14220)]
- `[OPERATOR]` The `gardenadm init` flow now determines Pod network availability by checking the Node's `NetworkUnavailable` condition instead of the `shoot-core-coredns` ManagedResource health. This is a prerequisite improvement for the control plane Node restoration feature. by @ialidzhikov [[#14523](https://github.com/gardener/gardener/pull/14523)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.2` to `v0.36.3`. [Release Notes](https://github.com/gardener/etcd-druid/releases/tag/v0.36.3)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.2` to `v0.36.3`. by @Shreyas-s14 [[#14661](https://github.com/gardener/gardener/pull/14661)]
- `[OPERATOR]` cluster-autoscaler now supports a new expander `least-nodes` from v1.31 onwards by @aaronfern [[#14558](https://github.com/gardener/gardener/pull/14558)]
- `[OPERATOR]` Plutono is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14142](https://github.com/gardener/gardener/pull/14142)]
- `[USER]` VPN-related dashboards now show a shared crosshair on all panels. by @domdom82 [[#14576](https://github.com/gardener/gardener/pull/14576)]
- `[DEVELOPER]` The DinD version used in the remote local setup has been updated to v29. by @vicwicker [[#14644](https://github.com/gardener/gardener/pull/14644)]
- `[DEVELOPER]` `make seed-down` and `make garden-down` cleanup additional resources by @matthias-horne [[#14547](https://github.com/gardener/gardener/pull/14547)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/node-exporter` from `v1.10.2` to `v1.11.1`. by @gardener-ci-robot [[#14508](https://github.com/gardener/gardener/pull/14508)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.29.1` to `1.29.2`.   
  - `gcr.io/istio-release/proxyv2` from `1.29.1` to `1.29.2`.   
  - `istio.io/api` from `v1.29.1` to `v1.29.2`. by @gardener-ci-robot [[#14582](https://github.com/gardener/gardener/pull/14582)]
- `[DEPENDENCY]` Update kindest/node image to v1.35.1 (Kubernetes v1.35.1, containerd v2.2.1). by @LucaBernstein [[#14421](https://github.com/gardener/gardener/pull/14421)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.31` to `v2.2.32`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.32) by @gardener-ci-robot [[#14611](https://github.com/gardener/gardener/pull/14611)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.5.5` to `2.6.0`. by @gardener-ci-robot [[#14537](https://github.com/gardener/gardener/pull/14537)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.1` to `v0.36.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.36.2)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.1` to `v0.36.2`. by @gardener-ci-robot [[#14579](https://github.com/gardener/gardener/pull/14579)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.46` to `v7.5.47`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.47) by @gardener-ci-robot [[#14613](https://github.com/gardener/gardener/pull/14613)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-discovery-server` from `v0.9.0` to `v0.10.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.10.0) by @gardener-ci-robot [[#14600](https://github.com/gardener/gardener/pull/14600)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/coredns-config-adapter` from `v0.5.0` to `v0.6.0`. [Release Notes](https://redirect.github.com/gardener/coredns-config-adapter/releases/tag/v0.6.0) by @gardener-ci-robot [[#14605](https://github.com/gardener/gardener/pull/14605)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.31.1` to `v0.32.0`. by @gardener-ci-robot [[#14538](https://github.com/gardener/gardener/pull/14538)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.37.0` to `v1.37.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.37.2) by @gardener-ci-robot [[#14563](https://github.com/gardener/gardener/pull/14563)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:4c0764b6cbd79bea391de905c444e8901f3ef901c9cc601a5b8fcf66394aa40a`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:a4bed35099c21fb59a719a718afc1f83040d4746a7dfaf81c4442e09725bf0ab`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:549aafc0b61b16d9e7d6fa1ab0bd95bd68f0d7dfac77989be541e9551f4dc726`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:b0675085cef3786d983b6a751cff7820b6dd896e55afccd99e07cefa2891f161`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:3757e8e04a1e555abbe832c72932211b4fb766ee8f3d6ded15c9acd6a14adde9`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:68bc182b3b1cbfcbbdb26bcb9b0ac5a182e0de0b1ae785c7f0fd9947e9653ccd`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:558ae9de4cfffe41cce57e22bc8505c9f38d54e0fb8feea7b06754970b9090a3`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:ca399bfd9253860c2a8f5287aec8ecdd90b8b4fa96e8694dede72a05f0fbe263`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:47b8d427ac8f6deee19004e196c2a3396edd5010293bb1272abd7aaa2d385dae`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:88953b01d223307b0ea3e05c8df24eeb1f08e5c1883b85be42b5e5da7a2f5af3`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:97bbf8d719ee9a6a441aee3ea1690bcb054eaf5ee23b3e98ee7ba580e5732a80`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b40af8512c84cb32e56541716cba9036152e4393e9c810d0ea109d9e89f3abe7`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:b687d0080c773f8b51d7e7fe262bd38774cace83dc175bd59e86b38d4378fa89`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:de2bed5eedb5348fb5399b7ade0ec3569a247f75a6ea532b1365cab8c84cba59`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:127276658aff87d975ce690a0a862c0073d1c119028110d0a4dcb1a71e281c50`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:637b96ae9ddebe86ce4b36cb9a275b88a5dcd6cc7a7c1ac3993d7d93c0b89374`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:118cf6da60ad6930362891b741ab79a4d596a5fc8933c2cef7f8cb9fe75653f8`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:f9aa546df5d17ae6fe8510da46bb403de6d5a594febec773258cf79886257ec6`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.141.0</code></b></summary>

# [github.com/gardener/gardener:v1.141.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `NewWorkerPoolHash` feature gate has been promoted to GA and can no longer be disabled. by @timuthy [[#14531](https://github.com/gardener/gardener/pull/14531)]
- `[OPERATOR]` ⚠️ Gardener does no longer support Garden, Seed, or Shoot clusters with Kubernetes versions <= 1.30. Make sure to upgrade all existing clusters before upgrading to this Gardener version. by @timuthy [[#14501](https://github.com/gardener/gardener/pull/14501)]
- `[USER]` Newly created `Shoot`s now have a set period of `28d` for etcd encryption key rotation. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]
- `[DEVELOPER]` `make gardenadm-up SCENARIO=connect` now deploys the Gardener (`gardener-operator` and `Garden` resource) directly into the self-hosted shoot. Previously, it was deploying them next to the machine pods of the self-hosted shoot in the kind cluster. Use `make gardenadm-up SCENARIO=connect-kind` for the out-of-self-hosted-shoot deployment mode. by @rfranzke [[#14387](https://github.com/gardener/gardener/pull/14387)]
- `[DEPENDENCY]` The obsolete `Provider` field was removed from the `extensionswebhook.Webhook` struct. The field can be removed without substitution. by @timuthy [[#14460](https://github.com/gardener/gardener/pull/14460)]

## 📰 Noteworthy
- `[OPERATOR]` The `gardener-resource-manager` HA config webhook now uses `ScheduleAnyway` instead of `DoNotSchedule` for the hostname topology spread constraint when there is at most one node in the cluster. A new `node-high-availability-config` controller re-triggers the webhook when the node count crosses this threshold. by @rfranzke [[#14595](https://github.com/gardener/gardener/pull/14595)]
- `[OPERATOR]` machine-controller-manager's RBAC permissions for the source cluster have been reduced to follow the principle of least privilege. by @dimityrmirchev [[#14372](https://github.com/gardener/gardener/pull/14372)]
- `[DEVELOPER]` Added panic recovery to `flow.Task` to prevent a single task failure from crashing the entire controller. If you previously implemented custom panic recovery within your tasks, you  can consider removing that custom panic recovery. by @dergeberl [[#14606](https://github.com/gardener/gardener/pull/14606)]
- `[DEVELOPER]` The local setup now includes a `cloud-controller-manager-local`, which is deployed for kind clusters (in the `kube-system` namespace) and for shoot clusters (in the control plane namespace). The cloud-controller-manager implements `Services` of type `LoadBalancer` by creating dedicated Docker containers listening on external IPs (automatically added to the host's loopback interface on kind cluster creation). This replaces previous hacks for implementing load balancers in provider-local and supports load balancers in shoot clusters for the first time. by @timebertt [[#14415](https://github.com/gardener/gardener/pull/14415)]
- `[DEPENDENCY]` Extension charts deployed on self-hosted shoot clusters may not receive `.Values.gardener.seed` when the shoot has not yet been promoted to a `Seed`. Charts should guard Seed-dependent values with `{{ if .Values.gardener.seed }}`. by @rfranzke [[#14395](https://github.com/gardener/gardener/pull/14395)]
- `[DEPENDENCY]` A new helper function `BuildExtensionTypeNamespaceSelector` has been introduced. It builds proper namespaces selectors for extension webhooks, based on the extension `type` and `class` attributes. by @timuthy [[#14460](https://github.com/gardener/gardener/pull/14460)]

## ✨ New Features
- `[OPERATOR]` Added `spec.runtimeCluster.settings.loadBalancerServices.proxyProtocol.allowed` and `spec.runtimeCluster.settings.loadBalancerServices.externalTrafficPolicy` to the `Garden` resource. When Allowed set to `true`, `gardener-operator` configures the Istio ingress gateway to terminate PROXY protocol, enabling preservation of the original client IP address for load balancers that use PROXY protocol. The explicit nature of the setting allows a seamless migration while enforcing a good security posture. `ExternalTrafficPolicy` allows configuring the Gateway either as `Cluster` (default) or `Local`, similar to the Seed. by @jamand [[#14420](https://github.com/gardener/gardener/pull/14420)]
- `[OPERATOR]` The `gardener-node-agent` now monitors the health of systemd units declared in the `OperatingSystemConfig` and reports a `SystemdUnitsReady` condition on the `Node`. Unhealthy units are surfaced on the `Shoot` via the `EveryNodeReady` condition. by @rfranzke [[#14496](https://github.com/gardener/gardener/pull/14496)]
- `[USER]` The `Shoot` spec field `spec.kubernetes.kubeAPIServer.encryptionConfig.provider.type` now supports the `aesgcm` and `secretbox` encryption provider types. The field is immutable. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]
- `[USER]` The `Garden` spec fields `spec.virtualCluster.kubernetes.kubeAPIServer.encryptionConfig.provider.type`and `spec.virtualCluster.gardener.gardenerAPIServer.encryptionConfig.provider.type` now support the `aesgcm` and `secretbox` encryption provider types. The fields are immutable. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]

## 🐛 Bug Fixes
- `[OPERATOR]` The garbage collection logic now also deletes pods that are stuck due to preemption by the kubelet or scheduler. by @rfranzke [[#14519](https://github.com/gardener/gardener/pull/14519)]
- `[OPERATOR]` The observability setup is deleted as late as possible so that, in case an error occurs during the deletion of any components, there is still enough information available to investigate the issue. by @iypetrov [[#14475](https://github.com/gardener/gardener/pull/14475)]
- `[OPERATOR]` A bug was fixed where `gardenadm init` could fail due to a transient error while fetching the `shoot-gardener-node-agent` ManagedResource when the Kubernetes API server is temporarily unavailable due to static pod rollout. by @ialidzhikov [[#14601](https://github.com/gardener/gardener/pull/14601)]
- `[OPERATOR]` A bug has been fixed that caused unintentional `ShootState` creations for `Shoot`s running on managed seed clusters (those backed by `ManagedSeed` objects). The affected `ShootState` resources are automatically cleaned up by `gardenlet` during start-up. by @plkokanov [[#14666](https://github.com/gardener/gardener/pull/14666)]
- `[USER]` Cluster-proportional autoscaling of coredns now works with Kubernetes >= 1.33 by @ScheererJ [[#14638](https://github.com/gardener/gardener/pull/14638)]
- `[DEPENDENCY]` The `golangci-lint` makefile install recipe can be used in Gardener extensions again. by @timebertt [[#14555](https://github.com/gardener/gardener/pull/14555)]

## 🏃 Others
- `[OPERATOR]` Gardener Discovery Server is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14587](https://github.com/gardener/gardener/pull/14587)]
- `[OPERATOR]` Alertmanager is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14575](https://github.com/gardener/gardener/pull/14575)]
- `[OPERATOR]` Vali is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14567](https://github.com/gardener/gardener/pull/14567)]
- `[OPERATOR]` OpenTelemetry Collector is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14585](https://github.com/gardener/gardener/pull/14585)]
- `[OPERATOR]` Use `Info` logging for admission denials instead of `Error` so that the full stack trace to every denial log entry does not get logged by @DockToFuture [[#14561](https://github.com/gardener/gardener/pull/14561)]
- `[OPERATOR]` Apiserver-Proxy uses a dedicated network interface `apiserver-proxy` for its advertised IP address. Requests from nodes such as kubelet probes will use the proper IP as per the route table again. by @domdom82 [[#14440](https://github.com/gardener/gardener/pull/14440)]
- `[OPERATOR]` Shoot advertised addresses are now configurable by extension components for Shoot VirtualService resources. by @ScheererJ [[#14534](https://github.com/gardener/gardener/pull/14534)]
- `[OPERATOR]` During `Shoot` reconciliation `MachineDeployment`s are now deployed in parallel. This should speed up the reconciliation of the `Worker` resource. by @plkokanov [[#14220](https://github.com/gardener/gardener/pull/14220)]
- `[OPERATOR]` Resource limits have been removed for node-problem-detector by @domdom82 [[#14450](https://github.com/gardener/gardener/pull/14450)]
- `[OPERATOR]` Prometheus is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14573](https://github.com/gardener/gardener/pull/14573)]
- `[OPERATOR]` Additional per nodegroup metrics can be exposed by `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.emitPerNodeGroupMetrics` in the `Shoot` API . by @aaronfern [[#14557](https://github.com/gardener/gardener/pull/14557)]
- `[OPERATOR]` Gardener Dashboard is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14586](https://github.com/gardener/gardener/pull/14586)]
- `[OPERATOR]` `Patch` is now used to label all `Machine`s with `force-deletion: True` instead of `Update` when the `Shoot` is being hibernated or deleted. Additionally, the function used to do this during the reconciliation of the `Worker` resource is now only executed once instead of for each `MachineDeployment`. by @plkokanov [[#14220](https://github.com/gardener/gardener/pull/14220)]
- `[OPERATOR]` The `gardenadm init` flow now determines Pod network availability by checking the Node's `NetworkUnavailable` condition instead of the `shoot-core-coredns` ManagedResource health. This is a prerequisite improvement for the control plane Node restoration feature. by @ialidzhikov [[#14523](https://github.com/gardener/gardener/pull/14523)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.2` to `v0.36.3`. [Release Notes](https://github.com/gardener/etcd-druid/releases/tag/v0.36.3)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.2` to `v0.36.3`. by @Shreyas-s14 [[#14661](https://github.com/gardener/gardener/pull/14661)]
- `[OPERATOR]` cluster-autoscaler now supports a new expander `least-nodes` from v1.31 onwards by @aaronfern [[#14558](https://github.com/gardener/gardener/pull/14558)]
- `[OPERATOR]` Plutono is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14142](https://github.com/gardener/gardener/pull/14142)]
- `[USER]` VPN-related dashboards now show a shared crosshair on all panels. by @domdom82 [[#14576](https://github.com/gardener/gardener/pull/14576)]
- `[DEVELOPER]` The DinD version used in the remote local setup has been updated to v29. by @vicwicker [[#14644](https://github.com/gardener/gardener/pull/14644)]
- `[DEVELOPER]` `make seed-down` and `make garden-down` cleanup additional resources by @matthias-horne [[#14547](https://github.com/gardener/gardener/pull/14547)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/node-exporter` from `v1.10.2` to `v1.11.1`. by @gardener-ci-robot [[#14508](https://github.com/gardener/gardener/pull/14508)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.29.1` to `1.29.2`.   
  - `gcr.io/istio-release/proxyv2` from `1.29.1` to `1.29.2`.   
  - `istio.io/api` from `v1.29.1` to `v1.29.2`. by @gardener-ci-robot [[#14582](https://github.com/gardener/gardener/pull/14582)]
- `[DEPENDENCY]` Update kindest/node image to v1.35.1 (Kubernetes v1.35.1, containerd v2.2.1). by @LucaBernstein [[#14421](https://github.com/gardener/gardener/pull/14421)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.31` to `v2.2.32`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.32) by @gardener-ci-robot [[#14611](https://github.com/gardener/gardener/pull/14611)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.5.5` to `2.6.0`. by @gardener-ci-robot [[#14537](https://github.com/gardener/gardener/pull/14537)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.1` to `v0.36.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.36.2)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.1` to `v0.36.2`. by @gardener-ci-robot [[#14579](https://github.com/gardener/gardener/pull/14579)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.46` to `v7.5.47`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.47) by @gardener-ci-robot [[#14613](https://github.com/gardener/gardener/pull/14613)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-discovery-server` from `v0.9.0` to `v0.10.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.10.0) by @gardener-ci-robot [[#14600](https://github.com/gardener/gardener/pull/14600)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/coredns-config-adapter` from `v0.5.0` to `v0.6.0`. [Release Notes](https://redirect.github.com/gardener/coredns-config-adapter/releases/tag/v0.6.0) by @gardener-ci-robot [[#14605](https://github.com/gardener/gardener/pull/14605)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.31.1` to `v0.32.0`. by @gardener-ci-robot [[#14538](https://github.com/gardener/gardener/pull/14538)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.37.0` to `v1.37.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.37.2) by @gardener-ci-robot [[#14563](https://github.com/gardener/gardener/pull/14563)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:4c0764b6cbd79bea391de905c444e8901f3ef901c9cc601a5b8fcf66394aa40a`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:a4bed35099c21fb59a719a718afc1f83040d4746a7dfaf81c4442e09725bf0ab`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:549aafc0b61b16d9e7d6fa1ab0bd95bd68f0d7dfac77989be541e9551f4dc726`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:b0675085cef3786d983b6a751cff7820b6dd896e55afccd99e07cefa2891f161`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:3757e8e04a1e555abbe832c72932211b4fb766ee8f3d6ded15c9acd6a14adde9`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:68bc182b3b1cbfcbbdb26bcb9b0ac5a182e0de0b1ae785c7f0fd9947e9653ccd`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:558ae9de4cfffe41cce57e22bc8505c9f38d54e0fb8feea7b06754970b9090a3`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:ca399bfd9253860c2a8f5287aec8ecdd90b8b4fa96e8694dede72a05f0fbe263`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:47b8d427ac8f6deee19004e196c2a3396edd5010293bb1272abd7aaa2d385dae`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:88953b01d223307b0ea3e05c8df24eeb1f08e5c1883b85be42b5e5da7a2f5af3`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:97bbf8d719ee9a6a441aee3ea1690bcb054eaf5ee23b3e98ee7ba580e5732a80`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b40af8512c84cb32e56541716cba9036152e4393e9c810d0ea109d9e89f3abe7`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:b687d0080c773f8b51d7e7fe262bd38774cace83dc175bd59e86b38d4378fa89`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:de2bed5eedb5348fb5399b7ade0ec3569a247f75a6ea532b1365cab8c84cba59`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:127276658aff87d975ce690a0a862c0073d1c119028110d0a4dcb1a71e281c50`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:637b96ae9ddebe86ce4b36cb9a275b88a5dcd6cc7a7c1ac3993d7d93c0b89374`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:118cf6da60ad6930362891b741ab79a4d596a5fc8933c2cef7f8cb9fe75653f8`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:f9aa546df5d17ae6fe8510da46bb403de6d5a594febec773258cf79886257ec6`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.69.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.69.0]

## 📰 Noteworthy
- `[OPERATOR]` The etcd StorageClass provisioner has been switched from in-tree `kubernetes.io/aws-ebs` to the EBS CSI driver `ebs.csi.aws.com`. The disk type is now configurable via `config.etcd.storage.parameters` in the Helm values (default: `type: gp3`).  
  The old way of configuring it via `.Values.config.etcd.storage.encrypted` is now deprecated and will be removed with a future release. by @voelzmo [[#1764](https://github.com/gardener/gardener-extension-provider-aws/pull/1764)]

## ✨ New Features
- `[OPERATOR]` Support mixed format for machine image specifications in CloudProfile and NamespacedCloudProfile, allowing both (legacy) architecture-per-region format and new capabilityFlavors format to coexist within the same CloudProfile for smooth migration. by @Roncossek [[#1645](https://github.com/gardener/gardener-extension-provider-aws/pull/1645)]
- `[USER]` `enableMTUCustomizer` field has been added to the `InfrastructureConfig` (default=true) to  
  preserve the existing behavior for all shoots. Users who no longer require the MTU to be set  
  to 1460 on worker nodes can opt out by setting `enableMTUCustomizer: false` in their shoot's `InfrastructureConfig`. by @axel7born [[#1732](https://github.com/gardener/gardener-extension-provider-aws/pull/1732)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix bastion creation by passing normalized capability definitions to `FindImageInCloudProfile` instead of raw CloudProfile spec values. by @Roncossek [[#1772](https://github.com/gardener/gardener-extension-provider-aws/pull/1772)]
- `[OPERATOR]` Support EFS in IPv6 only cluster. by @hebelsan [[#1675](https://github.com/gardener/gardener-extension-provider-aws/pull/1675)]
- `[USER]` It is again allowed shoots to use `WorkloadIdentity` as credentials for DNS management, e.g. via the `shoot.spec.dns.providers[].credentialsRef` field. by @vpnachev [[#1730](https://github.com/gardener/gardener-extension-provider-aws/pull/1730)]

## 🏃 Others
- `[OPERATOR]` Document route table entries limit if network overlay is disabled by @hebelsan [[#1744](https://github.com/gardener/gardener-extension-provider-aws/pull/1744)]
- `[OPERATOR]` updated github.com/gardener/gardener to v1.136.6 by @AndreasBurger [[#1748](https://github.com/gardener/gardener-extension-provider-aws/pull/1748)]
- `[OPERATOR]` VPC validation now also takes additional CIDR associations into account by @AndreasBurger [[#1747](https://github.com/gardener/gardener-extension-provider-aws/pull/1747)]
- `[OPERATOR]` [DEPRECATION] MTU customization on AWS nodes is being phased out. Previously, a DaemonSet on  
  seed nodes and a systemd unit on shoot nodes manually reduced network interface MTU to 1460.  
  With Calico and Cilium supporting MTU auto-detection, this is no longer required. A new  
  `MTUCustomizer` feature gate (default=true) has been introduced to allow gradual rollout of  
  the removal. Operators can proactively disable it by setting `featureGates.MTUCustomizer: false`  
  in the provider-aws controller configuration. The feature gate and all related code will be  
  removed in a future release. by @axel7born [[#1732](https://github.com/gardener/gardener-extension-provider-aws/pull/1732)]
- `[OPERATOR]` Update gardener to v1.139.0 by @hebelsan [[#1752](https://github.com/gardener/gardener-extension-provider-aws/pull/1752)]
- `[DEVELOPER]` Enhance Makefile to easily deploy to a remote cluster. by @matthias-horne [[#1751](https://github.com/gardener/gardener-extension-provider-aws/pull/1751)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v3.0.0 -> v3.2.1 (singleton)  
    - csi-driver: v1.56.0 -> v1.58.0 (singleton)  
    - csi-driver-efs: v2.3.0 -> v3.0.0 (singleton)  
    - csi-provisioner: v6.1.1 -> v6.2.0 (minor)  
    - csi-volume-modifier: v0.9.2 -> v0.9.3 (singleton)  
    - machine-controller-manager-provider-aws: v0.27.2 -> v0.27.3 (singleton) by @federated-github-access[bot] [[#1717](https://github.com/gardener/gardener-extension-provider-aws/pull/1717)]

## application/spdx+json
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:4484c396d6cb4963602be514fe3115a896b8d48374a3c83bdb66fd79ef3c23dc`
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:fcc1d45ec7d4562d7d9064a7401f633963897cf63fd027c528fcc26888b5ba01`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:9cca304b31d11cedbbf5eaf94cab4e9bef7be67b7583860d26a66f5fdbd0a198`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:c51e792601a9d7a5b603f3b4f9196af9d7c04529e50e6714b216c6c4c8086810`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.69.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.69.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.69.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.69.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.69.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.54.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.54.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Behavioral change: rootDiskType and rootDiskSize now derived from cloud profile machine type storage.  
  Previously, if a worker pool did not explicitly configure volume.type / volume.size, the generated MachineClass omitted rootDiskType and rootDiskSize entirely, leaving the choice to OpenStack's infrastructure defaults.  
  With this change, if the cloud profile's MachineType.Storage defines a type (other than "default") and optionally a storageSize, those values are now used as defaults in the generated MachineClass.  
  Impact: Shoots using machine types whose cloud profile entry has a non-"default" Storage.Type will now have an explicit rootDiskType (and potentially rootDiskSize) set in their MachineClass. If this differs from the OpenStack infrastructure's previous default, the root disk type of newly created nodes will change.  
  Action required: Review the Storage field on machine types in affected cloud profiles. If the Storage.Type was set for informational purposes only and should not influence disk provisioning, set it to "default" to preserve the previous behavior. by @hebelsan [[#1317](https://github.com/gardener/gardener-extension-provider-openstack/pull/1317)]

## 📰 Noteworthy
- `[OPERATOR]` The etcd StorageClass provisioner has been switched from the deprecated in-tree `kubernetes.io/cinder` to the OpenStack CSI driver `cinder.csi.openstack.org`. by @voelzmo [[#1312](https://github.com/gardener/gardener-extension-provider-openstack/pull/1312)]

## 🏃 Others
- `[OPERATOR]` Update gardener to v1.139.0 by @hebelsan [[#1299](https://github.com/gardener/gardener-extension-provider-openstack/pull/1299)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-provisioner: v6.1.1 -> v6.2.0 (minor)  
    - machine-controller-manager-provider-openstack: v0.25.0 -> v0.26.0 (singleton) by @federated-github-access[bot] [[#1290](https://github.com/gardener/gardener-extension-provider-openstack/pull/1290)]

## application/spdx+json
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:7ede51723b3d26286cd3bb9069ebd03374bebd50a5ef03872a7bc2313139263a`
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:8b064e514b3467e48f3b45acc1e3beb64f085977d88dc46974aeff8aa9b9fe67`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:830feef79a00632ac4b4278679e21147f933b9a1e1a3a7e06ac3bfdd61714a7e`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:9f829611bbb5317f097d0bf88a4d86a236f8101809a7796575733924fc549a2c`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.54.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.54.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.54.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.54.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.54.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.34.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.34.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260413.0. by @federated-github-access[bot] [[#390](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/390)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:7cb07f94071b0a6560fece328069f95462699222c5070b11134508a0318db8f6`
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:f76492c1cf38bda134ca23dce62b9a6303661795ec39d4748ec7843b9f2cb194`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:206ce9d3d48500a657c7ad97e04cffcda4e2227e7c8ef8ef2a55ecaec4c75946`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:c0c08f90708373a1cfaa7be7e58a83d8d47000c0a769c9c589e3368b2cbd4e30`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.34.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.34.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.34.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.40.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.40.0]

## 🏃 Others
- `[OPERATOR]` Enhances the DNSProvider resource status to include Gardener-standard `lastOperation` and `lastError` fields by @MartinWeindel [[#872](https://github.com/gardener/external-dns-management/pull/872)]

## application/spdx+json
- dns-controller-manager-next-generation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:03a0423c92fa5a003e5d7d9639ef7559949d37bb51426ea3a4fc07519609f41f`
- dns-controller-manager-next-generation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:ebf74768262fd409c55553db11c13221b4adf6b90ace200d9d59430682f3c67b`
- dns-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:15d71e3c72d4e6f9223ad0386dd80be88ed730ed36f8d5f37a3cfbd97c66b71b`
- dns-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:5400d57b08941b61858e609477e4ee2a6c1e50ab00ccb7b23fb74f8a9b9e91e2`
## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.40.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.40.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.40.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.35.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.35.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260420.0. by @federated-github-access[bot] [[#392](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/392)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:16c99042ab09b3fe859f5567db176834441148baa3ae93cb3d52050170b5e0d3`
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:bdeef62b1e7f0d9a477bd163149b0175e7b1763971ce11728f94dd06fe5bfeec`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:2bac08137ff89bede7e1bf9557417e6fd9687b74917d1718d8d6ae918c6c1983`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:f0f2644c7b13644aa5e53ed6918aa46e457a4bdb811c3d29b8f1b41e34fe5ec0`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.35.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.35.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.35.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.40.0</code></b></summary>



## application/spdx+json
- gardener-extension-os-gardenlinux-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:4855604184f72ab47ee75f817d7c77e641dc21049a98f7355531e9bb0d2f7d77`
- gardener-extension-os-gardenlinux-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:f1e6d1a2a4dd6470c6388a0896f789cbce9a6ed68c908c871504401ac8a45979`
## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.40.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.40.0`


</details>
