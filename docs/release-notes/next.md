---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.22.1</code></b></summary>

# [gardener/external-dns-management]

## 📰 Noteworthy

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [#394]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [#398]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.22.1`
## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.22.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.54.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.107.0 to 1.108.0. by @dependabot[bot] [#399]
- `[OPERATOR]` Reduce default values for resource utilisation of shoot-dns-service controller in the control plane. by @MartinWeindel [#392]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [#387]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.105.0 to 1.106.0. by @dependabot[bot] [#390]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.106.0 to 1.107.0. by @dependabot[bot] [#394]
# [gardener/external-dns-management]

## 📰 Noteworthy

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [gardener/external-dns-management#394]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [gardener/external-dns-management#398]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.54.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.54.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.54.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.54.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.54.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.11.0</code></b></summary>

## What's Changed
* Bump gardener to `v1.105.3` by @Duciwuci in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/119


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.10.0...v0.11.0

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.46.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Reduce default values for resource utilisation of cert-management controller in the control plane. by @MartinWeindel [#308]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.106.0 to 1.107.0. by @dependabot[bot] [#310]
- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [#311]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.105.0 to 1.106.0. by @dependabot[bot] [#306]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.107.0 to 1.108.0. by @dependabot[bot] [#315]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.46.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.46.0`


</details>

<details>
<summary><b>Update backup-s3 to <code>0.7.0</code></b></summary>

## General Changes
* Revendor g/g v1.100 (https://github.com/metal-stack/gardener-extension-backup-s3/pull/11) @Gerrit91 


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.20</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.19...0.7.20

</details>

<details>
<summary><b>Update provider-azure to <code>1.49.0</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[USER]` Deprecate DNSRecordConfig object. Please configure the target Azure management API via the provided secret by @kon-angelo [#1018]
## ✨ New Features

- `[USER]` Enable extra-create-metadata in csi-provisioner. by @kon-angelo [#1008]
## 🏃 Others

- `[DEPENDENCY]` Update go to version 1.23.3 by @hebelsan [#1005]
- `[DEPENDENCY]` Update gardener/gardener to v1.108.0 by @hebelsan [#1014]
- `[OPERATOR]` Create bastion vm from the info provided in the cloud profile bastion section by @hebelsan [#948]
- `[OPERATOR]` Fix an issue where the subnet name was not calculated correctly in the migration to multi-subnet setup by @kon-angelo [#1004]
- `[OPERATOR]` Updating CSI driver provisioner ClusterRole rules by @hebelsan [#988]
- `[OPERATOR]` Remove outdated "Basic" SKU loadbalancer migration documentation. by @kon-angelo [#1017]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#998]
- `[OPERATOR]` Add `NamespacedCloudProfile` admission mutation and validation to support custom machine images and types. by @LucaBernstein [#1016]
- `[OPERATOR]` Added validation to prevent IPv6-only/dual-stack clusters as they are not supported, yet. by @ScheererJ [#993]
- `[DEVELOPER]` Add gosec as sast makefile target by @hebelsan [#1006]
- `[DEVELOPER]` Update gardener/gardener to v1.105.0 by @hebelsan [#989]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.49.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.49.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.49.0`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.49.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.49.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.43.0</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## ⚠️ Breaking Changes

- `[OPERATOR]` Deprecated configuring bastion via helm chart config map by @hebelsan [#838]
## 📰 Noteworthy

- `[OPERATOR]` Added support for configuring bastion vm from CloudProfile's bastion section by @hebelsan [#838]
## 🏃 Others

- `[DEPENDENCY]` Add gosec as sast makefile target by @hebelsan [#902]
- `[DEPENDENCY]` Update go to version 1.23.3 by @hebelsan [#900]
- `[OPERATOR]` Fix an issue where provider-openstack required permissions for share network operations even when not required by the `InfrastructureConfig`. by @kon-angelo [#885]
- `[OPERATOR]` Update gardener/gardener to v1.107.0 by @hebelsan [#896]
- `[OPERATOR]` Fix an issue where the deletion with the flow reconciler would fail if the network was already deleted. by @kon-angelo [#898]
- `[OPERATOR]` Added validation to prevent IPv6-only/dual-stack clusters as they are not supported, yet. by @ScheererJ [#886]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#895]
- `[OPERATOR]` Fix possible nil-pointer deref when looking for networks. during reconciliation by @AndreasBurger [#879]
- `[OPERATOR]` subnet overlapping, missing expected router and Policy doesn't allow .* to be performed errors are now non-retryable user errors. by @RadaBDimitrova [#894]
- `[OPERATOR]` Updating CSI driver provisioner ClusterRole rules by @hebelsan [#880]
- `[DEVELOPER]` Update gardener/gardener to v1.105.0 by @hebelsan [#881]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.43.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.43.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.43.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.43.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.43.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.26.0</code></b></summary>

# [gardener/gardener-extension-os-ubuntu]

## ⚠️ Breaking Changes

- `[OPERATOR]` This extension is no longer able to run with Gardener versions lower than `v1.90` when the `UseGardenerNodeAgent` feature gate is disabled. by @rfranzke [#126]
## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#143]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @LucaBernstein [#133]
- `[DEVELOPER]` Static Application Security Testing (sast) with `gosec` got enabled on this repository. by @MrBatschner [#163]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.26.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.26.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.108.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `seed.gardener.cloud/eu-access=true` label (in `CloudProfile`s and `Seeds`) or seed selector (in `Shoot`s) is no longer removed when the `eu-access-only` restriction is removed from the `.spec.accessRestrictions[]` field. Similarly, the `support.gardener.cloud/eu-access-for-cluster-{addons,nodes}` annotations in `Shoot`s are no longer removed when they are removed from the `.spec.accessRestrictions[].options` field. by @rfranzke [#10885]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.108.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.108.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.108.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.108.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.108.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.108.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.108.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.108.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.108.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.108.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.108.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.108.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.108.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `seed.gardener.cloud/eu-access=true` label (in `CloudProfile`s and `Seeds`) or seed selector (in `Shoot`s) is no longer removed when the `eu-access-only` restriction is removed from the `.spec.accessRestrictions[]` field. Similarly, the `support.gardener.cloud/eu-access-for-cluster-{addons,nodes}` annotations in `Shoot`s are no longer removed when they are removed from the `.spec.accessRestrictions[].options` field. by @rfranzke [#10885]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.108.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.108.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.108.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.108.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.108.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.108.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.108.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.108.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.108.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.108.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.108.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.108.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.108.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `seed.gardener.cloud/eu-access=true` label (in `CloudProfile`s and `Seeds`) or seed selector (in `Shoot`s) is no longer removed when the `eu-access-only` restriction is removed from the `.spec.accessRestrictions[]` field. Similarly, the `support.gardener.cloud/eu-access-for-cluster-{addons,nodes}` annotations in `Shoot`s are no longer removed when they are removed from the `.spec.accessRestrictions[].options` field. by @rfranzke [#10885]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.108.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.108.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.108.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.108.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.108.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.108.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.108.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.108.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.108.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.108.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.108.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.108.1`


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.29.0</code></b></summary>

# [gardener/oidc-webhook-authenticator]

## 🏃 Others

- `[OPERATOR]` OWA is now built using go version 1.23.3. by @dimityrmirchev [gardener/oidc-webhook-authenticator#167]
- `[DEVELOPER]` `gosec` is made available for SAST(static application security testing), it can be run with `make sast` or `make sast-report`.  by @vpnachev [gardener/oidc-webhook-authenticator#165]
# [gardener/gardener-extension-shoot-oidc-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` The type of the `imageVectorOverwrite` helm chart value is changed from string to object. by @dimityrmirchev [#251]
## 🏃 Others

- `[OPERATOR]` The following dependencies have been updated:  
  - github.com/gardener/gardener v1.105.0 -> v1.106.0  
  - k8s.io/api v0.29.8 -> v0.31.1  
  - k8s.io/apimachinery v0.29.9 -> v0.31.1  
  - k8s.io/client-go v0.29.9 -> v0.31.1  
  - k8s.io/code-generator v0.29.9 -> v0.31.1  
  - k8s.io/component-base v0.29.9 -> v0.31.1  
  - sigs.k8s.io/controller-runtime v0.17.6 -> v0.19.0 by @vpnachev [#248]
- `[DEVELOPER]` `gosec` is made available for SAST(static application security testing), it can be run with `make sast` or `make sast-report`, but is also incorporated in the `verify` and `verify-extended` makefile targets.  by @vpnachev [#248]
## 📖 Documentation

- `[USER]` Documentation now clarifies when Structured Authentication should be preferred over the Gardener OIDC extension. by @dimityrmirchev [#259]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.29.0`
## Docker Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.29.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.25.0</code></b></summary>

# [gardener/gardener-extension-os-gardenlinux]

## ⚠️ Breaking Changes

- `[OPERATOR]` This extension is no longer able to run with Gardener versions lower than `v1.90` when the `UseGardenerNodeAgent` feature gate is disabled. by @rfranzke [#161]
## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#188]
## 🏃 Others

- `[DEVELOPER]` Static Application Security Testing (sast) with `gosec` got enabled on this repository. by @MrBatschner [#212]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#170]
- `[OPERATOR]` The cgroup drivers for containerd and kubelet are no longer configured through scripts that are run through `ExecStartPre` but instead through a mutating webhook that modifies the cgroup driver in the OSC. The cgroup driver always gets set to `systemd`. by @MrBatschner [#169]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.25.0`
## Docker Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.25.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.27.0</code></b></summary>

no release notes available

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.27.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.27.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.16.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## 🏃 Others

- `[OPERATOR]` Introduce `providerConfig.configFlags` with `net-raw` as first supported flag to start gVisor with NET_RAW capability. by @Roncossek [#154]
- `[OPERATOR]` Gardener libraries were updated to 1.103. by @MrBatschner [#150]
- `[DEVELOPER]` Static Application Security Testing (sast) with `gosec` got enabled on this repository. by @MrBatschner [#155]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.16.0`
## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.16.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.16.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.12.0</code></b></summary>

## What's Changed
* Do nothing when cluster is hibernated by @maboehm in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/122
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.22.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/120
* 🤖 Update module github.com/onsi/gomega to v1.36.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/121
* 🤖 Update k8s.io/utils digest to 6fe5fd8 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/111
* 🤖 Update dependency go to v1.23.3 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/118
* 🤖 Update module golang.org/x/tools to v0.27.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/116
* 🤖 Update fluxcd (minor) by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/107


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.11.0...v0.12.0

</details>

<details>
<summary><b>Update networking-calico to <code>1.44.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## 🏃 Others

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @ScheererJ [#503]
- `[OPERATOR]` Correct iptable backend and iptable rule are set for IPv6 shoot clusters when running with node-local-dns. by @DockToFuture [#506]
- `[OPERATOR]` Generate dual-stack configuration. by @axel7born [#512]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.44.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.44.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.44.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.44.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.44.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.31.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[USER]` Remove duplicated metrics from README by @Sinscerly [#110]
- `[OPERATOR]` Add cost_object_type label to garden_shoot_info metric by @chrkl [#112]
- `[OPERATOR]` Add `is_hibernated` to the `garden_shoot_info` metric by @Sinscerly [#107]
- `[OPERATOR]` Add `technical_id` to `garden_shoot_.+` metrics by @robinschneider [#111]

</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.31.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[USER]` Remove duplicated metrics from README by @Sinscerly [#110]
- `[OPERATOR]` Add cost_object_type label to garden_shoot_info metric by @chrkl [#112]
- `[OPERATOR]` Add `is_hibernated` to the `garden_shoot_info` metric by @Sinscerly [#107]
- `[OPERATOR]` Add `technical_id` to `garden_shoot_.+` metrics by @robinschneider [#111]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.109.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The HVPA autoscaling option (which is unconditionally disabled since v1.105.0) is removed from the `etcd` component. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @plkokanov [#10800]
- `[OPERATOR]` The `Baseline` and `HVPA` autoscaling modes (which are unconditionally disabled since v1.105.0) are removed for `{gardener,kube}-apiserver`. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @plkokanov [#10796]
- `[OPERATOR]` The deprecated and unconditionally disabled `HVPA` and `HVPAForShootedSeed` feature gates are removed. The GA-ed and unconditionally enabled `VPAForETCD` and `VPAAndHPAForAPIServer` features gates are removed. If you have references to the feature gates, clean them up before upgrading to this version of Gardener. by @ialidzhikov [#10853]
- `[DEVELOPER]` Rename the controlplane exposure webhook (`ExposureWebhookName`) to seed provider webhook (`SeedProviderWebhookName`). by @LucaBernstein [#10788]
## 📰 Noteworthy

- `[OPERATOR]` The `gardener-scheduler` was improved to consider reconciliation backoffs. In the past, unassigned shoots were affected by frequent scheduler reconciliations and status updates which potentially strained the scheduler and etcd. by @timuthy [#10821]
- `[DEVELOPER]` extension library: Provider extensions should rename control plane exposure webhook related packages to seed provider to reflect the naming change on their side (for example rename `pkg/webhook/controlplaneexposure` to `pkg/webhook/seedprovider`). by @LucaBernstein [#10788]
## ✨ New Features

- `[OPERATOR]` `NodeAgentAuthorizer` feature gate was introduced. It allows a webhook based authorization of `gardener-node-agents` with reduced permissions.  
  ❗ This feature gate requires changes in `machine-controller-manager-provider-*`. Please check that you run a supported version before activating it. ❗ by @oliver-goetz [#10781]
- `[USER]` Allow dual-stack shoots creation. by @axel7born [#10803]
- `[USER]` shoot spec.kubernetes.clusterAutoscaler: Add support for startupTaints and statusTaints by @dhague [#10858]
## 🐛 Bug Fixes

- `[USER]` Fixed a bug where SSH key rotations for `Shoot`s did not properly update the authorized keys on the worker nodes (hence, the new key was unusable until a node restart or rollout). by @tobschli [#10671]
- `[USER]` On `Shoot` deletion, Gardener now properly skips certain validation checks that are only relevant for creations or updates of `Shoot` resources. by @rfranzke [#10902]
- `[OPERATOR]` Fixed an error in `BackupBucket` reconciliation by replacing `StrategicMergePatch` with `MergePatch` to properly handle `runtime.RawExtension` fields. by @seshachalam-yv [#10904]
## 🏃 Others

- `[OPERATOR]` update alpine to get latest security fixes by @DockToFuture [#10922]
- `[OPERATOR]` Add support for `node-local-dns` in dual-stack cluster. by @axel7born [#10891]
- `[OPERATOR]` Add dual stack support for VPN. by @DockToFuture [#10767]
- `[OPERATOR]` Fix kubelet CSRs to allow IPv6 addresses to be used by @kron4eg [#10876]
- `[OPERATOR]` Add dashboard for VPA admission-controller by @voelzmo [#10741]
- `[OPERATOR]` The HVPA component is removed. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @ialidzhikov [#10851]
- `[OPERATOR]` Added validation for `issuerURL` in the OIDC configuration to reject URLs containing fragments. by @acumino [#10888]
- `[OPERATOR]` The `gardener/dependency-watchdog` image has been updated to `v1.3.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.3.0) by @rishabh-11 [#10930]
- `[OPERATOR]` Adapt `configure-admission.sh` for new extension releases with changed value names for Helm charts. by @MartinWeindel [#10877]
- `[DEPENDENCY]` The `registry.k8s.io/cpa/cluster-proportional-autoscaler` image has been updated to `v1.9.0`. by @gardener-ci-robot [#10898]
- `[DEPENDENCY]` The `gardener/autoscaler` image has been updated to `v1.30.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.30.1) by @gardener-ci-robot [#10914]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.30.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.30.0) by @gardener-ci-robot [#10872]
- `[DEPENDENCY]` The `registry.k8s.io/coredns/coredns` image has been updated to `v1.11.4`. by @gardener-ci-robot [#10856]
- `[DEPENDENCY]` The `gardener/gardener-discovery-server` image has been updated to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.3.0) by @gardener-ci-robot [#10849]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.25.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.25.0) by @gardener-ci-robot [#10932]
- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.55.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.0) by @rishabh-11 [#10908]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.109.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.109.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.109.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.109.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.109.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.109.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.109.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.109.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.109.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.109.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.109.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.109.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.109.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The HVPA autoscaling option (which is unconditionally disabled since v1.105.0) is removed from the `etcd` component. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @plkokanov [#10800]
- `[OPERATOR]` The `Baseline` and `HVPA` autoscaling modes (which are unconditionally disabled since v1.105.0) are removed for `{gardener,kube}-apiserver`. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @plkokanov [#10796]
- `[OPERATOR]` The deprecated and unconditionally disabled `HVPA` and `HVPAForShootedSeed` feature gates are removed. The GA-ed and unconditionally enabled `VPAForETCD` and `VPAAndHPAForAPIServer` features gates are removed. If you have references to the feature gates, clean them up before upgrading to this version of Gardener. by @ialidzhikov [#10853]
- `[DEVELOPER]` Rename the controlplane exposure webhook (`ExposureWebhookName`) to seed provider webhook (`SeedProviderWebhookName`). by @LucaBernstein [#10788]
## 📰 Noteworthy

- `[OPERATOR]` The `gardener-scheduler` was improved to consider reconciliation backoffs. In the past, unassigned shoots were affected by frequent scheduler reconciliations and status updates which potentially strained the scheduler and etcd. by @timuthy [#10821]
- `[DEVELOPER]` extension library: Provider extensions should rename control plane exposure webhook related packages to seed provider to reflect the naming change on their side (for example rename `pkg/webhook/controlplaneexposure` to `pkg/webhook/seedprovider`). by @LucaBernstein [#10788]
## ✨ New Features

- `[OPERATOR]` `NodeAgentAuthorizer` feature gate was introduced. It allows a webhook based authorization of `gardener-node-agents` with reduced permissions.  
  ❗ This feature gate requires changes in `machine-controller-manager-provider-*`. Please check that you run a supported version before activating it. ❗ by @oliver-goetz [#10781]
- `[USER]` Allow dual-stack shoots creation. by @axel7born [#10803]
- `[USER]` shoot spec.kubernetes.clusterAutoscaler: Add support for startupTaints and statusTaints by @dhague [#10858]
## 🐛 Bug Fixes

- `[USER]` Fixed a bug where SSH key rotations for `Shoot`s did not properly update the authorized keys on the worker nodes (hence, the new key was unusable until a node restart or rollout). by @tobschli [#10671]
- `[USER]` On `Shoot` deletion, Gardener now properly skips certain validation checks that are only relevant for creations or updates of `Shoot` resources. by @rfranzke [#10902]
- `[OPERATOR]` Fixed an error in `BackupBucket` reconciliation by replacing `StrategicMergePatch` with `MergePatch` to properly handle `runtime.RawExtension` fields. by @seshachalam-yv [#10904]
## 🏃 Others

- `[OPERATOR]` update alpine to get latest security fixes by @DockToFuture [#10922]
- `[OPERATOR]` Add support for `node-local-dns` in dual-stack cluster. by @axel7born [#10891]
- `[OPERATOR]` Add dual stack support for VPN. by @DockToFuture [#10767]
- `[OPERATOR]` Fix kubelet CSRs to allow IPv6 addresses to be used by @kron4eg [#10876]
- `[OPERATOR]` Add dashboard for VPA admission-controller by @voelzmo [#10741]
- `[OPERATOR]` The HVPA component is removed. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @ialidzhikov [#10851]
- `[OPERATOR]` Added validation for `issuerURL` in the OIDC configuration to reject URLs containing fragments. by @acumino [#10888]
- `[OPERATOR]` The `gardener/dependency-watchdog` image has been updated to `v1.3.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.3.0) by @rishabh-11 [#10930]
- `[OPERATOR]` Adapt `configure-admission.sh` for new extension releases with changed value names for Helm charts. by @MartinWeindel [#10877]
- `[DEPENDENCY]` The `registry.k8s.io/cpa/cluster-proportional-autoscaler` image has been updated to `v1.9.0`. by @gardener-ci-robot [#10898]
- `[DEPENDENCY]` The `gardener/autoscaler` image has been updated to `v1.30.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.30.1) by @gardener-ci-robot [#10914]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.30.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.30.0) by @gardener-ci-robot [#10872]
- `[DEPENDENCY]` The `registry.k8s.io/coredns/coredns` image has been updated to `v1.11.4`. by @gardener-ci-robot [#10856]
- `[DEPENDENCY]` The `gardener/gardener-discovery-server` image has been updated to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.3.0) by @gardener-ci-robot [#10849]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.25.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.25.0) by @gardener-ci-robot [#10932]
- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.55.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.0) by @rishabh-11 [#10908]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.109.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.109.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.109.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.109.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.109.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.109.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.109.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.109.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.109.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.109.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.109.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.109.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.109.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The HVPA autoscaling option (which is unconditionally disabled since v1.105.0) is removed from the `etcd` component. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @plkokanov [#10800]
- `[OPERATOR]` The `Baseline` and `HVPA` autoscaling modes (which are unconditionally disabled since v1.105.0) are removed for `{gardener,kube}-apiserver`. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @plkokanov [#10796]
- `[OPERATOR]` The deprecated and unconditionally disabled `HVPA` and `HVPAForShootedSeed` feature gates are removed. The GA-ed and unconditionally enabled `VPAForETCD` and `VPAAndHPAForAPIServer` features gates are removed. If you have references to the feature gates, clean them up before upgrading to this version of Gardener. by @ialidzhikov [#10853]
- `[DEVELOPER]` Rename the controlplane exposure webhook (`ExposureWebhookName`) to seed provider webhook (`SeedProviderWebhookName`). by @LucaBernstein [#10788]
## 📰 Noteworthy

- `[OPERATOR]` The `gardener-scheduler` was improved to consider reconciliation backoffs. In the past, unassigned shoots were affected by frequent scheduler reconciliations and status updates which potentially strained the scheduler and etcd. by @timuthy [#10821]
- `[DEVELOPER]` extension library: Provider extensions should rename control plane exposure webhook related packages to seed provider to reflect the naming change on their side (for example rename `pkg/webhook/controlplaneexposure` to `pkg/webhook/seedprovider`). by @LucaBernstein [#10788]
## ✨ New Features

- `[OPERATOR]` `NodeAgentAuthorizer` feature gate was introduced. It allows a webhook based authorization of `gardener-node-agents` with reduced permissions.  
  ❗ This feature gate requires changes in `machine-controller-manager-provider-*`. Please check that you run a supported version before activating it. ❗ by @oliver-goetz [#10781]
- `[USER]` Allow dual-stack shoots creation. by @axel7born [#10803]
- `[USER]` shoot spec.kubernetes.clusterAutoscaler: Add support for startupTaints and statusTaints by @dhague [#10858]
## 🐛 Bug Fixes

- `[USER]` Fixed a bug where SSH key rotations for `Shoot`s did not properly update the authorized keys on the worker nodes (hence, the new key was unusable until a node restart or rollout). by @tobschli [#10671]
- `[USER]` On `Shoot` deletion, Gardener now properly skips certain validation checks that are only relevant for creations or updates of `Shoot` resources. by @rfranzke [#10902]
- `[OPERATOR]` Fixed an error in `BackupBucket` reconciliation by replacing `StrategicMergePatch` with `MergePatch` to properly handle `runtime.RawExtension` fields. by @seshachalam-yv [#10904]
## 🏃 Others

- `[OPERATOR]` update alpine to get latest security fixes by @DockToFuture [#10922]
- `[OPERATOR]` Add support for `node-local-dns` in dual-stack cluster. by @axel7born [#10891]
- `[OPERATOR]` Add dual stack support for VPN. by @DockToFuture [#10767]
- `[OPERATOR]` Fix kubelet CSRs to allow IPv6 addresses to be used by @kron4eg [#10876]
- `[OPERATOR]` Add dashboard for VPA admission-controller by @voelzmo [#10741]
- `[OPERATOR]` The HVPA component is removed. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @ialidzhikov [#10851]
- `[OPERATOR]` Added validation for `issuerURL` in the OIDC configuration to reject URLs containing fragments. by @acumino [#10888]
- `[OPERATOR]` The `gardener/dependency-watchdog` image has been updated to `v1.3.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.3.0) by @rishabh-11 [#10930]
- `[OPERATOR]` Adapt `configure-admission.sh` for new extension releases with changed value names for Helm charts. by @MartinWeindel [#10877]
- `[DEPENDENCY]` The `registry.k8s.io/cpa/cluster-proportional-autoscaler` image has been updated to `v1.9.0`. by @gardener-ci-robot [#10898]
- `[DEPENDENCY]` The `gardener/autoscaler` image has been updated to `v1.30.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.30.1) by @gardener-ci-robot [#10914]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.30.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.30.0) by @gardener-ci-robot [#10872]
- `[DEPENDENCY]` The `registry.k8s.io/coredns/coredns` image has been updated to `v1.11.4`. by @gardener-ci-robot [#10856]
- `[DEPENDENCY]` The `gardener/gardener-discovery-server` image has been updated to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.3.0) by @gardener-ci-robot [#10849]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.25.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.25.0) by @gardener-ci-robot [#10932]
- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.55.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.0) by @rishabh-11 [#10908]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.109.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.109.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.109.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.109.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.109.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.109.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.109.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.109.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.109.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.109.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.109.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.109.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.32.0</code></b></summary>

no release notes available

</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.32.0</code></b></summary>

no release notes available

</details>

<details>
<summary><b>Update provider-aws to <code>1.59.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-admission-aws admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#1100]
## 📰 Noteworthy

- `[DEVELOPER]` Updated AWS SDK from v1 to v2 by @AndreasBurger [#1060]
## ✨ New Features

- `[OPERATOR]` Adjustments for additional deployment of extension and admission controller on Garden runtime cluster by gardener-operator. by @MartinWeindel [#1100]
- `[OPERATOR]` Support specification of extended resources in provider config node template without re-specifying core resources. by @elankath [#1010]
## 🏃 Others

- `[OPERATOR]` Fixed terraform deploy and integration tests for IPv6. by @axel7born [#1112]
- `[OPERATOR]` update images of pause and alpine container by @hebelsan [#1101]
- `[OPERATOR]` Add IPv4 ranges from Spec.Networking to Status.Networking. by @axel7born [#1094]
- `[OPERATOR]` Filter pod ranges for IPv4 CIDRs to configure Custom-Route-Controller. by @axel7born [#1138]
- `[OPERATOR]` Create bastion vm from the info provided in the cloud profile bastion section by @hebelsan [#1040]
- `[OPERATOR]` Added validation to allow only IPv6-only shoot clusters, but not dual-stack as it is not supported, yet. by @ScheererJ [#1095]
- `[OPERATOR]` Fixed an issue preventing the deployment of internal load balancers in IPv6-only shoots. by @axel7born [#1108]
- `[OPERATOR]` Add `NamespacedCloudProfile` admission mutation and validation to support custom machine images and types. by @LucaBernstein [#1136]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#1117]
- `[OPERATOR]` Fix an issue where the "0.0.0.0/0" route creation would fail if the nat-gateway was previously deleted. by @kon-angelo [#1111]
- `[OPERATOR]` Update gardener to v1.106.1 by @hebelsan [#1110]
- `[OPERATOR]` Dual-stack networking, i.e. networks with IPv4 and IPv6, are allowed now. by @ScheererJ [#1139]
- `[OPERATOR]` AWS load balancers controller is always enabled for IPv6-only and dual-stack shoot clusters. by @ScheererJ [#1099]
- `[OPERATOR]` Harmonize logging output from controller-runtime logger and kubernetes logger. by @DockToFuture [#1105]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @DockToFuture [#1105]
- `[DEPENDENCY]` Update go to version 1.23.3 by @hebelsan [#1121]
- `[DEVELOPER]` Add gosec as sast makefile target by @hebelsan [#1123]
## 📖 Documentation

- `[USER]` Add overview documentation for IPv6 by @ScheererJ [#1143]
# [gardener/aws-custom-route-controller]

## ✨ New Features

- `[USER]` `gosec` was introduced for Static Application Security Testing (SAST). by @ScheererJ [gardener/aws-custom-route-controller#34]
- `[USER]` Update sdk version to v2 by @kon-angelo [gardener/aws-custom-route-controller#48]
- `[USER]` The `aws-custom-route-controller` only adds node routes for IPv4 pod CIDR ranges and does not interfere with IPv6 routes. by @DockToFuture [gardener/aws-custom-route-controller#43]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [gardener/aws-custom-route-controller#44]
- `[OPERATOR]` Bumps golang from 1.23.1 to 1.23.2. by @dependabot[bot] [gardener/aws-custom-route-controller#33]

</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.33.0</code></b></summary>

no release notes available

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.33.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.33.0</code></b></summary>

no release notes available

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.33.0`


</details>

<details>
<summary><b>Update cert-management to <code>0.17.0</code></b></summary>

# [gardener/cert-management]

## ✨ New Features

- `[USER]` Introduce the new Issuer type `SelfSigned` for creating self-signed certificates. by @RaphaelVogel [#228]
- `[USER]` The certificate resource can now define a duration (the lifetime of the certificate). The issuer (especially Let's Encrypt) may ignore this field. by @marc1404 [#354]
## 🐛 Bug Fixes

- `[OPERATOR]` Cleanup status for orphan pending certificate resources by @MartinWeindel [#367]
## 🏃 Others

- `[DEVELOPER]` Use Pebble as an ACME server in the integration tests. by @marc1404 [#339]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.17.0`
## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.17.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.26.0</code></b></summary>

# [gardener/gardener-extension-os-gardenlinux]

## 🏃 Others

- `[OPERATOR]` Adds an override.conf containerd dropin file to set LimitMEMLOCK and LimitNOFILE by @Roncossek [#214]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.26.0`
## Docker Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.26.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.38.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## 🏃 Others

- `[OPERATOR]` IPv6 support is added to cilium extension for gardener shoot clusters. by @DockToFuture [#421]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @ScheererJ [#420]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.38.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.38.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.38.0`
## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.38.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.38.0`


</details>

<details>
<summary><b>Update cert-management to <code>0.17.1</code></b></summary>

# [gardener/cert-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix panic if target issuer referenced but not allowed by @MartinWeindel [#371]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.17.1`
## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.17.1`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.47.0</code></b></summary>

# [gardener/cert-management]

## ✨ New Features

- `[USER]` Introduce the new Issuer type `SelfSigned` for creating self-signed certificates. by @RaphaelVogel [gardener/cert-management#228]
- `[USER]` The certificate resource can now define a duration (the lifetime of the certificate). The issuer (especially Let's Encrypt) may ignore this field. by @marc1404 [gardener/cert-management#354]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix panic if target issuer referenced but not allowed by @MartinWeindel [gardener/cert-management#371]
- `[OPERATOR]` Cleanup status for orphan pending certificate resources by @MartinWeindel [gardener/cert-management#367]
## 🏃 Others

- `[DEVELOPER]` Use Pebble as an ACME server in the integration tests. by @marc1404 [gardener/cert-management#339]
# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.108.0 to 1.109.0. by @dependabot[bot] [#320]
- `[OPERATOR]` Vertical scaling on CPU dropped in VPA resource by @MartinWeindel [#318]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.47.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.47.0`


</details>
