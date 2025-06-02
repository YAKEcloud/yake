---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.120.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `machinecontrollermanager.ProviderSidecarContainer` now expects additional `shoot` and `controlPlaneNamespace` params. In `controlplane` webhooks, extensions can use `GardenContext.GetCluster` to retrieve the shoot from the `Cluster` object. by @timebertt [#12152]
- `[OPERATOR]` The graduated and unconditionally enabled `ShootForceDeletion` feature gate has been removed. If you have references to the feature gate, clean them up before upgrading to this version of Gardener. by @acumino [#12078]
- `[OPERATOR]` The field `.seedConfig.spec.backup.credentialsRef/secretRef` will no longer be defaulted in `GardenletConfiguration` when backup is configured but reference to credentials is not provided. Operators are responsible to provide a valid credentials reference when configuring backup for seeds. Please consult the [deploy gardenlet documentation](https://gardener.cloud/docs/gardener/deployment/deploy_gardenlet/) for more information. by @dimityrmirchev [#12087]
- `[OPERATOR]` The `BackupBucket` API field `spec.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.credentialsRef`, please adapt your BackupBucket manifests to use the new `credentialsRef` field.  by @vpnachev [#12032]
- `[OPERATOR]` A new field, `clusterCompatibility`, has been added to the `Extension` API. If your landscape is managed by `gardener-operator` and your `garden` specifies `spec.extensions`, please add the `garden` cluster type value to your corresponding `Extension` resources. by @timuthy [#11982]
- `[DEVELOPER]` `WorkerPoolHash` now includes a new parameter `additionalDataInPlace` to support hash calculation for worker pools using the `InPlace` update strategy. by @acumino [#12178]
- `[DEVELOPER]` The already deprecated `github.com/gardener/gardener/pkg/utils/gardener.ReconcileTopologyAwareRoutingMetadata` func is now removed. Instead, use `github.com/gardener/gardener/pkg/utils/gardener.ReconcileTopologyAwareRoutingSettings`.  by @ialidzhikov [#12091]
## 📰 Noteworthy

- `[DEVELOPER]` The [Shoot Pod autoscaling best practices guide](https://github.com/gardener/gardener/blob/v1.120.0/docs/usage/autoscaling/shoot_pod_autoscaling_best_practices.md) now recommends for a container under VPA to not set initial resource requests less than VPA's `minAllowed` or `10m` and `10Mi`. `10m` and `10Mi` are the minimum resources VPA can recommend for a Pod (for a Pod, not a container). When a Pod with a single container under VPA defines initial resource requests less than VPA's `minAllowed` or `10m` and `10Mi`, it gets evicted right away so that the Pod minimum recommendation gets applied. by @ialidzhikov [#12030]
- `[DEVELOPER]` The `.spec.purpose` field in the ControlPlane resource is now deprecated and will be removed in Gardener v1.123. In the times before SNI was introduced and unconditionally enabled it was previously used to manage control plane exposure. by @theoddora [#12161]
- `[OPERATOR]` The field `globallyEnabled` in the `Extension` and `ControllerRegistration` APIs is deprecated and will be removed in Gardener `v1.122`. Please use `autoEnable` instead. by @timuthy [#11982]
- `[OPERATOR]` The initial resource requests of etcd container are reduced as follows:  
  - `etcd-events/etcd`: from `300m, 1G` to `30m, 150M`  
  - `etcd-main/etcd`: from `300m, 1G` to `150m, 500M` by @chungtd203338 [#11911]
## ✨ New Features

- `[OPERATOR]` New configuration options were added to `Extension` and `ControllerRegistration` APIs:  
  - `autoEnable` controls which cluster types an extension is automatically enabled (previously `globallyEnabled` - deprecated now)  
  - `clusterCompatibility` controls which cluster types an extension is compatible with.  
    
  Both fields are supposed to be set for `kind: Extension` and accept the cluster types `shoot`, `seed` and `garden`. by @timuthy [#11982]
- `[OPERATOR]` The `Garden` resource has been enhanced with a new field, `spec.VirtualCluster.ETCD.Main.Backup.Region`, which enables the configuration of the backup bucket region. Previously, the region was derived from the provider (`spec.runtimeCluster.provider.region`). This behavior remains as a fallback if the backup region is not explicitly specified. by @timuthy [#12186]
- `[OPERATOR]` The `BackupBucket` API feature new field `spec.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#12032]
- `[USER]` It's now possible to configure the `MaxParallelImagePulls` field for the kubelet configuration in the Shoot spec via the `.spec.{provider.workers[]}.kubernetes.kubelet.maxParallelImagePulls` field. by @theoddora [#12093]
- `[DEVELOPER]` `BackupBucket` extension controllers: Instead of always creating the `Secret` referenced in `.status.generatedSecretRef` in the `garden` namespace, the controller should read the annotation `backupbucket.extensions.gardener.cloud/generated-secret-ref-namespace` and use its value. by @rfranzke [#12123]
- `[DEVELOPER]` The cloud provider `Secret` is now deployed into the autonomous shoot cluster (if specified). by @ScheererJ [#12146]
## 🐛 Bug Fixes

- `[USER]` gardenlet: An issue causing the CA bundle on the Nodes to contain wrong certificates when a worker specifies a custom CA bundle (`spec.provider.workers[].caBundle`) is now fixed. by @dimitar-kostadinov [#12150]
- `[OPERATOR]` The deletion of `NamespacedCloudProfile`s has been fixed. Previously, users could not delete these resources if objects with the same name but in different namespaces existed in the landscape. Gardener incorrectly reported them as still being referenced by shoot clusters. by @timuthy [#12188]
- `[OPERATOR]` Fixed a bug that caused the gardener operator to never reconcile the `Garden` object, when there was no `gardenerDashboard` defined. by @Wieneo [#12153]
## 🏃 Others

- `[DEVELOPER]` The `github.com/gardener/gardener/pkg/component/nodemanagement/machinecontrollermanager.ProviderSidecarContainer` func does now set initial resource requests for the machine-controller-manager provider sidecar container in order to avoid unnecessary VPA eviction for the machine-controller-manager Pod after the first VPA recommendation. by @ialidzhikov [#12160]
- `[DEVELOPER]` GEP-34 Introducing OpenTelemetry Operator and Collectors in Shoot Control Planes by @nickytd [#11861]
- `[DEVELOPER]` Remove unused codepath from the `hack/.ci/component_descriptor` script. by @ccwienk [#12173]
- `[DEVELOPER]` Shoot creation test supports using CredentialsBindings. by @hendrikKahl [#12190]
- `[OPERATOR]` Fix a race condition in dual-stack migration where `kube-dns` service gets created with an arbitrary assigned IPv6 clusterIP address. by @DockToFuture [#12170]
- `[OPERATOR]` The terminal-controller-manager no longer needs to list Secrets from the (virtual) garden cluster. by @petersutter [#12145]
- `[OPERATOR]` `gardener-node-agent` now executes readiness probe when the registry config is updated. Previously, the readiness probe was not executed if the corresponding `hosts.toml` file was present. by @ialidzhikov [#11864]
- `[OPERATOR]` Obsolete `journald-kubelet-monitor` ClusterFilter and ClusterInput resources are now deleted. The systemd unit `kubelet-monitor` was replaced by a healthcheck controller in the gardener-node-agent in Gardener v1.87.0. by @ialidzhikov [#12094]
- `[OPERATOR]` Field `garden.spec.virtualCluster.kubernetes.kubeAPIServer.sni.secretName` has been made optional. Instead `gardener-operator` falls back to a `gardener.cloud/role: garden-cert` labelled secret for the SNI setup. by @timuthy [#12133]
- `[OPERATOR]` The etcd VerticalPodAutoscaler resources now target the Etcd instead of the StatefulSet resource. On the first Seed reconciliation that deploys `etcd-druid@v0.30` etcd VerticalPodAutoscaler resources might be not operating for up to 10min due to this migration of the VerticalPodAutoscaler target from the StatefulSet to the Etcd resource. by @shreyas-s-rao [#12176]
- `[OPERATOR]` The cpu resource requests for cluster-autoscaler, gardener-resource-manager, kube-controller-manager, kube-scheduler and machine-controller-manager is increased from `5m` to `10m` in order to avoid unnecessary VPA eviction for these components after the first VPA recommendation. by @ialidzhikov [#12148]
- `[OPERATOR]` gardenadm artefacts uploaded as part of a release are now compressed. by @ScheererJ [#12179]
- `[OPERATOR]` Terraformer pod no longer defines resource limits. by @kon-angelo [#12200]
- `[OPERATOR]` Drop Istio histogram metrics from Prometheus by @vicwicker [#12142]
- `[OPERATOR]` `node-problem-detector`: the `readonly-monitor` is now enabled as part of the `system-log-monitor`.  
  This monitor detects read-only filesystems and reports them as a `nodeCondition` on the `Node` object. by @rgroemmer [#12095]
- `[OPERATOR]` Clean up `garden_shoots_custom_privileged_containers_total` metric collection. by @chrkl [#12174]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/dns/k8s-dns-node-cache` from `1.25.0` to `1.26.4`.  by @gardener-ci-robot [#12185]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.22` to `v2.2.23`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.23) by @gardener-ci-robot [#12100]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.37.3` to `0.38.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.38.0) by @gardener-ci-robot [#12184]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.37` to `v7.5.38`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.38) by @gardener-ci-robot [#12122]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.38.0` to `0.39.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.39.0) by @gardener-ci-robot [#12157]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.29.1` to `v0.30.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.30.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.29.1` to `v0.30.1`.  by @shreyas-s-rao [#12176]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.120.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `machinecontrollermanager.ProviderSidecarContainer` now expects additional `shoot` and `controlPlaneNamespace` params. In `controlplane` webhooks, extensions can use `GardenContext.GetCluster` to retrieve the shoot from the `Cluster` object. by @timebertt [#12152]
- `[OPERATOR]` The graduated and unconditionally enabled `ShootForceDeletion` feature gate has been removed. If you have references to the feature gate, clean them up before upgrading to this version of Gardener. by @acumino [#12078]
- `[OPERATOR]` The field `.seedConfig.spec.backup.credentialsRef/secretRef` will no longer be defaulted in `GardenletConfiguration` when backup is configured but reference to credentials is not provided. Operators are responsible to provide a valid credentials reference when configuring backup for seeds. Please consult the [deploy gardenlet documentation](https://gardener.cloud/docs/gardener/deployment/deploy_gardenlet/) for more information. by @dimityrmirchev [#12087]
- `[OPERATOR]` The `BackupBucket` API field `spec.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.credentialsRef`, please adapt your BackupBucket manifests to use the new `credentialsRef` field.  by @vpnachev [#12032]
- `[OPERATOR]` A new field, `clusterCompatibility`, has been added to the `Extension` API. If your landscape is managed by `gardener-operator` and your `garden` specifies `spec.extensions`, please add the `garden` cluster type value to your corresponding `Extension` resources. by @timuthy [#11982]
- `[DEVELOPER]` `WorkerPoolHash` now includes a new parameter `additionalDataInPlace` to support hash calculation for worker pools using the `InPlace` update strategy. by @acumino [#12178]
- `[DEVELOPER]` The already deprecated `github.com/gardener/gardener/pkg/utils/gardener.ReconcileTopologyAwareRoutingMetadata` func is now removed. Instead, use `github.com/gardener/gardener/pkg/utils/gardener.ReconcileTopologyAwareRoutingSettings`.  by @ialidzhikov [#12091]
## 📰 Noteworthy

- `[DEVELOPER]` The [Shoot Pod autoscaling best practices guide](https://github.com/gardener/gardener/blob/v1.120.0/docs/usage/autoscaling/shoot_pod_autoscaling_best_practices.md) now recommends for a container under VPA to not set initial resource requests less than VPA's `minAllowed` or `10m` and `10Mi`. `10m` and `10Mi` are the minimum resources VPA can recommend for a Pod (for a Pod, not a container). When a Pod with a single container under VPA defines initial resource requests less than VPA's `minAllowed` or `10m` and `10Mi`, it gets evicted right away so that the Pod minimum recommendation gets applied. by @ialidzhikov [#12030]
- `[DEVELOPER]` The `.spec.purpose` field in the ControlPlane resource is now deprecated and will be removed in Gardener v1.123. In the times before SNI was introduced and unconditionally enabled it was previously used to manage control plane exposure. by @theoddora [#12161]
- `[OPERATOR]` The field `globallyEnabled` in the `Extension` and `ControllerRegistration` APIs is deprecated and will be removed in Gardener `v1.122`. Please use `autoEnable` instead. by @timuthy [#11982]
- `[OPERATOR]` The initial resource requests of etcd container are reduced as follows:  
  - `etcd-events/etcd`: from `300m, 1G` to `30m, 150M`  
  - `etcd-main/etcd`: from `300m, 1G` to `150m, 500M` by @chungtd203338 [#11911]
## ✨ New Features

- `[OPERATOR]` New configuration options were added to `Extension` and `ControllerRegistration` APIs:  
  - `autoEnable` controls which cluster types an extension is automatically enabled (previously `globallyEnabled` - deprecated now)  
  - `clusterCompatibility` controls which cluster types an extension is compatible with.  
    
  Both fields are supposed to be set for `kind: Extension` and accept the cluster types `shoot`, `seed` and `garden`. by @timuthy [#11982]
- `[OPERATOR]` The `Garden` resource has been enhanced with a new field, `spec.VirtualCluster.ETCD.Main.Backup.Region`, which enables the configuration of the backup bucket region. Previously, the region was derived from the provider (`spec.runtimeCluster.provider.region`). This behavior remains as a fallback if the backup region is not explicitly specified. by @timuthy [#12186]
- `[OPERATOR]` The `BackupBucket` API feature new field `spec.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#12032]
- `[USER]` It's now possible to configure the `MaxParallelImagePulls` field for the kubelet configuration in the Shoot spec via the `.spec.{provider.workers[]}.kubernetes.kubelet.maxParallelImagePulls` field. by @theoddora [#12093]
- `[DEVELOPER]` `BackupBucket` extension controllers: Instead of always creating the `Secret` referenced in `.status.generatedSecretRef` in the `garden` namespace, the controller should read the annotation `backupbucket.extensions.gardener.cloud/generated-secret-ref-namespace` and use its value. by @rfranzke [#12123]
- `[DEVELOPER]` The cloud provider `Secret` is now deployed into the autonomous shoot cluster (if specified). by @ScheererJ [#12146]
## 🐛 Bug Fixes

- `[USER]` gardenlet: An issue causing the CA bundle on the Nodes to contain wrong certificates when a worker specifies a custom CA bundle (`spec.provider.workers[].caBundle`) is now fixed. by @dimitar-kostadinov [#12150]
- `[OPERATOR]` The deletion of `NamespacedCloudProfile`s has been fixed. Previously, users could not delete these resources if objects with the same name but in different namespaces existed in the landscape. Gardener incorrectly reported them as still being referenced by shoot clusters. by @timuthy [#12188]
- `[OPERATOR]` Fixed a bug that caused the gardener operator to never reconcile the `Garden` object, when there was no `gardenerDashboard` defined. by @Wieneo [#12153]
## 🏃 Others

- `[DEVELOPER]` The `github.com/gardener/gardener/pkg/component/nodemanagement/machinecontrollermanager.ProviderSidecarContainer` func does now set initial resource requests for the machine-controller-manager provider sidecar container in order to avoid unnecessary VPA eviction for the machine-controller-manager Pod after the first VPA recommendation. by @ialidzhikov [#12160]
- `[DEVELOPER]` GEP-34 Introducing OpenTelemetry Operator and Collectors in Shoot Control Planes by @nickytd [#11861]
- `[DEVELOPER]` Remove unused codepath from the `hack/.ci/component_descriptor` script. by @ccwienk [#12173]
- `[DEVELOPER]` Shoot creation test supports using CredentialsBindings. by @hendrikKahl [#12190]
- `[OPERATOR]` Fix a race condition in dual-stack migration where `kube-dns` service gets created with an arbitrary assigned IPv6 clusterIP address. by @DockToFuture [#12170]
- `[OPERATOR]` The terminal-controller-manager no longer needs to list Secrets from the (virtual) garden cluster. by @petersutter [#12145]
- `[OPERATOR]` `gardener-node-agent` now executes readiness probe when the registry config is updated. Previously, the readiness probe was not executed if the corresponding `hosts.toml` file was present. by @ialidzhikov [#11864]
- `[OPERATOR]` Obsolete `journald-kubelet-monitor` ClusterFilter and ClusterInput resources are now deleted. The systemd unit `kubelet-monitor` was replaced by a healthcheck controller in the gardener-node-agent in Gardener v1.87.0. by @ialidzhikov [#12094]
- `[OPERATOR]` Field `garden.spec.virtualCluster.kubernetes.kubeAPIServer.sni.secretName` has been made optional. Instead `gardener-operator` falls back to a `gardener.cloud/role: garden-cert` labelled secret for the SNI setup. by @timuthy [#12133]
- `[OPERATOR]` The etcd VerticalPodAutoscaler resources now target the Etcd instead of the StatefulSet resource. On the first Seed reconciliation that deploys `etcd-druid@v0.30` etcd VerticalPodAutoscaler resources might be not operating for up to 10min due to this migration of the VerticalPodAutoscaler target from the StatefulSet to the Etcd resource. by @shreyas-s-rao [#12176]
- `[OPERATOR]` The cpu resource requests for cluster-autoscaler, gardener-resource-manager, kube-controller-manager, kube-scheduler and machine-controller-manager is increased from `5m` to `10m` in order to avoid unnecessary VPA eviction for these components after the first VPA recommendation. by @ialidzhikov [#12148]
- `[OPERATOR]` gardenadm artefacts uploaded as part of a release are now compressed. by @ScheererJ [#12179]
- `[OPERATOR]` Terraformer pod no longer defines resource limits. by @kon-angelo [#12200]
- `[OPERATOR]` Drop Istio histogram metrics from Prometheus by @vicwicker [#12142]
- `[OPERATOR]` `node-problem-detector`: the `readonly-monitor` is now enabled as part of the `system-log-monitor`.  
  This monitor detects read-only filesystems and reports them as a `nodeCondition` on the `Node` object. by @rgroemmer [#12095]
- `[OPERATOR]` Clean up `garden_shoots_custom_privileged_containers_total` metric collection. by @chrkl [#12174]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/dns/k8s-dns-node-cache` from `1.25.0` to `1.26.4`.  by @gardener-ci-robot [#12185]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.22` to `v2.2.23`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.23) by @gardener-ci-robot [#12100]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.37.3` to `0.38.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.38.0) by @gardener-ci-robot [#12184]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.37` to `v7.5.38`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.38) by @gardener-ci-robot [#12122]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.38.0` to `0.39.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.39.0) by @gardener-ci-robot [#12157]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.29.1` to `v0.30.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.30.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.29.1` to `v0.30.1`.  by @shreyas-s-rao [#12176]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.120.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `machinecontrollermanager.ProviderSidecarContainer` now expects additional `shoot` and `controlPlaneNamespace` params. In `controlplane` webhooks, extensions can use `GardenContext.GetCluster` to retrieve the shoot from the `Cluster` object. by @timebertt [#12152]
- `[OPERATOR]` The graduated and unconditionally enabled `ShootForceDeletion` feature gate has been removed. If you have references to the feature gate, clean them up before upgrading to this version of Gardener. by @acumino [#12078]
- `[OPERATOR]` The field `.seedConfig.spec.backup.credentialsRef/secretRef` will no longer be defaulted in `GardenletConfiguration` when backup is configured but reference to credentials is not provided. Operators are responsible to provide a valid credentials reference when configuring backup for seeds. Please consult the [deploy gardenlet documentation](https://gardener.cloud/docs/gardener/deployment/deploy_gardenlet/) for more information. by @dimityrmirchev [#12087]
- `[OPERATOR]` The `BackupBucket` API field `spec.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.credentialsRef`, please adapt your BackupBucket manifests to use the new `credentialsRef` field.  by @vpnachev [#12032]
- `[OPERATOR]` A new field, `clusterCompatibility`, has been added to the `Extension` API. If your landscape is managed by `gardener-operator` and your `garden` specifies `spec.extensions`, please add the `garden` cluster type value to your corresponding `Extension` resources. by @timuthy [#11982]
- `[DEVELOPER]` `WorkerPoolHash` now includes a new parameter `additionalDataInPlace` to support hash calculation for worker pools using the `InPlace` update strategy. by @acumino [#12178]
- `[DEVELOPER]` The already deprecated `github.com/gardener/gardener/pkg/utils/gardener.ReconcileTopologyAwareRoutingMetadata` func is now removed. Instead, use `github.com/gardener/gardener/pkg/utils/gardener.ReconcileTopologyAwareRoutingSettings`.  by @ialidzhikov [#12091]
## 📰 Noteworthy

- `[DEVELOPER]` The [Shoot Pod autoscaling best practices guide](https://github.com/gardener/gardener/blob/v1.120.0/docs/usage/autoscaling/shoot_pod_autoscaling_best_practices.md) now recommends for a container under VPA to not set initial resource requests less than VPA's `minAllowed` or `10m` and `10Mi`. `10m` and `10Mi` are the minimum resources VPA can recommend for a Pod (for a Pod, not a container). When a Pod with a single container under VPA defines initial resource requests less than VPA's `minAllowed` or `10m` and `10Mi`, it gets evicted right away so that the Pod minimum recommendation gets applied. by @ialidzhikov [#12030]
- `[DEVELOPER]` The `.spec.purpose` field in the ControlPlane resource is now deprecated and will be removed in Gardener v1.123. In the times before SNI was introduced and unconditionally enabled it was previously used to manage control plane exposure. by @theoddora [#12161]
- `[OPERATOR]` The field `globallyEnabled` in the `Extension` and `ControllerRegistration` APIs is deprecated and will be removed in Gardener `v1.122`. Please use `autoEnable` instead. by @timuthy [#11982]
- `[OPERATOR]` The initial resource requests of etcd container are reduced as follows:  
  - `etcd-events/etcd`: from `300m, 1G` to `30m, 150M`  
  - `etcd-main/etcd`: from `300m, 1G` to `150m, 500M` by @chungtd203338 [#11911]
## ✨ New Features

- `[OPERATOR]` New configuration options were added to `Extension` and `ControllerRegistration` APIs:  
  - `autoEnable` controls which cluster types an extension is automatically enabled (previously `globallyEnabled` - deprecated now)  
  - `clusterCompatibility` controls which cluster types an extension is compatible with.  
    
  Both fields are supposed to be set for `kind: Extension` and accept the cluster types `shoot`, `seed` and `garden`. by @timuthy [#11982]
- `[OPERATOR]` The `Garden` resource has been enhanced with a new field, `spec.VirtualCluster.ETCD.Main.Backup.Region`, which enables the configuration of the backup bucket region. Previously, the region was derived from the provider (`spec.runtimeCluster.provider.region`). This behavior remains as a fallback if the backup region is not explicitly specified. by @timuthy [#12186]
- `[OPERATOR]` The `BackupBucket` API feature new field `spec.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#12032]
- `[USER]` It's now possible to configure the `MaxParallelImagePulls` field for the kubelet configuration in the Shoot spec via the `.spec.{provider.workers[]}.kubernetes.kubelet.maxParallelImagePulls` field. by @theoddora [#12093]
- `[DEVELOPER]` `BackupBucket` extension controllers: Instead of always creating the `Secret` referenced in `.status.generatedSecretRef` in the `garden` namespace, the controller should read the annotation `backupbucket.extensions.gardener.cloud/generated-secret-ref-namespace` and use its value. by @rfranzke [#12123]
- `[DEVELOPER]` The cloud provider `Secret` is now deployed into the autonomous shoot cluster (if specified). by @ScheererJ [#12146]
## 🐛 Bug Fixes

- `[USER]` gardenlet: An issue causing the CA bundle on the Nodes to contain wrong certificates when a worker specifies a custom CA bundle (`spec.provider.workers[].caBundle`) is now fixed. by @dimitar-kostadinov [#12150]
- `[OPERATOR]` The deletion of `NamespacedCloudProfile`s has been fixed. Previously, users could not delete these resources if objects with the same name but in different namespaces existed in the landscape. Gardener incorrectly reported them as still being referenced by shoot clusters. by @timuthy [#12188]
- `[OPERATOR]` Fixed a bug that caused the gardener operator to never reconcile the `Garden` object, when there was no `gardenerDashboard` defined. by @Wieneo [#12153]
## 🏃 Others

- `[DEVELOPER]` The `github.com/gardener/gardener/pkg/component/nodemanagement/machinecontrollermanager.ProviderSidecarContainer` func does now set initial resource requests for the machine-controller-manager provider sidecar container in order to avoid unnecessary VPA eviction for the machine-controller-manager Pod after the first VPA recommendation. by @ialidzhikov [#12160]
- `[DEVELOPER]` GEP-34 Introducing OpenTelemetry Operator and Collectors in Shoot Control Planes by @nickytd [#11861]
- `[DEVELOPER]` Remove unused codepath from the `hack/.ci/component_descriptor` script. by @ccwienk [#12173]
- `[DEVELOPER]` Shoot creation test supports using CredentialsBindings. by @hendrikKahl [#12190]
- `[OPERATOR]` Fix a race condition in dual-stack migration where `kube-dns` service gets created with an arbitrary assigned IPv6 clusterIP address. by @DockToFuture [#12170]
- `[OPERATOR]` The terminal-controller-manager no longer needs to list Secrets from the (virtual) garden cluster. by @petersutter [#12145]
- `[OPERATOR]` `gardener-node-agent` now executes readiness probe when the registry config is updated. Previously, the readiness probe was not executed if the corresponding `hosts.toml` file was present. by @ialidzhikov [#11864]
- `[OPERATOR]` Obsolete `journald-kubelet-monitor` ClusterFilter and ClusterInput resources are now deleted. The systemd unit `kubelet-monitor` was replaced by a healthcheck controller in the gardener-node-agent in Gardener v1.87.0. by @ialidzhikov [#12094]
- `[OPERATOR]` Field `garden.spec.virtualCluster.kubernetes.kubeAPIServer.sni.secretName` has been made optional. Instead `gardener-operator` falls back to a `gardener.cloud/role: garden-cert` labelled secret for the SNI setup. by @timuthy [#12133]
- `[OPERATOR]` The etcd VerticalPodAutoscaler resources now target the Etcd instead of the StatefulSet resource. On the first Seed reconciliation that deploys `etcd-druid@v0.30` etcd VerticalPodAutoscaler resources might be not operating for up to 10min due to this migration of the VerticalPodAutoscaler target from the StatefulSet to the Etcd resource. by @shreyas-s-rao [#12176]
- `[OPERATOR]` The cpu resource requests for cluster-autoscaler, gardener-resource-manager, kube-controller-manager, kube-scheduler and machine-controller-manager is increased from `5m` to `10m` in order to avoid unnecessary VPA eviction for these components after the first VPA recommendation. by @ialidzhikov [#12148]
- `[OPERATOR]` gardenadm artefacts uploaded as part of a release are now compressed. by @ScheererJ [#12179]
- `[OPERATOR]` Terraformer pod no longer defines resource limits. by @kon-angelo [#12200]
- `[OPERATOR]` Drop Istio histogram metrics from Prometheus by @vicwicker [#12142]
- `[OPERATOR]` `node-problem-detector`: the `readonly-monitor` is now enabled as part of the `system-log-monitor`.  
  This monitor detects read-only filesystems and reports them as a `nodeCondition` on the `Node` object. by @rgroemmer [#12095]
- `[OPERATOR]` Clean up `garden_shoots_custom_privileged_containers_total` metric collection. by @chrkl [#12174]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/dns/k8s-dns-node-cache` from `1.25.0` to `1.26.4`.  by @gardener-ci-robot [#12185]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.22` to `v2.2.23`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.23) by @gardener-ci-robot [#12100]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.37.3` to `0.38.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.38.0) by @gardener-ci-robot [#12184]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.37` to `v7.5.38`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.38) by @gardener-ci-robot [#12122]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.38.0` to `0.39.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.39.0) by @gardener-ci-robot [#12157]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.29.1` to `v0.30.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.30.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.29.1` to `v0.30.1`.  by @shreyas-s-rao [#12176]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.0`


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
