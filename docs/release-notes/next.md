---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-gcp to <code>1.40.0</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[USER]` Remove redundant firewall rule `*-allow-external-access` that allowed traffic from all 0 by @kon-angelo [#876]
## 🏃 Others

- `[OPERATOR]` Check priority of firewall rules in integration tests by @kon-angelo [#877]
- `[OPERATOR]` Added validation to prevent IPv6-only/dual-stack clusters as they are not supported, yet. by @ScheererJ [#878]
- `[OPERATOR]` Update gardener/gardener to v1.105.0 by @hebelsan [#869]
- `[OPERATOR]` Updating CSI driver provisioner ClusterRole rules by @hebelsan [#867]
- `[OPERATOR]` Prevent unnecessary CNI side car containers for SNAT to upstream DNS servers by @ScheererJ [#868]
# [gardener/machine-controller-manager]

## ✨ New Features

- `[DEVELOPER]` MCM replaces the magic string `<<MACHINE_NAME>>` in user data with the name of the machine when it is bootstrapped. by @oliver-goetz [gardener/machine-controller-manager#919]
- `[DEVELOPER]` MCM adds the name of the machine to `node.gardener.cloud/machine-name` label of the corresponding node. by @oliver-goetz [gardener/machine-controller-manager#919]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fixed bug that removed the shoot-- prefix from control cluster namespace for integration tests using the gardener local setup case by @thiyyakat [gardener/machine-controller-manager#935]
- `[OPERATOR]` Fixed a bug where failure of machine initialization caused label updates to not happen.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[OPERATOR]` Fixed a bug where the `Unitialised` error code was blocking machine deletion by @rishabh-11 [gardener/machine-controller-manager#928]
## 🏃 Others

- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.3` -> `v0.31.0` by @ary1992 [gardener/machine-controller-manager#938]
- `[OPERATOR]` golangci-lint will now be used as the linter instead of the older golint by @aaronfern [gardener/machine-controller-manager#929]
- `[OPERATOR]` Drain timeout is now correctly honored for Pod eviction during Machine Drain by @sssash18 [gardener/machine-controller-manager#920]
- `[OPERATOR]` Golang version used is now upgraded to `1.22.5` by @aaronfern [gardener/machine-controller-manager#929]
- `[OPERATOR]` `getVMStatus` always redirects to `InitiateDrain`. It also populates the node label on the machine object by checking `node.gardener.cloud/machine-name` label on the nodes.  by @thiyyakat [gardener/machine-controller-manager#940]
## 📖 Documentation

- `[OPERATOR]` Broken API doc links are now fixed by @rishabh-11 [gardener/machine-controller-manager#927]
# [gardener/machine-controller-manager-provider-gcp]

## 🏃 Others

- `[OPERATOR]` golangci-lint will now be used as the linter instead of the older golint by @aaronfern [gardener/machine-controller-manager-provider-gcp#127]
- `[USER]` Golang version updated to `1.22.5` by @rishabh-11 [gardener/machine-controller-manager-provider-gcp#126]
- `[DEVELOPER]` MCM can now retrieve the project ID from a "projectID" data key, allowing support for credential configurations that do not directly contain the project ID. One such case is a [workload identity credential configuration](https://cloud.google.com/iam/docs/workload-download-cred-and-grant-access). by @dimityrmirchev [gardener/machine-controller-manager-provider-gcp#130]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.40.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.40.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.40.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.40.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.40.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.58.3</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` Ignore alreadyDetached errors when detaching instead of erroring out by @kon-angelo [#1118]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.58.3`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.58.3`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.58.3`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.58.3`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.58.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.107.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue where the dashboard's service account lacked permission to create `leases` in the `garden` namespace when `spec.virtualCluster.gardener.gardenerDashboard.gitHub` was configured in the `Garden` resource. by @petersutter [#10835]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.107.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue where the dashboard's service account lacked permission to create `leases` in the `garden` namespace when `spec.virtualCluster.gardener.gardenerDashboard.gitHub` was configured in the `Garden` resource. by @petersutter [#10835]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.107.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue where the dashboard's service account lacked permission to create `leases` in the `garden` namespace when `spec.virtualCluster.gardener.gardenerDashboard.gitHub` was configured in the `Garden` resource. by @petersutter [#10835]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.1`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.21.0</code></b></summary>

# [gardener/egress-filter-refresher]

## ✨ New Features

- `[USER]` `gosec` was introduced for Static Application Security Testing (SAST). by @ScheererJ [gardener/egress-filter-refresher#50]
- `[OPERATOR]` On switching the blocking mode, previously active egress filter rules are removed from the node. by @domdom82 [gardener/egress-filter-refresher#49]
# [gardener/gardener-extension-shoot-networking-filter]

## ✨ New Features

- `[USER]` Ingress filtering may now be turned on/off per worker-group by @domdom82 [#186]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [#190]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @ScheererJ [#181]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.106.0 to 1.107.0. by @dependabot[bot] [#189]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.104.0 to 1.105.0. by @dependabot[bot] [#180]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.105.0 to 1.106.0. by @dependabot[bot] [#185]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.21.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.21.0`
## Docker Images
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.21.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.21.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.107.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.23.3`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.3) by @gardener-ci-robot [#10839]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.107.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.23.3`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.3) by @gardener-ci-robot [#10839]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.107.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.23.3`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.3) by @gardener-ci-robot [#10839]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.2`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.10.0</code></b></summary>

## What's Changed
* 🤖 Update module github.com/onsi/gomega to v1.35.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/103
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.21.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/102
* 🤖: migrate renovate config by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/108
* Add reviewers to renovate by @robinschneider in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/109
* 🤖 Update module github.com/ironcore-dev/vgopath to v0.1.7 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/113
* Bump Gardener to `v1.103` by @Duciwuci in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/117


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.9.0...v0.10.0

</details>

<details>
<summary><b>Update provider-gcp to <code>1.40.1</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🐛 Bug Fixes

- `[USER]` Fix missing RBAC PV patching permissions for csi-provisioner" by @kon-angelo [#900]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.40.1`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.40.1`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.40.1`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.40.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.40.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.108.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[USER]` The `url` annotation in `<shoot-name>.monitoring` secrets in the project namespace is deprecated and will be removed soon. Please use the `plutono-url` annotation instead. by @oliver-goetz [#10735]
- `[OPERATOR]` There is an incompatible change in the `Garden` (`gardens.operator.gardener.cloud`) custom resource, which required manual action:  
  - Fields `.spec.virtualCluster.dns.domains` and `.spec.runtimeCluster.ingress.domains` were changed from type string to object with a field `name` and an optional field `provider`,  e.g., in `JSON` format, replace `"domains": ["domain1.example.com", "domain2.example.com"]` with `"domains": [{"name": "domain1.example.com"}, {"name": "domain2.example.com"}]`.  
  - `.spec.runtimeCluster.ingress.domains` is required now  
  - `.spec.virtualCluster.dns.domains` is required now by @MartinWeindel [#10645]
- `[OPERATOR]` The optional deployment of cert-management component has been removed. As it was only introduced recently and probably not used, this change should have no impact typically. by @MartinWeindel [#10802]
## 📰 Noteworthy

- `[USER]` Allow changing `shoot.spec.cloudProfile` between `CloudProfile` and its descendant `NamespacedCloudProfile`s. by @LucaBernstein [#10811]
## ✨ New Features

- `[USER]` Allow for custom machine images in `NamespacedCloudProfile`s and add the `spec.providerConfig` field. by @LucaBernstein [#10629]
- `[USER]` The URLs of Shoot `plutono`, `prometheus` and `alertmanager` are now stored as annotations in `<shoot-name>.monitoring` secret in the project namespace. by @oliver-goetz [#10735]
- `[OPERATOR]` Enhance the `gardener-operator` to deploy `DNSRecords` and `BackupBucket` for the virtual garden resource.  
  `DNSRecords` are only deployed if at least one provider is specified at `.spec.dns.providers` in the `Garden` resource.  
  A `BackupBucket` is created if the `.spec.virtualCluster.etcd.backup` section is specified. An existing backup bucket on the infrastructure becomes automatically managed this way. by @MartinWeindel [#10645]
- `[DEVELOPER]` gardener-apiserver: The `ExtensionLabels` admission plugin now also sets labels to `WorkloadIdentity`s. by @dimityrmirchev [#10786]
## 🐛 Bug Fixes

- `[DEVELOPER]` `gardener-node-agent` applies inline files before applying containerd registries now. by @oliver-goetz [#10831]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/kube-state-metrics/kube-state-metrics` image has been updated to `v2.14.0`. by @gardener-ci-robot [#10818]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.55.1`. by @gardener-ci-robot [#10804]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.24.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.24.1) by @gardener-ci-robot [#10843]
- `[OPERATOR]` Fixed an issue that that could occur during control plane migration causing the `core.gardener.cloud/v1beta1.BackupEntry` to be reconciled after it was successfully migrated, but before it was restored. by @plkokanov [#10761]
- `[OPERATOR]` The deployment of `BackupBucket` resource in the runtime cluster is skipped if no suitable operator extension is deployed. by @MartinWeindel [#10837]
- `[OPERATOR]` Following components in gardener logging stack are updated: fluent-operator to v3.2.0, fluent-bit to v3.1.8, gardener/logging to v0.62.0 by @nickytd [#10790]
- `[OPERATOR]` The following image has been updated:  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/vertical-pod-autoscaler/vpa-recommender: 1.2.1 -> 1.2.1-gardener-build.3 ([Release notes vpa-1.2.1-gardener-build.2](https://github.com/gardener/autoscaler/releases/tag/vpa-1.2.1-gardener-build.2) and [Release notes vpa-1.2.1-gardener-build.3](https://github.com/gardener/autoscaler/releases/tag/vpa-1.2.1-gardener-build.3)) by @ialidzhikov [#10785]
- `[DEVELOPER]` The `hack/sast.sh` script accepts two new optional flags:  
  - `--exclude-dirs`: comma-separated list of dirs to exclude  
  - `--report-dir`: where to store the gosec report by @Kostov6 [#10766]
- `[DEVELOPER]` The provider-local admission is now deployed with the local kind setup. by @LucaBernstein [#10629]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.108.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.108.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.108.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.108.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.108.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.108.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.108.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.108.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.108.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.108.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.108.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.108.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.108.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[USER]` The `url` annotation in `<shoot-name>.monitoring` secrets in the project namespace is deprecated and will be removed soon. Please use the `plutono-url` annotation instead. by @oliver-goetz [#10735]
- `[OPERATOR]` There is an incompatible change in the `Garden` (`gardens.operator.gardener.cloud`) custom resource, which required manual action:  
  - Fields `.spec.virtualCluster.dns.domains` and `.spec.runtimeCluster.ingress.domains` were changed from type string to object with a field `name` and an optional field `provider`,  e.g., in `JSON` format, replace `"domains": ["domain1.example.com", "domain2.example.com"]` with `"domains": [{"name": "domain1.example.com"}, {"name": "domain2.example.com"}]`.  
  - `.spec.runtimeCluster.ingress.domains` is required now  
  - `.spec.virtualCluster.dns.domains` is required now by @MartinWeindel [#10645]
- `[OPERATOR]` The optional deployment of cert-management component has been removed. As it was only introduced recently and probably not used, this change should have no impact typically. by @MartinWeindel [#10802]
## 📰 Noteworthy

- `[USER]` Allow changing `shoot.spec.cloudProfile` between `CloudProfile` and its descendant `NamespacedCloudProfile`s. by @LucaBernstein [#10811]
## ✨ New Features

- `[USER]` Allow for custom machine images in `NamespacedCloudProfile`s and add the `spec.providerConfig` field. by @LucaBernstein [#10629]
- `[USER]` The URLs of Shoot `plutono`, `prometheus` and `alertmanager` are now stored as annotations in `<shoot-name>.monitoring` secret in the project namespace. by @oliver-goetz [#10735]
- `[OPERATOR]` Enhance the `gardener-operator` to deploy `DNSRecords` and `BackupBucket` for the virtual garden resource.  
  `DNSRecords` are only deployed if at least one provider is specified at `.spec.dns.providers` in the `Garden` resource.  
  A `BackupBucket` is created if the `.spec.virtualCluster.etcd.backup` section is specified. An existing backup bucket on the infrastructure becomes automatically managed this way. by @MartinWeindel [#10645]
- `[DEVELOPER]` gardener-apiserver: The `ExtensionLabels` admission plugin now also sets labels to `WorkloadIdentity`s. by @dimityrmirchev [#10786]
## 🐛 Bug Fixes

- `[DEVELOPER]` `gardener-node-agent` applies inline files before applying containerd registries now. by @oliver-goetz [#10831]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/kube-state-metrics/kube-state-metrics` image has been updated to `v2.14.0`. by @gardener-ci-robot [#10818]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.55.1`. by @gardener-ci-robot [#10804]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.24.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.24.1) by @gardener-ci-robot [#10843]
- `[OPERATOR]` Fixed an issue that that could occur during control plane migration causing the `core.gardener.cloud/v1beta1.BackupEntry` to be reconciled after it was successfully migrated, but before it was restored. by @plkokanov [#10761]
- `[OPERATOR]` The deployment of `BackupBucket` resource in the runtime cluster is skipped if no suitable operator extension is deployed. by @MartinWeindel [#10837]
- `[OPERATOR]` Following components in gardener logging stack are updated: fluent-operator to v3.2.0, fluent-bit to v3.1.8, gardener/logging to v0.62.0 by @nickytd [#10790]
- `[OPERATOR]` The following image has been updated:  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/vertical-pod-autoscaler/vpa-recommender: 1.2.1 -> 1.2.1-gardener-build.3 ([Release notes vpa-1.2.1-gardener-build.2](https://github.com/gardener/autoscaler/releases/tag/vpa-1.2.1-gardener-build.2) and [Release notes vpa-1.2.1-gardener-build.3](https://github.com/gardener/autoscaler/releases/tag/vpa-1.2.1-gardener-build.3)) by @ialidzhikov [#10785]
- `[DEVELOPER]` The `hack/sast.sh` script accepts two new optional flags:  
  - `--exclude-dirs`: comma-separated list of dirs to exclude  
  - `--report-dir`: where to store the gosec report by @Kostov6 [#10766]
- `[DEVELOPER]` The provider-local admission is now deployed with the local kind setup. by @LucaBernstein [#10629]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.108.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.108.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.108.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.108.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.108.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.108.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.108.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.108.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.108.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.108.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.108.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.108.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.108.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[USER]` The `url` annotation in `<shoot-name>.monitoring` secrets in the project namespace is deprecated and will be removed soon. Please use the `plutono-url` annotation instead. by @oliver-goetz [#10735]
- `[OPERATOR]` There is an incompatible change in the `Garden` (`gardens.operator.gardener.cloud`) custom resource, which required manual action:  
  - Fields `.spec.virtualCluster.dns.domains` and `.spec.runtimeCluster.ingress.domains` were changed from type string to object with a field `name` and an optional field `provider`,  e.g., in `JSON` format, replace `"domains": ["domain1.example.com", "domain2.example.com"]` with `"domains": [{"name": "domain1.example.com"}, {"name": "domain2.example.com"}]`.  
  - `.spec.runtimeCluster.ingress.domains` is required now  
  - `.spec.virtualCluster.dns.domains` is required now by @MartinWeindel [#10645]
- `[OPERATOR]` The optional deployment of cert-management component has been removed. As it was only introduced recently and probably not used, this change should have no impact typically. by @MartinWeindel [#10802]
## 📰 Noteworthy

- `[USER]` Allow changing `shoot.spec.cloudProfile` between `CloudProfile` and its descendant `NamespacedCloudProfile`s. by @LucaBernstein [#10811]
## ✨ New Features

- `[USER]` Allow for custom machine images in `NamespacedCloudProfile`s and add the `spec.providerConfig` field. by @LucaBernstein [#10629]
- `[USER]` The URLs of Shoot `plutono`, `prometheus` and `alertmanager` are now stored as annotations in `<shoot-name>.monitoring` secret in the project namespace. by @oliver-goetz [#10735]
- `[OPERATOR]` Enhance the `gardener-operator` to deploy `DNSRecords` and `BackupBucket` for the virtual garden resource.  
  `DNSRecords` are only deployed if at least one provider is specified at `.spec.dns.providers` in the `Garden` resource.  
  A `BackupBucket` is created if the `.spec.virtualCluster.etcd.backup` section is specified. An existing backup bucket on the infrastructure becomes automatically managed this way. by @MartinWeindel [#10645]
- `[DEVELOPER]` gardener-apiserver: The `ExtensionLabels` admission plugin now also sets labels to `WorkloadIdentity`s. by @dimityrmirchev [#10786]
## 🐛 Bug Fixes

- `[DEVELOPER]` `gardener-node-agent` applies inline files before applying containerd registries now. by @oliver-goetz [#10831]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/kube-state-metrics/kube-state-metrics` image has been updated to `v2.14.0`. by @gardener-ci-robot [#10818]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.55.1`. by @gardener-ci-robot [#10804]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.24.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.24.1) by @gardener-ci-robot [#10843]
- `[OPERATOR]` Fixed an issue that that could occur during control plane migration causing the `core.gardener.cloud/v1beta1.BackupEntry` to be reconciled after it was successfully migrated, but before it was restored. by @plkokanov [#10761]
- `[OPERATOR]` The deployment of `BackupBucket` resource in the runtime cluster is skipped if no suitable operator extension is deployed. by @MartinWeindel [#10837]
- `[OPERATOR]` Following components in gardener logging stack are updated: fluent-operator to v3.2.0, fluent-bit to v3.1.8, gardener/logging to v0.62.0 by @nickytd [#10790]
- `[OPERATOR]` The following image has been updated:  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/vertical-pod-autoscaler/vpa-recommender: 1.2.1 -> 1.2.1-gardener-build.3 ([Release notes vpa-1.2.1-gardener-build.2](https://github.com/gardener/autoscaler/releases/tag/vpa-1.2.1-gardener-build.2) and [Release notes vpa-1.2.1-gardener-build.3](https://github.com/gardener/autoscaler/releases/tag/vpa-1.2.1-gardener-build.3)) by @ialidzhikov [#10785]
- `[DEVELOPER]` The `hack/sast.sh` script accepts two new optional flags:  
  - `--exclude-dirs`: comma-separated list of dirs to exclude  
  - `--report-dir`: where to store the gosec report by @Kostov6 [#10766]
- `[DEVELOPER]` The provider-local admission is now deployed with the local kind setup. by @LucaBernstein [#10629]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.108.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.108.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.108.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.108.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.108.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.108.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.108.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.108.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.108.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.108.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.108.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.108.0`


</details>
