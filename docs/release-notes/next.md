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
