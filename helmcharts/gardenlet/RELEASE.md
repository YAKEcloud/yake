# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[USER]` Update etcd-custom-image to `v3.4.26-2`. by @shreyas-s-rao [gardener/etcd-druid#656]
- `[OPERATOR]` Etcd druid will now not support `policy/v1beta1` for `PodDisruptionBudget`s and will only use `policy/v1` for `PodDisruptionBudget`s by @aaronfern [gardener/etcd-druid#681]
## 📰 Noteworthy

- `[OPERATOR]` `custodian-sync-period` value is set to `15s` in the Helm chart for etcd-druid. by @shreyas-s-rao [gardener/etcd-druid#688]
- `[OPERATOR]` Add new flag `metrics-scrape-wait-duration` for compaction controller to set a wait duration at the end of every compaction job, to allow for metrics to be scraped by a Prometheus instance. by @abdasgupta [gardener/etcd-druid#686]
- `[OPERATOR]` Etcd snapshot compaction jobs will now be named `<etcd-name>-compactor` for better readability for human operators. by @abdasgupta [gardener/etcd-druid#672]
## ✨ New Features

- `[OPERATOR]` Introduce `Spec.Backup.DeltaSnapshotRetentionPeriod` in the `Etcd` resource to allow configuring retention period for delta snapshots. by @seshachalam-yv [gardener/etcd-druid#651]
- `[DEVELOPER]` Add support for `Local` provider for e2e tests. by @shreyas-s-rao [gardener/etcd-druid#668]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing incorrect volume mount path for `Etcd`s and `EtcdCopyBackupsTask`s using `Local` snapshot storage provider while using distroless etcd-backup-restore image `v0.25.x` has been resolved. by @aaronfern [gardener/etcd-druid#662]
- `[OPERATOR]` Custodian controller no longer watches leases owned by the etcd resources, thus reducing frequency of etcd status updates and now honouring `custodian-sync-period` value. by @shreyas-s-rao [gardener/etcd-druid#688]
- `[OPERATOR]` Resolved an issue where the Custodian Controller was not updating the `Replicas` field in the `etcd` status to reflect the `CurrentReplicas` from the StatefulSet status. This fix ensures consistent behavior with the `etcd` Controller in Druid. by @seshachalam-yv [gardener/etcd-druid#701]
- `[OPERATOR]` A bug causing `EtcdCopyBackupsTask` jobs to fail to create temp snapshot directory while using distroless etcd-backup-restore image `v0.25.x` has been resolved. by @aaronfern [gardener/etcd-druid#662]
## 🏃 Others

- `[OPERATOR]` Upgraded `etcd-backup-restore` from `v0.24.3` to `v0.24.6` for `etcd-custom-image`, and from `v0.25.1` to `v0.26.0` for `etcd-wrapper` by @gardener-robot-ci-3 [gardener/etcd-druid#687]
- `[OPERATOR]` All default images are now present in `images.yaml` by @aaronfern [gardener/etcd-druid#673]
## 📖 Documentation

- `[DEVELOPER]` Introduce DEPs (Druid Enhancement Proposals) for proposing large design changes in etcd-druid. by @shreyas-s-rao [gardener/etcd-druid#659]
- `[OPERATOR]` Introduce DEP-04 [EtcdMember Custom Resource](https://github.com/gardener/etcd-druid/blob/master/docs/proposals/04-etcd-member-custom-resource.md). by @shreyas-s-rao [gardener/etcd-druid#658]
# [gardener/etcd-backup-restore]

## 📰 Noteworthy

- `[USER]` Introduce flag `metrics-scrape-wait-duration` to `etcdbrctl compact` command, that specifies a wait duration at the end of a snapshot compaction, to allow Prometheus to scrape metrics related to compaction before the `etcdbrctl` process exits. by @abdasgupta [gardener/etcd-backup-restore#667]
- `[OPERATOR]` Etcd-backup-restore now uses the user home directory to create files. by @aaronfern [gardener/etcd-backup-restore#637]
- `[OPERATOR]` Etcd-backup-restore now uses a distroless image as its base image. It is no longer compatible with [etcd-custom-image](https://github.com/gardener/etcd-custom-image), and must be used with [etcd-wrapper](https://github.com/gardener/etcd-wrapper) instead.  by @aaronfern [gardener/etcd-backup-restore#637]
## 🏃 Others

- `[OPERATOR]` Upgraded Ginkgo v1 to v2 and updated other dependencies by @seshachalam-yv [gardener/etcd-backup-restore#647]
- `[OPERATOR]` While scaling up a non-HA etcd cluster to HA skipping the scale-up checks for first member of etcd cluster as first member can never be a part of scale-up scenarios. by @ishan16696 [gardener/etcd-backup-restore#649]
- `[OPERATOR]` Bump alpine base version for Docker build to `3.18.2`. by @shreyas-s-rao [gardener/etcd-backup-restore#638]
- `[OPERATOR]` Backup-restore waits for its etcd to be ready before attempting to update peerUrl by @aaronfern [gardener/etcd-backup-restore#628]
- `[OPERATOR]` Introduced `delta-snapshot-retention-period` CLI flag to extend the configurable retention period for delta snapshots in `etcd-backup-restore`, enhancing flexibility for backup retention. by @seshachalam-yv [gardener/etcd-backup-restore#640]
- `[OPERATOR]` Revendors the bbolt from `v1.3.6` to `v1.3.7` by @ishan16696 [gardener/etcd-backup-restore#659]
- `[DEVELOPER]` Add CVE categorization for etcd-backup-restore. by @shreyas-s-rao [gardener/etcd-backup-restore#644]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Force drain and delete volume attachments for nodes un-healthy due to `ReadOnlyFileSystem` and `NotReady` for too long by @elankath [gardener/machine-controller-manager#839]
- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @rishabh-11 [gardener/machine-controller-manager#833]
- `[OPERATOR]` An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed by @acumino [gardener/machine-controller-manager#814]
- `[USER]` An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. by @rishabh-11 [gardener/machine-controller-manager#821]
## 🏃 Others

- `[DEVELOPER]` status.Status now captures underline cause, allowing consumers to introspect the error returned by the provider. WrapError() function could be used to wrap the provider error by @unmarshall [gardener/machine-controller-manager#842]
- `[DEVELOPER]` A new make target is introduced to add license headers. by @unmarshall [gardener/machine-controller-manager#845]
- `[DEVELOPER]` Bump `k8s.io/*` deps to v0.27.2 by @afritzler [gardener/machine-controller-manager#820]
- `[DEVELOPER]` Removed dead metrics code and refactored the remaining metrics code by @himanshu-kun [gardener/machine-controller-manager#823]
- `[OPERATOR]` New metrics introduced:   
  - api_request_duration_seconds -> tracks time taken for successful invocation of provider APIs. This metric can be filtered by provider and service.  
  - driver_request_duration_seconds -> tracks total time taken to successfully complete driver method invocation. This metric can be filtered by provider and operation.  
  - driver_requests_failed_total -> records total number of failed driver API requests. This metric can be filtered by provider, operations and error_code. by @unmarshall [gardener/machine-controller-manager#842]
- `[OPERATOR]` Updated to go v1.20.5 by @rishabh-11 [gardener/machine-controller-manager#827]
- `[OPERATOR]` Added a new metric that will allow to get the number of stale (due to unhealthiness) machines  that are getting terminated by @jguipi [gardener/machine-controller-manager#808]
- `[OPERATOR]` Added `errorCode` field in the `LastOperation` struct. This should be implemented only for the `CreateMachine` call in the `triggerCreationFlow`. This field will be utilized by Cluster autoscaler to do early backoff  by @rishabh-11 [gardener/machine-controller-manager#851]
- `[OPERATOR]` Makefile targets have changed: Introduced gardener-setup, gardener-restore, gardener-local-mcm-up, non-gardener-setup, non-gardener-restore,  non-gardener-local-mcm-up. Users can also directly use the scripts which are used by these makefile targets. by @unmarshall [gardener/machine-controller-manager#852]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` Extensions have to implement the `ForceDelete` function in the actuator with the logic of forcefully deleting all the resources deployed by them. by @shafeeqes [#8414]
- `[DEPENDENCY]` The `extensions/pkg/controller.Use{TokenRequestor,ServiceAccountTokenVolumeProjection}` functions have been removed since they always return `true`. by @rfranzke [#8582]
- `[OPERATOR]` ⚠️ Gardener does no longer support garden, seed, or shoot clusters with Kubernetes versions < 1.24. Make sure to upgrade all existing clusters before upgrading to this Gardener version. by @shafeeqes [#8487]
- `[DEVELOPER]` The `pkg/utils/gardener.IntStrPtrFromInt` function has been renamed to `IntStrPtrFromInt32` since `intstr.FromInt` is deprecated. by @rfranzke [#8579]
- `[USER]` The `alpha.kube-apiserver.scaling.shoot.gardener.cloud/class` annotation on `Shoot`s has no effect anymore and should be removed. by @rfranzke [#8526]
## 📰 Noteworthy

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @MrBatschner [#8524]
- `[OPERATOR]` The `MachineControllerManagerDeployment` has been promoted to beta and is now enabled by default. Make sure that all registered provider extensions support this feature gate before upgrading to this version of Gardener. by @rfranzke [#8526]
- `[OPERATOR]` The `DisableScalingClassesForShoots` feature gates has been promoted to GA (and is now always enabled). by @rfranzke [#8526]
## ✨ New Features

- `[USER]` The `gardener-scheduler` now populates scheduling failure reasons to the `Shoot`'s `.status.lastOperation.description` field. by @rfranzke [#8527]
- `[USER]` When the `ShootForceDeletion` featuregate in the apiserver is turned on, users will be able to force-delete the Shoot. You **MUST** ensure that all the resources created in the IaaS account are cleaned up to prevent orphaned resources. Gardener will **NOT** delete any resources in the Shoot cloud-provider account. See [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion) for more details. by @shafeeqes [#8414]
- `[USER]` Multiple expanders for `cluster-autoscaler` can now be specified in the `Shoot` API via the `.spec.kubernetes.clusterAutoscaler.expander` field. by @aaronfern [#8573]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @plkokanov [#8568]
- `[USER]`  Fix an issue, where DNS lookups for non-existing pods of a StatefulSet yielded one of the existing pods even when it should not have.  by @axel7born [#8544]
- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @rfranzke [#8577]
- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @acumino [#8569]
## 🏃 Others

- `[OPERATOR]` The shoot namespace in seeds is redeployed during the shoot migration flow to update the zones in use. by @plkokanov [#8564]
- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.0`. by @shafeeqes [#8558]
- `[OPERATOR]` Add an alert for VPNHAShootNoPods when shoot in HA (high availability) mode. by @tedteng [#8506]
- `[USER]` Gardener refined the scope of the problematic webhook matcher for `endpoint` objects. Earlier, shoot clusters were assigned a constraint reporting a problem with a `failurePolocy: Fail` webhook acting on these objects. Now, only `endpoint`s in the `kube-system` and `defaults` namespaces are considered for this check. by @acumino [#8521]
# [gardener/autoscaler]

## ✨ New Features

- `[DEVELOPER]` unit tests framework introduced to test implemented methods of `Cloudprovider` and `Nodegroup` interface by @rishabh-11 [gardener/autoscaler#215]
- `[USER]` Gardener autoscaler now backs-off early from a node-group (i.e. machinedeployment) in case of `ResourceExhausted` error. Refer docs at `https://github.com/gardener/autoscaler/blob/machine-controller-manager-provider/cluster-autoscaler/FAQ.md#when-does-autoscaler-backs-off-early-from-a-node-group` for details. by @himanshu-kun [gardener/autoscaler#253]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug where MCM removed a machine other than the one , CA wanted , is resolved. by @rishabh-11 [gardener/autoscaler#215]
## 🏃 Others

- `[OPERATOR]` Initial implementation for `Refresh()` method of `CloudProvider` interface done by @rishabh-11 [gardener/autoscaler#215]
- `[OPERATOR]` `machinepriority.machine.sapcloud.io` annotation on machine is now reset to 3 by autoscaler if the corresponding node doesn't have `ToBeDeletedByClusterAutoscaler` taint by @rishabh-11 [gardener/autoscaler#215]
# [gardener/etcd-custom-image]

## 📰 Noteworthy

- `[OPERATOR]` Update alpine base image version to 3.18.3. by @shreyas-s-rao [gardener/etcd-custom-image#40]