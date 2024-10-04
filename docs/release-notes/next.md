---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.102.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented the deployment of `gardenlet`s via `gardener-operator` and the `Gardenlet` resource when `.spec.kubeconfigSecretRef` was used. by @rfranzke [#10411]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.5`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.5) by @gardener-ci-robot [#10443]
- `[OPERATOR]` gardener-controller-manager: A corner case issue in the maintenance controller that prevented forceful minor K8s version update from K8s 1.29 to K8s 1.30 is now resolved. by @ialidzhikov [#10438]
- `[OPERATOR]` Kernel setting `net.netfilter.nf_conntrack_max` is only set on nodes by `sysctl.d` if `kube-proxy` is disabled. by @ScheererJ [#10434]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.102.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented the deployment of `gardenlet`s via `gardener-operator` and the `Gardenlet` resource when `.spec.kubeconfigSecretRef` was used. by @rfranzke [#10411]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.5`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.5) by @gardener-ci-robot [#10443]
- `[OPERATOR]` gardener-controller-manager: A corner case issue in the maintenance controller that prevented forceful minor K8s version update from K8s 1.29 to K8s 1.30 is now resolved. by @ialidzhikov [#10438]
- `[OPERATOR]` Kernel setting `net.netfilter.nf_conntrack_max` is only set on nodes by `sysctl.d` if `kube-proxy` is disabled. by @ScheererJ [#10434]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.102.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented the deployment of `gardenlet`s via `gardener-operator` and the `Gardenlet` resource when `.spec.kubeconfigSecretRef` was used. by @rfranzke [#10411]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.5`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.5) by @gardener-ci-robot [#10443]
- `[OPERATOR]` gardener-controller-manager: A corner case issue in the maintenance controller that prevented forceful minor K8s version update from K8s 1.29 to K8s 1.30 is now resolved. by @ialidzhikov [#10438]
- `[OPERATOR]` Kernel setting `net.netfilter.nf_conntrack_max` is only set on nodes by `sysctl.d` if `kube-proxy` is disabled. by @ScheererJ [#10434]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.1`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.18</code></b></summary>

## What's Changed
* Add hcloud ccx[1-6]3 instances, remove ccx*1 and ccx*2 by @j2L4e in https://github.com/gardener-community/cloudprofiles/pull/29


**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.17...0.7.18

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.102.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10582]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.76.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.76.2) by @gardener-ci-robot [#10453]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.102.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10582]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.76.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.76.2) by @gardener-ci-robot [#10453]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.102.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10582]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.76.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.76.2) by @gardener-ci-robot [#10453]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.2`


</details>
