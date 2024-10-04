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
