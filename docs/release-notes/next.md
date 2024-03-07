---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.89.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/gardener-metrics-exporter#92]
## 🐛 Bug Fixes

- `[OPERATOR]` Helm chart upgrades no longer fail due to the immutable `Deployment.spec.selector` field. In order to upgrade to this version, the `gardener-metrics-exporter` Deployment needs to be deleted first. by @timebertt [gardener/gardener-metrics-exporter#94]
## 🏃 Others

- `[OPERATOR]` Upgrade go to 1.22, update base image to distroless based on Debian 12, and exchange the linter. by @rickardsjp [gardener/gardener-metrics-exporter#97]
- `[OPERATOR]` Upgrade dependencies  
  Upgrade golang to 1.22 by @rickardsjp [gardener/gardener-metrics-exporter#96]
- `[OPERATOR]` Adds: garden_shoot_worker_node_max_total and garden_shoot_worker_node_min_total. Also gives insight into the worker type (for example for OpenStack the Flavor name). by @Sinscerly [gardener/gardener-metrics-exporter#95]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The util function `pkg/utils/gardener.ComputeShootProjectSecretName` has been renamed to `pkg/utils/gardener.ComputeShootProjectResourceName`. by @petersutter [#9123]
- `[DEPENDENCY]` There are several breaking changes in the `github.com/gardener/gardener/extensions/pkg/webhook` package:  
  - `EnsureNoStringWithPrefix`, `EnsureNoStringWithPrefixContains`, `EnsureNoEnvVarWithName`, `EnsureNoVolumeMountWithName`, `EnsureNoVolumeWithName`, `EnsureNoContainerWithName`, `EnsureNoPVCWithName` now delete all matching entries. Previously they were deleting only the first occurrence.  
  - `EnsureStringWithPrefix`, `EnsureStringWithPrefixContains` now act on all prefix matches.  
  - `StringIndex` is removed. instead, use `slices.Index`. by @Kostov6 [#9007]
- `[OPERATOR]` The `UseGardenerNodeAgent` feature gate has been promoted to beta and is now turned on by default.  by @rfranzke [#9161]
## 📰 Noteworthy

- `[USER]` The shoot cluster CA bundle is now stored in a `ConfigMap` in the project namespace of the garden cluster, in addition to storing it in a `Secret`. This `ConfigMap` shares the same name as the pre-existing `Secret`, which is `<shoot-name>.ca-cluster`. The `Secret` will be removed in a future Gardener release. Therefore, if your tooling relies on this `Secret`, you should update it to fetch the `ConfigMap` instead. by @petersutter [#9123]
- `[USER]` It is now possible to skip a minor Kubernetes version for worker pool Kubernetes version upgrades as long as the version remains equal to or less than the control plane version. by @shafeeqes [#9185]
- `[OPERATOR]` A new field `.spec.runtimeCluster.ingress.domains` was added to the `Garden` API. This field allows to use multiple ingress domains for components of the runtime cluster. All domains are assumed to be wildcard domains. Earlier, the API only accepted one domain name via `.spec.runtimeCluster.ingress.domain`.  
  ⚠️ With this change `.spec.runtimeCluster.ingress.domain` is deprecated and will be removed in the next release. Please update your `Garden` resource to the new `.spec.runtimeCluster.ingress.domains` field by removing the existing domain configuration from `ingress.domain` and add it as the first entry of `ingress.domains`. by @ScheererJ [#9038]
## ✨ New Features

- `[OPERATOR]` `gardener-resource-manager` now considers the health and the progressing status for `Prometheus` and `Alertmanager` resources managed via `ManagedResource`s. by @rfranzke [#9163]
- `[DEVELOPER]` It is now possible to provide configuration for the cache Prometheus running in seed clusters' `garden` namespaces. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/extensions/logging-and-monitoring.md#cache-prometheus). by @rfranzke [#9128]
- `[DEVELOPER]` It is now possible to provide configuration for the seed Prometheus running in seed clusters' `garden` namespaces. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/extensions/logging-and-monitoring.md#seed-prometheus). by @rfranzke [#9180]
- `[DEVELOPER]` The `WaitUntilObjectReadyWithHealthFunction` function was enhanced to log the object's kind. by @timuthy [#9177]
## 🏃 Others

- `[DEVELOPER]` An issue with the `FallbackClient` was resolved. If used in external projects, the client threw scheme related errors belonging to GVKs that are not registered in the `GardenScheme`.  by @timuthy [#9177]
- `[OPERATOR]` Add Prometheus alert for unhealthy seed node. by @adenitiu [#9127]
- `[OPERATOR]` Istio is now used as the single entry point on seed clusters. The load balancer of nginx-ingress is removed and traffic goes through istio before being handled by nginx if necessary. by @ScheererJ [#9038]
- `[OPERATOR]` Add condition type `ObservabilityComponentsHealthy` for extension health check, it will allow extensions to register with this type.  by @Sallyan [#9092]
- `[OPERATOR]` Multiple ingress domains in `.spec.runtimeCluster.ingress.domains` can now overlap without triggering reconciliation issues. by @ScheererJ [#9183]
- `[OPERATOR]` Update configure-admission.sh for extensions using gardener certificate management for webhooks by @kon-angelo [#9168]
- `[OPERATOR]` The side car container of kube-apiserver for the HA VPN now have minimum memory resources that VPA will respect. by @ScheererJ [#9173]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.89.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.89.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.89.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.89.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.89.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.89.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.89.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.89.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.89.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/gardener-metrics-exporter#92]
## 🐛 Bug Fixes

- `[OPERATOR]` Helm chart upgrades no longer fail due to the immutable `Deployment.spec.selector` field. In order to upgrade to this version, the `gardener-metrics-exporter` Deployment needs to be deleted first. by @timebertt [gardener/gardener-metrics-exporter#94]
## 🏃 Others

- `[OPERATOR]` Upgrade go to 1.22, update base image to distroless based on Debian 12, and exchange the linter. by @rickardsjp [gardener/gardener-metrics-exporter#97]
- `[OPERATOR]` Upgrade dependencies  
  Upgrade golang to 1.22 by @rickardsjp [gardener/gardener-metrics-exporter#96]
- `[OPERATOR]` Adds: garden_shoot_worker_node_max_total and garden_shoot_worker_node_min_total. Also gives insight into the worker type (for example for OpenStack the Flavor name). by @Sinscerly [gardener/gardener-metrics-exporter#95]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The util function `pkg/utils/gardener.ComputeShootProjectSecretName` has been renamed to `pkg/utils/gardener.ComputeShootProjectResourceName`. by @petersutter [#9123]
- `[DEPENDENCY]` There are several breaking changes in the `github.com/gardener/gardener/extensions/pkg/webhook` package:  
  - `EnsureNoStringWithPrefix`, `EnsureNoStringWithPrefixContains`, `EnsureNoEnvVarWithName`, `EnsureNoVolumeMountWithName`, `EnsureNoVolumeWithName`, `EnsureNoContainerWithName`, `EnsureNoPVCWithName` now delete all matching entries. Previously they were deleting only the first occurrence.  
  - `EnsureStringWithPrefix`, `EnsureStringWithPrefixContains` now act on all prefix matches.  
  - `StringIndex` is removed. instead, use `slices.Index`. by @Kostov6 [#9007]
- `[OPERATOR]` The `UseGardenerNodeAgent` feature gate has been promoted to beta and is now turned on by default.  by @rfranzke [#9161]
## 📰 Noteworthy

- `[USER]` The shoot cluster CA bundle is now stored in a `ConfigMap` in the project namespace of the garden cluster, in addition to storing it in a `Secret`. This `ConfigMap` shares the same name as the pre-existing `Secret`, which is `<shoot-name>.ca-cluster`. The `Secret` will be removed in a future Gardener release. Therefore, if your tooling relies on this `Secret`, you should update it to fetch the `ConfigMap` instead. by @petersutter [#9123]
- `[USER]` It is now possible to skip a minor Kubernetes version for worker pool Kubernetes version upgrades as long as the version remains equal to or less than the control plane version. by @shafeeqes [#9185]
- `[OPERATOR]` A new field `.spec.runtimeCluster.ingress.domains` was added to the `Garden` API. This field allows to use multiple ingress domains for components of the runtime cluster. All domains are assumed to be wildcard domains. Earlier, the API only accepted one domain name via `.spec.runtimeCluster.ingress.domain`.  
  ⚠️ With this change `.spec.runtimeCluster.ingress.domain` is deprecated and will be removed in the next release. Please update your `Garden` resource to the new `.spec.runtimeCluster.ingress.domains` field by removing the existing domain configuration from `ingress.domain` and add it as the first entry of `ingress.domains`. by @ScheererJ [#9038]
## ✨ New Features

- `[OPERATOR]` `gardener-resource-manager` now considers the health and the progressing status for `Prometheus` and `Alertmanager` resources managed via `ManagedResource`s. by @rfranzke [#9163]
- `[DEVELOPER]` It is now possible to provide configuration for the cache Prometheus running in seed clusters' `garden` namespaces. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/extensions/logging-and-monitoring.md#cache-prometheus). by @rfranzke [#9128]
- `[DEVELOPER]` It is now possible to provide configuration for the seed Prometheus running in seed clusters' `garden` namespaces. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/extensions/logging-and-monitoring.md#seed-prometheus). by @rfranzke [#9180]
- `[DEVELOPER]` The `WaitUntilObjectReadyWithHealthFunction` function was enhanced to log the object's kind. by @timuthy [#9177]
## 🏃 Others

- `[DEVELOPER]` An issue with the `FallbackClient` was resolved. If used in external projects, the client threw scheme related errors belonging to GVKs that are not registered in the `GardenScheme`.  by @timuthy [#9177]
- `[OPERATOR]` Add Prometheus alert for unhealthy seed node. by @adenitiu [#9127]
- `[OPERATOR]` Istio is now used as the single entry point on seed clusters. The load balancer of nginx-ingress is removed and traffic goes through istio before being handled by nginx if necessary. by @ScheererJ [#9038]
- `[OPERATOR]` Add condition type `ObservabilityComponentsHealthy` for extension health check, it will allow extensions to register with this type.  by @Sallyan [#9092]
- `[OPERATOR]` Multiple ingress domains in `.spec.runtimeCluster.ingress.domains` can now overlap without triggering reconciliation issues. by @ScheererJ [#9183]
- `[OPERATOR]` Update configure-admission.sh for extensions using gardener certificate management for webhooks by @kon-angelo [#9168]
- `[OPERATOR]` The side car container of kube-apiserver for the HA VPN now have minimum memory resources that VPA will respect. by @ScheererJ [#9173]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.89.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.89.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.89.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.89.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.89.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.89.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.89.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.89.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.89.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/gardener-metrics-exporter#92]
## 🐛 Bug Fixes

- `[OPERATOR]` Helm chart upgrades no longer fail due to the immutable `Deployment.spec.selector` field. In order to upgrade to this version, the `gardener-metrics-exporter` Deployment needs to be deleted first. by @timebertt [gardener/gardener-metrics-exporter#94]
## 🏃 Others

- `[OPERATOR]` Upgrade go to 1.22, update base image to distroless based on Debian 12, and exchange the linter. by @rickardsjp [gardener/gardener-metrics-exporter#97]
- `[OPERATOR]` Upgrade dependencies  
  Upgrade golang to 1.22 by @rickardsjp [gardener/gardener-metrics-exporter#96]
- `[OPERATOR]` Adds: garden_shoot_worker_node_max_total and garden_shoot_worker_node_min_total. Also gives insight into the worker type (for example for OpenStack the Flavor name). by @Sinscerly [gardener/gardener-metrics-exporter#95]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The util function `pkg/utils/gardener.ComputeShootProjectSecretName` has been renamed to `pkg/utils/gardener.ComputeShootProjectResourceName`. by @petersutter [#9123]
- `[DEPENDENCY]` There are several breaking changes in the `github.com/gardener/gardener/extensions/pkg/webhook` package:  
  - `EnsureNoStringWithPrefix`, `EnsureNoStringWithPrefixContains`, `EnsureNoEnvVarWithName`, `EnsureNoVolumeMountWithName`, `EnsureNoVolumeWithName`, `EnsureNoContainerWithName`, `EnsureNoPVCWithName` now delete all matching entries. Previously they were deleting only the first occurrence.  
  - `EnsureStringWithPrefix`, `EnsureStringWithPrefixContains` now act on all prefix matches.  
  - `StringIndex` is removed. instead, use `slices.Index`. by @Kostov6 [#9007]
- `[OPERATOR]` The `UseGardenerNodeAgent` feature gate has been promoted to beta and is now turned on by default.  by @rfranzke [#9161]
## 📰 Noteworthy

- `[USER]` The shoot cluster CA bundle is now stored in a `ConfigMap` in the project namespace of the garden cluster, in addition to storing it in a `Secret`. This `ConfigMap` shares the same name as the pre-existing `Secret`, which is `<shoot-name>.ca-cluster`. The `Secret` will be removed in a future Gardener release. Therefore, if your tooling relies on this `Secret`, you should update it to fetch the `ConfigMap` instead. by @petersutter [#9123]
- `[USER]` It is now possible to skip a minor Kubernetes version for worker pool Kubernetes version upgrades as long as the version remains equal to or less than the control plane version. by @shafeeqes [#9185]
- `[OPERATOR]` A new field `.spec.runtimeCluster.ingress.domains` was added to the `Garden` API. This field allows to use multiple ingress domains for components of the runtime cluster. All domains are assumed to be wildcard domains. Earlier, the API only accepted one domain name via `.spec.runtimeCluster.ingress.domain`.  
  ⚠️ With this change `.spec.runtimeCluster.ingress.domain` is deprecated and will be removed in the next release. Please update your `Garden` resource to the new `.spec.runtimeCluster.ingress.domains` field by removing the existing domain configuration from `ingress.domain` and add it as the first entry of `ingress.domains`. by @ScheererJ [#9038]
## ✨ New Features

- `[OPERATOR]` `gardener-resource-manager` now considers the health and the progressing status for `Prometheus` and `Alertmanager` resources managed via `ManagedResource`s. by @rfranzke [#9163]
- `[DEVELOPER]` It is now possible to provide configuration for the cache Prometheus running in seed clusters' `garden` namespaces. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/extensions/logging-and-monitoring.md#cache-prometheus). by @rfranzke [#9128]
- `[DEVELOPER]` It is now possible to provide configuration for the seed Prometheus running in seed clusters' `garden` namespaces. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/extensions/logging-and-monitoring.md#seed-prometheus). by @rfranzke [#9180]
- `[DEVELOPER]` The `WaitUntilObjectReadyWithHealthFunction` function was enhanced to log the object's kind. by @timuthy [#9177]
## 🏃 Others

- `[DEVELOPER]` An issue with the `FallbackClient` was resolved. If used in external projects, the client threw scheme related errors belonging to GVKs that are not registered in the `GardenScheme`.  by @timuthy [#9177]
- `[OPERATOR]` Add Prometheus alert for unhealthy seed node. by @adenitiu [#9127]
- `[OPERATOR]` Istio is now used as the single entry point on seed clusters. The load balancer of nginx-ingress is removed and traffic goes through istio before being handled by nginx if necessary. by @ScheererJ [#9038]
- `[OPERATOR]` Add condition type `ObservabilityComponentsHealthy` for extension health check, it will allow extensions to register with this type.  by @Sallyan [#9092]
- `[OPERATOR]` Multiple ingress domains in `.spec.runtimeCluster.ingress.domains` can now overlap without triggering reconciliation issues. by @ScheererJ [#9183]
- `[OPERATOR]` Update configure-admission.sh for extensions using gardener certificate management for webhooks by @kon-angelo [#9168]
- `[OPERATOR]` The side car container of kube-apiserver for the HA VPN now have minimum memory resources that VPA will respect. by @ScheererJ [#9173]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.89.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.89.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.89.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.89.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.89.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.89.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.89.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.89.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.89.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Bump alpine to 3.19.1 by @ary1992 [#9316]
- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9286]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.89.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.89.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.89.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.89.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.89.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.89.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.89.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.89.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.89.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Bump alpine to 3.19.1 by @ary1992 [#9316]
- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9286]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.89.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.89.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.89.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.89.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.89.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.89.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.89.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.89.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.89.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Bump alpine to 3.19.1 by @ary1992 [#9316]
- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9286]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.89.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.89.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.89.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.89.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.89.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.89.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.89.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.89.1`


</details>
