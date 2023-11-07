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
