---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-openstack to <code>1.39.1</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🏃 Others

- `[OPERATOR]` Admission controller will be deployed with the LEADER_ELECTION_NAMESPACE set to the pod namespace by @AndreasBurger [#719]

## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.39.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.39.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.18.2</code></b></summary>

# [gardener/external-dns-management]

## 🏃 Others

- `[USER]` Ignore empty targets for slave entries on update. More concretely, if an ingress resource lose their load balancer addresses during an update, the old targets are kept until new targets are set. by @MartinWeindel [#357]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.2`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.29.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#92]
## 🐛 Bug Fixes

- `[OPERATOR]` Helm chart upgrades no longer fail due to the immutable `Deployment.spec.selector` field. In order to upgrade to this version, the `gardener-metrics-exporter` Deployment needs to be deleted first. by @timebertt [#94]
## 🏃 Others

- `[OPERATOR]` Upgrade dependencies  
  Upgrade golang to 1.22 by @rickardsjp [#96]
- `[OPERATOR]` Upgrade go to 1.22, update base image to distroless based on Debian 12, and exchange the linter. by @rickardsjp [#97]
- `[OPERATOR]` Adds: garden_shoot_worker_node_max_total and garden_shoot_worker_node_min_total. Also gives insight into the worker type (for example for OpenStack the Flavor name). by @Sinscerly [#95]

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.29.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.29.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#92]
## 🐛 Bug Fixes

- `[OPERATOR]` Helm chart upgrades no longer fail due to the immutable `Deployment.spec.selector` field. In order to upgrade to this version, the `gardener-metrics-exporter` Deployment needs to be deleted first. by @timebertt [#94]
## 🏃 Others

- `[OPERATOR]` Upgrade dependencies  
  Upgrade golang to 1.22 by @rickardsjp [#96]
- `[OPERATOR]` Upgrade go to 1.22, update base image to distroless based on Debian 12, and exchange the linter. by @rickardsjp [#97]
- `[OPERATOR]` Adds: garden_shoot_worker_node_max_total and garden_shoot_worker_node_min_total. Also gives insight into the worker type (for example for OpenStack the Flavor name). by @Sinscerly [#95]

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.29.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.51.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#683]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#673]
## 📰 Noteworthy

- `[DEVELOPER]` Remove dependency to specific calico and cilium versions. by @axel7born [#659]
## ✨ New Features

- `[USER]` The provider-alicloud extension does now support shoot clusters with Kubernetes version 1.29. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md) before upgrading to 1.29.  by @acumino [#688]
- `[USER]` `provider-alicloud` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion) for more details.).  by @shafeeqes [#652]
## 🏃 Others

- `[OPERATOR]` The following image is updated:  
- `[OPERATOR]` Enhance NatGateway availableZone validation is moved to ConfigValidator, If first zone user sets under network section doesn't support enhance natgateway, an error will occur during shoot reconcile process. by @kevin-lacoo [#681]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#683]
- `[OPERATOR]` Now user can change EIP after infrastructure created in flow based case. by @kevin-lacoo [#686]
- `[OPERATOR]` Update terraformer to v2.24.0 by @kevin-lacoo [#685]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#683]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @gardener-robot-ci-1 [gardener/machine-controller-manager#866]

## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.51.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.51.0`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.17.1</code></b></summary>

no release notes available

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
<summary><b>Update cert-management to <code>0.12.0</code></b></summary>

# [gardener/cert-management]

## ✨ New Features

- `[USER]` Allow certificates without common name. As the common name is restricted to 64 characters, this means it is now possible to create certificates for domains longer than 64 characters without needing to set the common name to a shorter domain name. by @MartinWeindel [#150]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.6 to 1.22.0. by @dependabot[bot] [#161]
- `[OPERATOR]` Bumps golang from 1.21.5 to 1.21.6. by @dependabot[bot] [#159]
- `[OPERATOR]` Bump golang.org/x/crypto from 0.14.0 to 0.17.0 by @dependabot[bot] [#158]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.12.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.40.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.0 to 1.84.1. by @dependabot[bot] [#216]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.85.0 to 1.86.0. by @dependabot[bot] [#222]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.86.0 to 1.87.0. by @dependabot[bot] [#228]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.87.0 to 1.88.0. by @dependabot[bot] [#232]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.88.0 to 1.89.0. by @dependabot[bot] [#233]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.83.0 to 1.84.0. by @dependabot[bot] [#215]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.1 to 1.85.0. by @dependabot[bot] [#218]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.1 to 1.83.0. by @dependabot[bot] [#212]
- `[DEVELOPER]` Remove vendoring from project by @MartinWeindel [#227]
# [gardener/cert-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/cert-management#156]
## ✨ New Features

- `[USER]` Allow certificates without common name. As the common name is restricted to 64 characters, this means it is now possible to create certificates for domains longer than 64 characters without needing to set the common name to a shorter domain name. by @MartinWeindel [gardener/cert-management#150]
## 🏃 Others

- `[DEVELOPER]` Remove vendoring by @MartinWeindel [gardener/cert-management#157]
- `[OPERATOR]` Bump golang.org/x/crypto from 0.14.0 to 0.17.0 by @dependabot[bot] [gardener/cert-management#158]
- `[OPERATOR]` Update expirationDate if secret is shared between certs by @MartinWeindel [gardener/cert-management#152]
- `[OPERATOR]` Bumps golang from 1.21.5 to 1.21.6. by @dependabot[bot] [gardener/cert-management#159]
- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [gardener/cert-management#148]
- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [gardener/cert-management#154]
- `[OPERATOR]` Updated dependencies controller-manager-library and kubernetes from `v1.28.2` to `v1.28.3` by @MartinWeindel [gardener/cert-management#149]
- `[OPERATOR]` Bumps golang from 1.21.6 to 1.22.0. by @dependabot[bot] [gardener/cert-management#161]
- `[USER]` Improve message if DNS entry is not getting ready. by @MartinWeindel [gardener/cert-management#151]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.40.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.45.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.88.0 to 1.89.0. by @dependabot[bot] [#297]
- `[OPERATOR]` Bumps golang from 1.21.6 to 1.22.0. by @dependabot[bot] [#291]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.87.0 to 1.88.0. by @dependabot[bot] [#292]
# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` The Istio resource `Gateway` can now be annotated with `dns.gardener.cloud/dnsnames='*'` to enable the automatic creation of `DNSEntries` for domain names extracted from hosts fields in this resource or related `VirtualServices` resources.  
  The `Gateway` and `HTTPRoute` resources from the Gateway API are supported in a similar way. by @MartinWeindel [gardener/external-dns-management#354]
## 🐛 Bug Fixes

- `[OPERATOR]` Uncached listing of virtual services and httproutes by @MartinWeindel [gardener/external-dns-management#355]
- `[OPERATOR]` Ignore generated load balancer services of gateways. by @MartinWeindel [gardener/external-dns-management#355]
## 🏃 Others

- `[USER]` Ignore empty targets for slave entries on update. More concretely, if an ingress resource lose their load balancer addresses during an update, the old targets are kept until new targets are set. by @MartinWeindel [gardener/external-dns-management#357]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.45.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.45.0`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.0</code></b></summary>

## What's Changed
* Remove "Docker" CRI by @j2L4e in https://github.com/gardener-community/cloudprofiles/pull/26

## New Contributors
* @j2L4e made their first contribution in https://github.com/gardener-community/cloudprofiles/pull/26

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.12...0.7.0

</details>
