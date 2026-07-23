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

<details>
<summary><b>Update shoot-dns-service to <code>1.82.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.82.0]

## 🏃 Others
- `[OPERATOR]` Optionally restrict the number of DNSEntries allowed for default domains by setting the Helm value `defaultExternalProviderEntriesQuota`. Allows override of quota per shoot annotation, but only up to limit set with Helm value `defaultExternalProviderEntriesQuotaMax` by @MartinWeindel [[#690](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/690)]

# [github.com/gardener/external-dns-management:v0.40.0]

## 🏃 Others
- `[OPERATOR]` Enhances the DNSProvider resource status to include Gardener-standard `lastOperation` and `lastError` fields by @MartinWeindel [[#872](https://github.com/gardener/external-dns-management/pull/872)]

## application/spdx+json
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:1a12fbcf89cbca974d1a924ffaff629453298abfed73d81907d4ed9dbcedfcfb`
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:935a7091ef5be399d3fc6777b5a52984c240d62c3c1e34d9c44c79955ae5a528`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:39ea17183c710fb59c1197f2908fe883c2a2fa5634844d020154c30f21a258d2`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:ffeb23216e402e7447ef113d20c607a23a7e5229a9fea959655e4e14dda102a2`
## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.82.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.82.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.82.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.82.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.82.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.141.1</code></b></summary>

# [github.com/gardener/gardener:v1.141.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the guestbook TM test to fail against IPv6 Shoot clusters in now fixed. by @plkokanov [[#14705](https://github.com/gardener/gardener/pull/14705)]
- `[DEPENDENCY]` The `reconcileSeedWebhookConfig` function now correctly reconciles both `MutatingWebhookConfiguration` and `ValidatingWebhookConfiguration` for extensions that register both mutating and validating admission webhooks. Previously, only the first configuration was reconciled due to a premature return in the loop. by @Roncossek [[#14688](https://github.com/gardener/gardener/pull/14688)]

## 🏃 Others
- `[OPERATOR]` Add `resourceId` for image `istio-basic-auth-server` to fix overwrite image lookup by @MartinWeindel [[#14721](https://github.com/gardener/gardener/pull/14721)]
- `[OPERATOR]` Certain best-practice Envoy settings for HTTP2 protocol options have been applied to `istio-ingressgateways`. by @oliver-goetz [[#14685](https://github.com/gardener/gardener/pull/14685)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ext-authz-server` from `v0.2.0` to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/ext-authz-server/releases/tag/v0.3.0) by @ScheererJ [[#14728](https://github.com/gardener/gardener/pull/14728)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:a533cff53ce26faae8d16ce777e42acfaec59f37b14e037f3df49897eb6e37a6`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:f9a88c4286072181ba44333dae0899fd7f04e6109deee7649b7ec4225d061c2e`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:e4a314c878793de9230de8e578f4affde97f13669773b1038a1cedb542e3a46f`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:ec09bb23be84cdc04592a29db374e1107b91114c4420523bb8ad52a07777d2e2`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:2f4e2274461634f42f90fb5787cf2176d00079b0dcb1cbd6d6b06b5e8bfa3243`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:a20de14a51d7512cf7e4658a4e52a2c60dff17efbf2965ef20565a696619aa6a`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:0723efdd00b677215935e8d86c5568c7c583afbecc130f1a281bd1da4ccacb67`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:e1ddbc08706eb9ac4af03811a12553cadeb00915f890883572ba7c267173473f`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:2904444a43a685fee5e601b621603114585857c6205d3d9286921a114110849c`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:a592e08ced947cda1565a4bf3800785c2596880940542843787388baf0ad51ee`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:63efdd9693ec670ba326fd4c3f70f88702aa41aaac69c268c83ab4a69820eea1`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:f61bcb10bfbd98c0a17d944d061357b78a59e09f79bc207db64203488bfb6ebd`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:358db949d83420843f863158d5b97d6a7d2d6df8ed48e4ac4a442e883387c0d9`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:90d8da86f54ce63dd043285388d7acce0f9b3fb30f15e040ae4452f59d1d5b02`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:1c50c5a130190374ed9ddf8244e48585ef15fc4bed428817b7db101e8b14d747`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:9b1947be7ce2fe329591e02acb40960aadb1c41a88f9b8b9e10824ed5dd85787`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:0406036d984dcb000eb4a7af85a453ca7ec8a5cf7772c0cf7dfdbd6e576ba881`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:c5272548e8a05a13aeaf02d69bc1b10a57fd0e3de0ce44cf51433b43d00f964b`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.141.1</code></b></summary>

# [github.com/gardener/gardener:v1.141.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the guestbook TM test to fail against IPv6 Shoot clusters in now fixed. by @plkokanov [[#14705](https://github.com/gardener/gardener/pull/14705)]
- `[DEPENDENCY]` The `reconcileSeedWebhookConfig` function now correctly reconciles both `MutatingWebhookConfiguration` and `ValidatingWebhookConfiguration` for extensions that register both mutating and validating admission webhooks. Previously, only the first configuration was reconciled due to a premature return in the loop. by @Roncossek [[#14688](https://github.com/gardener/gardener/pull/14688)]

## 🏃 Others
- `[OPERATOR]` Add `resourceId` for image `istio-basic-auth-server` to fix overwrite image lookup by @MartinWeindel [[#14721](https://github.com/gardener/gardener/pull/14721)]
- `[OPERATOR]` Certain best-practice Envoy settings for HTTP2 protocol options have been applied to `istio-ingressgateways`. by @oliver-goetz [[#14685](https://github.com/gardener/gardener/pull/14685)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ext-authz-server` from `v0.2.0` to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/ext-authz-server/releases/tag/v0.3.0) by @ScheererJ [[#14728](https://github.com/gardener/gardener/pull/14728)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:a533cff53ce26faae8d16ce777e42acfaec59f37b14e037f3df49897eb6e37a6`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:f9a88c4286072181ba44333dae0899fd7f04e6109deee7649b7ec4225d061c2e`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:e4a314c878793de9230de8e578f4affde97f13669773b1038a1cedb542e3a46f`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:ec09bb23be84cdc04592a29db374e1107b91114c4420523bb8ad52a07777d2e2`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:2f4e2274461634f42f90fb5787cf2176d00079b0dcb1cbd6d6b06b5e8bfa3243`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:a20de14a51d7512cf7e4658a4e52a2c60dff17efbf2965ef20565a696619aa6a`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:0723efdd00b677215935e8d86c5568c7c583afbecc130f1a281bd1da4ccacb67`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:e1ddbc08706eb9ac4af03811a12553cadeb00915f890883572ba7c267173473f`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:2904444a43a685fee5e601b621603114585857c6205d3d9286921a114110849c`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:a592e08ced947cda1565a4bf3800785c2596880940542843787388baf0ad51ee`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:63efdd9693ec670ba326fd4c3f70f88702aa41aaac69c268c83ab4a69820eea1`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:f61bcb10bfbd98c0a17d944d061357b78a59e09f79bc207db64203488bfb6ebd`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:358db949d83420843f863158d5b97d6a7d2d6df8ed48e4ac4a442e883387c0d9`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:90d8da86f54ce63dd043285388d7acce0f9b3fb30f15e040ae4452f59d1d5b02`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:1c50c5a130190374ed9ddf8244e48585ef15fc4bed428817b7db101e8b14d747`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:9b1947be7ce2fe329591e02acb40960aadb1c41a88f9b8b9e10824ed5dd85787`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:0406036d984dcb000eb4a7af85a453ca7ec8a5cf7772c0cf7dfdbd6e576ba881`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:c5272548e8a05a13aeaf02d69bc1b10a57fd0e3de0ce44cf51433b43d00f964b`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.141.1</code></b></summary>

# [github.com/gardener/gardener:v1.141.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the guestbook TM test to fail against IPv6 Shoot clusters in now fixed. by @plkokanov [[#14705](https://github.com/gardener/gardener/pull/14705)]
- `[DEPENDENCY]` The `reconcileSeedWebhookConfig` function now correctly reconciles both `MutatingWebhookConfiguration` and `ValidatingWebhookConfiguration` for extensions that register both mutating and validating admission webhooks. Previously, only the first configuration was reconciled due to a premature return in the loop. by @Roncossek [[#14688](https://github.com/gardener/gardener/pull/14688)]

## 🏃 Others
- `[OPERATOR]` Add `resourceId` for image `istio-basic-auth-server` to fix overwrite image lookup by @MartinWeindel [[#14721](https://github.com/gardener/gardener/pull/14721)]
- `[OPERATOR]` Certain best-practice Envoy settings for HTTP2 protocol options have been applied to `istio-ingressgateways`. by @oliver-goetz [[#14685](https://github.com/gardener/gardener/pull/14685)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ext-authz-server` from `v0.2.0` to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/ext-authz-server/releases/tag/v0.3.0) by @ScheererJ [[#14728](https://github.com/gardener/gardener/pull/14728)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:a533cff53ce26faae8d16ce777e42acfaec59f37b14e037f3df49897eb6e37a6`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:f9a88c4286072181ba44333dae0899fd7f04e6109deee7649b7ec4225d061c2e`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:e4a314c878793de9230de8e578f4affde97f13669773b1038a1cedb542e3a46f`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:ec09bb23be84cdc04592a29db374e1107b91114c4420523bb8ad52a07777d2e2`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:2f4e2274461634f42f90fb5787cf2176d00079b0dcb1cbd6d6b06b5e8bfa3243`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:a20de14a51d7512cf7e4658a4e52a2c60dff17efbf2965ef20565a696619aa6a`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:0723efdd00b677215935e8d86c5568c7c583afbecc130f1a281bd1da4ccacb67`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:e1ddbc08706eb9ac4af03811a12553cadeb00915f890883572ba7c267173473f`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:2904444a43a685fee5e601b621603114585857c6205d3d9286921a114110849c`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:a592e08ced947cda1565a4bf3800785c2596880940542843787388baf0ad51ee`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:63efdd9693ec670ba326fd4c3f70f88702aa41aaac69c268c83ab4a69820eea1`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:f61bcb10bfbd98c0a17d944d061357b78a59e09f79bc207db64203488bfb6ebd`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:358db949d83420843f863158d5b97d6a7d2d6df8ed48e4ac4a442e883387c0d9`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:90d8da86f54ce63dd043285388d7acce0f9b3fb30f15e040ae4452f59d1d5b02`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:1c50c5a130190374ed9ddf8244e48585ef15fc4bed428817b7db101e8b14d747`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:9b1947be7ce2fe329591e02acb40960aadb1c41a88f9b8b9e10824ed5dd85787`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:0406036d984dcb000eb4a7af85a453ca7ec8a5cf7772c0cf7dfdbd6e576ba881`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:c5272548e8a05a13aeaf02d69bc1b10a57fd0e3de0ce44cf51433b43d00f964b`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.1`


</details>

<details>
<summary><b>Update provider-azure to <code>1.60.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.60.0]

## 📰 Noteworthy
- `[USER]` The '--volume-attach-limit' flag of the azuredisk-csi-driver can now be set for a shoot by using the 'azure.provider.extensions.gardener.cloud/volume-attach-limit' annotation.  
  The '--reserved-data-disk-slot-num' flag of the azuredisk-csi-driver can now be set for a shoot by using the 'azure.provider.extensions.gardener.cloud/reserved-data-disk-slot-num' annotation. by @AndreasBurger [[#1513](https://github.com/gardener/gardener-extension-provider-azure/pull/1513)]

## ✨ New Features
- `[OPERATOR]` Support mixed format for machine image specifications in CloudProfile and NamespacedCloudProfile, allowing both (legacy) architecture format and new capabilityFlavors format to coexist within the same CloudProfile for smooth migration. by @Roncossek [[#1507](https://github.com/gardener/gardener-extension-provider-azure/pull/1507)]
- `[OPERATOR]` Add required CSI disk RBAC to monitor premium v2 disk migration by @hebelsan [[#1506](https://github.com/gardener/gardener-extension-provider-azure/pull/1506)]
- `[OPERATOR]` No rollout hot-update of ProviderConfig.NodeTemplate.VirtualCapacity with/without already existing ProviderConfig.  
  New hash strategy adopted for ProviderConfig for k8s versions >= 1.35 by @gagan16k [[#1456](https://github.com/gardener/gardener-extension-provider-azure/pull/1456)]

## 🐛 Bug Fixes
- `[USER]` It is again allowed shoots to use `WorkloadIdentity` as credentials for DNS management, e.g. via the `shoot.spec.dns.providers[].credentialsRef` field. by @vpnachev [[#1477](https://github.com/gardener/gardener-extension-provider-azure/pull/1477)]

## 🏃 Others
- `[OPERATOR]` Update gardener to v1.139.1 by @hebelsan [[#1491](https://github.com/gardener/gardener-extension-provider-azure/pull/1491)]
- `[OPERATOR]` Add support for `StandardV2` SKU for NAT Gateways and Public IPs by @kon-angelo [[#1469](https://github.com/gardener/gardener-extension-provider-azure/pull/1469)]
- `[OPERATOR]` Update gardener to v1.140.1 by @AndreasBurger [[#1512](https://github.com/gardener/gardener-extension-provider-azure/pull/1512)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.32.14 -> v1.32.16 (patch)  
    - cloud-controller-manager: v1.33.9 -> v1.33.11 (patch)  
    - cloud-controller-manager: v1.34.6 -> v1.34.8 (patch)  
    - cloud-controller-manager: v1.35.1 -> v1.35.3 (patch)  
    - cloud-node-manager: v1.32.14 -> v1.32.16 (patch)  
    - cloud-node-manager: v1.33.9 -> v1.33.11 (patch)  
    - cloud-node-manager: v1.34.6 -> v1.34.8 (patch)  
    - cloud-node-manager: v1.35.1 -> v1.35.3 (patch)  
    - csi-driver-disk: v1.34.2 -> v1.34.3 (singleton)  
    - csi-driver-file: v1.35.1 -> v1.35.2 (singleton) by @federated-github-access[bot] [[#1479](https://github.com/gardener/gardener-extension-provider-azure/pull/1479)]

## application/spdx+json
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:2b23c2545b37ac93339a409b5369277ef39f88b698a0d1bcbed66a86b0c2ec97`
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:8e0179874318501d0ba842047cc4553f159487f7689d446464dd715d92b09a5e`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:81577c310df75acffb0bc2b92efa05795eba4cca9a89b20e3b53427063689a06`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:c6855c4df5e74ed997cfe8e0596fae188047476c88b70c2a68961c46208b2e86`
## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.60.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.60.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.60.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.60.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.60.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.60.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.60.1]

## 🏃 Others
- `[OPERATOR]` Remedy-controller prometheus alerts are now disabled if the 'DisableRemedyController' feature gate is set by @AndreasBurger [[#1523](https://github.com/gardener/gardener-extension-provider-azure/pull/1523)]

## application/spdx+json
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:a1a7b389f96be4bbd21972251356578c2bc20df7ab38b49dc4c029758f7d0a2d`
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:c706d7f5b1ae2847acda5123a1ff13eea04aaa231eb52f891d170982c24ede71`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:2f0164438823e4dd1fee60c374fa79e07ebf355f85783c07366987a4d4c25d1b`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:8103bc2957e000cb54d2ee11e8189ebe3ca94795e5041328b4375a300bacc9a3`
## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.60.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.60.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.60.1`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.60.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.60.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.84.1</code></b></summary>

# [github.com/gardener/dashboard:1.84.1]

## 🐛 Bug Fixes
- `[USER]` DNS Handling Improvements & Fixes  
  - Fixed an issue where clusters without a custom domain could appear incorrectly in the Configure DNS dialog  
  - Disabled Edit and Delete buttons for DNS Workload Identities, as Dashboard support for managing them is not yet available by @grolu [[#2940](https://github.com/gardener/dashboard/pull/2940)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:2389eca204c8c8d5ceea5801cf9947583f1952e63ce57fb0b238e5f6bc0f0c28`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:9e7e73dd274637484d69a25dff677ff6e4feb876b3af3e20c2f23572b131cd41`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.84.1</code></b></summary>

# [github.com/gardener/dashboard:1.84.1]

## 🐛 Bug Fixes
- `[USER]` DNS Handling Improvements & Fixes  
  - Fixed an issue where clusters without a custom domain could appear incorrectly in the Configure DNS dialog  
  - Disabled Edit and Delete buttons for DNS Workload Identities, as Dashboard support for managing them is not yet available by @grolu [[#2940](https://github.com/gardener/dashboard/pull/2940)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:2389eca204c8c8d5ceea5801cf9947583f1952e63ce57fb0b238e5f6bc0f0c28`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:9e7e73dd274637484d69a25dff677ff6e4feb876b3af3e20c2f23572b131cd41`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.1`


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.39.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.39.0]

## 🏃 Others
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.139.1 -> v1.140.1  
  - github.com/gardener/gardener/pkg/apis v1.139.1 -> v1.140.1  
  - github.com/go-jose/go-jose/v4 v4.1.3 -> v4.1.4 by @dependabot[bot] [[#453](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/453)]

# [github.com/gardener/oidc-webhook-authenticator:v0.43.0]

## 🏃 Others
- `[OPERATOR]` OWA is now built with Go 1.26.2 by @dependabot[bot] [[#231](https://github.com/gardener/oidc-webhook-authenticator/pull/231)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/go-jose/go-jose/v4 v4.1.2 -> v4.1.3  
  - github.com/onsi/ginkgo/v2 v2.27.2 -> v2.27.4  
  - github.com/onsi/gomega v1.38.2 -> v1.39.0  
  - github.com/spf13/cobra v1.10.1 -> v1.10.2  
  - golang.org/x/time v0.13.0 -> v0.14.0  
  - k8s.io/api v0.35.0 -> v0.36.0  
  - k8s.io/apimachinery v0.35.0 -> v0.36.0  
  - k8s.io/apiserver v0.35.0 -> v0.36.0  
  - k8s.io/client-go v0.35.0 -> v0.36.0  
  - k8s.io/component-base v0.35.0 -> v0.36.0  
  - sigs.k8s.io/controller-runtime v0.23.3 -> v0.24.0 by @dimityrmirchev [[#234](https://github.com/gardener/oidc-webhook-authenticator/pull/234)]

# [github.com/gardener/garden-shoot-trust-configurator:v0.2.0]

## ✨ New Features
- `[OPERATOR]` Introduced a skaffold setup that enables deploying the trust-configurator in a local cluster. by @theoddora [[#106](https://github.com/gardener/garden-shoot-trust-configurator/pull/106)]

## application/spdx+json
- gardener-extension-shoot-oidc-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service@sha256:93b63d8ef134526279212780c0dc3f0f8c255690194c38af3ba72218e8d80ce0`
- gardener-extension-shoot-oidc-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service@sha256:d251298245f2a1943d8127d57a32bc6df5346db7aa1a4f0431a4792bccaddae1`
## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.39.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.39.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.69.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.69.1]

## 🏃 Others
- `[OPERATOR]` Explicitly set 'NLBGatewayAPI' and 'ALBGatewayAPI' featuregates on AWS LB controller to false to avoid autodetection by the controller which results in issues with permissions and CRDs by @AndreasBurger [[#1792](https://github.com/gardener/gardener-extension-provider-aws/pull/1792)]

## application/spdx+json
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:a43caf4ab401f803e63dfae1e6f9c49ecb72a8b229615f4046cc6ba3529734c5`
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:bff7d8dfb5b979d840368ddd9d607e8003724834e6d3b329ece534ec2825721b`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:ce13e32f42acc77d0fa456a2c46a3e6b17d076eb405f10b4851691a5b4d2ce28`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:eee039fda781dc1df4690d805c9c5f9308c363dfe617314cf5685a982a11e19c`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.69.1`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.69.1`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.69.1`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.69.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.69.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.141.5</code></b></summary>

# [github.com/gardener/gardener:v1.141.5]

## 🐛 Bug Fixes
- `[USER]` Fix an issue where shoot node logging is broken when the `valitail` and `opentelemetry-collector` systemd units start before their auth-token file is written to disk. The units now wait for the token file to exist before starting, ensuring logs and telemetry from worker nodes are reliably shipped by @iypetrov [[#14903](https://github.com/gardener/gardener/pull/14903)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:39616e02a4da7688d29c22af1e9bb7ed88ae58e3049d3212026cdf9e74ed4720`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:41523e7fb5160e036ead3ad15e562d8a357caceefde2275a41db2798c7bd17f2`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:53f1ec243c9a758bdd08c97f73a787c3ee537bbaf83edd7e316664f1500afde9`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:545ea8bac3d03e2a46a2cc555880d5acd70f65f3497eb87ba74aae5ec1553958`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:7e78a6cfaa3d8c1af317c2dc5712fb84462c2f8e65969d73f42f02655af09136`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:afc6813bf6aba3f0414931331f795b439ce39c46c1aeff3f9a12605c05e0a9cb`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:6b52bcb866375fb232f62759c69fe9c4f84b6d991d451bd1655da62eb0c74afe`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:d9a5bb96d67f9d69a91cf09c55ea6d7a817f108b8a3c91509217edb9ee8b528b`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:47f8d9ea9aa762deea007db79c703e98b7245c1931e6ad518560b24b92b466f8`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:819572e61855d890466dd6e75fee21e6642dfb7f884a32ba3f5ba08e1d42f3d6`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:1d0ef26f699eea62bd3e03bb691d56e993a1c2b3497d0d84ce5a1eedf9145ce2`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b630b100918bde19df1f18b0d799c8e1c85e3f56f8c1dff0fec812054ea9c8d6`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:2c3fdfccb3a0530cadeaef574bb6469973b2bf2c51421c4ea744cc27dc167a81`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:64df0ff0b3e5b90801be025738d404a71aaea4fe622088ef8fcf821684d2b08b`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:e7df1e8a1b1e7c0db9ef34e650e973658fe55a1066b932c95c7b171fe502717b`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:e91afa5610825fb962e035b9fdbf2618f6d6024a65765d64f8ff72e4d6a71040`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:01ab13b1d08bf066d33969867471a81c703079ea4c578da352736aadfdc289b7`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:3df951c7365a0d2bfe6a7ebe55b2988bb068082cf6b1543a3527452fa6182213`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.5`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.141.5</code></b></summary>

# [github.com/gardener/gardener:v1.141.5]

## 🐛 Bug Fixes
- `[USER]` Fix an issue where shoot node logging is broken when the `valitail` and `opentelemetry-collector` systemd units start before their auth-token file is written to disk. The units now wait for the token file to exist before starting, ensuring logs and telemetry from worker nodes are reliably shipped by @iypetrov [[#14903](https://github.com/gardener/gardener/pull/14903)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:39616e02a4da7688d29c22af1e9bb7ed88ae58e3049d3212026cdf9e74ed4720`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:41523e7fb5160e036ead3ad15e562d8a357caceefde2275a41db2798c7bd17f2`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:53f1ec243c9a758bdd08c97f73a787c3ee537bbaf83edd7e316664f1500afde9`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:545ea8bac3d03e2a46a2cc555880d5acd70f65f3497eb87ba74aae5ec1553958`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:7e78a6cfaa3d8c1af317c2dc5712fb84462c2f8e65969d73f42f02655af09136`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:afc6813bf6aba3f0414931331f795b439ce39c46c1aeff3f9a12605c05e0a9cb`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:6b52bcb866375fb232f62759c69fe9c4f84b6d991d451bd1655da62eb0c74afe`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:d9a5bb96d67f9d69a91cf09c55ea6d7a817f108b8a3c91509217edb9ee8b528b`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:47f8d9ea9aa762deea007db79c703e98b7245c1931e6ad518560b24b92b466f8`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:819572e61855d890466dd6e75fee21e6642dfb7f884a32ba3f5ba08e1d42f3d6`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:1d0ef26f699eea62bd3e03bb691d56e993a1c2b3497d0d84ce5a1eedf9145ce2`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b630b100918bde19df1f18b0d799c8e1c85e3f56f8c1dff0fec812054ea9c8d6`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:2c3fdfccb3a0530cadeaef574bb6469973b2bf2c51421c4ea744cc27dc167a81`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:64df0ff0b3e5b90801be025738d404a71aaea4fe622088ef8fcf821684d2b08b`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:e7df1e8a1b1e7c0db9ef34e650e973658fe55a1066b932c95c7b171fe502717b`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:e91afa5610825fb962e035b9fdbf2618f6d6024a65765d64f8ff72e4d6a71040`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:01ab13b1d08bf066d33969867471a81c703079ea4c578da352736aadfdc289b7`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:3df951c7365a0d2bfe6a7ebe55b2988bb068082cf6b1543a3527452fa6182213`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.5`


</details>

<details>
<summary><b>Update gardenlet to <code>1.141.5</code></b></summary>

# [github.com/gardener/gardener:v1.141.5]

## 🐛 Bug Fixes
- `[USER]` Fix an issue where shoot node logging is broken when the `valitail` and `opentelemetry-collector` systemd units start before their auth-token file is written to disk. The units now wait for the token file to exist before starting, ensuring logs and telemetry from worker nodes are reliably shipped by @iypetrov [[#14903](https://github.com/gardener/gardener/pull/14903)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:39616e02a4da7688d29c22af1e9bb7ed88ae58e3049d3212026cdf9e74ed4720`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:41523e7fb5160e036ead3ad15e562d8a357caceefde2275a41db2798c7bd17f2`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:53f1ec243c9a758bdd08c97f73a787c3ee537bbaf83edd7e316664f1500afde9`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:545ea8bac3d03e2a46a2cc555880d5acd70f65f3497eb87ba74aae5ec1553958`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:7e78a6cfaa3d8c1af317c2dc5712fb84462c2f8e65969d73f42f02655af09136`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:afc6813bf6aba3f0414931331f795b439ce39c46c1aeff3f9a12605c05e0a9cb`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:6b52bcb866375fb232f62759c69fe9c4f84b6d991d451bd1655da62eb0c74afe`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:d9a5bb96d67f9d69a91cf09c55ea6d7a817f108b8a3c91509217edb9ee8b528b`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:47f8d9ea9aa762deea007db79c703e98b7245c1931e6ad518560b24b92b466f8`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:819572e61855d890466dd6e75fee21e6642dfb7f884a32ba3f5ba08e1d42f3d6`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:1d0ef26f699eea62bd3e03bb691d56e993a1c2b3497d0d84ce5a1eedf9145ce2`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b630b100918bde19df1f18b0d799c8e1c85e3f56f8c1dff0fec812054ea9c8d6`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:2c3fdfccb3a0530cadeaef574bb6469973b2bf2c51421c4ea744cc27dc167a81`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:64df0ff0b3e5b90801be025738d404a71aaea4fe622088ef8fcf821684d2b08b`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:e7df1e8a1b1e7c0db9ef34e650e973658fe55a1066b932c95c7b171fe502717b`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:e91afa5610825fb962e035b9fdbf2618f6d6024a65765d64f8ff72e4d6a71040`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:01ab13b1d08bf066d33969867471a81c703079ea4c578da352736aadfdc289b7`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:3df951c7365a0d2bfe6a7ebe55b2988bb068082cf6b1543a3527452fa6182213`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.5`


</details>

<details>
<summary><b>Update backup-s3 to <code>0.8.3</code></b></summary>

## General Changes

* Go 1.26. (#27) @Gerrit91
* chore(deps): update to g/g 1.132.5 (#26) @vknabel


</details>

<details>
<summary><b>Update cert-management to <code>0.23.0</code></b></summary>

# [github.com/gardener/cert-management:v0.23.0]

## 🐛 Bug Fixes
- `[USER]` [Gateway source controllers]: Fix cross-listener SAN pollution when gateway has multiple HTTPS listeners by @MartinWeindel [[#728](https://github.com/gardener/cert-management/pull/728)]

## 🏃 Others
- `[OPERATOR]` [self-signed certificate]: Fix flapping certificate status if certificate contains IPAddresses by @MartinWeindel [[#729](https://github.com/gardener/cert-management/pull/729)]

## application/spdx+json
- cert-management-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:0cb20de17af12f849c9e90acb6b365a69d336e3092808b345d22d1004b63a809`
- cert-management-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:31f6662f3ee1e9eebf521ea09152d6c958eb970df34ce75bc328acf190f25cf9`
## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.23.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.23.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.42.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.42.0]

## 🏃 Others
- `[OPERATOR]` fix validation of GDC-ag credentials: check for correct type-string by @AndreasBurger [[#893](https://github.com/gardener/external-dns-management/pull/893)]

## application/spdx+json
- dns-controller-manager-next-generation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:ba4b2e1b249025be410188b243cfce68ec0f8ccb8600a1ef671f72ffc1737bd8`
- dns-controller-manager-next-generation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:c4cdd6624e930c749c29caa42f6cb7d8c61ca338456c61e08b5b2762dd7f11d5`
- dns-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:0a30117269f9798b8da06843f5b28506e9321b47d1b83161047f9ff929783322`
- dns-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:bfc34deac2f4b126b0981bb90ae99f03548f02d9f7c88662aa2a42e3644ad43f`
## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.42.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.42.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.42.0`


</details>

<details>
<summary><b>Update gardener-webterminal to <code>0.36.0</code></b></summary>

# [github.com/gardener/terminal-controller-manager:v0.36.0]

## 📖 Documentation
- `[OPERATOR]` The `terminal-controller-manager` Helm charts are deprecated in favor of `gardener-operator` managed deployments and will be removed earliest around November 2026. by @petersutter [[#485](https://github.com/gardener/terminal-controller-manager/pull/485)]

## application/spdx+json
- terminal-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:a1f1da38c31bef63b37f65e5a2960cc1ec13f21922c5ad25e0a3bc9221095c07`
- terminal-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:cbdd99bacac6187612956ccd5268dc6eae2681d71e0eddaeeb83ad0cb4139a53`
## Container (OCI) Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.36.0`


</details>

<details>
<summary><b>Update gardener-webterminal to <code>0.36.0</code></b></summary>

# [github.com/gardener/terminal-controller-manager:v0.36.0]

## 📖 Documentation
- `[OPERATOR]` The `terminal-controller-manager` Helm charts are deprecated in favor of `gardener-operator` managed deployments and will be removed earliest around November 2026. by @petersutter [[#485](https://github.com/gardener/terminal-controller-manager/pull/485)]

## application/spdx+json
- terminal-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:a1f1da38c31bef63b37f65e5a2960cc1ec13f21922c5ad25e0a3bc9221095c07`
- terminal-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:cbdd99bacac6187612956ccd5268dc6eae2681d71e0eddaeeb83ad0cb4139a53`
## Container (OCI) Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.36.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.42.0</code></b></summary>



## application/spdx+json
- gardener-extension-os-gardenlinux-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:12514c8931f8edf76b97af3595989ce4fd077a7edf95dcb7f398f8d0f55aea7d`
- gardener-extension-os-gardenlinux-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:42949e650a76d6a9939d69f1084b177abd4cd14c207bb724fca21644dac7f251`
## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.42.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.42.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.70.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-alicloud:v1.70.0]

## 🏃 Others
- `[OPERATOR]` Update alicloud-controller-manager image to v2.13.0 by @kevin-lacoo [[#895](https://github.com/gardener/gardener-extension-provider-alicloud/pull/895)]
- `[OPERATOR]` Adopts Gardener MachineImage `Capabilities` and introduces `CapabilityFlavors` to the `providerConfig`. by @kevin-lacoo [[#873](https://github.com/gardener/gardener-extension-provider-alicloud/pull/873)]

## application/spdx+json
- gardener-extension-admission-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:1ecf593124b0386e4a0b40ef7dcf1ae2d5c2f33623bb6f0778419477f59d04ec`
- gardener-extension-admission-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:e7c571702ffd22eefc3e9c4491abae60140fe15a050c03db22df297762f2c0c1`
- gardener-extension-provider-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:67ee5d281c93f450b2f17ffc15c5fb1843464e634215e6c022f109b8fb238d56`
- gardener-extension-provider-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:dc186c1a29a45a94b95879a16c76c1e12809409aabf2f5160a2b082e73fd0be9`
## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.70.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.70.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.70.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.70.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.70.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.52.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.52.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer support Gardener installation running with `github.com/gardener/gardener < v1.135.0`, kindly update `github.com/gardener/gardener` to version `>= v1.135.0` before updating the extension. by @vpnachev [[#1410](https://github.com/gardener/gardener-extension-provider-gcp/pull/1410)]

## ✨ New Features
- `[OPERATOR]` Fix `NamespacedCloudProfile` admission to populate `capabilityFlavors` on spec machine images. by @Roncossek [[#1401](https://github.com/gardener/gardener-extension-provider-gcp/pull/1401)]
- `[USER]` The `InfrastructureConfig` API now supports an optional `networks.mtu` field (valid range: 1300–8896) to configure the maximum  transmission unit for Gardener-managed VPC networks. by @voelzmo [[#1399](https://github.com/gardener/gardener-extension-provider-gcp/pull/1399)]

## 🐛 Bug Fixes
- `[OPERATOR]` VPA for the extension pod now also controls CPU requests in addition to memory. The VPA container policy also explicitly disables  autoscaling for any non-main containers following Gardener best practices. by @voelzmo [[#1407](https://github.com/gardener/gardener-extension-provider-gcp/pull/1407)]

## 🏃 Others
- `[OPERATOR]` Fix controlplane-seed MR failing health checks if filestore is enabled by @hebelsan [[#1398](https://github.com/gardener/gardener-extension-provider-gcp/pull/1398)]
- `[DEVELOPER]` Enhance Makefile to easily deploy to a remote cluster. by @matthias-horne [[#1402](https://github.com/gardener/gardener-extension-provider-gcp/pull/1402)]
- `[DEPENDENCY]` The following container images have been updated:  
    - ingress-default-backend: 0.25.0 -> 0.26.0 (singleton)  
    - machine-controller-manager-provider-gcp: v0.27.0 -> v0.28.0 (singleton) by @federated-github-access[bot] [[#1406](https://github.com/gardener/gardener-extension-provider-gcp/pull/1406)]

## application/spdx+json
- gardener-extension-admission-gcp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:0d01c653c568dbf025c4ac42309a67bafe2e379c5ad847aa2723cd975a632720`
- gardener-extension-admission-gcp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:aa6fcb8376920a907a8cd2adaf9ec1d822f3e8fda5dd4e5fd5dda4202f8cf1d9`
- gardener-extension-provider-gcp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:8efd9c90e30aebda8ec0192feb39812199d8d3a24dca9ed141fa21adb171d8f2`
- gardener-extension-provider-gcp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:caed58fd68fd5490979ecd01b4d85874e89b45b79c465fb7b633a0b6b669aa0f`
## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.52.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.52.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.52.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.52.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.52.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.70.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.70.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` `provider-aws` no longer supports Shoots with Кubernetes version <= 1.30. by @acumino [[#1763](https://github.com/gardener/gardener-extension-provider-aws/pull/1763)]
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#1785](https://github.com/gardener/gardener-extension-provider-aws/pull/1785)]

## ✨ New Features
- `[USER]` Metrics for the CSI driver controller are now enabled by @matthias-horne [[#1773](https://github.com/gardener/gardener-extension-provider-aws/pull/1773)]
- `[USER]` Add ability to specify IPv6CIDR from an IPAM pool by @guydc [[#1799](https://github.com/gardener/gardener-extension-provider-aws/pull/1799)]
- `[USER]` Add `networkInterfaces` field to WorkerConfig API for configuring multiple EFA network interfaces with network card index ranges and device index ranges on GPU worker pools by @shreyas-s-rao [[#1791](https://github.com/gardener/gardener-extension-provider-aws/pull/1791)]
- `[USER]` Add `placement` field to WorkerConfig API for configuring placement groups, tenancy, dedicated hosts, and partition numbers on worker pools by @shreyas-s-rao [[#1791](https://github.com/gardener/gardener-extension-provider-aws/pull/1791)]
- `[USER]` Add `instanceMarketOptions` field to WorkerConfig API for configuring options like `spot` instances, `capacity-block` (for targeting ML capacity block reservations), `interruptible-capacity-reservation`. by @shreyas-s-rao [[#1791](https://github.com/gardener/gardener-extension-provider-aws/pull/1791)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix `NamespacedCloudProfile` admission to populate `capabilityFlavors` on spec machine images and allow expirationDate-only overrides of parent versions without requiring a providerConfig entry. by @Roncossek [[#1797](https://github.com/gardener/gardener-extension-provider-aws/pull/1797)]
- `[USER]` Validation no longer assumes all subnets of a zone must be covered by a single VPC cidr by @AndreasBurger [[#1813](https://github.com/gardener/gardener-extension-provider-aws/pull/1813)]
- `[DEVELOPER]` Validate that `capabilityDefinitions` is not empty in `FindImageInCloudProfile` to fail fast when normalization was skipped. by @Roncossek [[#1775](https://github.com/gardener/gardener-extension-provider-aws/pull/1775)]

## 🏃 Others
- `[OPERATOR]` Update aws-custom-route-controller image tag to `v0.16.0`. by @MartinWeindel [[#1794](https://github.com/gardener/gardener-extension-provider-aws/pull/1794)]
- `[OPERATOR]` Calico mutating admission policy chart uses the correct API version based on the shoot's Kubernetes version, and aligns the enable/disable logic accordingly. by @DockToFuture [[#1770](https://github.com/gardener/gardener-extension-provider-aws/pull/1770)]
- `[OPERATOR]` Explicitly set 'NLBGatewayAPI' and 'ALBGatewayAPI' featuregates on AWS LB controller to false to avoid autodetection by the controller which results in issues with permissions and CRDs by @AndreasBurger [[#1786](https://github.com/gardener/gardener-extension-provider-aws/pull/1786)]
- `[OPERATOR]` Bump `machine-controller-manager-provider-aws` to `v0.28.0`. by @shreyas-s-rao [[#1791](https://github.com/gardener/gardener-extension-provider-aws/pull/1791)]
- `[OPERATOR]` Enables the backupentry controller in the runtime cluster by @hebelsan [[#1806](https://github.com/gardener/gardener-extension-provider-aws/pull/1806)]
- `[OPERATOR]` `MachineClass`es and their `Secret`s are now deployed with the controller-runtime's client instead of using the [`github.com/gardener/gardener/pkg/client/kubernetes.ChartApplier`](https://github.com/gardener/gardener/blob/b5d62d852baa2256c8dab11451cc1f8d2692bc6f/pkg/client/kubernetes/chartapplier.go#L18-L24) and the `machineclass` chart.  
  Additionally, the deployments are done in parallel, which speeds up the whole operation. This is important for cases when there is high latency to the `kube-apiserver` and a large number of resources have to be deployed. by @plkokanov [[#1731](https://github.com/gardener/gardener-extension-provider-aws/pull/1731)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v3.2.1 -> v3.3.0 (singleton)  
    - csi-driver: v1.58.0 -> v1.59.0 (singleton)  
    - csi-driver-efs: v3.0.0 -> v3.1.0 (singleton) by @federated-github-access[bot] [[#1774](https://github.com/gardener/gardener-extension-provider-aws/pull/1774)]

## application/spdx+json
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:0c07ebfc90b62ddec6bb82a633c94e08e5e0b733e0bde04f0c6eb38c337ff017`
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:3f578059b1dafc06d4bd739ae956d21b0139e4c9941c0c61e0e337b58435491c`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:08c06e9b50c1ca1995d80372ff23db25100dee3ea6e9fcdab3c4b95ebe4132a8`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:eeaf6c50ac863dd48f24667d94b65a29f6186a6b1e8bb2560f84c46f20309efa`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.70.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.70.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.70.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.70.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.70.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.61.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.61.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer support Gardener installation running with `github.com/gardener/gardener < v1.135.0`, kindly update `github.com/gardener/gardener` to version `>= v1.135.0` before updating the extension. by @vpnachev [[#1545](https://github.com/gardener/gardener-extension-provider-azure/pull/1545)]
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @hebelsan [[#1535](https://github.com/gardener/gardener-extension-provider-azure/pull/1535)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix `NamespacedCloudProfile` admission to populate `capabilityFlavors` on spec machine images and allow expirationDate-only overrides of parent versions without requiring a providerConfig entry. by @Roncossek [[#1527](https://github.com/gardener/gardener-extension-provider-azure/pull/1527)]

## 🏃 Others
- `[OPERATOR]` Remedy-controller prometheus alerts are now disabled if the 'DisableRemedyController' feature gate is set by @AndreasBurger [[#1522](https://github.com/gardener/gardener-extension-provider-azure/pull/1522)]
- `[OPERATOR]` Updates gardener/gardener to v1.142.0 by @hebelsan [[#1535](https://github.com/gardener/gardener-extension-provider-azure/pull/1535)]
- `[DEVELOPER]` Enhance Makefile to easily deploy to a remote cluster. by @matthias-horne [[#1529](https://github.com/gardener/gardener-extension-provider-azure/pull/1529)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.32.16 -> v1.32.18 (patch)  
    - cloud-controller-manager: v1.33.11 -> v1.33.13 (patch)  
    - cloud-controller-manager: v1.34.8 -> v1.34.10 (patch)  
    - cloud-controller-manager: v1.35.3 -> v1.35.5 (patch)  
    - cloud-node-manager: v1.32.16 -> v1.32.18 (patch)  
    - cloud-node-manager: v1.33.11 -> v1.33.13 (patch)  
    - cloud-node-manager: v1.34.8 -> v1.34.10 (patch)  
    - cloud-node-manager: v1.35.3 -> v1.35.5 (patch)  
    - csi-driver-file: v1.35.2 -> v1.35.3 (singleton) by @federated-github-access[bot] [[#1541](https://github.com/gardener/gardener-extension-provider-azure/pull/1541)]

## application/spdx+json
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:0855c769f7501ccf272ea0d16c9888661c0f9f698d0b09659564af1d10ae4059`
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:c71387aac011d0879005938714009adc5dfdee500ce8ebee25df0720bc4f5401`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:3137ce9d6e28334616f52c343decb6b923cf5ccc018c0a96f64a89303968ecbc`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:ed3908ad349a97542b99f0ae69d6780472fa83edf0fadb96b7599b320fc07eda`
## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.61.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.61.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.61.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.61.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.61.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.55.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.55.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#1331](https://github.com/gardener/gardener-extension-provider-openstack/pull/1331)]

## ✨ New Features
- `[OPERATOR]` Allow mixed format machine images in CloudProfiles: old format (regions with architecture) and new format (capabilityFlavors) can coexist per image version. by @Roncossek [[#1333](https://github.com/gardener/gardener-extension-provider-openstack/pull/1333)]
- `[OPERATOR]` support for additional security groups in worker configuration by @hebelsan [[#1327](https://github.com/gardener/gardener-extension-provider-openstack/pull/1327)]

## 🏃 Others
- `[OPERATOR]` Enables the backupentry controller in the runtime cluster by @hebelsan [[#1337](https://github.com/gardener/gardener-extension-provider-openstack/pull/1337)]
- `[OPERATOR]` support OpenStack subnet pools for automatic CIDR allocation by @hebelsan [[#1326](https://github.com/gardener/gardener-extension-provider-openstack/pull/1326)]
- `[OPERATOR]` Add managed default VolumeSnapshotClass for Cinder by @hebelsan [[#1319](https://github.com/gardener/gardener-extension-provider-openstack/pull/1319)]
- `[OPERATOR]` Add dual-stack (IPv4/IPv6) networking support for OpenStack shoots. Configure `subnetPoolID` in InfrastructureConfig to allocate IPv6 subnets for nodes, pods, and services. by @axel7born [[#1257](https://github.com/gardener/gardener-extension-provider-openstack/pull/1257)]
- `[OPERATOR]` Update gardener/gardener to v1.142.0 by @hebelsan [[#1336](https://github.com/gardener/gardener-extension-provider-openstack/pull/1336)]
- `[DEVELOPER]` Enhance Makefile to easily deploy to a remote cluster. by @matthias-horne [[#1325](https://github.com/gardener/gardener-extension-provider-openstack/pull/1325)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-driver-nfs: v4.13.1 -> v4.13.2 (singleton) by @federated-github-access[bot] [[#1322](https://github.com/gardener/gardener-extension-provider-openstack/pull/1322)]

## application/spdx+json
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:b2df346ab7b83f39757c34e409220b42e6c4bb09bca017f42b523aac8f870fcc`
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:d93e46f5ce36a7324b8cf29526882b625bb862c3e1cdb2159c0ca4489f11bd73`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:b78f40513df0349fba8a8093e005a57318f73d717774d449adc1efb90bd51e11`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:c235822a89f3ed88c827a59623a0e16c67b41398545c06efb9cb86d495a68cb0`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.55.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.55.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.55.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.55.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.55.0`


</details>

<details>
<summary><b>Update registry-cache to <code>0.23.0</code></b></summary>

# [github.com/gardener/gardener-extension-registry-cache:v0.23.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Deploying the registry-cache admission in a setup where the virtual cluster is NOT enabled is no longer supported. The presence of the virtual cluster is now always required. It is recommended to deploy the registry-cache extension via the gardener-operator. by @dimitar-kostadinov [[#581](https://github.com/gardener/gardener-extension-registry-cache/pull/581)]
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#572](https://github.com/gardener/gardener-extension-registry-cache/pull/572)]
- `[USER]` The use of `..` in the URL path for the `.mirrors.hosts[].host` field of the `registry-mirror` extension is now forbidden. by @dimitar-kostadinov [[#575](https://github.com/gardener/gardener-extension-registry-cache/pull/575)]

## ✨ New Features
- `[DEVELOPER]` The registry-cache extension does now support the [Deploying Gardener Remotely](https://github.com/gardener/gardener/blob/v1.140.0/docs/deployment/getting_started_remotely.md) development setup. by @dimitar-kostadinov [[#566](https://github.com/gardener/gardener-extension-registry-cache/pull/566)]

## 🐛 Bug Fixes
- `[USER]` The generation of a CA bundle path when `.mirrors.hosts[].caBundleSecretReferenceName` from the `registry-mirror` extension is set is now fixed. by @dimitar-kostadinov [[#575](https://github.com/gardener/gardener-extension-registry-cache/pull/575)]

## 🏃 Others
- `[OPERATOR]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/registry` image is updated from 3.1.0 to 3.1.1. by @dimitar-kostadinov [[#576](https://github.com/gardener/gardener-extension-registry-cache/pull/576)]

## application/spdx+json
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:9deff9f848a5cd7c75546859d986dc139e66764b37fc53d76890697244fc6811`
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:9fb2f3c1055c6c0024b6931482c96a4bb9e377b0614626931419204b2d6013c3`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:42cc378163b1f1fa6ec3c56185d15c1ae24502df3659931e31ee43e6ed65d9eb`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:5ac384bfc4ab91aa14b0eb01b6358da397703f4239a722a80a08e439f7519b89`
## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.23.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.23.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.23.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.23.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.23.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.38.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.38.0]

## ✨ New Features
- `[OPERATOR]` The gVisor runtime installation now supports containerd config file version 4 (containerd 2.3+), ensuring the `runsc` runtime is correctly registered on nodes running containerd 2.3. by @Vincinator [[#399](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/399)]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260511.0. by @federated-github-access[bot] [[#402](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/402)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:4c2a5eb228390e6f8df3981551d25f3c52331a1bdc9041aecc490cd90fcee49c`
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:ff57c1f9ad2f04a308fd2783e4dc480a73191da427f19532e279a693e9b5f93d`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:2aae1bb32fa51712156277bc5798c2f98a58671459d8baa9fc97cbbba5cf6d77`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:570d1f7e5e976a34c579ee01fd286b3b3150d8c6e3a105310533dae1d224b4e9`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.38.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.38.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.38.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.61.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-cert-service:v1.61.0]

## 🏃 Others
- `[OPERATOR]` Unify templating the VPA resource with other extensions. by @MartinWeindel [[#551](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/551)]

# [github.com/gardener/cert-management:v0.23.0]

## 🐛 Bug Fixes
- `[USER]` [Gateway source controllers]: Fix cross-listener SAN pollution when gateway has multiple HTTPS listeners by @MartinWeindel [[#728](https://github.com/gardener/cert-management/pull/728)]

## 🏃 Others
- `[OPERATOR]` [self-signed certificate]: Fix flapping certificate status if certificate contains IPAddresses by @MartinWeindel [[#729](https://github.com/gardener/cert-management/pull/729)]

## application/spdx+json
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:3fc56220a056109829cc72772abb954b8064be0540a4b390002393fa4845e1a5`
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:e01638e4978e86ce01dc6a22226478f2fa9c85e5475f4d98894d31e4802def7b`
## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.61.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.61.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.84.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.84.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Deploying the shoot-dns-service admission in a setup where the virtual cluster is NOT enabled is no longer supported. The presence of the virtual cluster is now always required. It is recommended to deploy the shoot-dns-service extension via the gardener-operator. by @MartinWeindel [[#739](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/739)]

# [github.com/gardener/external-dns-management:v0.42.0]

## 🏃 Others
- `[OPERATOR]` fix validation of GDC-ag credentials: check for correct type-string by @AndreasBurger [[#893](https://github.com/gardener/external-dns-management/pull/893)]

## application/spdx+json
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:7a18081c05f1f45400ac1874e3b516012885e00703cd85136794f17dcfae92f3`
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:a2b4d08d189e1062657236e793a82d9a50e31de448925169b88397fcf2f2522b`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:711a8db63b1adab35165be95bc39433de20c6b67a81c5a02db1abd9d1f969c38`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:b5c47c2bb16bc69dcc37946009030ed52f40a0df2f9a2a047e9f0757a00c40e9`
## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.84.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.84.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.84.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.84.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.84.0`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.33.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-problemdetector:v0.33.0]

## ✨ New Features
- `[OPERATOR]` Add admission deployment to validate the extension's `providerConfig` in the shoot spec. by @axel7born [[#352](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/pull/352)]
- `[USER]` Shoot owners can now configure additional network probes in the extension's `providerConfig` in the shoot spec. by @axel7born [[#352](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/pull/352)]

## 🏃 Others
- `[OPERATOR]` The admission controller is add to the build workflow. by @axel7born [[#369](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/pull/369)]
- `[OPERATOR]` Network Problem Detector dashboard shows a shared crosshair on all panels now. by @domdom82 [[#350](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/pull/350)]

## application/spdx+json
- gardener-extension-shoot-networking-problemdetector-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector-admission@sha256:a885688018b744f1b1dc9e14d66c769d6efba381aff1ff9045d87e23ee730ebe`
- gardener-extension-shoot-networking-problemdetector-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector-admission@sha256:d37eb99718969da9634d31fc2380183b29b4ac06614990ed8d90cfe920ea6d12`
- gardener-extension-shoot-networking-problemdetector-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector@sha256:0c8bd57aadd467090aee1de55d7031c5b858f050a5d2345f8ea50e85f38e2d42`
- gardener-extension-shoot-networking-problemdetector-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector@sha256:61606f1b47c065bd3397b55919038d2c31b4cf08e32907261a1c8c2895f9d779`
## Helm Charts
- shoot-networking-problemdetector-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector-admission-application:v0.33.0`
- shoot-networking-problemdetector-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector-admission-runtime:v0.33.0`
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.33.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-problemdetector-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector-admission:v0.33.0`
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.33.0`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.13.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-rsyslog-relp:v0.13.0]

## 🐛 Bug Fixes
- `[OPERATOR]` The shoot-rsyslog-relp-admission's validatingwebhookconfiguration is no longer leaking in the virtual cluster when the shoot-rsyslog-relp operator.gardener.cloud/v1alpha1.Extension resource is deleted. by @ialidzhikov [[#395](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/395)]

## application/spdx+json
- gardener-extension-shoot-rsyslog-relp-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:737bcaf8c7a823b6f2f4bbaf9f132913214abef7541f8bd8a81731a00036af23`
- gardener-extension-shoot-rsyslog-relp-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:9c28d0f1f516a7b4135d941e6300dbe5c9d7247ec81dc22e5ee10514c9f24e81`
- gardener-extension-shoot-rsyslog-relp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:0ae34789b06cbd6381ac0a37d38b57a8257c2816a101da23cd6a3b6ad5fda3d5`
- gardener-extension-shoot-rsyslog-relp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:981fbdc983c2ebca1f1cce016ae1ae459042452aa8d3e036cb57cb926f2bc6bb`
## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.13.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.13.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.13.0`
## Container (OCI) Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.13.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.13.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.84.2</code></b></summary>

# [github.com/gardener/dashboard:1.84.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Detect stalled HTTP/2 sessions used by the kube-client via a Go-style read-idle / ping-timeout heartbeat. Previously a half-open session was never torn down, which could leave streams hanging indefinitely. Configurable via `KUBE_CLIENT_READ_IDLE_TIMEOUT` / `KUBE_CLIENT_PING_TIMEOUT` env vars and the matching `global.dashboard.kubeClient.readIdleTimeout` / `pingTimeout` Helm values. by @petersutter [[#2985](https://github.com/gardener/dashboard/pull/2985)]
- `[USER]` Fixed IOPS input field not visible for aws workers by @grolu [[#2986](https://github.com/gardener/dashboard/pull/2986)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:284638885fb3e0b6ba4a933044027b0dec1b57339ba630a80b0cb4f61ab3b818`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:950872ed3c345556919700d81862d6d69f61098c080b64168b3bb721da34ea38`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.2`


</details>

<details>
<summary><b>Update dashboard to <code>1.84.2</code></b></summary>

# [github.com/gardener/dashboard:1.84.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Detect stalled HTTP/2 sessions used by the kube-client via a Go-style read-idle / ping-timeout heartbeat. Previously a half-open session was never torn down, which could leave streams hanging indefinitely. Configurable via `KUBE_CLIENT_READ_IDLE_TIMEOUT` / `KUBE_CLIENT_PING_TIMEOUT` env vars and the matching `global.dashboard.kubeClient.readIdleTimeout` / `pingTimeout` Helm values. by @petersutter [[#2985](https://github.com/gardener/dashboard/pull/2985)]
- `[USER]` Fixed IOPS input field not visible for aws workers by @grolu [[#2986](https://github.com/gardener/dashboard/pull/2986)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:284638885fb3e0b6ba4a933044027b0dec1b57339ba630a80b0cb4f61ab3b818`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:950872ed3c345556919700d81862d6d69f61098c080b64168b3bb721da34ea38`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.2`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.71.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-alicloud:v1.71.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#899](https://github.com/gardener/gardener-extension-provider-alicloud/pull/899)]

## 🏃 Others
- `[OPERATOR]` Update alicloud-controller-manage image version to v2.14.0 by @kevin-lacoo [[#904](https://github.com/gardener/gardener-extension-provider-alicloud/pull/904)]
- `[OPERATOR]` [DNSRecord controller] Filter `RR` exactly on retrieving records by domain name to prevent updating unintended records in edge cases. by @MartinWeindel [[#906](https://github.com/gardener/gardener-extension-provider-alicloud/pull/906)]
- `[OPERATOR]` Infrastructure custom route table support can be enabled via `spec.provider.infrastructureConfig.networks.vpc.useCustomRouteTable: true` in the shoot.yaml. by @kevin-lacoo [[#901](https://github.com/gardener/gardener-extension-provider-alicloud/pull/901)]
- `[OPERATOR]` Infrastructure dualstack support can be enabled via `spec.provider.infrastructureConfig.dualStack.enabled: true` in the shoot.yaml. by @kevin-lacoo [[#901](https://github.com/gardener/gardener-extension-provider-alicloud/pull/901)]

## application/spdx+json
- gardener-extension-admission-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:4546744763280f03ad6516f62689c171cd83a7c419023362b61c62563b64db2e`
- gardener-extension-admission-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:7373111761bafae6851a84fdb0201b5cbd9220a5fc1f74f66548999aef15ce6a`
- gardener-extension-provider-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:bf3c87048d819410e465120ec734ba98876f47ba00e8ee2140a6f55d655d2fc3`
- gardener-extension-provider-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:cf31b84a4b5386fa9a25978f47adb68e259f824453a22f878e56ffed6cdca270`
## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.71.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.71.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.71.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.71.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.71.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.55.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.55.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix CSI manila share client value race condition in control plane reconciliation by @hebelsan [[#1353](https://github.com/gardener/gardener-extension-provider-openstack/pull/1353)]

## application/spdx+json
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:2acb6e03a764184c3be7f85c4ec558948ab105aa90eb2d054a060faa39955f8b`
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:99b900482b61be30bb7ebc904ff691603b31487937acf43ba4d254fcc890460a`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:b39f98105ed2ef9897bf8c1b1aa5589ce88990c3d00e79c99268be71d58631c0`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:e10a79ca74b03f307074a02f2d5911f6eb78363c3dd7090d548d324778982490`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.55.1`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.55.1`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.55.1`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.55.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.55.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.141.6</code></b></summary>

# [github.com/gardener/gardener:v1.141.6]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed where `Garden` resources would start encryption key rotation on creation. by @RadaBDimitrova [[#14939](https://github.com/gardener/gardener/pull/14939)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:4a165755e9181efd9627b44fc825847ac9969c820815ca05b13a792ddfc125cf`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:885b55a0fe7221bab4c6877c4c8c0511f188d41bebe9c7d6e728147ab083ce3b`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:b1457fa787ad6d9f71835ff2548443f35cf52b53baa9a4e16b4ad86ed1178d45`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:c1e46e690bb90a51655e27f456d7c4409097874fbaa7b801eb24c1afe3d456f6`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:45eb0ad17f00cd585542f7763f76b86a0a0a9c802ab7dd2f263bf4cbd1979827`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:a54d1ecffee2380dcdd015739d32347477b2ffa9d3ef6a62f328034793f68812`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:4f13b25079635f7cde8ada9fdc21b0fe8046541fc16fa25cd86f7dc94b7dbf6f`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:87da6797bf3085d779cec357f836d9e01c9f5200fd51999669aa53118908d43e`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:3d25de2f6bb9886cbd74d0b3018383043abaa56d38b14fbe6308be5243068b47`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:6b65d935c1c7e631a6486a14909f19aa7cf078536ddb56349301d7035a1f4fbf`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:7749013c764bec414f2b1321f98401de88456d085097bb606eba69a5c460a9ec`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b92413e40a6fbdc2dd5dc516c2f0844f8282f2a7766f7287f6d78a498b5f7676`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:54327cb5da9735c1ec663a1997e46e766196815a27342b5ab3627039cda32875`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:d25a94f50cdbc40d5c26dc03474d2b32113d4d872dacd821892e74e3513fb16d`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:4d1645d1d5957753ab612bc2e292e6827d3cb1d2b89c6015897105b327f06822`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:55a6a8e936a037d44991d5d399182a1e61911704363a03268549cd3fe8c25168`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:740d9be01ee95152e20c4937625a94455f9d939e00d1d091bd011f9655d5b407`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:e3322ff3ef0267e0fc9a12f64d3099e40759e00748c68f27b99a26c4a4cc8ae4`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.6`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.6`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.6`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.6`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.6`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.6`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.6`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.141.6</code></b></summary>

# [github.com/gardener/gardener:v1.141.6]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed where `Garden` resources would start encryption key rotation on creation. by @RadaBDimitrova [[#14939](https://github.com/gardener/gardener/pull/14939)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:4a165755e9181efd9627b44fc825847ac9969c820815ca05b13a792ddfc125cf`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:885b55a0fe7221bab4c6877c4c8c0511f188d41bebe9c7d6e728147ab083ce3b`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:b1457fa787ad6d9f71835ff2548443f35cf52b53baa9a4e16b4ad86ed1178d45`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:c1e46e690bb90a51655e27f456d7c4409097874fbaa7b801eb24c1afe3d456f6`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:45eb0ad17f00cd585542f7763f76b86a0a0a9c802ab7dd2f263bf4cbd1979827`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:a54d1ecffee2380dcdd015739d32347477b2ffa9d3ef6a62f328034793f68812`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:4f13b25079635f7cde8ada9fdc21b0fe8046541fc16fa25cd86f7dc94b7dbf6f`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:87da6797bf3085d779cec357f836d9e01c9f5200fd51999669aa53118908d43e`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:3d25de2f6bb9886cbd74d0b3018383043abaa56d38b14fbe6308be5243068b47`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:6b65d935c1c7e631a6486a14909f19aa7cf078536ddb56349301d7035a1f4fbf`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:7749013c764bec414f2b1321f98401de88456d085097bb606eba69a5c460a9ec`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b92413e40a6fbdc2dd5dc516c2f0844f8282f2a7766f7287f6d78a498b5f7676`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:54327cb5da9735c1ec663a1997e46e766196815a27342b5ab3627039cda32875`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:d25a94f50cdbc40d5c26dc03474d2b32113d4d872dacd821892e74e3513fb16d`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:4d1645d1d5957753ab612bc2e292e6827d3cb1d2b89c6015897105b327f06822`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:55a6a8e936a037d44991d5d399182a1e61911704363a03268549cd3fe8c25168`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:740d9be01ee95152e20c4937625a94455f9d939e00d1d091bd011f9655d5b407`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:e3322ff3ef0267e0fc9a12f64d3099e40759e00748c68f27b99a26c4a4cc8ae4`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.6`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.6`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.6`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.6`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.6`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.6`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.6`


</details>

<details>
<summary><b>Update gardenlet to <code>1.141.6</code></b></summary>

# [github.com/gardener/gardener:v1.141.6]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed where `Garden` resources would start encryption key rotation on creation. by @RadaBDimitrova [[#14939](https://github.com/gardener/gardener/pull/14939)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:4a165755e9181efd9627b44fc825847ac9969c820815ca05b13a792ddfc125cf`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:885b55a0fe7221bab4c6877c4c8c0511f188d41bebe9c7d6e728147ab083ce3b`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:b1457fa787ad6d9f71835ff2548443f35cf52b53baa9a4e16b4ad86ed1178d45`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:c1e46e690bb90a51655e27f456d7c4409097874fbaa7b801eb24c1afe3d456f6`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:45eb0ad17f00cd585542f7763f76b86a0a0a9c802ab7dd2f263bf4cbd1979827`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:a54d1ecffee2380dcdd015739d32347477b2ffa9d3ef6a62f328034793f68812`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:4f13b25079635f7cde8ada9fdc21b0fe8046541fc16fa25cd86f7dc94b7dbf6f`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:87da6797bf3085d779cec357f836d9e01c9f5200fd51999669aa53118908d43e`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:3d25de2f6bb9886cbd74d0b3018383043abaa56d38b14fbe6308be5243068b47`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:6b65d935c1c7e631a6486a14909f19aa7cf078536ddb56349301d7035a1f4fbf`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:7749013c764bec414f2b1321f98401de88456d085097bb606eba69a5c460a9ec`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b92413e40a6fbdc2dd5dc516c2f0844f8282f2a7766f7287f6d78a498b5f7676`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:54327cb5da9735c1ec663a1997e46e766196815a27342b5ab3627039cda32875`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:d25a94f50cdbc40d5c26dc03474d2b32113d4d872dacd821892e74e3513fb16d`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:4d1645d1d5957753ab612bc2e292e6827d3cb1d2b89c6015897105b327f06822`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:55a6a8e936a037d44991d5d399182a1e61911704363a03268549cd3fe8c25168`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:740d9be01ee95152e20c4937625a94455f9d939e00d1d091bd011f9655d5b407`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:e3322ff3ef0267e0fc9a12f64d3099e40759e00748c68f27b99a26c4a4cc8ae4`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.6`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.6`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.6`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.6`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.6`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.6`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.6`


</details>

<details>
<summary><b>Update dashboard to <code>1.84.3</code></b></summary>

# [github.com/gardener/dashboard:1.84.3]

## ⚠️ Breaking Changes
- `[OPERATOR]` Machine image vendor matching no longer uses substring/wildcard patterns. Image names must now exactly match an entry in `knownMachineImageVendors` (or the branding config `vendors.machineImage` array). Images without an exact match will display their raw name without vendor icon or grouping by @grolu [[#3001](https://github.com/gardener/dashboard/pull/3001)]

## 🐛 Bug Fixes
- `[USER]` Fix machine image vendor matching to use exact names instead of substring matching, preventing misclassification of images like memorone-gardenlinux or gardenlinux-fips by @grolu [[#3001](https://github.com/gardener/dashboard/pull/3001)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:00dfdc7a5715840962a45dc6ad8248149eeb82096596487e1fc20d18e222a05b`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:71f92cae4a0de4ff4c05a976702f7d4612e5cd5882a51afd2df3e4034c054456`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.3`


</details>

<details>
<summary><b>Update dashboard to <code>1.84.3</code></b></summary>

# [github.com/gardener/dashboard:1.84.3]

## ⚠️ Breaking Changes
- `[OPERATOR]` Machine image vendor matching no longer uses substring/wildcard patterns. Image names must now exactly match an entry in `knownMachineImageVendors` (or the branding config `vendors.machineImage` array). Images without an exact match will display their raw name without vendor icon or grouping by @grolu [[#3001](https://github.com/gardener/dashboard/pull/3001)]

## 🐛 Bug Fixes
- `[USER]` Fix machine image vendor matching to use exact names instead of substring matching, preventing misclassification of images like memorone-gardenlinux or gardenlinux-fips by @grolu [[#3001](https://github.com/gardener/dashboard/pull/3001)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:00dfdc7a5715840962a45dc6ad8248149eeb82096596487e1fc20d18e222a05b`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:71f92cae4a0de4ff4c05a976702f7d4612e5cd5882a51afd2df3e4034c054456`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.3`


</details>

<details>
<summary><b>Update cert-management to <code>0.24.0</code></b></summary>



## application/spdx+json
- cert-management-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:3a4ba64e1b2d3a73a6a7e718eb50a3a8dc1b10ce048ed30345a5391236ff6905`
- cert-management-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:9e427e9e59201bf98887126e7de018367211aba00dcd407052377f0392a2bba8`
## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.24.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.24.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.43.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.43.0]

## 🐛 Bug Fixes
- `[OPERATOR]` [next-generation] Fix wildcard DNS records for alias targets with routing policy by @MartinWeindel [[#915](https://github.com/gardener/external-dns-management/pull/915)]

## 🏃 Others
- `[OPERATOR]` [next-generation] Adds a new `propagationWaitTime` configuration option (default: 10s) to `DNSEntryControllerConfig` that prevents phantom reads from authoritative DNS servers after a DNSEntries is deleted and immediately recreated with same spec. by @MartinWeindel [[#907](https://github.com/gardener/external-dns-management/pull/907)]
- `[OPERATOR]` [next-generation] use the default finalizer `dns.gardener.cloud/compound` instead of `gardendns-next-gen.dns.gardener.cloud/compound` by @MartinWeindel [[#912](https://github.com/gardener/external-dns-management/pull/912)]

## application/spdx+json
- dns-controller-manager-next-generation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:58385bd3d737fe58b3480b3dd58080baaca215be58eb981b63986d8743bdf593`
- dns-controller-manager-next-generation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:dae832b0c5046d116f43315d7a3328458245675b088d8f39a8874189e755fa48`
- dns-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:0e6d5d166f1362b4199fbfa2f99944df9052bdd1ecab6fb42790cf805cea24e0`
- dns-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:b37c2e63b764b3c995348f521cb9f7ce0405013796b58532471e4099af1d7dce`
## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.43.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.43.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.43.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.39.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.39.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260525.0. Notable upstream fixes: TCP RFC 5961 RST hardening (off-path blind RST mitigation), EINTR leakage fix to sandboxed processes, overlay copy-up tolerates EOPNOTSUPP from setxattr, auto-enable nvproxy when GPU resources are in the OCI spec, rootfs bind-mount fix for hosts with symlinked paths (e.g. /var/run -> /run), ARM 64k page support, and veth TX checksum offload. by @federated-github-access[bot] [[#406](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/406)]
- `[OPERATOR]` Updated gVisor binaries to 20260520.0. Notable upstream fixes: TCP DF bit set during handshake (PMTU discovery), systemd compatibility (timerfd, unix sockets), /proc/[pid]/setgroups for buildah/podman, full xattr + overlayfs gofer support, per-mount directfs opt-out, and NVIDIA CDI createContainer hooks. by @federated-github-access[bot] [[#405](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/405)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:876ab6a2bcf1c7c43b9ff24865c5b5715323f6fa68219e25c0081352db16414f`
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:d35cc2d4433e8e86773599baf9e477dc0c4d1112b1406b7c5dfd92ad9c0f322c`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:08d313f71c4e23dc3a8cc5276c90776a8f56f3cef249e69cfd2174bfb9aa7cd3`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:56605f691c7c43cbb55c00ed2ed2fc23a612dabc1be3d9c16f301abab9dc2617`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.39.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.39.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.39.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.62.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-cert-service:v1.62.0]

## 🏃 Others
- `[OPERATOR]` Watch shoot-dns-service Extension to detect next-gen controller switch by @MartinWeindel [[#556](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/556)]

## application/spdx+json
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:abf7aec99e49b9448af7642ffe198604b58e8f58e67edcf3dd398a64b3d2fda9`
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:ea68bd9f6ebe095d4e0606be76420a91f16188ca5cc97a6290ee06e05d1725a6`
## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.62.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.62.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.85.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.85.0]

## 🏃 Others
- `[OPERATOR]` Annotate extension resource to make usage of next-generation controller visible by @MartinWeindel [[#746](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/746)]

# [github.com/gardener/external-dns-management:v0.43.0]

## 🐛 Bug Fixes
- `[OPERATOR]` [next-generation] Fix wildcard DNS records for alias targets with routing policy by @MartinWeindel [[#915](https://github.com/gardener/external-dns-management/pull/915)]

## 🏃 Others
- `[OPERATOR]` [next-generation] Adds a new `propagationWaitTime` configuration option (default: 10s) to `DNSEntryControllerConfig` that prevents phantom reads from authoritative DNS servers after a DNSEntries is deleted and immediately recreated with same spec. by @MartinWeindel [[#907](https://github.com/gardener/external-dns-management/pull/907)]
- `[OPERATOR]` [next-generation] use the default finalizer `dns.gardener.cloud/compound` instead of `gardendns-next-gen.dns.gardener.cloud/compound` by @MartinWeindel [[#912](https://github.com/gardener/external-dns-management/pull/912)]

## application/spdx+json
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:2892c73581e45611fbc1fb8fcec670a49cbe14c640a8329d3cae88d363953fa4`
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:89bb772d1030d72f91f64449d9744d1b7a6d3d0dbd52f8ad8886c2525e16661c`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:254831972c273959a4ad685a359bd41be0fdcd1c0aebc7e8b6479d2055ba8dc7`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:5542e459dcaee7e146070f3de78c0bf2f75a273f5aa185cdae64f6c4d6768ab4`
## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.85.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.85.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.85.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.85.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.85.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.55.3</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.55.3]

## 🐛 Bug Fixes
- `[OPERATOR]` Add credentials validation to support InternalSecret type by @hebelsan [[#1363](https://github.com/gardener/gardener-extension-provider-openstack/pull/1363)]

## application/spdx+json
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:831a24051b800c6f62d6b76b4960099d1036574b2e230ac15f882a5062c067f4`
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:8d54fe4439581d07ddc5b6a5de728e8b2654033001b5bf476afa5740610e995a`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:17989f0d066321c1553076200ae75ec504ab7a115fbfc10a7c124a3eec07ab01`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:30eb97c4ce003dc3c490f137971974f949fd206ec0321be87158528cce5b3800`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.55.3`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.55.3`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.55.3`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.55.3`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.55.3`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.43.0</code></b></summary>



## application/spdx+json
- gardener-extension-os-gardenlinux-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:801757d6ae2179114a1dc11343fcf757c42a9a15163a9aed599b924a353a9135`
- gardener-extension-os-gardenlinux-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:d997b6808327d62c703040bad7ff52073902ee3b07933c742ac74f0565b6fe52`
## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.43.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.43.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.40.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.40.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260601.0. Notable upstream fixes: sentry panic fix for path resolution from unlinked tmpfs directories, IPv6 fragment reassembly fix, KVM/ARM64 PAC VDSO crash fix (affects fork/exec-heavy workloads on PAC-capable hardware), pause/resume fix in containerd shim, CLONE_CLEAR_SIGHAND and CLONE_PARENT support, mount UID/GID mappings, statx btime support, panic fix on unknown transport protocol during forwarding, and rootless execution support. by @federated-github-access[bot] [[#412](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/412)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:0fb38b8a2242eb9730145a104d172aaaf53c5a5f6087f8aae938fe0b9469a67c`
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:d705bc8e1d488ba07a462a4cd024649125054a5473387cc8d6d2b63e16e4f955`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:4e020fad1ec6b010c6f1b9a56bd5597169d7ee97750432ed92a477dc790df6b3`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:637dab4ab2496907fe00d3642baa696a6930b4b6041b7ee98ba0711c82ad12c4`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.40.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.40.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.40.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.40.0</code></b></summary>



## application/spdx+json
- gardener-extension-os-ubuntu-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:95b57e80d2074b837011ba5764dcaf1a88b85765635a1cdb8fc9414a192940ca`
- gardener-extension-os-ubuntu-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:9fd47adb45e3cce2f70057755e591d0d51d67c16641a4678347f43f873b76130`
## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.40.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.40.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.71.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.71.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer support Gardener installation running with `github.com/gardener/gardener < v1.135.0`, kindly update `github.com/gardener/gardener` to version `>= v1.135.0` before updating the extension. by @vpnachev [[#1819](https://github.com/gardener/gardener-extension-provider-aws/pull/1819)]

## 🐛 Bug Fixes
- `[OPERATOR]` The AWS infrastructure controller now adds a self-referencing security group egress rule to the worker security group when any worker pool has an EFA-enabled network interface (`networkInterfaces[].type: efa` or `efa-only`). This rule is required for EFA's SRD traffic, which is not covered by the existing `egress 0.0.0.0/0` rule. by @shreyas-s-rao [[#1833](https://github.com/gardener/gardener-extension-provider-aws/pull/1833)]

## 🏃 Others
- `[OPERATOR]` Add support for InternalSecret validation in credentials binding by @hebelsan [[#1828](https://github.com/gardener/gardener-extension-provider-aws/pull/1828)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-attacher: v4.11.0 -> v4.12.0 (singleton)  
    - csi-driver: v1.59.0 -> v1.60.1 (singleton)  
    - csi-driver-efs: v3.1.0 -> v3.2.0 (singleton)  
    - csi-liveness-probe: v2.18.0 -> v2.19.0 (singleton)  
    - csi-node-driver-registrar: v2.16.0 -> v2.17.0 (singleton) by @federated-github-access[bot] [[#1814](https://github.com/gardener/gardener-extension-provider-aws/pull/1814)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v3.3.0 -> v3.4.0 (singleton)  
    - csi-driver: v1.60.1 -> v1.61.1 (singleton) by @federated-github-access[bot] [[#1834](https://github.com/gardener/gardener-extension-provider-aws/pull/1834)]

## application/spdx+json
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:32006d92dc76e9316f55b7d3e649e06e53a5f2b3e5a8b26241325c4590e860da`
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:df12cb8bd48daf9290f8552baae9925ee258c62712a627710f991d780f3ed00b`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:7821ff667760e2fab2c10432a3520c2920645a01721fe2d670e7e930fc01774c`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:936202daf841481d0960bb56b0fa0be1617994714a815c41ecdb874f37da3930`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.71.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.71.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.71.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.71.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.71.0`


</details>

<details>
<summary><b>Update registry-cache to <code>0.23.1</code></b></summary>

# [github.com/gardener/gardener-extension-registry-cache:v0.23.1]

## 🐛 Bug Fixes
- `[USER]` Fix malformed registry cache endpoint URLs when the registry cache Service in the Shoot contains an IPv6 clusterIP. IPv6 cluster IPs are now correctly wrapped in square brackets (e.g. `https://[2a05:d018:197f:7e06::1]:5000`) by @ialidzhikov [[#595](https://github.com/gardener/gardener-extension-registry-cache/pull/595)]

## application/spdx+json
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:6074c5c0911cae6867064a5e9136aa36ee0d1bc09349bf1146e28e5c482c19e3`
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:68df5efaf31a886056715f68e98a849fd041739f2292c24735b4ca03522cd215`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:04b37da88b472f6360385696c9e504f8154c9a150e64c59337a4a18b7c3cd590`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:70206af3dc00068f5700c0bc633678efea9d878ebe679f3dc9a87819f87dc837`
## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.23.1`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.23.1`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.23.1`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.23.1`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.23.1`


</details>

<details>
<summary><b>Update cert-management to <code>0.24.1</code></b></summary>

# [github.com/gardener/cert-management:v0.24.1]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#745](https://github.com/gardener/cert-management/pull/745)]

## application/spdx+json
- cert-management-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:6a60daddee9aeffb7da0d330eaedc2361fd258f94e6f0dc8dbd6be0c4f73fb50`
- cert-management-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:ca3c454ecf27b8fdefa0951f3bebc1eeba74ca7ce5699aec4ba670daeccee167`
## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.24.1`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.24.1`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.62.1</code></b></summary>

# [github.com/gardener/cert-management:v0.24.1]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#745](https://github.com/gardener/cert-management/pull/745)]

## application/spdx+json
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:096574bd0579a14e39d1e509fa00dbafb89a197493bfc48dc92fd02522694422`
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:1c78b07b4ecf4cdad93bb6fa5979f6889cf7bbd183bac2583c4c8fd74497ab12`
## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.62.1`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.62.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.44.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.44.0]

## 🐛 Bug Fixes
- `[OPERATOR]` [next-generation] Fix condition in handleEmptyProviderState to recognise controller restart correctly. by @MartinWeindel [[#926](https://github.com/gardener/external-dns-management/pull/926)]

## application/spdx+json
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:2bc5aad18e728db278cc26bed088795faa89ff9d271f2f92e5cc5dd231386ff4`
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:f93982f0b1a86accf238e7b25cdab2e238ce816180c653d007a11aa922f05d98`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:5b92db5afcfdb9072fef35e6389fb0b29bbb8001646159e1a941456b978cdac3`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:ae693f4a4ded28587468bcb1b1f462b07db0c8bf233daa52f207301741a6695a`
## application/vnd.cyclonedx+json
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:059a5c5b588305938029fe0f2d7781a18b04a3e7d8fc8cc98b4878055ab3f22f`
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:b7a4e941bed69ab439b622ee272e6fc60b527d696e448057ed117e640b498aea`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:d8dae286b8bc09555de4231cd472a1f2b526af839625489a77ca8bbadb71f028`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:de336b40ad146ff481d4bef1265ab098159122a664329ea62f119dae0d969a83`
## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.44.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.44.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.44.0`


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.40.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.40.0]

## 🏃 Others
- `[OPERATOR]` Component binaries are now built with Go 1.26.4 by @dependabot[bot] [[#466](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/466)]
- `[OPERATOR]` Component binaries are now built with Go 1.26.3 by @dependabot[bot] [[#459](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/459)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.143.1 -> v1.144.0  
  - github.com/gardener/gardener/pkg/apis v1.143.1 -> v1.144.0 by @dependabot[bot] [[#469](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/469)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.140.2 -> v1.142.0  
  - github.com/gardener/gardener/pkg/apis v1.140.2 -> v1.142.0  
  - golang.org/x/tools v0.43.0 -> v0.44.0  
  - k8s.io/api v0.35.3 -> v0.35.4  
  - k8s.io/apimachinery v0.35.3 -> v0.35.4  
  - k8s.io/client-go v0.35.3 -> v0.35.4  
  - k8s.io/code-generator v0.35.3 -> v0.35.4  
  - k8s.io/component-base v0.35.3 -> v0.35.4  
  - github.com/Masterminds/semver/v3 v3.4.0 -> v3.5.0  
  - go.yaml.in/yaml/v2 v2.4.3 -> v2.4.4  
  - golang.org/x/crypto v0.49.0 -> v0.50.0  
  - golang.org/x/mod v0.34.0 -> v0.35.0  
  - golang.org/x/net v0.52.0 -> v0.53.0  
  - golang.org/x/oauth2 v0.35.0 -> v0.36.0  
  - golang.org/x/sys v0.42.0 -> v0.43.0  
  - golang.org/x/term v0.41.0 -> v0.42.0  
  - golang.org/x/text v0.35.0 -> v0.36.0 by @dependabot[bot] [[#456](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/456)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.142.0 -> v1.142.1 by @dependabot[bot] [[#462](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/462)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.142.1 -> v1.142.2  
  - github.com/gardener/gardener/pkg/apis v1.142.1 -> v1.142.2 by @dependabot[bot] [[#464](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/464)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.144.0 -> v1.144.1  
  - github.com/gardener/gardener/pkg/apis v1.144.0 -> v1.144.1 by @dependabot[bot] [[#470](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/470)]

# [github.com/gardener/oidc-webhook-authenticator:v0.44.0]

## 🏃 Others
- `[OPERATOR]` Component binaries are now built with Go 1.26.3 by @dependabot[bot] [[#236](https://github.com/gardener/oidc-webhook-authenticator/pull/236)]
- `[OPERATOR]` Component binaries are now built with Go 1.26.4 by @dependabot[bot] [[#243](https://github.com/gardener/oidc-webhook-authenticator/pull/243)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/coreos/go-oidc/v3 v3.15.0 -> v3.18.0  
  - github.com/go-jose/go-jose/v4 v4.1.3 -> v4.1.4  
  - golang.org/x/oauth2 v0.34.0 -> v0.36.0 by @dependabot[bot] [[#242](https://github.com/gardener/oidc-webhook-authenticator/pull/242)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - k8s.io/api v0.36.0 -> v0.36.2  
  - k8s.io/apimachinery v0.36.0 -> v0.36.2  
  - k8s.io/apiserver v0.36.0 -> v0.36.2  
  - k8s.io/client-go v0.36.0 -> v0.36.2  
  - k8s.io/component-base v0.36.0 -> v0.36.2  
  - k8s.io/apiextensions-apiserver v0.36.0 -> v0.36.2  
  - k8s.io/streaming v0.36.0 -> v0.36.2  
  - github.com/fsnotify/fsnotify v1.9.0 -> v1.10.1  
  - go.opentelemetry.io/otel v1.41.0 -> v1.44.0  
  - go.opentelemetry.io/otel/sdk v1.40.0 -> v1.44.0  
  - go.yaml.in/yaml/v2 v2.4.3 -> v2.4.4  
  - golang.org/x/time v0.14.0 -> v0.15.0  
  - golang.org/x/crypto v0.47.0 -> v0.53.0  
  - golang.org/x/mod v0.32.0 -> v0.37.0  
  - golang.org/x/net v0.49.0 -> v0.56.0  
  - golang.org/x/sync v0.19.0 -> v0.21.0  
  - golang.org/x/sys v0.40.0 -> v0.46.0  
  - golang.org/x/term v0.39.0 -> v0.44.0  
  - golang.org/x/text v0.33.0 -> v0.38.0  
  - golang.org/x/tools v0.41.0 -> v0.46.0  
  - sigs.k8s.io/apiserver-network-proxy/konnectivity-client v0.34.0 -> v0.36.0  
  - sigs.k8s.io/structured-merge-diff/v6 v6.3.2 -> v6.4.0 by @vpnachev [[#247](https://github.com/gardener/oidc-webhook-authenticator/pull/247)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - sigs.k8s.io/controller-runtime v0.24.0 -> v0.24.1 by @dependabot[bot] [[#239](https://github.com/gardener/oidc-webhook-authenticator/pull/239)]

# [github.com/gardener/garden-shoot-trust-configurator:v0.3.0]

## 🏃 Others
- `[OPERATOR]` Component binaries are now built with Go 1.26.3 by @dependabot[bot] [[#117](https://github.com/gardener/garden-shoot-trust-configurator/pull/117)]
- `[OPERATOR]` Component binaries are now built with Go 1.26.4 by @dependabot[bot] [[#124](https://github.com/gardener/garden-shoot-trust-configurator/pull/124)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.141.1 -> v1.142.0  
  - github.com/Masterminds/semver/v3 v3.4.0 -> v3.5.0  
  - go.yaml.in/yaml/v2 v2.4.3 -> v2.4.4 by @dependabot[bot] [[#118](https://github.com/gardener/garden-shoot-trust-configurator/pull/118)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.144.0 -> v1.144.1  
  - github.com/gardener/gardener/pkg/apis v1.144.0 -> v1.144.1 by @dependabot[bot] [[#127](https://github.com/gardener/garden-shoot-trust-configurator/pull/127)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/aws/aws-sdk-go-v2 v1.41.7 -> v1.42.0  
  - github.com/aws/aws-sdk-go-v2/config v1.32.17 -> v1.32.25  
  - github.com/aws/aws-sdk-go-v2/credentials v1.19.16 -> v1.19.24  
  - github.com/aws/aws-sdk-go-v2/feature/ec2/imds v1.18.23 -> v1.18.29  
  - github.com/aws/aws-sdk-go-v2/internal/configsources v1.4.23 -> v1.4.29  
  - github.com/aws/aws-sdk-go-v2/internal/endpoints/v2 v2.7.23 -> v2.7.29  
  - github.com/aws/aws-sdk-go-v2/internal/v4a v1.4.24 -> v1.4.30  
  - github.com/aws/aws-sdk-go-v2/service/internal/accept-encoding v1.13.9 -> v1.13.12  
  - github.com/aws/aws-sdk-go-v2/service/internal/presigned-url v1.13.23 -> v1.13.29  
  - github.com/aws/aws-sdk-go-v2/service/signin v1.0.11 -> v1.2.0  
  - github.com/aws/aws-sdk-go-v2/service/sso v1.30.17 -> v1.31.3  
  - github.com/aws/aws-sdk-go-v2/service/ssooidc v1.35.21 -> v1.36.6  
  - github.com/aws/aws-sdk-go-v2/service/sts v1.42.1 -> v1.43.3  
  - github.com/aws/smithy-go v1.25.1 -> v1.27.2  
  - github.com/go-openapi/errors v0.22.7 -> v0.22.8  
  - github.com/zitadel/oidc/v3 v3.45.4 -> v3.47.5  
  - go.opentelemetry.io/contrib/otelconf v0.23.0 -> v0.24.0  
  - go.opentelemetry.io/otel/exporters/otlp/otlplog/otlploggrpc v0.19.0 -> v0.20.0  
  - go.opentelemetry.io/otel/exporters/otlp/otlplog/otlploghttp v0.19.0 -> v0.20.0  
  - go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetricgrpc v1.43.0 -> v1.44.0  
  - go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetrichttp v1.43.0 -> v1.44.0  
  - go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp v1.43.0 -> v1.44.0  
  - go.opentelemetry.io/otel/exporters/prometheus v0.65.0 -> v0.66.0  
  - go.opentelemetry.io/otel/exporters/stdout/stdoutlog v0.19.0 -> v0.20.0  
  - go.opentelemetry.io/otel/exporters/stdout/stdoutmetric v1.43.0 -> v1.44.0  
  - go.opentelemetry.io/otel/exporters/stdout/stdouttrace v1.43.0 -> v1.44.0  
  - go.opentelemetry.io/otel/log v0.19.0 -> v0.20.0  
  - go.opentelemetry.io/otel/sdk/log v0.19.0 -> v0.20.0  
  - k8s.io/autoscaler/vertical-pod-autoscaler v1.6.0 -> v1.7.0  
  - k8s.io/kube-aggregator v0.35.5 -> v0.36.2  
  - k8s.io/metrics v0.35.5 -> v0.36.2  
  - sigs.k8s.io/gateway-api v1.5.0 -> v1.5.1 by @vpnachev [[#130](https://github.com/gardener/garden-shoot-trust-configurator/pull/130)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.142.1 -> v1.142.2  
  - github.com/gardener/gardener/pkg/apis v1.142.1 -> v1.142.2 by @dependabot[bot] [[#121](https://github.com/gardener/garden-shoot-trust-configurator/pull/121)]

## application/spdx+json
- gardener-extension-shoot-oidc-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service@sha256:17e31584b0941198826e6819b6c0d51aac02e81196c5cb6869476fd68aa7a39d`
- gardener-extension-shoot-oidc-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service@sha256:bf12d3f7cef3b58dca843e8805c555f290c71230f142e6237ec4399f055b5037`
## application/vnd.cyclonedx+json
- gardener-extension-shoot-oidc-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service@sha256:6e0dff9f58035fece0cc98b1477b4fd22f2eb29bea823e8201af264b5957a6c7`
- gardener-extension-shoot-oidc-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service@sha256:88f91d7afda3fc5a6624030fd0583f94a12521164940130bb7d1ea7817765ef7`
## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.40.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.40.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.45.0</code></b></summary>

# [github.com/gardener/gardener-metrics-exporter:0.45.0]

## 🏃 Others
- `[OPERATOR]` Upgrade Go to 1.26.0 and update dependencies by @chrkl [[#151](https://github.com/gardener/gardener-metrics-exporter/pull/151)]
- `[OPERATOR]` Replace OIDCConfig with StructuredAuthentication for Shoot customization metric by @chrkl [[#149](https://github.com/gardener/gardener-metrics-exporter/pull/149)]
- `[USER]` Adding iaas related labels to seed condition metric by @etiennnr [[#148](https://github.com/gardener/gardener-metrics-exporter/pull/148)]

## application/spdx+json
- metrics-exporter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter@sha256:24e82f6e8f32c30a137f724527038fcc7397a63dfca6a95104f4dfd919f59fe0`
- metrics-exporter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter@sha256:c45dda11193384e78323f1696e73a7959534a294d476b10bc10bbbf91e2d3da0`
## application/vnd.cyclonedx+json
- metrics-exporter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter@sha256:cafe6f38f8fb27fb0fcde272c950228da12cd3c33fc2ad3d054f1974079414d6`
- metrics-exporter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter@sha256:f14ebab0b19ddb3587511630ffda0a928334f9c4b745a0e4e04446b0541ef6fb`
## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.45.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.45.0</code></b></summary>

# [github.com/gardener/gardener-metrics-exporter:0.45.0]

## 🏃 Others
- `[OPERATOR]` Upgrade Go to 1.26.0 and update dependencies by @chrkl [[#151](https://github.com/gardener/gardener-metrics-exporter/pull/151)]
- `[OPERATOR]` Replace OIDCConfig with StructuredAuthentication for Shoot customization metric by @chrkl [[#149](https://github.com/gardener/gardener-metrics-exporter/pull/149)]
- `[USER]` Adding iaas related labels to seed condition metric by @etiennnr [[#148](https://github.com/gardener/gardener-metrics-exporter/pull/148)]

## application/spdx+json
- metrics-exporter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter@sha256:24e82f6e8f32c30a137f724527038fcc7397a63dfca6a95104f4dfd919f59fe0`
- metrics-exporter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter@sha256:c45dda11193384e78323f1696e73a7959534a294d476b10bc10bbbf91e2d3da0`
## application/vnd.cyclonedx+json
- metrics-exporter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter@sha256:cafe6f38f8fb27fb0fcde272c950228da12cd3c33fc2ad3d054f1974079414d6`
- metrics-exporter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter@sha256:f14ebab0b19ddb3587511630ffda0a928334f9c4b745a0e4e04446b0541ef6fb`
## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.45.0`


</details>

<details>
<summary><b>Update gardener-webterminal to <code>0.37.0</code></b></summary>

# [github.com/gardener/terminal-controller-manager:v0.37.0]

## 🐛 Bug Fixes
- `[USER]` Fix terminal attach against Kubernetes v1.35+ Shoot clusters by granting the `create` verb on `pods/attach` in the attach ServiceAccount's Role, in addition to `get`. Required by the `AuthorizePodWebsocketUpgradeCreatePermission` feature gate (default-on since v1.35). by @petersutter [[#505](https://github.com/gardener/terminal-controller-manager/pull/505)]

## application/spdx+json
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:504a7760a514473831c519315a7fd554ece5924542bb51d6e93e6a5b8524fa68`
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:f21079bddcfff50678cc7d3a7c833998098135c5066b21fec151c04aa90f71bf`
## application/vnd.cyclonedx+json
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:0652e5eb443b68acf628a5a8607e16dfeaa948b648a8464bf3b1c29b1ebcc449`
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:7386bc7782b030565bb5aae32378ff000fb79e2e3f2cf360c170e7f2d4bcfaa8`
## Container (OCI) Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.37.0`


</details>

<details>
<summary><b>Update gardener-webterminal to <code>0.37.0</code></b></summary>

# [github.com/gardener/terminal-controller-manager:v0.37.0]

## 🐛 Bug Fixes
- `[USER]` Fix terminal attach against Kubernetes v1.35+ Shoot clusters by granting the `create` verb on `pods/attach` in the attach ServiceAccount's Role, in addition to `get`. Required by the `AuthorizePodWebsocketUpgradeCreatePermission` feature gate (default-on since v1.35). by @petersutter [[#505](https://github.com/gardener/terminal-controller-manager/pull/505)]

## application/spdx+json
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:504a7760a514473831c519315a7fd554ece5924542bb51d6e93e6a5b8524fa68`
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:f21079bddcfff50678cc7d3a7c833998098135c5066b21fec151c04aa90f71bf`
## application/vnd.cyclonedx+json
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:0652e5eb443b68acf628a5a8607e16dfeaa948b648a8464bf3b1c29b1ebcc449`
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:7386bc7782b030565bb5aae32378ff000fb79e2e3f2cf360c170e7f2d4bcfaa8`
## Container (OCI) Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.37.0`


</details>

<details>
<summary><b>Update image-rewriter to <code>0.10.0</code></b></summary>

# [github.com/gardener/gardener-extension-image-rewriter:v0.10.0]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.144.1` to `v1.144.2`.   
  - `github.com/gardener/gardener/pkg/apis` from `v1.144.1` to `v1.144.2`. by @gardener-ci-robot [[#102](https://github.com/gardener/gardener-extension-image-rewriter/pull/102)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.140.2` to `v1.140.3`.   
  - `github.com/gardener/gardener/pkg/apis` from `v1.140.2` to `v1.140.3`. by @gardener-ci-robot [[#89](https://github.com/gardener/gardener-extension-image-rewriter/pull/89)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `k8s.io/api` from `v0.35.4` to `v0.35.5`.   
  - `k8s.io/apimachinery` from `v0.35.4` to `v0.35.5`.   
  - `k8s.io/code-generator` from `v0.35.4` to `v0.35.5`.   
  - `k8s.io/component-base` from `v0.35.4` to `v0.35.5`. by @gardener-ci-robot [[#95](https://github.com/gardener/gardener-extension-image-rewriter/pull/95)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `k8s.io/api` from `v0.35.5` to `v0.35.6`.   
  - `k8s.io/apimachinery` from `v0.35.5` to `v0.35.6`.   
  - `k8s.io/code-generator` from `v0.35.5` to `v0.35.6`.   
  - `k8s.io/component-base` from `v0.35.5` to `v0.35.6`. by @gardener-ci-robot [[#99](https://github.com/gardener/gardener-extension-image-rewriter/pull/99)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `golang` from `1.26.3` to `1.26.4`. by @gardener-ci-robot [[#97](https://github.com/gardener/gardener-extension-image-rewriter/pull/97)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `golang` from `1.26.2` to `1.26.3`. by @gardener-ci-robot [[#91](https://github.com/gardener/gardener-extension-image-rewriter/pull/91)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `k8s.io/utils` from `v0.0.0-20260319190234-28399d86e0b5` to `v0.0.0-20260507154919-ff6756f316d2`. by @gardener-ci-robot [[#90](https://github.com/gardener/gardener-extension-image-rewriter/pull/90)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `go` from `1.26.3` to `1.26.4`. [Release Notes](https://redirect.github.com/go/releases/tag/1.26.4) by @gardener-ci-robot [[#98](https://github.com/gardener/gardener-extension-image-rewriter/pull/98)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `k8s.io/utils` from `v0.0.0-20260507154919-ff6756f316d2` to `v0.0.0-20260617174310-a95e086a2553`. by @gardener-ci-robot [[#101](https://github.com/gardener/gardener-extension-image-rewriter/pull/101)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.140.1` to `v1.140.2`.   
  - `github.com/gardener/gardener/pkg/apis` from `v1.140.1` to `v1.140.2`. by @gardener-ci-robot [[#87](https://github.com/gardener/gardener-extension-image-rewriter/pull/87)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `go` from `1.26.2` to `1.26.3`. [Release Notes](https://redirect.github.com/go/releases/tag/1.26.3) by @gardener-ci-robot [[#92](https://github.com/gardener/gardener-extension-image-rewriter/pull/92)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.140.5` to `v1.144.1`.   
  - `github.com/gardener/gardener/pkg/apis` from `v1.140.5` to `v1.144.1`. by @gardener-ci-robot [[#88](https://github.com/gardener/gardener-extension-image-rewriter/pull/88)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.140.3` to `v1.140.4`. by @gardener-ci-robot [[#93](https://github.com/gardener/gardener-extension-image-rewriter/pull/93)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener` from `v1.140.4` to `v1.140.5`.   
  - `github.com/gardener/gardener/pkg/apis` from `v1.140.4` to `v1.140.5`. by @gardener-ci-robot [[#96](https://github.com/gardener/gardener-extension-image-rewriter/pull/96)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `github.com/gardener/gardener/pkg/apis` from `v1.140.3` to `v1.140.4`. by @gardener-ci-robot [[#94](https://github.com/gardener/gardener-extension-image-rewriter/pull/94)]

## application/spdx+json
- gardener-extension-image-rewriter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/image-rewriter@sha256:5a1569653c19f0ff61be84366b336ec568aa526e5ed05d21443945f55853d457`
- gardener-extension-image-rewriter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/image-rewriter@sha256:8d4d5e7e16d32086164546e6db6e6bf8e2903f04728f187ddcfd67b4231f921b`
## application/vnd.cyclonedx+json
- gardener-extension-image-rewriter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/image-rewriter@sha256:7d5651ad96efef667467b65eadb5247c68127bc93c69839177b0fdd336f0a0f4`
- gardener-extension-image-rewriter-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/image-rewriter@sha256:ef22c0a34d2c5c92ec66d6d575ef298e98438d69e5bc2bf2acfdeaf129080023`
## Helm Charts
- image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/image-rewriter:v0.10.0`
## Container (OCI) Images
- gardener-extension-image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/image-rewriter:v0.10.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.46.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.46.0]

## 🐛 Bug Fixes
- `[OPERATOR]` [next-generation] Fix DNSEntry cleanup when all targets/text are removed from the spec. by @MartinWeindel [[#934](https://github.com/gardener/external-dns-management/pull/934)]

## application/spdx+json
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:577de089ce7180cb10c265be57f401c212f06e5a93910119ac4f4021b614ce36`
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:db560ba94bb370f21a2e30ee00776896d85e5ad97ef1168b92708f0909a84b0c`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:fd9e258db8382439d61bec2a591df7d675f8b761154a1701c7b7603955726530`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:fe4ccec4af47d1e1ea038a1e1bebc772587b1a587353b1315f9364793edaa70d`
## application/vnd.cyclonedx+json
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:43a4c1c978347595423b0f18e5b2605d9f9e4b0945281c40df5e358fb2cec30c`
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:659903b2bb21042d3c402b1a09ba6141687f6bdd8622d8b64836f2db49528b5f`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:1d26e5d12f47740c6ed14238fa3ea4e4dbdf456644e8730050241b13d1a098b0`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:23decb978e0cc072bc059a2b650b6da28f439f401dd8a3e00d84fdad3bacf715`
## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.46.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.46.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.46.0`


</details>

<details>
<summary><b>Update networking-calico to <code>1.59.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-calico:v1.59.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#834](https://github.com/gardener/gardener-extension-networking-calico/pull/834)]

## 📰 Noteworthy
- `[USER]` Support Calico NFTables mode by @hown3d [[#824](https://github.com/gardener/gardener-extension-networking-calico/pull/824)]

## 🏃 Others
- `[OPERATOR]` Calico charts are update to version v1.31.5 by @axel7born [[#831](https://github.com/gardener/gardener-extension-networking-calico/pull/831)]
- `[OPERATOR]` Support `admissionregistration.k8s.io/v1beta1` runtime config for MutatingAdmissionPolicy detection by @DockToFuture [[#827](https://github.com/gardener/gardener-extension-networking-calico/pull/827)]
- `[OPERATOR]` Disable Felix IP-in-IP when overlay is explicitly disabled to prevent unnecessary tunnel device creation and incorrect MTU overhead. by @axel7born [[#843](https://github.com/gardener/gardener-extension-networking-calico/pull/843)]
- `[OPERATOR]` Calico `calico-node` and `multus` DaemonSets now use `revisionHistoryLimit=2` to comply with the gardener component checklist. by @alliasgher [[#835](https://github.com/gardener/gardener-extension-networking-calico/pull/835)]
- `[OPERATOR]` Seamless overlay switch activation is aligned with the `MutatingAdmissionPolicy` admission API availability across Kubernetes versions: `>= 1.36` (GA) activates automatically, `< 1.36` (alpha or beta, off by default per KEP-3136) requires explicit feature gate + `runtimeConfig` opt-in. by @DockToFuture [[#829](https://github.com/gardener/gardener-extension-networking-calico/pull/829)]

## application/spdx+json
- cni-plugins-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins@sha256:4a3a3fa29a6b5c48ba70fe0a7df3371dfcdd47a3634367764dc04f81379ec4e3`
- cni-plugins-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins@sha256:dca348d64aab8584427382a6d8450ed34c62cf56c7d43385fa0080aa7445dfea`
- gardener-extension-admission-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico@sha256:a24ebbcea37d09ac9a06efde7923f49c5bba3ecfa4d569ec35e331c403734ec7`
- gardener-extension-admission-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico@sha256:d42b2ceadd6432ba8cf8ae06cb8e603218d189411abfca5d6f7e068b7190286e`
- gardener-extension-networking-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico@sha256:6620e19ffc78fb5ae0cabfb40d31351a7e8a9d6cc585badae366a47801269122`
- gardener-extension-networking-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico@sha256:d2eaae1bc8b9f71671e3a4efccc4210bb59fa049d28de964e95bd1092ca86bbf`
## application/vnd.cyclonedx+json
- cni-plugins-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins@sha256:62200434226656fcb99d0cffd93c1c1ed2743d181dac39d9a5c6cf71d390755e`
- cni-plugins-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins@sha256:93922efce9551ea6c97650dc3422415c0a7aa1481e4093e3c895f2d028f82189`
- gardener-extension-admission-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico@sha256:1e5c2fa6581aabbb0d5255ab2002e434a61793c1f3e6faf81b9af32b4385baab`
- gardener-extension-admission-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico@sha256:e878e24df982e5d7b750c9679e6167c4d9a39ffc53a290ae47510b1ba8724ad6`
- gardener-extension-networking-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico@sha256:593896d862a4d46b0df51a4cbfbfe9f7f753f507e7e7f935ccd4aa239124a66a`
- gardener-extension-networking-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico@sha256:cdbf1198bbb01221de4e57284fc689bd6828176ca32c38ca0144856f6c4b6b1f`
## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.59.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.59.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.59.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.59.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.59.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.59.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.48.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-cilium:v1.48.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#717](https://github.com/gardener/gardener-extension-networking-cilium/pull/717)]

## 🐛 Bug Fixes
- `[USER]` Respect NetworkConfig Hubble settings in cilium-config by @hown3d [[#741](https://github.com/gardener/gardener-extension-networking-cilium/pull/741)]

## 🏃 Others
- `[OPERATOR]` Updated charts and images to cilium v1.19.4 by @axel7born [[#734](https://github.com/gardener/gardener-extension-networking-cilium/pull/734)]
- `[OPERATOR]` Cilium agent and `cilium-envoy` DaemonSets now set `revisionHistoryLimit=2` to comply with the gardener component checklist. by @alliasgher [[#718](https://github.com/gardener/gardener-extension-networking-cilium/pull/718)]

## application/spdx+json
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:00c4a2d89a41d2063357062a9ec50c314eae1441834da0357c1139ae9ad58bcd`
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:e851c60b1c7002355655dbb68a6060a66c93d31bdb5843491ab42651921c8cbb`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:42c30fd0ae8b96d2d42a4a7727dfb4c4bd054a6e862a74a8d5dcdbaab6cc0b49`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:501966b6f66dab86dd285b1637c7764111c1f803fdea11e8aa6b5d5f16f862ce`
## application/vnd.cyclonedx+json
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:42799ddddfa6ff18c805412f01ac343acddddd21b52ac594519fb4255177fff6`
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:a2cfc08ae6b233fce138bbdda800e0e0b8ee501c0f77fa780def3d7197f54d4f`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:9097174a5fa3ffd7183b6855ab98d559fe621eeb6199362c327e5d61ddab945d`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:e86512d24c5a0f199f92a16a8eba971b2b5bbd1b383da6d514700813781943f8`
## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.48.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.48.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.48.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.48.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.48.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.56.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.56.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Filter subnet DNS servers from CloudProfile by IP family in reconcile logic by @hebelsan [[#1347](https://github.com/gardener/gardener-extension-provider-openstack/pull/1347)]
- `[OPERATOR]` VPA for the extension pod now also controls CPU requests in addition to memory. The VPA container policy also explicitly disables autoscaling for any non-main containers following Gardener best practices. by @voelzmo [[#1341](https://github.com/gardener/gardener-extension-provider-openstack/pull/1341)]
- `[OPERATOR]` Add credentials validation to support InternalSecret type by @hebelsan [[#1359](https://github.com/gardener/gardener-extension-provider-openstack/pull/1359)]
- `[OPERATOR]` Enables the use of `spec.dns.providers[].credentialsRef` and thus enables to upgrade to k8s version `v1.135` where spec.dns.providers[].secretName is not allowed anymore. by @wpross [[#1357](https://github.com/gardener/gardener-extension-provider-openstack/pull/1357)]
- `[OPERATOR]` Fix CSI manila share client value race condition in control plane reconciliation by @hebelsan [[#1351](https://github.com/gardener/gardener-extension-provider-openstack/pull/1351)]
- `[OPERATOR]` Fix a nil pointer dereference panic in the worker controller that could prevent reconciliation or deletion of workers whose `providerStatus.machineImages` was empty and whose referenced machine image was missing from the CloudProfile. by @Roncossek [[#1352](https://github.com/gardener/gardener-extension-provider-openstack/pull/1352)]

## 🏃 Others
- `[OPERATOR]` Added securityContext attributes to comply with the Pod Security Standards `restricted` level by @relusc [[#1360](https://github.com/gardener/gardener-extension-provider-openstack/pull/1360)]
- `[DEVELOPER]` Migrate test mock clients to fakeclient following https://github.com/gardener/gardener/pull/14799 by @wpross [[#1367](https://github.com/gardener/gardener-extension-provider-openstack/pull/1367)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-provisioner: v6.2.0 -> v6.3.0 (singleton)  
    - csi-resizer: v2.1.0 -> v2.2.0 (singleton)  
    - csi-snapshot-controller: v8.5.0 -> v8.6.0 (singleton)  
    - csi-snapshotter: v8.5.0 -> v8.6.0 (singleton) by @federated-github-access[bot] [[#1369](https://github.com/gardener/gardener-extension-provider-openstack/pull/1369)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-attacher: v4.11.0 -> v4.12.0 (singleton)  
    - csi-liveness-probe: v2.18.0 -> v2.19.0 (singleton)  
    - csi-node-driver-registrar: v2.16.0 -> v2.17.0 (singleton)  
    - machine-controller-manager-provider-openstack: v0.26.0 -> v0.27.0 (singleton) by @federated-github-access[bot] [[#1345](https://github.com/gardener/gardener-extension-provider-openstack/pull/1345)]

## application/spdx+json
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:7c8fcd8b41dcfa82eaa3f7abeb809dcb91357ed03c7dbcfe00f3df8f8538e5aa`
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:811fa1d7fe9707b349a8a821e64167a626002012c8a375de931e17d8b7bd59e6`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:324bc3923c88a142cace00f6074269c4ef54d84b698b004e0acf72b47d1dede3`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:fdda8c7d3472ce2c6846f9000d98ee77551f32b0ca45933f53de3ea2c853caf6`
## application/vnd.cyclonedx+json
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:98ae00aa636257297b16593216a311976edd1239371fb2fa19ca05509cd28682`
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:a0d845fc9ab2c82f268d4d7243975d8cbbc5653da03b84ad93ef2f41fecd7d61`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:a05b9b65d4fa8a1bb4d8ecdc0506e3a92b35052094069409fc5855f454bd38e0`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:c0d17beabbc31f79eff6e5924bb32e3f02a8b1c7c178b2069d2afc2b45d3a9cb`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.56.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.56.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.56.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.56.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.56.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.40.1</code></b></summary>



## application/spdx+json
- gardener-extension-os-ubuntu-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:02e0407a20913d706e13e53b991db7518f5b5c043b458ee581f2391bc7234cec`
- gardener-extension-os-ubuntu-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:9595c1809920a44bc60682432f2411073e1cecd35db21ff27f6d4c7b32358681`
## application/vnd.cyclonedx+json
- gardener-extension-os-ubuntu-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:4dd594135c8976280f9cb8d83fa61c91b396004d485849b86730cb624c907cb8`
- gardener-extension-os-ubuntu-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:eb8abf5078112d66285ec3f93ac53a870986fff7de0e95a9cdf2ac27f97785ef`
## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.40.1`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.40.1`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.44.0</code></b></summary>



## application/spdx+json
- gardener-extension-os-gardenlinux-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:44dd9ae30f61ef782f576a033a2d9c675b219222dfb524c22b0fa8f3a118134b`
- gardener-extension-os-gardenlinux-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:68cb390e594df008d90824432f7d1c145cc60b9dd49d8ad3ebf04e373b664557`
## application/vnd.cyclonedx+json
- gardener-extension-os-gardenlinux-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:7a18c77466469d61648bb6f0ccd925156fe68ca54b7423d5886100a3fa1ef69d`
- gardener-extension-os-gardenlinux-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux@sha256:84fed33515e2c1903b92f3b9156d537e23a87898bdce3ccfa543e8305b36e39a`
## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.44.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.44.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.41.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.41.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260608.0. by @federated-github-access[bot] [[#415](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/415)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:7b2edd3104a2f102c55ace517e0f9450456367326c41515383a39b0168af2289`
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:bbe4594ee13717278dad9bf25330b6ff94e1da2e71bd431c27638146f52efead`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:8b201e54a5e074460394745097ab3adedbbb5921b3316e3ebd1c42f1ba137247`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:960c89ce3c0b67b42c2272dd79257842933080e45f8201905fed7dc9a4c3d6d6`
## application/vnd.cyclonedx+json
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:71c3bee474ca5e2209456f553b8f8dd2b3b0c640ce93a633db24363076c82ce2`
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:b962c507e3bda54d16c277e4c88a3a61f5fd0fbc745af70e80a4c78774442b5f`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:86438c42b4d21481d828b8234484b27448eeef58531fb12f915dc692b52f1d64`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:96c6a527ea844565560adc46f3df4a7c55042452ed15c1c86be52c094816c187`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.41.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.41.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.41.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.48.4</code></b></summary>

# [github.com/gardener/gardener-extension-networking-cilium:v1.48.4]

## 🐛 Bug Fixes
- `[USER]` Add NET_ADMIN capability to config initContainer to support kube-apiserver host firewall bypass by @hown3d [[#763](https://github.com/gardener/gardener-extension-networking-cilium/pull/763)]

## application/spdx+json
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:c1e79fd0cb85d2426dddb43dc990de0a964b352750df09b9cc846d7a69d4b0c4`
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:d1fa60c73e5fb872e2ac310b96e87e88d3bb5226870afefb06b748c6fcf19a4c`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:834c683fc07017bc73937d1038ce08a7f6eea1017548f666eb40ec8d9ae65a2e`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:87183f30f4a87cbb1b0df861e8f41f1c3ae7487f897f30e5d497aed2a2e23568`
## application/vnd.cyclonedx+json
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:057bc1253d9032998f4f3f2b788e6c5c6e2a22219e7903c1d12ffde558e2c65f`
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:eaed10e4214b61b53d110bb35a9422bf87a6aca97994b08c0bc6bb410b18017f`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:5b0c4a853dcf9e62fa40bca3f2ec34703a05e32000289bfd6ead676265264992`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:c0f80dc229008a316ea03e5aee2085157710c2949a7de626ef5d957440af27ec`
## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.48.4`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.48.4`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.48.4`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.48.4`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.48.4`


</details>

<details>
<summary><b>Update acl to <code>1.18.0</code></b></summary>

<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### 🤖 Dependencies
* Update module github.com/onsi/ginkgo/v2 to v2.28.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/274
* Update module github.com/onsi/ginkgo/v2 to v2.28.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/275
* Update k8s packages to v1.140.3 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/277
* Update k8s.io/utils digest to ff6756f by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/281
* Update go toolchain directive to v1.26.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/282
* Update k8s packages to v1.140.4 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/283
* Update k8s packages to v0.35.5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/285
* Update k8s packages to v1.140.5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/289
* Update module github.com/onsi/ginkgo/v2 to v2.29.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/286
* Update module golang.org/x/tools to v0.45.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/284
* Update module github.com/onsi/gomega to v1.41.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/287
* Update k8s packages (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/272
* Update k8s packages to v1.143.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/290
* Update go toolchain directive to v1.26.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/291
* Update dependency go to v1.26.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/292
* Update k8s packages to v1.143.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/294
* Update k8s packages to v0.36.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/297
* Update k8s.io/utils digest to a95e086 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/299
* Update k8s packages to v1.143.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/300
* Update module golang.org/x/tools to v0.46.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/296
* Update actions/checkout action to v7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/301
* Update module github.com/onsi/ginkgo/v2 to v2.32.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/295
* Update module github.com/onsi/gomega to v1.42.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/298
### ℹ️ Other Changes
* Drop support for K8s `<= 1.31` by @timuthy in https://github.com/stackitcloud/gardener-extension-acl/pull/279
* move skaffold setup to operator extensions by @hown3d in https://github.com/stackitcloud/gardener-extension-acl/pull/278
* assign ske-networking as code owners by @ftl in https://github.com/stackitcloud/gardener-extension-acl/pull/288
* Allow EgressIPs of ManagedSeeds for Proxy LoadBalancers by @modzilla99 in https://github.com/stackitcloud/gardener-extension-acl/pull/207

## New Contributors
* @timuthy made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/279
* @hown3d made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/278
* @modzilla99 made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/207

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.17.0...v1.18.0

</details>

<details>
<summary><b>Update cert-management to <code>0.25.0</code></b></summary>

# [github.com/gardener/cert-management:v0.25.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The package `github.com/gardener/cert-manament/pkg/apis` has been made a Go submodule. by @MartinWeindel [[#754](https://github.com/gardener/cert-management/pull/754)]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#744](https://github.com/gardener/cert-management/pull/744)]

## application/spdx+json
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:03c55c9b92fba7809ae2fbaebf14c1e5f055aa017bad1d345f5a48a50ee3e08b`
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:7f21a795d3711409c6a6698c46df2d1cb59131ee06deb2b55905249ff0a69139`
## application/vnd.cyclonedx+json
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:0a42cfdceca2054537e8ee8434499f3174bc0745f5b9fbc27aedc1b6bd777365`
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:575d8631c6805b25786e9acf30f4011c314b2b697b52aba315b60e4233963110`
## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.25.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.25.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.47.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.47.0]

## 🏃 Others
- `[OPERATOR]` [next-generation] Prevent self-retrigger: finalizer robustness and status-patch elision for `DNSEntry` by @MartinWeindel [[#948](https://github.com/gardener/external-dns-management/pull/948)]
- `[OPERATOR]` [next-generation] Reduce reconciliation load on `DNSEntry` controller by @MartinWeindel [[#943](https://github.com/gardener/external-dns-management/pull/943)]

## application/spdx+json
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:acc20be166b93f6d35e72974642bf8a6511354fa493a625e16de12f55f4cf9bb`
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:d8f842322790d265abf1676dbd350e979b014f781cac2cc621bb45940c561a64`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:2126f8415dfabb2bfa56f13b5e91808fa0a9afeab76420ca519a8a2a7f91caa9`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:92982026bd55e66821f54c80ea06b2543824190ceb7b125d130e75e279364111`
## application/vnd.cyclonedx+json
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:6d7a374ba605811ddea7966cc1e733b804aad2ba23d678d34233ff0d5ecb7fd2`
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:d5a197993138084e63024c8589fc46bedd4032a44a822db1334e42b71ac5a005`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:36c2623b5de10421b8eca6a3a2140bac2cd776863169b99669b3b4bc8b34b5ca`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:61592624f577bd8c9a2cf1db2a2716cd9469f696b29965f69a770594d6e8f60e`
## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.47.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.47.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.47.0`


</details>

<details>
<summary><b>Update os-coreos to <code>1.30.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-coreos:v1.30.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix multiple interfaces in ntpd config by @dergeberl [[#284](https://github.com/gardener/gardener-extension-os-coreos/pull/284)]

## 🏃 Others
- `[OPERATOR]` Update gardener/gardener to v1.145.0 by @breuerfelix [[#291](https://github.com/gardener/gardener-extension-os-coreos/pull/291)]

## application/spdx+json
- gardener-extension-os-coreos-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos@sha256:54dfd20f1a6a4c0a1db50f220d8be38bd3d3f6e2c2642c7354cde1d76400bfd2`
## application/vnd.cyclonedx+json
- gardener-extension-os-coreos-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos@sha256:31f984e779b56fd7cdcb3b5b338717243307d939198ce6f78f461df097e34466`
## Helm Charts
- os-coreos: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-coreos:v1.30.0`
## Container (OCI) Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.30.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.72.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-alicloud:v1.72.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Bump machine-controller-manager dependency from v0.62.0->v.62.1 and image vector for machine-controller-manager-provider-alicloud from `v0.15.0 → v0.15.1`. by @thiyyakat [[#918](https://github.com/gardener/gardener-extension-provider-alicloud/pull/918)]

## 🏃 Others
- `[OPERATOR]` Fix `NamespacedCloudProfile` admission to populate `capabilityFlavors` on spec machine images and allow expirationDate-only overrides of parent versions without requiring a providerConfig entry. by @kevin-lacoo [[#911](https://github.com/gardener/gardener-extension-provider-alicloud/pull/911)]
- `[OPERATOR]` When new zones are added to an existing BYO-VPC Shoot, the admission webhook validates CIDR conflicts against existing VSwitches. by @kevin-lacoo [[#913](https://github.com/gardener/gardener-extension-provider-alicloud/pull/913)]
- `[DEPENDENCY]` Bumped Gardener dependency to v1.143.1, including module split migration. Bumped MCM dependency to v0.62.0 by @thiyyakat [[#907](https://github.com/gardener/gardener-extension-provider-alicloud/pull/907)]

## application/spdx+json
- gardener-extension-admission-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:2d1801ed532e18caac303cf2bae0be8a035158e1ffd36e8ed9819f70f7929ce7`
- gardener-extension-admission-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:3b5788a0a752d319d813009c1f4c79ef307352d6f116fdc103d8ad19574575da`
- gardener-extension-provider-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:2aff6e7abf901946ae5190fd00eb77cce4063fc2a28208c3681307d9d35d0ad9`
- gardener-extension-provider-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:f7c81ffd4c6690587f2315ab0595639829dd806a811d871815a5a697177ccc6d`
## application/vnd.cyclonedx+json
- gardener-extension-admission-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:33ed9fff578f6806c423a7bb442f46c4b85d8e252ecb27faeff4bbebb5eea74d`
- gardener-extension-admission-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:bedf429a6981ed3bb5ea07ee9188f6c4e83e95cb0fa2227bf2119af2cc6400e9`
- gardener-extension-provider-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:1dde6e30aef0b9163b14e6307804538389bc9f26549730066e4ced4c1e255d13`
- gardener-extension-provider-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:4c8fb12359da08a01e6c91aaf97fa12b1ee3b2bfbef23fd2209d608fa314f0a4`
## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.72.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.72.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.72.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.72.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.72.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.72.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.72.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Update image vector for machine-controller-manager-provider-aws from `v0.28.0 → v0.28.1`. by @thiyyakat [[#1868](https://github.com/gardener/gardener-extension-provider-aws/pull/1868)]
- `[OPERATOR]` Fix admission validator rejecting new arm64 worker pools added to existing shoots when the CloudProfile defines no `capabilityDefinitions`. by @Roncossek [[#1846](https://github.com/gardener/gardener-extension-provider-aws/pull/1846)]

## 🏃 Others
- `[OPERATOR]` Update images to `alpine:3.24.1`  and `pause:3.10.2` by @matthias-horne [[#1872](https://github.com/gardener/gardener-extension-provider-aws/pull/1872)]
- `[OPERATOR]` Update `aws-custom-route-controller` image tag to `v0.17.0`. by @MartinWeindel [[#1869](https://github.com/gardener/gardener-extension-provider-aws/pull/1869)]
- `[OPERATOR]` Migrate test mock clients to fakeclient following https://github.com/gardener/gardener/pull/14799 by @hebelsan [[#1853](https://github.com/gardener/gardener-extension-provider-aws/pull/1853)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-resizer: v2.2.0 -> v2.2.1 (singleton) by @federated-github-access[bot] [[#1874](https://github.com/gardener/gardener-extension-provider-aws/pull/1874)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-ipam-controller: v0.10.0 -> v0.11.0 (singleton)  
    - cloud-controller-manager: v1.32.5 -> v1.32.8 (patch)  
    - cloud-controller-manager: v1.33.2 -> v1.33.4 (patch)  
    - cloud-controller-manager: v1.34.0 -> v1.34.3 (patch)  
    - cloud-controller-manager: v1.35.0 -> v1.35.2 (patch)  
    - csi-driver: v1.61.1 -> v1.62.0 (singleton)  
    - csi-driver-efs: v3.2.0 -> v3.3.0 (singleton)  
    - csi-provisioner: v6.2.0 -> v6.3.0 (singleton)  
    - csi-resizer: v2.1.0 -> v2.2.0 (singleton)  
    - csi-snapshot-controller: v8.5.0 -> v8.6.0 (singleton)  
    - csi-snapshotter: v8.5.0 -> v8.6.0 (singleton) by @federated-github-access[bot] [[#1840](https://github.com/gardener/gardener-extension-provider-aws/pull/1840)]

## application/spdx+json
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:751beaa187cfc9cb0710b0be916f374221ec78cfed8c63ba19f3b860315738ce`
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:8e387a7c7e0a80e3448fd309a1084dc53a8deca570ea6465c643030a39bb57c3`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:7b8ed38c1845f00fb7e9dc5bd05275b2b746ca67bd3c11cd5f26d31f3966d041`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:bb13663ee25fd090a6051515331295933f10f13e55234cebf1512d18ab388b92`
## application/vnd.cyclonedx+json
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:7a0c67e301d2bd1f900014a124d9be84187705b6a7a6a2c1228cd2573896f2a3`
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:dca0174c0c566b5eec9f719eb9e9907f079767286988f2b0ca76ecd41a2f585d`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:9cc78f8f6a6f97d087da4ea33af62f5f84ff0d4f477b9ec8d2d330732c081aa3`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:b1970aef3ae40ef9c2415b1f11aa87fb52e8c66d24546eeae1dc9d64fe845e8f`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.72.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.72.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.72.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.72.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.72.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.62.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.62.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Update image vector for machine-controller-manager-provider-azure from `v0.20.0 -> v0.20.1`. by @thiyyakat [[#1574](https://github.com/gardener/gardener-extension-provider-azure/pull/1574)]

## application/spdx+json
- gardener-extension-admission-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:b72fbd2e4ef3b4c30a3325de3edf2abed1340a90b8572f8d817de11c7bee082c`
- gardener-extension-admission-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:d3fcb1e04b239e029a46ae5328aa808ae0571e927fc14b5c907c24e83b1e59e1`
- gardener-extension-provider-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:2c32a737adc3e3a99b09847a968513bbcf9a0601a39a7a39fc64a1a5afcd0859`
- gardener-extension-provider-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:4eaffa2fa36e944afae398da91f651b8a1ad480f866694fe3a764d36ef15d8be`
## application/vnd.cyclonedx+json
- gardener-extension-admission-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:3609bb95a4a8c6f3cd49e6eb69db5d273352cfe6de45c9f8c9c4d868201d3990`
- gardener-extension-admission-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:5a211c30887a5750129936b4768d35fe831bf9235596d827f7840a2490cc490c`
- gardener-extension-provider-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:187386430585a9f241d89bce87fcc25a7773542a08c444fa81b6f0d0f7689e78`
- gardener-extension-provider-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:f89208ef3ce9f9f71795bb39eee71f9aa988f092a900be029ed8a28e514ec446`
## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.62.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.62.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.62.1`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.62.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.62.1`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.53.3</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.53.3]

## 🐛 Bug Fixes
- `[USER]` The `ingress-gce` pod is now rolled when the shoot's `cloudprovider` secret changes, so GCP LoadBalancer services no longer fail with `Invalid JWT Signature` after a service account key rotation. by @kon-angelo [[#1454](https://github.com/gardener/gardener-extension-provider-gcp/pull/1454)]

## application/spdx+json
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:1bfc6ee8150cb90d606d7bdd6c6e81703d84ebad713290490d348108cd4423ec`
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:9a552248a1d281dee09cfaf75088d947748df0bb2f017220055f777f3e483e6a`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:01a2b7e0a2eb2a6fdfa26768190f5f1cc0829e99c7bdf919daf3f4f5137392e8`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:8f97696e9bb742aeef0376fbc766d32634ce7b4f22f17e398ad3b34c9473fab9`
## application/vnd.cyclonedx+json
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:01efcf648d70cab5c1086aec1f62f843a3241fb3a22cc3672103595e43fd81f6`
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:57b71ca243ce563761fb2ff578279aa2cfbad19a61e50dc6a1ff4aa17ae0d809`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:0d2711a08de1826e887e129780efd2a925a6f96da63467e01a5ed4798eef303b`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:e33f85d7d448ad86071d8a07d5cbab0ecfc0c029d7372b0b92f7bd29413ca462`
## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.53.3`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.53.3`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.53.3`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.53.3`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.53.3`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.57.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.57.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Update image vector for machine-controller-manager-provider-openstack from `v0.27.0 → v0.27.1`. by @aaronfern [[#1384](https://github.com/gardener/gardener-extension-provider-openstack/pull/1384)]

## 🏃 Others
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-driver-nfs: v4.13.2 -> v4.13.4 (singleton)  
    - csi-resizer: v2.2.0 -> v2.2.1 (singleton) by @federated-github-access[bot] [[#1373](https://github.com/gardener/gardener-extension-provider-openstack/pull/1373)]

## application/spdx+json
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:5eb6b601cfe3252f878aeedba107f90414ef8281ca2ce229aea081f7c5ed84e7`
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:75590a6c847ceca746c3b4352bc117b83a14956029965db1ca86f8721d53cb08`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:40243e84118e198a4ec07563dd3632c939802758242b16f72caa60b10e33f7bd`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:458edea4ce9ea4e2b4ff9ee946d958d2f534727ea53572d9d5ea056db7beb929`
## application/vnd.cyclonedx+json
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:53c0288e9b9a269a1c471811eba410decd3118e9f70a1c4c08c5c96bb551721d`
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:6fd3c8d57ba6fc69dcf6ddf3fbbc64e8cfa72d8ce5375ffc3c559bb224a291bf`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:2360411d87a33c7e4686e96e955133d90bdfc58743e20558e3353f011fb6a54b`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:d6e35e557b7e170bab65d62b116aac52bc9298e7d7d2d6935a40cd1d43e00f11`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.57.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.57.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.57.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.57.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.57.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.88.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.88.0]

## 🏃 Others
- `[DEVELOPER]` An issue causing the test execution to fail due to outdated go version in the TestDefinition is now fixed. by @ialidzhikov [[#771](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/771)]

# [github.com/gardener/external-dns-management:v0.47.0]

## 🏃 Others
- `[OPERATOR]` [next-generation] Prevent self-retrigger: finalizer robustness and status-patch elision for `DNSEntry` by @MartinWeindel [[#948](https://github.com/gardener/external-dns-management/pull/948)]
- `[OPERATOR]` [next-generation] Reduce reconciliation load on `DNSEntry` controller by @MartinWeindel [[#943](https://github.com/gardener/external-dns-management/pull/943)]

## application/spdx+json
- gardener-extension-admission-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:e4bf451094e9693e59e2c83dd634c820037fb0192f39153eebf24be9fb4a2f43`
- gardener-extension-admission-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:f511a1c8ffc68af2d294a7397a99c1427c7c52dd017646ebcd772404fb814ccf`
- gardener-extension-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:027b34a2864ba015eb1c221c7d9cc318cbaba26a00a9cba12d85c23f6f4d697b`
- gardener-extension-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:f710deb8cac4a861b1794d3a768bca5f20dca89b7fb70245bcaf06e7d061e2fd`
## application/vnd.cyclonedx+json
- gardener-extension-admission-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:6f524bfb46c5204093012b4157e3bda410d34a0d50864b4473bbba0157dd5176`
- gardener-extension-admission-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:8d81e815e565b22f923cfbede1b4a637c0cbe28755b8237e1103bd2e488f5cd4`
- gardener-extension-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:2f2c95dcaa0c3f913dca7323903a946f63fbbe997e5348cf309913fd9a3ef9f6`
- gardener-extension-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:720f71799220b4fbc7b90469eac7ecbb305c5e99caeb0474bf1536250e9e0676`
## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.88.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.88.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.88.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.88.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.88.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.53.4</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.53.4]

## 🐛 Bug Fixes
- `[OPERATOR]` Added missing extension class filtering to the backupentry controller by @hebelsan [[#1461](https://github.com/gardener/gardener-extension-provider-gcp/pull/1461)]

## application/spdx+json
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:1cfe576ce61ad4874f06e6a1e92d1d812528b1477f31577ac01862577db46d1f`
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:8d684c0312c4b11fe494b830d0ce9eddcabd5608048d7f067433b9f770e5e6cb`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:4a40f920fba15d9bedcc50e1e351a183fbae61c38fc042ed3bcecf2cd719e862`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:69846bf59188a86e6811cd0c8ac013f532df610b0f3fa95553ed18587ca4e8e8`
## application/vnd.cyclonedx+json
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:3112b6a91784b0dd13ecf105ed74311f0d3aea1d99b0cdf5c9eaae152c3a421b`
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:e01b103488326d4d6d3cb3f839a1b6c021d2a70a14cafc04e37523f7734f3ee4`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:776b96cf6726091a85a5b5cbaeeee505fc7612ae33509731423dc7adb23752b3`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:873ff36f2c9369df785019fa2d7ff7c8727cd0294cbb99f413f29bc1b0c55074`
## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.53.4`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.53.4`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.53.4`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.53.4`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.53.4`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.26.0</code></b></summary>

## What's Changed
* 🤖 Update module golang.org/x/tools to v0.43.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/242
* 🤖 Update k8s and gardener packages to v1.137.5 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/243
* 🤖 Update fluxcd (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/244
* 🤖 Update module github.com/fluxcd/pkg/apis/meta to v1.26.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/245
* 🤖 Update k8s and gardener packages to v1.138.0 (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/234
* 🤖 Update module github.com/fluxcd/flux2/v2 to v2.8.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/246
* renovate: automerge more updates by @timebertt in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/249
* 🤖 Update k8s.io/utils digest to 28399d8 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/250
* 🤖 Update k8s and gardener packages to v0.35.3 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/251
* 🤖 Update k8s and gardener packages to v1.138.1 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/252
* 🤖 Update k8s and gardener packages to v1.139.0 (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/253
* 🤖 Update k8s and gardener packages to v1.139.1 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/254
* 🤖 Update fluxcd (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/255
* 🤖 Update module golang.org/x/tools to v0.44.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/256
* 🤖 Update k8s and gardener packages to v1.139.2 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/258
* 🤖 Update k8s and gardener packages to v1.140.1 (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/257
* 🤖 Update k8s and gardener packages to v0.35.4 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/259
* 🤖 Update fluxcd (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/260
* 🤖 Update k8s and gardener packages to v1.140.2 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/261
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.28.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/263
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.28.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/264
* 🤖 Update k8s and gardener packages to v1.140.3 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/266
* 🤖 Update k8s.io/utils digest to ff6756f by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/267
* 🤖 Update k8s and gardener packages to v1.140.4 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/268
* 🤖 Update module golang.org/x/tools to v0.45.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/270
* 🤖 Update k8s and gardener packages to v0.35.5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/272
* 🤖 Update k8s and gardener packages to v1.142.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/262
* 🤖 Update module github.com/fluxcd/pkg/apis/meta to v1.27.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/269
* 🤖 Update module k8s.io/apimachinery to v0.36.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/274
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.29.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/275
* 🤖 Update module github.com/onsi/gomega to v1.41.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/276
* Update docstring when renovate updates flux by @maboehm in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/273
* 🤖 Update fluxcd (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/271
* add CODEOWNERS by @ftl in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/277
* 🤖 Update fluxcd (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/278
* 🤖 Update k8s and gardener packages to v1.142.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/279
* 🤖 Update k8s and gardener packages to v1.142.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/280
* 🤖 Update module github.com/fluxcd/pkg/apis/meta to v1.28.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/282
* 🤖 Update k8s and gardener packages to v1.143.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/281
* 🤖 Update k8s and gardener packages to v1.143.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/283
* 🤖 Update fluxcd to v1.29.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/284
* 🤖 Update k8s and gardener packages to v1.144.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/285
* 🤖 Update k8s and gardener packages to v1.144.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/286
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.30.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/287
* 🤖 Update module golang.org/x/tools to v0.46.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/288
* 🤖 Update k8s and gardener packages (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/289
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.31.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/291
* 🤖 Update module github.com/onsi/gomega to v1.42.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/292
* 🤖 Update fluxcd to v1.30.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/290
* 🤖 Update k8s.io/utils digest to a95e086 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/294
* 🤖 Update k8s and gardener packages to v1.144.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/295
* 🤖 Update actions/checkout action to v7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/296
* 🤖 Update k8s and gardener packages to v1.145.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/297
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.32.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/298

## New Contributors
* @ftl made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/277

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.25.0...v0.26.0

</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.14.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-rsyslog-relp:v0.14.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#405](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/405)]

## 🏃 Others
- `[OPERATOR]` `rsyslog-relp-configuration-cleaner` DaemonSet now sets `revisionHistoryLimit` to 2 to comply with the gardener component checklist. by @alliasgher [[#406](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/406)]

## application/spdx+json
- gardener-extension-shoot-rsyslog-relp-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:83fc351804cf40f9d91443bc979d4cda8ac0601bc94eaa5d4d6f43e81284cdb9`
- gardener-extension-shoot-rsyslog-relp-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:f59572659806a77ae078f879dbd016be6743f67a3546a14e9e0316e2b9ff5af1`
- gardener-extension-shoot-rsyslog-relp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:8b1f927b27d5ac91e621e4de9582e7ce72ac449d3247ef21a1a5f7e09fb24b09`
- gardener-extension-shoot-rsyslog-relp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:8fe1d77852d0762daf3cb607a5837557c18abaa7004f97fcb87c5c6aa3ed3ca5`
## application/vnd.cyclonedx+json
- gardener-extension-shoot-rsyslog-relp-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:1dd7b4a81cce6f768b0451bdf6a58d26eb5b050a586754bd60c3b7c0e1c34a20`
- gardener-extension-shoot-rsyslog-relp-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:842c8309af6b3cb3a8e4b505c2251dd62b91112c483f1611ab98db630e3b6dc8`
- gardener-extension-shoot-rsyslog-relp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:6b4294f109f9028b88ec2cc6feaaa8737ab0cc91334cc83b94c739a57a669006`
- gardener-extension-shoot-rsyslog-relp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:c01af58c4da11cc198340381741d370556c376694ab0311e8f4966a91ac9fcba`
## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.14.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.14.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.14.0`
## Container (OCI) Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.14.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.14.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.27.0</code></b></summary>

## What's Changed
This release officially supports [fluxcd >=2.9](https://fluxcd.io/blog/2026/06/flux-v2.9.0/)

* 🤖 Update module github.com/onsi/gomega to v1.42.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/299
* 🤖 Update k8s.io/utils digest to be93311 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/301
* 🤖 Update dependency ko-build/ko to v0.19.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/302
* 🤖 Update module golang.org/x/tools to v0.47.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/300
* 🤖 Update dependency ko-build/ko to v0.19.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/303
* 🤖 Update module github.com/fluxcd/pkg/apis/meta to v1.30.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/304
* 🤖 Update k8s and gardener packages to v1.145.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/305
* 🤖 Update k8s.io/utils digest to cf1189d by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/307
* 🤖 Update k8s and gardener packages to v1.145.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/308
* 🤖 Update k8s and gardener packages to v1.145.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/310
* 🤖 Update fluxcd (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/293
* feat: Add update-flux-manifests step to sync flux manifests in test fixture (+ initial update) by @jamand in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/311
* 🤖 Update module golang.org/x/tools to v0.48.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/309
* chore: Update go version to 1.26.5 (ko needs >=1.26.3) by @jamand in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/312

## New Contributors
* @jamand made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/311

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.26.0...v0.27.0

</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.42.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.42.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260706.0. by @federated-github-access[bot] [[#426](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/426)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:38840d602e68622aad14c893b20486375f5ed3d77d3c9976b4b3352dc148f0b9`
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:9edc62c6dca1c4bafdf7e83ad426d7d32a00ca8348e49d0ed4dee8cf2466189c`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:89f098047a1e081200f9651df7adc836ae6d87694810da31188b8698527f2381`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:ed354dee33094342f21881953fa9c9d1ecd2bbcc6222c2c4a3eb708c38a56467`
## application/vnd.cyclonedx+json
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:154a74ff1cadc2be0b3b91bd0d13be7813f001db239708734eb9a74df38a2660`
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:77a0bc781006218b3d45ac67323b0c5dc3d4a79cffa30ec938ba09483e5c2ac7`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:609bbd793ed3e282f9df7bf46c55055e5a29f8469e18f13e50b85439a20214b9`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:c02db8381d175fadd75329941e5aa6685900f3fd3da64019ae3a4646af500311`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.42.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.42.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.42.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.48.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.48.0]

## 🏃 Others
- `[OPERATOR]` Improve container build: cache mounts, multi-arch, digest pinning by @MartinWeindel [[#954](https://github.com/gardener/external-dns-management/pull/954)]
- `[OPERATOR]` [next-generation] Reduce periodic reconciliation frequency and clean up source controller logging by @MartinWeindel [[#960](https://github.com/gardener/external-dns-management/pull/960)]
- `[OPERATOR]` Allow to override `livenessProbe.initialDelaySeconds` for dns-controller-manager deployment in Helm charts. by @MartinWeindel [[#967](https://github.com/gardener/external-dns-management/pull/967)]

## application/spdx+json
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:550c35117e37b96d9be872544284a10087173ed584197993e9e34e065ca4ed0f`
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:efdf5491be1d694502af509add5dfe8082e9fcc521adccd2d3adc8993aa9ad11`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:9715b50db1542be9b4acb8f38a95b7012b59031b8e04699eebe98a3902845959`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:bb7dfff1cf2cd9b652559df0c1e616dc9c5f8288bdff29d6c43f51aa846f1aff`
## application/vnd.cyclonedx+json
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:66b9ba51d2afc45ffdaa33fd2ae67adb2660a1a538dc2cb25adcab52f0b87083`
- dns-controller-manager-next-generation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:b6d44554da437bc5efa814e241ed965bc349d0158553a7f04285b374a56e44c9`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:8a1d0dd501b952670f8afe0c0f2c073729b106253c661ffe142a79eedf210acb`
- dns-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:de662adc7dff6de359d0655d17725a808dd5907288260d4c87d7642921464fc0`
## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.48.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.48.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.48.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.89.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.48.0]

## 🏃 Others
- `[OPERATOR]` Improve container build: cache mounts, multi-arch, digest pinning by @MartinWeindel [[#954](https://github.com/gardener/external-dns-management/pull/954)]
- `[OPERATOR]` [next-generation] Reduce periodic reconciliation frequency and clean up source controller logging by @MartinWeindel [[#960](https://github.com/gardener/external-dns-management/pull/960)]
- `[OPERATOR]` Allow to override `livenessProbe.initialDelaySeconds` for dns-controller-manager deployment in Helm charts. by @MartinWeindel [[#967](https://github.com/gardener/external-dns-management/pull/967)]

## application/spdx+json
- gardener-extension-admission-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:0651a9e8ef896fe66bec4376fb3840b708a0c874a15eeb59bf9db3f08a22ba76`
- gardener-extension-admission-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:232a22affb222a34cc321d76df2bdba10e08989e252d8a466381a06484ee9d3e`
- gardener-extension-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:0865fc30914a573eeef6c1419ac20755778c2be4d72646c581bdc521e0d391cc`
- gardener-extension-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:bd9f6e62e1e699152a36a0a461c32f5f0d9316eddf18b27df25ed9e037978402`
## application/vnd.cyclonedx+json
- gardener-extension-admission-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:9899e3ba89665fe8b6386dbe8ecc218e396ae7cd6cb28f159f566ab31e14c50a`
- gardener-extension-admission-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:d648d7138fa716468190434360e3e28e9be5f6138b20363a10fe75fca8305987`
- gardener-extension-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:4ede6a68a3fae7f9cf9cbc20360f555d3017244395766234dde303dd907dd6ae`
- gardener-extension-shoot-dns-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:e4de4b379d98718aa1467b5bb54ae7fd66a92730ffa579973631d65ec28498c3`
## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.89.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.89.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.89.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.89.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.89.0`


</details>

<details>
<summary><b>Update cert-management to <code>0.26.0</code></b></summary>

# [github.com/gardener/cert-management:v0.26.0]

## 🏃 Others
- `[OPERATOR]` Improve container build: cache mounts, multi-arch, digest pinning by @MartinWeindel [[#763](https://github.com/gardener/cert-management/pull/763)]

## application/spdx+json
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:6d988eed3f7f663f763611c60e8c1cdfa7abc9a5e460f838f03005f903e05748`
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:c80218292dc86de456b91e8d63d240098a907a2cd5790b8da61696a514121a7a`
## application/vnd.cyclonedx+json
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:1c6811f1d792f03194fb6701a6df465286ca3ffa9f72541fd79945299ad9cc8e`
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:8e67a695fc16359a66b837d6a5c075ebdd02fa0721dc4f530d748744bdecc03f`
## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.26.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.26.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.63.0</code></b></summary>

# [github.com/gardener/cert-management:v0.25.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The package `github.com/gardener/cert-manament/pkg/apis` has been made a Go submodule. by @MartinWeindel [[#754](https://github.com/gardener/cert-management/pull/754)]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#744](https://github.com/gardener/cert-management/pull/744)]

# [github.com/gardener/cert-management:v0.24.1]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#745](https://github.com/gardener/cert-management/pull/745)]

# [github.com/gardener/cert-management:v0.26.0]

## 🏃 Others
- `[OPERATOR]` Improve container build: cache mounts, multi-arch, digest pinning by @MartinWeindel [[#763](https://github.com/gardener/cert-management/pull/763)]

## application/spdx+json
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:e5576f533d9a1136b3416008c7e295894996bd8993cf02a297d8da4b2d204298`
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:ee0aab57504718c2125737d63a55d1029f53020759019447e04a34d169fecb9a`
## application/vnd.cyclonedx+json
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:8bc2445745bec4db29f8d9c3ddb0df546af3fef6da7abbd50796ba3c558ac8f0`
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:a30a3fa18f4ba7eab638d46cc6175eed0bccff27cc3e704a3b89485c218dafe4`
## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.63.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.63.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.84.4</code></b></summary>

# [github.com/gardener/dashboard:1.84.4]

## 🐛 Bug Fixes
- `[USER]` The Gardener dashboard now sends ETag headers for SPA fallback responses such as /login. This improves browser cache validation and fixes an issue where rolling back to a previous dashboard version could make browsers reuse stale HTML that referenced assets no longer present on the server, causing 404 errors and failed page loads by @grolu [[#3076](https://github.com/gardener/dashboard/pull/3076)]
- `[USER]` Fix status sort order to include the 'Error' state by @petersutter [[#3065](https://github.com/gardener/dashboard/pull/3065)]
- `[USER]` Prevent a TypeError in the HTTP/2 session pool heartbeat when the underlying socket is no longer available. by @petersutter [[#3011](https://github.com/gardener/dashboard/pull/3011)]

## application/spdx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:54e584ddc2aa7b7b1d9206bcc5aaf70530269c13f245bee33e39b4ce9fae46e0`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:c74370b37e4ffda986f04cdc513bb68408439d40254fd09daaec77558d0891db`
## application/vnd.cyclonedx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:1983c6eb7b43cb2f63741fbe1fb496497edce423a2c8e31654e0a2df1d38245f`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:9812cacf7af1106acf03b7122ce76e6b75ad3966ddcb3f23f527bd1ec088ccbc`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.4`


</details>

<details>
<summary><b>Update dashboard to <code>1.84.4</code></b></summary>

# [github.com/gardener/dashboard:1.84.4]

## 🐛 Bug Fixes
- `[USER]` The Gardener dashboard now sends ETag headers for SPA fallback responses such as /login. This improves browser cache validation and fixes an issue where rolling back to a previous dashboard version could make browsers reuse stale HTML that referenced assets no longer present on the server, causing 404 errors and failed page loads by @grolu [[#3076](https://github.com/gardener/dashboard/pull/3076)]
- `[USER]` Fix status sort order to include the 'Error' state by @petersutter [[#3065](https://github.com/gardener/dashboard/pull/3065)]
- `[USER]` Prevent a TypeError in the HTTP/2 session pool heartbeat when the underlying socket is no longer available. by @petersutter [[#3011](https://github.com/gardener/dashboard/pull/3011)]

## application/spdx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:54e584ddc2aa7b7b1d9206bcc5aaf70530269c13f245bee33e39b4ce9fae46e0`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:c74370b37e4ffda986f04cdc513bb68408439d40254fd09daaec77558d0891db`
## application/vnd.cyclonedx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:1983c6eb7b43cb2f63741fbe1fb496497edce423a2c8e31654e0a2df1d38245f`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:9812cacf7af1106acf03b7122ce76e6b75ad3966ddcb3f23f527bd1ec088ccbc`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.4`


</details>

<details>
<summary><b>Update os-coreos to <code>1.31.0</code></b></summary>

## What's Changed
* Add `make fmt` as alias for `make format` by @robinschneider in https://github.com/gardener/gardener-extension-os-coreos/pull/293
* Fixed broken links - 2026.07 by @n-boshnakov in https://github.com/gardener/gardener-extension-os-coreos/pull/295
* Bump golang from 1.26.4 to 1.26.5 by @dependabot[bot] in https://github.com/gardener/gardener-extension-os-coreos/pull/296
* Mask all update related services by @robinschneider in https://github.com/gardener/gardener-extension-os-coreos/pull/297


**Full Changelog**: https://github.com/gardener/gardener-extension-os-coreos/compare/v1.30.0...v1.31.0

</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.43.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.43.0]

## 🏃 Others
- `[OPERATOR]` Add support for testing gVisor installation images from an internal repository by @MartinWeindel [[#428](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/428)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:acb50a8be7246b8a7bc81d6c34f29d54f1a6ee230281624a484d4ff6fafc52fb`
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:db215f166b33e4715bb630f835430b8c7377ddf5d9d7d9d2be89d4b6ed246b91`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:3664a0fa666577caa063b85bccf838038c4d9e1aa24d025cfa75405573231487`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:e2513cdd8407e24d795a0cf84204d4a71656e46670936c0a36512ec5010897c6`
## application/vnd.cyclonedx+json
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:2349fa6a81b96ec0ad5494f0d390fc912584980cae5dc54c6cf134858dc77114`
- gardener-extension-runtime-gvisor-installation-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:ead3575054681e2e9ae7c5fcdbb51708034addf569205579c36f618f6735b2ea`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:591b3c8f8f4dedeb5abe02aae7052e69278ad071497b2252beb178d597a68a03`
- gardener-extension-runtime-gvisor-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:e3c698dadc28a05759e7fa96e5951be9256850d753ba1d8032b8e30817dcfa57`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.43.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.43.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.43.0`


</details>

<details>
<summary><b>Update registry-cache to <code>0.24.0</code></b></summary>

# [github.com/gardener/gardener-extension-registry-cache:v0.24.0]

## 🐛 Bug Fixes
- `[USER]` Fix malformed registry cache endpoint URLs when the registry cache Service in the Shoot contains an IPv6 clusterIP. IPv6 cluster IPs are now correctly wrapped in square brackets (e.g. `https://[2a05:d018:197f:7e06::1]:5000`) by @I501307 [[#591](https://github.com/gardener/gardener-extension-registry-cache/pull/591)]

## 🏃 Others
- `[OPERATOR]` Monitoring resources (Grafana dashboard, PrometheusRule, ScrapeConfig) are no longer deployed for the registry cache extension for Shoots with `.spec.purpose=testing`. by @DobromirNPeev [[#590](https://github.com/gardener/gardener-extension-registry-cache/pull/590)]
- `[OPERATOR]` The update mode of the VerticalPodAutoscaler resources deployed by the registry-cache extension is now explicitly set to `InPlaceOrRecreate`, reflecting the actual runtime behavior after the unconditional enablement of the `VPAInPlaceUpdates` feature gate. by @DobromirNPeev [[#606](https://github.com/gardener/gardener-extension-registry-cache/pull/606)]

## application/spdx+json
- gardener-extension-registry-cache-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:65a3333e16422c608e06bbbab0cd1e48e58e90910261c259c2531b0ec83505a4`
- gardener-extension-registry-cache-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:d2446ec9c96b3b170eb772751c95319156f909682a3a3a96c22ff720ebeaabd1`
- gardener-extension-registry-cache-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:870ffdf688d181dfea4fc92292994672cbc03b38ecd7b074b5af716c0fe02cf3`
- gardener-extension-registry-cache-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:92dbfa2a76436db98dc3f9acc35dc412671b37403d3950b75615782933ee3e77`
## application/vnd.cyclonedx+json
- gardener-extension-registry-cache-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:a55bb4767712ba3af189059251d5e3ae7081c0ea3c5c21c5531d62c6d16b9b8b`
- gardener-extension-registry-cache-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:c619ea61f4737ab74780d412ed146f16721b8a6290489232b80ba90c13fe6105`
- gardener-extension-registry-cache-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:2d665dd71231d4e8387c9e6713be54016e19b8e064f252df079ccd2f0e38b7db`
- gardener-extension-registry-cache-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:771d086c2f44a3784ded55f82d3a9dd9e7b79198d370ae0a3e6d785e4191f9c4`
## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.24.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.24.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.24.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.24.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.24.0`


</details>

<details>
<summary><b>Update os-coreos to <code>1.32.0</code></b></summary>



## application/spdx+json
- gardener-extension-os-coreos-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos@sha256:ec08871dcadab4615704eceeec2846aa45ee75ff9bfeb692306da3862ae3e4e4`
## application/vnd.cyclonedx+json
- gardener-extension-os-coreos-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos@sha256:f9bc570ced6612b4dd984b8e9bced98d2822570114b702de077418f0d598b80b`
## Helm Charts
- os-coreos: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-coreos:v1.32.0`
## Container (OCI) Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.32.0`


</details>
