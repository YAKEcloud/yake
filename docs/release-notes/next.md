---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update backup-s3 to <code>0.7.1</code></b></summary>

## General Changes

* Remove deployment anti affinity rule. (#12) @Gerrit91


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where gardenlet was missing permissions to read `v1.Events` in the istio ingress namespace in the seed cluster. by @vpnachev [#11163]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.34.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.34.0) by @gardener-ci-robot [#11161]
- `[OPERATOR]` Fix a bug in the gardener operator where the issuer URL domain for workload identity tokens was not prefixed with `discovery.` resulting in invalid OIDC tokens and discovery documents. by @vpnachev [#11158]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where gardenlet was missing permissions to read `v1.Events` in the istio ingress namespace in the seed cluster. by @vpnachev [#11163]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.34.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.34.0) by @gardener-ci-robot [#11161]
- `[OPERATOR]` Fix a bug in the gardener operator where the issuer URL domain for workload identity tokens was not prefixed with `discovery.` resulting in invalid OIDC tokens and discovery documents. by @vpnachev [#11158]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.110.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where gardenlet was missing permissions to read `v1.Events` in the istio ingress namespace in the seed cluster. by @vpnachev [#11163]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.34.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.34.0) by @gardener-ci-robot [#11161]
- `[OPERATOR]` Fix a bug in the gardener operator where the issuer URL domain for workload identity tokens was not prefixed with `discovery.` resulting in invalid OIDC tokens and discovery documents. by @vpnachev [#11158]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.3`


</details>

<details>
<summary><b>Update provider-azure to <code>1.49.3</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix an issue causing nil pointer exception when the remote resource that was once existing and present in the inventory, had been deleted during reconciliation by @AndreasBurger [#1062]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.49.3`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.49.3`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.49.3`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.49.3`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.49.3`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.22</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.21...0.7.22

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.4</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following images have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-recommender`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-updater`: 1.2.1 -> 1.2.2 by @ialidzhikov [#11179]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.4</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following images have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-recommender`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-updater`: 1.2.1 -> 1.2.2 by @ialidzhikov [#11179]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.110.4</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following images have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-recommender`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-updater`: 1.2.1 -> 1.2.2 by @ialidzhikov [#11179]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.4`


</details>
