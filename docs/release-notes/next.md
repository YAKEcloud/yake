---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-cilium to <code>1.28.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## ✨ New Features

- `[OPERATOR]` Expose configuration of `cni.exclusive`.  by @axel7born [#214]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.79.1</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @gardener-ci-robot [#8476]
## 🐛 Bug Fixes

- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @gardener-ci-robot [#8473]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8469]
- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @gardener-ci-robot [#8451]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.79.1</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @gardener-ci-robot [#8476]
## 🐛 Bug Fixes

- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @gardener-ci-robot [#8473]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8469]
- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @gardener-ci-robot [#8451]

</details>

<details>
<summary><b>Update gardenlet to <code>1.79.1</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @gardener-ci-robot [#8476]
## 🐛 Bug Fixes

- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @gardener-ci-robot [#8473]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8469]
- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @gardener-ci-robot [#8451]

</details>

<details>
<summary><b>Update provider-aws to <code>1.48.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @ialidzhikov [#801]

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.37.2</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by `Johannes Scheerer <johannes.scheerer@sap.com>` [$7ab1bd02618105eed26fbdd829016be587ad0891]

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.38.2</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by `Johannes Scheerer <johannes.scheerer@sap.com>` [$48423afc7bda51bbcdcee01df2c9317a3f278e1a]

</details>

<details>
<summary><b>Update networking-calico to <code>1.36.1</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## 🏃 Others

- `[OPERATOR]` Vertical and horizontal cluster-proportional autoscalers for calico-typha now use different label selectors. by `Johannes Scheerer <johannes.scheerer@sap.com>` [$0f655d29fa3c3e71b81dff7751c2f5e6156b9adc]

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.38.3</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[OPERATOR]` Correctly apply `resources.gardener.cloud/skip-health-check=true` annotation instead of `shoot.gardener.cloud/no-cleanup=true` label. by `Rafael Franzke <rafael.franzke@sap.com>` [$e3b032fd69fffd8eef0c470eedc066358c2c4e93]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` If the `kubeletCSRApprover` controller is enabled, it is now mandatory to specify the namespace in the source cluster in which the `Machine` resources reside via `.controllers.kubeletCSRApprover.machineNamespace`. by @rfranzke [#8483]
- `[DEVELOPER]` `leader-election-resource-lock` flag is dropped and the leader-election resource-lock is hard coded to leases. by @acumino [#8464]
- `[DEVELOPER]` The `.{source,target}ClientConnection.namespace` field has been renamed to `namespaces` and now takes a list of namespaces. The `.targetClientConnection.disableCachedClient` field has been removed. by @rfranzke [#8483]
- `[OPERATOR]` It is no longer possible to configure `.spec.virtualCluster.kubernetes.kubeAPIServer.authorization` in the `Garden` API. by @rfranzke [#8309]
- `[OPERATOR]` The deprecated `.spec.virtualCluster.dns.domain` field has been dropped from the `Garden` API. Make use of `.spec.virtualCluster.dns.domains`. by @rfranzke [#8434]
## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @acumino [#8474]
- `[OPERATOR]` The following golang dependencies have been upgraded, please consult the upstream release notes and [this issue](https://github.com/gardener/gardener/issues/8382) for guidance on upgrading your golang dependencies when vendoring this gardener version:  
  - `k8s.io/*` to `v0.28.2`  
  - `sigs.k8s.io/controller-runtime` to `v0.16.2`  
  - `sigs.k8s.io/controller-tools` to `v0.13.0` by @acumino [#8464]
- `[OPERATOR]` The target cache for `gardener-resource-manager` is now unconditionally enabled, leading to faster reconciliations and less network I/O. by @rfranzke [#8483]
- `[USER]` Gardener now reports `node`s for which the `checksum/cloud-config-data` hasn't been populated yet. This could point towards an error on the node and that not all Gardener related configuration happened successfully. by @timuthy [#8448]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` now runs a new controller which protects `Secret`s and `ConfigMap`s with a finalizer in case they are referenced in `Garden` resources. by @rfranzke [#8439]
- `[OPERATOR]` It is now possible to trigger gardenlet kubeconfig renewal for unmanaged `Seed`s by annotating them with `gardener.cloud/operation=renew-kubeconfig`. This was already supported for `ManagedSeed`s only. by @oliver-goetz [#8396]
- `[OPERATOR]` The `ResourcesProgressing` condition appearing in the status of `ManagedResource`s now checks for non-terminated `Pod`s before reporting `status=False`. by @rfranzke [#8515]
- `[OPERATOR]` `gardener-operator` is now managing the Gardener control plane components (`gardener-{apiserver,admission-controller,controller-manager,scheduler}`). by @rfranzke [#8309]
- `[OPERATOR]` `gardener-operator` now renews garden access secrets and the gardenlet kubeconfig on all `Seed`s during CA/service account signing key credentials rotation. by @oliver-goetz [#8396]
- `[OPERATOR]` `gardener-operator` now takes over management of `gardener-metrics-exporter`. by @acumino [#8419]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.28. In order to allow creation/update of 1.28 clusters you will have to update the version of your provider extension(s) to a version that supports 1.28 as well. Please consult the respective releases and notes in the provider extension's repository. by @oliver-goetz [#8479]
- `[OPERATOR]` It is now possible to configure `.spec.virtualCluster.gardener.gardenerAPIServer.auditWebhook` in the `Garden` API. by @rfranzke [#8309]
- `[OPERATOR]` `gardener-operator` now refuses to start if operators attempt to downgrade or skip minor Gardener versions. Please see [this document](https://github.com/gardener/gardener/blob/master/docs/deployment/version_skew_policy.md) for more information. by @rfranzke [#8413]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.28. Extension developers have to prepare individual extensions as well to work with 1.28. by @oliver-goetz [#8479]
- `[DEVELOPER]` The plutono dashboards are now verified as part of `make check`. by @Sallyan [#8401]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @rfranzke [#8443]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @oliver-goetz [#8427]
- `[OPERATOR]` An issue causing several tasks from the Shoot reconciliation flow to fail with transient errors of type `duplicate filename in registry` is now fixed. by @ialidzhikov [#8478]
- `[OPERATOR]` A bug was fixed which was causing existing `Bastion` resources on the garden cluster to not be deleted when `SSHAccess` is disabled on a Shoot cluster. by @AleksandarSavchev [#8421]
- `[OPERATOR]` The `.spec.kubernetes.kubeAPIServer.serviceAccountConfig.acceptedIssuers` field of the `Shoot` spec no longer allows duplicate values. by @dimitar-kostadinov [#8466]
- `[USER]` A bug has been fixed which was allowing users to specify an extension of the same type in `.spec.extensions[].type` more than once in the `Shoot` API. by @acumino [#8457]
- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @oliver-goetz [#8468]
## 🏃 Others

- `[OPERATOR]` The Plutono version has been updated from `v7.5.23` to `v7.5.24`. by @istvanballok [#8475]
- `[OPERATOR]` The `node-local-dns` `ConfigMap` now has a label `k8s-app=node-local-dns` for identifying it. by @ScheererJ [#8505]
- `[OPERATOR]` The following image is updated:  
  - `quay.io/prometheus/prometheus`: `v2.43.1` -> `v2.47.0` by @istvanballok [#8486]
- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @ialidzhikov [#8482]
- `[OPERATOR]` The logging components: vali and valitail are now updated to v2.2.8. by @nickytd [#8458]
- `[USER]` It is possible to delete a Shoot even if `shoot.gardener.cloud/ignore` annotation is set to true. by @shafeeqes [#8432]
# [gardener/ingress-default-backend]

## 🏃 Others

- `[OPERATOR]` Update base image of `ingress-default-backend` to alpine:3.18.3 by @ScheererJ [gardener/ingress-default-backend#27]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.0`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` If the `kubeletCSRApprover` controller is enabled, it is now mandatory to specify the namespace in the source cluster in which the `Machine` resources reside via `.controllers.kubeletCSRApprover.machineNamespace`. by @rfranzke [#8483]
- `[DEVELOPER]` `leader-election-resource-lock` flag is dropped and the leader-election resource-lock is hard coded to leases. by @acumino [#8464]
- `[DEVELOPER]` The `.{source,target}ClientConnection.namespace` field has been renamed to `namespaces` and now takes a list of namespaces. The `.targetClientConnection.disableCachedClient` field has been removed. by @rfranzke [#8483]
- `[OPERATOR]` It is no longer possible to configure `.spec.virtualCluster.kubernetes.kubeAPIServer.authorization` in the `Garden` API. by @rfranzke [#8309]
- `[OPERATOR]` The deprecated `.spec.virtualCluster.dns.domain` field has been dropped from the `Garden` API. Make use of `.spec.virtualCluster.dns.domains`. by @rfranzke [#8434]
## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @acumino [#8474]
- `[OPERATOR]` The following golang dependencies have been upgraded, please consult the upstream release notes and [this issue](https://github.com/gardener/gardener/issues/8382) for guidance on upgrading your golang dependencies when vendoring this gardener version:  
  - `k8s.io/*` to `v0.28.2`  
  - `sigs.k8s.io/controller-runtime` to `v0.16.2`  
  - `sigs.k8s.io/controller-tools` to `v0.13.0` by @acumino [#8464]
- `[OPERATOR]` The target cache for `gardener-resource-manager` is now unconditionally enabled, leading to faster reconciliations and less network I/O. by @rfranzke [#8483]
- `[USER]` Gardener now reports `node`s for which the `checksum/cloud-config-data` hasn't been populated yet. This could point towards an error on the node and that not all Gardener related configuration happened successfully. by @timuthy [#8448]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` now runs a new controller which protects `Secret`s and `ConfigMap`s with a finalizer in case they are referenced in `Garden` resources. by @rfranzke [#8439]
- `[OPERATOR]` It is now possible to trigger gardenlet kubeconfig renewal for unmanaged `Seed`s by annotating them with `gardener.cloud/operation=renew-kubeconfig`. This was already supported for `ManagedSeed`s only. by @oliver-goetz [#8396]
- `[OPERATOR]` The `ResourcesProgressing` condition appearing in the status of `ManagedResource`s now checks for non-terminated `Pod`s before reporting `status=False`. by @rfranzke [#8515]
- `[OPERATOR]` `gardener-operator` is now managing the Gardener control plane components (`gardener-{apiserver,admission-controller,controller-manager,scheduler}`). by @rfranzke [#8309]
- `[OPERATOR]` `gardener-operator` now renews garden access secrets and the gardenlet kubeconfig on all `Seed`s during CA/service account signing key credentials rotation. by @oliver-goetz [#8396]
- `[OPERATOR]` `gardener-operator` now takes over management of `gardener-metrics-exporter`. by @acumino [#8419]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.28. In order to allow creation/update of 1.28 clusters you will have to update the version of your provider extension(s) to a version that supports 1.28 as well. Please consult the respective releases and notes in the provider extension's repository. by @oliver-goetz [#8479]
- `[OPERATOR]` It is now possible to configure `.spec.virtualCluster.gardener.gardenerAPIServer.auditWebhook` in the `Garden` API. by @rfranzke [#8309]
- `[OPERATOR]` `gardener-operator` now refuses to start if operators attempt to downgrade or skip minor Gardener versions. Please see [this document](https://github.com/gardener/gardener/blob/master/docs/deployment/version_skew_policy.md) for more information. by @rfranzke [#8413]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.28. Extension developers have to prepare individual extensions as well to work with 1.28. by @oliver-goetz [#8479]
- `[DEVELOPER]` The plutono dashboards are now verified as part of `make check`. by @Sallyan [#8401]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @rfranzke [#8443]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @oliver-goetz [#8427]
- `[OPERATOR]` An issue causing several tasks from the Shoot reconciliation flow to fail with transient errors of type `duplicate filename in registry` is now fixed. by @ialidzhikov [#8478]
- `[OPERATOR]` A bug was fixed which was causing existing `Bastion` resources on the garden cluster to not be deleted when `SSHAccess` is disabled on a Shoot cluster. by @AleksandarSavchev [#8421]
- `[OPERATOR]` The `.spec.kubernetes.kubeAPIServer.serviceAccountConfig.acceptedIssuers` field of the `Shoot` spec no longer allows duplicate values. by @dimitar-kostadinov [#8466]
- `[USER]` A bug has been fixed which was allowing users to specify an extension of the same type in `.spec.extensions[].type` more than once in the `Shoot` API. by @acumino [#8457]
- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @oliver-goetz [#8468]
## 🏃 Others

- `[OPERATOR]` The Plutono version has been updated from `v7.5.23` to `v7.5.24`. by @istvanballok [#8475]
- `[OPERATOR]` The `node-local-dns` `ConfigMap` now has a label `k8s-app=node-local-dns` for identifying it. by @ScheererJ [#8505]
- `[OPERATOR]` The following image is updated:  
  - `quay.io/prometheus/prometheus`: `v2.43.1` -> `v2.47.0` by @istvanballok [#8486]
- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @ialidzhikov [#8482]
- `[OPERATOR]` The logging components: vali and valitail are now updated to v2.2.8. by @nickytd [#8458]
- `[USER]` It is possible to delete a Shoot even if `shoot.gardener.cloud/ignore` annotation is set to true. by @shafeeqes [#8432]
# [gardener/ingress-default-backend]

## 🏃 Others

- `[OPERATOR]` Update base image of `ingress-default-backend` to alpine:3.18.3 by @ScheererJ [gardener/ingress-default-backend#27]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.0`

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` If the `kubeletCSRApprover` controller is enabled, it is now mandatory to specify the namespace in the source cluster in which the `Machine` resources reside via `.controllers.kubeletCSRApprover.machineNamespace`. by @rfranzke [#8483]
- `[DEVELOPER]` `leader-election-resource-lock` flag is dropped and the leader-election resource-lock is hard coded to leases. by @acumino [#8464]
- `[DEVELOPER]` The `.{source,target}ClientConnection.namespace` field has been renamed to `namespaces` and now takes a list of namespaces. The `.targetClientConnection.disableCachedClient` field has been removed. by @rfranzke [#8483]
- `[OPERATOR]` It is no longer possible to configure `.spec.virtualCluster.kubernetes.kubeAPIServer.authorization` in the `Garden` API. by @rfranzke [#8309]
- `[OPERATOR]` The deprecated `.spec.virtualCluster.dns.domain` field has been dropped from the `Garden` API. Make use of `.spec.virtualCluster.dns.domains`. by @rfranzke [#8434]
## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @acumino [#8474]
- `[OPERATOR]` The following golang dependencies have been upgraded, please consult the upstream release notes and [this issue](https://github.com/gardener/gardener/issues/8382) for guidance on upgrading your golang dependencies when vendoring this gardener version:  
  - `k8s.io/*` to `v0.28.2`  
  - `sigs.k8s.io/controller-runtime` to `v0.16.2`  
  - `sigs.k8s.io/controller-tools` to `v0.13.0` by @acumino [#8464]
- `[OPERATOR]` The target cache for `gardener-resource-manager` is now unconditionally enabled, leading to faster reconciliations and less network I/O. by @rfranzke [#8483]
- `[USER]` Gardener now reports `node`s for which the `checksum/cloud-config-data` hasn't been populated yet. This could point towards an error on the node and that not all Gardener related configuration happened successfully. by @timuthy [#8448]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` now runs a new controller which protects `Secret`s and `ConfigMap`s with a finalizer in case they are referenced in `Garden` resources. by @rfranzke [#8439]
- `[OPERATOR]` It is now possible to trigger gardenlet kubeconfig renewal for unmanaged `Seed`s by annotating them with `gardener.cloud/operation=renew-kubeconfig`. This was already supported for `ManagedSeed`s only. by @oliver-goetz [#8396]
- `[OPERATOR]` The `ResourcesProgressing` condition appearing in the status of `ManagedResource`s now checks for non-terminated `Pod`s before reporting `status=False`. by @rfranzke [#8515]
- `[OPERATOR]` `gardener-operator` is now managing the Gardener control plane components (`gardener-{apiserver,admission-controller,controller-manager,scheduler}`). by @rfranzke [#8309]
- `[OPERATOR]` `gardener-operator` now renews garden access secrets and the gardenlet kubeconfig on all `Seed`s during CA/service account signing key credentials rotation. by @oliver-goetz [#8396]
- `[OPERATOR]` `gardener-operator` now takes over management of `gardener-metrics-exporter`. by @acumino [#8419]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.28. In order to allow creation/update of 1.28 clusters you will have to update the version of your provider extension(s) to a version that supports 1.28 as well. Please consult the respective releases and notes in the provider extension's repository. by @oliver-goetz [#8479]
- `[OPERATOR]` It is now possible to configure `.spec.virtualCluster.gardener.gardenerAPIServer.auditWebhook` in the `Garden` API. by @rfranzke [#8309]
- `[OPERATOR]` `gardener-operator` now refuses to start if operators attempt to downgrade or skip minor Gardener versions. Please see [this document](https://github.com/gardener/gardener/blob/master/docs/deployment/version_skew_policy.md) for more information. by @rfranzke [#8413]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.28. Extension developers have to prepare individual extensions as well to work with 1.28. by @oliver-goetz [#8479]
- `[DEVELOPER]` The plutono dashboards are now verified as part of `make check`. by @Sallyan [#8401]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @rfranzke [#8443]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @oliver-goetz [#8427]
- `[OPERATOR]` An issue causing several tasks from the Shoot reconciliation flow to fail with transient errors of type `duplicate filename in registry` is now fixed. by @ialidzhikov [#8478]
- `[OPERATOR]` A bug was fixed which was causing existing `Bastion` resources on the garden cluster to not be deleted when `SSHAccess` is disabled on a Shoot cluster. by @AleksandarSavchev [#8421]
- `[OPERATOR]` The `.spec.kubernetes.kubeAPIServer.serviceAccountConfig.acceptedIssuers` field of the `Shoot` spec no longer allows duplicate values. by @dimitar-kostadinov [#8466]
- `[USER]` A bug has been fixed which was allowing users to specify an extension of the same type in `.spec.extensions[].type` more than once in the `Shoot` API. by @acumino [#8457]
- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @oliver-goetz [#8468]
## 🏃 Others

- `[OPERATOR]` The Plutono version has been updated from `v7.5.23` to `v7.5.24`. by @istvanballok [#8475]
- `[OPERATOR]` The `node-local-dns` `ConfigMap` now has a label `k8s-app=node-local-dns` for identifying it. by @ScheererJ [#8505]
- `[OPERATOR]` The following image is updated:  
  - `quay.io/prometheus/prometheus`: `v2.43.1` -> `v2.47.0` by @istvanballok [#8486]
- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @ialidzhikov [#8482]
- `[OPERATOR]` The logging components: vali and valitail are now updated to v2.2.8. by @nickytd [#8458]
- `[USER]` It is possible to delete a Shoot even if `shoot.gardener.cloud/ignore` annotation is set to true. by @shafeeqes [#8432]
# [gardener/ingress-default-backend]

## 🏃 Others

- `[OPERATOR]` Update base image of `ingress-default-backend` to alpine:3.18.3 by @ScheererJ [gardener/ingress-default-backend#27]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.0`

</details>
