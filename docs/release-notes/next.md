---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-azure to <code>1.45.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where only one infra mutator gets called by @AndreasBurger [#911]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.45.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.45.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.98.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing gardenlet to panic while deleting `dependency-watchdog-access` secrets for workerless Shoots if the `status.technicalID` is not set for the Shoot is now fixed. by @shafeeqes [#10068]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.98.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing gardenlet to panic while deleting `dependency-watchdog-access` secrets for workerless Shoots if the `status.technicalID` is not set for the Shoot is now fixed. by @shafeeqes [#10068]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.98.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing gardenlet to panic while deleting `dependency-watchdog-access` secrets for workerless Shoots if the `status.technicalID` is not set for the Shoot is now fixed. by @shafeeqes [#10068]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.98.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been upgraded.  
  - github.com/gardener/autoscaler v1.29.0->v1.29.1  
  - github.com/gardener/autoscaler v1.28.2->v1.28.3  
  - github.com/gardener/autoscaler v1.27.2->v1.27.3 by @gardener-ci-robot [#10076]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.98.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been upgraded.  
  - github.com/gardener/autoscaler v1.29.0->v1.29.1  
  - github.com/gardener/autoscaler v1.28.2->v1.28.3  
  - github.com/gardener/autoscaler v1.27.2->v1.27.3 by @gardener-ci-robot [#10076]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.98.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been upgraded.  
  - github.com/gardener/autoscaler v1.29.0->v1.29.1  
  - github.com/gardener/autoscaler v1.28.2->v1.28.3  
  - github.com/gardener/autoscaler v1.27.2->v1.27.3 by @gardener-ci-robot [#10076]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.2`


</details>
