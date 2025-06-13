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
