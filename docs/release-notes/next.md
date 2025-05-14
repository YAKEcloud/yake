---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-cert-service to <code>1.50.1</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🐛 Bug Fixes

- `[USER]` Fix lookup of referenced secret for custom issuer in shoot manifest with `privateKeySecretName` specified. by `Martin Weindel <martin.weindel@sap.com>` [$282b42a2fc03b79fa1161fd3ff5a31894f72a801]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.50.1`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.50.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.118.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that prevented the cache Prometheus in a Gardener managed seed from scraping the cadvisor and kubelet metrics of the seed nodes, and hence the shoot control plane Plutono dashboards could not show e.g. the CPU usage of the control plane components. (part 2) by @istvanballok [#12049]
- `[OPERATOR]` An issue preventing vpa-updater to patch events when recording eviction event on VerticalPodAutoscaler resource is now fixed. by @ialidzhikov [#12035]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.0` to `1.80.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.1) by @gardener-ci-robot [#12042]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.118.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that prevented the cache Prometheus in a Gardener managed seed from scraping the cadvisor and kubelet metrics of the seed nodes, and hence the shoot control plane Plutono dashboards could not show e.g. the CPU usage of the control plane components. (part 2) by @istvanballok [#12049]
- `[OPERATOR]` An issue preventing vpa-updater to patch events when recording eviction event on VerticalPodAutoscaler resource is now fixed. by @ialidzhikov [#12035]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.0` to `1.80.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.1) by @gardener-ci-robot [#12042]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.118.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that prevented the cache Prometheus in a Gardener managed seed from scraping the cadvisor and kubelet metrics of the seed nodes, and hence the shoot control plane Plutono dashboards could not show e.g. the CPU usage of the control plane components. (part 2) by @istvanballok [#12049]
- `[OPERATOR]` An issue preventing vpa-updater to patch events when recording eviction event on VerticalPodAutoscaler resource is now fixed. by @ialidzhikov [#12035]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.0` to `1.80.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.1) by @gardener-ci-robot [#12042]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.1`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.27.0</code></b></summary>

# [gardener/gardener-extension-shoot-networking-problemdetector]

## ✨ New Features

- `[USER]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#209]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.106.0 to 1.107.0. by @dependabot[bot] [#192]
- `[OPERATOR]` Add `patch` verb for the `gardener-extension-heartbeat` resource in the RBAC rules by @MartinWeindel [#234]
- `[OPERATOR]` Dashboard shows now additional IPv6 metrics for dual-stack clusters.  by @axel7born [#240]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#228]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.109.0 to 1.110.0. by @dependabot[bot] [#200]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#230]
- `[OPERATOR]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#232]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.107.0 to 1.108.0. by @dependabot[bot] [#196]
- `[OPERATOR]` `extension-shoot-netwroking-problemdetector` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#190]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.108.0 to 1.109.0. by @dependabot[bot] [#198]
- `[OPERATOR]` The health check controller was previously checking the health of ManagedResources `extension-shoot-networking-problemdetector-controller-shoot` and `extension-shoot-networking-problemdetector-agent-shoot`. This was redundant as gardenlet already checks and reports the health of ManagedResources with class `shoot` - see https://github.com/gardener/gardener/pull/7462. The health check controller of the extension is adapted to check the health of ManagedResource `extension-shoot-networking-problemdetector-controller-seed`. by @RadaBDimitrova [#214]
- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [#193]

## Helm Charts
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.27.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.27.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.52.3</code></b></summary>

# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` Machine Controller Manager now supports a new machine deployment strategy called InPlaceUpdate. by @acumino [gardener/machine-controller-manager#973]
## 🐛 Bug Fixes

- `[OPERATOR]` A new termination queue to handle machines scheduled for deletion introduced to separate creation requests from deletion by @takoverflow [gardener/machine-controller-manager#964]
- `[OPERATOR]` machine-controller-manager version, and build information are printed at startup. by @renormalize [gardener/machine-controller-manager#985]
## 🏃 Others

- `[OPERATOR]` Integration test framework enhancements for resource and process cleanup by @takoverflow [gardener/machine-controller-manager#968]
- `[OPERATOR]` Resource exhaustion on machine creation results in a longer retry period by @takoverflow [gardener/machine-controller-manager#981]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.52.3`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.52.3`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.52.3`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.52.3`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.52.3`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.43.3</code></b></summary>

# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` Machine Controller Manager now supports a new machine deployment strategy called InPlaceUpdate. by @acumino [gardener/machine-controller-manager#973]
## 🐛 Bug Fixes

- `[OPERATOR]` A new termination queue to handle machines scheduled for deletion introduced to separate creation requests from deletion by @takoverflow [gardener/machine-controller-manager#964]
- `[OPERATOR]` machine-controller-manager version, and build information are printed at startup. by @renormalize [gardener/machine-controller-manager#985]
## 🏃 Others

- `[OPERATOR]` Integration test framework enhancements for resource and process cleanup by @takoverflow [gardener/machine-controller-manager#968]
- `[OPERATOR]` Resource exhaustion on machine creation results in a longer retry period by @takoverflow [gardener/machine-controller-manager#981]
# [gardener/machine-controller-manager-provider-gcp]

## 📰 Noteworthy

- `[DEVELOPER]` Golang version updated to `1.24.1` by @aaronfern [gardener/machine-controller-manager-provider-gcp#145]
- `[OPERATOR]` The `gardener/machine-controller-manager` dependency has been updated to `v0.57.1`. [Release Notes](https://github.com/gardener/machine-controller-manager/releases/tag/v0.57.1) by @aaronfern [gardener/machine-controller-manager-provider-gcp#144]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.43.3`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.43.3`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.43.3`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.43.3`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.43.3`


</details>

<details>
<summary><b>Update provider-aws to <code>1.61.2</code></b></summary>

# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` Machine Controller Manager now supports a new machine deployment strategy called InPlaceUpdate. by @acumino [gardener/machine-controller-manager#973]
## 🐛 Bug Fixes

- `[OPERATOR]` machine-controller-manager version, and build information are printed at startup. by @renormalize [gardener/machine-controller-manager#985]
- `[OPERATOR]` A new termination queue to handle machines scheduled for deletion introduced to separate creation requests from deletion by @takoverflow [gardener/machine-controller-manager#964]
## 🏃 Others

- `[OPERATOR]` Resource exhaustion on machine creation results in a longer retry period by @takoverflow [gardener/machine-controller-manager#981]
- `[OPERATOR]` Integration test framework enhancements for resource and process cleanup by @takoverflow [gardener/machine-controller-manager#968]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.61.2`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.61.2`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.61.2`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.61.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.61.2`


</details>
