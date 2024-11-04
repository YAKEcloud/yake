---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-hcloud to <code>0.6.32</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.32

</details>

<details>
<summary><b>Update provider-aws to <code>1.58.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## ✨ New Features

- `[USER]` The admission webhook now validates `CredentialsBinding`s. by @dimityrmirchev [#1047]
- `[USER]` Enable support for the field `shoot.Spec.CloudProfile` alongside `cloudProfileName` and enable the future use of `NamespacedCloudProfile`. by @LucaBernstein [#1000]
- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.31. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md) before upgrading to 1.31.  by @ialidzhikov [#1055]
## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing Shoot force deletion to fail because the control plane webhook failing to get the Infrastructure object from the Seed cluster is now fixed. The control plane webhook now reads the infrastructureConfig from the Shoot spec in the Cluster resource. Previously, it was fetching the Infrastructure object from the Seed cluster and was reading the infrastructureConfig from there. by @Kostov6 [#1068]
- `[USER]` Fix cleanup of routing table associations by @hebelsan [#1083]
## 🏃 Others

- `[OPERATOR]` Create IPv6 ServiceCIDR and write IPv6 ranges to Infra.Status.Networking by @axel7born [#1081]
- `[OPERATOR]` The shoot-webhook that mutates the `addons-nginx-ingress-controller` ConfigMap does now specify object selector. The webhook will now intercept only requests for the `addons-nginx-ingress-controller` ConfigMap. by @ialidzhikov [#988]
- `[OPERATOR]` The aws-ipam-controller is enabled for IPv6 and dual stack shoot clusters. It replaces the IPAM of the cloud-controller-manager and kube-controller-manager and supports additionally prefix delegation in case of IPv6 or dual stack.  by @DockToFuture [#984]
- `[OPERATOR]` Add ipv6 support to deploy IPv6 shoots. by @axel7born [#1024]
- `[OPERATOR]` Enable `nat64` and `dns64` for IPv6 shoot clusters. by @DockToFuture [#1082]
- `[OPERATOR]` Fix error classification when deleting DNS record sets by @hebelsan [#1033]
- `[OPERATOR]` The provider-aws extension no longer configures min/maxAllowed in any managed VPA resource. by @hebelsan [#1070]
- `[OPERATOR]` The following images are updated:  
  registry.k8s.io/provider-aws/aws-ebs-csi-driver: v1.29.0 -> v1.35.0 by @scs-gardener-team-gitlab [#1080]
- `[OPERATOR]` `aws-custom-route-controller` is disabled for IPv6. by @DockToFuture [#1088]
- `[OPERATOR]` Update cloud-provider images including CSI driver images by @hebelsan [#1072]
- `[OPERATOR]` Add flow migration integration test by @kon-angelo [#1046]
- `[DEVELOPER]` Update gardener/gardener to 1.103.0 and golang to 1.23.0 by @hebelsan [#1049]
# [gardener/machine-controller-manager-provider-aws]

## 🏃 Others

- `[OPERATOR]` `InitializeMachine` returns `Uninitialized` error code if VM is not found. by @thiyyakat [gardener/machine-controller-manager-provider-aws#173]
- `[OPERATOR]` Set PrimaryIpv6 flag for instances with IPv6 addresses. by @axel7born [gardener/machine-controller-manager-provider-aws#174]
- `[OPERATOR]` Use `ProviderID` as a fallback for fetching the VM. by @thiyyakat [gardener/machine-controller-manager-provider-aws#173]
- `[OPERATOR]` Golang version used upgraded to `1.22.5` by @rishabh-11 [gardener/machine-controller-manager-provider-aws#166]
- `[OPERATOR]` Golangci-lint will now be used as the linter instead of the older golint. by @aaronfern [gardener/machine-controller-manager-provider-aws#168]
# [gardener/machine-controller-manager]

## ✨ New Features

- `[DEVELOPER]` MCM adds the name of the machine to `node.gardener.cloud/machine-name` label of the corresponding node. by @oliver-goetz [gardener/machine-controller-manager#919]
- `[DEVELOPER]` MCM replaces the magic string `<<MACHINE_NAME>>` in user data with the name of the machine when it is bootstrapped. by @oliver-goetz [gardener/machine-controller-manager#919]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug where failure of machine initialization caused label updates to not happen.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[DEVELOPER]` Fixed bug that removed the shoot-- prefix from control cluster namespace for integration tests using the gardener local setup case by @thiyyakat [gardener/machine-controller-manager#935]
## 🏃 Others

- `[OPERATOR]` `getVMStatus` always redirects to `InitiateDrain`. It also populates the node label on the machine object by checking `node.gardener.cloud/machine-name` label on the nodes.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[OPERATOR]` Drain timeout is now correctly honored for Pod eviction during Machine Drain by @sssash18 [gardener/machine-controller-manager#920]
- `[OPERATOR]` golangci-lint will now be used as the linter instead of the older golint by @aaronfern [gardener/machine-controller-manager#929]
- `[OPERATOR]` Golang version used is now upgraded to `1.22.5` by @aaronfern [gardener/machine-controller-manager#929]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.3` -> `v0.31.0` by @ary1992 [gardener/machine-controller-manager#938]
## 📖 Documentation

- `[OPERATOR]` Broken API doc links are now fixed by @rishabh-11 [gardener/machine-controller-manager#927]

</details>

<details>
<summary><b>Update provider-gcp to <code>1.39.1</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🏃 Others

- `[OPERATOR]` Fix an issue where the firewall rules where created with the wrong priority when using the flow reconciler. by @kon-angelo [#873]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.39.1`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.39.1`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.39.1`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.39.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.39.1`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.19</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.18...0.7.19

</details>

<details>
<summary><b>Update backup-s3 to <code>0.6.0</code></b></summary>

## General Changes

* Bump g/g to 1.95.6 (#9) @robertvolkmann
* Add Service in order to generate correct NetworkPolicies (#8) @maboehm


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.28.0</code></b></summary>

# [gardener/gardener-extension-shoot-oidc-service]

## 🏃 Others

- `[OPERATOR]` The extension and OWA do not set cpu and memory limits. VPA is utilised to set proper recommendations. by @dimityrmirchev [#243]
# [gardener/oidc-webhook-authenticator]

## 🏃 Others

- `[OPERATOR]` OWA is now built with go version 1.23.1. by @dimityrmirchev [gardener/oidc-webhook-authenticator#160]
- `[OPERATOR]` OWA is now built using go version 1.23.2. by @dimityrmirchev [gardener/oidc-webhook-authenticator#162]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.28.0`
## Docker Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.28.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.58.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix flow: Ignore subnet not found in infra state while deleting routing table associations by @hebelsan [#1098]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.58.1`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.58.1`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.58.1`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.58.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.58.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.78.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Cost Object: You must migrate existing configurations to the new format. Previously, the configuration used `Values.global.dashboard.frontendConfig.costObject`. It should now be updated to `Values.global.dashboard.frontendConfig.costObjects`, which is a list of objects. Each object in this list must include a `type` property, alongside existing properties such as `title`, `description`, and `regex`. by @petersutter [#2102]
- `[USER]` Removed the ability for users to retrieve their token from the My Account page. by @petersutter [#2131]
## ✨ New Features

- `[USER]` Header warnings returned by the Kubernetes API server are now displayed as notifications in the Gardener dashboard. This includes important messages like deprecation warnings. Additionally, admission webhooks may provide custom warnings in the headers by @grolu [#2033]
- `[USER]` Upgraded the code editor from CodeMirror 5 to CodeMirror 6 to enhance performance, modernize the interface, and improve extensibility by @grolu [#2058]
- `[USER]` Support Azure Cloud Configuration for DNS Secrets by @grolu [#2034]
- `[OPERATOR]` Enhanced cost object configuration to support multiple cost object types. The selected type is now stored under `Project.annotations["billing.gardener.cloud/costObjectType"]`. by @petersutter [#2102]
## 🐛 Bug Fixes

- `[USER]` Fixed issues with hibernation schedule dialog: reset button and time saving by @petersutter [#2076]
- `[USER]` Consider all seeds for Shoot migration and add warning for provider mismatch by @petersutter [#2079]
- `[USER]` To enhance the overview and readability of the cluster list, particularly in environments constrained by space or containing an abundance of information, we have introduced a feature that allows items to be collapsed when they are displayed in the cluster list. by @grolu [#1991]
- `[USER]` Fixed display issues with minimum volume size by @grolu [#2030]
## 🏃 Others

- `[USER]` The option to rotate the SSH keypair is hidden when SSH access is disabled. by @petersutter [#2077]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.78.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.78.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Cost Object: You must migrate existing configurations to the new format. Previously, the configuration used `Values.global.dashboard.frontendConfig.costObject`. It should now be updated to `Values.global.dashboard.frontendConfig.costObjects`, which is a list of objects. Each object in this list must include a `type` property, alongside existing properties such as `title`, `description`, and `regex`. by @petersutter [#2102]
- `[USER]` Removed the ability for users to retrieve their token from the My Account page. by @petersutter [#2131]
## ✨ New Features

- `[USER]` Header warnings returned by the Kubernetes API server are now displayed as notifications in the Gardener dashboard. This includes important messages like deprecation warnings. Additionally, admission webhooks may provide custom warnings in the headers by @grolu [#2033]
- `[USER]` Upgraded the code editor from CodeMirror 5 to CodeMirror 6 to enhance performance, modernize the interface, and improve extensibility by @grolu [#2058]
- `[USER]` Support Azure Cloud Configuration for DNS Secrets by @grolu [#2034]
- `[OPERATOR]` Enhanced cost object configuration to support multiple cost object types. The selected type is now stored under `Project.annotations["billing.gardener.cloud/costObjectType"]`. by @petersutter [#2102]
## 🐛 Bug Fixes

- `[USER]` Fixed issues with hibernation schedule dialog: reset button and time saving by @petersutter [#2076]
- `[USER]` Consider all seeds for Shoot migration and add warning for provider mismatch by @petersutter [#2079]
- `[USER]` To enhance the overview and readability of the cluster list, particularly in environments constrained by space or containing an abundance of information, we have introduced a feature that allows items to be collapsed when they are displayed in the cluster list. by @grolu [#1991]
- `[USER]` Fixed display issues with minimum volume size by @grolu [#2030]
## 🏃 Others

- `[USER]` The option to rotate the SSH keypair is hidden when SSH access is disabled. by @petersutter [#2077]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.78.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.106.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `gardener-resource-manager` does not mark `Deployment`s as progressing when there are still completed `Pod`s in the system. by @timuthy [#10727]
## 🏃 Others

- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10707]
- `[OPERATOR]` Fixed an issue that would cause the entry for the `machine-state` in the `ShootState` to be overwritten with nil data during control plane migration, if the `migrate` phase errored and was retried after the `MachineDeployment`, `MachineSet` and `Machine` objects were deleted, which would result in the Shoot's nodes to be recreated during Control Plane Migration. by @plkokanov [#10695]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.106.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `gardener-resource-manager` does not mark `Deployment`s as progressing when there are still completed `Pod`s in the system. by @timuthy [#10727]
## 🏃 Others

- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10707]
- `[OPERATOR]` Fixed an issue that would cause the entry for the `machine-state` in the `ShootState` to be overwritten with nil data during control plane migration, if the `migrate` phase errored and was retried after the `MachineDeployment`, `MachineSet` and `Machine` objects were deleted, which would result in the Shoot's nodes to be recreated during Control Plane Migration. by @plkokanov [#10695]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.106.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `gardener-resource-manager` does not mark `Deployment`s as progressing when there are still completed `Pod`s in the system. by @timuthy [#10727]
## 🏃 Others

- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10707]
- `[OPERATOR]` Fixed an issue that would cause the entry for the `machine-state` in the `ShootState` to be overwritten with nil data during control plane migration, if the `migrate` phase errored and was retried after the `MachineDeployment`, `MachineSet` and `Machine` objects were deleted, which would result in the Shoot's nodes to be recreated during Control Plane Migration. by @plkokanov [#10695]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.1`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.9.0</code></b></summary>

## What's Changed
* Create and update `additionalSecretResources` by @MichaelEischer in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/100
* Bump Gardener to `v1.101` by @Duciwuci in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/99

## New Contributors
* @MichaelEischer made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/100

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.8.0...v0.9.0

</details>

<details>
<summary><b>Update provider-aws to <code>1.58.2</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix missing nil check after getting route table by @hebelsan [#1107]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.58.2`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.58.2`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.58.2`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.58.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.58.2`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.6.0</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## 📰 Noteworthy

- `[DEVELOPER]` Monitoring config is now getting deleted on extension removal by @Kostov6 [#185]
## ✨ New Features

- `[OPERATOR]` A new api object `rsyslog-relp.extensions.gardener.cloud/v1alpha1.Auditd` is introduced which is used to specify a configuration for the linux audit daemon on the shoot nodes. by @plkokanov [#149]
- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#147]
- `[OPERATOR]` Two new fields have been added to the provider config for the `shoot-rsyslog-relp` extension:  
  - `.auditConfig.enabled` allows users to opt in whether to enable the reconfiguration of audit rules on the shoot's nodes and to also configure `auditd` to send logs to `rsyslog`. By default this field is `true`.  
  - `.auditConfig.configMapReferenceName` is a reference to a `ConfigMap` shoot resource which contains audit configuration. This field is only taken into account if `.auditRulesConfig.enabled` is `true`. The `ConfigMap` must contain a data key `auditd` which must contain a value of type `rsyslog-relp.extensions.gardener.cloud/v1alpha1.Auditd`. by @plkokanov [#149]
## 🏃 Others

- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-shoot-rsyslog-relp-admission` Helm chart. by @timuthy [#135]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.6.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.6.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.6.0`
## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.6.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.6.0`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.26.0</code></b></summary>

# [gardener/network-problem-detector]

## 🐛 Bug Fixes

- `[OPERATOR]` Delete corrupt current record file on restart. by @MartinWeindel [gardener/network-problem-detector#78]
# [gardener/gardener-extension-shoot-networking-problemdetector]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.105.0 to 1.106.0. by @dependabot[bot] [#188]

## Helm Charts
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.26.0`
## Docker Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.26.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.107.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The unused method `WithShootCredentials` have been removed from `github.com/gardener/gardener/pkg/gardenlet/operation/shoot.Builder`. by @vpnachev [#10672]
- `[DEVELOPER]` In the local development setup, the images are pushed to `garden.local.gardener.cloud:5001` instead of `localhost:5001` now. Please add `127.0.0.1 garden.local.gardener.cloud` to your `/etc/hosts`.  by @rrhubenov [#10257]
- `[OPERATOR]` Feature gate `IPv6SingleStack` has been removed. Infrastructure-specific validations will be added in parallel to the corresponding provider extensions. by @ScheererJ [#10716]
## 📰 Noteworthy

- `[OPERATOR]` ManagedSeed's `.spec.gardenlet.config.seedConfig.spec.ingress.controller.kind` field is now defaulted to `nginx` when  
  `.spec.gardenlet.config.seedConfig` or `.spec.gardenlet.config.seedConfig.spec.ingress` is nil.  
   This allows the creation of ManagedSeed without specifying the `.spec.gardenlet` field. by @RadaBDimitrova [#10655]
- `[OPERATOR]` A new `required` controller was added to `gardener-operator`. It maintains the `RequiredRuntime` condition for `Extension` resources to indicate that the extension deployment is required in the Garden-Runtime cluster. by @timuthy [#10650]
- `[OPERATOR]` The `gardener/controlplane` Helm chart has been deprecated and will be removed after `v1.135` has been released (around beginning of 2026). We urge you to switch to a [`gardener-operator`](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md)-based installation. Read all about it [here](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#migrating-an-existing-gardener-landscape-to-gardener-operator). by @rfranzke [#10706]
- `[DEVELOPER]` `.spec.gardenlet` of ManagedSeed is now a required field. This was already the case from an API perspective, enforced by validation. by @RadaBDimitrova [#10648]
- `[USER]` The `spec.kubernetes.kubeAPIServer.oidcConfig` field in the `Shoot` API is deprecated and will be removed after support for Kubernetes 1.31 is dropped. by @AleksandarSavchev [#10666]
## ✨ New Features

- `[OPERATOR]` If an admission webhook which was deployed via `Extension` resource by `gardener-operator` is deleted again, its webhook configuration in the virtual-cluster is cleaned up automatically. by @oliver-goetz [#10585]
- `[OPERATOR]` The `CloudProfile`, `Seed`, and `Shoot` APIs are now allowing to configure access restrictions (e.g., to enable "EU access"-only or similar policies). The legacy approach with the `seed.gardener.cloud/eu-access` labels is deprecated and will be removed in a future release. Make sure to adapt to the new APIs. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/usage/shoot/access_restrictions.md). by @rfranzke [#10654]
- `[USER]` The viewer kubeconfigs for shoot clusters now allow the `pods/log` subresource. by @rfranzke [#10711]
- `[USER]` Service Account Managed Issuer can be now enabled for workerless shoot clusters. by @dimityrmirchev [#10689]
- `[USER]` Structured authorization configuration can now be set by creating a `ConfigMap` with the `AuthorizationConfiguration` file set in the `config.yaml` data key and referencing it (in the `Shoot` via `.spec.kubernetes.kubeAPIServer.structuredAuthorization`, in the `Garden` via `.spec.virtualCluster.kubernetes.kubeAPIServer.structuredAuthorization` for Kubernetes versions `>= v1.30`. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/usage/shoot/shoot_access.md#structured-authorization). by @rfranzke [#10682]
- `[USER]` Gardener reports the cluster's egress CIDRs in `Shoot.status.networking.egressCIDRs` if supported by the used provider extension. by @timebertt [#10240]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix Prometheus rule `shoot-kube-proxy`. by @LucaBernstein [#10757]
- `[OPERATOR]` The TopologySpreadConstraints calculation was improved for `StatefulSet`s to always use a stable label selector. This led to issues in the past when shoots were upgraded to HA. by @timuthy [#10750]
- `[OPERATOR]` valitail version is now pinned to v2.2.15 (depends on glibc 2.32). by @ialidzhikov [#10776]
## 🏃 Others

- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.34`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.34) by @gardener-ci-robot [#10732]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.23.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.2) by @gardener-ci-robot [#10747]
- `[DEPENDENCY]` The `gardener/cert-management` image has been updated to `v0.16.0`. [Release Notes](https://redirect.github.com/gardener/cert-management/releases/tag/v0.16.0) by @gardener-ci-robot [#10684]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.19`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.19) by @gardener-ci-robot [#10680]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.23.3`. by @gardener-ci-robot [#10725]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.55.0`. by @gardener-ci-robot [#10697]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.2`. by @gardener-ci-robot [#10692]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.1) by @gardener-ci-robot [#10755]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.78.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.78.0) by @gardener-ci-robot [#10731]
- `[OPERATOR]` The admission automatically adds the `provider.extensions.gardener.cloud` label to `NamespacedCloudProfile`s. by @LucaBernstein [#10742]
- `[OPERATOR]` Add dual-stack support for coredns. by @DockToFuture [#10733]
- `[OPERATOR]` Allow extensions to be scraped in garden runtime cluster even outside garden namespace by @ScheererJ [#10720]
- `[OPERATOR]` Add label selector to ShootResourceReservation plugin to control for which Shoots the ShootResourceReservation Plugin sets `kubeReserved` according to the GKE formula when `useGKEFormula: true` is set. by @voelzmo [#10492]
- `[OPERATOR]` Increase the readiness probe timeout for the `gardener-metrics-exporter` from 1s to 10s. by @vicwicker [#10771]
- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.23.1`. [Release Notes v0.23.1](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.1), [Release Notes v0.23.0](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.0) by @shreyas-s-rao [#10526]
- `[OPERATOR]` The `autoscaler/cluster-autoscaler` image has been updated to `v1.29.2` (for Kubernetes v1.29). [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.29.2) by @rishabh-11 [#10700]
- `[OPERATOR]` Gardener API Server feature gate `ShootCredentialsBinding` has been promoted to beta and is enabled by default. by @dimityrmirchev [#10662]
- `[DEVELOPER]` Add Make target `make operator-seed-dev` for local development of the `gardenlet` in the operator setup. by @marc1404 [#10710]
- `[DEVELOPER]` Fix `/etc/hosts` configuration in the remote local setup by @vicwicker [#10744]
- `[DEVELOPER]` The base image of the `gardener-extension-provider-local-node` image is now updated to `kindest/node@v1.31.1`. by @ialidzhikov [#10688]
- `[DEVELOPER]` local setup: The kind cluster's node image is now updated to `kindest/node@v1.31.1`. by @ialidzhikov [#10723]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.107.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The unused method `WithShootCredentials` have been removed from `github.com/gardener/gardener/pkg/gardenlet/operation/shoot.Builder`. by @vpnachev [#10672]
- `[DEVELOPER]` In the local development setup, the images are pushed to `garden.local.gardener.cloud:5001` instead of `localhost:5001` now. Please add `127.0.0.1 garden.local.gardener.cloud` to your `/etc/hosts`.  by @rrhubenov [#10257]
- `[OPERATOR]` Feature gate `IPv6SingleStack` has been removed. Infrastructure-specific validations will be added in parallel to the corresponding provider extensions. by @ScheererJ [#10716]
## 📰 Noteworthy

- `[OPERATOR]` ManagedSeed's `.spec.gardenlet.config.seedConfig.spec.ingress.controller.kind` field is now defaulted to `nginx` when  
  `.spec.gardenlet.config.seedConfig` or `.spec.gardenlet.config.seedConfig.spec.ingress` is nil.  
   This allows the creation of ManagedSeed without specifying the `.spec.gardenlet` field. by @RadaBDimitrova [#10655]
- `[OPERATOR]` A new `required` controller was added to `gardener-operator`. It maintains the `RequiredRuntime` condition for `Extension` resources to indicate that the extension deployment is required in the Garden-Runtime cluster. by @timuthy [#10650]
- `[OPERATOR]` The `gardener/controlplane` Helm chart has been deprecated and will be removed after `v1.135` has been released (around beginning of 2026). We urge you to switch to a [`gardener-operator`](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md)-based installation. Read all about it [here](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#migrating-an-existing-gardener-landscape-to-gardener-operator). by @rfranzke [#10706]
- `[DEVELOPER]` `.spec.gardenlet` of ManagedSeed is now a required field. This was already the case from an API perspective, enforced by validation. by @RadaBDimitrova [#10648]
- `[USER]` The `spec.kubernetes.kubeAPIServer.oidcConfig` field in the `Shoot` API is deprecated and will be removed after support for Kubernetes 1.31 is dropped. by @AleksandarSavchev [#10666]
## ✨ New Features

- `[OPERATOR]` If an admission webhook which was deployed via `Extension` resource by `gardener-operator` is deleted again, its webhook configuration in the virtual-cluster is cleaned up automatically. by @oliver-goetz [#10585]
- `[OPERATOR]` The `CloudProfile`, `Seed`, and `Shoot` APIs are now allowing to configure access restrictions (e.g., to enable "EU access"-only or similar policies). The legacy approach with the `seed.gardener.cloud/eu-access` labels is deprecated and will be removed in a future release. Make sure to adapt to the new APIs. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/usage/shoot/access_restrictions.md). by @rfranzke [#10654]
- `[USER]` The viewer kubeconfigs for shoot clusters now allow the `pods/log` subresource. by @rfranzke [#10711]
- `[USER]` Service Account Managed Issuer can be now enabled for workerless shoot clusters. by @dimityrmirchev [#10689]
- `[USER]` Structured authorization configuration can now be set by creating a `ConfigMap` with the `AuthorizationConfiguration` file set in the `config.yaml` data key and referencing it (in the `Shoot` via `.spec.kubernetes.kubeAPIServer.structuredAuthorization`, in the `Garden` via `.spec.virtualCluster.kubernetes.kubeAPIServer.structuredAuthorization` for Kubernetes versions `>= v1.30`. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/usage/shoot/shoot_access.md#structured-authorization). by @rfranzke [#10682]
- `[USER]` Gardener reports the cluster's egress CIDRs in `Shoot.status.networking.egressCIDRs` if supported by the used provider extension. by @timebertt [#10240]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix Prometheus rule `shoot-kube-proxy`. by @LucaBernstein [#10757]
- `[OPERATOR]` The TopologySpreadConstraints calculation was improved for `StatefulSet`s to always use a stable label selector. This led to issues in the past when shoots were upgraded to HA. by @timuthy [#10750]
- `[OPERATOR]` valitail version is now pinned to v2.2.15 (depends on glibc 2.32). by @ialidzhikov [#10776]
## 🏃 Others

- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.34`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.34) by @gardener-ci-robot [#10732]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.23.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.2) by @gardener-ci-robot [#10747]
- `[DEPENDENCY]` The `gardener/cert-management` image has been updated to `v0.16.0`. [Release Notes](https://redirect.github.com/gardener/cert-management/releases/tag/v0.16.0) by @gardener-ci-robot [#10684]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.19`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.19) by @gardener-ci-robot [#10680]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.23.3`. by @gardener-ci-robot [#10725]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.55.0`. by @gardener-ci-robot [#10697]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.2`. by @gardener-ci-robot [#10692]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.1) by @gardener-ci-robot [#10755]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.78.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.78.0) by @gardener-ci-robot [#10731]
- `[OPERATOR]` The admission automatically adds the `provider.extensions.gardener.cloud` label to `NamespacedCloudProfile`s. by @LucaBernstein [#10742]
- `[OPERATOR]` Add dual-stack support for coredns. by @DockToFuture [#10733]
- `[OPERATOR]` Allow extensions to be scraped in garden runtime cluster even outside garden namespace by @ScheererJ [#10720]
- `[OPERATOR]` Add label selector to ShootResourceReservation plugin to control for which Shoots the ShootResourceReservation Plugin sets `kubeReserved` according to the GKE formula when `useGKEFormula: true` is set. by @voelzmo [#10492]
- `[OPERATOR]` Increase the readiness probe timeout for the `gardener-metrics-exporter` from 1s to 10s. by @vicwicker [#10771]
- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.23.1`. [Release Notes v0.23.1](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.1), [Release Notes v0.23.0](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.0) by @shreyas-s-rao [#10526]
- `[OPERATOR]` The `autoscaler/cluster-autoscaler` image has been updated to `v1.29.2` (for Kubernetes v1.29). [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.29.2) by @rishabh-11 [#10700]
- `[OPERATOR]` Gardener API Server feature gate `ShootCredentialsBinding` has been promoted to beta and is enabled by default. by @dimityrmirchev [#10662]
- `[DEVELOPER]` Add Make target `make operator-seed-dev` for local development of the `gardenlet` in the operator setup. by @marc1404 [#10710]
- `[DEVELOPER]` Fix `/etc/hosts` configuration in the remote local setup by @vicwicker [#10744]
- `[DEVELOPER]` The base image of the `gardener-extension-provider-local-node` image is now updated to `kindest/node@v1.31.1`. by @ialidzhikov [#10688]
- `[DEVELOPER]` local setup: The kind cluster's node image is now updated to `kindest/node@v1.31.1`. by @ialidzhikov [#10723]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.107.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The unused method `WithShootCredentials` have been removed from `github.com/gardener/gardener/pkg/gardenlet/operation/shoot.Builder`. by @vpnachev [#10672]
- `[DEVELOPER]` In the local development setup, the images are pushed to `garden.local.gardener.cloud:5001` instead of `localhost:5001` now. Please add `127.0.0.1 garden.local.gardener.cloud` to your `/etc/hosts`.  by @rrhubenov [#10257]
- `[OPERATOR]` Feature gate `IPv6SingleStack` has been removed. Infrastructure-specific validations will be added in parallel to the corresponding provider extensions. by @ScheererJ [#10716]
## 📰 Noteworthy

- `[OPERATOR]` ManagedSeed's `.spec.gardenlet.config.seedConfig.spec.ingress.controller.kind` field is now defaulted to `nginx` when  
  `.spec.gardenlet.config.seedConfig` or `.spec.gardenlet.config.seedConfig.spec.ingress` is nil.  
   This allows the creation of ManagedSeed without specifying the `.spec.gardenlet` field. by @RadaBDimitrova [#10655]
- `[OPERATOR]` A new `required` controller was added to `gardener-operator`. It maintains the `RequiredRuntime` condition for `Extension` resources to indicate that the extension deployment is required in the Garden-Runtime cluster. by @timuthy [#10650]
- `[OPERATOR]` The `gardener/controlplane` Helm chart has been deprecated and will be removed after `v1.135` has been released (around beginning of 2026). We urge you to switch to a [`gardener-operator`](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md)-based installation. Read all about it [here](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#migrating-an-existing-gardener-landscape-to-gardener-operator). by @rfranzke [#10706]
- `[DEVELOPER]` `.spec.gardenlet` of ManagedSeed is now a required field. This was already the case from an API perspective, enforced by validation. by @RadaBDimitrova [#10648]
- `[USER]` The `spec.kubernetes.kubeAPIServer.oidcConfig` field in the `Shoot` API is deprecated and will be removed after support for Kubernetes 1.31 is dropped. by @AleksandarSavchev [#10666]
## ✨ New Features

- `[OPERATOR]` If an admission webhook which was deployed via `Extension` resource by `gardener-operator` is deleted again, its webhook configuration in the virtual-cluster is cleaned up automatically. by @oliver-goetz [#10585]
- `[OPERATOR]` The `CloudProfile`, `Seed`, and `Shoot` APIs are now allowing to configure access restrictions (e.g., to enable "EU access"-only or similar policies). The legacy approach with the `seed.gardener.cloud/eu-access` labels is deprecated and will be removed in a future release. Make sure to adapt to the new APIs. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/usage/shoot/access_restrictions.md). by @rfranzke [#10654]
- `[USER]` The viewer kubeconfigs for shoot clusters now allow the `pods/log` subresource. by @rfranzke [#10711]
- `[USER]` Service Account Managed Issuer can be now enabled for workerless shoot clusters. by @dimityrmirchev [#10689]
- `[USER]` Structured authorization configuration can now be set by creating a `ConfigMap` with the `AuthorizationConfiguration` file set in the `config.yaml` data key and referencing it (in the `Shoot` via `.spec.kubernetes.kubeAPIServer.structuredAuthorization`, in the `Garden` via `.spec.virtualCluster.kubernetes.kubeAPIServer.structuredAuthorization` for Kubernetes versions `>= v1.30`. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/usage/shoot/shoot_access.md#structured-authorization). by @rfranzke [#10682]
- `[USER]` Gardener reports the cluster's egress CIDRs in `Shoot.status.networking.egressCIDRs` if supported by the used provider extension. by @timebertt [#10240]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix Prometheus rule `shoot-kube-proxy`. by @LucaBernstein [#10757]
- `[OPERATOR]` The TopologySpreadConstraints calculation was improved for `StatefulSet`s to always use a stable label selector. This led to issues in the past when shoots were upgraded to HA. by @timuthy [#10750]
- `[OPERATOR]` valitail version is now pinned to v2.2.15 (depends on glibc 2.32). by @ialidzhikov [#10776]
## 🏃 Others

- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.34`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.34) by @gardener-ci-robot [#10732]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.23.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.2) by @gardener-ci-robot [#10747]
- `[DEPENDENCY]` The `gardener/cert-management` image has been updated to `v0.16.0`. [Release Notes](https://redirect.github.com/gardener/cert-management/releases/tag/v0.16.0) by @gardener-ci-robot [#10684]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.19`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.19) by @gardener-ci-robot [#10680]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.23.3`. by @gardener-ci-robot [#10725]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.55.0`. by @gardener-ci-robot [#10697]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.2`. by @gardener-ci-robot [#10692]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.1) by @gardener-ci-robot [#10755]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.78.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.78.0) by @gardener-ci-robot [#10731]
- `[OPERATOR]` The admission automatically adds the `provider.extensions.gardener.cloud` label to `NamespacedCloudProfile`s. by @LucaBernstein [#10742]
- `[OPERATOR]` Add dual-stack support for coredns. by @DockToFuture [#10733]
- `[OPERATOR]` Allow extensions to be scraped in garden runtime cluster even outside garden namespace by @ScheererJ [#10720]
- `[OPERATOR]` Add label selector to ShootResourceReservation plugin to control for which Shoots the ShootResourceReservation Plugin sets `kubeReserved` according to the GKE formula when `useGKEFormula: true` is set. by @voelzmo [#10492]
- `[OPERATOR]` Increase the readiness probe timeout for the `gardener-metrics-exporter` from 1s to 10s. by @vicwicker [#10771]
- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.23.1`. [Release Notes v0.23.1](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.1), [Release Notes v0.23.0](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.0) by @shreyas-s-rao [#10526]
- `[OPERATOR]` The `autoscaler/cluster-autoscaler` image has been updated to `v1.29.2` (for Kubernetes v1.29). [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.29.2) by @rishabh-11 [#10700]
- `[OPERATOR]` Gardener API Server feature gate `ShootCredentialsBinding` has been promoted to beta and is enabled by default. by @dimityrmirchev [#10662]
- `[DEVELOPER]` Add Make target `make operator-seed-dev` for local development of the `gardenlet` in the operator setup. by @marc1404 [#10710]
- `[DEVELOPER]` Fix `/etc/hosts` configuration in the remote local setup by @vicwicker [#10744]
- `[DEVELOPER]` The base image of the `gardener-extension-provider-local-node` image is now updated to `kindest/node@v1.31.1`. by @ialidzhikov [#10688]
- `[DEVELOPER]` local setup: The kind cluster's node image is now updated to `kindest/node@v1.31.1`. by @ialidzhikov [#10723]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.0`


</details>
