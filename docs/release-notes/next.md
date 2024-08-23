---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update cloudprofiles to <code>0.7.16</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.15...0.7.16

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.101.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.2`. by @gardener-ci-robot [#10357]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.101.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.2`. by @gardener-ci-robot [#10357]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.101.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.2`. by @gardener-ci-robot [#10357]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.2`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.21.0</code></b></summary>

# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Drop support for custom resources `dnslock.dns.gardener.cloud` and `remoteaccesscertificates.dns.gardener.cloud`.  
  As these experimental features have no been used in Gardener, it should not be relevant in most cases. by @MartinWeindel [#381]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.6 to 1.23.0. by @dependabot[bot] [#384]
- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [#383]
- `[OPERATOR]` The dependency controller-manager-library has been updated to include the new flag `--<cluster>.conditional-deploy-crds` by @MartinWeindel [#385]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.21.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.102.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` When the `NewWorkerPoolHash` feature gate is enabled, the calculation now also rolls worker nodes of `Shoot`s when changing `systemReserved` in the `kubelet` configuration. Worker pools are not rolled if the sum of `kubeReserved` and `systemReserved` does not change. If the feature gate is already enabled, then the worker pools of `Shoot`s with non-zero values in `systemReserved` will be rolled once. by @MichaelEischer [#10290]
## 📰 Noteworthy

- `[USER]` The `spec.client` field in the `{Cluster}OpenIDConnectPreset` APIs is deprecated and will be removed after support for Kubernetes 1.30 is dropped. by @AleksandarSavchev [#10253]
- `[USER]` The `spec.kubernetes.kubeAPIServer.oidcConfig.clientAuthentication` field in the `Shoot` API is deprecated and will be removed after support for Kubernetes 1.30 is dropped. by @AleksandarSavchev [#10253]
- `[USER]` The Shoot specification field `.spec.kubernetes.kubeAPIServer.oidcConfig.signingAlgs` for Kubernetes versions `>= v1.30` is not supported anymore. by @AleksandarSavchev [#10244]
## ✨ New Features

- `[USER]` Structured authentication configuration can now be set by creating a `ConfigMap` in the project namespace with the `AuthenticationConfiguration` file set in the `config.yaml` data key and referencing the `ConfigMap` in the new `Shoot` specification field `.spec.kubernetes.kubeAPIServer.structuredAuthentication.configMapName` for Kubernetes versions `>= v1.30`. Only one authenticator can be set via the authentication configuration until `k8s.io/*` Golang dependencies are upgraded to version `>= v0.30`. by @AleksandarSavchev [#10244]
- `[USER]` The following `vpa-recommender` flags are now configurable via the `Shoot` specification:  
  - `--recommendation-lower-bound-cpu-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationLowerBoundCPUPercentile`  
  - `--recommendation-upper-bound-cpu-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationUpperBoundCPUPercentile`  
  - `--target-memory-percentile`: `.spec.kubernetes.verticalPodAutoscaler.targetMemoryPercentile`  
  - `--recommendation-lower-bound-memory-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationLowerBoundMemoryPercentile`  
  - `--recommendation-upper-bound-memory-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationUpperBoundMemoryPercentile` by @ialidzhikov [#10221]
- `[OPERATOR]` Performing control plane migration across `Seed`s with different provider types is now possible.  Before triggering the migration, make sure that pods in the `Shoot`'s control plane, once it is moved to the `Destination Seed`, will have network connectivity to the storage provider of the `Source Seed` (so that ETCD backups can be copied automatically). Additionally, make sure that the `Shoot`'s nodes will have network connectivity to the `Shoot`'s control plane after it is moved to the `Destination Seed`. by @plkokanov [#10323]
- `[OPERATOR]` `gardenlet` now runs a new controller called `TokenRequestorWorkloadIdentity` which requests workload identity tokens and writes them into `Secret` resources in the seed cluster. These tokens can be then used by control plane components in order to present the said `WorkloadIdentity` before external systems. Please see [here](https://gardener.cloud/docs/gardener/concepts/gardenlet/#tokenrequestor-controller-for-workloadidentitys) for more details. by @dimityrmirchev [#10298]
- `[OPERATOR]` `Quota`s can now have scope of type `WorkloadIdentity`. by @dimityrmirchev [#10346]
## 🐛 Bug Fixes

- `[USER]` Fixes a bug preventing shoot clusters with annotation `shoot.gardener.cloud/skip-readiness: "true"` to be created. by @ScheererJ [#10317]
- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10366]
## 🏃 Others

- `[OPERATOR]` vpa-updater and vpa-recommender components do now run with leader election enabled (unconditionally) and support running in HA mode. by @ialidzhikov [#10302]
- `[OPERATOR]` Reduce kubelet http2 timeouts. by @axel7born [#10223]
- `[OPERATOR]` Gardener now temporarily uses a `vpa-recommender` built from a [fork](https://github.com/gardener/autoscaler/tree/rel-vertical-pod-autoscaler) to add additional logging and metrics for debugging an issue where the `vpa-recommender` could recommend lower than `minAllowed` memory requests for pods that actually have high memory usage.  by @plkokanov [#10342]
- `[OPERATOR]` The vertical pod autoscaler component is updated to v1.2.0. [Release Notes](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-1.2.0) by @ialidzhikov [#10275]
- `[OPERATOR]` Migrate VPA metrics to CustomResourceState metrics and upgrade `kube-state-metrics` to `v2.13.0`. by @vicwicker [#9941]
- `[OPERATOR]` An issue in gardener-node-agent causing registry hosts probe to fail when the `spec.criConfig.containerd.registries.hosts.caCerts` field of OperatingSystemConfig is set is now fixed. by @dimitar-kostadinov [#10375]
- `[OPERATOR]` Shoot clusters with Kubernetes version `>= v1.30` will use cluster-autoscaler `v1.30.0`. [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.30.0). by @ashwani2k [#10309]
- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.33`. [Release Notes](https://togithub.com/credativ/plutono/releases/tag/v7.5.33) by @gardener-ci-robot [#10296]
- `[DEPENDENCY]` A wildcard option was added to the [SwitchOptions](https://github.com/gardener/gardener/blob/d810cfcdc030f0ff8dcb952c6a12f4fdc16dc290/extensions/pkg/webhook/cmd/options.go#L103) to disable all webhooks at once via `--disable-webhooks="*"` by @timuthy [#10255]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/cluster-autoscaler: v1.25.3 -> v1.25.4 (for Kubernetes v1.25)  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/cluster-autoscaler: v1.26.2 -> v1.26.3 (for Kubernetes v1.26) by @rishabh-11 [#10362]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.18`. [Release Notes](https://togithub.com/credativ/vali/releases/tag/v2.2.18) by @gardener-ci-robot [#10292]
- `[DEPENDENCY]` The `registry.k8s.io/autoscaling/vpa-admission-controller` image has been updated to `1.2.1`. by @gardener-ci-robot [#10350]
- `[DEPENDENCY]` The `registry.k8s.io/autoscaling/vpa-updater` image has been updated to `1.2.1`. by @gardener-ci-robot [#10351]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.54.0`. by @gardener-ci-robot [#10297]
- `[DEPENDENCY]` The `gardener/ext-authz-server` image has been updated to `0.10.0`. [Release Notes](https://togithub.com/gardener/ext-authz-server/releases/tag/0.10.0) by @gardener-ci-robot [#10321]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.76.0`. by @gardener-ci-robot [#10332]
- `[USER]` Grant get, list and watch permissions to the `customresourcedefinitions` resource in the virtual cluster for authenticated users. Shoot owners can now generate their own shoot metrics using custom resource state configurations by kube-state-metrics. by @vicwicker [#10293]
## 📖 Documentation

- `[DEVELOPER]` [This document](https://github.com/gardener/gardener/blob/master/docs/development/process.md) now contains a guide for developers how to handle deprecations and backwards-compatibility of changes. by @rfranzke [#10294]
- `[OPERATOR]` [The version skew policy](https://github.com/gardener/gardener/blob/master/docs/deployment/version_skew_policy.md) was updated to better reflect how to handle `gardenlet` upgrades. by @rfranzke [#10294]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.102.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` When the `NewWorkerPoolHash` feature gate is enabled, the calculation now also rolls worker nodes of `Shoot`s when changing `systemReserved` in the `kubelet` configuration. Worker pools are not rolled if the sum of `kubeReserved` and `systemReserved` does not change. If the feature gate is already enabled, then the worker pools of `Shoot`s with non-zero values in `systemReserved` will be rolled once. by @MichaelEischer [#10290]
## 📰 Noteworthy

- `[USER]` The `spec.client` field in the `{Cluster}OpenIDConnectPreset` APIs is deprecated and will be removed after support for Kubernetes 1.30 is dropped. by @AleksandarSavchev [#10253]
- `[USER]` The `spec.kubernetes.kubeAPIServer.oidcConfig.clientAuthentication` field in the `Shoot` API is deprecated and will be removed after support for Kubernetes 1.30 is dropped. by @AleksandarSavchev [#10253]
- `[USER]` The Shoot specification field `.spec.kubernetes.kubeAPIServer.oidcConfig.signingAlgs` for Kubernetes versions `>= v1.30` is not supported anymore. by @AleksandarSavchev [#10244]
## ✨ New Features

- `[USER]` Structured authentication configuration can now be set by creating a `ConfigMap` in the project namespace with the `AuthenticationConfiguration` file set in the `config.yaml` data key and referencing the `ConfigMap` in the new `Shoot` specification field `.spec.kubernetes.kubeAPIServer.structuredAuthentication.configMapName` for Kubernetes versions `>= v1.30`. Only one authenticator can be set via the authentication configuration until `k8s.io/*` Golang dependencies are upgraded to version `>= v0.30`. by @AleksandarSavchev [#10244]
- `[USER]` The following `vpa-recommender` flags are now configurable via the `Shoot` specification:  
  - `--recommendation-lower-bound-cpu-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationLowerBoundCPUPercentile`  
  - `--recommendation-upper-bound-cpu-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationUpperBoundCPUPercentile`  
  - `--target-memory-percentile`: `.spec.kubernetes.verticalPodAutoscaler.targetMemoryPercentile`  
  - `--recommendation-lower-bound-memory-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationLowerBoundMemoryPercentile`  
  - `--recommendation-upper-bound-memory-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationUpperBoundMemoryPercentile` by @ialidzhikov [#10221]
- `[OPERATOR]` Performing control plane migration across `Seed`s with different provider types is now possible.  Before triggering the migration, make sure that pods in the `Shoot`'s control plane, once it is moved to the `Destination Seed`, will have network connectivity to the storage provider of the `Source Seed` (so that ETCD backups can be copied automatically). Additionally, make sure that the `Shoot`'s nodes will have network connectivity to the `Shoot`'s control plane after it is moved to the `Destination Seed`. by @plkokanov [#10323]
- `[OPERATOR]` `gardenlet` now runs a new controller called `TokenRequestorWorkloadIdentity` which requests workload identity tokens and writes them into `Secret` resources in the seed cluster. These tokens can be then used by control plane components in order to present the said `WorkloadIdentity` before external systems. Please see [here](https://gardener.cloud/docs/gardener/concepts/gardenlet/#tokenrequestor-controller-for-workloadidentitys) for more details. by @dimityrmirchev [#10298]
- `[OPERATOR]` `Quota`s can now have scope of type `WorkloadIdentity`. by @dimityrmirchev [#10346]
## 🐛 Bug Fixes

- `[USER]` Fixes a bug preventing shoot clusters with annotation `shoot.gardener.cloud/skip-readiness: "true"` to be created. by @ScheererJ [#10317]
- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10366]
## 🏃 Others

- `[OPERATOR]` vpa-updater and vpa-recommender components do now run with leader election enabled (unconditionally) and support running in HA mode. by @ialidzhikov [#10302]
- `[OPERATOR]` Reduce kubelet http2 timeouts. by @axel7born [#10223]
- `[OPERATOR]` Gardener now temporarily uses a `vpa-recommender` built from a [fork](https://github.com/gardener/autoscaler/tree/rel-vertical-pod-autoscaler) to add additional logging and metrics for debugging an issue where the `vpa-recommender` could recommend lower than `minAllowed` memory requests for pods that actually have high memory usage.  by @plkokanov [#10342]
- `[OPERATOR]` The vertical pod autoscaler component is updated to v1.2.0. [Release Notes](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-1.2.0) by @ialidzhikov [#10275]
- `[OPERATOR]` Migrate VPA metrics to CustomResourceState metrics and upgrade `kube-state-metrics` to `v2.13.0`. by @vicwicker [#9941]
- `[OPERATOR]` An issue in gardener-node-agent causing registry hosts probe to fail when the `spec.criConfig.containerd.registries.hosts.caCerts` field of OperatingSystemConfig is set is now fixed. by @dimitar-kostadinov [#10375]
- `[OPERATOR]` Shoot clusters with Kubernetes version `>= v1.30` will use cluster-autoscaler `v1.30.0`. [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.30.0). by @ashwani2k [#10309]
- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.33`. [Release Notes](https://togithub.com/credativ/plutono/releases/tag/v7.5.33) by @gardener-ci-robot [#10296]
- `[DEPENDENCY]` A wildcard option was added to the [SwitchOptions](https://github.com/gardener/gardener/blob/d810cfcdc030f0ff8dcb952c6a12f4fdc16dc290/extensions/pkg/webhook/cmd/options.go#L103) to disable all webhooks at once via `--disable-webhooks="*"` by @timuthy [#10255]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/cluster-autoscaler: v1.25.3 -> v1.25.4 (for Kubernetes v1.25)  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/cluster-autoscaler: v1.26.2 -> v1.26.3 (for Kubernetes v1.26) by @rishabh-11 [#10362]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.18`. [Release Notes](https://togithub.com/credativ/vali/releases/tag/v2.2.18) by @gardener-ci-robot [#10292]
- `[DEPENDENCY]` The `registry.k8s.io/autoscaling/vpa-admission-controller` image has been updated to `1.2.1`. by @gardener-ci-robot [#10350]
- `[DEPENDENCY]` The `registry.k8s.io/autoscaling/vpa-updater` image has been updated to `1.2.1`. by @gardener-ci-robot [#10351]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.54.0`. by @gardener-ci-robot [#10297]
- `[DEPENDENCY]` The `gardener/ext-authz-server` image has been updated to `0.10.0`. [Release Notes](https://togithub.com/gardener/ext-authz-server/releases/tag/0.10.0) by @gardener-ci-robot [#10321]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.76.0`. by @gardener-ci-robot [#10332]
- `[USER]` Grant get, list and watch permissions to the `customresourcedefinitions` resource in the virtual cluster for authenticated users. Shoot owners can now generate their own shoot metrics using custom resource state configurations by kube-state-metrics. by @vicwicker [#10293]
## 📖 Documentation

- `[DEVELOPER]` [This document](https://github.com/gardener/gardener/blob/master/docs/development/process.md) now contains a guide for developers how to handle deprecations and backwards-compatibility of changes. by @rfranzke [#10294]
- `[OPERATOR]` [The version skew policy](https://github.com/gardener/gardener/blob/master/docs/deployment/version_skew_policy.md) was updated to better reflect how to handle `gardenlet` upgrades. by @rfranzke [#10294]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.102.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` When the `NewWorkerPoolHash` feature gate is enabled, the calculation now also rolls worker nodes of `Shoot`s when changing `systemReserved` in the `kubelet` configuration. Worker pools are not rolled if the sum of `kubeReserved` and `systemReserved` does not change. If the feature gate is already enabled, then the worker pools of `Shoot`s with non-zero values in `systemReserved` will be rolled once. by @MichaelEischer [#10290]
## 📰 Noteworthy

- `[USER]` The `spec.client` field in the `{Cluster}OpenIDConnectPreset` APIs is deprecated and will be removed after support for Kubernetes 1.30 is dropped. by @AleksandarSavchev [#10253]
- `[USER]` The `spec.kubernetes.kubeAPIServer.oidcConfig.clientAuthentication` field in the `Shoot` API is deprecated and will be removed after support for Kubernetes 1.30 is dropped. by @AleksandarSavchev [#10253]
- `[USER]` The Shoot specification field `.spec.kubernetes.kubeAPIServer.oidcConfig.signingAlgs` for Kubernetes versions `>= v1.30` is not supported anymore. by @AleksandarSavchev [#10244]
## ✨ New Features

- `[USER]` Structured authentication configuration can now be set by creating a `ConfigMap` in the project namespace with the `AuthenticationConfiguration` file set in the `config.yaml` data key and referencing the `ConfigMap` in the new `Shoot` specification field `.spec.kubernetes.kubeAPIServer.structuredAuthentication.configMapName` for Kubernetes versions `>= v1.30`. Only one authenticator can be set via the authentication configuration until `k8s.io/*` Golang dependencies are upgraded to version `>= v0.30`. by @AleksandarSavchev [#10244]
- `[USER]` The following `vpa-recommender` flags are now configurable via the `Shoot` specification:  
  - `--recommendation-lower-bound-cpu-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationLowerBoundCPUPercentile`  
  - `--recommendation-upper-bound-cpu-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationUpperBoundCPUPercentile`  
  - `--target-memory-percentile`: `.spec.kubernetes.verticalPodAutoscaler.targetMemoryPercentile`  
  - `--recommendation-lower-bound-memory-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationLowerBoundMemoryPercentile`  
  - `--recommendation-upper-bound-memory-percentile`: `.spec.kubernetes.verticalPodAutoscaler.recommendationUpperBoundMemoryPercentile` by @ialidzhikov [#10221]
- `[OPERATOR]` Performing control plane migration across `Seed`s with different provider types is now possible.  Before triggering the migration, make sure that pods in the `Shoot`'s control plane, once it is moved to the `Destination Seed`, will have network connectivity to the storage provider of the `Source Seed` (so that ETCD backups can be copied automatically). Additionally, make sure that the `Shoot`'s nodes will have network connectivity to the `Shoot`'s control plane after it is moved to the `Destination Seed`. by @plkokanov [#10323]
- `[OPERATOR]` `gardenlet` now runs a new controller called `TokenRequestorWorkloadIdentity` which requests workload identity tokens and writes them into `Secret` resources in the seed cluster. These tokens can be then used by control plane components in order to present the said `WorkloadIdentity` before external systems. Please see [here](https://gardener.cloud/docs/gardener/concepts/gardenlet/#tokenrequestor-controller-for-workloadidentitys) for more details. by @dimityrmirchev [#10298]
- `[OPERATOR]` `Quota`s can now have scope of type `WorkloadIdentity`. by @dimityrmirchev [#10346]
## 🐛 Bug Fixes

- `[USER]` Fixes a bug preventing shoot clusters with annotation `shoot.gardener.cloud/skip-readiness: "true"` to be created. by @ScheererJ [#10317]
- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10366]
## 🏃 Others

- `[OPERATOR]` vpa-updater and vpa-recommender components do now run with leader election enabled (unconditionally) and support running in HA mode. by @ialidzhikov [#10302]
- `[OPERATOR]` Reduce kubelet http2 timeouts. by @axel7born [#10223]
- `[OPERATOR]` Gardener now temporarily uses a `vpa-recommender` built from a [fork](https://github.com/gardener/autoscaler/tree/rel-vertical-pod-autoscaler) to add additional logging and metrics for debugging an issue where the `vpa-recommender` could recommend lower than `minAllowed` memory requests for pods that actually have high memory usage.  by @plkokanov [#10342]
- `[OPERATOR]` The vertical pod autoscaler component is updated to v1.2.0. [Release Notes](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-1.2.0) by @ialidzhikov [#10275]
- `[OPERATOR]` Migrate VPA metrics to CustomResourceState metrics and upgrade `kube-state-metrics` to `v2.13.0`. by @vicwicker [#9941]
- `[OPERATOR]` An issue in gardener-node-agent causing registry hosts probe to fail when the `spec.criConfig.containerd.registries.hosts.caCerts` field of OperatingSystemConfig is set is now fixed. by @dimitar-kostadinov [#10375]
- `[OPERATOR]` Shoot clusters with Kubernetes version `>= v1.30` will use cluster-autoscaler `v1.30.0`. [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.30.0). by @ashwani2k [#10309]
- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.33`. [Release Notes](https://togithub.com/credativ/plutono/releases/tag/v7.5.33) by @gardener-ci-robot [#10296]
- `[DEPENDENCY]` A wildcard option was added to the [SwitchOptions](https://github.com/gardener/gardener/blob/d810cfcdc030f0ff8dcb952c6a12f4fdc16dc290/extensions/pkg/webhook/cmd/options.go#L103) to disable all webhooks at once via `--disable-webhooks="*"` by @timuthy [#10255]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/cluster-autoscaler: v1.25.3 -> v1.25.4 (for Kubernetes v1.25)  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/cluster-autoscaler: v1.26.2 -> v1.26.3 (for Kubernetes v1.26) by @rishabh-11 [#10362]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.18`. [Release Notes](https://togithub.com/credativ/vali/releases/tag/v2.2.18) by @gardener-ci-robot [#10292]
- `[DEPENDENCY]` The `registry.k8s.io/autoscaling/vpa-admission-controller` image has been updated to `1.2.1`. by @gardener-ci-robot [#10350]
- `[DEPENDENCY]` The `registry.k8s.io/autoscaling/vpa-updater` image has been updated to `1.2.1`. by @gardener-ci-robot [#10351]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.54.0`. by @gardener-ci-robot [#10297]
- `[DEPENDENCY]` The `gardener/ext-authz-server` image has been updated to `0.10.0`. [Release Notes](https://togithub.com/gardener/ext-authz-server/releases/tag/0.10.0) by @gardener-ci-robot [#10321]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.76.0`. by @gardener-ci-robot [#10332]
- `[USER]` Grant get, list and watch permissions to the `customresourcedefinitions` resource in the virtual cluster for authenticated users. Shoot owners can now generate their own shoot metrics using custom resource state configurations by kube-state-metrics. by @vicwicker [#10293]
## 📖 Documentation

- `[DEVELOPER]` [This document](https://github.com/gardener/gardener/blob/master/docs/development/process.md) now contains a guide for developers how to handle deprecations and backwards-compatibility of changes. by @rfranzke [#10294]
- `[OPERATOR]` [The version skew policy](https://github.com/gardener/gardener/blob/master/docs/deployment/version_skew_policy.md) was updated to better reflect how to handle `gardenlet` upgrades. by @rfranzke [#10294]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.0`


</details>
