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
