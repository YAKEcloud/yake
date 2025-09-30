---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-dns-service to <code>1.70.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.70.0]

## 🏃 Others
- `[OPERATOR]` Fix admission helm chart OCI repository paths after renaming. by @MartinWeindel [[#549](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/549)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.70.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.70.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.70.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.70.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.70.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.128.1</code></b></summary>

# [github.com/gardener/gardener:v1.128.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed the `alertmanager-garden` peer discovery service port names by @gardener-ci-robot [[#12991](https://github.com/gardener/gardener/pull/12991)]

## 🏃 Others
- `[USER]` Gardener API server now serves the OpenAPI v2 schema ( `/openapi/v2` endpoint) again and will keep on serving it until Gardener `v1.160`. In Gardener `v1.127.0`, the support for OpenAPI v2 schemas was removed. However, [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) does not yet support OpenAPI v3 schema. by @gardener-ci-robot [[#12992](https://github.com/gardener/gardener/pull/12992)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.128.1</code></b></summary>

# [github.com/gardener/gardener:v1.128.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed the `alertmanager-garden` peer discovery service port names by @gardener-ci-robot [[#12991](https://github.com/gardener/gardener/pull/12991)]

## 🏃 Others
- `[USER]` Gardener API server now serves the OpenAPI v2 schema ( `/openapi/v2` endpoint) again and will keep on serving it until Gardener `v1.160`. In Gardener `v1.127.0`, the support for OpenAPI v2 schemas was removed. However, [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) does not yet support OpenAPI v3 schema. by @gardener-ci-robot [[#12992](https://github.com/gardener/gardener/pull/12992)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.128.1</code></b></summary>

# [github.com/gardener/gardener:v1.128.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed the `alertmanager-garden` peer discovery service port names by @gardener-ci-robot [[#12991](https://github.com/gardener/gardener/pull/12991)]

## 🏃 Others
- `[USER]` Gardener API server now serves the OpenAPI v2 schema ( `/openapi/v2` endpoint) again and will keep on serving it until Gardener `v1.160`. In Gardener `v1.127.0`, the support for OpenAPI v2 schemas was removed. However, [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) does not yet support OpenAPI v3 schema. by @gardener-ci-robot [[#12992](https://github.com/gardener/gardener/pull/12992)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.1`


</details>

<details>
<summary><b>Update os-coreos to <code>1.26.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-coreos:v1.26.0]

## 🏃 Others
- `[OPERATOR]` Add missing securityContext controls in order to comply with the restricted Pod Security Standards policy. by @mstueer [[#224](https://github.com/gardener/gardener-extension-os-coreos/pull/224)]
- `[DEVELOPER]` migrate pipeline to GitHub-Actions by @ccwienk [[#187](https://github.com/gardener/gardener-extension-os-coreos/pull/187)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-os-coreos/blob/master/example/extension.yaml) by @timuthy [[#219](https://github.com/gardener/gardener-extension-os-coreos/pull/219)]

## Helm Charts
- os-coreos: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-coreos:v1.26.0`
## Container (OCI) Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.26.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.55.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.55.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Refactor Feature Gates specification for the provider-extesion helm chart. Operators need to specify their deployed feature gates with their canonical name. by @kon-angelo [[#1301](https://github.com/gardener/gardener-extension-provider-azure/pull/1301)]

## ✨ New Features
- `[OPERATOR]` This extension now supports `WorkloadIdentity`s as credentials for etcd backup. by @vpnachev [[#1265](https://github.com/gardener/gardener-extension-provider-azure/pull/1265)]

## 🏃 Others
- `[OPERATOR]` Update RBAC for extensions running in the runtime cluster. by @hebelsan [[#1266](https://github.com/gardener/gardener-extension-provider-azure/pull/1266)]
- `[OPERATOR]` Fix a bug that disabled subnet's default outbound access. by @kon-angelo [[#1290](https://github.com/gardener/gardener-extension-provider-azure/pull/1290)]
- `[OPERATOR]` Add advanced shoot input validation by @kon-angelo [[#1295](https://github.com/gardener/gardener-extension-provider-azure/pull/1295)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.55.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.55.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.55.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.55.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.55.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.82.2</code></b></summary>

# [github.com/gardener/dashboard:1.82.2]

## 🐛 Bug Fixes
- `[USER]` Resolved a server error that occurred when retrieving information in the About dialog by @gardener-github-actions[bot] [[#2645](https://github.com/gardener/dashboard/pull/2645)]
- `[USER]` Fixed an issue where supported regions were not correctly identified as *recommended regions*. This caused invalid defaulting of regions, and in cases where `seedCandidateDeterminationStrategy` was set to `SameRegion`, the region list could incorrectly be empty by @gardener-github-actions[bot] [[#2646](https://github.com/gardener/dashboard/pull/2646)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.2`


</details>

<details>
<summary><b>Update dashboard to <code>1.82.2</code></b></summary>

# [github.com/gardener/dashboard:1.82.2]

## 🐛 Bug Fixes
- `[USER]` Resolved a server error that occurred when retrieving information in the About dialog by @gardener-github-actions[bot] [[#2645](https://github.com/gardener/dashboard/pull/2645)]
- `[USER]` Fixed an issue where supported regions were not correctly identified as *recommended regions*. This caused invalid defaulting of regions, and in cases where `seedCandidateDeterminationStrategy` was set to `SameRegion`, the region list could incorrectly be empty by @gardener-github-actions[bot] [[#2646](https://github.com/gardener/dashboard/pull/2646)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.2`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.46.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.46.0]

## ✨ New Features
- `[OPERATOR]` This extension now supports `WorkloadIdentity`s as credentials for etcd backup. by @vpnachev [[#1151](https://github.com/gardener/gardener-extension-provider-gcp/pull/1151)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug in the `admission-gcp` component, which was causing a nil-pointer exception in case a new in-place worker is added, is now fixed. by @shafeeqes [[#1169](https://github.com/gardener/gardener-extension-provider-gcp/pull/1169)]
- `[OPERATOR]` A bug preventing all obsolete machine-controller-manager ClusterRoles and ClusterRoleBindings to be deleted on extension startup has been fixed. by @georgibaltiev [[#1137](https://github.com/gardener/gardener-extension-provider-gcp/pull/1137)]

## 🏃 Others
- `[OPERATOR]` Remove unused terraformer image by @kon-angelo [[#1181](https://github.com/gardener/gardener-extension-provider-gcp/pull/1181)]
- `[OPERATOR]` Update GHA for new release options by @kon-angelo [[#1131](https://github.com/gardener/gardener-extension-provider-gcp/pull/1131)]
- `[OPERATOR]` Update RBAC for extensions running in the runtime cluster. by @kon-angelo [[#1155](https://github.com/gardener/gardener-extension-provider-gcp/pull/1155)]
- `[OPERATOR]` Upgrade gardener dependency to v1.122.1 by @plkokanov [[#1122](https://github.com/gardener/gardener-extension-provider-gcp/pull/1122)]
- `[OPERATOR]` `provider-gcp` no longer supports Shoots with Кubernetes version <= 1.28. by @georgibaltiev [[#1123](https://github.com/gardener/gardener-extension-provider-gcp/pull/1123)]
- `[OPERATOR]` Improve user input validation for provider related fields. by @kon-angelo [[#1173](https://github.com/gardener/gardener-extension-provider-gcp/pull/1173)]
- `[OPERATOR]` Upgrade gardener/gardener to v1.125.0 by @hebelsan [[#1142](https://github.com/gardener/gardener-extension-provider-gcp/pull/1142)]
- `[OPERATOR]` Upgrade gardener dependency to v1.123.1 by @theoddora [[#1132](https://github.com/gardener/gardener-extension-provider-gcp/pull/1132)]
- `[OPERATOR]` Deprecate obsolete role, rolebinding and serviceaccounts from terraformer by @kon-angelo [[#1136](https://github.com/gardener/gardener-extension-provider-gcp/pull/1136)]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#1121](https://github.com/gardener/gardener-extension-provider-gcp/pull/1121)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-provider-gcp/blob/master/example/extension.yaml) by @timuthy [[#1154](https://github.com/gardener/gardener-extension-provider-gcp/pull/1154)]
- `[OPERATOR]` Update csi driver filestore image from v1.10.1 to v1.11.0 by @hebelsan [[#1124](https://github.com/gardener/gardener-extension-provider-gcp/pull/1124)]
- `[OPERATOR]` Add missing securityContext controls in order to comply with the restricted Pod Security Standards policy. by @mstueer [[#1165](https://github.com/gardener/gardener-extension-provider-gcp/pull/1165)]
- `[OPERATOR]` Increase node controller workers for cloud-controller-manager by @kon-angelo [[#1138](https://github.com/gardener/gardener-extension-provider-gcp/pull/1138)]
- `[OPERATOR]` Update gardener/gardener to v1.127.1 by @hebelsan [[#1172](https://github.com/gardener/gardener-extension-provider-gcp/pull/1172)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.46.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.46.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.46.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.46.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.46.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.49.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.49.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Update the defaults for the infrastructure controller. Unless opted out per shoot or per seed, the infrastructure controller will now by default reconcile using the flow implementation. In future release v1.50.0 we will disable reconciliation via terraform. by @kon-angelo [[#1114](https://github.com/gardener/gardener-extension-provider-openstack/pull/1114)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug preventing all obsolete machine-controller-manager ClusterRoles and ClusterRoleBindings to be deleted on extension startup has been fixed. by @georgibaltiev [[#1116](https://github.com/gardener/gardener-extension-provider-openstack/pull/1116)]

## 🏃 Others
- `[OPERATOR]` Remove deprecated storage class nfs-constraint-<zone> for manila-csi-driver by @hebelsan [[#1131](https://github.com/gardener/gardener-extension-provider-openstack/pull/1131)]
- `[OPERATOR]` `provider-openstack` no longer supports Shoots with Кubernetes version <= 1.28. by @RadaBDimitrova [[#1101](https://github.com/gardener/gardener-extension-provider-openstack/pull/1101)]
- `[OPERATOR]` Update non-gardener dependencies & gardener/gardener to v1.125.1 by @hebelsan [[#1127](https://github.com/gardener/gardener-extension-provider-openstack/pull/1127)]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#1090](https://github.com/gardener/gardener-extension-provider-openstack/pull/1090)]
- `[OPERATOR]` Upgrade gardener dependency to v1.123.1 by @theoddora [[#1113](https://github.com/gardener/gardener-extension-provider-openstack/pull/1113)]
- `[OPERATOR]` Upgrade gardener dependency to v1.122.1 by @plkokanov [[#1100](https://github.com/gardener/gardener-extension-provider-openstack/pull/1100)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#1107](https://github.com/gardener/gardener-extension-provider-openstack/pull/1107)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-provider-openstack/blob/master/example/extension.yaml) by @timuthy [[#1136](https://github.com/gardener/gardener-extension-provider-openstack/pull/1136)]
- `[DEVELOPER]` Separate bastion reconcile and delete options by @hebelsan [[#1108](https://github.com/gardener/gardener-extension-provider-openstack/pull/1108)]
- `[OPERATOR]` Add shoot input validation by @kon-angelo [[#1155](https://github.com/gardener/gardener-extension-provider-openstack/pull/1155)]
- `[OPERATOR]` Update RBAC for extensions running in the runtime cluster. by @hebelsan [[#1139](https://github.com/gardener/gardener-extension-provider-openstack/pull/1139)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.49.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.49.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.49.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.49.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.49.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.128.2</code></b></summary>

# [github.com/gardener/gardener:v1.128.2]

## 🐛 Bug Fixes
- `[DEVELOPER]` The `Priority` field for the `MachineDeployment` API is optional instead of required again. by @gardener-ci-robot [[#13016](https://github.com/gardener/gardener/pull/13016)]

## 🏃 Others
- `[DEVELOPER]` The optimistic defaulting of priorities for `MachineDeployment`s was introduced again. by @gardener-ci-robot [[#13016](https://github.com/gardener/gardener/pull/13016)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.1` to `1.82.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.2) by @gardener-ci-robot [[#13011](https://github.com/gardener/gardener/pull/13011)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.128.2</code></b></summary>

# [github.com/gardener/gardener:v1.128.2]

## 🐛 Bug Fixes
- `[DEVELOPER]` The `Priority` field for the `MachineDeployment` API is optional instead of required again. by @gardener-ci-robot [[#13016](https://github.com/gardener/gardener/pull/13016)]

## 🏃 Others
- `[DEVELOPER]` The optimistic defaulting of priorities for `MachineDeployment`s was introduced again. by @gardener-ci-robot [[#13016](https://github.com/gardener/gardener/pull/13016)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.1` to `1.82.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.2) by @gardener-ci-robot [[#13011](https://github.com/gardener/gardener/pull/13011)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.128.2</code></b></summary>

# [github.com/gardener/gardener:v1.128.2]

## 🐛 Bug Fixes
- `[DEVELOPER]` The `Priority` field for the `MachineDeployment` API is optional instead of required again. by @gardener-ci-robot [[#13016](https://github.com/gardener/gardener/pull/13016)]

## 🏃 Others
- `[DEVELOPER]` The optimistic defaulting of priorities for `MachineDeployment`s was introduced again. by @gardener-ci-robot [[#13016](https://github.com/gardener/gardener/pull/13016)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.1` to `1.82.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.2) by @gardener-ci-robot [[#13011](https://github.com/gardener/gardener/pull/13011)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.2`


</details>

<details>
<summary><b>Update provider-aws to <code>1.64.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.64.0]

## ✨ New Features
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to use credentials of either `v1.Secret` or `security.gardener.cloud/v1alpha1.WorkloadIdentity` by @vpnachev [[#1461](https://github.com/gardener/gardener-extension-provider-aws/pull/1461)]

## 🏃 Others
- `[OPERATOR]` Update RBAC for extensions running in the runtime cluster. by @hebelsan [[#1460](https://github.com/gardener/gardener-extension-provider-aws/pull/1460)]
- `[OPERATOR]` LoadBalancer services in IPv6 and dual-stack clusters can now opt out of automatic dual-stack annotations using `extensions.gardener.cloud/ignore-load-balancer: "true"`. by @axel7born [[#1459](https://github.com/gardener/gardener-extension-provider-aws/pull/1459)]
- `[OPERATOR]` AMI selection for workers' `MachineClass` supports `Cloudprofiles` with `Capabilities`. by @Roncossek [[#1458](https://github.com/gardener/gardener-extension-provider-aws/pull/1458)]
- `[OPERATOR]` Adopts Gardener MachineImage `Capabilities` and introduces `CapabilitySets` to the `providerConfig`. by @Roncossek [[#1306](https://github.com/gardener/gardener-extension-provider-aws/pull/1306)]
- `[OPERATOR]` Migration from dual-stack [IPv4, IPv6] to [IPv4] networking is now allowed. by @axel7born [[#1481](https://github.com/gardener/gardener-extension-provider-aws/pull/1481)]
- `[OPERATOR]` Input validation for shoot fields by @kon-angelo [[#1479](https://github.com/gardener/gardener-extension-provider-aws/pull/1479)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-provider-aws/blob/master/example/extension.yaml) by @timuthy [[#1454](https://github.com/gardener/gardener-extension-provider-aws/pull/1454)]
- `[OPERATOR]` Remove CPU requests for aws-extension components in Shoot and Seed. by @voelzmo [[#1448](https://github.com/gardener/gardener-extension-provider-aws/pull/1448)]
- `[OPERATOR]` Update mcm AWS image from v0.25.0 to v0.26.0 by @hebelsan [[#1478](https://github.com/gardener/gardener-extension-provider-aws/pull/1478)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.64.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.64.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.64.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.64.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.64.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.128.3</code></b></summary>

# [github.com/gardener/gardener:v1.128.3]

## 🏃 Others
- `[OPERATOR]` Revert server block import of coredns-custom configmap for node-local-dns. by @gardener-ci-robot [[#13038](https://github.com/gardener/gardener/pull/13038)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.128.3</code></b></summary>

# [github.com/gardener/gardener:v1.128.3]

## 🏃 Others
- `[OPERATOR]` Revert server block import of coredns-custom configmap for node-local-dns. by @gardener-ci-robot [[#13038](https://github.com/gardener/gardener/pull/13038)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.128.3</code></b></summary>

# [github.com/gardener/gardener:v1.128.3]

## 🏃 Others
- `[OPERATOR]` Revert server block import of coredns-custom configmap for node-local-dns. by @gardener-ci-robot [[#13038](https://github.com/gardener/gardener/pull/13038)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.3`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.49.1</code></b></summary>



## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.49.1`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.49.1`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.49.1`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.49.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.49.1`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.10.1</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-rsyslog-relp:v0.10.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix casing of `role` in `ScrapeConfig`. by @gardener-ci-robot [[#314](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/314)]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.10.1`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.10.1`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.10.1`
## Container (OCI) Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.10.1`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.10.1`


</details>

<details>
<summary><b>Update acl to <code>1.12.0</code></b></summary>

<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### ⚠️ Breaking Changes
* Drop special handling for provider-openstack by @timebertt in https://github.com/stackitcloud/gardener-extension-acl/pull/173
  * Operators should ensure that the provider-openstack version is recent enough to publish `Infrastructure.status.egressCIDRs` for all clusters before upgrading to this version of this extension.
### 🤖 Dependencies
* Update dependency go to v1.25.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/166
* Update actions/setup-go action to v6 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/167
* Update module github.com/onsi/ginkgo/v2 to v2.25.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/168
* Update k8s packages to v0.32.9 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/169
* Update module golang.org/x/tools to v0.37.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/170
* Update k8s packages (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/149
* Update module github.com/gardener/gardener to v1.127.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/175
* Update k8s packages (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/176

## New Contributors
* @MichaelEischer made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/171

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.11.0...v1.12.0

</details>
