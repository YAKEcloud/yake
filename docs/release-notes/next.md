---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.86.1</code></b></summary>

# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @shreyas-s-rao [gardener/etcd-druid#756]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Dynamic loading of IaaS credentials is now optimized to make use of file system information instead of calculating a hash of the credentials to detect changes. by @renormalize [gardener/etcd-backup-restore#670]
- `[OPERATOR]` A regression in chunk deletion behavior for openstack provider has now been fixed. by @shreyas-s-rao [gardener/etcd-backup-restore#703]
- `[OPERATOR]` Add unit tests for chunk deletion by @anveshreddy18 [gardener/etcd-backup-restore#685]
- `[USER]` Add support for overriding storage API endpoint for provider GCS, by setting environment variable `GOOGLE_STORAGE_API_ENDPOINT`, with the value in the format `http[s]://host[:port]/storage/v1/`. ⚠️ Note: GCS storage API endpoint will not be overridden for `copy` subcommand, since backup buckets may reside in different regions. by @shreyas-s-rao [gardener/etcd-backup-restore#691]

## Docker Images
- admission-controller-linux-amd64: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.1`
- apiserver-linux-amd64: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.1`
- controller-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.1`
- gardenlet-linux-amd64: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.1`
- node-agent-linux-amd64: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.1`
- operator-linux-amd64: `eu.gcr.io/gardener-project/gardener/operator:v1.86.1`
- resource-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.1`
- scheduler-linux-amd64: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.86.1</code></b></summary>

# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @shreyas-s-rao [gardener/etcd-druid#756]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Dynamic loading of IaaS credentials is now optimized to make use of file system information instead of calculating a hash of the credentials to detect changes. by @renormalize [gardener/etcd-backup-restore#670]
- `[OPERATOR]` A regression in chunk deletion behavior for openstack provider has now been fixed. by @shreyas-s-rao [gardener/etcd-backup-restore#703]
- `[OPERATOR]` Add unit tests for chunk deletion by @anveshreddy18 [gardener/etcd-backup-restore#685]
- `[USER]` Add support for overriding storage API endpoint for provider GCS, by setting environment variable `GOOGLE_STORAGE_API_ENDPOINT`, with the value in the format `http[s]://host[:port]/storage/v1/`. ⚠️ Note: GCS storage API endpoint will not be overridden for `copy` subcommand, since backup buckets may reside in different regions. by @shreyas-s-rao [gardener/etcd-backup-restore#691]

## Docker Images
- admission-controller-linux-amd64: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.1`
- apiserver-linux-amd64: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.1`
- controller-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.1`
- gardenlet-linux-amd64: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.1`
- node-agent-linux-amd64: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.1`
- operator-linux-amd64: `eu.gcr.io/gardener-project/gardener/operator:v1.86.1`
- resource-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.1`
- scheduler-linux-amd64: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.86.1</code></b></summary>

# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @shreyas-s-rao [gardener/etcd-druid#756]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Dynamic loading of IaaS credentials is now optimized to make use of file system information instead of calculating a hash of the credentials to detect changes. by @renormalize [gardener/etcd-backup-restore#670]
- `[OPERATOR]` A regression in chunk deletion behavior for openstack provider has now been fixed. by @shreyas-s-rao [gardener/etcd-backup-restore#703]
- `[OPERATOR]` Add unit tests for chunk deletion by @anveshreddy18 [gardener/etcd-backup-restore#685]
- `[USER]` Add support for overriding storage API endpoint for provider GCS, by setting environment variable `GOOGLE_STORAGE_API_ENDPOINT`, with the value in the format `http[s]://host[:port]/storage/v1/`. ⚠️ Note: GCS storage API endpoint will not be overridden for `copy` subcommand, since backup buckets may reside in different regions. by @shreyas-s-rao [gardener/etcd-backup-restore#691]

## Docker Images
- admission-controller-linux-amd64: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.1`
- apiserver-linux-amd64: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.1`
- controller-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.1`
- gardenlet-linux-amd64: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.1`
- node-agent-linux-amd64: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.1`
- operator-linux-amd64: `eu.gcr.io/gardener-project/gardener/operator:v1.86.1`
- resource-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.1`
- scheduler-linux-amd64: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.86.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Allow the `dependency-watchdog-prober` to patch "deployments" and "deployments/scale" resources. by @aaronfern [#9041]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.2`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.2`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.2`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.2`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.2`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.86.2`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.2`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.86.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Allow the `dependency-watchdog-prober` to patch "deployments" and "deployments/scale" resources. by @aaronfern [#9041]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.2`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.2`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.2`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.2`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.2`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.86.2`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.2`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.86.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Allow the `dependency-watchdog-prober` to patch "deployments" and "deployments/scale" resources. by @aaronfern [#9041]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.2`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.2`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.2`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.2`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.2`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.86.2`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.2`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.86.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9087]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9082]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.3`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.3`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.3`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.3`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.3`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.86.3`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.3`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.86.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9087]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9082]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.3`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.3`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.3`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.3`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.3`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.86.3`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.3`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.86.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9087]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9082]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.3`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.3`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.3`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.3`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.3`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.86.3`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.3`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.86.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9112]

## Docker Images
- gardener: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/operator:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.86.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.86.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9112]

## Docker Images
- gardener: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/operator:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.86.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.86.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9112]

## Docker Images
- gardener: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/operator:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.4`
- gardener: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.86.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.86.4`


</details>
