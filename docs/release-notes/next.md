---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.87.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9086]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9083]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.87.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9086]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9083]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.87.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9086]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9083]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.87.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9111]

## Docker Images
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.87.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9111]

## Docker Images
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.87.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9111]

## Docker Images
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.2`


</details>
