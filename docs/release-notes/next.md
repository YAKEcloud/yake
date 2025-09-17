---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.28.0</code></b></summary>



## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.28.0`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.28.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.54.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.54.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` `provider-azure` no longer supports Shoots with Кubernetes version <= 1.28. by @RadaBDimitrova [[#1216](https://github.com/gardener/gardener-extension-provider-azure/pull/1216)]
- `[OPERATOR]` Remove support for the terraform-based infrastructure reconciler. by @kon-angelo [[#1231](https://github.com/gardener/gardener-extension-provider-azure/pull/1231)]

## 📰 Noteworthy
- `[OPERATOR]` Enforce NAT-Gateway creation for new shoots if no NAT-Config provided and user doesn't bring his own VNet by @hebelsan [[#1257](https://github.com/gardener/gardener-extension-provider-azure/pull/1257)]

## ✨ New Features
- `[USER]` This extension now supports in-place node updates. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/proposals/31-inplace-node-update.md). by @acumino [[#1181](https://github.com/gardener/gardener-extension-provider-azure/pull/1181)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug preventing all obsolete machine-controller-manager ClusterRoles and ClusterRoleBindings to be deleted on extension startup has been fixed. by @georgibaltiev [[#1240](https://github.com/gardener/gardener-extension-provider-azure/pull/1240)]
- `[OPERATOR]` Add missing permission for the CSI disk driver by @hebelsan [[#1218](https://github.com/gardener/gardener-extension-provider-azure/pull/1218)]

## 🏃 Others
- `[OPERATOR]` Update GHA pipelines with new release options by @kon-angelo [[#1230](https://github.com/gardener/gardener-extension-provider-azure/pull/1230)]
- `[OPERATOR]` Enable setting feature gates for the admission controller by @hebelsan [[#1284](https://github.com/gardener/gardener-extension-provider-azure/pull/1284)]
- `[OPERATOR]` Upgrade gardener dependency to v1.123.1 by @theoddora [[#1232](https://github.com/gardener/gardener-extension-provider-azure/pull/1232)]
- `[OPERATOR]` Clients created by the Azure extension provider will now identify themselves by adding to the `user-agent` header of their calls. by @AndreasBurger [[#1211](https://github.com/gardener/gardener-extension-provider-azure/pull/1211)]
- `[OPERATOR]` Separate bastion reconcile and delete options by @hebelsan [[#1233](https://github.com/gardener/gardener-extension-provider-azure/pull/1233)]
- `[OPERATOR]` Introduce feature gate to forcefully migrate Availability set based shoots to VMSS by @kon-angelo [[#1242](https://github.com/gardener/gardener-extension-provider-azure/pull/1242)]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#1225](https://github.com/gardener/gardener-extension-provider-azure/pull/1225)]
- `[OPERATOR]` The provider-azure extension does now support shoot clusters with Kubernetes version 1.33. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md) before upgrading to 1.33. by @plkokanov [[#1198](https://github.com/gardener/gardener-extension-provider-azure/pull/1198)]
- `[OPERATOR]` Update none gardener dependencies & gardener/gardener to v1.125.0 by @hebelsan [[#1249](https://github.com/gardener/gardener-extension-provider-azure/pull/1249)]
- `[OPERATOR]` Upgrade vendored gardener/gardener `v1.118.0` -> `v1.121.1` by @kon-angelo [[#1201](https://github.com/gardener/gardener-extension-provider-azure/pull/1201)]
- `[OPERATOR]` Remove obsolete terraformer resources by @kon-angelo [[#1239](https://github.com/gardener/gardener-extension-provider-azure/pull/1239)]
- `[OPERATOR]` Upgrade gardener dependency to v1.122.1 by @RadaBDimitrova [[#1226](https://github.com/gardener/gardener-extension-provider-azure/pull/1226)]
- `[OPERATOR]` Update the default etcd storage-class to reflect the CSI provisioner and update the default opts by @kon-angelo [[#1223](https://github.com/gardener/gardener-extension-provider-azure/pull/1223)]
- `[OPERATOR]` Introduce annotation that disables default outbound access on subnet level to be used for testing purposes. by @kon-angelo [[#1241](https://github.com/gardener/gardener-extension-provider-azure/pull/1241)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-provider-azure/blob/master/example/extension.yaml) by @timuthy [[#1262](https://github.com/gardener/gardener-extension-provider-azure/pull/1262)]


## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.54.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.54.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.54.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.54.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.54.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.69.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.69.0]

## 🏃 Others
- `[DEPENDENCY]` Updated `external-dns-management` to `v0.28.0` [ref](https://github.com/gardener/external-dns-management/releases/tag/v0.28.0). by @marc1404 [[#545](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/545)]


## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.69.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.69.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.69.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.69.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.69.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.127.1</code></b></summary>

# [github.com/gardener/gardener:v1.127.1]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug in the gardenlet start-up migration of the Admin and Viewer Kubeconfig ClusterRoleBindings where a ManagedResource secret could be deleted leading to gardenlet being unable to startup is fixed. by @gardener-ci-robot [[#12928](https://github.com/gardener/gardener/pull/12928)]

## 🏃 Others
- `[OPERATOR]` Monitoring the Istio Ingress Gateways is temporarily disabled to mitigate a metric leak issue. This does not affect the monitoring of the shoot control planes where these metrics are not used. by @gardener-ci-robot [[#12935](https://github.com/gardener/gardener/pull/12935)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.127.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.127.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.127.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.127.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.127.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.127.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.127.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.127.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.127.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.127.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.127.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.127.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.127.1</code></b></summary>

# [github.com/gardener/gardener:v1.127.1]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug in the gardenlet start-up migration of the Admin and Viewer Kubeconfig ClusterRoleBindings where a ManagedResource secret could be deleted leading to gardenlet being unable to startup is fixed. by @gardener-ci-robot [[#12928](https://github.com/gardener/gardener/pull/12928)]

## 🏃 Others
- `[OPERATOR]` Monitoring the Istio Ingress Gateways is temporarily disabled to mitigate a metric leak issue. This does not affect the monitoring of the shoot control planes where these metrics are not used. by @gardener-ci-robot [[#12935](https://github.com/gardener/gardener/pull/12935)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.127.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.127.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.127.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.127.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.127.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.127.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.127.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.127.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.127.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.127.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.127.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.127.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.127.1</code></b></summary>

# [github.com/gardener/gardener:v1.127.1]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug in the gardenlet start-up migration of the Admin and Viewer Kubeconfig ClusterRoleBindings where a ManagedResource secret could be deleted leading to gardenlet being unable to startup is fixed. by @gardener-ci-robot [[#12928](https://github.com/gardener/gardener/pull/12928)]

## 🏃 Others
- `[OPERATOR]` Monitoring the Istio Ingress Gateways is temporarily disabled to mitigate a metric leak issue. This does not affect the monitoring of the shoot control planes where these metrics are not used. by @gardener-ci-robot [[#12935](https://github.com/gardener/gardener/pull/12935)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.127.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.127.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.127.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.127.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.127.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.127.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.127.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.127.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.127.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.127.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.127.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.127.1`


</details>

<details>
<summary><b>Update provider-azure to <code>1.54.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.54.1]

## 🏃 Others
- `[OPERATOR]` Fix a bug that disabled subnet's default outbound access. by @kon-angelo [[#1291](https://github.com/gardener/gardener-extension-provider-azure/pull/1291)]


## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.54.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.54.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.54.1`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.54.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.54.1`


</details>

<details>
<summary><b>Update backup-s3 to <code>0.8.1</code></b></summary>

## General Changes

* fix(chart): rbac-runtime has a wrong serviceAccountName (#20) @nschad


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.25.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-filter:v0.25.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Networking filter now prints the server's response in case no valid JSON was returned while downloading the filter list. by @domdom82 [[#273](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/273)]

## 🏃 Others
- `[OPERATOR]` Fix priorityClassName for deployment on Garden runtime cluster. by @MartinWeindel [[#266](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/266)]


## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.25.0`
- shoot-networking-filter-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-application:v0.25.0`
- shoot-networking-filter-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-runtime:v0.25.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.25.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-filter-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter-admission:v0.25.0`
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.25.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.25.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.33.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-gardenlinux:v0.33.0]

## 🏃 Others
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-os-gardenlinux/blob/master/example/extension.yaml) by @timuthy [[#290](https://github.com/gardener/gardener-extension-os-gardenlinux/pull/290)]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#272](https://github.com/gardener/gardener-extension-os-gardenlinux/pull/272)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#280](https://github.com/gardener/gardener-extension-os-gardenlinux/pull/280)]


## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.33.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.33.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.32.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-ubuntu:v1.32.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed an RBAC issue when deploying this extension through the Gardener operator. by @Wieneo [[#215](https://github.com/gardener/gardener-extension-os-ubuntu/pull/215)]

## 🏃 Others
- `[DEVELOPER]` migrate CICD-Pipelines to GitHub-Actions by @ccwienk [[#223](https://github.com/gardener/gardener-extension-os-ubuntu/pull/223)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#229](https://github.com/gardener/gardener-extension-os-ubuntu/pull/229)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-os-ubuntu/blob/master/example/extension.yaml) by @timuthy [[#238](https://github.com/gardener/gardener-extension-os-ubuntu/pull/238)]


## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.32.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.32.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.24.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.24.0]

## 🏃 Others
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-runtime-gvisor/blob/master/example/extension.yaml) by @timuthy [[#275](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/275)]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20250820.0. by @gardener-github-actions[bot] [[#279](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/279)]


## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.24.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.24.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.24.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.22.0</code></b></summary>

## What's Changed
* 🤖: migrate renovate config by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/186
* 🤖 Update module github.com/fluxcd/flux2/v2 to v2.6.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/167
* 🤖 Update module golang.org/x/tools to v0.37.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/187
* 🤖 Update k8s and gardener packages to v0.33.5 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/164
* Add Garden Cluster Identity to `shoot-info` ConfigMap by @maboehm in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/189
* 🤖 Update module github.com/gardener/gardener to v1.127.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/188


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.21.0...v0.22.0

</details>

<details>
<summary><b>Update provider-alicloud to <code>1.65.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-alicloud:v1.65.0]

## 📰 Noteworthy
- `[OPERATOR]` Added support for immutable backup buckets in the Alicloud provider extension. Operators can configure immutability settings. Please refer to this doc: https://github.com/gardener/gardener-extension-provider-alicloud/blob/master/docs/usage/usage.md#BackupBucket by @ishan16696 [[#825](https://github.com/gardener/gardener-extension-provider-alicloud/pull/825)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug preventing all obsolete machine-controller-manager ClusterRoles and ClusterRoleBindings to be deleted on extension startup has been fixed. by @georgibaltiev [[#823](https://github.com/gardener/gardener-extension-provider-alicloud/pull/823)]

## 🏃 Others
- `[OPERATOR]` Upgrade gardener dependency to v1.123.1 by @theoddora [[#821](https://github.com/gardener/gardener-extension-provider-alicloud/pull/821)]
- `[OPERATOR]` Flow-base now supports zone CIDR named with worker ,  and enable migrate from worker to workers by @kevin-lacoo [[#836](https://github.com/gardener/gardener-extension-provider-alicloud/pull/836)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at `[example/extension.yaml](https://github.com/gardener/gardener-extension-provider-alicloud/blob/master/example/extension.yaml)` by @timuthy [[#833](https://github.com/gardener/gardener-extension-provider-alicloud/pull/833)]
- `[DEVELOPER]` disable upgrade-pullrequest-workflow for forks by @ccwienk [[#822](https://github.com/gardener/gardener-extension-provider-alicloud/pull/822)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#827](https://github.com/gardener/gardener-extension-provider-alicloud/pull/827)]
- `[OPERATOR]` Reverting the fix of creation of OSS backup-bucket with redundancy set to `ZRS` to `LRS` as some region doesn't support the ZRS. by @ishan16696 [[#826](https://github.com/gardener/gardener-extension-provider-alicloud/pull/826)]


## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.65.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.65.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.65.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.65.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.65.0`


</details>
