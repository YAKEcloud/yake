---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-cilium to <code>1.29.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## 🏃 Others

- `[OPERATOR]` Update cilium to `v1.14.2`. by @DockToFuture [#216]
- `[OPERATOR]` The networking-cilium extension now uses an objectSelector on its mutating webhook for node-local-dns and sets it failurePolicy to fail by @ScheererJ [#215]

</details>

<details>
<summary><b>Update provider-alicloud to <code>1.49.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-alicloud` no longer supports Shoots or Seeds with Кubernetes version < 1.24. by @shafeeqes [#647]
- `[USER]` The `volumeBindingMode` of the default StorageClass managed by the provider-alicloud extension is now switched from `Immediate` to `WaitForFirstConsumer`. by @ialidzhikov [#648]
## ✨ New Features

- `[USER]` The provider-alicloud extension does now support shoot clusters with Kubernetes version 1.28. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.28.md) before upgrading to 1.28.  by @oliver-goetz [#650]
## 🏃 Others

- `[OPERATOR]` The following golang dependencies have been upgraded :  
  - `gardener/gardener` to `v1.80.3`  
  - `k8s.io/*` to `v0.27.5`  
  - `sigs.k8s.io/controller-runtime` to `v0.16.2` by @ary1992 [#645]
- `[OPERATOR]` allow public network access from admission pod by @shaoyongfeng [#651]
- `[OPERATOR]` machineDeployment will have the label `topology.diskplugin.csi.alibabacloud.com/zone` when created. by @elankath [#638]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Force drain and delete volume attachments for nodes un-healthy due to `ReadOnlyFileSystem` and `NotReady` for too long by @elankath [gardener/machine-controller-manager#839]
- `[OPERATOR]` An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed by @acumino [gardener/machine-controller-manager#814]
- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @rishabh-11 [gardener/machine-controller-manager#833]
- `[USER]` An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. by @rishabh-11 [gardener/machine-controller-manager#821]
## 🏃 Others

- `[OPERATOR]` New metrics introduced:   
  - api_request_duration_seconds -> tracks time taken for successful invocation of provider APIs. This metric can be filtered by provider and service.  
  - driver_request_duration_seconds -> tracks total time taken to successfully complete driver method invocation. This metric can be filtered by provider and operation.  
  - driver_requests_failed_total -> records total number of failed driver API requests. This metric can be filtered by provider, operations and error_code. by @unmarshall [gardener/machine-controller-manager#842]
- `[OPERATOR]` Added a new metric that will allow to get the number of stale (due to unhealthiness) machines  that are getting terminated by @jguipi [gardener/machine-controller-manager#808]
- `[OPERATOR]` Makefile targets have changed: Introduced gardener-setup, gardener-restore, gardener-local-mcm-up, non-gardener-setup, non-gardener-restore,  non-gardener-local-mcm-up. Users can also directly use the scripts which are used by these makefile targets. by @unmarshall [gardener/machine-controller-manager#852]
- `[OPERATOR]` Updated to go v1.20.5 by @rishabh-11 [gardener/machine-controller-manager#827]
- `[OPERATOR]` Added `errorCode` field in the `LastOperation` struct. This should be implemented only for the `CreateMachine` call in the `triggerCreationFlow`. This field will be utilized by Cluster autoscaler to do early backoff  by @rishabh-11 [gardener/machine-controller-manager#851]
- `[DEVELOPER]` Bump `k8s.io/*` deps to v0.27.2 by @afritzler [gardener/machine-controller-manager#820]
- `[DEVELOPER]` status.Status now captures underline cause, allowing consumers to introspect the error returned by the provider. WrapError() function could be used to wrap the provider error by @unmarshall [gardener/machine-controller-manager#842]
- `[DEVELOPER]` Removed dead metrics code and refactored the remaining metrics code by @himanshu-kun [gardener/machine-controller-manager#823]
- `[DEVELOPER]` A new make target is introduced to add license headers. by @unmarshall [gardener/machine-controller-manager#845]
# [gardener/machine-controller-manager-provider-alicloud]

## 🏃 Others

- `[OPERATOR]` MCM status code `ResourceExhausted` is now utilized in mcm-provider-alicloud. by @himanshu-kun [gardener/machine-controller-manager-provider-alicloud#57]
## Docker Images
gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.49.0`
gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.49.0`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @gardener-ci-robot [#8656]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @gardener-ci-robot [#8652]

# Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.1`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @gardener-ci-robot [#8656]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @gardener-ci-robot [#8652]

# Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.1`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.1`

</details>

<details>
<summary><b>Update gardenlet to <code>1.81.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @gardener-ci-robot [#8656]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @gardener-ci-robot [#8652]

# Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.1`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @rfranzke [#8664]
## 🏃 Others

- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @gardener-ci-robot [#8658]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @rfranzke [#8664]
## 🏃 Others

- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @gardener-ci-robot [#8658]

</details>

<details>
<summary><b>Update gardenlet to <code>1.81.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @rfranzke [#8664]
## 🏃 Others

- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @gardener-ci-robot [#8658]

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.7</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.6...0.6.7

</details>

<details>
<summary><b>Update dashboard to <code>1.70.1</code></b></summary>

# [gardener/dashboard]

## ✨ New Features

- `[OPERATOR]` Enhanced the `gardener-dashboard` helm chart with additional configuration options:  
  * Browser window title is now customizable via `Values.global.dashboard.frontendConfig.branding.documentTitle`  
  * Manual configuration of OIDC redirect URLs is supported through `Values.global.dashboard.oidc.redirectUris`. This is particularly useful for local development setups by @holgerkoser [#1611]
## 🐛 Bug Fixes

- `[USER]` If the login session in the dasboard expires the user no longer gets an error message `JWT expired`. In case of autoLogin is enabled the user is redirected back to the last visited page by @holgerkoser [#1612]
- `[USER]` Fixed duplicative tooltip on issue since value by @petersutter [#1614]
- `[USER]` Fixed a typo in shoot credentials rotation by @memeToasty [#1610]
- `[USER]` Fixed two memory leaks in `GTimeString` and `localStorage` store. This issue was causing an unnecessary allocation of memory, which, over time, led to degraded UI performance and eventually leading to Out of Memory crashes. by @holgerkoser [#1613]
## 🏃 Others

- `[OPERATOR]` This release includes nodejs `v20.8.1` by @holgerkoser [#1609]

</details>

<details>
<summary><b>Update dashboard to <code>1.70.1</code></b></summary>

# [gardener/dashboard]

## ✨ New Features

- `[OPERATOR]` Enhanced the `gardener-dashboard` helm chart with additional configuration options:  
  * Browser window title is now customizable via `Values.global.dashboard.frontendConfig.branding.documentTitle`  
  * Manual configuration of OIDC redirect URLs is supported through `Values.global.dashboard.oidc.redirectUris`. This is particularly useful for local development setups by @holgerkoser [#1611]
## 🐛 Bug Fixes

- `[USER]` If the login session in the dasboard expires the user no longer gets an error message `JWT expired`. In case of autoLogin is enabled the user is redirected back to the last visited page by @holgerkoser [#1612]
- `[USER]` Fixed duplicative tooltip on issue since value by @petersutter [#1614]
- `[USER]` Fixed a typo in shoot credentials rotation by @memeToasty [#1610]
- `[USER]` Fixed two memory leaks in `GTimeString` and `localStorage` store. This issue was causing an unnecessary allocation of memory, which, over time, led to degraded UI performance and eventually leading to Out of Memory crashes. by @holgerkoser [#1613]
## 🏃 Others

- `[OPERATOR]` This release includes nodejs `v20.8.1` by @holgerkoser [#1609]

</details>
