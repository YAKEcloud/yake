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
