---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.123.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` There is a new validation for the `Garden` resource which ensures the API server domain of the virtual cluster which is derived from the primary (immutable) DNS name does not match any SNI domain pattern. by @oliver-goetz [#11996]
- `[OPERATOR]` ⚠️ The `Shoot` API field `spec.provider.workers[].controlPlane.backup.secretRef` has been removed, please migrate your shoot manifests to `spec.provider.workers[].controlPlane.backup.credentialsRef`!  by @vpnachev [#12347]
- `[OPERATOR]` ⚠️ The `Seed` API field `spec.backup.secretRef` has been removed, please migrate your seed manifests to `spec.backup.credentialsRef`! Gardener API server already has defaulted this field.  by @vpnachev [#12347]
- `[OPERATOR]` ⚠️ The `GardenletConfiguration` configuration file field `seedConfig.spec.backup.secretRef` has been removed, please migrate your gardenlet configuration manifests to `seedConfig.spec.backup.credentialsRef`! Gardenlet already has defaulted this field . by @vpnachev [#12347]
- `[OPERATOR]` ⚠️ The `Gardenlet` API field `spec.config.seedConfig.spec.backup.secretRef` has been removed, please migrate your gardenlet manifests to `spec.config.seedConfig.spec.backup.credentialsRef`! Gardener API server already has defaulted this field. by @vpnachev [#12347]
- `[OPERATOR]` `gardenlet`s cannot connect to Garden cluster with `insecure-skip-tls-verify` anymore. This setting still works in the bootstrap kubeconfig but is unset bootstrapping. by @oliver-goetz [#11996]
- `[OPERATOR]` The deprecated field `globallyEnabled` has been removed from the `ControllerRegistration` and `Extension` APIs. Please make sure that `globallyEnabled` is not used anymore and all already applied `ControllerRegistration` and `Extension` resources switched to the new field `autoEnable`, before upgrading to this version. Read more about the extension registration and the `autoEnable` feature [here](https://github.com/gardener/gardener/blob/master/docs/extensions/registration.md#extension-resource-configurations). by @timuthy [#12465]
- `[OPERATOR]` The `DoNotCopyBackupCredentials` feature gate has been promoted to beta and is now enabled by default. When the feature is enabled the `Seed` backup secret is no longer copied from the `Shoot` infrastructure credentials in case an operator does not provide an existing backup secret. If you configure `seed.spec.backup.credentialsRef`, make sure that the referred credential already exists. For production setups, it is advised that operators configure a separate set of credentials for `Seed` backup and `Shoot` infrastructure. by @dimityrmirchev [#12414]
- `[OPERATOR]` The `NodeAgentAuthorizer` feature gate has been graduated to GA and is locked to `true`.  by @oliver-goetz [#12405]
- `[OPERATOR]` ⚠️ The `ManagedSeed` API field `spec.gardenlet.config.seedConfig.spec.backup.secretRef` has been removed, please migrate your managed seed manifests to `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`! Gardener API server already has defaulted this field. by @vpnachev [#12347]
- `[DEVELOPER]` The `.spec.purpose` field in the `ControlPlane` resource has been removed after being deprecated since Gardener v1.120.0. It was previously used to distinguish between the `normal` and `exposure` purposes. The exposure purpose was used before SNI was introduced. Since SNI is now unconditionally enabled, the field is no longer needed. by @theoddora [#12340]
- `[DEVELOPER]` The function `github.com/gardener/gardener/extensions/pkg/controller/controlplane/genericactuator.NewActuator` no longer accepts `exposureSecretConfigs`, `exposureShootAccessSecrets` functions as parameters, and `controlPlaneExposureChart` chart.  
  The interface `github.com/gardener/gardener/extensions/pkg/controller/controlplane/genericactuator.ValuesProvider` no longer defines a method called `GetControlPlaneExposureChartValues`. Implementations of the interface can drop the said method. by @theoddora [#12340]
- `[USER]` Setting resources with `.` suffix in the `spec.kubernetes.kubeAPIServer.encryptionConfig.resources` field is now forbidden. by @AleksandarSavchev [#12355]
- `[USER]` The deprecated `url` annotation in `<shoot-name>.monitoring` secrets in the project namespace has been removed. Please use the `plutono-url` annotation instead. by @oliver-goetz [#12396]
- `[USER]` The `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` field in the `Shoot` API is forbidden to be set for Kubernetes versions >= 1.33 and will be removed after support for Kubernetes 1.32 is dropped. by @Kostov6 [#12413]
## 📰 Noteworthy

- `[OPERATOR]` The graduated feature gate `RemoveAPIServerProxyLegacyPort` has been removed. by @Wieneo [#12406]
- `[USER]` For worker pools with in-place update strategies, the `maxSurge` and `maxUnavailable` fields are now correctly defaulted to `0` and `1` respectively. by @shafeeqes [#12438]
## ✨ New Features

- `[OPERATOR]` Introduced the OpenTelemetry Operator as a component to Seed & Garden Clusters. by @rrhubenov [#12165]
- `[OPERATOR]` `gardenlet`s are now able to update their garden cluster CA automatically from Garden cluster if `gardenClusterCACert` field in `gardenlet` resource is omitted. `gardenClusterCACert` field in `gardenlet` resource is deprecated now. by @oliver-goetz [#11996]
- `[OPERATOR]` Operators do no longer have to specify a `gardenClusterAddress` in `gardenlet` resources. by @oliver-goetz [#11996]
- `[OPERATOR]` Cluster internal L7 load balancing for control plane components of shoot and virtual garden kube-apiservers is supported now.  by @oliver-goetz [#12260]
- `[DEVELOPER]` The provider-local extension implements the `Bastion` resource now. With this, you can use `gardenctl ssh` in the local setup. by @timebertt [#12366]
- `[DEVELOPER]` BackupBucket/BackupEntry controllers now support WorkloadIdentity type of credentials, provider extensions may need to adjust the respective controllers or to explicitly disallow BackupBuckets of their type to configure WorkloadIdentity.  by @vpnachev [#12321]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fixed the local-setup for Cilium shoots. by @axel7born [#12410]
- `[USER]` A bug causing the `kube-apiserver` to crash due to invalid resources in the `spec.kubernetes.kubeAPIServer.encryptionConfig.resources` was fixed. by @AleksandarSavchev [#12355]
- `[USER]` A bug forbidding the update of `spec.kubernetes.kubeAPIServer.encryptionConfig.resources` due to use of `.` suffix in resources was fixed. by @AleksandarSavchev [#12355]
- `[OPERATOR]` Fix istio creation on cloud regions with uppercase characters by @modzilla99 [#12466]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.39.0` to `0.40.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.40.0) by @gardener-ci-robot [#12441]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.5` to `1.30.6`.  by @gardener-ci-robot [#12447]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/kube-state-metrics/kube-state-metrics` from `v2.15.0` to `v2.16.0`.  by @gardener-ci-robot [#12424]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses-operator` from `v0.1.12` to `v0.2.0`. [Release Notes](https://redirect.github.com/perses/perses-operator/releases/tag/v0.2.0) by @gardener-ci-robot [#12420]
- `[DEPENDENCY]` The base image of the `gardener-extension-provider-local-node` image is now updated to `kindest/node@v1.33.1`. by @Kostov6 [#12386]
- `[DEPENDENCY]` local setup: The kind cluster's node image is now updated to `kindest/node@v1.33.1`. by @Kostov6 [#12386]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.3` to `v1.12.4`.  by @gardener-ci-robot [#12445]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses` from `v0.51.0` to `v0.51.1`. [Release Notes](https://redirect.github.com/perses/perses/releases/tag/v0.51.1) by @gardener-ci-robot [#12417]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.6` to `1.30.7`.  by @gardener-ci-robot [#12488]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.7` to `v1.11.8`.  by @gardener-ci-robot [#12443]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.3` to `1.81.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.0) by @petersutter [#12514]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.4` to `v1.13.0`.  by @gardener-ci-robot [#12444]
- `[OPERATOR]` `Default` field in `FeatureGateVersionRange` is now renamed to `LockedValue`. by @RadaBDimitrova [#12458]
- `[OPERATOR]` Add Capabilities validation utils for provider-extension. Read more about Machine Capabilities [here](https://github.com/gardener/gardener/blob/master/docs/proposals/33-machine-image-capabilities.md) by @Roncossek [#12128]
- `[OPERATOR]` Clean up obsolete `prometheus-` folder from Prometheus volumes. This might be a leftover of GEP-19 by @vicwicker [#12219]
- `[OPERATOR]` The status of constraint  `DualStackNodesMigrationReady`  is now `progressing` instead of `false` at the start of a migration to dual-stack networking. by @axel7born [#12470]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.123.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` There is a new validation for the `Garden` resource which ensures the API server domain of the virtual cluster which is derived from the primary (immutable) DNS name does not match any SNI domain pattern. by @oliver-goetz [#11996]
- `[OPERATOR]` ⚠️ The `Shoot` API field `spec.provider.workers[].controlPlane.backup.secretRef` has been removed, please migrate your shoot manifests to `spec.provider.workers[].controlPlane.backup.credentialsRef`!  by @vpnachev [#12347]
- `[OPERATOR]` ⚠️ The `Seed` API field `spec.backup.secretRef` has been removed, please migrate your seed manifests to `spec.backup.credentialsRef`! Gardener API server already has defaulted this field.  by @vpnachev [#12347]
- `[OPERATOR]` ⚠️ The `GardenletConfiguration` configuration file field `seedConfig.spec.backup.secretRef` has been removed, please migrate your gardenlet configuration manifests to `seedConfig.spec.backup.credentialsRef`! Gardenlet already has defaulted this field . by @vpnachev [#12347]
- `[OPERATOR]` ⚠️ The `Gardenlet` API field `spec.config.seedConfig.spec.backup.secretRef` has been removed, please migrate your gardenlet manifests to `spec.config.seedConfig.spec.backup.credentialsRef`! Gardener API server already has defaulted this field. by @vpnachev [#12347]
- `[OPERATOR]` `gardenlet`s cannot connect to Garden cluster with `insecure-skip-tls-verify` anymore. This setting still works in the bootstrap kubeconfig but is unset bootstrapping. by @oliver-goetz [#11996]
- `[OPERATOR]` The deprecated field `globallyEnabled` has been removed from the `ControllerRegistration` and `Extension` APIs. Please make sure that `globallyEnabled` is not used anymore and all already applied `ControllerRegistration` and `Extension` resources switched to the new field `autoEnable`, before upgrading to this version. Read more about the extension registration and the `autoEnable` feature [here](https://github.com/gardener/gardener/blob/master/docs/extensions/registration.md#extension-resource-configurations). by @timuthy [#12465]
- `[OPERATOR]` The `DoNotCopyBackupCredentials` feature gate has been promoted to beta and is now enabled by default. When the feature is enabled the `Seed` backup secret is no longer copied from the `Shoot` infrastructure credentials in case an operator does not provide an existing backup secret. If you configure `seed.spec.backup.credentialsRef`, make sure that the referred credential already exists. For production setups, it is advised that operators configure a separate set of credentials for `Seed` backup and `Shoot` infrastructure. by @dimityrmirchev [#12414]
- `[OPERATOR]` The `NodeAgentAuthorizer` feature gate has been graduated to GA and is locked to `true`.  by @oliver-goetz [#12405]
- `[OPERATOR]` ⚠️ The `ManagedSeed` API field `spec.gardenlet.config.seedConfig.spec.backup.secretRef` has been removed, please migrate your managed seed manifests to `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`! Gardener API server already has defaulted this field. by @vpnachev [#12347]
- `[DEVELOPER]` The `.spec.purpose` field in the `ControlPlane` resource has been removed after being deprecated since Gardener v1.120.0. It was previously used to distinguish between the `normal` and `exposure` purposes. The exposure purpose was used before SNI was introduced. Since SNI is now unconditionally enabled, the field is no longer needed. by @theoddora [#12340]
- `[DEVELOPER]` The function `github.com/gardener/gardener/extensions/pkg/controller/controlplane/genericactuator.NewActuator` no longer accepts `exposureSecretConfigs`, `exposureShootAccessSecrets` functions as parameters, and `controlPlaneExposureChart` chart.  
  The interface `github.com/gardener/gardener/extensions/pkg/controller/controlplane/genericactuator.ValuesProvider` no longer defines a method called `GetControlPlaneExposureChartValues`. Implementations of the interface can drop the said method. by @theoddora [#12340]
- `[USER]` Setting resources with `.` suffix in the `spec.kubernetes.kubeAPIServer.encryptionConfig.resources` field is now forbidden. by @AleksandarSavchev [#12355]
- `[USER]` The deprecated `url` annotation in `<shoot-name>.monitoring` secrets in the project namespace has been removed. Please use the `plutono-url` annotation instead. by @oliver-goetz [#12396]
- `[USER]` The `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` field in the `Shoot` API is forbidden to be set for Kubernetes versions >= 1.33 and will be removed after support for Kubernetes 1.32 is dropped. by @Kostov6 [#12413]
## 📰 Noteworthy

- `[OPERATOR]` The graduated feature gate `RemoveAPIServerProxyLegacyPort` has been removed. by @Wieneo [#12406]
- `[USER]` For worker pools with in-place update strategies, the `maxSurge` and `maxUnavailable` fields are now correctly defaulted to `0` and `1` respectively. by @shafeeqes [#12438]
## ✨ New Features

- `[OPERATOR]` Introduced the OpenTelemetry Operator as a component to Seed & Garden Clusters. by @rrhubenov [#12165]
- `[OPERATOR]` `gardenlet`s are now able to update their garden cluster CA automatically from Garden cluster if `gardenClusterCACert` field in `gardenlet` resource is omitted. `gardenClusterCACert` field in `gardenlet` resource is deprecated now. by @oliver-goetz [#11996]
- `[OPERATOR]` Operators do no longer have to specify a `gardenClusterAddress` in `gardenlet` resources. by @oliver-goetz [#11996]
- `[OPERATOR]` Cluster internal L7 load balancing for control plane components of shoot and virtual garden kube-apiservers is supported now.  by @oliver-goetz [#12260]
- `[DEVELOPER]` The provider-local extension implements the `Bastion` resource now. With this, you can use `gardenctl ssh` in the local setup. by @timebertt [#12366]
- `[DEVELOPER]` BackupBucket/BackupEntry controllers now support WorkloadIdentity type of credentials, provider extensions may need to adjust the respective controllers or to explicitly disallow BackupBuckets of their type to configure WorkloadIdentity.  by @vpnachev [#12321]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fixed the local-setup for Cilium shoots. by @axel7born [#12410]
- `[USER]` A bug causing the `kube-apiserver` to crash due to invalid resources in the `spec.kubernetes.kubeAPIServer.encryptionConfig.resources` was fixed. by @AleksandarSavchev [#12355]
- `[USER]` A bug forbidding the update of `spec.kubernetes.kubeAPIServer.encryptionConfig.resources` due to use of `.` suffix in resources was fixed. by @AleksandarSavchev [#12355]
- `[OPERATOR]` Fix istio creation on cloud regions with uppercase characters by @modzilla99 [#12466]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.39.0` to `0.40.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.40.0) by @gardener-ci-robot [#12441]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.5` to `1.30.6`.  by @gardener-ci-robot [#12447]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/kube-state-metrics/kube-state-metrics` from `v2.15.0` to `v2.16.0`.  by @gardener-ci-robot [#12424]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses-operator` from `v0.1.12` to `v0.2.0`. [Release Notes](https://redirect.github.com/perses/perses-operator/releases/tag/v0.2.0) by @gardener-ci-robot [#12420]
- `[DEPENDENCY]` The base image of the `gardener-extension-provider-local-node` image is now updated to `kindest/node@v1.33.1`. by @Kostov6 [#12386]
- `[DEPENDENCY]` local setup: The kind cluster's node image is now updated to `kindest/node@v1.33.1`. by @Kostov6 [#12386]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.3` to `v1.12.4`.  by @gardener-ci-robot [#12445]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses` from `v0.51.0` to `v0.51.1`. [Release Notes](https://redirect.github.com/perses/perses/releases/tag/v0.51.1) by @gardener-ci-robot [#12417]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.6` to `1.30.7`.  by @gardener-ci-robot [#12488]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.7` to `v1.11.8`.  by @gardener-ci-robot [#12443]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.3` to `1.81.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.0) by @petersutter [#12514]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.4` to `v1.13.0`.  by @gardener-ci-robot [#12444]
- `[OPERATOR]` `Default` field in `FeatureGateVersionRange` is now renamed to `LockedValue`. by @RadaBDimitrova [#12458]
- `[OPERATOR]` Add Capabilities validation utils for provider-extension. Read more about Machine Capabilities [here](https://github.com/gardener/gardener/blob/master/docs/proposals/33-machine-image-capabilities.md) by @Roncossek [#12128]
- `[OPERATOR]` Clean up obsolete `prometheus-` folder from Prometheus volumes. This might be a leftover of GEP-19 by @vicwicker [#12219]
- `[OPERATOR]` The status of constraint  `DualStackNodesMigrationReady`  is now `progressing` instead of `false` at the start of a migration to dual-stack networking. by @axel7born [#12470]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.123.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` There is a new validation for the `Garden` resource which ensures the API server domain of the virtual cluster which is derived from the primary (immutable) DNS name does not match any SNI domain pattern. by @oliver-goetz [#11996]
- `[OPERATOR]` ⚠️ The `Shoot` API field `spec.provider.workers[].controlPlane.backup.secretRef` has been removed, please migrate your shoot manifests to `spec.provider.workers[].controlPlane.backup.credentialsRef`!  by @vpnachev [#12347]
- `[OPERATOR]` ⚠️ The `Seed` API field `spec.backup.secretRef` has been removed, please migrate your seed manifests to `spec.backup.credentialsRef`! Gardener API server already has defaulted this field.  by @vpnachev [#12347]
- `[OPERATOR]` ⚠️ The `GardenletConfiguration` configuration file field `seedConfig.spec.backup.secretRef` has been removed, please migrate your gardenlet configuration manifests to `seedConfig.spec.backup.credentialsRef`! Gardenlet already has defaulted this field . by @vpnachev [#12347]
- `[OPERATOR]` ⚠️ The `Gardenlet` API field `spec.config.seedConfig.spec.backup.secretRef` has been removed, please migrate your gardenlet manifests to `spec.config.seedConfig.spec.backup.credentialsRef`! Gardener API server already has defaulted this field. by @vpnachev [#12347]
- `[OPERATOR]` `gardenlet`s cannot connect to Garden cluster with `insecure-skip-tls-verify` anymore. This setting still works in the bootstrap kubeconfig but is unset bootstrapping. by @oliver-goetz [#11996]
- `[OPERATOR]` The deprecated field `globallyEnabled` has been removed from the `ControllerRegistration` and `Extension` APIs. Please make sure that `globallyEnabled` is not used anymore and all already applied `ControllerRegistration` and `Extension` resources switched to the new field `autoEnable`, before upgrading to this version. Read more about the extension registration and the `autoEnable` feature [here](https://github.com/gardener/gardener/blob/master/docs/extensions/registration.md#extension-resource-configurations). by @timuthy [#12465]
- `[OPERATOR]` The `DoNotCopyBackupCredentials` feature gate has been promoted to beta and is now enabled by default. When the feature is enabled the `Seed` backup secret is no longer copied from the `Shoot` infrastructure credentials in case an operator does not provide an existing backup secret. If you configure `seed.spec.backup.credentialsRef`, make sure that the referred credential already exists. For production setups, it is advised that operators configure a separate set of credentials for `Seed` backup and `Shoot` infrastructure. by @dimityrmirchev [#12414]
- `[OPERATOR]` The `NodeAgentAuthorizer` feature gate has been graduated to GA and is locked to `true`.  by @oliver-goetz [#12405]
- `[OPERATOR]` ⚠️ The `ManagedSeed` API field `spec.gardenlet.config.seedConfig.spec.backup.secretRef` has been removed, please migrate your managed seed manifests to `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`! Gardener API server already has defaulted this field. by @vpnachev [#12347]
- `[DEVELOPER]` The `.spec.purpose` field in the `ControlPlane` resource has been removed after being deprecated since Gardener v1.120.0. It was previously used to distinguish between the `normal` and `exposure` purposes. The exposure purpose was used before SNI was introduced. Since SNI is now unconditionally enabled, the field is no longer needed. by @theoddora [#12340]
- `[DEVELOPER]` The function `github.com/gardener/gardener/extensions/pkg/controller/controlplane/genericactuator.NewActuator` no longer accepts `exposureSecretConfigs`, `exposureShootAccessSecrets` functions as parameters, and `controlPlaneExposureChart` chart.  
  The interface `github.com/gardener/gardener/extensions/pkg/controller/controlplane/genericactuator.ValuesProvider` no longer defines a method called `GetControlPlaneExposureChartValues`. Implementations of the interface can drop the said method. by @theoddora [#12340]
- `[USER]` Setting resources with `.` suffix in the `spec.kubernetes.kubeAPIServer.encryptionConfig.resources` field is now forbidden. by @AleksandarSavchev [#12355]
- `[USER]` The deprecated `url` annotation in `<shoot-name>.monitoring` secrets in the project namespace has been removed. Please use the `plutono-url` annotation instead. by @oliver-goetz [#12396]
- `[USER]` The `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` field in the `Shoot` API is forbidden to be set for Kubernetes versions >= 1.33 and will be removed after support for Kubernetes 1.32 is dropped. by @Kostov6 [#12413]
## 📰 Noteworthy

- `[OPERATOR]` The graduated feature gate `RemoveAPIServerProxyLegacyPort` has been removed. by @Wieneo [#12406]
- `[USER]` For worker pools with in-place update strategies, the `maxSurge` and `maxUnavailable` fields are now correctly defaulted to `0` and `1` respectively. by @shafeeqes [#12438]
## ✨ New Features

- `[OPERATOR]` Introduced the OpenTelemetry Operator as a component to Seed & Garden Clusters. by @rrhubenov [#12165]
- `[OPERATOR]` `gardenlet`s are now able to update their garden cluster CA automatically from Garden cluster if `gardenClusterCACert` field in `gardenlet` resource is omitted. `gardenClusterCACert` field in `gardenlet` resource is deprecated now. by @oliver-goetz [#11996]
- `[OPERATOR]` Operators do no longer have to specify a `gardenClusterAddress` in `gardenlet` resources. by @oliver-goetz [#11996]
- `[OPERATOR]` Cluster internal L7 load balancing for control plane components of shoot and virtual garden kube-apiservers is supported now.  by @oliver-goetz [#12260]
- `[DEVELOPER]` The provider-local extension implements the `Bastion` resource now. With this, you can use `gardenctl ssh` in the local setup. by @timebertt [#12366]
- `[DEVELOPER]` BackupBucket/BackupEntry controllers now support WorkloadIdentity type of credentials, provider extensions may need to adjust the respective controllers or to explicitly disallow BackupBuckets of their type to configure WorkloadIdentity.  by @vpnachev [#12321]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fixed the local-setup for Cilium shoots. by @axel7born [#12410]
- `[USER]` A bug causing the `kube-apiserver` to crash due to invalid resources in the `spec.kubernetes.kubeAPIServer.encryptionConfig.resources` was fixed. by @AleksandarSavchev [#12355]
- `[USER]` A bug forbidding the update of `spec.kubernetes.kubeAPIServer.encryptionConfig.resources` due to use of `.` suffix in resources was fixed. by @AleksandarSavchev [#12355]
- `[OPERATOR]` Fix istio creation on cloud regions with uppercase characters by @modzilla99 [#12466]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.39.0` to `0.40.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.40.0) by @gardener-ci-robot [#12441]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.5` to `1.30.6`.  by @gardener-ci-robot [#12447]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/kube-state-metrics/kube-state-metrics` from `v2.15.0` to `v2.16.0`.  by @gardener-ci-robot [#12424]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses-operator` from `v0.1.12` to `v0.2.0`. [Release Notes](https://redirect.github.com/perses/perses-operator/releases/tag/v0.2.0) by @gardener-ci-robot [#12420]
- `[DEPENDENCY]` The base image of the `gardener-extension-provider-local-node` image is now updated to `kindest/node@v1.33.1`. by @Kostov6 [#12386]
- `[DEPENDENCY]` local setup: The kind cluster's node image is now updated to `kindest/node@v1.33.1`. by @Kostov6 [#12386]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.3` to `v1.12.4`.  by @gardener-ci-robot [#12445]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses` from `v0.51.0` to `v0.51.1`. [Release Notes](https://redirect.github.com/perses/perses/releases/tag/v0.51.1) by @gardener-ci-robot [#12417]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.6` to `1.30.7`.  by @gardener-ci-robot [#12488]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.7` to `v1.11.8`.  by @gardener-ci-robot [#12443]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.3` to `1.81.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.0) by @petersutter [#12514]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.4` to `v1.13.0`.  by @gardener-ci-robot [#12444]
- `[OPERATOR]` `Default` field in `FeatureGateVersionRange` is now renamed to `LockedValue`. by @RadaBDimitrova [#12458]
- `[OPERATOR]` Add Capabilities validation utils for provider-extension. Read more about Machine Capabilities [here](https://github.com/gardener/gardener/blob/master/docs/proposals/33-machine-image-capabilities.md) by @Roncossek [#12128]
- `[OPERATOR]` Clean up obsolete `prometheus-` folder from Prometheus volumes. This might be a leftover of GEP-19 by @vicwicker [#12219]
- `[OPERATOR]` The status of constraint  `DualStackNodesMigrationReady`  is now `progressing` instead of `false` at the start of a migration to dual-stack networking. by @axel7born [#12470]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.0`


</details>
