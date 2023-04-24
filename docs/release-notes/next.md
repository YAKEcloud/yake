---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs

<details>
<summary><b>Update gardener-controlplane to <code>1.69.0</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[OPERATOR]* `Seed` and `ManagedSeed` API validation has been enhanced by the following checks: ([gardener/gardener#7695](https://github.com/gardener/gardener/pull/7695), [@timuthy](https://github.com/timuthy))
  * (a) New `ManagedSeed`s can only use the very same zone(s) (`managedSeed.spec.gardenlet.config.seedConfig.spec.provider.zones`) that are available in the referenced `Shoot` (`shoot.spec.provider.workers[].zones`).
  * (b) Existing `ManagedSeed`s can only add additional zones that are available in the referenced shoot.
  * (c) Removing elements in `seed.spec.provider.zones` is denied if shoots are still scheduled to the affected seed.
  * These restrictions were removed in Gardener `v1.60` to compensate a zone mismatch issue in Azure that is in the meantime fixed by the Azure provider extension [v1.34](https://github.com/gardener/gardener-extension-provider-azure/releases/tag/v1.34.0).
  * ⚠️ Before upgrading to this Gardener version, please make sure to check existing `ManagedSeed` objects. They should configure as many as zone as there are available in the referenced shoot - see check (c).
* *[OPERATOR]* gardenlet now cleans up VolumeSnapshot and VolumeSnapshotContent resources from the `v1` API of the `snapshot.storage.k8s.io` group. `v1` is served starting `external-snapshotter@v4`. Before upgrading to this version of Gardener make sure that provider extension install at least `external-snapshotter@v4` and do not install any lower version. ([gardener/gardener#7759](https://github.com/gardener/gardener/pull/7759), [@ialidzhikov](https://github.com/ialidzhikov))
## ✨ New Features
* *[OPERATOR]* Annotations in `GardenletConfiguration.seedConfig.metadata.annotations` are added to the `Seed` object during registration. If an annotation is removed from `seedConfig`, it is **not** removed from the `Seed` object. ([gardener/gardener#7753](https://github.com/gardener/gardener/pull/7753), [@timebertt](https://github.com/timebertt))
* *[OPERATOR]* It is now possible to perform control plane migration for HA shoot clusters. ([gardener/gardener#7626](https://github.com/gardener/gardener/pull/7626), [@plkokanov](https://github.com/plkokanov))
* *[DEVELOPER]* Gardener's local setup now supports bootstrapping a Seed with IPv6 single-stack networking using `make gardener-up IPFAMILY=ipv6`. See the [documentation](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md) for more detailed steps. ([gardener/gardener#7561](https://github.com/gardener/gardener/pull/7561), [@breuerfelix](https://github.com/breuerfelix))
* *[DEVELOPER]* Developers can now use `make gardener-debug` to start a skaffold-based debugging loop which allows remote debugging of Gardener Core pods using Delve. See the [documentation](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#debugging-gardener) for more details. ([gardener/gardener#7755](https://github.com/gardener/gardener/pull/7755), [@oliver-goetz](https://github.com/oliver-goetz))
* *[DEVELOPER]* `generate-controller-registration.sh` now supports extension charts with fully-qualified `image` values instead of the usual `image` stanza with values for `repository` and `tag`. With this, skaffold can be configured (using `resourceSelector`) to inject a freshly-built image reference into the generated `ControllerDeployment`. ([gardener/gardener#7757](https://github.com/gardener/gardener/pull/7757), [@timebertt](https://github.com/timebertt))
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing the garden/grafana Pod to fail to reach to the garden/loki Pod on cilium Seed clusters is now mitigated. ([gardener/gardener#7766](https://github.com/gardener/gardener/pull/7766), [@Kristian-ZH](https://github.com/Kristian-ZH))
* *[OPERATOR]* An issue causing `state-metrics-seed` status to show down falsely has been fixed. ([gardener/gardener#7771](https://github.com/gardener/gardener/pull/7771), [@acumino](https://github.com/acumino))
* *[OPERATOR]* An issue causing the "cache" Prometheus in the (managed) seed's garden namespace to fail when scraping the node-exporter-s in the kube-system namespace has been fixed. ([gardener/gardener#7772](https://github.com/gardener/gardener/pull/7772), [@istvanballok](https://github.com/istvanballok))
* *[OPERATOR]* A bug in grafana dashboards checking `kube-apiserver` job for `kube-controller-manager` up status is now fixed. ([gardener/gardener#7773](https://github.com/gardener/gardener/pull/7773), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* Fixed potential leaks of `ShootState`s that could happen when a `Shoot` cluster is deleted. This is achieved by no longer exiting early from the deletion flow if the shoot's seed `Namespace` has been deleted. The same logic has been applied to the migration flow for consistency. ([gardener/gardener#7789](https://github.com/gardener/gardener/pull/7789), [@plkokanov](https://github.com/plkokanov))
* *[OPERATOR]* A bug causing `kube-controller-manager` to fail to clean up `ShootState` resources is now fixed. ([gardener/gardener#7793](https://github.com/gardener/gardener/pull/7793), [@shafeeqes](https://github.com/shafeeqes))
## 🏃 Others
* *[OPERATOR]* The `.spec.settings.ownerChecks` field of the Seed configuration is deprecated. The "bad-case" control plane migration is being removed in favor of the HA Shoot control planes (see https://github.com/gardener/gardener/issues/6302). The field will be locked to `false` in a future version of Gardener. In this way gardenlet will clean up all owner DNSRecords. Finally, the field will be removed from the API. Set this field to `false` to be prepared for the above-mentioned locking. ([gardener/gardener#7748](https://github.com/gardener/gardener/pull/7748), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[OPERATOR]* The `SeedChange` and `CopyEtcdBackupsDuringControlPlaneMigration` feature gates have been promoted to GA and are now locked to `true`. ([gardener/gardener#7763](https://github.com/gardener/gardener/pull/7763), [@plkokanov](https://github.com/plkokanov))
* *[OPERATOR]* The nested kubelet in the Gardener e2e tests (in prow/kind) now work on hosts using cgroupsv2 ([gardener/gardener#7780](https://github.com/gardener/gardener/pull/7780), [@danielfoehrKn](https://github.com/danielfoehrKn))
* *[OPERATOR]* The following images are updated: ([gardener/gardener#7787](https://github.com/gardener/gardener/pull/7787), [@elankath](https://github.com/elankath))
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.21.4` -> `v1.21.5` (for Kubernetes `1.21`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.22.4` -> `v1.22.5` (for Kubernetes `1.22`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.23.2` -> `v1.22.3` (for Kubernetes `1.23`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.24.1` -> `v1.24.2` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.25.1` -> `v1.25.2` (for Kubernetes `1.25`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.26.1`  (for Kubernetes `1.26`)
* *[DEVELOPER]* The logging integration test is now switched from the `loki` Service to `logging` Service. ([gardener/gardener#7778](https://github.com/gardener/gardener/pull/7778), [@vlvasilev](https://github.com/vlvasilev))
* *[DEVELOPER]* Set `cgroupDriver` of `provider-local` to `systemd`. ([gardener/gardener#7797](https://github.com/gardener/gardener/pull/7797), [@oliver-goetz](https://github.com/oliver-goetz))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.69.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.69.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.69.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.69.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.69.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.69.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.69.0`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.69.0</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[OPERATOR]* `Seed` and `ManagedSeed` API validation has been enhanced by the following checks: ([gardener/gardener#7695](https://github.com/gardener/gardener/pull/7695), [@timuthy](https://github.com/timuthy))
  * (a) New `ManagedSeed`s can only use the very same zone(s) (`managedSeed.spec.gardenlet.config.seedConfig.spec.provider.zones`) that are available in the referenced `Shoot` (`shoot.spec.provider.workers[].zones`).
  * (b) Existing `ManagedSeed`s can only add additional zones that are available in the referenced shoot.
  * (c) Removing elements in `seed.spec.provider.zones` is denied if shoots are still scheduled to the affected seed.
  * These restrictions were removed in Gardener `v1.60` to compensate a zone mismatch issue in Azure that is in the meantime fixed by the Azure provider extension [v1.34](https://github.com/gardener/gardener-extension-provider-azure/releases/tag/v1.34.0).
  * ⚠️ Before upgrading to this Gardener version, please make sure to check existing `ManagedSeed` objects. They should configure as many as zone as there are available in the referenced shoot - see check (c).
* *[OPERATOR]* gardenlet now cleans up VolumeSnapshot and VolumeSnapshotContent resources from the `v1` API of the `snapshot.storage.k8s.io` group. `v1` is served starting `external-snapshotter@v4`. Before upgrading to this version of Gardener make sure that provider extension install at least `external-snapshotter@v4` and do not install any lower version. ([gardener/gardener#7759](https://github.com/gardener/gardener/pull/7759), [@ialidzhikov](https://github.com/ialidzhikov))
## ✨ New Features
* *[OPERATOR]* Annotations in `GardenletConfiguration.seedConfig.metadata.annotations` are added to the `Seed` object during registration. If an annotation is removed from `seedConfig`, it is **not** removed from the `Seed` object. ([gardener/gardener#7753](https://github.com/gardener/gardener/pull/7753), [@timebertt](https://github.com/timebertt))
* *[OPERATOR]* It is now possible to perform control plane migration for HA shoot clusters. ([gardener/gardener#7626](https://github.com/gardener/gardener/pull/7626), [@plkokanov](https://github.com/plkokanov))
* *[DEVELOPER]* Gardener's local setup now supports bootstrapping a Seed with IPv6 single-stack networking using `make gardener-up IPFAMILY=ipv6`. See the [documentation](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md) for more detailed steps. ([gardener/gardener#7561](https://github.com/gardener/gardener/pull/7561), [@breuerfelix](https://github.com/breuerfelix))
* *[DEVELOPER]* Developers can now use `make gardener-debug` to start a skaffold-based debugging loop which allows remote debugging of Gardener Core pods using Delve. See the [documentation](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#debugging-gardener) for more details. ([gardener/gardener#7755](https://github.com/gardener/gardener/pull/7755), [@oliver-goetz](https://github.com/oliver-goetz))
* *[DEVELOPER]* `generate-controller-registration.sh` now supports extension charts with fully-qualified `image` values instead of the usual `image` stanza with values for `repository` and `tag`. With this, skaffold can be configured (using `resourceSelector`) to inject a freshly-built image reference into the generated `ControllerDeployment`. ([gardener/gardener#7757](https://github.com/gardener/gardener/pull/7757), [@timebertt](https://github.com/timebertt))
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing the garden/grafana Pod to fail to reach to the garden/loki Pod on cilium Seed clusters is now mitigated. ([gardener/gardener#7766](https://github.com/gardener/gardener/pull/7766), [@Kristian-ZH](https://github.com/Kristian-ZH))
* *[OPERATOR]* An issue causing `state-metrics-seed` status to show down falsely has been fixed. ([gardener/gardener#7771](https://github.com/gardener/gardener/pull/7771), [@acumino](https://github.com/acumino))
* *[OPERATOR]* An issue causing the "cache" Prometheus in the (managed) seed's garden namespace to fail when scraping the node-exporter-s in the kube-system namespace has been fixed. ([gardener/gardener#7772](https://github.com/gardener/gardener/pull/7772), [@istvanballok](https://github.com/istvanballok))
* *[OPERATOR]* A bug in grafana dashboards checking `kube-apiserver` job for `kube-controller-manager` up status is now fixed. ([gardener/gardener#7773](https://github.com/gardener/gardener/pull/7773), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* Fixed potential leaks of `ShootState`s that could happen when a `Shoot` cluster is deleted. This is achieved by no longer exiting early from the deletion flow if the shoot's seed `Namespace` has been deleted. The same logic has been applied to the migration flow for consistency. ([gardener/gardener#7789](https://github.com/gardener/gardener/pull/7789), [@plkokanov](https://github.com/plkokanov))
* *[OPERATOR]* A bug causing `kube-controller-manager` to fail to clean up `ShootState` resources is now fixed. ([gardener/gardener#7793](https://github.com/gardener/gardener/pull/7793), [@shafeeqes](https://github.com/shafeeqes))
## 🏃 Others
* *[OPERATOR]* The `.spec.settings.ownerChecks` field of the Seed configuration is deprecated. The "bad-case" control plane migration is being removed in favor of the HA Shoot control planes (see https://github.com/gardener/gardener/issues/6302). The field will be locked to `false` in a future version of Gardener. In this way gardenlet will clean up all owner DNSRecords. Finally, the field will be removed from the API. Set this field to `false` to be prepared for the above-mentioned locking. ([gardener/gardener#7748](https://github.com/gardener/gardener/pull/7748), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[OPERATOR]* The `SeedChange` and `CopyEtcdBackupsDuringControlPlaneMigration` feature gates have been promoted to GA and are now locked to `true`. ([gardener/gardener#7763](https://github.com/gardener/gardener/pull/7763), [@plkokanov](https://github.com/plkokanov))
* *[OPERATOR]* The nested kubelet in the Gardener e2e tests (in prow/kind) now work on hosts using cgroupsv2 ([gardener/gardener#7780](https://github.com/gardener/gardener/pull/7780), [@danielfoehrKn](https://github.com/danielfoehrKn))
* *[OPERATOR]* The following images are updated: ([gardener/gardener#7787](https://github.com/gardener/gardener/pull/7787), [@elankath](https://github.com/elankath))
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.21.4` -> `v1.21.5` (for Kubernetes `1.21`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.22.4` -> `v1.22.5` (for Kubernetes `1.22`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.23.2` -> `v1.22.3` (for Kubernetes `1.23`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.24.1` -> `v1.24.2` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.25.1` -> `v1.25.2` (for Kubernetes `1.25`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.26.1`  (for Kubernetes `1.26`)
* *[DEVELOPER]* The logging integration test is now switched from the `loki` Service to `logging` Service. ([gardener/gardener#7778](https://github.com/gardener/gardener/pull/7778), [@vlvasilev](https://github.com/vlvasilev))
* *[DEVELOPER]* Set `cgroupDriver` of `provider-local` to `systemd`. ([gardener/gardener#7797](https://github.com/gardener/gardener/pull/7797), [@oliver-goetz](https://github.com/oliver-goetz))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.69.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.69.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.69.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.69.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.69.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.69.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.69.0`

</details>

<details>
<summary><b>Update gardenlet to <code>1.69.0</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[OPERATOR]* `Seed` and `ManagedSeed` API validation has been enhanced by the following checks: ([gardener/gardener#7695](https://github.com/gardener/gardener/pull/7695), [@timuthy](https://github.com/timuthy))
  * (a) New `ManagedSeed`s can only use the very same zone(s) (`managedSeed.spec.gardenlet.config.seedConfig.spec.provider.zones`) that are available in the referenced `Shoot` (`shoot.spec.provider.workers[].zones`).
  * (b) Existing `ManagedSeed`s can only add additional zones that are available in the referenced shoot.
  * (c) Removing elements in `seed.spec.provider.zones` is denied if shoots are still scheduled to the affected seed.
  * These restrictions were removed in Gardener `v1.60` to compensate a zone mismatch issue in Azure that is in the meantime fixed by the Azure provider extension [v1.34](https://github.com/gardener/gardener-extension-provider-azure/releases/tag/v1.34.0).
  * ⚠️ Before upgrading to this Gardener version, please make sure to check existing `ManagedSeed` objects. They should configure as many as zone as there are available in the referenced shoot - see check (c).
* *[OPERATOR]* gardenlet now cleans up VolumeSnapshot and VolumeSnapshotContent resources from the `v1` API of the `snapshot.storage.k8s.io` group. `v1` is served starting `external-snapshotter@v4`. Before upgrading to this version of Gardener make sure that provider extension install at least `external-snapshotter@v4` and do not install any lower version. ([gardener/gardener#7759](https://github.com/gardener/gardener/pull/7759), [@ialidzhikov](https://github.com/ialidzhikov))
## ✨ New Features
* *[OPERATOR]* Annotations in `GardenletConfiguration.seedConfig.metadata.annotations` are added to the `Seed` object during registration. If an annotation is removed from `seedConfig`, it is **not** removed from the `Seed` object. ([gardener/gardener#7753](https://github.com/gardener/gardener/pull/7753), [@timebertt](https://github.com/timebertt))
* *[OPERATOR]* It is now possible to perform control plane migration for HA shoot clusters. ([gardener/gardener#7626](https://github.com/gardener/gardener/pull/7626), [@plkokanov](https://github.com/plkokanov))
* *[DEVELOPER]* Gardener's local setup now supports bootstrapping a Seed with IPv6 single-stack networking using `make gardener-up IPFAMILY=ipv6`. See the [documentation](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md) for more detailed steps. ([gardener/gardener#7561](https://github.com/gardener/gardener/pull/7561), [@breuerfelix](https://github.com/breuerfelix))
* *[DEVELOPER]* Developers can now use `make gardener-debug` to start a skaffold-based debugging loop which allows remote debugging of Gardener Core pods using Delve. See the [documentation](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#debugging-gardener) for more details. ([gardener/gardener#7755](https://github.com/gardener/gardener/pull/7755), [@oliver-goetz](https://github.com/oliver-goetz))
* *[DEVELOPER]* `generate-controller-registration.sh` now supports extension charts with fully-qualified `image` values instead of the usual `image` stanza with values for `repository` and `tag`. With this, skaffold can be configured (using `resourceSelector`) to inject a freshly-built image reference into the generated `ControllerDeployment`. ([gardener/gardener#7757](https://github.com/gardener/gardener/pull/7757), [@timebertt](https://github.com/timebertt))
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing the garden/grafana Pod to fail to reach to the garden/loki Pod on cilium Seed clusters is now mitigated. ([gardener/gardener#7766](https://github.com/gardener/gardener/pull/7766), [@Kristian-ZH](https://github.com/Kristian-ZH))
* *[OPERATOR]* An issue causing `state-metrics-seed` status to show down falsely has been fixed. ([gardener/gardener#7771](https://github.com/gardener/gardener/pull/7771), [@acumino](https://github.com/acumino))
* *[OPERATOR]* An issue causing the "cache" Prometheus in the (managed) seed's garden namespace to fail when scraping the node-exporter-s in the kube-system namespace has been fixed. ([gardener/gardener#7772](https://github.com/gardener/gardener/pull/7772), [@istvanballok](https://github.com/istvanballok))
* *[OPERATOR]* A bug in grafana dashboards checking `kube-apiserver` job for `kube-controller-manager` up status is now fixed. ([gardener/gardener#7773](https://github.com/gardener/gardener/pull/7773), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* Fixed potential leaks of `ShootState`s that could happen when a `Shoot` cluster is deleted. This is achieved by no longer exiting early from the deletion flow if the shoot's seed `Namespace` has been deleted. The same logic has been applied to the migration flow for consistency. ([gardener/gardener#7789](https://github.com/gardener/gardener/pull/7789), [@plkokanov](https://github.com/plkokanov))
* *[OPERATOR]* A bug causing `kube-controller-manager` to fail to clean up `ShootState` resources is now fixed. ([gardener/gardener#7793](https://github.com/gardener/gardener/pull/7793), [@shafeeqes](https://github.com/shafeeqes))
## 🏃 Others
* *[OPERATOR]* The `.spec.settings.ownerChecks` field of the Seed configuration is deprecated. The "bad-case" control plane migration is being removed in favor of the HA Shoot control planes (see https://github.com/gardener/gardener/issues/6302). The field will be locked to `false` in a future version of Gardener. In this way gardenlet will clean up all owner DNSRecords. Finally, the field will be removed from the API. Set this field to `false` to be prepared for the above-mentioned locking. ([gardener/gardener#7748](https://github.com/gardener/gardener/pull/7748), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[OPERATOR]* The `SeedChange` and `CopyEtcdBackupsDuringControlPlaneMigration` feature gates have been promoted to GA and are now locked to `true`. ([gardener/gardener#7763](https://github.com/gardener/gardener/pull/7763), [@plkokanov](https://github.com/plkokanov))
* *[OPERATOR]* The nested kubelet in the Gardener e2e tests (in prow/kind) now work on hosts using cgroupsv2 ([gardener/gardener#7780](https://github.com/gardener/gardener/pull/7780), [@danielfoehrKn](https://github.com/danielfoehrKn))
* *[OPERATOR]* The following images are updated: ([gardener/gardener#7787](https://github.com/gardener/gardener/pull/7787), [@elankath](https://github.com/elankath))
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.21.4` -> `v1.21.5` (for Kubernetes `1.21`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.22.4` -> `v1.22.5` (for Kubernetes `1.22`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.23.2` -> `v1.22.3` (for Kubernetes `1.23`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.24.1` -> `v1.24.2` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.25.1` -> `v1.25.2` (for Kubernetes `1.25`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.26.1`  (for Kubernetes `1.26`)
* *[DEVELOPER]* The logging integration test is now switched from the `loki` Service to `logging` Service. ([gardener/gardener#7778](https://github.com/gardener/gardener/pull/7778), [@vlvasilev](https://github.com/vlvasilev))
* *[DEVELOPER]* Set `cgroupDriver` of `provider-local` to `systemd`. ([gardener/gardener#7797](https://github.com/gardener/gardener/pull/7797), [@oliver-goetz](https://github.com/oliver-goetz))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.69.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.69.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.69.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.69.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.69.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.69.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.69.0`

</details>

<details>
<summary><b>Update provider-azure to <code>1.35.1</code></b></summary>

# [gardener-extension-provider-azure]
## 🏃 Others
* *[OPERATOR]* Restore terraform behavior to delete the azure resource group even if it contains other resources. ([gardener/gardener-extension-provider-azure#676](https://github.com/gardener/gardener-extension-provider-azure/pull/676), [@kon-angelo](https://github.com/kon-angelo))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.69.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* Prevent nil pointer exceptions on shoot deletion in `gardenlet` when seed namespace is gone. ([gardener/gardener#7833](https://github.com/gardener/gardener/pull/7833), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.69.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.69.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.69.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.69.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.69.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.69.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.69.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.69.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* Prevent nil pointer exceptions on shoot deletion in `gardenlet` when seed namespace is gone. ([gardener/gardener#7833](https://github.com/gardener/gardener/pull/7833), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.69.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.69.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.69.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.69.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.69.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.69.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.69.1`

</details>

<details>
<summary><b>Update gardenlet to <code>1.69.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* Prevent nil pointer exceptions on shoot deletion in `gardenlet` when seed namespace is gone. ([gardener/gardener#7833](https://github.com/gardener/gardener/pull/7833), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.69.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.69.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.69.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.69.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.69.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.69.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.69.1`

</details>
