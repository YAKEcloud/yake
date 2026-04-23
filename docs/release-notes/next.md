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
