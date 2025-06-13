---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-flux to <code>0.19.0</code></b></summary>

## What's Changed
* renovate: disable semantic commits by @timebertt in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/152
* 🤖 Update module github.com/ironcore-dev/vgopath to v0.1.8 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/147
* 🤖 Update module golang.org/x/tools to v0.33.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/149
* 🤖 Update module github.com/go-logr/logr to v1.4.3 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/153
* 🤖 Update module github.com/onsi/gomega to v1.37.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/148
* 🤖 Update k8s.io/utils digest to 0f33e8f by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/145
* 🤖 Update module github.com/gardener/gardener to v1.120.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/150
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.23.4 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/146
* 🤖 Update module github.com/gardener/gardener to v1.120.1 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/143
* 🤖 Update fluxcd (minor) by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/154


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.18.0...v0.19.0

</details>

<details>
<summary><b>Update provider-alicloud to <code>1.62.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## ✨ New Features

- `[USER]` This extension now supports in-place node updates. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/proposals/31-inplace-node-update.md). by @ary1992 [#795]
## 🏃 Others

- `[OPERATOR]` Obsolete ClusterRoles and ClusterRoleBindings that were leftovers from the machine-controller-manager component are now cleaned up. by @georgibaltiev [#794]
- `[OPERATOR]` Update `gardener/gardener` to `v1.117.0` [Release Notes](https://github.com/gardener/gardener/releases/tag/v1.117.0) by @kevin-lacoo [#786]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.62.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.62.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.62.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.62.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.62.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.25.1</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Ensure ignored entries are not deleted on cleanup in an edge case. by @MartinWeindel [#505]
## 🏃 Others

- `[USER]` [provider type openstack-designate] Allow secret key `authURL` as alias of `OS_AUTH_URL` by @MartinWeindel [#504]
- `[OPERATOR]` Bump `openstack-designate` provider library `gophercloud` from version `v0.24.0` to `v2.7.0`. by @MartinWeindel [#481]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.25.1`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.25.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.64.1</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Ensure ignored entries are not deleted on cleanup in an edge case. by @MartinWeindel [gardener/external-dns-management#505]
## 🏃 Others

- `[USER]` [provider type openstack-designate] Allow secret key `authURL` as alias of `OS_AUTH_URL` by @MartinWeindel [gardener/external-dns-management#504]
- `[OPERATOR]` Bump `openstack-designate` provider library `gophercloud` from version `v0.24.0` to `v2.7.0`. by @MartinWeindel [gardener/external-dns-management#481]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.64.1`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.64.1`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.64.1`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.64.1`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.64.1`


</details>

<details>
<summary><b>Update acl to <code>1.7.0</code></b></summary>

<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### ⚠️ Breaking Changes
* Drop support for Seeds with Kubernetes version <= 1.26 by @RadaBDimitrova in https://github.com/stackitcloud/gardener-extension-acl/pull/119
### ✨ Features
* Publish helm charts to ghcr.io by @oliver-goetz in https://github.com/stackitcloud/gardener-extension-acl/pull/114
* Use ServiceTrafficDistribution to make Services topology-aware when runtime Kubernetes >= 1.31 by @ialidzhikov in https://github.com/stackitcloud/gardener-extension-acl/pull/105
* Adapt admission controller helm charts for deployment by gardener-operator by @oliver-goetz in https://github.com/stackitcloud/gardener-extension-acl/pull/121
### 🤖 Dependencies
* Update dependency ko-build/ko to v0.17.1 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/84
* Update module github.com/spf13/cobra to v1.9.1 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/113
* Update module github.com/onsi/ginkgo/v2 to v2.23.4 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/116
* Update module github.com/tidwall/gjson to v1.18.0 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/103
* Update module golang.org/x/tools to v0.32.0 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/125
* Update module github.com/onsi/gomega to v1.37.0 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/124
* Update dependency go to v1.24.2 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/112
* Update k8s packages (minor) by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/65
### ℹ️ Other Changes
* Forbid container privilege escalations for Gardener Extension ACL component containers by @georgibaltiev in https://github.com/stackitcloud/gardener-extension-acl/pull/117

## New Contributors
* @oliver-goetz made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/114
* @RadaBDimitrova made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/119
* @georgibaltiev made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/117
* @Wieneo made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/126

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.6.0...v1.7.0

</details>

<details>
<summary><b>Update acl to <code>1.9.0</code></b></summary>

<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### ℹ️ Other Changes
* Allow setting image repository and tag independently by @Lappihuan in https://github.com/stackitcloud/gardener-extension-acl/pull/144

## New Contributors
* @Lappihuan made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/144

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.8.0...v1.9.0

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.121.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` Moved `extensions/pkg/predicate` to `pkg/controllerutils/predicate`. Please adjust imports accordingly. by @Wieneo [#12026]
- `[DEVELOPER]` The `MutatorWithShootClient` has been removed from Gardener. If your mutator requires a shoot client, it should implement the new [`WantsShootClient`](https://github.com/gardener/gardener/blob/70168f44c8b12541ea31cb688a7a7e18757e847f/extensions/pkg/webhook/handler.go#L278) interface instead. The corresponding client can be found in the passed context via the [`ShootClientContextKey`](https://github.com/gardener/gardener/blob/70168f44c8b12541ea31cb688a7a7e18757e847f/extensions/pkg/webhook/handler.go#L268). by @timuthy [#12289]
- `[DEVELOPER]` Moved `extensions/pkg/util/cloudprofile` to `pkg/utils/gardener/cloudprofile`. Please adjust imports accordingly. by @Wieneo [#12026]
- `[USER]` The `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` field in the Shoot API is deprecated in favor of `.spec.kubernetes.clusterAutoscaler.maxScaleDownParallelism` and will be removed once gardener stops supporting kubernetes `v1.32`. Please adapt your Shoot manifests accordingly. by @takoverflow [#12115]
- `[OPERATOR]` gardenlet no longer deploys ControlPlane resources with `.spec.purpose=exposure` for Shoots using `unmanaged` DNS provider. gardenlet will now cleanup any ControlPlane exposure resource as part of the reconciliation and deletion flows for such Shoots. by @theoddora [#12162]
## 📰 Noteworthy

- `[OPERATOR]` The `Seed` backup secret is no longer copied from the `Shoot` infrastructure credentials in case an operator does not provide an existent backup secret and [`DoNotCopyBackupCredentials` feature gate](https://github.com/gardener/gardener/blob/v1.121.0/docs/deployment/feature_gates.md) is enabled for `gardenlet`. If you configure `seed.spec.backup.credentialsRef` or `seed.spec.backup.secretRef`, make sure that the referred credential already exists. For production setups, it is advised that operators configure a separate set of credentials for `Seed` backup and `Shoot` infrastructure. by @dimityrmirchev [#12168]
- `[OPERATOR]` The `CredentialsRotationWithoutWorkersRollout` feature gate has been promoted to beta and is now enabled by default. by @rfranzke [#12236]
## ✨ New Features

- `[DEVELOPER]` Extension mutators or validators can now retrieve a corresponding `Cluster` object from the passed `context.Context`. The [`WantsClusterObject`(https://github.com/gardener/gardener/blob/70168f44c8b12541ea31cb688a7a7e18757e847f/extensions/pkg/webhook/handler.go#L285) interface must be implemented for this functionality. by @timuthy [#12289]
- `[USER]` Concurrent drain and deletion of nodes that require drain can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.maxDrainParallelism` in the Shoot API. by @takoverflow [#12115]
- `[OPERATOR]` `gardenlet` now doesn't scale up deployments during `Shoot` reconciliation if they have `dependency-watchdog.gardener.cloud/meltdown-protection-active` annotation on them. by @ashwani2k [#12314]
## 🐛 Bug Fixes

- `[USER]` A bug causing the `kube-apiserver` to crash when anonymous authentication is configured via `StructuredAuthentication` was fixed. by @dimityrmirchev [#12198]
- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12306]
## 🏃 Others

- `[OPERATOR]` Enhance DualStack migration docs with knowledge about manual reconciliation. by @adenitiu [#12246]
- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12294]
- `[OPERATOR]` Introduce the `perses-operator` to `Garden` and `Seed` clusters. by @rickardsjp [#12084]
- `[OPERATOR]` Clarified and enforced policy in the Kubernetes version support process to retain only the latest 5 minor versions, improving security by dropping older, unpatched versions more consistently. by @vlerenc [#12201]
- `[DEVELOPER]` Added the helper function `CurrentLifecycleClassification(version)` to evaluate the current classification of a given `ExpirableVersion`. by @LucaBernstein [#12298]
- `[DEVELOPER]` Introduced new version classifications `unavailable` and `expired`. They are not meant to be set manually but should act as computed classification states. by @LucaBernstein [#12298]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.2` to `1.80.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.3) by @gardener-ci-robot [#12227]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.4.0` to `v1.5.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.5.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.4.0` to `v1.5.0`. by @ashwani2k [#12314]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.4.0` to `1.4.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.4.0` to `1.4.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.4.0` to `1.4.1`.  by @gardener-ci-robot [#12239]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.2` to `v1.12.3`.  by @gardener-ci-robot [#12258]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.3.1` to `1.4.0`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.3.1` to `1.4.0`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.3.1` to `1.4.0`.  by @gardener-ci-robot [#12167]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.6` to `v1.11.7`.  by @gardener-ci-robot [#12257]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.121.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.121.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.121.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.121.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.121.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.121.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.121.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.121.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.121.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.121.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.121.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.121.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.121.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.121.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` Moved `extensions/pkg/predicate` to `pkg/controllerutils/predicate`. Please adjust imports accordingly. by @Wieneo [#12026]
- `[DEVELOPER]` The `MutatorWithShootClient` has been removed from Gardener. If your mutator requires a shoot client, it should implement the new [`WantsShootClient`](https://github.com/gardener/gardener/blob/70168f44c8b12541ea31cb688a7a7e18757e847f/extensions/pkg/webhook/handler.go#L278) interface instead. The corresponding client can be found in the passed context via the [`ShootClientContextKey`](https://github.com/gardener/gardener/blob/70168f44c8b12541ea31cb688a7a7e18757e847f/extensions/pkg/webhook/handler.go#L268). by @timuthy [#12289]
- `[DEVELOPER]` Moved `extensions/pkg/util/cloudprofile` to `pkg/utils/gardener/cloudprofile`. Please adjust imports accordingly. by @Wieneo [#12026]
- `[USER]` The `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` field in the Shoot API is deprecated in favor of `.spec.kubernetes.clusterAutoscaler.maxScaleDownParallelism` and will be removed once gardener stops supporting kubernetes `v1.32`. Please adapt your Shoot manifests accordingly. by @takoverflow [#12115]
- `[OPERATOR]` gardenlet no longer deploys ControlPlane resources with `.spec.purpose=exposure` for Shoots using `unmanaged` DNS provider. gardenlet will now cleanup any ControlPlane exposure resource as part of the reconciliation and deletion flows for such Shoots. by @theoddora [#12162]
## 📰 Noteworthy

- `[OPERATOR]` The `Seed` backup secret is no longer copied from the `Shoot` infrastructure credentials in case an operator does not provide an existent backup secret and [`DoNotCopyBackupCredentials` feature gate](https://github.com/gardener/gardener/blob/v1.121.0/docs/deployment/feature_gates.md) is enabled for `gardenlet`. If you configure `seed.spec.backup.credentialsRef` or `seed.spec.backup.secretRef`, make sure that the referred credential already exists. For production setups, it is advised that operators configure a separate set of credentials for `Seed` backup and `Shoot` infrastructure. by @dimityrmirchev [#12168]
- `[OPERATOR]` The `CredentialsRotationWithoutWorkersRollout` feature gate has been promoted to beta and is now enabled by default. by @rfranzke [#12236]
## ✨ New Features

- `[DEVELOPER]` Extension mutators or validators can now retrieve a corresponding `Cluster` object from the passed `context.Context`. The [`WantsClusterObject`(https://github.com/gardener/gardener/blob/70168f44c8b12541ea31cb688a7a7e18757e847f/extensions/pkg/webhook/handler.go#L285) interface must be implemented for this functionality. by @timuthy [#12289]
- `[USER]` Concurrent drain and deletion of nodes that require drain can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.maxDrainParallelism` in the Shoot API. by @takoverflow [#12115]
- `[OPERATOR]` `gardenlet` now doesn't scale up deployments during `Shoot` reconciliation if they have `dependency-watchdog.gardener.cloud/meltdown-protection-active` annotation on them. by @ashwani2k [#12314]
## 🐛 Bug Fixes

- `[USER]` A bug causing the `kube-apiserver` to crash when anonymous authentication is configured via `StructuredAuthentication` was fixed. by @dimityrmirchev [#12198]
- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12306]
## 🏃 Others

- `[OPERATOR]` Enhance DualStack migration docs with knowledge about manual reconciliation. by @adenitiu [#12246]
- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12294]
- `[OPERATOR]` Introduce the `perses-operator` to `Garden` and `Seed` clusters. by @rickardsjp [#12084]
- `[OPERATOR]` Clarified and enforced policy in the Kubernetes version support process to retain only the latest 5 minor versions, improving security by dropping older, unpatched versions more consistently. by @vlerenc [#12201]
- `[DEVELOPER]` Added the helper function `CurrentLifecycleClassification(version)` to evaluate the current classification of a given `ExpirableVersion`. by @LucaBernstein [#12298]
- `[DEVELOPER]` Introduced new version classifications `unavailable` and `expired`. They are not meant to be set manually but should act as computed classification states. by @LucaBernstein [#12298]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.2` to `1.80.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.3) by @gardener-ci-robot [#12227]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.4.0` to `v1.5.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.5.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.4.0` to `v1.5.0`. by @ashwani2k [#12314]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.4.0` to `1.4.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.4.0` to `1.4.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.4.0` to `1.4.1`.  by @gardener-ci-robot [#12239]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.2` to `v1.12.3`.  by @gardener-ci-robot [#12258]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.3.1` to `1.4.0`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.3.1` to `1.4.0`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.3.1` to `1.4.0`.  by @gardener-ci-robot [#12167]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.6` to `v1.11.7`.  by @gardener-ci-robot [#12257]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.121.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.121.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.121.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.121.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.121.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.121.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.121.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.121.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.121.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.121.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.121.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.121.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.121.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.121.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` Moved `extensions/pkg/predicate` to `pkg/controllerutils/predicate`. Please adjust imports accordingly. by @Wieneo [#12026]
- `[DEVELOPER]` The `MutatorWithShootClient` has been removed from Gardener. If your mutator requires a shoot client, it should implement the new [`WantsShootClient`](https://github.com/gardener/gardener/blob/70168f44c8b12541ea31cb688a7a7e18757e847f/extensions/pkg/webhook/handler.go#L278) interface instead. The corresponding client can be found in the passed context via the [`ShootClientContextKey`](https://github.com/gardener/gardener/blob/70168f44c8b12541ea31cb688a7a7e18757e847f/extensions/pkg/webhook/handler.go#L268). by @timuthy [#12289]
- `[DEVELOPER]` Moved `extensions/pkg/util/cloudprofile` to `pkg/utils/gardener/cloudprofile`. Please adjust imports accordingly. by @Wieneo [#12026]
- `[USER]` The `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` field in the Shoot API is deprecated in favor of `.spec.kubernetes.clusterAutoscaler.maxScaleDownParallelism` and will be removed once gardener stops supporting kubernetes `v1.32`. Please adapt your Shoot manifests accordingly. by @takoverflow [#12115]
- `[OPERATOR]` gardenlet no longer deploys ControlPlane resources with `.spec.purpose=exposure` for Shoots using `unmanaged` DNS provider. gardenlet will now cleanup any ControlPlane exposure resource as part of the reconciliation and deletion flows for such Shoots. by @theoddora [#12162]
## 📰 Noteworthy

- `[OPERATOR]` The `Seed` backup secret is no longer copied from the `Shoot` infrastructure credentials in case an operator does not provide an existent backup secret and [`DoNotCopyBackupCredentials` feature gate](https://github.com/gardener/gardener/blob/v1.121.0/docs/deployment/feature_gates.md) is enabled for `gardenlet`. If you configure `seed.spec.backup.credentialsRef` or `seed.spec.backup.secretRef`, make sure that the referred credential already exists. For production setups, it is advised that operators configure a separate set of credentials for `Seed` backup and `Shoot` infrastructure. by @dimityrmirchev [#12168]
- `[OPERATOR]` The `CredentialsRotationWithoutWorkersRollout` feature gate has been promoted to beta and is now enabled by default. by @rfranzke [#12236]
## ✨ New Features

- `[DEVELOPER]` Extension mutators or validators can now retrieve a corresponding `Cluster` object from the passed `context.Context`. The [`WantsClusterObject`(https://github.com/gardener/gardener/blob/70168f44c8b12541ea31cb688a7a7e18757e847f/extensions/pkg/webhook/handler.go#L285) interface must be implemented for this functionality. by @timuthy [#12289]
- `[USER]` Concurrent drain and deletion of nodes that require drain can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.maxDrainParallelism` in the Shoot API. by @takoverflow [#12115]
- `[OPERATOR]` `gardenlet` now doesn't scale up deployments during `Shoot` reconciliation if they have `dependency-watchdog.gardener.cloud/meltdown-protection-active` annotation on them. by @ashwani2k [#12314]
## 🐛 Bug Fixes

- `[USER]` A bug causing the `kube-apiserver` to crash when anonymous authentication is configured via `StructuredAuthentication` was fixed. by @dimityrmirchev [#12198]
- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12306]
## 🏃 Others

- `[OPERATOR]` Enhance DualStack migration docs with knowledge about manual reconciliation. by @adenitiu [#12246]
- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12294]
- `[OPERATOR]` Introduce the `perses-operator` to `Garden` and `Seed` clusters. by @rickardsjp [#12084]
- `[OPERATOR]` Clarified and enforced policy in the Kubernetes version support process to retain only the latest 5 minor versions, improving security by dropping older, unpatched versions more consistently. by @vlerenc [#12201]
- `[DEVELOPER]` Added the helper function `CurrentLifecycleClassification(version)` to evaluate the current classification of a given `ExpirableVersion`. by @LucaBernstein [#12298]
- `[DEVELOPER]` Introduced new version classifications `unavailable` and `expired`. They are not meant to be set manually but should act as computed classification states. by @LucaBernstein [#12298]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.2` to `1.80.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.3) by @gardener-ci-robot [#12227]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.4.0` to `v1.5.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.5.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.4.0` to `v1.5.0`. by @ashwani2k [#12314]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.4.0` to `1.4.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.4.0` to `1.4.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.4.0` to `1.4.1`.  by @gardener-ci-robot [#12239]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.2` to `v1.12.3`.  by @gardener-ci-robot [#12258]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.3.1` to `1.4.0`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.3.1` to `1.4.0`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.3.1` to `1.4.0`.  by @gardener-ci-robot [#12167]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.6` to `v1.11.7`.  by @gardener-ci-robot [#12257]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.121.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.121.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.121.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.121.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.121.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.121.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.121.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.121.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.121.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.121.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.121.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.121.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.121.0`


</details>
