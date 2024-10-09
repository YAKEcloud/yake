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
