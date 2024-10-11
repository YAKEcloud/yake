---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.104.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10578]
## 🏃 Others

- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @ishan16696 [#10592]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.104.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10578]
## 🏃 Others

- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @ishan16696 [#10592]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.104.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10578]
## 🏃 Others

- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @ishan16696 [#10592]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.1`


</details>

<details>
<summary><b>Update networking-calico to <code>1.42.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## 🏃 Others

- `[OPERATOR]` Update calico to `v3.28.2`. by @DockToFuture [#492]
- `[OPERATOR]` Fix networkConfig for IPv6. by @axel7born [#486]
- `[OPERATOR]` In VPA autoscaling mode, `calico-node` should be disrupted less often as side car containers are no longer considered by VPA. Additionally, the minimum/maximum restriction are removed, which can lead to less memory consumption. by @ScheererJ [#489]
- `[OPERATOR]` The networking calico extension no longer configures min/maxAllowed in any managed VPA resource. by @ScheererJ [#491]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.42.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.42.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.42.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.42.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.42.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.37.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#369]
## 🏃 Others

- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-cilium` Helm chart. by @timuthy [#362]
- `[OPERATOR]` Update cilium to `v1.16.1` and enable cilium-envoy to enable features like (Ingress, Gateway API, Network Policies with L7 functionality, L7 Protocol Visibility). by @DockToFuture [#409]
- `[OPERATOR]` The networking cilium extension no longer configures min/maxAllowed in any managed VPA resource. by @ScheererJ [#408]
- `[OPERATOR]` Update to cilium `v1.16.2`. by @DockToFuture [#411]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.37.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.37.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.37.0`
## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.37.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.37.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.47.3</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🏃 Others

- `[OPERATOR]` Do not reconcile user-configured NAT Gateways in the gardener subnet. by @kon-angelo [#979]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.47.3`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.47.3`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.47.3`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.47.3`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.47.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.105.0</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` The `VPAForETCD` and `VPAAndHPAForAPIServer` feature gates have been promoted to GA and locked to `true`. by @plkokanov [#10599]
- `[USER]` The limitation of having at maximum ~80 worker pools in `Shoot`s has been lifted. Much higher numbers should be possible now (concrete limit depends on the amount of configuration within the pools (e.g., labels, taints, annotations, etc.)). by @rfranzke [#10542]
## ✨ New Features

- `[DEVELOPER]` Add functionality for the determination of bastion VM parameters used by the extensions by @hebelsan [#10537]
- `[OPERATOR]` `gardener-operator` is now capable of deploying extension controllers to the garden runtime cluster via `operator.gardener.cloud/v1alpha1.Extension` resources. Please visit [this document](https://github.com/gardener/gardener/blob/70ef15cb1c26e7cb93388b5cecf91c95d5b3f459/docs/concepts/operator.md#configuration-for-extension-deployment) for more information. by @timuthy [#10518]
- `[OPERATOR]` `gardenlet` now performs garbage collection of stale `Pod`s in all namespaces (except `kube-system`) in the seed cluster. by @rfranzke [#10548]
## 🐛 Bug Fixes

- `[OPERATOR]` When checking whether a `Deployment` rollout is complete, stale `Pod`s are now ignored and no longer counted. by @rfranzke [#10548]
## 🏃 Others

- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.0`. by @gardener-ci-robot [#10547]
- `[DEPENDENCY]` The `gardener/ingress-default-backend` image has been updated to `0.20.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.20.0) by @gardener-ci-robot [#10560]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @gardener-ci-robot [#10570]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.6`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.6) by @gardener-ci-robot [#10556]
- `[DEPENDENCY]` The `gardener/gardener-discovery-server` image has been updated to `v0.2.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.2.0) by @gardener-ci-robot [#10546]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.1`. by @gardener-ci-robot [#10573]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.28.0`. by @gardener-ci-robot [#10591]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.31.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.31.2) by @gardener-ci-robot [#10553]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.6`. by @gardener-ci-robot [#10564]
- `[DEVELOPER]` provider-extensions setup: Seed VPA is disabled by default to avoid two VPA deployments to act on the same cluster causing endless eviction loops. by @ialidzhikov [#10593]
- `[DEVELOPER]` Correctly extract and install the go binaries in the remote local setup by @vicwicker [#10605]
- `[OPERATOR]` Allow overlapping network ranges in case of single stack IPv6. by @axel7born [#10584]
- `[OPERATOR]` Allow empty pod and service ranges in shoot spec for IPv6 single stack. by @axel7born [#10541]
- `[OPERATOR]` The `TopologySpreadConstraint` calculation was improved for workload spread across multiple zones. This especially leads to a more balanced distribution of `kube-apiserver` and `istio` replicas in seed clusters. by @timuthy [#10608]
- `[OPERATOR]` VPA resource settings are now adapted - memory limits are removed and initial resource requests are lowered. by @voelzmo [#10568]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.105.0</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` The `VPAForETCD` and `VPAAndHPAForAPIServer` feature gates have been promoted to GA and locked to `true`. by @plkokanov [#10599]
- `[USER]` The limitation of having at maximum ~80 worker pools in `Shoot`s has been lifted. Much higher numbers should be possible now (concrete limit depends on the amount of configuration within the pools (e.g., labels, taints, annotations, etc.)). by @rfranzke [#10542]
## ✨ New Features

- `[DEVELOPER]` Add functionality for the determination of bastion VM parameters used by the extensions by @hebelsan [#10537]
- `[OPERATOR]` `gardener-operator` is now capable of deploying extension controllers to the garden runtime cluster via `operator.gardener.cloud/v1alpha1.Extension` resources. Please visit [this document](https://github.com/gardener/gardener/blob/70ef15cb1c26e7cb93388b5cecf91c95d5b3f459/docs/concepts/operator.md#configuration-for-extension-deployment) for more information. by @timuthy [#10518]
- `[OPERATOR]` `gardenlet` now performs garbage collection of stale `Pod`s in all namespaces (except `kube-system`) in the seed cluster. by @rfranzke [#10548]
## 🐛 Bug Fixes

- `[OPERATOR]` When checking whether a `Deployment` rollout is complete, stale `Pod`s are now ignored and no longer counted. by @rfranzke [#10548]
## 🏃 Others

- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.0`. by @gardener-ci-robot [#10547]
- `[DEPENDENCY]` The `gardener/ingress-default-backend` image has been updated to `0.20.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.20.0) by @gardener-ci-robot [#10560]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @gardener-ci-robot [#10570]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.6`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.6) by @gardener-ci-robot [#10556]
- `[DEPENDENCY]` The `gardener/gardener-discovery-server` image has been updated to `v0.2.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.2.0) by @gardener-ci-robot [#10546]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.1`. by @gardener-ci-robot [#10573]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.28.0`. by @gardener-ci-robot [#10591]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.31.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.31.2) by @gardener-ci-robot [#10553]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.6`. by @gardener-ci-robot [#10564]
- `[DEVELOPER]` provider-extensions setup: Seed VPA is disabled by default to avoid two VPA deployments to act on the same cluster causing endless eviction loops. by @ialidzhikov [#10593]
- `[DEVELOPER]` Correctly extract and install the go binaries in the remote local setup by @vicwicker [#10605]
- `[OPERATOR]` Allow overlapping network ranges in case of single stack IPv6. by @axel7born [#10584]
- `[OPERATOR]` Allow empty pod and service ranges in shoot spec for IPv6 single stack. by @axel7born [#10541]
- `[OPERATOR]` The `TopologySpreadConstraint` calculation was improved for workload spread across multiple zones. This especially leads to a more balanced distribution of `kube-apiserver` and `istio` replicas in seed clusters. by @timuthy [#10608]
- `[OPERATOR]` VPA resource settings are now adapted - memory limits are removed and initial resource requests are lowered. by @voelzmo [#10568]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.105.0</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` The `VPAForETCD` and `VPAAndHPAForAPIServer` feature gates have been promoted to GA and locked to `true`. by @plkokanov [#10599]
- `[USER]` The limitation of having at maximum ~80 worker pools in `Shoot`s has been lifted. Much higher numbers should be possible now (concrete limit depends on the amount of configuration within the pools (e.g., labels, taints, annotations, etc.)). by @rfranzke [#10542]
## ✨ New Features

- `[DEVELOPER]` Add functionality for the determination of bastion VM parameters used by the extensions by @hebelsan [#10537]
- `[OPERATOR]` `gardener-operator` is now capable of deploying extension controllers to the garden runtime cluster via `operator.gardener.cloud/v1alpha1.Extension` resources. Please visit [this document](https://github.com/gardener/gardener/blob/70ef15cb1c26e7cb93388b5cecf91c95d5b3f459/docs/concepts/operator.md#configuration-for-extension-deployment) for more information. by @timuthy [#10518]
- `[OPERATOR]` `gardenlet` now performs garbage collection of stale `Pod`s in all namespaces (except `kube-system`) in the seed cluster. by @rfranzke [#10548]
## 🐛 Bug Fixes

- `[OPERATOR]` When checking whether a `Deployment` rollout is complete, stale `Pod`s are now ignored and no longer counted. by @rfranzke [#10548]
## 🏃 Others

- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.0`. by @gardener-ci-robot [#10547]
- `[DEPENDENCY]` The `gardener/ingress-default-backend` image has been updated to `0.20.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.20.0) by @gardener-ci-robot [#10560]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @gardener-ci-robot [#10570]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.6`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.6) by @gardener-ci-robot [#10556]
- `[DEPENDENCY]` The `gardener/gardener-discovery-server` image has been updated to `v0.2.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.2.0) by @gardener-ci-robot [#10546]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.1`. by @gardener-ci-robot [#10573]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.28.0`. by @gardener-ci-robot [#10591]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.31.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.31.2) by @gardener-ci-robot [#10553]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.6`. by @gardener-ci-robot [#10564]
- `[DEVELOPER]` provider-extensions setup: Seed VPA is disabled by default to avoid two VPA deployments to act on the same cluster causing endless eviction loops. by @ialidzhikov [#10593]
- `[DEVELOPER]` Correctly extract and install the go binaries in the remote local setup by @vicwicker [#10605]
- `[OPERATOR]` Allow overlapping network ranges in case of single stack IPv6. by @axel7born [#10584]
- `[OPERATOR]` Allow empty pod and service ranges in shoot spec for IPv6 single stack. by @axel7born [#10541]
- `[OPERATOR]` The `TopologySpreadConstraint` calculation was improved for workload spread across multiple zones. This especially leads to a more balanced distribution of `kube-apiserver` and `istio` replicas in seed clusters. by @timuthy [#10608]
- `[OPERATOR]` VPA resource settings are now adapted - memory limits are removed and initial resource requests are lowered. by @voelzmo [#10568]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.0`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.20.0</code></b></summary>

# [gardener/egress-filter-refresher]

## 🐛 Bug Fixes

- `[USER]` fixed a bug where non-suffixed IPv6 addresses could cause the egress filter applier to crash. by @domdom82 [gardener/egress-filter-refresher#48]
# [gardener/gardener-extension-shoot-networking-filter]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#163]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.99.0 to 1.100.0. by @dependabot[bot] [#164]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.100.0 to 1.101.0. by @dependabot[bot] [#167]
- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [#166]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.101.0 to 1.102.0. by @dependabot[bot] [#171]
- `[OPERATOR]` Bumps golang from 1.23.0 to 1.23.1. by @dependabot[bot] [#174]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.20.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.20.0`
## Docker Images
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.20.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.20.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.22.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[OPERATOR]` Adds PowerDNS as additional provider by @simcod [#390]
- `[OPERATOR]` The Helm chart is published as OCI artifacts now. by `Rafael Franzke <rafael.franzke@sap.com>` [$9216e85f29cab534dc8284e54ed081249a1e4299]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.1 to 1.23.2. by @dependabot[bot] [#393]
- `[OPERATOR]` Bumps golang from 1.23.0 to 1.23.1. by @dependabot[bot] [#392]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.22.0`
## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.22.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.15.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#138]
## 🏃 Others

- `[OPERATOR]` This extension now deploys gVisor `20240930` to Shoot clusters. by @MrBatschner [#146]
- `[USER]` gVisor was updated to `20240603.0`. by @MrBatschner [#127]
- `[USER]` Alpine in the gVisor installation container was updated to `3.18.6` to provide a fix for [CVE-2024-0727](https://nvd.nist.gov/vuln/detail/CVE-2024-0727). by @MrBatschner [#127]
- `[DEPENDENCY]` Update go version to `v1.22.0` by @LucaBernstein [#126]
- `[DEPENDENCY]` Update gardener/gardener version to `v1.96.1` by @LucaBernstein [#126]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @LucaBernstein [#126]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.15.0`
## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.15.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.15.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.42.0</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## ✨ New Features

- `[USER]` The provider-openstack extension does now support shoot clusters with Kubernetes version 1.31. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md) before upgrading to 1.31.  by @ialidzhikov [#856]
- `[USER]` The admission webhook now validates `CredentialsBinding`s. by @dimityrmirchev [#845]
- `[OPERATOR]` Allows the operator to configure whether he wants to deploy the standard ClusterFilters and/or StorageClass by @nschad [#830]
- `[OPERATOR]` Enable support for the field `shoot.Spec.CloudProfile` alongside `shoot.Spec.CloudProfileName` and enable the future use of `NamespacedCloudProfile`. by @LucaBernstein [#834]
- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#811]
## 🐛 Bug Fixes

- `[OPERATOR]` Removed unnecessary preStop hook from `node-driver-registrar` in `csi-driver-node`, as socket removal is now handled internally by `node-driver-registrar`, resolving distroless image error. by @AndreasBurger [#802]
## 🏃 Others

- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-openstack` Helm chart. by @timuthy [#806]
- `[OPERATOR]` Starting with gardenlet >= v1.98.0, use controlplane webhook object selector to limit mutator calls. by @LucaBernstein [#797]
- `[OPERATOR]` Update cloud-provider-openstack images and remove credential use from nodeserver by @kon-angelo [#864]
- `[OPERATOR]` Update the VPA CRD used for testing locally by @hebelsan [#822]
- `[OPERATOR]` Update CSI sidecar containers to latest version. by @kon-angelo [#865]
- `[OPERATOR]` Adapt new `WorkerPoolHash` function in Gardener `v1.98`. by @Duciwuci [#816]
- `[OPERATOR]` Inserts architecture from worker to the machine class by @sssash18 [#820]
- `[OPERATOR]` The provider-openstack extension no longer configures min/maxAllowed in any managed VPA resource. by @kon-angelo [#863]
- `[OPERATOR]` Allow multiple loadBalancerProviders as the default and for a region by @lotharbach [#841]
- `[DEVELOPER]` Update gardener/gardener to 1.103.0 and golang to 1.23.0 by @hebelsan [#850]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug where the `Unitialised` error code was blocking machine deletion by @rishabh-11 [gardener/machine-controller-manager#928]
# [gardener/machine-controller-manager-provider-openstack]

## 🏃 Others

- `[DEVELOPER]` Set repository PR template /platform from aws to openstack by @hebelsan [gardener/machine-controller-manager-provider-openstack#165]
- `[DEVELOPER]` Update golang to v1.23.1 by @kon-angelo [gardener/machine-controller-manager-provider-openstack#175]
- `[DEVELOPER]` Update gardener to v1.103.0 by @kon-angelo [gardener/machine-controller-manager-provider-openstack#175]
- `[DEPENDENCY]` Golang version updated to 1.22.5 by @rishabh-11 [gardener/machine-controller-manager-provider-openstack#152]
- `[OPERATOR]` Allow input of pod CIDRs as slice. by @kon-angelo [gardener/machine-controller-manager-provider-openstack#177]
- `[OPERATOR]` Update machine-controller-manager to v0.54.0 by @kon-angelo [gardener/machine-controller-manager-provider-openstack#181]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.42.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.42.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.42.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.42.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.42.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.48.0</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ✨ New Features

- `[USER]` The provider-azure extension does now support shoot clusters with Kubernetes version 1.31. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md) before upgrading to 1.31.  by @ialidzhikov [#963]
- `[USER]` The admission webhook now validates `CredentialsBinding`s. by @dimityrmirchev [#957]
- `[USER]` Enable support for the field `shoot.Spec.CloudProfile` alongside `shoot.Spec.CloudProfileName` and enable the future use of `NamespacedCloudProfile`s. by @LucaBernstein [#922]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix nil pointer dereference if diagnostic profile without given storage URI is used. by @hebelsan [#975]
## 🏃 Others

- `[OPERATOR]` Update CCM and CSI-sidecar containers to latest version by @AndreasBurger [#974]
- `[OPERATOR]` Adds the ability to attach dataDisks with image references by @hebelsan [#891]
- `[OPERATOR]` The provider-azure extension no longer configures min/maxAllowed in any managed VPA resource. by @AndreasBurger [#973]
- `[OPERATOR]` Conditionally enable allow-egress-{tcp,udp} loadbalancers. by @kon-angelo [#958]
# [gardener/machine-controller-manager-provider-azure]

## 🏃 Others

- `[USER]` Golang version upgraded to `1.22.5` by @rishabh-11 [gardener/machine-controller-manager-provider-azure#159]
- `[USER]` Adds the ability to attach dataDisks with image references by @hebelsan [gardener/machine-controller-manager-provider-azure#165]
- `[USER]` golangci-lint will now be used as the linter instead of the older golint by @hebelsan [gardener/machine-controller-manager-provider-azure#139]
# [gardener/machine-controller-manager]

## ✨ New Features

- `[DEVELOPER]` MCM adds the name of the machine to `node.gardener.cloud/machine-name` label of the corresponding node. by @oliver-goetz [gardener/machine-controller-manager#919]
- `[DEVELOPER]` MCM replaces the magic string `<<MACHINE_NAME>>` in user data with the name of the machine when it is bootstrapped. by @oliver-goetz [gardener/machine-controller-manager#919]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug where failure of machine initialization caused label updates to not happen.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[OPERATOR]` Fixed a bug where the `Unitialised` error code was blocking machine deletion by @rishabh-11 [gardener/machine-controller-manager#928]
- `[DEVELOPER]` Fixed bug that removed the shoot-- prefix from control cluster namespace for integration tests using the gardener local setup case by @thiyyakat [gardener/machine-controller-manager#935]
## 🏃 Others

- `[OPERATOR]` Drain timeout is now correctly honored for Pod eviction during Machine Drain by @sssash18 [gardener/machine-controller-manager#920]
- `[OPERATOR]` `getVMStatus` always redirects to `InitiateDrain`. It also populates the node label on the machine object by checking `node.gardener.cloud/machine-name` label on the nodes.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[OPERATOR]` golangci-lint will now be used as the linter instead of the older golint by @aaronfern [gardener/machine-controller-manager#929]
- `[OPERATOR]` Golang version used is now upgraded to `1.22.5` by @aaronfern [gardener/machine-controller-manager#929]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.3` -> `v0.31.0` by @ary1992 [gardener/machine-controller-manager#938]
## 📖 Documentation

- `[OPERATOR]` Broken API doc links are now fixed by @rishabh-11 [gardener/machine-controller-manager#927]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.48.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.48.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.48.0`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.48.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.48.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.53.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[OPERATOR]` The Helm chart is published as OCI artifacts now. by @Rafael-Franzke [gardener/external-dns-management#$9216e85f29cab534dc8284e54ed081249a1e4299]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.1 to 1.23.2. by @dependabot[bot] [gardener/external-dns-management#393]
- `[OPERATOR]` Bumps golang from 1.23.0 to 1.23.1. by @dependabot[bot] [gardener/external-dns-management#392]
# [gardener/gardener-extension-shoot-dns-service]

## ✨ New Features

- `[OPERATOR]` Adds PowerDNS as additional provider by @simcod [#374]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.103.0 to 1.105.0. by @dependabot[bot] [#384]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.53.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.53.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.53.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.53.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.53.0`


</details>

<details>
<summary><b>Update networking-calico to <code>1.43.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## 🏃 Others

- `[OPERATOR]` Use `host-local` ipam for IPv6. by @DockToFuture [#501]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.43.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.43.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.43.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.43.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.43.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.38.1</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🏃 Others

- `[OPERATOR]` Fix a missing error check on the GCP operation waiter that caused nil pointer exceptions. by @kon-angelo [#864]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.38.1`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.38.1`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.38.1`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.38.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.38.1`


</details>

<details>
<summary><b>Update provider-azure to <code>1.48.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[USER]` Fix bug in decoding worker machineImages for existing shoots by @kon-angelo [#985]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.48.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.48.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.48.1`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.48.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.48.1`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.42.1</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🏃 Others

- `[OPERATOR]` Fix a bug that prevented the Cinder CSI from working on shoots with kubernetes version less than v1.28. by @kon-angelo [#876]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.42.1`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.42.1`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.42.1`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.42.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.42.1`


</details>
