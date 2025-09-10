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
