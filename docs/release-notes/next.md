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

<details>
<summary><b>Update provider-aws to <code>1.64.1</code></b></summary>



## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.64.1`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.64.1`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.64.1`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.64.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.64.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.82.3</code></b></summary>

# [github.com/gardener/dashboard:1.82.3]

## 🐛 Bug Fixes
- `[USER]` Added the missing `cloudflare-dns` provider to the list of supported DNS providers by @gardener-github-actions[bot] [[#2667](https://github.com/gardener/dashboard/pull/2667)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.3`


</details>

<details>
<summary><b>Update dashboard to <code>1.82.3</code></b></summary>

# [github.com/gardener/dashboard:1.82.3]

## 🐛 Bug Fixes
- `[USER]` Added the missing `cloudflare-dns` provider to the list of supported DNS providers by @gardener-github-actions[bot] [[#2667](https://github.com/gardener/dashboard/pull/2667)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.128.4</code></b></summary>

# [github.com/gardener/gardener:v1.128.4]

## 🐛 Bug Fixes
- `[DEVELOPER]` An issue preventing `extensions.gardener.cloud/v1alpha1.Bastion`s to be listed due to missing json tags is now fixed. by @gardener-ci-robot [[#13063](https://github.com/gardener/gardener/pull/13063)]
- `[USER]` A bug causing finalizers to not be removed from `Secret`s when such are deleted and referenced by both a `CredentialsBinding` and a `SecretBinding` is fixed. by @gardener-ci-robot [[#13074](https://github.com/gardener/gardener/pull/13074)]
- `[OPERATOR]` A bug in the `gardenletdeployer` unable to handle backup credentials of type `WorkloadIdentity` has been fixed. by @vpnachev [[#13088](https://github.com/gardener/gardener/pull/13088)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.128.4</code></b></summary>

# [github.com/gardener/gardener:v1.128.4]

## 🐛 Bug Fixes
- `[DEVELOPER]` An issue preventing `extensions.gardener.cloud/v1alpha1.Bastion`s to be listed due to missing json tags is now fixed. by @gardener-ci-robot [[#13063](https://github.com/gardener/gardener/pull/13063)]
- `[USER]` A bug causing finalizers to not be removed from `Secret`s when such are deleted and referenced by both a `CredentialsBinding` and a `SecretBinding` is fixed. by @gardener-ci-robot [[#13074](https://github.com/gardener/gardener/pull/13074)]
- `[OPERATOR]` A bug in the `gardenletdeployer` unable to handle backup credentials of type `WorkloadIdentity` has been fixed. by @vpnachev [[#13088](https://github.com/gardener/gardener/pull/13088)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.128.4</code></b></summary>

# [github.com/gardener/gardener:v1.128.4]

## 🐛 Bug Fixes
- `[DEVELOPER]` An issue preventing `extensions.gardener.cloud/v1alpha1.Bastion`s to be listed due to missing json tags is now fixed. by @gardener-ci-robot [[#13063](https://github.com/gardener/gardener/pull/13063)]
- `[USER]` A bug causing finalizers to not be removed from `Secret`s when such are deleted and referenced by both a `CredentialsBinding` and a `SecretBinding` is fixed. by @gardener-ci-robot [[#13074](https://github.com/gardener/gardener/pull/13074)]
- `[OPERATOR]` A bug in the `gardenletdeployer` unable to handle backup credentials of type `WorkloadIdentity` has been fixed. by @vpnachev [[#13088](https://github.com/gardener/gardener/pull/13088)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.129.0</code></b></summary>

# [github.com/gardener/gardener:v1.129.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The GA-ed and unconditionally enabled `UseNamespacedCloudProfile` feature gates is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @LucaBernstein [[#13020](https://github.com/gardener/gardener/pull/13020)]
- `[OPERATOR]` It is not allowed anymore to specify the following characters: [, #], as well as capitalized letters, within the entries of the Garden's `.spec.virtualCluster.Gardener.apiServer.watchCacheSizes.resources[].apiGroup` field. Please update your Gardens accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[USER]` It is not allowed anymore to specify the following characters: [, #], as well as capitalized letters, within the entries of the Shoot's `.spec.kubernetes.kubeAPIServer.watchCacheSizes.resources[].apiGroup` field. Please update your Shoots accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[OPERATOR]` The GA-ed and unconditionally enabled `CredentialsRotationWithoutWorkersRollout` feature gates is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @rfranzke [[#13041](https://github.com/gardener/gardener/pull/13041)]
- `[OPERATOR]` It is not allowed anymore to specify the following characters: [,. #], as well as capitalized letters, within the entries of the Garden's `.spec.virtualCluster.Gardener.apiServer.watchCacheSizes.resources[].resource` field. Please update your Gardens accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[USER]` The `.status.credentials.rotation.kubeconfig` field in the `Shoot` API is removed. This field has been deprecated since Gardener v1.114.0. by @shafeeqes [[#13037](https://github.com/gardener/gardener/pull/13037)]
- `[USER]` It is not allowed anymore to specify the following characters: [,. #], as well as capitalized letters, within the entries of the Shoot's `.spec.kubernetes.kubeAPIServer.watchCacheSizes.resources[].resource` field. Please update your Shoots accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]

## 📰 Noteworthy
- `[USER]` `ViewerKubeconfig` is no longer using solely the group `gardener.cloud:system:viewers` to grant viewer access to the shoot cluster, instead it is now granted only to Gardener system viewer users. Project Viewer users are granted viewer access to the shoot cluster via the group `gardener.cloud:project:viewers`. by @vpnachev [[#12674](https://github.com/gardener/gardener/pull/12674)]
- `[USER]` `AdminKubeconfig` is no longer using the group `system:masters` to grant admin access to the shoot cluster, instead it is now using the groups `gardener.cloud:system:admins` granted to Gardener system admins and `gardener.cloud:project:admins` granted to Gardener Project admins. by @vpnachev [[#12674](https://github.com/gardener/gardener/pull/12674)]

## ✨ New Features
- `[OPERATOR]` gardener-admission-controller now supports enabling the [`OwnerReferencesPermissionEnforcement` admission plugin](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#ownerreferencespermissionenforcement) for the virtual kube-apiserver. Previously, it was rejecting requests from gardenlet because the `shoots/finalizers` and `backupbuckets/finalizers` subresources were not allowed. by @gardener-ci-robot [[#13059](https://github.com/gardener/gardener/pull/13059)]
- `[OPERATOR]` The `OperatingSystemConfig` containerd config was enhanced to specify the [`override_path`](https://github.com/containerd/containerd/blob/cef8ce2ecb572bc8026323c0c3dfad9953b952f6/docs/hosts.md?override_path#override_path-field) option which is respected when generating the `hosts.toml` file for the respective upstream config. by @timuthy [[#13002](https://github.com/gardener/gardener/pull/13002)]

## 🐛 Bug Fixes
- `[USER]` A bug causing finalizers to not be removed from `Secret`s when such are deleted and referenced by both a `CredentialsBinding` and a `SecretBinding` is fixed. by @gardener-ci-robot [[#13075](https://github.com/gardener/gardener/pull/13075)]
- `[OPERATOR]` Fixed an issue that caused `Machine`s to be duplicated when being saved in the `ShootState`. This caused the `ShootState` to grow exponentially large and fail to be created. The issue could occur when there are multiple `MachineDeployments` created for the `Shoot`. by @gardener-ci-robot [[#13089](https://github.com/gardener/gardener/pull/13089)]
- `[OPERATOR]` A bug in the `gardenletdeployer` unable to handle backup credentials of type `WorkloadIdentity` has been fixed. by @gardener-ci-robot [[#13087](https://github.com/gardener/gardener/pull/13087)]
- `[OPERATOR]` Fixed the `alertmanager-garden` peer discovery service port names by @rickardsjp [[#12988](https://github.com/gardener/gardener/pull/12988)]
- `[DEVELOPER]` An issue preventing `extensions.gardener.cloud/v1alpha1.Bastion`s to be listed due to missing json tags is now fixed. by @gardener-ci-robot [[#13062](https://github.com/gardener/gardener/pull/13062)]
- `[DEVELOPER]` The `Priority` field for the `MachineDeployment` API is optional instead of required again. by @tobschli [[#13014](https://github.com/gardener/gardener/pull/13014)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.41.1` to `0.42.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.42.0) by @gardener-ci-robot [[#13009](https://github.com/gardener/gardener/pull/13009)]
- `[OPERATOR]` Revert server block import of coredns-custom configmap for node-local-dns. by @DockToFuture [[#13028](https://github.com/gardener/gardener/pull/13028)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.41` to `v7.5.42`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.42) by @gardener-ci-robot [[#13023](https://github.com/gardener/gardener/pull/13023)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.19.1` to `v0.20.0`. by @gardener-ci-robot [[#12980](https://github.com/gardener/gardener/pull/12980)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.26` to `v2.2.27`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.27) by @gardener-ci-robot [[#13022](https://github.com/gardener/gardener/pull/13022)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.13.2` to `v1.13.3`. by @gardener-ci-robot [[#13047](https://github.com/gardener/gardener/pull/13047)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `fluent/fluent-operator` from `v3.2.5` to `v4.0.9` by @nickytd [[#12998](https://github.com/gardener/gardener/pull/12998)]
- `[DEVELOPER]` An issue with the ssh tunnel in the extensions setup is fixed. by @axel7born [[#13019](https://github.com/gardener/gardener/pull/13019)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.1` to `1.82.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.2) by @gardener-ci-robot [[#13010](https://github.com/gardener/gardener/pull/13010)]
- `[DEVELOPER]` The optimistic defaulting of priorities for `MachineDeployment`s was introduced again. by @tobschli [[#13014](https://github.com/gardener/gardener/pull/13014)]
- `[OPERATOR]` Remove migration code to clean up obsolete Prometheus volumes by @vicwicker [[#13021](https://github.com/gardener/gardener/pull/13021)]
- `[USER]` Gardener API server now serves the OpenAPI v2 schema ( `/openapi/v2` endpoint) again and will keep on serving it until Gardener `v1.160`. In Gardener `v1.127.0`, the support for OpenAPI v2 schemas was removed. However, [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) does not yet support OpenAPI v3 schema. by @shafeeqes [[#12987](https://github.com/gardener/gardener/pull/12987)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.129.0</code></b></summary>

# [github.com/gardener/gardener:v1.129.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The GA-ed and unconditionally enabled `UseNamespacedCloudProfile` feature gates is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @LucaBernstein [[#13020](https://github.com/gardener/gardener/pull/13020)]
- `[OPERATOR]` It is not allowed anymore to specify the following characters: [, #], as well as capitalized letters, within the entries of the Garden's `.spec.virtualCluster.Gardener.apiServer.watchCacheSizes.resources[].apiGroup` field. Please update your Gardens accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[USER]` It is not allowed anymore to specify the following characters: [, #], as well as capitalized letters, within the entries of the Shoot's `.spec.kubernetes.kubeAPIServer.watchCacheSizes.resources[].apiGroup` field. Please update your Shoots accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[OPERATOR]` The GA-ed and unconditionally enabled `CredentialsRotationWithoutWorkersRollout` feature gates is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @rfranzke [[#13041](https://github.com/gardener/gardener/pull/13041)]
- `[OPERATOR]` It is not allowed anymore to specify the following characters: [,. #], as well as capitalized letters, within the entries of the Garden's `.spec.virtualCluster.Gardener.apiServer.watchCacheSizes.resources[].resource` field. Please update your Gardens accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[USER]` The `.status.credentials.rotation.kubeconfig` field in the `Shoot` API is removed. This field has been deprecated since Gardener v1.114.0. by @shafeeqes [[#13037](https://github.com/gardener/gardener/pull/13037)]
- `[USER]` It is not allowed anymore to specify the following characters: [,. #], as well as capitalized letters, within the entries of the Shoot's `.spec.kubernetes.kubeAPIServer.watchCacheSizes.resources[].resource` field. Please update your Shoots accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]

## 📰 Noteworthy
- `[USER]` `ViewerKubeconfig` is no longer using solely the group `gardener.cloud:system:viewers` to grant viewer access to the shoot cluster, instead it is now granted only to Gardener system viewer users. Project Viewer users are granted viewer access to the shoot cluster via the group `gardener.cloud:project:viewers`. by @vpnachev [[#12674](https://github.com/gardener/gardener/pull/12674)]
- `[USER]` `AdminKubeconfig` is no longer using the group `system:masters` to grant admin access to the shoot cluster, instead it is now using the groups `gardener.cloud:system:admins` granted to Gardener system admins and `gardener.cloud:project:admins` granted to Gardener Project admins. by @vpnachev [[#12674](https://github.com/gardener/gardener/pull/12674)]

## ✨ New Features
- `[OPERATOR]` gardener-admission-controller now supports enabling the [`OwnerReferencesPermissionEnforcement` admission plugin](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#ownerreferencespermissionenforcement) for the virtual kube-apiserver. Previously, it was rejecting requests from gardenlet because the `shoots/finalizers` and `backupbuckets/finalizers` subresources were not allowed. by @gardener-ci-robot [[#13059](https://github.com/gardener/gardener/pull/13059)]
- `[OPERATOR]` The `OperatingSystemConfig` containerd config was enhanced to specify the [`override_path`](https://github.com/containerd/containerd/blob/cef8ce2ecb572bc8026323c0c3dfad9953b952f6/docs/hosts.md?override_path#override_path-field) option which is respected when generating the `hosts.toml` file for the respective upstream config. by @timuthy [[#13002](https://github.com/gardener/gardener/pull/13002)]

## 🐛 Bug Fixes
- `[USER]` A bug causing finalizers to not be removed from `Secret`s when such are deleted and referenced by both a `CredentialsBinding` and a `SecretBinding` is fixed. by @gardener-ci-robot [[#13075](https://github.com/gardener/gardener/pull/13075)]
- `[OPERATOR]` Fixed an issue that caused `Machine`s to be duplicated when being saved in the `ShootState`. This caused the `ShootState` to grow exponentially large and fail to be created. The issue could occur when there are multiple `MachineDeployments` created for the `Shoot`. by @gardener-ci-robot [[#13089](https://github.com/gardener/gardener/pull/13089)]
- `[OPERATOR]` A bug in the `gardenletdeployer` unable to handle backup credentials of type `WorkloadIdentity` has been fixed. by @gardener-ci-robot [[#13087](https://github.com/gardener/gardener/pull/13087)]
- `[OPERATOR]` Fixed the `alertmanager-garden` peer discovery service port names by @rickardsjp [[#12988](https://github.com/gardener/gardener/pull/12988)]
- `[DEVELOPER]` An issue preventing `extensions.gardener.cloud/v1alpha1.Bastion`s to be listed due to missing json tags is now fixed. by @gardener-ci-robot [[#13062](https://github.com/gardener/gardener/pull/13062)]
- `[DEVELOPER]` The `Priority` field for the `MachineDeployment` API is optional instead of required again. by @tobschli [[#13014](https://github.com/gardener/gardener/pull/13014)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.41.1` to `0.42.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.42.0) by @gardener-ci-robot [[#13009](https://github.com/gardener/gardener/pull/13009)]
- `[OPERATOR]` Revert server block import of coredns-custom configmap for node-local-dns. by @DockToFuture [[#13028](https://github.com/gardener/gardener/pull/13028)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.41` to `v7.5.42`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.42) by @gardener-ci-robot [[#13023](https://github.com/gardener/gardener/pull/13023)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.19.1` to `v0.20.0`. by @gardener-ci-robot [[#12980](https://github.com/gardener/gardener/pull/12980)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.26` to `v2.2.27`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.27) by @gardener-ci-robot [[#13022](https://github.com/gardener/gardener/pull/13022)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.13.2` to `v1.13.3`. by @gardener-ci-robot [[#13047](https://github.com/gardener/gardener/pull/13047)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `fluent/fluent-operator` from `v3.2.5` to `v4.0.9` by @nickytd [[#12998](https://github.com/gardener/gardener/pull/12998)]
- `[DEVELOPER]` An issue with the ssh tunnel in the extensions setup is fixed. by @axel7born [[#13019](https://github.com/gardener/gardener/pull/13019)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.1` to `1.82.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.2) by @gardener-ci-robot [[#13010](https://github.com/gardener/gardener/pull/13010)]
- `[DEVELOPER]` The optimistic defaulting of priorities for `MachineDeployment`s was introduced again. by @tobschli [[#13014](https://github.com/gardener/gardener/pull/13014)]
- `[OPERATOR]` Remove migration code to clean up obsolete Prometheus volumes by @vicwicker [[#13021](https://github.com/gardener/gardener/pull/13021)]
- `[USER]` Gardener API server now serves the OpenAPI v2 schema ( `/openapi/v2` endpoint) again and will keep on serving it until Gardener `v1.160`. In Gardener `v1.127.0`, the support for OpenAPI v2 schemas was removed. However, [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) does not yet support OpenAPI v3 schema. by @shafeeqes [[#12987](https://github.com/gardener/gardener/pull/12987)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.129.0</code></b></summary>

# [github.com/gardener/gardener:v1.129.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The GA-ed and unconditionally enabled `UseNamespacedCloudProfile` feature gates is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @LucaBernstein [[#13020](https://github.com/gardener/gardener/pull/13020)]
- `[OPERATOR]` It is not allowed anymore to specify the following characters: [, #], as well as capitalized letters, within the entries of the Garden's `.spec.virtualCluster.Gardener.apiServer.watchCacheSizes.resources[].apiGroup` field. Please update your Gardens accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[USER]` It is not allowed anymore to specify the following characters: [, #], as well as capitalized letters, within the entries of the Shoot's `.spec.kubernetes.kubeAPIServer.watchCacheSizes.resources[].apiGroup` field. Please update your Shoots accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[OPERATOR]` The GA-ed and unconditionally enabled `CredentialsRotationWithoutWorkersRollout` feature gates is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @rfranzke [[#13041](https://github.com/gardener/gardener/pull/13041)]
- `[OPERATOR]` It is not allowed anymore to specify the following characters: [,. #], as well as capitalized letters, within the entries of the Garden's `.spec.virtualCluster.Gardener.apiServer.watchCacheSizes.resources[].resource` field. Please update your Gardens accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[USER]` The `.status.credentials.rotation.kubeconfig` field in the `Shoot` API is removed. This field has been deprecated since Gardener v1.114.0. by @shafeeqes [[#13037](https://github.com/gardener/gardener/pull/13037)]
- `[USER]` It is not allowed anymore to specify the following characters: [,. #], as well as capitalized letters, within the entries of the Shoot's `.spec.kubernetes.kubeAPIServer.watchCacheSizes.resources[].resource` field. Please update your Shoots accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]

## 📰 Noteworthy
- `[USER]` `ViewerKubeconfig` is no longer using solely the group `gardener.cloud:system:viewers` to grant viewer access to the shoot cluster, instead it is now granted only to Gardener system viewer users. Project Viewer users are granted viewer access to the shoot cluster via the group `gardener.cloud:project:viewers`. by @vpnachev [[#12674](https://github.com/gardener/gardener/pull/12674)]
- `[USER]` `AdminKubeconfig` is no longer using the group `system:masters` to grant admin access to the shoot cluster, instead it is now using the groups `gardener.cloud:system:admins` granted to Gardener system admins and `gardener.cloud:project:admins` granted to Gardener Project admins. by @vpnachev [[#12674](https://github.com/gardener/gardener/pull/12674)]

## ✨ New Features
- `[OPERATOR]` gardener-admission-controller now supports enabling the [`OwnerReferencesPermissionEnforcement` admission plugin](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#ownerreferencespermissionenforcement) for the virtual kube-apiserver. Previously, it was rejecting requests from gardenlet because the `shoots/finalizers` and `backupbuckets/finalizers` subresources were not allowed. by @gardener-ci-robot [[#13059](https://github.com/gardener/gardener/pull/13059)]
- `[OPERATOR]` The `OperatingSystemConfig` containerd config was enhanced to specify the [`override_path`](https://github.com/containerd/containerd/blob/cef8ce2ecb572bc8026323c0c3dfad9953b952f6/docs/hosts.md?override_path#override_path-field) option which is respected when generating the `hosts.toml` file for the respective upstream config. by @timuthy [[#13002](https://github.com/gardener/gardener/pull/13002)]

## 🐛 Bug Fixes
- `[USER]` A bug causing finalizers to not be removed from `Secret`s when such are deleted and referenced by both a `CredentialsBinding` and a `SecretBinding` is fixed. by @gardener-ci-robot [[#13075](https://github.com/gardener/gardener/pull/13075)]
- `[OPERATOR]` Fixed an issue that caused `Machine`s to be duplicated when being saved in the `ShootState`. This caused the `ShootState` to grow exponentially large and fail to be created. The issue could occur when there are multiple `MachineDeployments` created for the `Shoot`. by @gardener-ci-robot [[#13089](https://github.com/gardener/gardener/pull/13089)]
- `[OPERATOR]` A bug in the `gardenletdeployer` unable to handle backup credentials of type `WorkloadIdentity` has been fixed. by @gardener-ci-robot [[#13087](https://github.com/gardener/gardener/pull/13087)]
- `[OPERATOR]` Fixed the `alertmanager-garden` peer discovery service port names by @rickardsjp [[#12988](https://github.com/gardener/gardener/pull/12988)]
- `[DEVELOPER]` An issue preventing `extensions.gardener.cloud/v1alpha1.Bastion`s to be listed due to missing json tags is now fixed. by @gardener-ci-robot [[#13062](https://github.com/gardener/gardener/pull/13062)]
- `[DEVELOPER]` The `Priority` field for the `MachineDeployment` API is optional instead of required again. by @tobschli [[#13014](https://github.com/gardener/gardener/pull/13014)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.41.1` to `0.42.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.42.0) by @gardener-ci-robot [[#13009](https://github.com/gardener/gardener/pull/13009)]
- `[OPERATOR]` Revert server block import of coredns-custom configmap for node-local-dns. by @DockToFuture [[#13028](https://github.com/gardener/gardener/pull/13028)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.41` to `v7.5.42`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.42) by @gardener-ci-robot [[#13023](https://github.com/gardener/gardener/pull/13023)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.19.1` to `v0.20.0`. by @gardener-ci-robot [[#12980](https://github.com/gardener/gardener/pull/12980)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.26` to `v2.2.27`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.27) by @gardener-ci-robot [[#13022](https://github.com/gardener/gardener/pull/13022)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.13.2` to `v1.13.3`. by @gardener-ci-robot [[#13047](https://github.com/gardener/gardener/pull/13047)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `fluent/fluent-operator` from `v3.2.5` to `v4.0.9` by @nickytd [[#12998](https://github.com/gardener/gardener/pull/12998)]
- `[DEVELOPER]` An issue with the ssh tunnel in the extensions setup is fixed. by @axel7born [[#13019](https://github.com/gardener/gardener/pull/13019)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.1` to `1.82.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.2) by @gardener-ci-robot [[#13010](https://github.com/gardener/gardener/pull/13010)]
- `[DEVELOPER]` The optimistic defaulting of priorities for `MachineDeployment`s was introduced again. by @tobschli [[#13014](https://github.com/gardener/gardener/pull/13014)]
- `[OPERATOR]` Remove migration code to clean up obsolete Prometheus volumes by @vicwicker [[#13021](https://github.com/gardener/gardener/pull/13021)]
- `[USER]` Gardener API server now serves the OpenAPI v2 schema ( `/openapi/v2` endpoint) again and will keep on serving it until Gardener `v1.160`. In Gardener `v1.127.0`, the support for OpenAPI v2 schemas was removed. However, [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) does not yet support OpenAPI v3 schema. by @shafeeqes [[#12987](https://github.com/gardener/gardener/pull/12987)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.0`


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.33.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.33.0]

## ✨ New Features
- `[USER]` `shoot-oidc-service` no longer supports Shoots with Кubernetes version <= 1.28. by @georgibaltiev [[#340](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/340)]

## 🏃 Others
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#333](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/333)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-shoot-oidc-service/blob/master/example/extension.yaml) by @timuthy [[#353](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/353)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#365](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/365)]
- `[OPERATOR]` Test results are now exported as inlined ocm-resource. by @heldkat [[#342](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/342)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.33.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.33.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.23.0</code></b></summary>

## What's Changed
* 🤖 Update module github.com/gardener/gardener to v1.128.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/191
* 🤖 Update fluxcd (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/180
* 🤖 Update module github.com/gardener/gardener to v1.129.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/194
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.26.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/192
* 🤖 Update k8s and gardener packages to v0.34.1 (patch) - autoclosed by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/190
* 🤖 Update k8s.io/utils digest to bc988d5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/193


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.22.0...v0.23.0

</details>

<details>
<summary><b>Update acl to <code>1.13.0</code></b></summary>

<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### 🤖 Dependencies
* Update module github.com/gardener/gardener to v1.128.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/177
* Update k8s.io/utils digest to bc988d5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/179
* Update module github.com/gardener/gardener to v1.128.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/181
* Update module sigs.k8s.io/controller-runtime to v0.22.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/185
* Update dependency go to v1.25.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/186
* Update module github.com/onsi/ginkgo/v2 to v2.26.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/180
* Update module golang.org/x/tools to v0.38.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/187
* Update module github.com/gardener/gardener to v1.129.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/182
### ℹ️ Other Changes
* chore(vpa): Update the extension `VPA` resources to use update mode `Recreate` by @vitanovs in https://github.com/stackitcloud/gardener-extension-acl/pull/178
* Add controls for Pod Security Standards `restricted` policy by @relusc in https://github.com/stackitcloud/gardener-extension-acl/pull/184

## New Contributors
* @vitanovs made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/178
* @relusc made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/184

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.12.0...v1.13.0

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.129.1</code></b></summary>

# [github.com/gardener/gardener:v1.129.1]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed which prevented L7 load-balancing for kube-apiservers to work correctly on Seeds/Gardens where topology-aware-routing is activated. by @@oliver-goetz [[#13142](https://github.com/gardener/gardener/pull/13142)]

## 🏃 Others
- `[OPERATOR]` Logging stack configuration is now tuned for high-throughput scenarios. It brings changes in local file system resource utilization, addressing potential node disk pressure occurrences. by @@nickytd [[#13139](https://github.com/gardener/gardener/pull/13139)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.21` to `v0.8.22`. by @@gardener-ci-robot [[#13099](https://github.com/gardener/gardener/pull/13099)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.129.1</code></b></summary>

# [github.com/gardener/gardener:v1.129.1]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed which prevented L7 load-balancing for kube-apiservers to work correctly on Seeds/Gardens where topology-aware-routing is activated. by @@oliver-goetz [[#13142](https://github.com/gardener/gardener/pull/13142)]

## 🏃 Others
- `[OPERATOR]` Logging stack configuration is now tuned for high-throughput scenarios. It brings changes in local file system resource utilization, addressing potential node disk pressure occurrences. by @@nickytd [[#13139](https://github.com/gardener/gardener/pull/13139)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.21` to `v0.8.22`. by @@gardener-ci-robot [[#13099](https://github.com/gardener/gardener/pull/13099)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.129.1</code></b></summary>

# [github.com/gardener/gardener:v1.129.1]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed which prevented L7 load-balancing for kube-apiservers to work correctly on Seeds/Gardens where topology-aware-routing is activated. by @@oliver-goetz [[#13142](https://github.com/gardener/gardener/pull/13142)]

## 🏃 Others
- `[OPERATOR]` Logging stack configuration is now tuned for high-throughput scenarios. It brings changes in local file system resource utilization, addressing potential node disk pressure occurrences. by @@nickytd [[#13139](https://github.com/gardener/gardener/pull/13139)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.21` to `v0.8.22`. by @@gardener-ci-robot [[#13099](https://github.com/gardener/gardener/pull/13099)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.1`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.25.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.25.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20251006.0. by @gardener-github-actions[bot] [[#297](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/297)]
- `[OPERATOR]` It is now possible to specify runsc's `panic-signal` setting through the gVisor providerConfig. by @MrBatschner [[#296](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/296)]

## 🏃 Others
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#290](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/290)]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.25.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.25.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.25.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.54.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-cert-service:v1.54.0]

## ✨ New Features
- `[USER]` Validation for secrets of ACME issuers specified in shoot manifest is performed on reconciling the extension.  
  Both the `privateKey` secret of the ACME issuer and the optional external account binding secret are validated for the allowed data keys and values. by @MartinWeindel [[#458](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/458)]

## 🐛 Bug Fixes
- `[OPERATOR]` Add networking policy label to allow access to virtual garden if the `controlplane-cert-service` extension is enabled and Garden runtime cluster and soil are the same. by @MartinWeindel [[#469](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/469)]

## 🏃 Others
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#470](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/470)]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.54.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.54.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.82.4</code></b></summary>



## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.4`


</details>

<details>
<summary><b>Update dashboard to <code>1.82.4</code></b></summary>



## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.4`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.29.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.29.0]

## ⚠️ Breaking Changes
- `[USER]` The `infoblox-dns` provider is deprecated and will be removed end of 2025. by @MartinWeindel [[#645](https://github.com/gardener/external-dns-management/pull/645)]
- `[OPERATOR]` The `infoblox-dns` provider is deprecated and will be removed end of 2025. by @MartinWeindel [[#645](https://github.com/gardener/external-dns-management/pull/645)]

## ✨ New Features
- `[OPERATOR]` Support command line option `--kubeconfig.crds-shoot-no-cleanup-label` to allow to set the label `shoot.gardener.cloud/no-cleanup=true`  for deployed CRDs. by @MartinWeindel [[#674](https://github.com/gardener/external-dns-management/pull/674)]

## 🐛 Bug Fixes
- `[OPERATOR]` [netlify-dns] Allow underscore character on validating the API token for netlify. by @MartinWeindel [[#644](https://github.com/gardener/external-dns-management/pull/644)]

## 🏃 Others
- `[OPERATOR]` Migrate the workload VPA from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#671](https://github.com/gardener/external-dns-management/pull/671)]
- `[OPERATOR]` Update cloudflare-dns to use the Version 6 of `github.com/cloudflare/cloudflare-go/v6`. by @MartinWeindel [[#640](https://github.com/gardener/external-dns-management/pull/640)]
- `[OPERATOR]` Aligned zone metrics handling in Azure DNS and Azure Private DNS providers with all other DNS providers. by @marc1404 [[#667](https://github.com/gardener/external-dns-management/pull/667)]
- `[OPERATOR]` Simplify build workflow, drop redundant `check` step. by @MartinWeindel [[#658](https://github.com/gardener/external-dns-management/pull/658)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.29.0`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.29.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.34.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-gardenlinux:v0.34.0]

## 🏃 Others
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#301](https://github.com/gardener/gardener-extension-os-gardenlinux/pull/301)]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.34.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.34.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.33.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-ubuntu:v1.33.0]

## 🏃 Others
- `[OPERATOR]` Add missing securityContext controls in order to comply with the restricted Pod Security Standards policy. by @mstueer [[#251](https://github.com/gardener/gardener-extension-os-ubuntu/pull/251)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#247](https://github.com/gardener/gardener-extension-os-ubuntu/pull/247)]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.33.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.33.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.55.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.55.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Update mcm image to v0.17.1 by @hebelsan [[#1324](https://github.com/gardener/gardener-extension-provider-azure/pull/1324)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.55.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.55.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.55.1`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.55.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.55.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.129.2</code></b></summary>

# [github.com/gardener/gardener:v1.129.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug which deactivates topology aware routing for kube-apiservers when l7 load-balancing is not active has been fixed. by @oliver-goetz [[#13186](https://github.com/gardener/gardener/pull/13186)]
- `[USER]` An upstream issue causing kube-proxy to log thousands of log entries per second is now mitigated by reducing the kube-proxy verbosity level when running an affected Kubernetes version in the range [1.33.0, 1.33.6). For more details, see http://issues.k8s.io/132678. by @ialidzhikov [[#13193](https://github.com/gardener/gardener/pull/13193)]
- `[OPERATOR]` The `quay.io/kiwigrid/k8s-sidecar` image is downgraded to `v1.30.9` to prevent a regression that causes Plutono dashboards to not be loaded. by @rickardsjp [[#13199](https://github.com/gardener/gardener/pull/13199)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.129.2</code></b></summary>

# [github.com/gardener/gardener:v1.129.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug which deactivates topology aware routing for kube-apiservers when l7 load-balancing is not active has been fixed. by @oliver-goetz [[#13186](https://github.com/gardener/gardener/pull/13186)]
- `[USER]` An upstream issue causing kube-proxy to log thousands of log entries per second is now mitigated by reducing the kube-proxy verbosity level when running an affected Kubernetes version in the range [1.33.0, 1.33.6). For more details, see http://issues.k8s.io/132678. by @ialidzhikov [[#13193](https://github.com/gardener/gardener/pull/13193)]
- `[OPERATOR]` The `quay.io/kiwigrid/k8s-sidecar` image is downgraded to `v1.30.9` to prevent a regression that causes Plutono dashboards to not be loaded. by @rickardsjp [[#13199](https://github.com/gardener/gardener/pull/13199)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.129.2</code></b></summary>

# [github.com/gardener/gardener:v1.129.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug which deactivates topology aware routing for kube-apiservers when l7 load-balancing is not active has been fixed. by @oliver-goetz [[#13186](https://github.com/gardener/gardener/pull/13186)]
- `[USER]` An upstream issue causing kube-proxy to log thousands of log entries per second is now mitigated by reducing the kube-proxy verbosity level when running an affected Kubernetes version in the range [1.33.0, 1.33.6). For more details, see http://issues.k8s.io/132678. by @ialidzhikov [[#13193](https://github.com/gardener/gardener/pull/13193)]
- `[OPERATOR]` The `quay.io/kiwigrid/k8s-sidecar` image is downgraded to `v1.30.9` to prevent a regression that causes Plutono dashboards to not be loaded. by @rickardsjp [[#13199](https://github.com/gardener/gardener/pull/13199)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.2`


</details>

<details>
<summary><b>Update networking-calico to <code>1.52.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-calico:v1.52.0]

## 🏃 Others
- `[OPERATOR]` Add `multus-cni` DaemonSet to enable attaching multiple network interfaces to pods by @defo89 [[#719](https://github.com/gardener/gardener-extension-networking-calico/pull/719)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#723](https://github.com/gardener/gardener-extension-networking-calico/pull/723)]
- `[OPERATOR]` `minAllowed` can now be specified if the autoscaling mode `vpa` is used. by @ScheererJ [[#729](https://github.com/gardener/gardener-extension-networking-calico/pull/729)]

## 📖 Documentation
- `[OPERATOR]` fix vethMTU example by @RiRa12621 [[#718](https://github.com/gardener/gardener-extension-networking-calico/pull/718)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.52.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.52.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.52.0`
## Container (OCI) Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.52.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.52.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.44.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-cilium:v1.44.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Adapt `ScrapeConfig` to more picky `prometheus-operator` `v0.76.0` to support new gardener releases. by @ScheererJ [[#631](https://github.com/gardener/gardener-extension-networking-cilium/pull/631)]

## 🏃 Others
- `[OPERATOR]` Mutate bind address for node-local-dns sidecar container. by @DockToFuture [[#642](https://github.com/gardener/gardener-extension-networking-cilium/pull/642)]
- `[OPERATOR]` Allows enabling policy audit mode in networking-cilium extension. by @steinwelberg [[#624](https://github.com/gardener/gardener-extension-networking-cilium/pull/624)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#635](https://github.com/gardener/gardener-extension-networking-cilium/pull/635)]
- `[USER]` An issue is fixed, that the cilium CA is never renewed. by @axel7born [[#639](https://github.com/gardener/gardener-extension-networking-cilium/pull/639)]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.44.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.44.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.44.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.44.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.44.0`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.30.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-problemdetector:v0.30.0]

## 🏃 Others
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#283](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/pull/283)]

## Helm Charts
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.30.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.30.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.130.0</code></b></summary>

# [github.com/gardener/gardener:v1.130.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The following `Shoot` fields are now validated:  
  - `.spec.kubernetes.verticalPodAutoscaler.evictionRateBurst` must be non-negative.  
  - `.spec.kubernetes.verticalPodAutoscaler.evictionTolerance` is limited in [0, 1) interval.  
  - `.spec.kubernetes.verticalPodAutoscaler.recommendationMarginFraction` is limited in [0, 1) interval.  
  - `.spec.kubernetes.kubeScheduler.kubeMaxPDVols` must be a positive number.  
  - `.spec.tolerations[]` `key` and `value` are validated similar to Kubernetes [Tolerations](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.33/#toleration-v1-core).  
  - `.spec.schedulerName` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names).  
  - `.spec.extensions[].type` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names).  
  - `.spec.provider.type` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names). by @dimitar-kostadinov [[#12844](https://github.com/gardener/gardener/pull/12844)]

## 📰 Noteworthy
- `[DEVELOPER]` The Gardener reviewer groups have been refined and can be found in the [`OWNERS_ALIASES`](https://github.com/gardener/gardener/blob/master/OWNERS_ALIASES) file. This will serve as the foundation for finding appropriate reviewers for the respective areas in the future. by @timuthy [[#13024](https://github.com/gardener/gardener/pull/13024)]

## ✨ New Features
- `[DEVELOPER]` Shoot advertised addresses are now configurable by extension components for Shoot Ingress resources. For more details, see [Shoot Advertised Addresses](https://github.com/gardener/gardener/blob/v1.130.0/docs/development/shoot-advertised-addresses.md). by @dnaeon [[#13043](https://github.com/gardener/gardener/pull/13043)]
- `[OPERATOR]` `gardener-operator` now prevents deletion of the `garden` namespace in the runtime cluster while `operator.gardener.cloud/v1alpha1.Garden` resources still exist. by @rfranzke [[#13101](https://github.com/gardener/gardener/pull/13101)]

## 🐛 Bug Fixes
- `[OPERATOR]` The `quay.io/kiwigrid/k8s-sidecar` image is downgraded to `v1.30.9` to prevent a regression that causes Plutono dashboards to not be loaded. by @rickardsjp [[#13187](https://github.com/gardener/gardener/pull/13187)]
- `[OPERATOR]` A bug which deactivates topology aware routing for kube-apiservers when l7 load-balancing is not active has been fixed. by @oliver-goetz [[#13185](https://github.com/gardener/gardener/pull/13185)]
- `[USER]` Fixes an issue where connecting to the kube-apiserver via the seed ingress URL did not work when the shoot used an exposure class. by @axel7born [[#13055](https://github.com/gardener/gardener/pull/13055)]
- `[USER]` An upstream issue causing kube-proxy to log thousands of log entries per second is now mitigated by reducing the kube-proxy verbosity level when running an affected Kubernetes version in the range [1.33.0, 1.33.6). For more details, see http://issues.k8s.io/132678. by @ialidzhikov [[#13192](https://github.com/gardener/gardener/pull/13192)]
- `[DEVELOPER]` In the local setup, the hosts file entry for `garden.local.gardener.cloud` is written again upon node reboot. by @LucaBernstein [[#13132](https://github.com/gardener/gardener/pull/13132)]
- `[OPERATOR]` A bug has been fixed which prevented L7 load-balancing for kube-apiservers to work correctly on Seeds/Gardens where topology-aware-routing is activated. by @oliver-goetz [[#13081](https://github.com/gardener/gardener/pull/13081)]
- `[DEVELOPER]` A default `KUBECONFIG` is now set when running `make seed-{up|down}`. by @oliver-goetz [[#13071](https://github.com/gardener/gardener/pull/13071)]
- `[DEVELOPER]` The testmachinery tests for control plane migration were fixed so that the checks if nodes are kept after control plane migration are executed. by @plkokanov [[#13057](https://github.com/gardener/gardener/pull/13057)]
- `[OPERATOR]` The `worker-pools-operatingsystemconfig-hashes` secret is now restored in the `Shoot`'s control plane during the restore phase of control plane migration. This fixes an issue which caused node rollouts to happen during control plane migration when the `NewWorkerPoolHash` feature gate is enabled. by @plkokanov [[#13056](https://github.com/gardener/gardener/pull/13056)]

## 🏃 Others
- `[OPERATOR]` Use aggregate Prometheus internal service for federation from the garden Prometheus when the runtime cluster is a seed by @vicwicker [[#13066](https://github.com/gardener/gardener/pull/13066)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.3` to `1.82.4`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.4) by @gardener-ci-robot [[#13157](https://github.com/gardener/gardener/pull/13157)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.21` to `v0.8.22`. by @gardener-ci-robot [[#13032](https://github.com/gardener/gardener/pull/13032)]
- `[OPERATOR]` Introduces feature gate `UseUnifiedHTTPProxy` for unified HTTP proxy infrastructure. by @hown3d [[#13003](https://github.com/gardener/gardener/pull/13003)]
- `[DEVELOPER]` The custom client certificate parsing in `IstioTLSTermination` lua scripts was replaced with `parsedSubjectPeerCertificate()` envoy function. by @oliver-goetz [[#13128](https://github.com/gardener/gardener/pull/13128)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/cortexproject/cortex` from `v1.19.0` to `v1.19.1`. by @gardener-ci-robot [[#13148](https://github.com/gardener/gardener/pull/13148)]
- `[OPERATOR]` The following `kube-apiserver` metrics are now collected, which might be handy to optimize Priority and Fairness usage:  
  - `apiserver_flowcontrol_current_inqueue_requests`  
  - `apiserver_flowcontrol_current_executing_requests`  
  - `apiserver_flowcontrol_current_executing_seats`  
  - `apiserver_flowcontrol_request_wait_duration_seconds`  
  - `apiserver_flowcontrol_nominal_limit_seats`  
  - `apiserver_flowcontrol_request_concurrency_in_use`  
  - `apiserver_flowcontrol_priority_level_request_utilization`  
  - `apiserver_flowcontrol_priority_level_seat_utilization` by @dimakow [[#13000](https://github.com/gardener/gardener/pull/13000)]
- `[OPERATOR]` Add support for gzip compression to metrics endpoint of istio ingress gateway. by @ScheererJ [[#13137](https://github.com/gardener/gardener/pull/13137)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.5.0` to `v1.6.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.6.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.5.0` to `v1.6.0`. by @ashwani2k [[#13127](https://github.com/gardener/gardener/pull/13127)]
- `[OPERATOR]` `gardener-node-agent-init` now outputs logs to journal and console (`/dev/console`). by @RAPSNX [[#12822](https://github.com/gardener/gardener/pull/12822)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.1` to `1.27.2`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.1` to `1.27.2`. by @gardener-ci-robot [[#13151](https://github.com/gardener/gardener/pull/13151)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.2` to `1.82.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.3) by @gardener-ci-robot [[#13069](https://github.com/gardener/gardener/pull/13069)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.32.0` to `v0.33.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.33.0) by @shreyas-s-rao [[#13172](https://github.com/gardener/gardener/pull/13172)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.4.2` to `1.5.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.4.2` to `1.5.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.4.2` to `1.5.1`. by @gardener-ci-robot [[#13095](https://github.com/gardener/gardener/pull/13095)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.0` to `1.27.1`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.0` to `1.27.1`. by @axel7born [[#13004](https://github.com/gardener/gardener/pull/13004)]
- `[OPERATOR]` New panels added in VPA Recommendations Plutono dashboard to track number of pods with deviations from their CPU recommendation. by @RadaBDimitrova [[#12898](https://github.com/gardener/gardener/pull/12898)]
- `[OPERATOR]` VerticalPodAutoscaler resources, deployed by Gardener, are now instrumented to switch from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#13046](https://github.com/gardener/gardener/pull/13046)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `open-telemetry/opentelemetry-operator` from `v0.129.1` to `v0.136.0`. [Release Notes](https://redirect.github.com/open-telemetry/opentelemetry-operator/releases/tag/v0.136.0) by @rrhubenov [[#13106](https://github.com/gardener/gardener/pull/13106)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.10` to `1.30.11`. by @gardener-ci-robot [[#13149](https://github.com/gardener/gardener/pull/13149)]
- `[OPERATOR]` Logging stack configuration is now tuned for high-throughput scenarios. It brings changes in local file system resource utilization, addressing potential node disk pressure occurrences. by @nickytd [[#13116](https://github.com/gardener/gardener/pull/13116)]
- `[OPERATOR]` Add IOPS metrics to etcd dashboard by @voelzmo [[#13146](https://github.com/gardener/gardener/pull/13146)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.130.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.130.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.130.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.130.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.130.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.130.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.130.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.130.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.130.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.130.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.130.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.130.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.130.0</code></b></summary>

# [github.com/gardener/gardener:v1.130.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The following `Shoot` fields are now validated:  
  - `.spec.kubernetes.verticalPodAutoscaler.evictionRateBurst` must be non-negative.  
  - `.spec.kubernetes.verticalPodAutoscaler.evictionTolerance` is limited in [0, 1) interval.  
  - `.spec.kubernetes.verticalPodAutoscaler.recommendationMarginFraction` is limited in [0, 1) interval.  
  - `.spec.kubernetes.kubeScheduler.kubeMaxPDVols` must be a positive number.  
  - `.spec.tolerations[]` `key` and `value` are validated similar to Kubernetes [Tolerations](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.33/#toleration-v1-core).  
  - `.spec.schedulerName` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names).  
  - `.spec.extensions[].type` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names).  
  - `.spec.provider.type` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names). by @dimitar-kostadinov [[#12844](https://github.com/gardener/gardener/pull/12844)]

## 📰 Noteworthy
- `[DEVELOPER]` The Gardener reviewer groups have been refined and can be found in the [`OWNERS_ALIASES`](https://github.com/gardener/gardener/blob/master/OWNERS_ALIASES) file. This will serve as the foundation for finding appropriate reviewers for the respective areas in the future. by @timuthy [[#13024](https://github.com/gardener/gardener/pull/13024)]

## ✨ New Features
- `[DEVELOPER]` Shoot advertised addresses are now configurable by extension components for Shoot Ingress resources. For more details, see [Shoot Advertised Addresses](https://github.com/gardener/gardener/blob/v1.130.0/docs/development/shoot-advertised-addresses.md). by @dnaeon [[#13043](https://github.com/gardener/gardener/pull/13043)]
- `[OPERATOR]` `gardener-operator` now prevents deletion of the `garden` namespace in the runtime cluster while `operator.gardener.cloud/v1alpha1.Garden` resources still exist. by @rfranzke [[#13101](https://github.com/gardener/gardener/pull/13101)]

## 🐛 Bug Fixes
- `[OPERATOR]` The `quay.io/kiwigrid/k8s-sidecar` image is downgraded to `v1.30.9` to prevent a regression that causes Plutono dashboards to not be loaded. by @rickardsjp [[#13187](https://github.com/gardener/gardener/pull/13187)]
- `[OPERATOR]` A bug which deactivates topology aware routing for kube-apiservers when l7 load-balancing is not active has been fixed. by @oliver-goetz [[#13185](https://github.com/gardener/gardener/pull/13185)]
- `[USER]` Fixes an issue where connecting to the kube-apiserver via the seed ingress URL did not work when the shoot used an exposure class. by @axel7born [[#13055](https://github.com/gardener/gardener/pull/13055)]
- `[USER]` An upstream issue causing kube-proxy to log thousands of log entries per second is now mitigated by reducing the kube-proxy verbosity level when running an affected Kubernetes version in the range [1.33.0, 1.33.6). For more details, see http://issues.k8s.io/132678. by @ialidzhikov [[#13192](https://github.com/gardener/gardener/pull/13192)]
- `[DEVELOPER]` In the local setup, the hosts file entry for `garden.local.gardener.cloud` is written again upon node reboot. by @LucaBernstein [[#13132](https://github.com/gardener/gardener/pull/13132)]
- `[OPERATOR]` A bug has been fixed which prevented L7 load-balancing for kube-apiservers to work correctly on Seeds/Gardens where topology-aware-routing is activated. by @oliver-goetz [[#13081](https://github.com/gardener/gardener/pull/13081)]
- `[DEVELOPER]` A default `KUBECONFIG` is now set when running `make seed-{up|down}`. by @oliver-goetz [[#13071](https://github.com/gardener/gardener/pull/13071)]
- `[DEVELOPER]` The testmachinery tests for control plane migration were fixed so that the checks if nodes are kept after control plane migration are executed. by @plkokanov [[#13057](https://github.com/gardener/gardener/pull/13057)]
- `[OPERATOR]` The `worker-pools-operatingsystemconfig-hashes` secret is now restored in the `Shoot`'s control plane during the restore phase of control plane migration. This fixes an issue which caused node rollouts to happen during control plane migration when the `NewWorkerPoolHash` feature gate is enabled. by @plkokanov [[#13056](https://github.com/gardener/gardener/pull/13056)]

## 🏃 Others
- `[OPERATOR]` Use aggregate Prometheus internal service for federation from the garden Prometheus when the runtime cluster is a seed by @vicwicker [[#13066](https://github.com/gardener/gardener/pull/13066)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.3` to `1.82.4`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.4) by @gardener-ci-robot [[#13157](https://github.com/gardener/gardener/pull/13157)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.21` to `v0.8.22`. by @gardener-ci-robot [[#13032](https://github.com/gardener/gardener/pull/13032)]
- `[OPERATOR]` Introduces feature gate `UseUnifiedHTTPProxy` for unified HTTP proxy infrastructure. by @hown3d [[#13003](https://github.com/gardener/gardener/pull/13003)]
- `[DEVELOPER]` The custom client certificate parsing in `IstioTLSTermination` lua scripts was replaced with `parsedSubjectPeerCertificate()` envoy function. by @oliver-goetz [[#13128](https://github.com/gardener/gardener/pull/13128)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/cortexproject/cortex` from `v1.19.0` to `v1.19.1`. by @gardener-ci-robot [[#13148](https://github.com/gardener/gardener/pull/13148)]
- `[OPERATOR]` The following `kube-apiserver` metrics are now collected, which might be handy to optimize Priority and Fairness usage:  
  - `apiserver_flowcontrol_current_inqueue_requests`  
  - `apiserver_flowcontrol_current_executing_requests`  
  - `apiserver_flowcontrol_current_executing_seats`  
  - `apiserver_flowcontrol_request_wait_duration_seconds`  
  - `apiserver_flowcontrol_nominal_limit_seats`  
  - `apiserver_flowcontrol_request_concurrency_in_use`  
  - `apiserver_flowcontrol_priority_level_request_utilization`  
  - `apiserver_flowcontrol_priority_level_seat_utilization` by @dimakow [[#13000](https://github.com/gardener/gardener/pull/13000)]
- `[OPERATOR]` Add support for gzip compression to metrics endpoint of istio ingress gateway. by @ScheererJ [[#13137](https://github.com/gardener/gardener/pull/13137)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.5.0` to `v1.6.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.6.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.5.0` to `v1.6.0`. by @ashwani2k [[#13127](https://github.com/gardener/gardener/pull/13127)]
- `[OPERATOR]` `gardener-node-agent-init` now outputs logs to journal and console (`/dev/console`). by @RAPSNX [[#12822](https://github.com/gardener/gardener/pull/12822)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.1` to `1.27.2`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.1` to `1.27.2`. by @gardener-ci-robot [[#13151](https://github.com/gardener/gardener/pull/13151)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.2` to `1.82.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.3) by @gardener-ci-robot [[#13069](https://github.com/gardener/gardener/pull/13069)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.32.0` to `v0.33.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.33.0) by @shreyas-s-rao [[#13172](https://github.com/gardener/gardener/pull/13172)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.4.2` to `1.5.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.4.2` to `1.5.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.4.2` to `1.5.1`. by @gardener-ci-robot [[#13095](https://github.com/gardener/gardener/pull/13095)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.0` to `1.27.1`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.0` to `1.27.1`. by @axel7born [[#13004](https://github.com/gardener/gardener/pull/13004)]
- `[OPERATOR]` New panels added in VPA Recommendations Plutono dashboard to track number of pods with deviations from their CPU recommendation. by @RadaBDimitrova [[#12898](https://github.com/gardener/gardener/pull/12898)]
- `[OPERATOR]` VerticalPodAutoscaler resources, deployed by Gardener, are now instrumented to switch from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#13046](https://github.com/gardener/gardener/pull/13046)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `open-telemetry/opentelemetry-operator` from `v0.129.1` to `v0.136.0`. [Release Notes](https://redirect.github.com/open-telemetry/opentelemetry-operator/releases/tag/v0.136.0) by @rrhubenov [[#13106](https://github.com/gardener/gardener/pull/13106)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.10` to `1.30.11`. by @gardener-ci-robot [[#13149](https://github.com/gardener/gardener/pull/13149)]
- `[OPERATOR]` Logging stack configuration is now tuned for high-throughput scenarios. It brings changes in local file system resource utilization, addressing potential node disk pressure occurrences. by @nickytd [[#13116](https://github.com/gardener/gardener/pull/13116)]
- `[OPERATOR]` Add IOPS metrics to etcd dashboard by @voelzmo [[#13146](https://github.com/gardener/gardener/pull/13146)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.130.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.130.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.130.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.130.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.130.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.130.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.130.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.130.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.130.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.130.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.130.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.130.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.130.0</code></b></summary>

# [github.com/gardener/gardener:v1.130.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The following `Shoot` fields are now validated:  
  - `.spec.kubernetes.verticalPodAutoscaler.evictionRateBurst` must be non-negative.  
  - `.spec.kubernetes.verticalPodAutoscaler.evictionTolerance` is limited in [0, 1) interval.  
  - `.spec.kubernetes.verticalPodAutoscaler.recommendationMarginFraction` is limited in [0, 1) interval.  
  - `.spec.kubernetes.kubeScheduler.kubeMaxPDVols` must be a positive number.  
  - `.spec.tolerations[]` `key` and `value` are validated similar to Kubernetes [Tolerations](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.33/#toleration-v1-core).  
  - `.spec.schedulerName` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names).  
  - `.spec.extensions[].type` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names).  
  - `.spec.provider.type` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names). by @dimitar-kostadinov [[#12844](https://github.com/gardener/gardener/pull/12844)]

## 📰 Noteworthy
- `[DEVELOPER]` The Gardener reviewer groups have been refined and can be found in the [`OWNERS_ALIASES`](https://github.com/gardener/gardener/blob/master/OWNERS_ALIASES) file. This will serve as the foundation for finding appropriate reviewers for the respective areas in the future. by @timuthy [[#13024](https://github.com/gardener/gardener/pull/13024)]

## ✨ New Features
- `[DEVELOPER]` Shoot advertised addresses are now configurable by extension components for Shoot Ingress resources. For more details, see [Shoot Advertised Addresses](https://github.com/gardener/gardener/blob/v1.130.0/docs/development/shoot-advertised-addresses.md). by @dnaeon [[#13043](https://github.com/gardener/gardener/pull/13043)]
- `[OPERATOR]` `gardener-operator` now prevents deletion of the `garden` namespace in the runtime cluster while `operator.gardener.cloud/v1alpha1.Garden` resources still exist. by @rfranzke [[#13101](https://github.com/gardener/gardener/pull/13101)]

## 🐛 Bug Fixes
- `[OPERATOR]` The `quay.io/kiwigrid/k8s-sidecar` image is downgraded to `v1.30.9` to prevent a regression that causes Plutono dashboards to not be loaded. by @rickardsjp [[#13187](https://github.com/gardener/gardener/pull/13187)]
- `[OPERATOR]` A bug which deactivates topology aware routing for kube-apiservers when l7 load-balancing is not active has been fixed. by @oliver-goetz [[#13185](https://github.com/gardener/gardener/pull/13185)]
- `[USER]` Fixes an issue where connecting to the kube-apiserver via the seed ingress URL did not work when the shoot used an exposure class. by @axel7born [[#13055](https://github.com/gardener/gardener/pull/13055)]
- `[USER]` An upstream issue causing kube-proxy to log thousands of log entries per second is now mitigated by reducing the kube-proxy verbosity level when running an affected Kubernetes version in the range [1.33.0, 1.33.6). For more details, see http://issues.k8s.io/132678. by @ialidzhikov [[#13192](https://github.com/gardener/gardener/pull/13192)]
- `[DEVELOPER]` In the local setup, the hosts file entry for `garden.local.gardener.cloud` is written again upon node reboot. by @LucaBernstein [[#13132](https://github.com/gardener/gardener/pull/13132)]
- `[OPERATOR]` A bug has been fixed which prevented L7 load-balancing for kube-apiservers to work correctly on Seeds/Gardens where topology-aware-routing is activated. by @oliver-goetz [[#13081](https://github.com/gardener/gardener/pull/13081)]
- `[DEVELOPER]` A default `KUBECONFIG` is now set when running `make seed-{up|down}`. by @oliver-goetz [[#13071](https://github.com/gardener/gardener/pull/13071)]
- `[DEVELOPER]` The testmachinery tests for control plane migration were fixed so that the checks if nodes are kept after control plane migration are executed. by @plkokanov [[#13057](https://github.com/gardener/gardener/pull/13057)]
- `[OPERATOR]` The `worker-pools-operatingsystemconfig-hashes` secret is now restored in the `Shoot`'s control plane during the restore phase of control plane migration. This fixes an issue which caused node rollouts to happen during control plane migration when the `NewWorkerPoolHash` feature gate is enabled. by @plkokanov [[#13056](https://github.com/gardener/gardener/pull/13056)]

## 🏃 Others
- `[OPERATOR]` Use aggregate Prometheus internal service for federation from the garden Prometheus when the runtime cluster is a seed by @vicwicker [[#13066](https://github.com/gardener/gardener/pull/13066)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.3` to `1.82.4`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.4) by @gardener-ci-robot [[#13157](https://github.com/gardener/gardener/pull/13157)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.21` to `v0.8.22`. by @gardener-ci-robot [[#13032](https://github.com/gardener/gardener/pull/13032)]
- `[OPERATOR]` Introduces feature gate `UseUnifiedHTTPProxy` for unified HTTP proxy infrastructure. by @hown3d [[#13003](https://github.com/gardener/gardener/pull/13003)]
- `[DEVELOPER]` The custom client certificate parsing in `IstioTLSTermination` lua scripts was replaced with `parsedSubjectPeerCertificate()` envoy function. by @oliver-goetz [[#13128](https://github.com/gardener/gardener/pull/13128)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/cortexproject/cortex` from `v1.19.0` to `v1.19.1`. by @gardener-ci-robot [[#13148](https://github.com/gardener/gardener/pull/13148)]
- `[OPERATOR]` The following `kube-apiserver` metrics are now collected, which might be handy to optimize Priority and Fairness usage:  
  - `apiserver_flowcontrol_current_inqueue_requests`  
  - `apiserver_flowcontrol_current_executing_requests`  
  - `apiserver_flowcontrol_current_executing_seats`  
  - `apiserver_flowcontrol_request_wait_duration_seconds`  
  - `apiserver_flowcontrol_nominal_limit_seats`  
  - `apiserver_flowcontrol_request_concurrency_in_use`  
  - `apiserver_flowcontrol_priority_level_request_utilization`  
  - `apiserver_flowcontrol_priority_level_seat_utilization` by @dimakow [[#13000](https://github.com/gardener/gardener/pull/13000)]
- `[OPERATOR]` Add support for gzip compression to metrics endpoint of istio ingress gateway. by @ScheererJ [[#13137](https://github.com/gardener/gardener/pull/13137)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.5.0` to `v1.6.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.6.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.5.0` to `v1.6.0`. by @ashwani2k [[#13127](https://github.com/gardener/gardener/pull/13127)]
- `[OPERATOR]` `gardener-node-agent-init` now outputs logs to journal and console (`/dev/console`). by @RAPSNX [[#12822](https://github.com/gardener/gardener/pull/12822)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.1` to `1.27.2`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.1` to `1.27.2`. by @gardener-ci-robot [[#13151](https://github.com/gardener/gardener/pull/13151)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.2` to `1.82.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.3) by @gardener-ci-robot [[#13069](https://github.com/gardener/gardener/pull/13069)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.32.0` to `v0.33.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.33.0) by @shreyas-s-rao [[#13172](https://github.com/gardener/gardener/pull/13172)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.4.2` to `1.5.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.4.2` to `1.5.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.4.2` to `1.5.1`. by @gardener-ci-robot [[#13095](https://github.com/gardener/gardener/pull/13095)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.0` to `1.27.1`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.0` to `1.27.1`. by @axel7born [[#13004](https://github.com/gardener/gardener/pull/13004)]
- `[OPERATOR]` New panels added in VPA Recommendations Plutono dashboard to track number of pods with deviations from their CPU recommendation. by @RadaBDimitrova [[#12898](https://github.com/gardener/gardener/pull/12898)]
- `[OPERATOR]` VerticalPodAutoscaler resources, deployed by Gardener, are now instrumented to switch from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#13046](https://github.com/gardener/gardener/pull/13046)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `open-telemetry/opentelemetry-operator` from `v0.129.1` to `v0.136.0`. [Release Notes](https://redirect.github.com/open-telemetry/opentelemetry-operator/releases/tag/v0.136.0) by @rrhubenov [[#13106](https://github.com/gardener/gardener/pull/13106)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.10` to `1.30.11`. by @gardener-ci-robot [[#13149](https://github.com/gardener/gardener/pull/13149)]
- `[OPERATOR]` Logging stack configuration is now tuned for high-throughput scenarios. It brings changes in local file system resource utilization, addressing potential node disk pressure occurrences. by @nickytd [[#13116](https://github.com/gardener/gardener/pull/13116)]
- `[OPERATOR]` Add IOPS metrics to etcd dashboard by @voelzmo [[#13146](https://github.com/gardener/gardener/pull/13146)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.130.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.130.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.130.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.130.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.130.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.130.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.130.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.130.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.130.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.130.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.130.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.130.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.50.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.50.0]

## ✨ New Features
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to refer only to credentials of type `v1.Secret`. by @vpnachev [[#1150](https://github.com/gardener/gardener-extension-provider-openstack/pull/1150)]
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1174](https://github.com/gardener/gardener-extension-provider-openstack/pull/1174)]

## 🏃 Others
- `[OPERATOR]` Configure QPS + burst for CSI components by @hendrikKahl [[#1178](https://github.com/gardener/gardener-extension-provider-openstack/pull/1178)]
- `[OPERATOR]` Updated gardener to v1.128.3 by @hebelsan [[#1167](https://github.com/gardener/gardener-extension-provider-openstack/pull/1167)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.31.3 -> v1.31.4 (patch)  
    - cloud-controller-manager: v1.32.0 -> v1.32.1 (patch)  
    - cloud-controller-manager: v1.33.0 -> v1.33.1 (patch)  
    - csi-driver-cinder: v1.31.3 -> v1.31.4 (patch)  
    - csi-driver-cinder: v1.32.0 -> v1.32.1 (patch)  
    - csi-driver-cinder: v1.33.0 -> v1.33.1 (patch)  
    - csi-driver-manila: v1.31.3 -> v1.31.4 (patch)  
    - csi-driver-manila: v1.32.0 -> v1.32.1 (patch)  
    - csi-driver-manila: v1.33.0 -> v1.33.1 (patch)  
    - csi-driver-nfs: v4.11.0 -> v4.12.0 (singleton)  
    - csi-provisioner: v5.2.0 -> v5.3.0 (singleton)  
    - csi-attacher: v4.8.1 -> v4.10.0 (singleton)  
    - csi-snapshotter: v8.2.1 -> v8.3.0 (singleton)  
    - csi-snapshot-controller: v8.2.1 -> v8.3.0 (singleton)  
    - csi-resizer: v1.13.2 -> v1.14.0 (singleton)  
    - csi-node-driver-registrar: v2.13.0 -> v2.15.0 (singleton)  
    - csi-liveness-probe: v2.15.0 -> v2.17.0 (singleton) by @gardener-github-actions[bot] [[#1177](https://github.com/gardener/gardener-extension-provider-openstack/pull/1177)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1169](https://github.com/gardener/gardener-extension-provider-openstack/pull/1169)]
- `[OPERATOR]` Updated gophercloud/v2 to v2.8.0 by @hebelsan [[#1167](https://github.com/gardener/gardener-extension-provider-openstack/pull/1167)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.50.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.50.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.50.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.50.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.50.0`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.8.0</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.27...0.8.0

</details>

<details>
<summary><b>Update provider-aws to <code>1.65.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.65.0]

## ✨ New Features
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1504](https://github.com/gardener/gardener-extension-provider-aws/pull/1504)]
- `[OPERATOR]` Support migration of shoots with duplicated zone entries from terraform to flow by @hebelsan [[#1496](https://github.com/gardener/gardener-extension-provider-aws/pull/1496)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix nil pointer dereference in getSubnetKey by @hebelsan [[#1516](https://github.com/gardener/gardener-extension-provider-aws/pull/1516)]
- `[OPERATOR]` Set EFS daemonset hostnetwork field true by @hebelsan [[#1530](https://github.com/gardener/gardener-extension-provider-aws/pull/1530)]
- `[OPERATOR]` Wait until NATGateway is available after update by @hebelsan [[#1512](https://github.com/gardener/gardener-extension-provider-aws/pull/1512)]

## 🏃 Others
- `[OPERATOR]` Remove cleanup for SeedLegacyCSISnapshotValidation by @hebelsan [[#1506](https://github.com/gardener/gardener-extension-provider-aws/pull/1506)]
- `[OPERATOR]` Remove code duplication for infra status creation by @hebelsan [[#1505](https://github.com/gardener/gardener-extension-provider-aws/pull/1505)]
- `[OPERATOR]` Update aws-ipam-controller to `v0.7.0`. by @DockToFuture [[#1485](https://github.com/gardener/gardener-extension-provider-aws/pull/1485)]
- `[OPERATOR]` Updated aws sdk, gardener-external-dns-management, ginkgo, golang/time and golang/tools library by @hebelsan [[#1511](https://github.com/gardener/gardener-extension-provider-aws/pull/1511)]
- `[OPERATOR]` Reduce AWS api calls for IPv6 or DualStack cluster by @hebelsan [[#1503](https://github.com/gardener/gardener-extension-provider-aws/pull/1503)]
- `[OPERATOR]` Deny dual-stack migration if overlay is not explicitly disabled. by @DockToFuture [[#1489](https://github.com/gardener/gardener-extension-provider-aws/pull/1489)]
- `[OPERATOR]` Update AWS CCM images by @hebelsan [[#1487](https://github.com/gardener/gardener-extension-provider-aws/pull/1487)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1498](https://github.com/gardener/gardener-extension-provider-aws/pull/1498)]
- `[OPERATOR]` Update EFS CSI driver image to v2.1.12 by @hebelsan [[#1486](https://github.com/gardener/gardener-extension-provider-aws/pull/1486)]
- `[OPERATOR]` The following fields in the `CloudProfile` have been renamed: `spec.ProviderConfig.MachineImages[].Versions[].capabilitySets` -> `spec.ProviderConfig.MachineImages[].Versions[].capabilityFlavors`  
  Please update your `CloudProfile`s accordingly if you are using capabilities (currently in alpha state). by @Roncossek [[#1480](https://github.com/gardener/gardener-extension-provider-aws/pull/1480)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v2.13.3 -> v2.13.4 (singleton)  
    - csi-driver: v1.47.0 -> v1.50.1 (singleton)  
    - csi-driver-efs: v2.1.12 -> v2.1.13 (singleton)  
    - csi-volume-modifier: v0.5.1 -> v0.7.0 (singleton)  
    - csi-attacher: v4.9.0 -> v4.10.0 (singleton)  
    - csi-node-driver-registrar: v2.14.0 -> v2.15.0 (singleton)  
    - csi-liveness-probe: v2.16.0 -> v2.17.0 (singleton) by @gardener-github-actions[bot] [[#1509](https://github.com/gardener/gardener-extension-provider-aws/pull/1509)]
- `[OPERATOR]` Update aws-custom-route-controller from version `v0.12.0` to `v0.13.0`. by @MartinWeindel [[#1502](https://github.com/gardener/gardener-extension-provider-aws/pull/1502)]
- `[OPERATOR]` Increase client-side QPS/burst for CSI-* components by @hendrikKahl [[#1514](https://github.com/gardener/gardener-extension-provider-aws/pull/1514)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.65.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.65.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.65.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.65.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.65.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.50.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.50.1]

## 🏃 Others
- `[OPERATOR]` Fix an issue preventing OpenStack installations without manila endpoints. Flow reconciler will now do lazy instantiation of the manila client. by @kon-angelo [[#1190](https://github.com/gardener/gardener-extension-provider-openstack/pull/1190)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.50.1`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.50.1`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.50.1`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.50.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.50.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.82.5</code></b></summary>

# [github.com/gardener/dashboard:1.82.5]

## 🐛 Bug Fixes
- `[USER]` Fixed incorrect property access when checking whether SSH access is enabled, which caused the SSH key pair option to not be displayed by @gardener-github-actions[bot] [[#2682](https://github.com/gardener/dashboard/pull/2682)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.5`


</details>

<details>
<summary><b>Update dashboard to <code>1.82.5</code></b></summary>

# [github.com/gardener/dashboard:1.82.5]

## 🐛 Bug Fixes
- `[USER]` Fixed incorrect property access when checking whether SSH access is enabled, which caused the SSH key pair option to not be displayed by @gardener-github-actions[bot] [[#2682](https://github.com/gardener/dashboard/pull/2682)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.5`


</details>

<details>
<summary><b>Update provider-aws to <code>1.65.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.65.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix an issue with gateway endpoint validation not accepting valid DNS subdomains. by @hebelsan [[#1537](https://github.com/gardener/gardener-extension-provider-aws/pull/1537)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.65.1`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.65.1`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.65.1`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.65.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.65.1`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.46.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.46.1]

## ✨ New Features
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1199](https://github.com/gardener/gardener-extension-provider-gcp/pull/1199)]
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to use credentials of either `v1.Secret` or `security.gardener.cloud/v1alpha1.WorkloadIdentity` by @vpnachev [[#1163](https://github.com/gardener/gardener-extension-provider-gcp/pull/1163)]

## 🐛 Bug Fixes
- `[OPERATOR]` Bug in the backupentry controller not properly setting the Workload Identity token mount dirpath in the credentials configuration file for source BackupEntries has been fixed. by @vpnachev [[#1213](https://github.com/gardener/gardener-extension-provider-gcp/pull/1213)]

## 🏃 Others
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1193](https://github.com/gardener/gardener-extension-provider-gcp/pull/1193)]
- `[USER]` `google-guest-agent` is configured to not add a route for alias IPs now. This fixes dual-stack clusters with Cilium. by @axel7born [[#1197](https://github.com/gardener/gardener-extension-provider-gcp/pull/1197)]
- `[OPERATOR]` Configure kube-apiserver QPS + burst for CSI components by @hendrikKahl [[#1203](https://github.com/gardener/gardener-extension-provider-gcp/pull/1203)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.46.1`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.46.1`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.46.1`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.46.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.46.1`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.46.2</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.46.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Bug in the backupentry controller not properly setting the Workload Identity token mount dirpath in the credentials configuration file for source BackupEntries has been fixed. by @vpnachev [[#1213](https://github.com/gardener/gardener-extension-provider-gcp/pull/1213)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.46.2`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.46.2`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.46.2`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.46.2`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.46.2`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.45.0</code></b></summary>



## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.45.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.45.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.45.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.45.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.45.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.55.2</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.55.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Update mcm image to v0.17.2 by @hebelsan [[#1339](https://github.com/gardener/gardener-extension-provider-azure/pull/1339)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.55.2`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.55.2`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.55.2`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.55.2`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.55.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.130.1</code></b></summary>

# [github.com/gardener/gardener:v1.130.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue has been fixed which was preventing `gardenlet` from registering its `Gardenlet` resource when `selfUpgrade` was set in its Helm chart values. by @rfranzke [[#13244](https://github.com/gardener/gardener/pull/13244)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.1` to `v1.32.2`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.2) by @gardener-ci-robot [[#13246](https://github.com/gardener/gardener/pull/13246)]
- `[OPERATOR]` Fixed an issue that caused the `worker-pools-operatingsystemconfig-hashes` secret to be created as immutable during the restore phase of control plane migration. by @plkokanov [[#13271](https://github.com/gardener/gardener/pull/13271)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.130.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.130.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.130.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.130.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.130.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.130.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.130.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.130.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.130.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.130.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.130.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.130.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.130.1</code></b></summary>

# [github.com/gardener/gardener:v1.130.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue has been fixed which was preventing `gardenlet` from registering its `Gardenlet` resource when `selfUpgrade` was set in its Helm chart values. by @rfranzke [[#13244](https://github.com/gardener/gardener/pull/13244)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.1` to `v1.32.2`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.2) by @gardener-ci-robot [[#13246](https://github.com/gardener/gardener/pull/13246)]
- `[OPERATOR]` Fixed an issue that caused the `worker-pools-operatingsystemconfig-hashes` secret to be created as immutable during the restore phase of control plane migration. by @plkokanov [[#13271](https://github.com/gardener/gardener/pull/13271)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.130.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.130.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.130.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.130.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.130.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.130.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.130.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.130.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.130.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.130.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.130.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.130.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.130.1</code></b></summary>

# [github.com/gardener/gardener:v1.130.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue has been fixed which was preventing `gardenlet` from registering its `Gardenlet` resource when `selfUpgrade` was set in its Helm chart values. by @rfranzke [[#13244](https://github.com/gardener/gardener/pull/13244)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.1` to `v1.32.2`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.2) by @gardener-ci-robot [[#13246](https://github.com/gardener/gardener/pull/13246)]
- `[OPERATOR]` Fixed an issue that caused the `worker-pools-operatingsystemconfig-hashes` secret to be created as immutable during the restore phase of control plane migration. by @plkokanov [[#13271](https://github.com/gardener/gardener/pull/13271)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.130.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.130.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.130.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.130.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.130.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.130.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.130.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.130.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.130.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.130.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.130.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.130.1`


</details>

<details>
<summary><b>Update provider-aws to <code>1.65.2</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.65.2]

## 🏃 Others
- `[OPERATOR]` Update CSI driver patch version for throughput handling bug fix by @kon-angelo [[#1543](https://github.com/gardener/gardener-extension-provider-aws/pull/1543)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.65.2`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.65.2`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.65.2`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.65.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.65.2`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.41.0</code></b></summary>

# [github.com/gardener/gardener-metrics-exporter:0.41.0]

## 🏃 Others
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#130](https://github.com/gardener/gardener-metrics-exporter/pull/130)]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.41.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.41.0</code></b></summary>

# [github.com/gardener/gardener-metrics-exporter:0.41.0]

## 🏃 Others
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#130](https://github.com/gardener/gardener-metrics-exporter/pull/130)]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.41.0`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.10.2</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-rsyslog-relp:v0.10.2]

## 🐛 Bug Fixes
- `[USER]` Fixed `perm used without an arch is slower` warnings in the system integrity rules by explicitly specifying the `arch` parameter to be `b64`.  
  This also fixes issues when calling `augenrules --load` to load the configured audit rules. by @plkokanov [[#336](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/336)]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.10.2`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.10.2`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.10.2`
## Container (OCI) Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.10.2`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.10.2`


</details>

<details>
<summary><b>Update provider-hcloud to <code>0.6.42</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.42

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.131.0</code></b></summary>

# [github.com/gardener/gardener:v1.131.0]

## 📰 Noteworthy
- `[OPERATOR]` On startup `gardenlet`s will configure `.spec.dns.defaults` settings for its respective `Seed`. Operators should adapt their `Seed` manifests to explicitly configure default DNS as `.spec.dns.defaults` will become a mandatory configuration after release v1.131.0. by @dimityrmirchev [[#12884](https://github.com/gardener/gardener/pull/12884)]

## ✨ New Features
- `[OPERATOR]` `Valitail` is now replaced with an instance of `OpenTelemetry Collector`. by @rrhubenov [[#12846](https://github.com/gardener/gardener/pull/12846)]
- `[OPERATOR]` Introduced `spec.settings.loadBalancerServices.zonalIngress.enabled` in the Seed API. When disabled, zonal istio ingress gateways are removed and the global istio ingress gateway is used instead. by @cerealsnow [[#12956](https://github.com/gardener/gardener/pull/12956)]
- `[OPERATOR]` `gardenlet` now evaluates extension health conditions first when computing the conditions of a `Shoot`. by @rfranzke [[#13231](https://github.com/gardener/gardener/pull/13231)]
- `[USER]` The `KubeApiServerTooManyAuditlogFailures` alert is now sent also to the shoot owners. by @vpnachev [[#13177](https://github.com/gardener/gardener/pull/13177)]
- `[OPERATOR]` The `Seed` spec was extended to allow explicit configuration for default DNS settings. Operators can configure these by setting `.spec.dns.defaults`. The implicit configuration that involved selecting a DNS secrets from the Garden cluster based on labels will be eventually removed. Operators should adapt their `Seed` manifests to explicitly configure default DNS. by @dimityrmirchev [[#12884](https://github.com/gardener/gardener/pull/12884)]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue has been fixed which was preventing `gardenlet` from registering its `Gardenlet` resource when `selfUpgrade` was set in its Helm chart values. by @rfranzke [[#13241](https://github.com/gardener/gardener/pull/13241)]
- `[OPERATOR]` A bug causing gardenlet to panic during CoreDNS migration check if the Shoot is hibernated is now fixed. by @shafeeqes [[#13302](https://github.com/gardener/gardener/pull/13302)]
- `[USER]` The early access (before the cluster creation is completed) to a `Shoot` cluster via `AdminKubeconfig` credentials is restored now when dedicated groups `gardener.cloud:system:admins` and `gardener.cloud:project:admins` are used for authorization. by @vpnachev [[#13299](https://github.com/gardener/gardener/pull/13299)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.35.4` to `v1.36.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.1) by @gardener-ci-robot [[#13170](https://github.com/gardener/gardener/pull/13170)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.35.3` to `v1.35.4`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.35.4) by @gardener-ci-robot [[#13159](https://github.com/gardener/gardener/pull/13159)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.2` to `1.27.3`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.2` to `1.27.3`.   
  - `istio.io/api` from `v1.27.2` to `v1.27.3`. by @gardener-ci-robot [[#13235](https://github.com/gardener/gardener/pull/13235)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.0` to `v0.60.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.0` to `v0.60.1`. by @gardener-ci-robot [[#13181](https://github.com/gardener/gardener/pull/13181)]
- `[OPERATOR]` Increase client-side rate limits for provider-specific container in machine-controller-manager to `--kube-api-qps=100` and `--kube-api-burst=200` by @voelzmo [[#13254](https://github.com/gardener/gardener/pull/13254)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.42.0` to `0.43.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.43.0) by @gardener-ci-robot [[#13176](https://github.com/gardener/gardener/pull/13176)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.27` to `v2.2.28`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.28) by @gardener-ci-robot [[#13197](https://github.com/gardener/gardener/pull/13197)]
- `[OPERATOR]` Report Gardener Operator `Extension` conditions as metrics by @hown3d [[#13015](https://github.com/gardener/gardener/pull/13015)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/coredns-config-adapter` from `v0.2.0` to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/coredns-config-adapter/releases/tag/v0.3.0) by @DockToFuture [[#13277](https://github.com/gardener/gardener/pull/13277)]
- `[OPERATOR]` Mutation of the Shoot metadata annotations such as `shoot.gardener.cloud/tasks` and `maintenance.shoot.gardener.cloud/needs-retry-operation` is moved from the `ShootValidator` to the `ShootMutator` admission plugin. by @ialidzhikov [[#13171](https://github.com/gardener/gardener/pull/13171)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.42` to `v7.5.43`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.43) by @gardener-ci-robot [[#13202](https://github.com/gardener/gardener/pull/13202)]
- `[OPERATOR]` The local multi-node setup no longer relies on `externalTrafficPolicy: Local` and forcing traffic through a pod on the control plane node. by @ScheererJ [[#13182](https://github.com/gardener/gardener/pull/13182)]
- `[OPERATOR]` Add support for scraping metrics for OpenTelemetry collector on nodes by @dnaeon [[#13228](https://github.com/gardener/gardener/pull/13228)]
- `[OPERATOR]` Support custom server blocks in node-local-dns. by @DockToFuture [[#13160](https://github.com/gardener/gardener/pull/13160)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/prometheus` from `v3.7.1` to `v3.7.2`. by @gardener-ci-robot [[#13253](https://github.com/gardener/gardener/pull/13253)]
- `[OPERATOR]` Fixed an issue that caused the `worker-pools-operatingsystemconfig-hashes` secret to be created as immutable during the restore phase of control plane migration. by @plkokanov [[#13263](https://github.com/gardener/gardener/pull/13263)]
- `[OPERATOR]` A new mutating admission plugin is introduced - `ShootMutator`. It is enabled by default. For more details, see the [`ShootMutator` admission plugin docs](https://github.com/gardener/gardener/blob/v1.131.0/docs/concepts/apiserver-admission-plugins.md#shootmutator). by @ialidzhikov [[#13156](https://github.com/gardener/gardener/pull/13156)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.1` to `v0.60.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.1` to `v0.60.2`. by @gardener-ci-robot [[#13267](https://github.com/gardener/gardener/pull/13267)]
- `[OPERATOR]` The `NodeNotHealthy` and `SeedNodeNotHealthy` alerts are now removed. by @vicwicker [[#13150](https://github.com/gardener/gardener/pull/13150)]
- `[OPERATOR]` ScrapeConfigs & PrometheusRules of `blackbox-exporter` are now deployed as managed-resource when type is `shoot` by @oliver-goetz [[#13178](https://github.com/gardener/gardener/pull/13178)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.1` to `v1.32.2`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.2) by @gardener-ci-robot [[#13240](https://github.com/gardener/gardener/pull/13240)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.4` to `1.82.5`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.5) by @gardener-ci-robot [[#13250](https://github.com/gardener/gardener/pull/13250)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.36.1` to `v1.36.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.2) by @gardener-ci-robot [[#13225](https://github.com/gardener/gardener/pull/13225)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.131.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.131.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.131.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.131.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.131.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.131.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.131.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.131.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.131.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.131.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.131.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.131.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.131.0</code></b></summary>

# [github.com/gardener/gardener:v1.131.0]

## 📰 Noteworthy
- `[OPERATOR]` On startup `gardenlet`s will configure `.spec.dns.defaults` settings for its respective `Seed`. Operators should adapt their `Seed` manifests to explicitly configure default DNS as `.spec.dns.defaults` will become a mandatory configuration after release v1.131.0. by @dimityrmirchev [[#12884](https://github.com/gardener/gardener/pull/12884)]

## ✨ New Features
- `[OPERATOR]` `Valitail` is now replaced with an instance of `OpenTelemetry Collector`. by @rrhubenov [[#12846](https://github.com/gardener/gardener/pull/12846)]
- `[OPERATOR]` Introduced `spec.settings.loadBalancerServices.zonalIngress.enabled` in the Seed API. When disabled, zonal istio ingress gateways are removed and the global istio ingress gateway is used instead. by @cerealsnow [[#12956](https://github.com/gardener/gardener/pull/12956)]
- `[OPERATOR]` `gardenlet` now evaluates extension health conditions first when computing the conditions of a `Shoot`. by @rfranzke [[#13231](https://github.com/gardener/gardener/pull/13231)]
- `[USER]` The `KubeApiServerTooManyAuditlogFailures` alert is now sent also to the shoot owners. by @vpnachev [[#13177](https://github.com/gardener/gardener/pull/13177)]
- `[OPERATOR]` The `Seed` spec was extended to allow explicit configuration for default DNS settings. Operators can configure these by setting `.spec.dns.defaults`. The implicit configuration that involved selecting a DNS secrets from the Garden cluster based on labels will be eventually removed. Operators should adapt their `Seed` manifests to explicitly configure default DNS. by @dimityrmirchev [[#12884](https://github.com/gardener/gardener/pull/12884)]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue has been fixed which was preventing `gardenlet` from registering its `Gardenlet` resource when `selfUpgrade` was set in its Helm chart values. by @rfranzke [[#13241](https://github.com/gardener/gardener/pull/13241)]
- `[OPERATOR]` A bug causing gardenlet to panic during CoreDNS migration check if the Shoot is hibernated is now fixed. by @shafeeqes [[#13302](https://github.com/gardener/gardener/pull/13302)]
- `[USER]` The early access (before the cluster creation is completed) to a `Shoot` cluster via `AdminKubeconfig` credentials is restored now when dedicated groups `gardener.cloud:system:admins` and `gardener.cloud:project:admins` are used for authorization. by @vpnachev [[#13299](https://github.com/gardener/gardener/pull/13299)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.35.4` to `v1.36.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.1) by @gardener-ci-robot [[#13170](https://github.com/gardener/gardener/pull/13170)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.35.3` to `v1.35.4`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.35.4) by @gardener-ci-robot [[#13159](https://github.com/gardener/gardener/pull/13159)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.2` to `1.27.3`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.2` to `1.27.3`.   
  - `istio.io/api` from `v1.27.2` to `v1.27.3`. by @gardener-ci-robot [[#13235](https://github.com/gardener/gardener/pull/13235)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.0` to `v0.60.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.0` to `v0.60.1`. by @gardener-ci-robot [[#13181](https://github.com/gardener/gardener/pull/13181)]
- `[OPERATOR]` Increase client-side rate limits for provider-specific container in machine-controller-manager to `--kube-api-qps=100` and `--kube-api-burst=200` by @voelzmo [[#13254](https://github.com/gardener/gardener/pull/13254)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.42.0` to `0.43.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.43.0) by @gardener-ci-robot [[#13176](https://github.com/gardener/gardener/pull/13176)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.27` to `v2.2.28`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.28) by @gardener-ci-robot [[#13197](https://github.com/gardener/gardener/pull/13197)]
- `[OPERATOR]` Report Gardener Operator `Extension` conditions as metrics by @hown3d [[#13015](https://github.com/gardener/gardener/pull/13015)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/coredns-config-adapter` from `v0.2.0` to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/coredns-config-adapter/releases/tag/v0.3.0) by @DockToFuture [[#13277](https://github.com/gardener/gardener/pull/13277)]
- `[OPERATOR]` Mutation of the Shoot metadata annotations such as `shoot.gardener.cloud/tasks` and `maintenance.shoot.gardener.cloud/needs-retry-operation` is moved from the `ShootValidator` to the `ShootMutator` admission plugin. by @ialidzhikov [[#13171](https://github.com/gardener/gardener/pull/13171)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.42` to `v7.5.43`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.43) by @gardener-ci-robot [[#13202](https://github.com/gardener/gardener/pull/13202)]
- `[OPERATOR]` The local multi-node setup no longer relies on `externalTrafficPolicy: Local` and forcing traffic through a pod on the control plane node. by @ScheererJ [[#13182](https://github.com/gardener/gardener/pull/13182)]
- `[OPERATOR]` Add support for scraping metrics for OpenTelemetry collector on nodes by @dnaeon [[#13228](https://github.com/gardener/gardener/pull/13228)]
- `[OPERATOR]` Support custom server blocks in node-local-dns. by @DockToFuture [[#13160](https://github.com/gardener/gardener/pull/13160)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/prometheus` from `v3.7.1` to `v3.7.2`. by @gardener-ci-robot [[#13253](https://github.com/gardener/gardener/pull/13253)]
- `[OPERATOR]` Fixed an issue that caused the `worker-pools-operatingsystemconfig-hashes` secret to be created as immutable during the restore phase of control plane migration. by @plkokanov [[#13263](https://github.com/gardener/gardener/pull/13263)]
- `[OPERATOR]` A new mutating admission plugin is introduced - `ShootMutator`. It is enabled by default. For more details, see the [`ShootMutator` admission plugin docs](https://github.com/gardener/gardener/blob/v1.131.0/docs/concepts/apiserver-admission-plugins.md#shootmutator). by @ialidzhikov [[#13156](https://github.com/gardener/gardener/pull/13156)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.1` to `v0.60.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.1` to `v0.60.2`. by @gardener-ci-robot [[#13267](https://github.com/gardener/gardener/pull/13267)]
- `[OPERATOR]` The `NodeNotHealthy` and `SeedNodeNotHealthy` alerts are now removed. by @vicwicker [[#13150](https://github.com/gardener/gardener/pull/13150)]
- `[OPERATOR]` ScrapeConfigs & PrometheusRules of `blackbox-exporter` are now deployed as managed-resource when type is `shoot` by @oliver-goetz [[#13178](https://github.com/gardener/gardener/pull/13178)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.1` to `v1.32.2`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.2) by @gardener-ci-robot [[#13240](https://github.com/gardener/gardener/pull/13240)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.4` to `1.82.5`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.5) by @gardener-ci-robot [[#13250](https://github.com/gardener/gardener/pull/13250)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.36.1` to `v1.36.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.2) by @gardener-ci-robot [[#13225](https://github.com/gardener/gardener/pull/13225)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.131.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.131.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.131.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.131.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.131.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.131.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.131.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.131.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.131.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.131.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.131.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.131.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.131.0</code></b></summary>

# [github.com/gardener/gardener:v1.131.0]

## 📰 Noteworthy
- `[OPERATOR]` On startup `gardenlet`s will configure `.spec.dns.defaults` settings for its respective `Seed`. Operators should adapt their `Seed` manifests to explicitly configure default DNS as `.spec.dns.defaults` will become a mandatory configuration after release v1.131.0. by @dimityrmirchev [[#12884](https://github.com/gardener/gardener/pull/12884)]

## ✨ New Features
- `[OPERATOR]` `Valitail` is now replaced with an instance of `OpenTelemetry Collector`. by @rrhubenov [[#12846](https://github.com/gardener/gardener/pull/12846)]
- `[OPERATOR]` Introduced `spec.settings.loadBalancerServices.zonalIngress.enabled` in the Seed API. When disabled, zonal istio ingress gateways are removed and the global istio ingress gateway is used instead. by @cerealsnow [[#12956](https://github.com/gardener/gardener/pull/12956)]
- `[OPERATOR]` `gardenlet` now evaluates extension health conditions first when computing the conditions of a `Shoot`. by @rfranzke [[#13231](https://github.com/gardener/gardener/pull/13231)]
- `[USER]` The `KubeApiServerTooManyAuditlogFailures` alert is now sent also to the shoot owners. by @vpnachev [[#13177](https://github.com/gardener/gardener/pull/13177)]
- `[OPERATOR]` The `Seed` spec was extended to allow explicit configuration for default DNS settings. Operators can configure these by setting `.spec.dns.defaults`. The implicit configuration that involved selecting a DNS secrets from the Garden cluster based on labels will be eventually removed. Operators should adapt their `Seed` manifests to explicitly configure default DNS. by @dimityrmirchev [[#12884](https://github.com/gardener/gardener/pull/12884)]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue has been fixed which was preventing `gardenlet` from registering its `Gardenlet` resource when `selfUpgrade` was set in its Helm chart values. by @rfranzke [[#13241](https://github.com/gardener/gardener/pull/13241)]
- `[OPERATOR]` A bug causing gardenlet to panic during CoreDNS migration check if the Shoot is hibernated is now fixed. by @shafeeqes [[#13302](https://github.com/gardener/gardener/pull/13302)]
- `[USER]` The early access (before the cluster creation is completed) to a `Shoot` cluster via `AdminKubeconfig` credentials is restored now when dedicated groups `gardener.cloud:system:admins` and `gardener.cloud:project:admins` are used for authorization. by @vpnachev [[#13299](https://github.com/gardener/gardener/pull/13299)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.35.4` to `v1.36.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.1) by @gardener-ci-robot [[#13170](https://github.com/gardener/gardener/pull/13170)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.35.3` to `v1.35.4`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.35.4) by @gardener-ci-robot [[#13159](https://github.com/gardener/gardener/pull/13159)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.2` to `1.27.3`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.2` to `1.27.3`.   
  - `istio.io/api` from `v1.27.2` to `v1.27.3`. by @gardener-ci-robot [[#13235](https://github.com/gardener/gardener/pull/13235)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.0` to `v0.60.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.0` to `v0.60.1`. by @gardener-ci-robot [[#13181](https://github.com/gardener/gardener/pull/13181)]
- `[OPERATOR]` Increase client-side rate limits for provider-specific container in machine-controller-manager to `--kube-api-qps=100` and `--kube-api-burst=200` by @voelzmo [[#13254](https://github.com/gardener/gardener/pull/13254)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.42.0` to `0.43.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.43.0) by @gardener-ci-robot [[#13176](https://github.com/gardener/gardener/pull/13176)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.27` to `v2.2.28`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.28) by @gardener-ci-robot [[#13197](https://github.com/gardener/gardener/pull/13197)]
- `[OPERATOR]` Report Gardener Operator `Extension` conditions as metrics by @hown3d [[#13015](https://github.com/gardener/gardener/pull/13015)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/coredns-config-adapter` from `v0.2.0` to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/coredns-config-adapter/releases/tag/v0.3.0) by @DockToFuture [[#13277](https://github.com/gardener/gardener/pull/13277)]
- `[OPERATOR]` Mutation of the Shoot metadata annotations such as `shoot.gardener.cloud/tasks` and `maintenance.shoot.gardener.cloud/needs-retry-operation` is moved from the `ShootValidator` to the `ShootMutator` admission plugin. by @ialidzhikov [[#13171](https://github.com/gardener/gardener/pull/13171)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.42` to `v7.5.43`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.43) by @gardener-ci-robot [[#13202](https://github.com/gardener/gardener/pull/13202)]
- `[OPERATOR]` The local multi-node setup no longer relies on `externalTrafficPolicy: Local` and forcing traffic through a pod on the control plane node. by @ScheererJ [[#13182](https://github.com/gardener/gardener/pull/13182)]
- `[OPERATOR]` Add support for scraping metrics for OpenTelemetry collector on nodes by @dnaeon [[#13228](https://github.com/gardener/gardener/pull/13228)]
- `[OPERATOR]` Support custom server blocks in node-local-dns. by @DockToFuture [[#13160](https://github.com/gardener/gardener/pull/13160)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/prometheus` from `v3.7.1` to `v3.7.2`. by @gardener-ci-robot [[#13253](https://github.com/gardener/gardener/pull/13253)]
- `[OPERATOR]` Fixed an issue that caused the `worker-pools-operatingsystemconfig-hashes` secret to be created as immutable during the restore phase of control plane migration. by @plkokanov [[#13263](https://github.com/gardener/gardener/pull/13263)]
- `[OPERATOR]` A new mutating admission plugin is introduced - `ShootMutator`. It is enabled by default. For more details, see the [`ShootMutator` admission plugin docs](https://github.com/gardener/gardener/blob/v1.131.0/docs/concepts/apiserver-admission-plugins.md#shootmutator). by @ialidzhikov [[#13156](https://github.com/gardener/gardener/pull/13156)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.1` to `v0.60.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.1` to `v0.60.2`. by @gardener-ci-robot [[#13267](https://github.com/gardener/gardener/pull/13267)]
- `[OPERATOR]` The `NodeNotHealthy` and `SeedNodeNotHealthy` alerts are now removed. by @vicwicker [[#13150](https://github.com/gardener/gardener/pull/13150)]
- `[OPERATOR]` ScrapeConfigs & PrometheusRules of `blackbox-exporter` are now deployed as managed-resource when type is `shoot` by @oliver-goetz [[#13178](https://github.com/gardener/gardener/pull/13178)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.1` to `v1.32.2`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.2) by @gardener-ci-robot [[#13240](https://github.com/gardener/gardener/pull/13240)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.4` to `1.82.5`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.5) by @gardener-ci-robot [[#13250](https://github.com/gardener/gardener/pull/13250)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.36.1` to `v1.36.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.2) by @gardener-ci-robot [[#13225](https://github.com/gardener/gardener/pull/13225)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.131.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.131.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.131.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.131.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.131.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.131.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.131.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.131.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.131.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.131.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.131.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.131.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.65.3</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.65.3]

## 🐛 Bug Fixes
- `[OPERATOR]` Revert to v1.47.1 due to a regression in the calculation of allocatable volumes by @hebelsan [[#1549](https://github.com/gardener/gardener-extension-provider-aws/pull/1549)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.65.3`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.65.3`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.65.3`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.65.3`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.65.3`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.66.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-alicloud:v1.66.0]

## ✨ New Features
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to refer only to credentials of type `v1.Secret`. by @vpnachev [[#837](https://github.com/gardener/gardener-extension-provider-alicloud/pull/837)]

## 🏃 Others
- `[OPERATOR]` Configure kube-apiserver QPS + burst for CSI components by @hendrikKahl [[#843](https://github.com/gardener/gardener-extension-provider-alicloud/pull/843)]
- `[OPERATOR]` Include error protection when deleting a vSwitch during reconciliation. To prevent this error, you can annotate the infrastructure with alicloud.provider.extensions.gardener.cloud/flow-reconcile-can-delete-resource=true by @kevin-lacoo [[#845](https://github.com/gardener/gardener-extension-provider-alicloud/pull/845)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#841](https://github.com/gardener/gardener-extension-provider-alicloud/pull/841)]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.66.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.66.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.66.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.66.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.66.0`


</details>

<details>
<summary><b>Update cert-management to <code>0.19.0</code></b></summary>

# [github.com/gardener/cert-management:v0.19.0]

## 🏃 Others
- `[USER]` Allow to request intermediate CA certificates for CA issuers by @MartinWeindel [[#601](https://github.com/gardener/cert-management/pull/601)]
- `[USER]` Support annotation `gardener.cloud/operation=reconcile` for `Certificate` and `Issuer` resources.  
  If it is set for a `Certificate` with back-off status, it is cleared to enable immediate reconciliation. by @MartinWeindel [[#600](https://github.com/gardener/cert-management/pull/600)]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.19.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.19.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.56.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.56.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Remove support for availability-sets. Operators should make sure that all availability-set-based shoots have migrated to VMSS. by @kon-angelo [[#1325](https://github.com/gardener/gardener-extension-provider-azure/pull/1325)]

## ✨ New Features
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1287](https://github.com/gardener/gardener-extension-provider-azure/pull/1287)]
- `[OPERATOR]` Add field for passing os disk caching type by @hebelsan [[#1259](https://github.com/gardener/gardener-extension-provider-azure/pull/1259)]
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to use credentials of either `v1.Secret` or `security.gardener.cloud/v1alpha1.WorkloadIdentity` by @vpnachev [[#1277](https://github.com/gardener/gardener-extension-provider-azure/pull/1277)]

## 🐛 Bug Fixes
- `[OPERATOR]` All `NamespacedCloudProfile` `MachineImageVersions` are all merged into its status, instead of only writing the last one by @Roncossek [[#1336](https://github.com/gardener/gardener-extension-provider-azure/pull/1336)]

## 🏃 Others
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.30.13 -> v1.30.15 (patch)  
    - cloud-controller-manager: v1.31.7 -> v1.31.9 (patch)  
    - cloud-controller-manager: v1.32.6 -> v1.32.8 (patch)  
    - cloud-controller-manager: v1.33.1 -> v1.33.3 (patch)  
    - cloud-node-manager: v1.30.13 -> v1.30.15 (patch)  
    - cloud-node-manager: v1.31.7 -> v1.31.9 (patch)  
    - cloud-node-manager: v1.32.6 -> v1.32.8 (patch)  
    - cloud-node-manager: v1.33.1 -> v1.33.3 (patch)  
    - csi-driver-disk: v1.32.4 -> v1.33.3 (singleton)  
    - csi-driver-file: v1.32.1 -> v1.33.3 (singleton)  
    - csi-provisioner: v5.2.0 -> v5.3.0 (singleton)  
    - csi-attacher: v4.8.1 -> v4.10.0 (singleton)  
    - csi-snapshotter: v8.2.1 -> v8.3.0 (singleton)  
    - csi-snapshot-controller: v8.2.1 -> v8.3.0 (singleton)  
    - csi-resizer: v1.13.2 -> v1.14.0 (singleton)  
    - csi-node-driver-registrar: v2.13.0 -> v2.15.0 (singleton)  
    - csi-liveness-probe: v2.15.0 -> v2.17.0 (singleton) by @gardener-github-actions[bot] [[#1312](https://github.com/gardener/gardener-extension-provider-azure/pull/1312)]
- `[OPERATOR]` Configure kube-apiserver QPS + burst for CSI components by @hendrikKahl [[#1319](https://github.com/gardener/gardener-extension-provider-azure/pull/1319)]
- `[OPERATOR]` Remove ForceNatGateway feature gate after the updated announcement by Microsoft by @kon-angelo [[#1299](https://github.com/gardener/gardener-extension-provider-azure/pull/1299)]
- `[OPERATOR]` Update gardener/gardener to v1.130.0 and other go mod dependencies by @hebelsan [[#1334](https://github.com/gardener/gardener-extension-provider-azure/pull/1334)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1307](https://github.com/gardener/gardener-extension-provider-azure/pull/1307)]
- `[OPERATOR]` Update mcm image to v0.17.1 by @hebelsan [[#1322](https://github.com/gardener/gardener-extension-provider-azure/pull/1322)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.56.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.56.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.56.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.56.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.56.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.47.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.47.0]

## ✨ New Features
- `[USER]` Set enable-data-cache on the CSI-driver if shoot annotation gcp.provider.extensions.gardener.cloud/enable-csi-data-cache is set by @hebelsan [[#1059](https://github.com/gardener/gardener-extension-provider-gcp/pull/1059)]
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1199](https://github.com/gardener/gardener-extension-provider-gcp/pull/1199)]
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to use credentials of either `v1.Secret` or `security.gardener.cloud/v1alpha1.WorkloadIdentity` by @vpnachev [[#1163](https://github.com/gardener/gardener-extension-provider-gcp/pull/1163)]

## 🐛 Bug Fixes
- `[OPERATOR]` Bug in the backupentry controller not properly setting the Workload Identity token mount dirpath in the credentials configuration file for source BackupEntries has been fixed. by @vpnachev [[#1209](https://github.com/gardener/gardener-extension-provider-gcp/pull/1209)]
- `[OPERATOR]` All `NamespacedCloudProfile` `MachineImageVersions` are all merged into its status, instead of only writing the last one by @Roncossek [[#1212](https://github.com/gardener/gardener-extension-provider-gcp/pull/1212)]

## 🏃 Others
- `[OPERATOR]` Deny dual-stack migration if overlay is not explicitly disabled. by @DockToFuture [[#1185](https://github.com/gardener/gardener-extension-provider-gcp/pull/1185)]
- `[USER]` `google-guest-agent` is configured to not add a route for alias IPs now. This fixes dual-stack clusters with Cilium. by @axel7born [[#1197](https://github.com/gardener/gardener-extension-provider-gcp/pull/1197)]
- `[OPERATOR]` Remove cleanup function FirewallRuleAllowExternalName by @hebelsan [[#1218](https://github.com/gardener/gardener-extension-provider-gcp/pull/1218)]
- `[OPERATOR]` Migration from dual-stack IPv6, IPv4 is now supported. by @axel7born [[#1171](https://github.com/gardener/gardener-extension-provider-gcp/pull/1171)]
- `[OPERATOR]` Update gardener/gardener to v1.130.0 and other dependencies by @hebelsan [[#1214](https://github.com/gardener/gardener-extension-provider-gcp/pull/1214)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1193](https://github.com/gardener/gardener-extension-provider-gcp/pull/1193)]
- `[OPERATOR]` Configure kube-apiserver QPS + burst for CSI components by @hendrikKahl [[#1203](https://github.com/gardener/gardener-extension-provider-gcp/pull/1203)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v32.2.4 -> v32.2.5 (patch)  
    - machine-controller-manager-provider-gcp: v0.25.0 -> v0.26.0 (singleton)  
    - csi-driver: v1.17.12 -> v1.17.14 (singleton)  
    - csi-provisioner: v5.2.0 -> v5.3.0 (singleton)  
    - csi-attacher: v4.8.1 -> v4.10.0 (singleton)  
    - csi-resizer: v1.13.2 -> v1.14.0 (singleton)  
    - csi-snapshotter: v8.2.1 -> v8.3.0 (singleton)  
    - csi-snapshot-controller: v8.2.1 -> v8.3.0 (singleton)  
    - csi-node-driver-registrar: v2.13.0 -> v2.15.0 (singleton)  
    - csi-liveness-probe: v2.15.0 -> v2.17.0 (singleton) by @gardener-github-actions[bot] [[#1211](https://github.com/gardener/gardener-extension-provider-gcp/pull/1211)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.47.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.47.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.47.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.47.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.47.0`


</details>
