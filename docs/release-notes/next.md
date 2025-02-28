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
