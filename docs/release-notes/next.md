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
