---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.15.10</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` The `rfc2136` provider for authorive DNS servers supporting DNS Update [RFC2136](https://datatracker.ietf.org/doc/html/rfc2136) has been added. by @MartinWeindel [#331]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix reading IPv6 records for azure-dns and azure-private-dns providers. by @MartinWeindel [#330]
## 🏃 Others

- `[USER]` 3072 bit RSA keys are now used in order to generate TLS certificates. by @dimityrmirchev [#326]
- `[OPERATOR]` Bumps golang from 1.21.2 to 1.21.3. by @dependabot[bot] [#324]

## Docker Images
dns-controller-manager: `eu.gcr.io/gardener-project/dns-controller-manager:v0.15.10`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.40.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## ✨ New Features

- `[USER]` `shoot-dns-service` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @dependabot[bot] [#255]
## 🏃 Others

- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.80.1 to 1.82.1. by @dependabot[bot] [#255]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.1 to 1.83.0. by @dependabot[bot] [#257]
# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` The `rfc2136` provider for authorive DNS servers supporting DNS Update [RFC2136](https://datatracker.ietf.org/doc/html/rfc2136) has been added. by @MartinWeindel [gardener/external-dns-management#331]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix reading IPv6 records for azure-dns and azure-private-dns providers. by @MartinWeindel [gardener/external-dns-management#330]
## 🏃 Others

- `[USER]` 3072 bit RSA keys are now used in order to generate TLS certificates. by @dimityrmirchev [gardener/external-dns-management#326]
- `[OPERATOR]` Bumps golang from 1.21.2 to 1.21.3. by @dependabot[bot] [gardener/external-dns-management#324]

## Docker Images
gardener-extension-admission-shoot-dns-service: `eu.gcr.io/gardener-project/gardener/extensions/admission-shoot-dns-service:v1.40.0`
gardener-extension-shoot-dns-service: `eu.gcr.io/gardener-project/gardener/extensions/shoot-dns-service:v1.40.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.49.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-aws` no longer supports Shoots or Seeds with Кubernetes version < 1.24. by @shafeeqes [#802]
## 📰 Noteworthy

- `[DEVELOPER]` Remove dependency to specific calico and cilium versions. by @axel7born [#807]
## ✨ New Features

- `[USER]` `provider-aws` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @shafeeqes [#812]
- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.28. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.28.md) before upgrading to 1.28.  by @oliver-goetz [#813]
## 🏃 Others

- `[OPERATOR]` updated image aws-load-balancer-controller -> `v2.6.1` by @kon-angelo [#810]
- `[OPERATOR]` Add readiness check for snapshot validation webhook. by @kon-angelo [#819]
- `[OPERATOR]` updated image aws-ebs-csi-driver -> `v1.23.0` by @kon-angelo [#810]
- `[OPERATOR]` Update external-snapshotter to v6.3.1 by @bd3lage [#817]
- `[OPERATOR]` updated image csi-attacher -> `v4.4.0` by @kon-angelo [#810]
- `[OPERATOR]` updated image csi-provisioner -> `v3.6.0` by @kon-angelo [#810]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.5 -> v1.80.3  
  - k8s.io/* : v0.26.4 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @shafeeqes [#814]
- `[OPERATOR]` The registry of the aws-ebs-csi-driver image is switched from ECR (`public.ecr.aws`) to `registry.k8s.io` because the ECR does not support image pulls over IPv6. by @DockToFuture [#820]
- `[OPERATOR]` updated image csi-resizer -> `v1.9.0` by @kon-angelo [#810]
- `[OPERATOR]` updated image livenessprobe -> `v2.11.0` by @kon-angelo [#810]
- `[OPERATOR]` The `aws-load-balancer-controller` deployment now uses an AWS credentials file for authentication. by @AleksandarSavchev [#804]
- `[DEVELOPER]` All chart deployments are now using `embed.FS` instead of the filesystem. by @kon-angelo [#809]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed by @acumino [gardener/machine-controller-manager#814]
- `[OPERATOR]` Force drain and delete volume attachments for nodes un-healthy due to `ReadOnlyFileSystem` and `NotReady` for too long by @elankath [gardener/machine-controller-manager#839]
- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @rishabh-11 [gardener/machine-controller-manager#833]
- `[USER]` An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. by @rishabh-11 [gardener/machine-controller-manager#821]
## 🏃 Others

- `[OPERATOR]` Makefile targets have changed: Introduced gardener-setup, gardener-restore, gardener-local-mcm-up, non-gardener-setup, non-gardener-restore,  non-gardener-local-mcm-up. Users can also directly use the scripts which are used by these makefile targets. by @unmarshall [gardener/machine-controller-manager#852]
- `[OPERATOR]` Updated to go v1.20.5 by @rishabh-11 [gardener/machine-controller-manager#827]
- `[OPERATOR]` New metrics introduced:   
  - api_request_duration_seconds -> tracks time taken for successful invocation of provider APIs. This metric can be filtered by provider and service.  
  - driver_request_duration_seconds -> tracks total time taken to successfully complete driver method invocation. This metric can be filtered by provider and operation.  
  - driver_requests_failed_total -> records total number of failed driver API requests. This metric can be filtered by provider, operations and error_code. by @unmarshall [gardener/machine-controller-manager#842]
- `[OPERATOR]` Added `errorCode` field in the `LastOperation` struct. This should be implemented only for the `CreateMachine` call in the `triggerCreationFlow`. This field will be utilized by Cluster autoscaler to do early backoff  by @rishabh-11 [gardener/machine-controller-manager#851]
- `[OPERATOR]` Added a new metric that will allow to get the number of stale (due to unhealthiness) machines  that are getting terminated by @jguipi [gardener/machine-controller-manager#808]
- `[DEVELOPER]` status.Status now captures underline cause, allowing consumers to introspect the error returned by the provider. WrapError() function could be used to wrap the provider error by @unmarshall [gardener/machine-controller-manager#842]
- `[DEVELOPER]` Bump `k8s.io/*` deps to v0.27.2 by @afritzler [gardener/machine-controller-manager#820]
- `[DEVELOPER]` A new make target is introduced to add license headers. by @unmarshall [gardener/machine-controller-manager#845]
- `[DEVELOPER]` Removed dead metrics code and refactored the remaining metrics code by @himanshu-kun [gardener/machine-controller-manager#823]
# [gardener/machine-controller-manager-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` Logs for confirming eventual consistency are exposed. This helps to know if such check was successful or not. by @himanshu-kun [gardener/machine-controller-manager-provider-aws#134]
## 🏃 Others

- `[OPERATOR]` MCM status code `ResourceExhausted` is now utilized in mcm-provider-aws. by @rishabh-11 [gardener/machine-controller-manager-provider-aws#129]

## Docker Images
gardener-extension-admission-aws: `eu.gcr.io/gardener-project/gardener/extensions/admission-aws:v1.49.0`
gardener-extension-provider-aws: `eu.gcr.io/gardener-project/gardener/extensions/provider-aws:v1.49.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.33.0</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Force drain and delete volume attachments for nodes un-healthy due to `ReadOnlyFileSystem` and `NotReady` for too long by @elankath [gardener/machine-controller-manager#839]
- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @rishabh-11 [gardener/machine-controller-manager#833]
- `[OPERATOR]` An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed by @acumino [gardener/machine-controller-manager#814]
- `[USER]` An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. by @rishabh-11 [gardener/machine-controller-manager#821]
## 🏃 Others

- `[OPERATOR]` New metrics introduced:   
  - api_request_duration_seconds -> tracks time taken for successful invocation of provider APIs. This metric can be filtered by provider and service.  
  - driver_request_duration_seconds -> tracks total time taken to successfully complete driver method invocation. This metric can be filtered by provider and operation.  
  - driver_requests_failed_total -> records total number of failed driver API requests. This metric can be filtered by provider, operations and error_code. by @unmarshall [gardener/machine-controller-manager#842]
- `[OPERATOR]` Makefile targets have changed: Introduced gardener-setup, gardener-restore, gardener-local-mcm-up, non-gardener-setup, non-gardener-restore,  non-gardener-local-mcm-up. Users can also directly use the scripts which are used by these makefile targets. by @unmarshall [gardener/machine-controller-manager#852]
- `[OPERATOR]` Added `errorCode` field in the `LastOperation` struct. This should be implemented only for the `CreateMachine` call in the `triggerCreationFlow`. This field will be utilized by Cluster autoscaler to do early backoff  by @rishabh-11 [gardener/machine-controller-manager#851]
- `[OPERATOR]` Updated to go v1.20.5 by @rishabh-11 [gardener/machine-controller-manager#827]
- `[OPERATOR]` Added a new metric that will allow to get the number of stale (due to unhealthiness) machines  that are getting terminated by @jguipi [gardener/machine-controller-manager#808]
- `[DEVELOPER]` Bump `k8s.io/*` deps to v0.27.2 by @afritzler [gardener/machine-controller-manager#820]
- `[DEVELOPER]` status.Status now captures underline cause, allowing consumers to introspect the error returned by the provider. WrapError() function could be used to wrap the provider error by @unmarshall [gardener/machine-controller-manager#842]
- `[DEVELOPER]` Removed dead metrics code and refactored the remaining metrics code by @himanshu-kun [gardener/machine-controller-manager#823]
- `[DEVELOPER]` A new make target is introduced to add license headers. by @unmarshall [gardener/machine-controller-manager#845]
# [gardener/machine-controller-manager-provider-gcp]

## 🏃 Others

- `[USER]` MCM status code `ResourceExhausted` is now utilized in mcm-provider-gcp. Currently the `compute API` errors covered are:  
  - quota exceeded in zone  
  - insufficient resource in zone  
  - unavailable machinetype in zone by @himanshu-kun [gardener/machine-controller-manager-provider-gcp#92]
# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-gcp` no longer supports Shoots or Seeds with Кubernetes version < 1.24. by @shafeeqes [#648]
## 📰 Noteworthy

- `[DEVELOPER]` Remove dependency to specific calico and cilium versions. by @axel7born [#651]
## ✨ New Features

- `[USER]` The provider-gcp extension does now support shoot clusters with Kubernetes version 1.28. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.28.md) before upgrading to 1.28.  by @oliver-goetz [#652]
- `[USER]` `provider-gcp` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion) for more details.).  by @shafeeqes [#650]
## 🏃 Others

- `[OPERATOR]` updated image csi-resizer -> `v1.9.1` by @kon-angelo [#656]
- `[OPERATOR]` Add readiness check for snapshot-validation-webhook by @kon-angelo [#657]
- `[OPERATOR]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.81.0`->`v1.81.6`  
  - `k8s.io/*`: `v0.28.2`-> `v0.28.3`  
  - `sigs.k8s.io/controller-runtime`: `v0.16.2`-> `v0.16.3` by @shafeeqes [#659]
- `[OPERATOR]` updated image csi-provisioner -> `v3.6.1` by @kon-angelo [#656]
- `[OPERATOR]` updated image snapshot-controller -> `v6.3.1` by @kon-angelo [#656]
- `[OPERATOR]` updated image livenessprobe -> `v2.11.0` by @kon-angelo [#656]
- `[OPERATOR]` updated image registrar -> `v2.9.0` by @kon-angelo [#656]
- `[OPERATOR]` The following image is updated:  
  - registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver: v1.9.7 -> v1.9.9 by @ialidzhikov [#640]
- `[OPERATOR]` updated image gcp-compute-persistent-disk-csi-driver -> `v1.11.1` by @MartinWeindel [#658]
- `[OPERATOR]` The following golang dependencies have been upgraded :  
  - `gardener/gardener` to `v1.80.3`  
  - `k8s.io/*` to `v0.27.5`  
  - `sigs.k8s.io/controller-runtime` to `v0.16.2` by @ary1992 [#646]
- `[OPERATOR]` updated image gcp-compute-persistent-disk-csi-driver -> `v1.12.2` by @kon-angelo [#656]
- `[OPERATOR]` updated image csi-attacher -> `v4.4.1` by @kon-angelo [#656]

## Docker Images
gardener-extension-admission-gcp: `eu.gcr.io/gardener-project/gardener/extensions/admission-gcp:v1.33.0`
gardener-extension-provider-gcp: `eu.gcr.io/gardener-project/gardener/extensions/provider-gcp:v1.33.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.50.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.81.0`->`v1.81.6`  
  - `k8s.io/*`: `v0.28.2`-> `v0.28.3`  
  - `sigs.k8s.io/controller-runtime`: `v0.16.2`-> `v0.16.3` by @shafeeqes [#823]

## Docker Images
gardener-extension-admission-aws: `eu.gcr.io/gardener-project/gardener/extensions/admission-aws:v1.50.0`
gardener-extension-provider-aws: `eu.gcr.io/gardener-project/gardener/extensions/provider-aws:v1.50.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.39.1</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Force drain and delete volume attachments for nodes un-healthy due to `ReadOnlyFileSystem` and `NotReady` for too long by @elankath [gardener/machine-controller-manager#839]
- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @rishabh-11 [gardener/machine-controller-manager#833]
- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @gardener-robot-ci-2 [gardener/machine-controller-manager#866]
- `[OPERATOR]` An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed by @acumino [gardener/machine-controller-manager#814]
- `[USER]` An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. by @rishabh-11 [gardener/machine-controller-manager#821]
## 🏃 Others

- `[DEVELOPER]` Bump `k8s.io/*` deps to v0.27.2 by @afritzler [gardener/machine-controller-manager#820]
- `[DEVELOPER]` A new make target is introduced to add license headers. by @unmarshall [gardener/machine-controller-manager#845]
- `[DEVELOPER]` status.Status now captures underline cause, allowing consumers to introspect the error returned by the provider. WrapError() function could be used to wrap the provider error by @unmarshall [gardener/machine-controller-manager#842]
- `[DEVELOPER]` Removed dead metrics code and refactored the remaining metrics code by @himanshu-kun [gardener/machine-controller-manager#823]
- `[OPERATOR]` Added `errorCode` field in the `LastOperation` struct. This should be implemented only for the `CreateMachine` call in the `triggerCreationFlow`. This field will be utilized by Cluster autoscaler to do early backoff  by @rishabh-11 [gardener/machine-controller-manager#851]
- `[OPERATOR]` Makefile targets have changed: Introduced gardener-setup, gardener-restore, gardener-local-mcm-up, non-gardener-setup, non-gardener-restore, non-gardener-local-mcm-up. Users can also directly use the scripts which are used by these makefile targets. by @unmarshall [gardener/machine-controller-manager#852]
- `[OPERATOR]` Added a new metric that will allow to get the number of stale (due to unhealthiness) machines that are getting terminated by @jguipi [gardener/machine-controller-manager#808]
- `[OPERATOR]` New metrics introduced:   
  - api_request_duration_seconds -> tracks time taken for successful invocation of provider APIs. This metric can be filtered by provider and service.  
  - driver_request_duration_seconds -> tracks total time taken to successfully complete driver method invocation. This metric can be filtered by provider and operation.  
  - driver_requests_failed_total -> records total number of failed driver API requests. This metric can be filtered by provider, operations and error_code. by @unmarshall [gardener/machine-controller-manager#842]
- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @gardener-robot-ci-2 [gardener/machine-controller-manager#866]
- `[OPERATOR]` Updated to go v1.20.5 by @rishabh-11 [gardener/machine-controller-manager#827]

## Docker Images
gardener-extension-admission-azure: `eu.gcr.io/gardener-project/gardener/extensions/admission-azure:v1.39.1`
gardener-extension-provider-azure: `eu.gcr.io/gardener-project/gardener/extensions/provider-azure:v1.39.1`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.49.1</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## 🏃 Others

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @kevin-lacoo [#663]
- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @kevin-lacoo [#663]

## Docker Images
gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.49.1`
gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.49.1`


</details>

<details>
<summary><b>Update provider-aws to <code>1.50.1</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @gardener-robot-ci-2 [gardener/machine-controller-manager#866]
## 🏃 Others

- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @gardener-robot-ci-2 [gardener/machine-controller-manager#866]

## Docker Images
gardener-extension-admission-aws: `eu.gcr.io/gardener-project/gardener/extensions/admission-aws:v1.50.1`
gardener-extension-provider-aws: `eu.gcr.io/gardener-project/gardener/extensions/provider-aws:v1.50.1`


</details>

<details>
<summary><b>Update provider-azure to <code>1.39.2</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[USER]` Fix failing validation  when overlay config is empty. by @axel7born [#753]

## Docker Images
gardener-extension-admission-azure: `eu.gcr.io/gardener-project/gardener/extensions/admission-azure:v1.39.2`
gardener-extension-provider-azure: `eu.gcr.io/gardener-project/gardener/extensions/provider-azure:v1.39.2`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.33.1</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @gardener-robot-ci-3 [gardener/machine-controller-manager#866]
## 🏃 Others

- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @gardener-robot-ci-3 [gardener/machine-controller-manager#866]

## Docker Images
gardener-extension-admission-gcp: `eu.gcr.io/gardener-project/gardener/extensions/admission-gcp:v1.33.1`
gardener-extension-provider-gcp: `eu.gcr.io/gardener-project/gardener/extensions/provider-gcp:v1.33.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.83.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` machine-controller-manager RBAC in the Shoot cluster does now allow MCM to delete volumeattachments. MCM provider extensions vendoring machine-controller-manager >= v0.50.0 (ref https://github.com/gardener/machine-controller-manager/pull/839) need to delete volumeattachments. by @ialidzhikov [#8774]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.83.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.83.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.83.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.83.1`
node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.83.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.83.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.83.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.83.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.83.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` machine-controller-manager RBAC in the Shoot cluster does now allow MCM to delete volumeattachments. MCM provider extensions vendoring machine-controller-manager >= v0.50.0 (ref https://github.com/gardener/machine-controller-manager/pull/839) need to delete volumeattachments. by @ialidzhikov [#8774]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.83.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.83.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.83.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.83.1`
node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.83.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.83.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.83.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.83.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.83.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` machine-controller-manager RBAC in the Shoot cluster does now allow MCM to delete volumeattachments. MCM provider extensions vendoring machine-controller-manager >= v0.50.0 (ref https://github.com/gardener/machine-controller-manager/pull/839) need to delete volumeattachments. by @ialidzhikov [#8774]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.83.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.83.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.83.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.83.1`
node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.83.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.83.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.83.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.83.1`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.38.2</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a crash, when a shoot that is updated has an empty overlay config.  by @axel7born [#695]

## Docker Images
gardener-extension-admission-openstack: `eu.gcr.io/gardener-project/gardener/extensions/admission-openstack:v1.38.2`
gardener-extension-provider-openstack: `eu.gcr.io/gardener-project/gardener/extensions/provider-openstack:v1.38.2`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.8</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.7...0.6.8

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.9</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.8...0.6.9

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.84.0</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @elankath [gardener/machine-controller-manager#866]
## 🏃 Others

- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @elankath [gardener/machine-controller-manager#866]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` New `Secret`s referenced in `ManagedResource`s will no longer be patched with the label `resources.gardener.cloud/garbage-collectable-reference` when the `ManagedResource` is reconciled. `Secret`s which already exist in the `ManagedResource` specification will still be patched if necessary. by @dimityrmirchev [#8788]
- `[OPERATOR]` ⚠️ The deprecated fields `spec.settings.dependencyWatchdog.endpoint` and `spec.settings.dependencyWatchdog.probe` have been removed from the Seed API. Please check your `Seed`s and remove any usage before upgrading to this Gardener version. by @himanshu-kun [#8747]
- `[USER]` A validation rule was added that forbids changing the primary DNS provider in `.spec.dns.providers` as soon as the shoot was scheduled. by @timuthy [#8761]
## 📰 Noteworthy

- `[DEVELOPER]` The `Secret` reconciler in `gardener-resource-manager` will now always remove its finalizer (if present). by @Kostov6 [#8745]
- `[DEVELOPER]` Vendoring has been removed from the project, i.e., there is no `vendor` folder anymore. by @afritzler [#8775]
## ✨ New Features

- `[OPERATOR]` The `deltaSnapshotRetentionPeriod` parameter has been introduced in the `etcdConfig` section of the `GardenletConfiguration`. This new feature allows users to configure the retention period for delta snapshots in the ETCD component. By making the delta snapshot retention period configurable, we provide a more flexible debugging experience. Delta snapshots can now be retained for a user-defined duration, offering a valuable window for reviewing changes in case of any issues.  by @seshachalam-yv [#8659]
- `[OPERATOR]` Enabled the `node-exporter`'s  [textfile collector](https://github.com/prometheus/node_exporter#textfile-collector). It will parse files matching the `*.prom` glob in the `/var/lib/node-exporter/textfile-collector` directory and load metrics from them so that they can be scraped by prometheus. by @plkokanov [#8721]
- `[OPERATOR]` Condition handling was improved for `Shoot`s of `ManagedSeed`s. Earlier, when unknown conditions were removed from seeds (e.g. maintained by third-party components), the affected condition was still present in the shoot's conditions. by @timuthy [#8736]
- `[USER]` The `kube-controller-manager` controllers are now disabled based on disabled APIs, which can be configured with `spec.kubernetes.kubeAPIServer.runtimeConfig` field in the Shoot API. All controllers are enabled by default for Shoot with workers. For workerless Shoots, some non-required APIs are disabled by default, which can be overridden by the above configuration. by @shafeeqes [#8763]
- `[DEVELOPER]` Use `ginkgolinter` instead of self baked `gomegacheck` by @afritzler [#8769]
## 🐛 Bug Fixes

- `[DEVELOPER]` A bug causing the crd generation for `druid.gardener.cloud` group to fail in extensions is now fixed. by @shafeeqes [#8789]
- `[OPERATOR]` During the `restore` phase of control plane migration, the `machine-controller-manager` is deployed with 0 replicas if it did not exist before or if it existed and was not scaled up yet. This fixes an issue that could cause the `Shoot`'s nodes to get recreated during control plane migration. by @plkokanov [#8742]
## 🏃 Others

- `[OPERATOR]` Control plane components `kube-apiserver`, `kube-controller-manager` and `kube-scheduler` now run as `nonroot` user and group `65532`. by @AleksandarSavchev [#8690]
- `[OPERATOR]` The credentials (CA) rotation has been made more robust. In some cases, the `Shoot` reconciliation stuck at `Deploying main and events etcd` when the rotation was in `Preparing` phase. by @timuthy [#8795]
- `[OPERATOR]` Control plane components `kube-apiserver`, `kube-controller-manager` and `kube-scheduler` now mount `key` files with `DefaultMode` set to `416`(`0640` permissions). by @AleksandarSavchev [#8790]
- `[OPERATOR]` Plutono is updated to v7.5.26.  
  Vali is updated to v2.2.11.  
  Kube-rbac-proxy is updated to v0.15.0. by @nickytd [#8799]
- `[OPERATOR]` The registry of the prometheus-operator image is switched from ghcr (`ghcr.io/prometheus-operator/prometheus-config-reloader`) to `quay.io` (`quay.io/prometheus-operator/prometheus-config-reloader`) because the ghcr does not support image pulls over IPv6. by @ialidzhikov [#8751]
- `[OPERATOR]` `gardener-apiserver` and `gardener-admission-controller` now mount `key` files with `DefaultMode` set to `416`(`0640` permissions). by @AleksandarSavchev [#8790]
- `[OPERATOR]` `NewClientForShoot` creates a client with a rest mapper using `LazyDiscovery`. by @acumino [#8781]
- `[OPERATOR]` Shoot control plane prometheus is now scraping kubelet volume metrics (`kubelet_volume_stats_available_bytes`, `kubelet_volume_stats_capacity_bytes` and `kubelet_volume_stats_used_bytes`) from the kube-system namespace. This allows Gardener extensions deploying PVCs to the Shoot's kube-system namespace (such as the registry-cache extension) to build alerting and plutono dashboard panels using these kubelet volume metrics. by @ialidzhikov [#8798]
- `[OPERATOR]` Prepare shared `component_descriptor` script for migration from GCR to Artifact Registry. by @ccwienk [#8755]
- `[OPERATOR]` metrics exposed by `cluster autoscaler` now scraped by `prometheus` by @aaronfern [#8750]
- `[DEVELOPER]` The component checklist is enhanced with 2 new rules for container images:  
  - Do not use container images from registries that don't support IPv6 - registries such as GHCR, ECR, MCR don't support image pulls over IPv6  
  - Do not use Shoot container images that are not multi-arch by @ialidzhikov [#8770]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.84.0`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.84.0`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.84.0`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.84.0`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.84.0`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.84.0`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.84.0`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.84.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.84.0</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @elankath [gardener/machine-controller-manager#866]
## 🏃 Others

- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @elankath [gardener/machine-controller-manager#866]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` New `Secret`s referenced in `ManagedResource`s will no longer be patched with the label `resources.gardener.cloud/garbage-collectable-reference` when the `ManagedResource` is reconciled. `Secret`s which already exist in the `ManagedResource` specification will still be patched if necessary. by @dimityrmirchev [#8788]
- `[OPERATOR]` ⚠️ The deprecated fields `spec.settings.dependencyWatchdog.endpoint` and `spec.settings.dependencyWatchdog.probe` have been removed from the Seed API. Please check your `Seed`s and remove any usage before upgrading to this Gardener version. by @himanshu-kun [#8747]
- `[USER]` A validation rule was added that forbids changing the primary DNS provider in `.spec.dns.providers` as soon as the shoot was scheduled. by @timuthy [#8761]
## 📰 Noteworthy

- `[DEVELOPER]` The `Secret` reconciler in `gardener-resource-manager` will now always remove its finalizer (if present). by @Kostov6 [#8745]
- `[DEVELOPER]` Vendoring has been removed from the project, i.e., there is no `vendor` folder anymore. by @afritzler [#8775]
## ✨ New Features

- `[OPERATOR]` The `deltaSnapshotRetentionPeriod` parameter has been introduced in the `etcdConfig` section of the `GardenletConfiguration`. This new feature allows users to configure the retention period for delta snapshots in the ETCD component. By making the delta snapshot retention period configurable, we provide a more flexible debugging experience. Delta snapshots can now be retained for a user-defined duration, offering a valuable window for reviewing changes in case of any issues.  by @seshachalam-yv [#8659]
- `[OPERATOR]` Enabled the `node-exporter`'s  [textfile collector](https://github.com/prometheus/node_exporter#textfile-collector). It will parse files matching the `*.prom` glob in the `/var/lib/node-exporter/textfile-collector` directory and load metrics from them so that they can be scraped by prometheus. by @plkokanov [#8721]
- `[OPERATOR]` Condition handling was improved for `Shoot`s of `ManagedSeed`s. Earlier, when unknown conditions were removed from seeds (e.g. maintained by third-party components), the affected condition was still present in the shoot's conditions. by @timuthy [#8736]
- `[USER]` The `kube-controller-manager` controllers are now disabled based on disabled APIs, which can be configured with `spec.kubernetes.kubeAPIServer.runtimeConfig` field in the Shoot API. All controllers are enabled by default for Shoot with workers. For workerless Shoots, some non-required APIs are disabled by default, which can be overridden by the above configuration. by @shafeeqes [#8763]
- `[DEVELOPER]` Use `ginkgolinter` instead of self baked `gomegacheck` by @afritzler [#8769]
## 🐛 Bug Fixes

- `[DEVELOPER]` A bug causing the crd generation for `druid.gardener.cloud` group to fail in extensions is now fixed. by @shafeeqes [#8789]
- `[OPERATOR]` During the `restore` phase of control plane migration, the `machine-controller-manager` is deployed with 0 replicas if it did not exist before or if it existed and was not scaled up yet. This fixes an issue that could cause the `Shoot`'s nodes to get recreated during control plane migration. by @plkokanov [#8742]
## 🏃 Others

- `[OPERATOR]` Control plane components `kube-apiserver`, `kube-controller-manager` and `kube-scheduler` now run as `nonroot` user and group `65532`. by @AleksandarSavchev [#8690]
- `[OPERATOR]` The credentials (CA) rotation has been made more robust. In some cases, the `Shoot` reconciliation stuck at `Deploying main and events etcd` when the rotation was in `Preparing` phase. by @timuthy [#8795]
- `[OPERATOR]` Control plane components `kube-apiserver`, `kube-controller-manager` and `kube-scheduler` now mount `key` files with `DefaultMode` set to `416`(`0640` permissions). by @AleksandarSavchev [#8790]
- `[OPERATOR]` Plutono is updated to v7.5.26.  
  Vali is updated to v2.2.11.  
  Kube-rbac-proxy is updated to v0.15.0. by @nickytd [#8799]
- `[OPERATOR]` The registry of the prometheus-operator image is switched from ghcr (`ghcr.io/prometheus-operator/prometheus-config-reloader`) to `quay.io` (`quay.io/prometheus-operator/prometheus-config-reloader`) because the ghcr does not support image pulls over IPv6. by @ialidzhikov [#8751]
- `[OPERATOR]` `gardener-apiserver` and `gardener-admission-controller` now mount `key` files with `DefaultMode` set to `416`(`0640` permissions). by @AleksandarSavchev [#8790]
- `[OPERATOR]` `NewClientForShoot` creates a client with a rest mapper using `LazyDiscovery`. by @acumino [#8781]
- `[OPERATOR]` Shoot control plane prometheus is now scraping kubelet volume metrics (`kubelet_volume_stats_available_bytes`, `kubelet_volume_stats_capacity_bytes` and `kubelet_volume_stats_used_bytes`) from the kube-system namespace. This allows Gardener extensions deploying PVCs to the Shoot's kube-system namespace (such as the registry-cache extension) to build alerting and plutono dashboard panels using these kubelet volume metrics. by @ialidzhikov [#8798]
- `[OPERATOR]` Prepare shared `component_descriptor` script for migration from GCR to Artifact Registry. by @ccwienk [#8755]
- `[OPERATOR]` metrics exposed by `cluster autoscaler` now scraped by `prometheus` by @aaronfern [#8750]
- `[DEVELOPER]` The component checklist is enhanced with 2 new rules for container images:  
  - Do not use container images from registries that don't support IPv6 - registries such as GHCR, ECR, MCR don't support image pulls over IPv6  
  - Do not use Shoot container images that are not multi-arch by @ialidzhikov [#8770]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.84.0`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.84.0`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.84.0`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.84.0`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.84.0`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.84.0`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.84.0`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.84.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.84.0</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @elankath [gardener/machine-controller-manager#866]
## 🏃 Others

- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @elankath [gardener/machine-controller-manager#866]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` New `Secret`s referenced in `ManagedResource`s will no longer be patched with the label `resources.gardener.cloud/garbage-collectable-reference` when the `ManagedResource` is reconciled. `Secret`s which already exist in the `ManagedResource` specification will still be patched if necessary. by @dimityrmirchev [#8788]
- `[OPERATOR]` ⚠️ The deprecated fields `spec.settings.dependencyWatchdog.endpoint` and `spec.settings.dependencyWatchdog.probe` have been removed from the Seed API. Please check your `Seed`s and remove any usage before upgrading to this Gardener version. by @himanshu-kun [#8747]
- `[USER]` A validation rule was added that forbids changing the primary DNS provider in `.spec.dns.providers` as soon as the shoot was scheduled. by @timuthy [#8761]
## 📰 Noteworthy

- `[DEVELOPER]` The `Secret` reconciler in `gardener-resource-manager` will now always remove its finalizer (if present). by @Kostov6 [#8745]
- `[DEVELOPER]` Vendoring has been removed from the project, i.e., there is no `vendor` folder anymore. by @afritzler [#8775]
## ✨ New Features

- `[OPERATOR]` The `deltaSnapshotRetentionPeriod` parameter has been introduced in the `etcdConfig` section of the `GardenletConfiguration`. This new feature allows users to configure the retention period for delta snapshots in the ETCD component. By making the delta snapshot retention period configurable, we provide a more flexible debugging experience. Delta snapshots can now be retained for a user-defined duration, offering a valuable window for reviewing changes in case of any issues.  by @seshachalam-yv [#8659]
- `[OPERATOR]` Enabled the `node-exporter`'s  [textfile collector](https://github.com/prometheus/node_exporter#textfile-collector). It will parse files matching the `*.prom` glob in the `/var/lib/node-exporter/textfile-collector` directory and load metrics from them so that they can be scraped by prometheus. by @plkokanov [#8721]
- `[OPERATOR]` Condition handling was improved for `Shoot`s of `ManagedSeed`s. Earlier, when unknown conditions were removed from seeds (e.g. maintained by third-party components), the affected condition was still present in the shoot's conditions. by @timuthy [#8736]
- `[USER]` The `kube-controller-manager` controllers are now disabled based on disabled APIs, which can be configured with `spec.kubernetes.kubeAPIServer.runtimeConfig` field in the Shoot API. All controllers are enabled by default for Shoot with workers. For workerless Shoots, some non-required APIs are disabled by default, which can be overridden by the above configuration. by @shafeeqes [#8763]
- `[DEVELOPER]` Use `ginkgolinter` instead of self baked `gomegacheck` by @afritzler [#8769]
## 🐛 Bug Fixes

- `[DEVELOPER]` A bug causing the crd generation for `druid.gardener.cloud` group to fail in extensions is now fixed. by @shafeeqes [#8789]
- `[OPERATOR]` During the `restore` phase of control plane migration, the `machine-controller-manager` is deployed with 0 replicas if it did not exist before or if it existed and was not scaled up yet. This fixes an issue that could cause the `Shoot`'s nodes to get recreated during control plane migration. by @plkokanov [#8742]
## 🏃 Others

- `[OPERATOR]` Control plane components `kube-apiserver`, `kube-controller-manager` and `kube-scheduler` now run as `nonroot` user and group `65532`. by @AleksandarSavchev [#8690]
- `[OPERATOR]` The credentials (CA) rotation has been made more robust. In some cases, the `Shoot` reconciliation stuck at `Deploying main and events etcd` when the rotation was in `Preparing` phase. by @timuthy [#8795]
- `[OPERATOR]` Control plane components `kube-apiserver`, `kube-controller-manager` and `kube-scheduler` now mount `key` files with `DefaultMode` set to `416`(`0640` permissions). by @AleksandarSavchev [#8790]
- `[OPERATOR]` Plutono is updated to v7.5.26.  
  Vali is updated to v2.2.11.  
  Kube-rbac-proxy is updated to v0.15.0. by @nickytd [#8799]
- `[OPERATOR]` The registry of the prometheus-operator image is switched from ghcr (`ghcr.io/prometheus-operator/prometheus-config-reloader`) to `quay.io` (`quay.io/prometheus-operator/prometheus-config-reloader`) because the ghcr does not support image pulls over IPv6. by @ialidzhikov [#8751]
- `[OPERATOR]` `gardener-apiserver` and `gardener-admission-controller` now mount `key` files with `DefaultMode` set to `416`(`0640` permissions). by @AleksandarSavchev [#8790]
- `[OPERATOR]` `NewClientForShoot` creates a client with a rest mapper using `LazyDiscovery`. by @acumino [#8781]
- `[OPERATOR]` Shoot control plane prometheus is now scraping kubelet volume metrics (`kubelet_volume_stats_available_bytes`, `kubelet_volume_stats_capacity_bytes` and `kubelet_volume_stats_used_bytes`) from the kube-system namespace. This allows Gardener extensions deploying PVCs to the Shoot's kube-system namespace (such as the registry-cache extension) to build alerting and plutono dashboard panels using these kubelet volume metrics. by @ialidzhikov [#8798]
- `[OPERATOR]` Prepare shared `component_descriptor` script for migration from GCR to Artifact Registry. by @ccwienk [#8755]
- `[OPERATOR]` metrics exposed by `cluster autoscaler` now scraped by `prometheus` by @aaronfern [#8750]
- `[DEVELOPER]` The component checklist is enhanced with 2 new rules for container images:  
  - Do not use container images from registries that don't support IPv6 - registries such as GHCR, ECR, MCR don't support image pulls over IPv6  
  - Do not use Shoot container images that are not multi-arch by @ialidzhikov [#8770]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.84.0`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.84.0`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.84.0`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.84.0`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.84.0`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.84.0`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.84.0`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.84.0`


</details>
