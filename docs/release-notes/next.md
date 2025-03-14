---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-aws to <code>1.60.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` Add specific object selectors for shoot webhooks to avoid high load in large landscapes  by @kon-angelo [#1235]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.60.1`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.60.1`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.60.1`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.60.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.60.1`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.16.0</code></b></summary>

## What's Changed
* 🤖 Update module golang.org/x/tools to v0.30.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/134
* 🤖 Update module github.com/spf13/cobra to v1.9.1 - autoclosed by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/137
* 🤖 Update module github.com/gardener/gardener to v1.113.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/133


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.15.0...v0.16.0

</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.35.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` Adds SAST scanning using `gosec`. by @rickardsjp [#120]

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.35.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.35.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` Adds SAST scanning using `gosec`. by @rickardsjp [#120]

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.35.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.36.0</code></b></summary>

no release notes available

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.36.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.36.0</code></b></summary>

no release notes available

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.36.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.29.0</code></b></summary>

# [gardener/gardener-extension-os-ubuntu]

## ⚠️ Breaking Changes

- `[OPERATOR]` The option `values.disableAutoUpgrades` was moved under the config directive and therefore must be configured like this now `values.config.disableUnattendedUpgrades` by @nschad [#178]
## 🐛 Bug Fixes

- `[OPERATOR]` The provision OSC script does not run anymore when the node is rebooting.  by @MrBatschner [#184]
## 🏃 Others

- `[OPERATOR]` Allows the operator to deploy nodes with the timesyncing service `ntp` to be enabled and configured by default by @nschad [#178]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.29.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.29.0`


</details>

<details>
<summary><b>Update networking-calico to <code>1.47.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-admission-calico admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#572]
## 🏃 Others

- `[OPERATOR]` Fix permissions of calico-kube-controllers by @DockToFuture [#577]
- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#576]
- `[OPERATOR]` Prepare for deployment of admission controller by gardener-operator by @MartinWeindel [#572]
- `[OPERATOR]` Update to calico-v3.29.2 by @axel7born [#599]
- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#592]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.47.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.47.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.47.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.47.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.47.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.40.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## ⚠️ Breaking Changes

- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-admission-cilium admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#483]
## 🏃 Others

- `[OPERATOR]` Update to cilium `v1.16.6`. by @DockToFuture [#484]
- `[OPERATOR]` Use BPF masquerading and therefore BPF host routing in Cilium when using direct routing. by @hown3d [#350]
- `[OPERATOR]` Update cilium to v1.17.1 by @axel7born [#510]
- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#487]
- `[OPERATOR]` Prepare for deployment of admission controller by gardener-operator by @MartinWeindel [#483]
- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#506]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.40.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.40.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.40.0`
## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.40.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.40.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.17.0</code></b></summary>

## What's Changed
* Add `shoot-info` `ConfigMap` with shoot information in flux namespace by @crigertg in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/138

## New Contributors
* @crigertg made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/138

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.16.0...v0.17.0

</details>

<details>
<summary><b>Update provider-aws to <code>1.60.2</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused deployment issues with the `gardener.cloud-fast` storage class when the extension was deployed by `gardener-operator` in the garden runtime cluster. The deployment of this `StorageClass` object is now only done for AWS seeds. by @timuthy [#1239]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.60.2`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.60.2`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.60.2`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.60.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.60.2`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.17.1</code></b></summary>

## What's Changed
* Fix `shoot-info` `ConfigMap` creation when bootstrapping flux by @nschad in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/139


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.17.0...v0.17.1

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.61.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bump dns-controller-manager versions from `v0.23.1` to `v0.23.2` and from `v0.22.2` to `v0.22.3`. by @MartinWeindel [#448]
- `[OPERATOR]` `extension-shoot-dns-service` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#393]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.61.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.61.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.61.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.61.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.61.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.113.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused multi-node etcd clusters to not be properly restored when performing control plane migration for hibernated HA `Shoot`s. by @plkokanov [#11596]
- `[OPERATOR]` Fixed gardenlet crashing when trying to force-delete a workerless shoot by @Wieneo [#11512]
- `[USER]` A bug has been fixed which caused the shoot care controller to falsely remove shoot conditions and constraints from the shoot status by @Wieneo [#11574]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.113.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused multi-node etcd clusters to not be properly restored when performing control plane migration for hibernated HA `Shoot`s. by @plkokanov [#11596]
- `[OPERATOR]` Fixed gardenlet crashing when trying to force-delete a workerless shoot by @Wieneo [#11512]
- `[USER]` A bug has been fixed which caused the shoot care controller to falsely remove shoot conditions and constraints from the shoot status by @Wieneo [#11574]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.113.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused multi-node etcd clusters to not be properly restored when performing control plane migration for hibernated HA `Shoot`s. by @plkokanov [#11596]
- `[OPERATOR]` Fixed gardenlet crashing when trying to force-delete a workerless shoot by @Wieneo [#11512]
- `[USER]` A bug has been fixed which caused the shoot care controller to falsely remove shoot conditions and constraints from the shoot status by @Wieneo [#11574]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.1`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.40.1</code></b></summary>

no release notes available

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.40.1`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.40.1`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.40.1`
## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.40.1`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.40.1`


</details>

<details>
<summary><b>Update provider-hcloud to <code>0.6.33</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.33

**Full Changelog**: https://github.com/23technologies/gardener-extension-provider-hcloud/compare/v0.6.32...v0.6.33

</details>

<details>
<summary><b>Update garden-kube-apiserver to <code>5.1.1</code></b></summary>



</details>

<details>
<summary><b>Update garden-kube-apiserver to <code>5.2.0</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/garden-kube-apiserver/compare/v5.1.1...v5.2.0

</details>
