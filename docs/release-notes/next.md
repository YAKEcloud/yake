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

<details>
<summary><b>Update external-dns-management to <code>0.24.0</code></b></summary>

# [gardener/external-dns-management]

## 🏃 Others

- `[OPERATOR]` `DNSOwner` resources are now completely ignored by @MartinWeindel [#446]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.24.0`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.24.0`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.9.0</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## ⚠️ Breaking Changes

- `[OPERATOR]` The type of the `imageVectorOverwrite` value is changed from string to object. by @ialidzhikov [#260]
## 🏃 Others

- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#264]
- `[OPERATOR]` The RBAC is now reduced to only the required resources and verbs. by @plkokanov [#266]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.9.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.9.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.9.0`
## Container (OCI) Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.9.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.9.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.61.1</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug was fixed which caused `BackupBucket`s to fail in reconciliation when the referenced secret did not contain a `credentialsFile` field. by @ialidzhikov [#789]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.61.1`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.61.1`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.61.1`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.61.1`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.61.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.80.2</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Lazy rendering was not functioning correctly in some scenarios, leading to performance issues with large cluster lists by @grolu [#2442]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.80.2`


</details>

<details>
<summary><b>Update dashboard to <code>1.80.2</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Lazy rendering was not functioning correctly in some scenarios, leading to performance issues with large cluster lists by @grolu [#2442]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.80.2`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.26</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.25...0.7.26

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.118.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug preventing the `system:serviceaccount:kube-system:gardener-internal` service account, used by `gardener-operator`, to label restricted resources was fixed. by @dimityrmirchev [#12063]
## 🏃 Others

- `[OPERATOR]` Annotations and labels are now ignored when creating referenced resources in the shoot control plane namespaces in seed clusters. by @rfranzke [#12064]
- `[OPERATOR]` Set minAllowed CPU to `150m` for prometheus-shoot to avoid frequent evictions by @voelzmo [#12069]
- `[OPERATOR]` A new check ensures that only owners and project members with a UAM role are allowed to modify the project owner. by @timuthy [#12082]
- `[OPERATOR]` It is now ensured that extension admission webhooks have validated `WorkloadIdentity`s/`Secret`s referenced in `Shoot`s. by @rfranzke [#12075]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.1` to `1.80.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.2) by @gardener-ci-robot [#12120]
- `[DEVELOPER]` The `admission-local` deployment was fixed to work with KinD based test setup. by @timuthy [#12106]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.118.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug preventing the `system:serviceaccount:kube-system:gardener-internal` service account, used by `gardener-operator`, to label restricted resources was fixed. by @dimityrmirchev [#12063]
## 🏃 Others

- `[OPERATOR]` Annotations and labels are now ignored when creating referenced resources in the shoot control plane namespaces in seed clusters. by @rfranzke [#12064]
- `[OPERATOR]` Set minAllowed CPU to `150m` for prometheus-shoot to avoid frequent evictions by @voelzmo [#12069]
- `[OPERATOR]` A new check ensures that only owners and project members with a UAM role are allowed to modify the project owner. by @timuthy [#12082]
- `[OPERATOR]` It is now ensured that extension admission webhooks have validated `WorkloadIdentity`s/`Secret`s referenced in `Shoot`s. by @rfranzke [#12075]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.1` to `1.80.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.2) by @gardener-ci-robot [#12120]
- `[DEVELOPER]` The `admission-local` deployment was fixed to work with KinD based test setup. by @timuthy [#12106]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.118.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug preventing the `system:serviceaccount:kube-system:gardener-internal` service account, used by `gardener-operator`, to label restricted resources was fixed. by @dimityrmirchev [#12063]
## 🏃 Others

- `[OPERATOR]` Annotations and labels are now ignored when creating referenced resources in the shoot control plane namespaces in seed clusters. by @rfranzke [#12064]
- `[OPERATOR]` Set minAllowed CPU to `150m` for prometheus-shoot to avoid frequent evictions by @voelzmo [#12069]
- `[OPERATOR]` A new check ensures that only owners and project members with a UAM role are allowed to modify the project owner. by @timuthy [#12082]
- `[OPERATOR]` It is now ensured that extension admission webhooks have validated `WorkloadIdentity`s/`Secret`s referenced in `Shoot`s. by @rfranzke [#12075]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.1` to `1.80.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.2) by @gardener-ci-robot [#12120]
- `[DEVELOPER]` The `admission-local` deployment was fixed to work with KinD based test setup. by @timuthy [#12106]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.2`


</details>

<details>
<summary><b>Update garden-kube-apiserver to <code>5.7.0</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/garden-kube-apiserver/compare/v5.6.2...v5.7.0

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.119.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The already deprecated `autoscaling.k8s.io/v1beta2` API version is no longer served. Before upgrading to this version of Gardener, make sure that all components use the `autoscaling.k8s.io/v1` API version for managing VerticalPodAutoscaler resources. by @ialidzhikov [#11840]
- `[OPERATOR]` The support for the already deprecated `shoot.gardener.cloud/managed-seed-api-server` annotation is now removed. Instead, consider enabling high availability for the ManagedSeed's Shoot control plane. by @ialidzhikov [#11838]
- `[USER]` The already deprecated `autoscaling.k8s.io/v1beta2` API version is no longer served. Instead, use the `autoscaling.k8s.io/v1` API version for managing VerticalPodAutoscaler resources. by @ialidzhikov [#11840]
## 📰 Noteworthy

- `[USER]` The `spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` field in the `Shoot` API is deprecated and will be removed in a future release. Before removal, it will be forbidden to set the field when using a future Kubernetes version that graduates the feature gate `AnonymousAuthConfigurableEndpoints`. by @marc1404 [#11984]
- `[OPERATOR]` The `RemoveAPIServerProxyLegacyPort` feature gate has been promoted to beta and is now turned on by default. by @Wieneo [#11902]
## ✨ New Features

- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDashboard.ingress.enabled` can now be used to control whether the `gardener-operator` should deploy a `Ingress` resource for the dashboard. by @Wieneo [#12002]
- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDashboard.oidcConfig.certificateAuthoritySecretRef` can now be used to specify a secret containing a custom CA certificate for talking to the OIDC endpoint. The certificate must be stored under the `ca.crt` key. by @Wieneo [#11967]
- `[OPERATOR]` Gardener supports gardener-node-agent images built by [ko](https://github.com/ko-build/ko). by @timebertt [#12021]
- `[OPERATOR]` It is now possible forcing `gardener-operator` to re-deploy `gardenlet`s by annotating the responsible `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource with `gardener.cloud/operation=force-redeploy`. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_via_operator.md#forceful-re-deployment). by @rfranzke [#11972]
## 🐛 Bug Fixes

- `[OPERATOR]` gardenlet's shoot-care controller : An issue causing gardenlet to report a misleading reason (`NodesScalingDown`) during rolling update of Shoot Nodes is now fixed. by @RadaBDimitrova [#11869]
- `[DEVELOPER]` Fix extension webhook registration for autonomous shoot clusters. by @ScheererJ [#12040]
## 🏃 Others

- `[OPERATOR]` The utilization of the VPN containers running in the seed is now improved by adapting their initial/static requests and by changing the corresponding VPA configuration:  
  - autoscaling is disabled for the `vpn-seed-server` and `openvpn-exporter` containers  
  - initial/static resource requests are reduced  
  - limits are removed  
  - `minAllowed` for the `envoy-proxy` container is removed by @axel7born [#12023]
- `[OPERATOR]` Remove sum for VPA Pod metrics in 'recommendations' dashboard by @voelzmo [#12057]
- `[OPERATOR]` Spreading Istio ingress-gateway pods across hosts is enforced only for zonal Istio deployments now. by @oliver-goetz [#12007]
- `[OPERATOR]` `kube-proxy` no longer fails its readiness probe in case the node is about to be deleted by `cluster-autoscaler`. by @ScheererJ [#12015]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.25.2` to `1.25.3`.   
  - `gcr.io/istio-release/proxyv2` from `1.25.2` to `1.25.3`.   
  - `istio.io/api` from `v1.25.2` to `v1.25.3`.  by @gardener-ci-robot [#12074]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.0` to `v1.34.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.1) by @gardener-ci-robot [#12024]
## 📖 Documentation

- `[USER]` Dual-Stack Migration documentation now clearly states the precondition of overlay removal. by @ScheererJ [#12053]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.119.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.119.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.119.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.119.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.119.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.119.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.119.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.119.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.119.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.119.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.119.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.119.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.119.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The already deprecated `autoscaling.k8s.io/v1beta2` API version is no longer served. Before upgrading to this version of Gardener, make sure that all components use the `autoscaling.k8s.io/v1` API version for managing VerticalPodAutoscaler resources. by @ialidzhikov [#11840]
- `[OPERATOR]` The support for the already deprecated `shoot.gardener.cloud/managed-seed-api-server` annotation is now removed. Instead, consider enabling high availability for the ManagedSeed's Shoot control plane. by @ialidzhikov [#11838]
- `[USER]` The already deprecated `autoscaling.k8s.io/v1beta2` API version is no longer served. Instead, use the `autoscaling.k8s.io/v1` API version for managing VerticalPodAutoscaler resources. by @ialidzhikov [#11840]
## 📰 Noteworthy

- `[USER]` The `spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` field in the `Shoot` API is deprecated and will be removed in a future release. Before removal, it will be forbidden to set the field when using a future Kubernetes version that graduates the feature gate `AnonymousAuthConfigurableEndpoints`. by @marc1404 [#11984]
- `[OPERATOR]` The `RemoveAPIServerProxyLegacyPort` feature gate has been promoted to beta and is now turned on by default. by @Wieneo [#11902]
## ✨ New Features

- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDashboard.ingress.enabled` can now be used to control whether the `gardener-operator` should deploy a `Ingress` resource for the dashboard. by @Wieneo [#12002]
- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDashboard.oidcConfig.certificateAuthoritySecretRef` can now be used to specify a secret containing a custom CA certificate for talking to the OIDC endpoint. The certificate must be stored under the `ca.crt` key. by @Wieneo [#11967]
- `[OPERATOR]` Gardener supports gardener-node-agent images built by [ko](https://github.com/ko-build/ko). by @timebertt [#12021]
- `[OPERATOR]` It is now possible forcing `gardener-operator` to re-deploy `gardenlet`s by annotating the responsible `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource with `gardener.cloud/operation=force-redeploy`. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_via_operator.md#forceful-re-deployment). by @rfranzke [#11972]
## 🐛 Bug Fixes

- `[OPERATOR]` gardenlet's shoot-care controller : An issue causing gardenlet to report a misleading reason (`NodesScalingDown`) during rolling update of Shoot Nodes is now fixed. by @RadaBDimitrova [#11869]
- `[DEVELOPER]` Fix extension webhook registration for autonomous shoot clusters. by @ScheererJ [#12040]
## 🏃 Others

- `[OPERATOR]` The utilization of the VPN containers running in the seed is now improved by adapting their initial/static requests and by changing the corresponding VPA configuration:  
  - autoscaling is disabled for the `vpn-seed-server` and `openvpn-exporter` containers  
  - initial/static resource requests are reduced  
  - limits are removed  
  - `minAllowed` for the `envoy-proxy` container is removed by @axel7born [#12023]
- `[OPERATOR]` Remove sum for VPA Pod metrics in 'recommendations' dashboard by @voelzmo [#12057]
- `[OPERATOR]` Spreading Istio ingress-gateway pods across hosts is enforced only for zonal Istio deployments now. by @oliver-goetz [#12007]
- `[OPERATOR]` `kube-proxy` no longer fails its readiness probe in case the node is about to be deleted by `cluster-autoscaler`. by @ScheererJ [#12015]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.25.2` to `1.25.3`.   
  - `gcr.io/istio-release/proxyv2` from `1.25.2` to `1.25.3`.   
  - `istio.io/api` from `v1.25.2` to `v1.25.3`.  by @gardener-ci-robot [#12074]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.0` to `v1.34.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.1) by @gardener-ci-robot [#12024]
## 📖 Documentation

- `[USER]` Dual-Stack Migration documentation now clearly states the precondition of overlay removal. by @ScheererJ [#12053]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.119.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.119.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.119.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.119.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.119.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.119.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.119.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.119.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.119.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.119.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.119.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.119.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.119.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The already deprecated `autoscaling.k8s.io/v1beta2` API version is no longer served. Before upgrading to this version of Gardener, make sure that all components use the `autoscaling.k8s.io/v1` API version for managing VerticalPodAutoscaler resources. by @ialidzhikov [#11840]
- `[OPERATOR]` The support for the already deprecated `shoot.gardener.cloud/managed-seed-api-server` annotation is now removed. Instead, consider enabling high availability for the ManagedSeed's Shoot control plane. by @ialidzhikov [#11838]
- `[USER]` The already deprecated `autoscaling.k8s.io/v1beta2` API version is no longer served. Instead, use the `autoscaling.k8s.io/v1` API version for managing VerticalPodAutoscaler resources. by @ialidzhikov [#11840]
## 📰 Noteworthy

- `[USER]` The `spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` field in the `Shoot` API is deprecated and will be removed in a future release. Before removal, it will be forbidden to set the field when using a future Kubernetes version that graduates the feature gate `AnonymousAuthConfigurableEndpoints`. by @marc1404 [#11984]
- `[OPERATOR]` The `RemoveAPIServerProxyLegacyPort` feature gate has been promoted to beta and is now turned on by default. by @Wieneo [#11902]
## ✨ New Features

- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDashboard.ingress.enabled` can now be used to control whether the `gardener-operator` should deploy a `Ingress` resource for the dashboard. by @Wieneo [#12002]
- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDashboard.oidcConfig.certificateAuthoritySecretRef` can now be used to specify a secret containing a custom CA certificate for talking to the OIDC endpoint. The certificate must be stored under the `ca.crt` key. by @Wieneo [#11967]
- `[OPERATOR]` Gardener supports gardener-node-agent images built by [ko](https://github.com/ko-build/ko). by @timebertt [#12021]
- `[OPERATOR]` It is now possible forcing `gardener-operator` to re-deploy `gardenlet`s by annotating the responsible `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource with `gardener.cloud/operation=force-redeploy`. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_via_operator.md#forceful-re-deployment). by @rfranzke [#11972]
## 🐛 Bug Fixes

- `[OPERATOR]` gardenlet's shoot-care controller : An issue causing gardenlet to report a misleading reason (`NodesScalingDown`) during rolling update of Shoot Nodes is now fixed. by @RadaBDimitrova [#11869]
- `[DEVELOPER]` Fix extension webhook registration for autonomous shoot clusters. by @ScheererJ [#12040]
## 🏃 Others

- `[OPERATOR]` The utilization of the VPN containers running in the seed is now improved by adapting their initial/static requests and by changing the corresponding VPA configuration:  
  - autoscaling is disabled for the `vpn-seed-server` and `openvpn-exporter` containers  
  - initial/static resource requests are reduced  
  - limits are removed  
  - `minAllowed` for the `envoy-proxy` container is removed by @axel7born [#12023]
- `[OPERATOR]` Remove sum for VPA Pod metrics in 'recommendations' dashboard by @voelzmo [#12057]
- `[OPERATOR]` Spreading Istio ingress-gateway pods across hosts is enforced only for zonal Istio deployments now. by @oliver-goetz [#12007]
- `[OPERATOR]` `kube-proxy` no longer fails its readiness probe in case the node is about to be deleted by `cluster-autoscaler`. by @ScheererJ [#12015]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.25.2` to `1.25.3`.   
  - `gcr.io/istio-release/proxyv2` from `1.25.2` to `1.25.3`.   
  - `istio.io/api` from `v1.25.2` to `v1.25.3`.  by @gardener-ci-robot [#12074]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.0` to `v1.34.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.1) by @gardener-ci-robot [#12024]
## 📖 Documentation

- `[USER]` Dual-Stack Migration documentation now clearly states the precondition of overlay removal. by @ScheererJ [#12053]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.119.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.119.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.119.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.119.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.119.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.119.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.119.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.119.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.119.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.119.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.119.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.119.0`


</details>

<details>
<summary><b>Update backup-s3 to <code>0.7.2</code></b></summary>

## General Changes

* Release Helm OCI artifacts and revendor g/g v1.113. (#15) @Gerrit91


</details>

<details>
<summary><b>Update external-dns-management to <code>0.25.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` [alicloud-dns] Add support for weighted routing policy. More details see https://github.com/gardener/external-dns-management/tree/master/docs/alicloud-dns#routing-policy by @MartinWeindel [#461]
## 🐛 Bug Fixes

- `[USER]` Fix update of status for source `DNSEntries` if they are very old, as the heuristics for old entries without `generateName` field did not work. by @MartinWeindel [#466]
## 🏃 Others

- `[DEVELOPER]` cleanup: drop unused (and outdated) script by @ccwienk [#465]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.25.0`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.25.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.39.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` Remove gardener_shoot_custom_privileged_containers_total metric by @chrkl [#127]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.39.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.39.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` Remove gardener_shoot_custom_privileged_containers_total metric by @chrkl [#127]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.39.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.62.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` Fixes `make verify` and switches the building pipelines to GHA by @kon-angelo [#1343]


</details>

<details>
<summary><b>Update provider-gcp to <code>1.44.0</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 📰 Noteworthy

- `[OPERATOR]` Use `cloud-controller-manager@v32.2.2` for Kubernetes >= v1.32 by @marc1404 [#990]
## 🏃 Others

- `[OPERATOR]` Improved credentials configuration validation. by @dimityrmirchev [#1061]
- `[OPERATOR]` The `csi-snapshot-webhook-vpa` VerticalPodAutoscaler and the `csi-snapshot-validation` PodDisruptionBudget are now also cleaned up during the deletion of the legacy `csi-snapshot-validation` resources. by @ialidzhikov [#1068]
- `[OPERATOR]` Add support for single-stack to dual-stack network migration. by @DockToFuture [#1010]
- `[OPERATOR]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#1032]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#1031]
- `[OPERATOR]` Update CSI driver from v1.15.4 to v1.17.12 by @hebelsan [#1062]
- `[OPERATOR]` Update gardener/gardener to v1.118.0. by @ScheererJ [#1057]
- `[OPERATOR]` Update `gardener/gardener` to `v1.117.0` [Release Notes](https://github.com/gardener/gardener/releases/tag/v1.117.0). by @acumino [#1042]
- `[OPERATOR]` In dual-stack clusters, services of type `LoadBalancer` will automatically created as dual-stack load balancers. by @ScheererJ [#1001]
- `[OPERATOR]` Obsolete ClusterRoles and ClusterRoleBindings that were leftovers from the machine-controller-manager component are now cleaned up. by @georgibaltiev [#1064]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#989]
- `[OPERATOR]` `provider-gcp` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#879]
- `[OPERATOR]` Include errors related to locating user-managed resources in the known error set. by @hebelsan [#1044]
- `[OPERATOR]` Remove the `podAntiAffinity` in the deployment in favor of only `TopologySpreadConstraints`. by @LucaBernstein [#1052]
- `[OPERATOR]` The images built by the GCP provider-extension are now multiarch-images, supporting x86_64 and arm64 by @AndreasBurger [#1037]
- `[OPERATOR]` Add missing list permissions for the vpa.  by @kon-angelo [#1075]
- `[OPERATOR]` The [`ServiceTrafficDistribution`](https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution) feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#949]
- `[DEPENDENCY]` Update csi images:  
  csi-attacher: v4.8.0 -> v4.8.1  
  csi-resizer: v1.13.1 -> v1.13.2  
  csi-snapshotter: v8.2.0 -> v8.2.1  
  csi-snapshot-controller: v8.2.0 -> v8.2.1 by @hebelsan [#1072]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update gardener to v1.117.0 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update fsnotify to v1.9.0 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update aws-sdk-go to v1.55.7 by @hebelsan [gardener/terraformer#162]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.44.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.44.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.44.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.44.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.44.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.64.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Drop handling of DNSOwner by @MartinWeindel [#474]
# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` [alicloud-dns] Add support for weighted routing policy. More details see https://github.com/gardener/external-dns-management/tree/master/docs/alicloud-dns#routing-policy by @MartinWeindel [gardener/external-dns-management#461]
## 🐛 Bug Fixes

- `[USER]` Fix update of status for source `DNSEntries` if they are very old, as the heuristics for old entries without `generateName` field did not work. by @MartinWeindel [gardener/external-dns-management#466]
## 🏃 Others

- `[DEVELOPER]` cleanup: drop unused (and outdated) script by @ccwienk [gardener/external-dns-management#465]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.64.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.64.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.64.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.64.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.64.0`


</details>
