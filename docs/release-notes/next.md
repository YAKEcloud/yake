---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update os-ubuntu to <code>1.23.0</code></b></summary>

# [gardener/gardener-extension-os-ubuntu]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-os-ubuntu` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#82]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8551]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8551]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1`

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8551]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @gardener-ci-robot [#8580]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @gardener-ci-robot [#8580]

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @gardener-ci-robot [#8580]

</details>

<details>
<summary><b>Update provider-openstack to <code>1.37.0</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @rishabh-11 [gardener/machine-controller-manager#833]
- `[OPERATOR]` Force drain and delete volume attachments for nodes un-healthy due to `ReadOnlyFileSystem` and `NotReady` for too long by @elankath [gardener/machine-controller-manager#839]
- `[OPERATOR]` An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed by @acumino [gardener/machine-controller-manager#814]
- `[USER]` An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. by @rishabh-11 [gardener/machine-controller-manager#821]
## 🏃 Others

- `[DEVELOPER]` status.Status now captures underline cause, allowing consumers to introspect the error returned by the provider. WrapError() function could be used to wrap the provider error by @unmarshall [gardener/machine-controller-manager#842]
- `[DEVELOPER]` Removed dead metrics code and refactored the remaining metrics code by @himanshu-kun [gardener/machine-controller-manager#823]
- `[DEVELOPER]` A new make target is introduced to add license headers. by @unmarshall [gardener/machine-controller-manager#845]
- `[DEVELOPER]` Bump `k8s.io/*` deps to v0.27.2 by @afritzler [gardener/machine-controller-manager#820]
- `[OPERATOR]` Added a new metric that will allow to get the number of stale (due to unhealthiness) machines  that are getting terminated by @jguipi [gardener/machine-controller-manager#808]
- `[OPERATOR]` Updated to go v1.20.5 by @rishabh-11 [gardener/machine-controller-manager#827]
- `[OPERATOR]` Makefile targets have changed: Introduced gardener-setup, gardener-restore, gardener-local-mcm-up, non-gardener-setup, non-gardener-restore,  non-gardener-local-mcm-up. Users can also directly use the scripts which are used by these makefile targets. by @unmarshall [gardener/machine-controller-manager#852]
- `[OPERATOR]` Added `errorCode` field in the `LastOperation` struct. This should be implemented only for the `CreateMachine` call in the `triggerCreationFlow`. This field will be utilized by Cluster autoscaler to do early backoff  by @rishabh-11 [gardener/machine-controller-manager#851]
- `[OPERATOR]` New metrics introduced:   
  - api_request_duration_seconds -> tracks time taken for successful invocation of provider APIs. This metric can be filtered by provider and service.  
  - driver_request_duration_seconds -> tracks total time taken to successfully complete driver method invocation. This metric can be filtered by provider and operation.  
  - driver_requests_failed_total -> records total number of failed driver API requests. This metric can be filtered by provider, operations and error_code. by @unmarshall [gardener/machine-controller-manager#842]
# [gardener/gardener-extension-provider-openstack]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-openstack` no longer supports Shoots or Seeds with Кubernetes version < 1.24. by @shafeeqes [#670]
## 🏃 Others

- `[OPERATOR]` Enable propagating pod routes to nodes without overlay network by @ScheererJ [#654]
- `[OPERATOR]` updated image csi-attacher -> `v4.4.0` by @kon-angelo [#675]
- `[OPERATOR]` updated image manila-csi-plugin `v1.27.1`-> `v1.27.2` by @kon-angelo [#675]
- `[OPERATOR]` updated image snapshot-controller -> `v6.3.0` by @kon-angelo [#675]
- `[OPERATOR]` updated image livenessprobe -> `v2.11.0` by @kon-angelo [#675]
- `[OPERATOR]` Add manila topology labels to machines. This enables scaling from 0 for pods depending on manila volumes. by @kon-angelo [#674]
- `[OPERATOR]` updated image cinder-csi-plugin `v1.27.1`-> `v1.27.2` by @kon-angelo [#675]
- `[OPERATOR]` updated image cloud-provider-openstack `v1.27.1`-> `v1.27.2` by @kon-angelo [#675]
- `[OPERATOR]` updated image csi-provisioner -> `v3.6.0` by @kon-angelo [#675]
- `[OPERATOR]` updated image csi-resizer -> `v1.9.0` by @kon-angelo [#675]
- `[DEVELOPER]` Added description to openstack security group rules. by @nschad [#666]
# [gardener/machine-controller-manager-provider-openstack]

## 🏃 Others

- `[USER]` Vendor gardener `v1.79.0` by @kon-angelo [gardener/machine-controller-manager-provider-openstack#100]
- `[USER]` `ResourceExhausted` error code is returned when no valid host is found in the zone  by @rishabh-11 [gardener/machine-controller-manager-provider-openstack#97]
- `[DEPENDENCY]` The following dependency is updated:-  
  github.com/gardener/machine-controller-manager v0.49.1 -> v0.50.0 by @rishabh-11 [gardener/machine-controller-manager-provider-openstack#98]

</details>

<details>
<summary><b>Update cert-management to <code>0.11.2</code></b></summary>

# [gardener/cert-management]

## 🏃 Others

- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [#142]
- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [#142]

</details>

<details>
<summary><b>Update external-dns-management to <code>0.15.9</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` Creating a `DNSEntry` for the base domain of a hosted zone is now allowed for all providers but `azure-dns` and `azure-private-dns`. by @MartinWeindel [#316]
## 🏃 Others

- `[OPERATOR]` Update AWS canonical hosted zones from github.com/kubernetes-sigs/external-dns repository. by @MartinWeindel [#322]
- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [#323]
- `[OPERATOR]` Bumps golang from 1.20.7 to 1.21.1. by @dependabot[bot] [#318]
- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [#323]
- `[OPERATOR]` Additional AWS regions `ap-southeast-4` and `il-central-1` with canonical hosted zones for ELBs by @MartinWeindel [#321]
- `[USER]` Infoblox provider: support for extensible attributes by @nitrocb [#320]

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.38.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now labelled with `shoot.gardener.cloud/no-cleanup=true` to prevent `gardenlet` to deleting them during shoot deletion. by @MartinWeindel [#195]
- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by @rfranzke [#194]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.0 to 1.21.1. by @dependabot[bot] [#193]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#196]
# [gardener/cert-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel [gardener/cert-management#138]
- `[USER]` Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel [gardener/cert-management#140]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [gardener/cert-management#142]
- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [gardener/cert-management#142]

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.39.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` Creating a `DNSEntry` for the base domain of a hosted zone is now allowed for all providers but `azure-dns` and `azure-private-dns`. by @MartinWeindel [gardener/external-dns-management#316]
## 🏃 Others

- `[USER]` Infoblox provider: support for extensible attributes by @nitrocb [gardener/external-dns-management#320]
- `[OPERATOR]` Update AWS canonical hosted zones from github.com/kubernetes-sigs/external-dns repository. by @MartinWeindel [gardener/external-dns-management#322]
- `[OPERATOR]` Bumps golang from 1.20.7 to 1.21.1. by @dependabot[bot] [gardener/external-dns-management#318]
- `[OPERATOR]` Additional AWS regions `ap-southeast-4` and `il-central-1` with canonical hosted zones for ELBs by @MartinWeindel [gardener/external-dns-management#321]
- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [gardener/external-dns-management#323]
- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [gardener/external-dns-management#323]
# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-dns-service` no longer supports Shoots with Кubernetes version < 1.24. by @shafeeqes [#241]
## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by @rfranzke [#240]
- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now labelled with `shoot.gardener.cloud/no-cleanup=true` to prevent `gardenlet` to deleting them during shoot deletion. by @MartinWeindel [#243]
## 🏃 Others

- `[OPERATOR]` Add copy of images.yaml to charts dir to resolve installation issue for landscapes using RBSC by @MartinWeindel [#237]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#244]
- `[OPERATOR]` Bumps golang from 1.21.0 to 1.21.1. by @dependabot[bot] [#239]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.0</code></b></summary>

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

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.0</code></b></summary>

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

</details>

<details>
<summary><b>Update gardenlet to <code>1.81.0</code></b></summary>

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

</details>
