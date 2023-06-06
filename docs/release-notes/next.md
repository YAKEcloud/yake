---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

No special steps needed, please refer to the gardener release notes below.

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-calico to <code>1.34.0</code></b></summary>

# [gardener-extension-networking-calico]
## 🏃 Others
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-networking-calico#267](https://github.com/gardener/gardener-extension-networking-calico/pull/267), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Updated cluster-proportional-autoscaler to v1.8.8 ([gardener/gardener-extension-networking-calico#268](https://github.com/gardener/gardener-extension-networking-calico/pull/268), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Update golang to 1.20.4. ([gardener/gardener-extension-networking-calico#269](https://github.com/gardener/gardener-extension-networking-calico/pull/269), [@ScheererJ](https://github.com/ScheererJ))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-networking-calico#272](https://github.com/gardener/gardener-extension-networking-calico/pull/272), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.66.1 -> v1.71.0
  * k8s.io/* : v0.26.1 -> v0.26.3
  * sigs.k8s.io/controller-runtime: v0.14.4-> v0.14.6

</details>

<details>
<summary><b>Update networking-cilium to <code>1.25.0</code></b></summary>

# [gardener-extension-networking-cilium]
## ✨ New Features
* *[USER]* The networking-cilium extension does now run cilium with `enable-service-topology: true`. With this it is possible to use the TopologyAwareHints (topology-aware traffic routing) feature in cilium Shoots. ([gardener/gardener-extension-networking-cilium#185](https://github.com/gardener/gardener-extension-networking-cilium/pull/185), [@ialidzhikov](https://github.com/ialidzhikov))
## 🏃 Others
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-networking-cilium#186](https://github.com/gardener/gardener-extension-networking-cilium/pull/186), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Update golang to 1.20.4. ([gardener/gardener-extension-networking-cilium#187](https://github.com/gardener/gardener-extension-networking-cilium/pull/187), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* The following dependency has been updated: ([gardener/gardener-extension-networking-cilium#189](https://github.com/gardener/gardener-extension-networking-cilium/pull/189), [@acumino](https://github.com/acumino))
  * github.com/gardener/gardener 1.67.1 -> 1.71.0
* *[OPERATOR]* Update cilium to `v1.13.3`. ([gardener/gardener-extension-networking-cilium#190](https://github.com/gardener/gardener-extension-networking-cilium/pull/190), [@DockToFuture](https://github.com/DockToFuture))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.72.0</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* The `core/v1alpha1` API version is dropped. ([gardener/gardener#7965](https://github.com/gardener/gardener/pull/7965), [@ary1992](https://github.com/ary1992))
* *[USER]* The `alpha.featuregates.shoot.gardener.cloud/apiserver-sni-pod-injector` annotation has been dropped and is no longer available for `Shoot`s. It should be removed from all existing `Shoot` resources. ([gardener/gardener#7980](https://github.com/gardener/gardener/pull/7980), [@rfranzke](https://github.com/rfranzke))
* *[USER]* Any resource with a kind other than `ConfigMap` or `Secret` in `.spec.resources` in `Shoot`s is now forcefully removed. New validation has been introduced to prevent adding other resources in the future. ([gardener/gardener#7995](https://github.com/gardener/gardener/pull/7995), [@acumino](https://github.com/acumino))
* *[USER]* Webhooks remediator now sets the timeoutSeonds to 3 seconds for webhook affecting lease resources in `kube-system` namespace. ([gardener/gardener#7902](https://github.com/gardener/gardener/pull/7902), [@acumino](https://github.com/acumino))
* *[OPERATOR]* ⚠️ Seeds' `.spec.settings.ownerChecks.enabled` field is locked to `false` (i.e. if the field value is true a validation error will be returned). Before updating to this version of Gardener, set `.spec.settings.ownerChecks.enabled` field to `false` for you Seeds and ManagedSeeds. ([gardener/gardener#7909](https://github.com/gardener/gardener/pull/7909), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[OPERATOR]* It is required to have `ControllerRegistrations`s for Kinds `ControlPlane`, `Infrastructure` and `Worker` with the same types used for seeds (`seed.spec.provider.type`). This is already the case if seeds and shoots share the same cloud provider. The seed reconciliation flow waits for the associated `ControllerInstallation` to be ready before continuing rolling out seed system components. It allows Gardener provider extensions to ship components that not only act on shoot control-plane but also on seed system components. ([gardener/gardener#7928](https://github.com/gardener/gardener/pull/7928), [@timuthy](https://github.com/timuthy))
* *[DEPENDENCY]* The `{github.com/gardener/gardener/pkg/apis/core/helper,github.com/gardener/gardener/pkg/apis/core/v1beta1/helper}.SeedSettingOwnerChecksEnabled` will now return `false` if the corresponding Seed setting is `nil`. Previously, the func was returning `true` when the Seed setting is `nil`. ([gardener/gardener#7909](https://github.com/gardener/gardener/pull/7909), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[DEPENDENCY]* The unused `github.com/gardener/gardener/pkg/controllerutils/predicate.IsBeingMigratedPredicate`, `github.com/gardener/gardener/pkg/controllerutils/predicate.IsObjectBeingMigrated` and `github.com/gardener/gardener/pkg/utils/gardener.IsObjectBeingMigrated` funcs are now removed. ([gardener/gardener#7909](https://github.com/gardener/gardener/pull/7909), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
## ✨ New Features
* *[USER]* The certificate chains served by `kube-apiserver`s does now include the CA certificates used to sign their server certificates. ([gardener/gardener#7961](https://github.com/gardener/gardener/pull/7961), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* `gardener-operator` configures SNI components in order to expose the `virtual-garden-kube-apiserver` via the `istio-ingressgateway` in the Garden cluster. ([gardener/gardener#7953](https://github.com/gardener/gardener/pull/7953), [@timuthy](https://github.com/timuthy))
  * With this change, operators can start to switch DNS records from the `virtual-garden-kube-apiserver` service to the `istio-ingress` service endpoint. The type of the `virtual-garden-kube-apiserver` service will soon be switched from `LoadBalancer` to `ClusterIP`.
* *[DEVELOPER]* When performing control plane migration with `provider-local`, the full migration and restoration logic implemented in the extensions library (generic `Worker` actuator) is now executed (previously, it was skipped). This improves the accuracy of the e2e tests for control plane migration. ([gardener/gardener#7981](https://github.com/gardener/gardener/pull/7981), [@rfranzke](https://github.com/rfranzke))
## 🐛 Bug Fixes
* *[USER]* A bug that prevented referencing `ConfigMap`s in `.spec.resources` in `Shoot`s has been fixed. ([gardener/gardener#7995](https://github.com/gardener/gardener/pull/7995), [@acumino](https://github.com/acumino))
* *[USER]* A bug that prevented finalizers from being added to referenced `Secret`s or `ConfigMap`s in `.spec.resources` in `Shoot`s has been fixed. ([gardener/gardener#7995](https://github.com/gardener/gardener/pull/7995), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The `NetworkPolicy` reconciler is only added to `gardener-operator` if the `.spec.runtimeCluster.networking.{pods,services}` fields of the `Garden` are set. ([gardener/gardener#7983](https://github.com/gardener/gardener/pull/7983), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* Several low timeouts (30s) that were introduced in v1.71.0 for several steps are now reverted as in some cases the Network/ControlPlane reconciliation cannot succeed for 30s. ([gardener/gardener#8005](https://github.com/gardener/gardener/pull/8005), [@ialidzhikov](https://github.com/ialidzhikov))
## 🏃 Others
* *[OPERATOR]* A configuration issue that resulted in a relatively slow startup and termination of the vali pods is fixed. ([gardener/gardener#7979](https://github.com/gardener/gardener/pull/7979), [@istvanballok](https://github.com/istvanballok))
* *[OPERATOR]* Add new grafana dashboard of seed deployment replicas ([gardener/gardener#7896](https://github.com/gardener/gardener/pull/7896), [@Sallyan](https://github.com/Sallyan))
# [dependency-watchdog]
## 🏃 Others
* *[OPERATOR]* More categories are added to label a release note for a PR on DWD. ([gardener/dependency-watchdog#75](https://github.com/gardener/dependency-watchdog/pull/75), [@himanshu-kun](https://github.com/himanshu-kun))
  * Release notifications would now be sent to `gardener-dwd` channel (private) on releases.
* *[OPERATOR]* Probes will not be created for shoots with no workers. ([gardener/dependency-watchdog#82](https://github.com/gardener/dependency-watchdog/pull/82), [@unmarshall](https://github.com/unmarshall))
* *[OPERATOR]* Fixes for `make check` target ([gardener/dependency-watchdog#87](https://github.com/gardener/dependency-watchdog/pull/87), [@unmarshall](https://github.com/unmarshall))
* *[DEPENDENCY]* Following dependencies are updated: ([gardener/dependency-watchdog#84](https://github.com/gardener/dependency-watchdog/pull/84), [@unmarshall](https://github.com/unmarshall))
  * Go - 1.20.3
  * client-go - v0.26.2
  * controller-runtime - v0.14.5
  * gomega - v1.27.1
  * zap - v1.24.0
  * gardener/gardener v1.69.0
  * k8s (api and apimachinery) - v0.26.2
# [etcd-backup-restore]
## 🐛 Bug Fixes
* *[OPERATOR]* Fixes a bug in backup-restore which falsely detects scale-up scenario incase of rolling update of statefulset. ([gardener/etcd-backup-restore#614](https://github.com/gardener/etcd-backup-restore/pull/614), [@ishan16696](https://github.com/ishan16696))
## 🏃 Others
* *[OPERATOR]* Base alpine image upgraded from `3.15.7` to `3.15.8` ([gardener/etcd-backup-restore#612](https://github.com/gardener/etcd-backup-restore/pull/612), [@aaronfern](https://github.com/aaronfern))
* *[OPERATOR]* Add a learner with backoff in case of scale-up feature is triggered. ([gardener/etcd-backup-restore#617](https://github.com/gardener/etcd-backup-restore/pull/617), [@ishan16696](https://github.com/ishan16696))
* *[OPERATOR]* Added a safety check before adding a learner(non-voting) member in etcd cluster. ([gardener/etcd-backup-restore#605](https://github.com/gardener/etcd-backup-restore/pull/605), [@ishan16696](https://github.com/ishan16696))
* *[DEVELOPER]* Upgrade to go 1.20.3 ([gardener/etcd-backup-restore#613](https://github.com/gardener/etcd-backup-restore/pull/613), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
* *[DEVELOPER]* Block public access for S3 buckets created by integration tests. ([gardener/etcd-backup-restore#615](https://github.com/gardener/etcd-backup-restore/pull/615), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
# [etcd-custom-image]
## 🏃 Others
* *[OPERATOR]* Base alpine image for etcd-custom-image upgraded from `3.15.7` to `3.15.8` ([gardener/etcd-custom-image#32](https://github.com/gardener/etcd-custom-image/pull/32), [@aaronfern](https://github.com/aaronfern))
# [etcd-druid]
## ✨ New Features
* *[DEVELOPER]* Run `make ci-e2e-kind` to run the e2e tests on local machine ([gardener/etcd-druid#547](https://github.com/gardener/etcd-druid/pull/547), [@abdasgupta](https://github.com/abdasgupta))
* *[DEVELOPER]* Eliminated `Role` helm charts and converted into Golang component with added unit tests. ([gardener/etcd-druid#538](https://github.com/gardener/etcd-druid/pull/538), [@seshachalam-yv](https://github.com/seshachalam-yv))
* *[DEVELOPER]* Eliminated `RoleBinding` helm charts and converted into Golang component with added unit tests. ([gardener/etcd-druid#539](https://github.com/gardener/etcd-druid/pull/539), [@seshachalam-yv](https://github.com/seshachalam-yv))
## 🐛 Bug Fixes
* *[OPERATOR]* Added check to ensure that the scale up annotation is removed from the etcd statefulset only when scale-up succeeds ([gardener/etcd-druid#587](https://github.com/gardener/etcd-druid/pull/587), [@ishan16696](https://github.com/ishan16696))
## 🏃 Others
* *[OPERATOR]* When scaling from single-node to multi-node etcd cluster, Etcd Druid will now first ensure that any change to the peer URL (e.g TLS enablement)  is seen by the existing etcd process running within the etcd member pod. Once that is confirmed then it will scale up the Etcd StatefulSet and add relevant annotations. ([gardener/etcd-druid#598](https://github.com/gardener/etcd-druid/pull/598), [@unmarshall](https://github.com/unmarshall))
* *[OPERATOR]* Backup-restore waits for its etcd to be ready before attempting to update peerUrl ([gardener/etcd-druid#602](https://github.com/gardener/etcd-druid/pull/602), [@abdasgupta](https://github.com/abdasgupta))
* *[OPERATOR]* When scaling from single-node to multi-node etcd cluster, Etcd Druid will now first ensure that any change to the peer URL (e.g TLS enablement)  is seen by the existing etcd process running within the etcd member pod. Once that is confirmed then it will scale up the Etcd StatefulSet and add relevant annotations. ([gardener/etcd-druid#602](https://github.com/gardener/etcd-druid/pull/602), [@abdasgupta](https://github.com/abdasgupta))
* *[OPERATOR]* etcd-custom-image updates from `v3.4.13-bootstrap-9` to `v3.4.13-bootstrap-10` ([gardener/etcd-druid#575](https://github.com/gardener/etcd-druid/pull/575), [@aaronfern](https://github.com/aaronfern))
* *[DEVELOPER]* Upgrade to go 1.20.3. ([gardener/etcd-druid#579](https://github.com/gardener/etcd-druid/pull/579), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
* *[DEVELOPER]* Block public access for S3 buckets created by e2e tests. ([gardener/etcd-druid#581](https://github.com/gardener/etcd-druid/pull/581), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
# [logging]
## 🐛 Bug Fixes
* *[OPERATOR]* Remove lastOperation check in fluent-bit-to-vali plugin. ([gardener/logging#197](https://github.com/gardener/logging/pull/197), [@vlvasilev](https://github.com/vlvasilev))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.72.0</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* The `core/v1alpha1` API version is dropped. ([gardener/gardener#7965](https://github.com/gardener/gardener/pull/7965), [@ary1992](https://github.com/ary1992))
* *[USER]* The `alpha.featuregates.shoot.gardener.cloud/apiserver-sni-pod-injector` annotation has been dropped and is no longer available for `Shoot`s. It should be removed from all existing `Shoot` resources. ([gardener/gardener#7980](https://github.com/gardener/gardener/pull/7980), [@rfranzke](https://github.com/rfranzke))
* *[USER]* Any resource with a kind other than `ConfigMap` or `Secret` in `.spec.resources` in `Shoot`s is now forcefully removed. New validation has been introduced to prevent adding other resources in the future. ([gardener/gardener#7995](https://github.com/gardener/gardener/pull/7995), [@acumino](https://github.com/acumino))
* *[USER]* Webhooks remediator now sets the timeoutSeonds to 3 seconds for webhook affecting lease resources in `kube-system` namespace. ([gardener/gardener#7902](https://github.com/gardener/gardener/pull/7902), [@acumino](https://github.com/acumino))
* *[OPERATOR]* ⚠️ Seeds' `.spec.settings.ownerChecks.enabled` field is locked to `false` (i.e. if the field value is true a validation error will be returned). Before updating to this version of Gardener, set `.spec.settings.ownerChecks.enabled` field to `false` for you Seeds and ManagedSeeds. ([gardener/gardener#7909](https://github.com/gardener/gardener/pull/7909), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[OPERATOR]* It is required to have `ControllerRegistrations`s for Kinds `ControlPlane`, `Infrastructure` and `Worker` with the same types used for seeds (`seed.spec.provider.type`). This is already the case if seeds and shoots share the same cloud provider. The seed reconciliation flow waits for the associated `ControllerInstallation` to be ready before continuing rolling out seed system components. It allows Gardener provider extensions to ship components that not only act on shoot control-plane but also on seed system components. ([gardener/gardener#7928](https://github.com/gardener/gardener/pull/7928), [@timuthy](https://github.com/timuthy))
* *[DEPENDENCY]* The `{github.com/gardener/gardener/pkg/apis/core/helper,github.com/gardener/gardener/pkg/apis/core/v1beta1/helper}.SeedSettingOwnerChecksEnabled` will now return `false` if the corresponding Seed setting is `nil`. Previously, the func was returning `true` when the Seed setting is `nil`. ([gardener/gardener#7909](https://github.com/gardener/gardener/pull/7909), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[DEPENDENCY]* The unused `github.com/gardener/gardener/pkg/controllerutils/predicate.IsBeingMigratedPredicate`, `github.com/gardener/gardener/pkg/controllerutils/predicate.IsObjectBeingMigrated` and `github.com/gardener/gardener/pkg/utils/gardener.IsObjectBeingMigrated` funcs are now removed. ([gardener/gardener#7909](https://github.com/gardener/gardener/pull/7909), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
## ✨ New Features
* *[USER]* The certificate chains served by `kube-apiserver`s does now include the CA certificates used to sign their server certificates. ([gardener/gardener#7961](https://github.com/gardener/gardener/pull/7961), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* `gardener-operator` configures SNI components in order to expose the `virtual-garden-kube-apiserver` via the `istio-ingressgateway` in the Garden cluster. ([gardener/gardener#7953](https://github.com/gardener/gardener/pull/7953), [@timuthy](https://github.com/timuthy))
  * With this change, operators can start to switch DNS records from the `virtual-garden-kube-apiserver` service to the `istio-ingress` service endpoint. The type of the `virtual-garden-kube-apiserver` service will soon be switched from `LoadBalancer` to `ClusterIP`.
* *[DEVELOPER]* When performing control plane migration with `provider-local`, the full migration and restoration logic implemented in the extensions library (generic `Worker` actuator) is now executed (previously, it was skipped). This improves the accuracy of the e2e tests for control plane migration. ([gardener/gardener#7981](https://github.com/gardener/gardener/pull/7981), [@rfranzke](https://github.com/rfranzke))
## 🐛 Bug Fixes
* *[USER]* A bug that prevented referencing `ConfigMap`s in `.spec.resources` in `Shoot`s has been fixed. ([gardener/gardener#7995](https://github.com/gardener/gardener/pull/7995), [@acumino](https://github.com/acumino))
* *[USER]* A bug that prevented finalizers from being added to referenced `Secret`s or `ConfigMap`s in `.spec.resources` in `Shoot`s has been fixed. ([gardener/gardener#7995](https://github.com/gardener/gardener/pull/7995), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The `NetworkPolicy` reconciler is only added to `gardener-operator` if the `.spec.runtimeCluster.networking.{pods,services}` fields of the `Garden` are set. ([gardener/gardener#7983](https://github.com/gardener/gardener/pull/7983), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* Several low timeouts (30s) that were introduced in v1.71.0 for several steps are now reverted as in some cases the Network/ControlPlane reconciliation cannot succeed for 30s. ([gardener/gardener#8005](https://github.com/gardener/gardener/pull/8005), [@ialidzhikov](https://github.com/ialidzhikov))
## 🏃 Others
* *[OPERATOR]* A configuration issue that resulted in a relatively slow startup and termination of the vali pods is fixed. ([gardener/gardener#7979](https://github.com/gardener/gardener/pull/7979), [@istvanballok](https://github.com/istvanballok))
* *[OPERATOR]* Add new grafana dashboard of seed deployment replicas ([gardener/gardener#7896](https://github.com/gardener/gardener/pull/7896), [@Sallyan](https://github.com/Sallyan))
# [dependency-watchdog]
## 🏃 Others
* *[OPERATOR]* More categories are added to label a release note for a PR on DWD. ([gardener/dependency-watchdog#75](https://github.com/gardener/dependency-watchdog/pull/75), [@himanshu-kun](https://github.com/himanshu-kun))
  * Release notifications would now be sent to `gardener-dwd` channel (private) on releases.
* *[OPERATOR]* Probes will not be created for shoots with no workers. ([gardener/dependency-watchdog#82](https://github.com/gardener/dependency-watchdog/pull/82), [@unmarshall](https://github.com/unmarshall))
* *[OPERATOR]* Fixes for `make check` target ([gardener/dependency-watchdog#87](https://github.com/gardener/dependency-watchdog/pull/87), [@unmarshall](https://github.com/unmarshall))
* *[DEPENDENCY]* Following dependencies are updated: ([gardener/dependency-watchdog#84](https://github.com/gardener/dependency-watchdog/pull/84), [@unmarshall](https://github.com/unmarshall))
  * Go - 1.20.3
  * client-go - v0.26.2
  * controller-runtime - v0.14.5
  * gomega - v1.27.1
  * zap - v1.24.0
  * gardener/gardener v1.69.0
  * k8s (api and apimachinery) - v0.26.2
# [etcd-backup-restore]
## 🐛 Bug Fixes
* *[OPERATOR]* Fixes a bug in backup-restore which falsely detects scale-up scenario incase of rolling update of statefulset. ([gardener/etcd-backup-restore#614](https://github.com/gardener/etcd-backup-restore/pull/614), [@ishan16696](https://github.com/ishan16696))
## 🏃 Others
* *[OPERATOR]* Base alpine image upgraded from `3.15.7` to `3.15.8` ([gardener/etcd-backup-restore#612](https://github.com/gardener/etcd-backup-restore/pull/612), [@aaronfern](https://github.com/aaronfern))
* *[OPERATOR]* Add a learner with backoff in case of scale-up feature is triggered. ([gardener/etcd-backup-restore#617](https://github.com/gardener/etcd-backup-restore/pull/617), [@ishan16696](https://github.com/ishan16696))
* *[OPERATOR]* Added a safety check before adding a learner(non-voting) member in etcd cluster. ([gardener/etcd-backup-restore#605](https://github.com/gardener/etcd-backup-restore/pull/605), [@ishan16696](https://github.com/ishan16696))
* *[DEVELOPER]* Upgrade to go 1.20.3 ([gardener/etcd-backup-restore#613](https://github.com/gardener/etcd-backup-restore/pull/613), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
* *[DEVELOPER]* Block public access for S3 buckets created by integration tests. ([gardener/etcd-backup-restore#615](https://github.com/gardener/etcd-backup-restore/pull/615), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
# [etcd-custom-image]
## 🏃 Others
* *[OPERATOR]* Base alpine image for etcd-custom-image upgraded from `3.15.7` to `3.15.8` ([gardener/etcd-custom-image#32](https://github.com/gardener/etcd-custom-image/pull/32), [@aaronfern](https://github.com/aaronfern))
# [etcd-druid]
## ✨ New Features
* *[DEVELOPER]* Run `make ci-e2e-kind` to run the e2e tests on local machine ([gardener/etcd-druid#547](https://github.com/gardener/etcd-druid/pull/547), [@abdasgupta](https://github.com/abdasgupta))
* *[DEVELOPER]* Eliminated `Role` helm charts and converted into Golang component with added unit tests. ([gardener/etcd-druid#538](https://github.com/gardener/etcd-druid/pull/538), [@seshachalam-yv](https://github.com/seshachalam-yv))
* *[DEVELOPER]* Eliminated `RoleBinding` helm charts and converted into Golang component with added unit tests. ([gardener/etcd-druid#539](https://github.com/gardener/etcd-druid/pull/539), [@seshachalam-yv](https://github.com/seshachalam-yv))
## 🐛 Bug Fixes
* *[OPERATOR]* Added check to ensure that the scale up annotation is removed from the etcd statefulset only when scale-up succeeds ([gardener/etcd-druid#587](https://github.com/gardener/etcd-druid/pull/587), [@ishan16696](https://github.com/ishan16696))
## 🏃 Others
* *[OPERATOR]* When scaling from single-node to multi-node etcd cluster, Etcd Druid will now first ensure that any change to the peer URL (e.g TLS enablement)  is seen by the existing etcd process running within the etcd member pod. Once that is confirmed then it will scale up the Etcd StatefulSet and add relevant annotations. ([gardener/etcd-druid#598](https://github.com/gardener/etcd-druid/pull/598), [@unmarshall](https://github.com/unmarshall))
* *[OPERATOR]* Backup-restore waits for its etcd to be ready before attempting to update peerUrl ([gardener/etcd-druid#602](https://github.com/gardener/etcd-druid/pull/602), [@abdasgupta](https://github.com/abdasgupta))
* *[OPERATOR]* When scaling from single-node to multi-node etcd cluster, Etcd Druid will now first ensure that any change to the peer URL (e.g TLS enablement)  is seen by the existing etcd process running within the etcd member pod. Once that is confirmed then it will scale up the Etcd StatefulSet and add relevant annotations. ([gardener/etcd-druid#602](https://github.com/gardener/etcd-druid/pull/602), [@abdasgupta](https://github.com/abdasgupta))
* *[OPERATOR]* etcd-custom-image updates from `v3.4.13-bootstrap-9` to `v3.4.13-bootstrap-10` ([gardener/etcd-druid#575](https://github.com/gardener/etcd-druid/pull/575), [@aaronfern](https://github.com/aaronfern))
* *[DEVELOPER]* Upgrade to go 1.20.3. ([gardener/etcd-druid#579](https://github.com/gardener/etcd-druid/pull/579), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
* *[DEVELOPER]* Block public access for S3 buckets created by e2e tests. ([gardener/etcd-druid#581](https://github.com/gardener/etcd-druid/pull/581), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
# [logging]
## 🐛 Bug Fixes
* *[OPERATOR]* Remove lastOperation check in fluent-bit-to-vali plugin. ([gardener/logging#197](https://github.com/gardener/logging/pull/197), [@vlvasilev](https://github.com/vlvasilev))

</details>

<details>
<summary><b>Update gardenlet to <code>1.72.0</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* The `core/v1alpha1` API version is dropped. ([gardener/gardener#7965](https://github.com/gardener/gardener/pull/7965), [@ary1992](https://github.com/ary1992))
* *[USER]* The `alpha.featuregates.shoot.gardener.cloud/apiserver-sni-pod-injector` annotation has been dropped and is no longer available for `Shoot`s. It should be removed from all existing `Shoot` resources. ([gardener/gardener#7980](https://github.com/gardener/gardener/pull/7980), [@rfranzke](https://github.com/rfranzke))
* *[USER]* Any resource with a kind other than `ConfigMap` or `Secret` in `.spec.resources` in `Shoot`s is now forcefully removed. New validation has been introduced to prevent adding other resources in the future. ([gardener/gardener#7995](https://github.com/gardener/gardener/pull/7995), [@acumino](https://github.com/acumino))
* *[USER]* Webhooks remediator now sets the timeoutSeonds to 3 seconds for webhook affecting lease resources in `kube-system` namespace. ([gardener/gardener#7902](https://github.com/gardener/gardener/pull/7902), [@acumino](https://github.com/acumino))
* *[OPERATOR]* ⚠️ Seeds' `.spec.settings.ownerChecks.enabled` field is locked to `false` (i.e. if the field value is true a validation error will be returned). Before updating to this version of Gardener, set `.spec.settings.ownerChecks.enabled` field to `false` for you Seeds and ManagedSeeds. ([gardener/gardener#7909](https://github.com/gardener/gardener/pull/7909), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[OPERATOR]* It is required to have `ControllerRegistrations`s for Kinds `ControlPlane`, `Infrastructure` and `Worker` with the same types used for seeds (`seed.spec.provider.type`). This is already the case if seeds and shoots share the same cloud provider. The seed reconciliation flow waits for the associated `ControllerInstallation` to be ready before continuing rolling out seed system components. It allows Gardener provider extensions to ship components that not only act on shoot control-plane but also on seed system components. ([gardener/gardener#7928](https://github.com/gardener/gardener/pull/7928), [@timuthy](https://github.com/timuthy))
* *[DEPENDENCY]* The `{github.com/gardener/gardener/pkg/apis/core/helper,github.com/gardener/gardener/pkg/apis/core/v1beta1/helper}.SeedSettingOwnerChecksEnabled` will now return `false` if the corresponding Seed setting is `nil`. Previously, the func was returning `true` when the Seed setting is `nil`. ([gardener/gardener#7909](https://github.com/gardener/gardener/pull/7909), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[DEPENDENCY]* The unused `github.com/gardener/gardener/pkg/controllerutils/predicate.IsBeingMigratedPredicate`, `github.com/gardener/gardener/pkg/controllerutils/predicate.IsObjectBeingMigrated` and `github.com/gardener/gardener/pkg/utils/gardener.IsObjectBeingMigrated` funcs are now removed. ([gardener/gardener#7909](https://github.com/gardener/gardener/pull/7909), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
## ✨ New Features
* *[USER]* The certificate chains served by `kube-apiserver`s does now include the CA certificates used to sign their server certificates. ([gardener/gardener#7961](https://github.com/gardener/gardener/pull/7961), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* `gardener-operator` configures SNI components in order to expose the `virtual-garden-kube-apiserver` via the `istio-ingressgateway` in the Garden cluster. ([gardener/gardener#7953](https://github.com/gardener/gardener/pull/7953), [@timuthy](https://github.com/timuthy))
  * With this change, operators can start to switch DNS records from the `virtual-garden-kube-apiserver` service to the `istio-ingress` service endpoint. The type of the `virtual-garden-kube-apiserver` service will soon be switched from `LoadBalancer` to `ClusterIP`.
* *[DEVELOPER]* When performing control plane migration with `provider-local`, the full migration and restoration logic implemented in the extensions library (generic `Worker` actuator) is now executed (previously, it was skipped). This improves the accuracy of the e2e tests for control plane migration. ([gardener/gardener#7981](https://github.com/gardener/gardener/pull/7981), [@rfranzke](https://github.com/rfranzke))
## 🐛 Bug Fixes
* *[USER]* A bug that prevented referencing `ConfigMap`s in `.spec.resources` in `Shoot`s has been fixed. ([gardener/gardener#7995](https://github.com/gardener/gardener/pull/7995), [@acumino](https://github.com/acumino))
* *[USER]* A bug that prevented finalizers from being added to referenced `Secret`s or `ConfigMap`s in `.spec.resources` in `Shoot`s has been fixed. ([gardener/gardener#7995](https://github.com/gardener/gardener/pull/7995), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The `NetworkPolicy` reconciler is only added to `gardener-operator` if the `.spec.runtimeCluster.networking.{pods,services}` fields of the `Garden` are set. ([gardener/gardener#7983](https://github.com/gardener/gardener/pull/7983), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* Several low timeouts (30s) that were introduced in v1.71.0 for several steps are now reverted as in some cases the Network/ControlPlane reconciliation cannot succeed for 30s. ([gardener/gardener#8005](https://github.com/gardener/gardener/pull/8005), [@ialidzhikov](https://github.com/ialidzhikov))
## 🏃 Others
* *[OPERATOR]* A configuration issue that resulted in a relatively slow startup and termination of the vali pods is fixed. ([gardener/gardener#7979](https://github.com/gardener/gardener/pull/7979), [@istvanballok](https://github.com/istvanballok))
* *[OPERATOR]* Add new grafana dashboard of seed deployment replicas ([gardener/gardener#7896](https://github.com/gardener/gardener/pull/7896), [@Sallyan](https://github.com/Sallyan))
# [dependency-watchdog]
## 🏃 Others
* *[OPERATOR]* More categories are added to label a release note for a PR on DWD. ([gardener/dependency-watchdog#75](https://github.com/gardener/dependency-watchdog/pull/75), [@himanshu-kun](https://github.com/himanshu-kun))
  * Release notifications would now be sent to `gardener-dwd` channel (private) on releases.
* *[OPERATOR]* Probes will not be created for shoots with no workers. ([gardener/dependency-watchdog#82](https://github.com/gardener/dependency-watchdog/pull/82), [@unmarshall](https://github.com/unmarshall))
* *[OPERATOR]* Fixes for `make check` target ([gardener/dependency-watchdog#87](https://github.com/gardener/dependency-watchdog/pull/87), [@unmarshall](https://github.com/unmarshall))
* *[DEPENDENCY]* Following dependencies are updated: ([gardener/dependency-watchdog#84](https://github.com/gardener/dependency-watchdog/pull/84), [@unmarshall](https://github.com/unmarshall))
  * Go - 1.20.3
  * client-go - v0.26.2
  * controller-runtime - v0.14.5
  * gomega - v1.27.1
  * zap - v1.24.0
  * gardener/gardener v1.69.0
  * k8s (api and apimachinery) - v0.26.2
# [etcd-backup-restore]
## 🐛 Bug Fixes
* *[OPERATOR]* Fixes a bug in backup-restore which falsely detects scale-up scenario incase of rolling update of statefulset. ([gardener/etcd-backup-restore#614](https://github.com/gardener/etcd-backup-restore/pull/614), [@ishan16696](https://github.com/ishan16696))
## 🏃 Others
* *[OPERATOR]* Base alpine image upgraded from `3.15.7` to `3.15.8` ([gardener/etcd-backup-restore#612](https://github.com/gardener/etcd-backup-restore/pull/612), [@aaronfern](https://github.com/aaronfern))
* *[OPERATOR]* Add a learner with backoff in case of scale-up feature is triggered. ([gardener/etcd-backup-restore#617](https://github.com/gardener/etcd-backup-restore/pull/617), [@ishan16696](https://github.com/ishan16696))
* *[OPERATOR]* Added a safety check before adding a learner(non-voting) member in etcd cluster. ([gardener/etcd-backup-restore#605](https://github.com/gardener/etcd-backup-restore/pull/605), [@ishan16696](https://github.com/ishan16696))
* *[DEVELOPER]* Upgrade to go 1.20.3 ([gardener/etcd-backup-restore#613](https://github.com/gardener/etcd-backup-restore/pull/613), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
* *[DEVELOPER]* Block public access for S3 buckets created by integration tests. ([gardener/etcd-backup-restore#615](https://github.com/gardener/etcd-backup-restore/pull/615), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
# [etcd-custom-image]
## 🏃 Others
* *[OPERATOR]* Base alpine image for etcd-custom-image upgraded from `3.15.7` to `3.15.8` ([gardener/etcd-custom-image#32](https://github.com/gardener/etcd-custom-image/pull/32), [@aaronfern](https://github.com/aaronfern))
# [etcd-druid]
## ✨ New Features
* *[DEVELOPER]* Run `make ci-e2e-kind` to run the e2e tests on local machine ([gardener/etcd-druid#547](https://github.com/gardener/etcd-druid/pull/547), [@abdasgupta](https://github.com/abdasgupta))
* *[DEVELOPER]* Eliminated `Role` helm charts and converted into Golang component with added unit tests. ([gardener/etcd-druid#538](https://github.com/gardener/etcd-druid/pull/538), [@seshachalam-yv](https://github.com/seshachalam-yv))
* *[DEVELOPER]* Eliminated `RoleBinding` helm charts and converted into Golang component with added unit tests. ([gardener/etcd-druid#539](https://github.com/gardener/etcd-druid/pull/539), [@seshachalam-yv](https://github.com/seshachalam-yv))
## 🐛 Bug Fixes
* *[OPERATOR]* Added check to ensure that the scale up annotation is removed from the etcd statefulset only when scale-up succeeds ([gardener/etcd-druid#587](https://github.com/gardener/etcd-druid/pull/587), [@ishan16696](https://github.com/ishan16696))
## 🏃 Others
* *[OPERATOR]* When scaling from single-node to multi-node etcd cluster, Etcd Druid will now first ensure that any change to the peer URL (e.g TLS enablement)  is seen by the existing etcd process running within the etcd member pod. Once that is confirmed then it will scale up the Etcd StatefulSet and add relevant annotations. ([gardener/etcd-druid#598](https://github.com/gardener/etcd-druid/pull/598), [@unmarshall](https://github.com/unmarshall))
* *[OPERATOR]* Backup-restore waits for its etcd to be ready before attempting to update peerUrl ([gardener/etcd-druid#602](https://github.com/gardener/etcd-druid/pull/602), [@abdasgupta](https://github.com/abdasgupta))
* *[OPERATOR]* When scaling from single-node to multi-node etcd cluster, Etcd Druid will now first ensure that any change to the peer URL (e.g TLS enablement)  is seen by the existing etcd process running within the etcd member pod. Once that is confirmed then it will scale up the Etcd StatefulSet and add relevant annotations. ([gardener/etcd-druid#602](https://github.com/gardener/etcd-druid/pull/602), [@abdasgupta](https://github.com/abdasgupta))
* *[OPERATOR]* etcd-custom-image updates from `v3.4.13-bootstrap-9` to `v3.4.13-bootstrap-10` ([gardener/etcd-druid#575](https://github.com/gardener/etcd-druid/pull/575), [@aaronfern](https://github.com/aaronfern))
* *[DEVELOPER]* Upgrade to go 1.20.3. ([gardener/etcd-druid#579](https://github.com/gardener/etcd-druid/pull/579), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
* *[DEVELOPER]* Block public access for S3 buckets created by e2e tests. ([gardener/etcd-druid#581](https://github.com/gardener/etcd-druid/pull/581), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
# [logging]
## 🐛 Bug Fixes
* *[OPERATOR]* Remove lastOperation check in fluent-bit-to-vali plugin. ([gardener/logging#197](https://github.com/gardener/logging/pull/197), [@vlvasilev](https://github.com/vlvasilev))

</details>
