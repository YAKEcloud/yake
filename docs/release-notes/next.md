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
