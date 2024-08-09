---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.20.1</code></b></summary>

# [gardener/external-dns-management]

## 🏃 Others

- `[OPERATOR]` Lookup processor: sort lookup results and retry on timeout by @MartinWeindel [#382]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.20.1`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.14</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.13...0.7.14

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.101.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. See [this](https://github.com/gardener/gardener/blob/master/docs/extensions/logging-and-monitoring.md#monitoring) instead. by @rfranzke [#10220]
- `[DEVELOPER]` The IPv4 addresses for the local Gardener setup was changed from `127.0.0.x` to `172.18.255.x` (default kind subnet) to resolve an issue on developer machines which can't use additional IP addressed from the `127.0.0.0/8` space. Please consider updating your `/etc/hosts` file to adjust to the the newly added addresses. Please see [Deploying Gardener Locally#Accessing the Shoot Cluster](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#accessing-the-shoot-cluster) for more details. by @MartinWeindel [#10019]
- `[DEVELOPER]` `github.com/gardener/gardener/plugin/pkg/utils.ProjectForNamespaceFromLister` has been deprecated and will be removed in a future release, use `github.com/gardener/gardener/pkg/utils/gardener.ProjectForNamespaceFromLister` instead. by @vpnachev [#10042]
## 📰 Noteworthy

- `[DEVELOPER]` Evaluate `shoot.Spec.CloudProfile` and `shoot.Spec.CloudProfileName` fields together to determine the applicable cloud profile in order to prepare for namespaced cloud profiles. by @LucaBernstein [#10093]
- `[DEPENDENCY]` A new field `class` was added to resources of the `extensions.gardener.cloud` API group. Together with the newly introduced predicate [HasClass](https://github.com/gardener/gardener/blob/master/extensions/pkg/predicate/predicate.go), it serves as a mean to split responsibilities of extension controllers for extensions belonging to different type of targets, i.e. `shoot` (default) or `garden`. Handling is backwards compatible, so that extensions are still responsible for `shoot` extension resources without any adjustments. If you intend to already support the reconciliation of extensions belonging to the `garden` class (cluster), please consider adding the `ExtensionClass` parameter (see [here](https://github.com/gardener/gardener/blob/master/extensions/pkg/controller/cmd/reconciler_options.go) for more information).  by @timuthy [#10254]
- `[OPERATOR]` The `VPAAndHPAForAPIServer` feature gate has been promoted to beta and is now turned on by default. by @ialidzhikov [#10207]
- `[OPERATOR]` VPA MaxAllowed is no longer hard-coded to fixed values (4/7/8 cores and 25/28G) for `kube-apiserver`, `etcd`, and `prometheus`. Operators must ensure sufficiently large worker pools for control plane components. For details, see [this document](https://github.com/gardener/gardener/blob/master/docs/operations/seed_settings.md#vertical-pod-autoscaler). by @andrerun [#10208]
- `[OPERATOR]` The graduated `CoreDNSQueryRewriting` feature gate has been dropped. by @ScheererJ [#10230]
- `[OPERATOR]` The graduated `MutableShootSpecNetworkingNodes` feature gate has been dropped. by @ScheererJ [#10231]
- `[USER]` Use `shoot.Spec.CloudProfile` as the primary directive to specify the cloud profile to use. The value will by synced to the field `shoot.Spec.CloudProfileName` (until it is deprecated and eventually removed in the future). If no cloud profile kind is provided, it will default to `CloudProfile`. by @LucaBernstein [#10093]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` is now capable of deploying `gardenlet`s into unmanaged seed clusters. Read more about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_via_operator.md). by @rfranzke [#10161]
- `[OPERATOR]` `gardener-operator` is now capable of auto-updating the Helm chart reference (`.spec.deployment.helm.ociRepository.ref`) in `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resources. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/concepts/operator.md#gardenlet-controller). by @rfranzke [#10218]
- `[OPERATOR]` `gardener-operator` is now capable of installing `ControllerRegistration` and `ControllerInstallation` objects in the virtual cluster based on `operator.gardener.cloud/v1alpha1.Extension` resources. by @kon-angelo [#10006]
- `[OPERATOR]` A new field `Bastion` was introduced to the `CloudProfile`. by @hebelsan [#10233]
## 🐛 Bug Fixes

- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10282]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10242]
- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10202]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/coredns/coredns` image has been updated to `v1.11.3`. by @gardener-ci-robot [#10224]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.20.2`. [Release Notes](https://togithub.com/gardener/alpine-conntrack/releases/tag/3.20.2) by @gardener-ci-robot [#10206]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.4`. [Release Notes](https://togithub.com/gardener/etcd-druid/releases/tag/v0.22.4) by @gardener-ci-robot [#10260]
- `[OPERATOR]` An issue preventing `kubectl rollout restart` to work for `Deployments`, `DaemonSets` and `StatefulSets` managed by a ManagedResource is now resolved. by @Kostov6 [#10192]
- `[OPERATOR]` The CPU and memory resource requests of the `istio-proxy` container for the `istio-ingressgateway` deployment have been changed to `300m` and `600Mi`, respectively.  
  The HPA `maxReplicas` for the `istio-ingressgateway` deployment have been increased from 5 to 9. When deployed for multiple zones, the `maxReplicas` are increased from 4 to 6 per zone. by @plkokanov [#10226]
- `[OPERATOR]` In case multiple network ranges are configured via infrastructure status propagation for pod, service or node network, `gardenlet` will check whether they comply to the requirements of Kubernetes components like `kube-apiserver`, `kube-controller-manager`, and `kube-proxy`. by @ScheererJ [#10148]
- `[OPERATOR]` Removed the addition of the annotation: `cluster-autoscaler.kubernetes.io/safe-to-evict: false` for the HA etcd-main to improve node utilization. by @ishan16696 [#10235]
- `[OPERATOR]` The `STATUS` column of `seed`s was improved, when they are listed via `kubectl`. Earlier the field tend to oscillated, especially when extensions and system components are scaled frequently. by @timuthy [#10237]
- `[OPERATOR]` [Secretsmanager] Drop old CA from bundle if not valid anymore. by @MartinWeindel [#10158]
- `[OPERATOR]` Separate kube-state-metrics deployments for seed and garden-runtime cluster by @chrkl [#10062]
- `[USER]` Displaying unhealthy nodes in the shoot Plutono dashboard was improved to show nodes with taints used for [taint based eviction](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions). Earlier, nodes with custom `NoSchedule` taints distorted this view, as actual healthy nodes were shown as problematic. by @timuthy [#10214]
- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10185]
- `[DEVELOPER]` The images of the registry caches used in the extensions local setup are now updated to [distribution/distribution@3.0.0 beta.1](https://github.com/distribution/distribution/releases/tag/v3.0.0-beta.1). by @ialidzhikov [#10180]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.101.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. See [this](https://github.com/gardener/gardener/blob/master/docs/extensions/logging-and-monitoring.md#monitoring) instead. by @rfranzke [#10220]
- `[DEVELOPER]` The IPv4 addresses for the local Gardener setup was changed from `127.0.0.x` to `172.18.255.x` (default kind subnet) to resolve an issue on developer machines which can't use additional IP addressed from the `127.0.0.0/8` space. Please consider updating your `/etc/hosts` file to adjust to the the newly added addresses. Please see [Deploying Gardener Locally#Accessing the Shoot Cluster](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#accessing-the-shoot-cluster) for more details. by @MartinWeindel [#10019]
- `[DEVELOPER]` `github.com/gardener/gardener/plugin/pkg/utils.ProjectForNamespaceFromLister` has been deprecated and will be removed in a future release, use `github.com/gardener/gardener/pkg/utils/gardener.ProjectForNamespaceFromLister` instead. by @vpnachev [#10042]
## 📰 Noteworthy

- `[DEVELOPER]` Evaluate `shoot.Spec.CloudProfile` and `shoot.Spec.CloudProfileName` fields together to determine the applicable cloud profile in order to prepare for namespaced cloud profiles. by @LucaBernstein [#10093]
- `[DEPENDENCY]` A new field `class` was added to resources of the `extensions.gardener.cloud` API group. Together with the newly introduced predicate [HasClass](https://github.com/gardener/gardener/blob/master/extensions/pkg/predicate/predicate.go), it serves as a mean to split responsibilities of extension controllers for extensions belonging to different type of targets, i.e. `shoot` (default) or `garden`. Handling is backwards compatible, so that extensions are still responsible for `shoot` extension resources without any adjustments. If you intend to already support the reconciliation of extensions belonging to the `garden` class (cluster), please consider adding the `ExtensionClass` parameter (see [here](https://github.com/gardener/gardener/blob/master/extensions/pkg/controller/cmd/reconciler_options.go) for more information).  by @timuthy [#10254]
- `[OPERATOR]` The `VPAAndHPAForAPIServer` feature gate has been promoted to beta and is now turned on by default. by @ialidzhikov [#10207]
- `[OPERATOR]` VPA MaxAllowed is no longer hard-coded to fixed values (4/7/8 cores and 25/28G) for `kube-apiserver`, `etcd`, and `prometheus`. Operators must ensure sufficiently large worker pools for control plane components. For details, see [this document](https://github.com/gardener/gardener/blob/master/docs/operations/seed_settings.md#vertical-pod-autoscaler). by @andrerun [#10208]
- `[OPERATOR]` The graduated `CoreDNSQueryRewriting` feature gate has been dropped. by @ScheererJ [#10230]
- `[OPERATOR]` The graduated `MutableShootSpecNetworkingNodes` feature gate has been dropped. by @ScheererJ [#10231]
- `[USER]` Use `shoot.Spec.CloudProfile` as the primary directive to specify the cloud profile to use. The value will by synced to the field `shoot.Spec.CloudProfileName` (until it is deprecated and eventually removed in the future). If no cloud profile kind is provided, it will default to `CloudProfile`. by @LucaBernstein [#10093]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` is now capable of deploying `gardenlet`s into unmanaged seed clusters. Read more about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_via_operator.md). by @rfranzke [#10161]
- `[OPERATOR]` `gardener-operator` is now capable of auto-updating the Helm chart reference (`.spec.deployment.helm.ociRepository.ref`) in `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resources. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/concepts/operator.md#gardenlet-controller). by @rfranzke [#10218]
- `[OPERATOR]` `gardener-operator` is now capable of installing `ControllerRegistration` and `ControllerInstallation` objects in the virtual cluster based on `operator.gardener.cloud/v1alpha1.Extension` resources. by @kon-angelo [#10006]
- `[OPERATOR]` A new field `Bastion` was introduced to the `CloudProfile`. by @hebelsan [#10233]
## 🐛 Bug Fixes

- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10282]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10242]
- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10202]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/coredns/coredns` image has been updated to `v1.11.3`. by @gardener-ci-robot [#10224]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.20.2`. [Release Notes](https://togithub.com/gardener/alpine-conntrack/releases/tag/3.20.2) by @gardener-ci-robot [#10206]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.4`. [Release Notes](https://togithub.com/gardener/etcd-druid/releases/tag/v0.22.4) by @gardener-ci-robot [#10260]
- `[OPERATOR]` An issue preventing `kubectl rollout restart` to work for `Deployments`, `DaemonSets` and `StatefulSets` managed by a ManagedResource is now resolved. by @Kostov6 [#10192]
- `[OPERATOR]` The CPU and memory resource requests of the `istio-proxy` container for the `istio-ingressgateway` deployment have been changed to `300m` and `600Mi`, respectively.  
  The HPA `maxReplicas` for the `istio-ingressgateway` deployment have been increased from 5 to 9. When deployed for multiple zones, the `maxReplicas` are increased from 4 to 6 per zone. by @plkokanov [#10226]
- `[OPERATOR]` In case multiple network ranges are configured via infrastructure status propagation for pod, service or node network, `gardenlet` will check whether they comply to the requirements of Kubernetes components like `kube-apiserver`, `kube-controller-manager`, and `kube-proxy`. by @ScheererJ [#10148]
- `[OPERATOR]` Removed the addition of the annotation: `cluster-autoscaler.kubernetes.io/safe-to-evict: false` for the HA etcd-main to improve node utilization. by @ishan16696 [#10235]
- `[OPERATOR]` The `STATUS` column of `seed`s was improved, when they are listed via `kubectl`. Earlier the field tend to oscillated, especially when extensions and system components are scaled frequently. by @timuthy [#10237]
- `[OPERATOR]` [Secretsmanager] Drop old CA from bundle if not valid anymore. by @MartinWeindel [#10158]
- `[OPERATOR]` Separate kube-state-metrics deployments for seed and garden-runtime cluster by @chrkl [#10062]
- `[USER]` Displaying unhealthy nodes in the shoot Plutono dashboard was improved to show nodes with taints used for [taint based eviction](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions). Earlier, nodes with custom `NoSchedule` taints distorted this view, as actual healthy nodes were shown as problematic. by @timuthy [#10214]
- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10185]
- `[DEVELOPER]` The images of the registry caches used in the extensions local setup are now updated to [distribution/distribution@3.0.0 beta.1](https://github.com/distribution/distribution/releases/tag/v3.0.0-beta.1). by @ialidzhikov [#10180]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.101.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. See [this](https://github.com/gardener/gardener/blob/master/docs/extensions/logging-and-monitoring.md#monitoring) instead. by @rfranzke [#10220]
- `[DEVELOPER]` The IPv4 addresses for the local Gardener setup was changed from `127.0.0.x` to `172.18.255.x` (default kind subnet) to resolve an issue on developer machines which can't use additional IP addressed from the `127.0.0.0/8` space. Please consider updating your `/etc/hosts` file to adjust to the the newly added addresses. Please see [Deploying Gardener Locally#Accessing the Shoot Cluster](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#accessing-the-shoot-cluster) for more details. by @MartinWeindel [#10019]
- `[DEVELOPER]` `github.com/gardener/gardener/plugin/pkg/utils.ProjectForNamespaceFromLister` has been deprecated and will be removed in a future release, use `github.com/gardener/gardener/pkg/utils/gardener.ProjectForNamespaceFromLister` instead. by @vpnachev [#10042]
## 📰 Noteworthy

- `[DEVELOPER]` Evaluate `shoot.Spec.CloudProfile` and `shoot.Spec.CloudProfileName` fields together to determine the applicable cloud profile in order to prepare for namespaced cloud profiles. by @LucaBernstein [#10093]
- `[DEPENDENCY]` A new field `class` was added to resources of the `extensions.gardener.cloud` API group. Together with the newly introduced predicate [HasClass](https://github.com/gardener/gardener/blob/master/extensions/pkg/predicate/predicate.go), it serves as a mean to split responsibilities of extension controllers for extensions belonging to different type of targets, i.e. `shoot` (default) or `garden`. Handling is backwards compatible, so that extensions are still responsible for `shoot` extension resources without any adjustments. If you intend to already support the reconciliation of extensions belonging to the `garden` class (cluster), please consider adding the `ExtensionClass` parameter (see [here](https://github.com/gardener/gardener/blob/master/extensions/pkg/controller/cmd/reconciler_options.go) for more information).  by @timuthy [#10254]
- `[OPERATOR]` The `VPAAndHPAForAPIServer` feature gate has been promoted to beta and is now turned on by default. by @ialidzhikov [#10207]
- `[OPERATOR]` VPA MaxAllowed is no longer hard-coded to fixed values (4/7/8 cores and 25/28G) for `kube-apiserver`, `etcd`, and `prometheus`. Operators must ensure sufficiently large worker pools for control plane components. For details, see [this document](https://github.com/gardener/gardener/blob/master/docs/operations/seed_settings.md#vertical-pod-autoscaler). by @andrerun [#10208]
- `[OPERATOR]` The graduated `CoreDNSQueryRewriting` feature gate has been dropped. by @ScheererJ [#10230]
- `[OPERATOR]` The graduated `MutableShootSpecNetworkingNodes` feature gate has been dropped. by @ScheererJ [#10231]
- `[USER]` Use `shoot.Spec.CloudProfile` as the primary directive to specify the cloud profile to use. The value will by synced to the field `shoot.Spec.CloudProfileName` (until it is deprecated and eventually removed in the future). If no cloud profile kind is provided, it will default to `CloudProfile`. by @LucaBernstein [#10093]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` is now capable of deploying `gardenlet`s into unmanaged seed clusters. Read more about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_via_operator.md). by @rfranzke [#10161]
- `[OPERATOR]` `gardener-operator` is now capable of auto-updating the Helm chart reference (`.spec.deployment.helm.ociRepository.ref`) in `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resources. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/concepts/operator.md#gardenlet-controller). by @rfranzke [#10218]
- `[OPERATOR]` `gardener-operator` is now capable of installing `ControllerRegistration` and `ControllerInstallation` objects in the virtual cluster based on `operator.gardener.cloud/v1alpha1.Extension` resources. by @kon-angelo [#10006]
- `[OPERATOR]` A new field `Bastion` was introduced to the `CloudProfile`. by @hebelsan [#10233]
## 🐛 Bug Fixes

- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10282]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10242]
- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10202]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/coredns/coredns` image has been updated to `v1.11.3`. by @gardener-ci-robot [#10224]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.20.2`. [Release Notes](https://togithub.com/gardener/alpine-conntrack/releases/tag/3.20.2) by @gardener-ci-robot [#10206]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.4`. [Release Notes](https://togithub.com/gardener/etcd-druid/releases/tag/v0.22.4) by @gardener-ci-robot [#10260]
- `[OPERATOR]` An issue preventing `kubectl rollout restart` to work for `Deployments`, `DaemonSets` and `StatefulSets` managed by a ManagedResource is now resolved. by @Kostov6 [#10192]
- `[OPERATOR]` The CPU and memory resource requests of the `istio-proxy` container for the `istio-ingressgateway` deployment have been changed to `300m` and `600Mi`, respectively.  
  The HPA `maxReplicas` for the `istio-ingressgateway` deployment have been increased from 5 to 9. When deployed for multiple zones, the `maxReplicas` are increased from 4 to 6 per zone. by @plkokanov [#10226]
- `[OPERATOR]` In case multiple network ranges are configured via infrastructure status propagation for pod, service or node network, `gardenlet` will check whether they comply to the requirements of Kubernetes components like `kube-apiserver`, `kube-controller-manager`, and `kube-proxy`. by @ScheererJ [#10148]
- `[OPERATOR]` Removed the addition of the annotation: `cluster-autoscaler.kubernetes.io/safe-to-evict: false` for the HA etcd-main to improve node utilization. by @ishan16696 [#10235]
- `[OPERATOR]` The `STATUS` column of `seed`s was improved, when they are listed via `kubectl`. Earlier the field tend to oscillated, especially when extensions and system components are scaled frequently. by @timuthy [#10237]
- `[OPERATOR]` [Secretsmanager] Drop old CA from bundle if not valid anymore. by @MartinWeindel [#10158]
- `[OPERATOR]` Separate kube-state-metrics deployments for seed and garden-runtime cluster by @chrkl [#10062]
- `[USER]` Displaying unhealthy nodes in the shoot Plutono dashboard was improved to show nodes with taints used for [taint based eviction](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions). Earlier, nodes with custom `NoSchedule` taints distorted this view, as actual healthy nodes were shown as problematic. by @timuthy [#10214]
- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10185]
- `[DEVELOPER]` The images of the registry caches used in the extensions local setup are now updated to [distribution/distribution@3.0.0 beta.1](https://github.com/distribution/distribution/releases/tag/v3.0.0-beta.1). by @ialidzhikov [#10180]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.0`


</details>
