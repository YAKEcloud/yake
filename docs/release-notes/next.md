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

<details>
<summary><b>Update gardener-controlplane to <code>1.82.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The deprecated `ChartRenderer.Render` and `ChartApplier.{Apply,Delete}` methods have been dropped. Use `ChartRendere.RenderEmbeddedFS` and `ChartApplier.{Apply,Delete}FromEmbeddedFS` instead. by @rfranzke [#8540]
- `[DEPENDENCY]` The `hack/generate-crds.sh` script now receives the file name prefix via the `-p` option (previously, the prefix was the first argument to the script). by @rfranzke [#8560]
- `[DEPENDENCY]` The no longer required `--gardenlet-manages-mcm` option has been removed. All code in provider extensions related to management/deployment of `machine-controller-manager` should be removed. by @rfranzke [#8596]
- `[DEPENDENCY]` The deprecated `core.gardener.cloud/apiserver-exposure` label and handling has been dropped. by @rfranzke [#8540]
- `[DEPENDENCY]` Provider extensions must now pass the `cluster.Cluster` object for the garden cluster to the `genericactuator.NewActuator` function. See [this](https://github.com/gardener/gardener/blob/8d2f116aa606e5181cd430e5063dd798629bdc78/cmd/gardener-extension-provider-local/app/app.go#L228-L246) for an example how to create such a `cluster.Cluster` object. by @rfranzke [#8559]
- `[OPERATOR]` Before upgrading to this Gardener versions, you must make sure that the `Service`s of all registered provider extensions serving webhooks for the shoot cluster are annotated with `networking.resources.gardener.cloud/from-all-webhook-targets-allowed-ports=[{"protocol":"TCP","port":<port>}]`, `networking.resources.gardener.cloud/namespace-selectors=[{"matchLabels":{"gardener.cloud/role":"shoot"}}]`, and `networking.resources.gardener.cloud/pod-label-selector-namespace-alias=extensions`. by @rfranzke [#8540]
- `[DEVELOPER]` Methods `SkipIf` and `DoIf` for `TaskFn` have been dropped. A new field `SkipIf` is introduced in `Task`, If set to true the task will be skipped and will also not be reported by the progress reporter. by @acumino [#8541]
## 📰 Noteworthy

- `[DEVELOPER]` The `pkg/utils/secrets` package now signs certificates with 3072 bit RSA keys. by @dimityrmirchev [#8635]
- `[DEVELOPER]` During the `Migrate` phase of a control plane migration of a `Shoot`, the state is now only persisted after all extension resources have been migrated. Consequently, make sure that you have added all state to the `.status.state` field of the respective extension object when running `Migrate()`. by @rfranzke [#8559]
- `[DEVELOPER]` A `generate-admin-kubeconf.sh` script which can be used to generate an admin kubeconfig for a local shoot cluster was added in the `hack/usage` directory. by @dimityrmirchev [#8636]
- `[DEVELOPER]` The `extensions/pkg/controller/operatingsystemconfig/oscommon` package is deprecated and will be removed as soon as the `UseGardenerNodeAgent` feature gate has been promoted to GA. OS extension developers should start adapting to this new feature, see [documentation](https://github.com/gardener/gardener/blob/master/docs/extensions/operatingsystemconfig.md#what-needs-to-be-implemented-to-support-a-new-operating-system) and [example](https://github.com/rfranzke/gardener/tree/gna/osc-api/pkg/provider-local/controller/operatingsystemconfig) based on `provider-local`. by @rfranzke [#8647]
- `[OPERATOR]` The `Worker` state reconciler has been dropped, i.e., updated provider extensions will no longer populate the machine state to the `.status.state` field of `Worker` resources. For a few releases, `gardenlet` will no longer persist any still existing data in the `.status.state` field of `Worker` resources during a control plane migration of a `Shoot`, and it will set `.status.state` to `nil` after a successful reconciliation or restore operation. by @rfranzke [#8559]
- `[OPERATOR]` Configure the value for the flag `metrics-scrape-wait-duration` for compaction controller to set a wait duration at the end of every compaction job, to allow for metrics to be scraped by a Prometheus instance. by @abdasgupta [#8607]
- `[OPERATOR]` The `MachineControllerManagerDeployment` has been promoted to GA and is now locked to "enabled by default". Make sure that all registered provider extensions support this feature gate before upgrading to this version of Gardener. by @rfranzke [#8596]
- `[OPERATOR]` The GA-ed `DisableScalingClassesForShoots` feature gate has been removed. by @rfranzke [#8596]
- `[OPERATOR]` `maxSurge` for `kube-apiserver` and `gardener-apiserver` of the virtual garden cluster is set to `100%`. by @oliver-goetz [#8640]
- `[OPERATOR]` The `kube-apiserver` no longer mounts root CA bundles from the underlying host. by @dimityrmirchev [#8645]
- `[USER]` Gardener now uses 3072 bit RSA keys in order to generate TLS certificates. by @dimityrmirchev [#8635]
- `[USER]` `nginx-ingress-controller` now enables annotation validation. by @dimityrmirchev [#8644]
- `[DEPENDENCY]` The `MachineClassKind()`, `MachineClass()`, and `MachineClassList()` methods have been dropped from the generic `Worker` actuator's interface and do not need to be implemented anymore. by @rfranzke [#8559]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` maintains the two most recent `generic-token-kubeconfig` secrets in the runtime-cluster. In addition the latest secret name is published to the `garden` resource in `.metadata.annotations[generic-token-kubeconfig.secret.gardener.cloud/name]`. Third-party components referring to this secret should check this annotation value after a credentials or CA rotation for the virtual-garden cluster took place. by @timuthy [#8657]
- `[OPERATOR]` Feature gate `APIServerFastRollout` for `gardenlet` is introduced and enabled by default. When enabled, `maxSurge` for `kube-apiservers` of `Shoot`s is set to `100%`.  by @oliver-goetz [#8640]
- `[DEVELOPER]` It is now possible to annotate managed resources part of `ManagedResource` objects with `resources.gardener.cloud/finalize-deletion-after=<duration>`, e.g., `resources.gardener.cloud/finalize-deletion-after=1h`. After this time, `gardener-resource-manager` will forcefully delete the resource by removing their finalizers. by @rfranzke [#8584]
- `[DEVELOPER]` Change port of ssh reverse tunnel to 443 by @axel7born [#8606]
- `[USER]` Machine scale-up delay for new pods can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.newPodScaleupDelay` in the `Shoot` API . by @aaronfern [#8590]
- `[USER]` Concurrent empty machines bulk deletion can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` in the `Shoot` API . by @aaronfern [#8590]
## 🐛 Bug Fixes

- `[DEVELOPER]` Use cgroupv2 fix for local-setup on macOS too. by @oliver-goetz [#8633]
## 🏃 Others

- `[DEVELOPER]` Gardener base image is updated to `gcr.io/distroless/static-debian12:nonroot`. by @oliver-goetz [#8628]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @dimityrmirchev [#8644]
- `[DEPENDENCY]` The skaffold version is updated from v2.7.0 to v2.8.0. by @dimitar-kostadinov [#8634]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @dimityrmirchev [#8650]
- `[OPERATOR]` Kubernetes feature gate `UnauthenticatedHTTP2DOSMitigation` is considered valid for versions >= `1.25`. by @gardener-ci-robot [#8670]
- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @nickytd [#8655]
- `[OPERATOR]` The following Golang dependencies have been updated:  
  - `k8s.io/*` from `v0.28.2` to `v0.28.3`  
  - `sigs.k8s.io/controller-runtime` from `v0.16.2` to `v0.16.3` by @gardener-ci-robot [#8677]
## 📖 Documentation

- `[USER]` Added an example for `AdminKubeconfigRequest` via the Python Kubernetes client. by @Shegox [#8651]
# [gardener/ext-authz-server]

## ✨ New Features

- `[USER]` Update golang 1.20.4 -> 1.21.3 by @axel7born [gardener/ext-authz-server#23]
# [gardener/apiserver-proxy]

## 🏃 Others

- `[OPERATOR]` Remove unneeded Monitor function from iptables implementation  by @axel7born [gardener/apiserver-proxy#54]
- `[OPERATOR]` Update golang image in verify step to 1.21.3. by @DockToFuture [gardener/apiserver-proxy#56]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Update alpine base image version to 3.18.4. by @shreyas-s-rao [gardener/etcd-backup-restore#666]

## Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.82.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.82.0`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.82.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.82.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.82.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.82.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.82.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.82.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The deprecated `ChartRenderer.Render` and `ChartApplier.{Apply,Delete}` methods have been dropped. Use `ChartRendere.RenderEmbeddedFS` and `ChartApplier.{Apply,Delete}FromEmbeddedFS` instead. by @rfranzke [#8540]
- `[DEPENDENCY]` The `hack/generate-crds.sh` script now receives the file name prefix via the `-p` option (previously, the prefix was the first argument to the script). by @rfranzke [#8560]
- `[DEPENDENCY]` The no longer required `--gardenlet-manages-mcm` option has been removed. All code in provider extensions related to management/deployment of `machine-controller-manager` should be removed. by @rfranzke [#8596]
- `[DEPENDENCY]` The deprecated `core.gardener.cloud/apiserver-exposure` label and handling has been dropped. by @rfranzke [#8540]
- `[DEPENDENCY]` Provider extensions must now pass the `cluster.Cluster` object for the garden cluster to the `genericactuator.NewActuator` function. See [this](https://github.com/gardener/gardener/blob/8d2f116aa606e5181cd430e5063dd798629bdc78/cmd/gardener-extension-provider-local/app/app.go#L228-L246) for an example how to create such a `cluster.Cluster` object. by @rfranzke [#8559]
- `[OPERATOR]` Before upgrading to this Gardener versions, you must make sure that the `Service`s of all registered provider extensions serving webhooks for the shoot cluster are annotated with `networking.resources.gardener.cloud/from-all-webhook-targets-allowed-ports=[{"protocol":"TCP","port":<port>}]`, `networking.resources.gardener.cloud/namespace-selectors=[{"matchLabels":{"gardener.cloud/role":"shoot"}}]`, and `networking.resources.gardener.cloud/pod-label-selector-namespace-alias=extensions`. by @rfranzke [#8540]
- `[DEVELOPER]` Methods `SkipIf` and `DoIf` for `TaskFn` have been dropped. A new field `SkipIf` is introduced in `Task`, If set to true the task will be skipped and will also not be reported by the progress reporter. by @acumino [#8541]
## 📰 Noteworthy

- `[DEVELOPER]` The `pkg/utils/secrets` package now signs certificates with 3072 bit RSA keys. by @dimityrmirchev [#8635]
- `[DEVELOPER]` During the `Migrate` phase of a control plane migration of a `Shoot`, the state is now only persisted after all extension resources have been migrated. Consequently, make sure that you have added all state to the `.status.state` field of the respective extension object when running `Migrate()`. by @rfranzke [#8559]
- `[DEVELOPER]` A `generate-admin-kubeconf.sh` script which can be used to generate an admin kubeconfig for a local shoot cluster was added in the `hack/usage` directory. by @dimityrmirchev [#8636]
- `[DEVELOPER]` The `extensions/pkg/controller/operatingsystemconfig/oscommon` package is deprecated and will be removed as soon as the `UseGardenerNodeAgent` feature gate has been promoted to GA. OS extension developers should start adapting to this new feature, see [documentation](https://github.com/gardener/gardener/blob/master/docs/extensions/operatingsystemconfig.md#what-needs-to-be-implemented-to-support-a-new-operating-system) and [example](https://github.com/rfranzke/gardener/tree/gna/osc-api/pkg/provider-local/controller/operatingsystemconfig) based on `provider-local`. by @rfranzke [#8647]
- `[OPERATOR]` The `Worker` state reconciler has been dropped, i.e., updated provider extensions will no longer populate the machine state to the `.status.state` field of `Worker` resources. For a few releases, `gardenlet` will no longer persist any still existing data in the `.status.state` field of `Worker` resources during a control plane migration of a `Shoot`, and it will set `.status.state` to `nil` after a successful reconciliation or restore operation. by @rfranzke [#8559]
- `[OPERATOR]` Configure the value for the flag `metrics-scrape-wait-duration` for compaction controller to set a wait duration at the end of every compaction job, to allow for metrics to be scraped by a Prometheus instance. by @abdasgupta [#8607]
- `[OPERATOR]` The `MachineControllerManagerDeployment` has been promoted to GA and is now locked to "enabled by default". Make sure that all registered provider extensions support this feature gate before upgrading to this version of Gardener. by @rfranzke [#8596]
- `[OPERATOR]` The GA-ed `DisableScalingClassesForShoots` feature gate has been removed. by @rfranzke [#8596]
- `[OPERATOR]` `maxSurge` for `kube-apiserver` and `gardener-apiserver` of the virtual garden cluster is set to `100%`. by @oliver-goetz [#8640]
- `[OPERATOR]` The `kube-apiserver` no longer mounts root CA bundles from the underlying host. by @dimityrmirchev [#8645]
- `[USER]` Gardener now uses 3072 bit RSA keys in order to generate TLS certificates. by @dimityrmirchev [#8635]
- `[USER]` `nginx-ingress-controller` now enables annotation validation. by @dimityrmirchev [#8644]
- `[DEPENDENCY]` The `MachineClassKind()`, `MachineClass()`, and `MachineClassList()` methods have been dropped from the generic `Worker` actuator's interface and do not need to be implemented anymore. by @rfranzke [#8559]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` maintains the two most recent `generic-token-kubeconfig` secrets in the runtime-cluster. In addition the latest secret name is published to the `garden` resource in `.metadata.annotations[generic-token-kubeconfig.secret.gardener.cloud/name]`. Third-party components referring to this secret should check this annotation value after a credentials or CA rotation for the virtual-garden cluster took place. by @timuthy [#8657]
- `[OPERATOR]` Feature gate `APIServerFastRollout` for `gardenlet` is introduced and enabled by default. When enabled, `maxSurge` for `kube-apiservers` of `Shoot`s is set to `100%`.  by @oliver-goetz [#8640]
- `[DEVELOPER]` It is now possible to annotate managed resources part of `ManagedResource` objects with `resources.gardener.cloud/finalize-deletion-after=<duration>`, e.g., `resources.gardener.cloud/finalize-deletion-after=1h`. After this time, `gardener-resource-manager` will forcefully delete the resource by removing their finalizers. by @rfranzke [#8584]
- `[DEVELOPER]` Change port of ssh reverse tunnel to 443 by @axel7born [#8606]
- `[USER]` Machine scale-up delay for new pods can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.newPodScaleupDelay` in the `Shoot` API . by @aaronfern [#8590]
- `[USER]` Concurrent empty machines bulk deletion can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` in the `Shoot` API . by @aaronfern [#8590]
## 🐛 Bug Fixes

- `[DEVELOPER]` Use cgroupv2 fix for local-setup on macOS too. by @oliver-goetz [#8633]
## 🏃 Others

- `[DEVELOPER]` Gardener base image is updated to `gcr.io/distroless/static-debian12:nonroot`. by @oliver-goetz [#8628]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @dimityrmirchev [#8644]
- `[DEPENDENCY]` The skaffold version is updated from v2.7.0 to v2.8.0. by @dimitar-kostadinov [#8634]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @dimityrmirchev [#8650]
- `[OPERATOR]` Kubernetes feature gate `UnauthenticatedHTTP2DOSMitigation` is considered valid for versions >= `1.25`. by @gardener-ci-robot [#8670]
- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @nickytd [#8655]
- `[OPERATOR]` The following Golang dependencies have been updated:  
  - `k8s.io/*` from `v0.28.2` to `v0.28.3`  
  - `sigs.k8s.io/controller-runtime` from `v0.16.2` to `v0.16.3` by @gardener-ci-robot [#8677]
## 📖 Documentation

- `[USER]` Added an example for `AdminKubeconfigRequest` via the Python Kubernetes client. by @Shegox [#8651]
# [gardener/ext-authz-server]

## ✨ New Features

- `[USER]` Update golang 1.20.4 -> 1.21.3 by @axel7born [gardener/ext-authz-server#23]
# [gardener/apiserver-proxy]

## 🏃 Others

- `[OPERATOR]` Remove unneeded Monitor function from iptables implementation  by @axel7born [gardener/apiserver-proxy#54]
- `[OPERATOR]` Update golang image in verify step to 1.21.3. by @DockToFuture [gardener/apiserver-proxy#56]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Update alpine base image version to 3.18.4. by @shreyas-s-rao [gardener/etcd-backup-restore#666]

## Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.82.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.82.0`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.82.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.82.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.82.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.82.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.82.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.82.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The deprecated `ChartRenderer.Render` and `ChartApplier.{Apply,Delete}` methods have been dropped. Use `ChartRendere.RenderEmbeddedFS` and `ChartApplier.{Apply,Delete}FromEmbeddedFS` instead. by @rfranzke [#8540]
- `[DEPENDENCY]` The `hack/generate-crds.sh` script now receives the file name prefix via the `-p` option (previously, the prefix was the first argument to the script). by @rfranzke [#8560]
- `[DEPENDENCY]` The no longer required `--gardenlet-manages-mcm` option has been removed. All code in provider extensions related to management/deployment of `machine-controller-manager` should be removed. by @rfranzke [#8596]
- `[DEPENDENCY]` The deprecated `core.gardener.cloud/apiserver-exposure` label and handling has been dropped. by @rfranzke [#8540]
- `[DEPENDENCY]` Provider extensions must now pass the `cluster.Cluster` object for the garden cluster to the `genericactuator.NewActuator` function. See [this](https://github.com/gardener/gardener/blob/8d2f116aa606e5181cd430e5063dd798629bdc78/cmd/gardener-extension-provider-local/app/app.go#L228-L246) for an example how to create such a `cluster.Cluster` object. by @rfranzke [#8559]
- `[OPERATOR]` Before upgrading to this Gardener versions, you must make sure that the `Service`s of all registered provider extensions serving webhooks for the shoot cluster are annotated with `networking.resources.gardener.cloud/from-all-webhook-targets-allowed-ports=[{"protocol":"TCP","port":<port>}]`, `networking.resources.gardener.cloud/namespace-selectors=[{"matchLabels":{"gardener.cloud/role":"shoot"}}]`, and `networking.resources.gardener.cloud/pod-label-selector-namespace-alias=extensions`. by @rfranzke [#8540]
- `[DEVELOPER]` Methods `SkipIf` and `DoIf` for `TaskFn` have been dropped. A new field `SkipIf` is introduced in `Task`, If set to true the task will be skipped and will also not be reported by the progress reporter. by @acumino [#8541]
## 📰 Noteworthy

- `[DEVELOPER]` The `pkg/utils/secrets` package now signs certificates with 3072 bit RSA keys. by @dimityrmirchev [#8635]
- `[DEVELOPER]` During the `Migrate` phase of a control plane migration of a `Shoot`, the state is now only persisted after all extension resources have been migrated. Consequently, make sure that you have added all state to the `.status.state` field of the respective extension object when running `Migrate()`. by @rfranzke [#8559]
- `[DEVELOPER]` A `generate-admin-kubeconf.sh` script which can be used to generate an admin kubeconfig for a local shoot cluster was added in the `hack/usage` directory. by @dimityrmirchev [#8636]
- `[DEVELOPER]` The `extensions/pkg/controller/operatingsystemconfig/oscommon` package is deprecated and will be removed as soon as the `UseGardenerNodeAgent` feature gate has been promoted to GA. OS extension developers should start adapting to this new feature, see [documentation](https://github.com/gardener/gardener/blob/master/docs/extensions/operatingsystemconfig.md#what-needs-to-be-implemented-to-support-a-new-operating-system) and [example](https://github.com/rfranzke/gardener/tree/gna/osc-api/pkg/provider-local/controller/operatingsystemconfig) based on `provider-local`. by @rfranzke [#8647]
- `[OPERATOR]` The `Worker` state reconciler has been dropped, i.e., updated provider extensions will no longer populate the machine state to the `.status.state` field of `Worker` resources. For a few releases, `gardenlet` will no longer persist any still existing data in the `.status.state` field of `Worker` resources during a control plane migration of a `Shoot`, and it will set `.status.state` to `nil` after a successful reconciliation or restore operation. by @rfranzke [#8559]
- `[OPERATOR]` Configure the value for the flag `metrics-scrape-wait-duration` for compaction controller to set a wait duration at the end of every compaction job, to allow for metrics to be scraped by a Prometheus instance. by @abdasgupta [#8607]
- `[OPERATOR]` The `MachineControllerManagerDeployment` has been promoted to GA and is now locked to "enabled by default". Make sure that all registered provider extensions support this feature gate before upgrading to this version of Gardener. by @rfranzke [#8596]
- `[OPERATOR]` The GA-ed `DisableScalingClassesForShoots` feature gate has been removed. by @rfranzke [#8596]
- `[OPERATOR]` `maxSurge` for `kube-apiserver` and `gardener-apiserver` of the virtual garden cluster is set to `100%`. by @oliver-goetz [#8640]
- `[OPERATOR]` The `kube-apiserver` no longer mounts root CA bundles from the underlying host. by @dimityrmirchev [#8645]
- `[USER]` Gardener now uses 3072 bit RSA keys in order to generate TLS certificates. by @dimityrmirchev [#8635]
- `[USER]` `nginx-ingress-controller` now enables annotation validation. by @dimityrmirchev [#8644]
- `[DEPENDENCY]` The `MachineClassKind()`, `MachineClass()`, and `MachineClassList()` methods have been dropped from the generic `Worker` actuator's interface and do not need to be implemented anymore. by @rfranzke [#8559]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` maintains the two most recent `generic-token-kubeconfig` secrets in the runtime-cluster. In addition the latest secret name is published to the `garden` resource in `.metadata.annotations[generic-token-kubeconfig.secret.gardener.cloud/name]`. Third-party components referring to this secret should check this annotation value after a credentials or CA rotation for the virtual-garden cluster took place. by @timuthy [#8657]
- `[OPERATOR]` Feature gate `APIServerFastRollout` for `gardenlet` is introduced and enabled by default. When enabled, `maxSurge` for `kube-apiservers` of `Shoot`s is set to `100%`.  by @oliver-goetz [#8640]
- `[DEVELOPER]` It is now possible to annotate managed resources part of `ManagedResource` objects with `resources.gardener.cloud/finalize-deletion-after=<duration>`, e.g., `resources.gardener.cloud/finalize-deletion-after=1h`. After this time, `gardener-resource-manager` will forcefully delete the resource by removing their finalizers. by @rfranzke [#8584]
- `[DEVELOPER]` Change port of ssh reverse tunnel to 443 by @axel7born [#8606]
- `[USER]` Machine scale-up delay for new pods can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.newPodScaleupDelay` in the `Shoot` API . by @aaronfern [#8590]
- `[USER]` Concurrent empty machines bulk deletion can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` in the `Shoot` API . by @aaronfern [#8590]
## 🐛 Bug Fixes

- `[DEVELOPER]` Use cgroupv2 fix for local-setup on macOS too. by @oliver-goetz [#8633]
## 🏃 Others

- `[DEVELOPER]` Gardener base image is updated to `gcr.io/distroless/static-debian12:nonroot`. by @oliver-goetz [#8628]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @dimityrmirchev [#8644]
- `[DEPENDENCY]` The skaffold version is updated from v2.7.0 to v2.8.0. by @dimitar-kostadinov [#8634]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @dimityrmirchev [#8650]
- `[OPERATOR]` Kubernetes feature gate `UnauthenticatedHTTP2DOSMitigation` is considered valid for versions >= `1.25`. by @gardener-ci-robot [#8670]
- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @nickytd [#8655]
- `[OPERATOR]` The following Golang dependencies have been updated:  
  - `k8s.io/*` from `v0.28.2` to `v0.28.3`  
  - `sigs.k8s.io/controller-runtime` from `v0.16.2` to `v0.16.3` by @gardener-ci-robot [#8677]
## 📖 Documentation

- `[USER]` Added an example for `AdminKubeconfigRequest` via the Python Kubernetes client. by @Shegox [#8651]
# [gardener/ext-authz-server]

## ✨ New Features

- `[USER]` Update golang 1.20.4 -> 1.21.3 by @axel7born [gardener/ext-authz-server#23]
# [gardener/apiserver-proxy]

## 🏃 Others

- `[OPERATOR]` Remove unneeded Monitor function from iptables implementation  by @axel7born [gardener/apiserver-proxy#54]
- `[OPERATOR]` Update golang image in verify step to 1.21.3. by @DockToFuture [gardener/apiserver-proxy#56]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Update alpine base image version to 3.18.4. by @shreyas-s-rao [gardener/etcd-backup-restore#666]

## Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.82.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.82.0`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.82.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.82.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.82.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.82.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.82.0`


</details>
