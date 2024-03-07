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

<details>
<summary><b>Update gardener-controlplane to <code>1.87.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `kube-apiserver` deployment is annotated to mark the completion of labeling the resources for encrytion so that this step is not repeated in case the "label removal" step fails and resources are partially without the label. by @shafeeqes [#9148]
- `[OPERATOR]` A bug has been fixed which was preventing `valitail` systemd services on shoot workers from starting when the `UseGardenerNodeAgent` feature gate is enabled. by @oliver-goetz [#9150]
## 🏃 Others

- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.6`. by @shafeeqes [#9133]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.87.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `kube-apiserver` deployment is annotated to mark the completion of labeling the resources for encrytion so that this step is not repeated in case the "label removal" step fails and resources are partially without the label. by @shafeeqes [#9148]
- `[OPERATOR]` A bug has been fixed which was preventing `valitail` systemd services on shoot workers from starting when the `UseGardenerNodeAgent` feature gate is enabled. by @oliver-goetz [#9150]
## 🏃 Others

- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.6`. by @shafeeqes [#9133]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.87.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `kube-apiserver` deployment is annotated to mark the completion of labeling the resources for encrytion so that this step is not repeated in case the "label removal" step fails and resources are partially without the label. by @shafeeqes [#9148]
- `[OPERATOR]` A bug has been fixed which was preventing `valitail` systemd services on shoot workers from starting when the `UseGardenerNodeAgent` feature gate is enabled. by @oliver-goetz [#9150]
## 🏃 Others

- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.6`. by @shafeeqes [#9133]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.87.4</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9288]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.87.4</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9288]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.87.4</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9288]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.4`


</details>
