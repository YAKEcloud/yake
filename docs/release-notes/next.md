---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-dns-service to <code>1.62.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Selection of dns-controller-manager image by seed-label `service.dns.extensions.gardener.cloud/drop-metadata-records` has been removed. The current dns-controller-manager image dropping the metadata records is always used. by @MartinWeindel [#452]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.62.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.62.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.62.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.62.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.62.0`


</details>

<details>
<summary><b>Update garden-kube-apiserver to <code>5.4.0</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/garden-kube-apiserver/compare/v5.3.0...v5.4.0

</details>

<details>
<summary><b>Update provider-openstack to <code>1.47.0</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## ✨ New Features

- `[USER]` The provider-openstack extension does now support shoot clusters with Kubernetes version 1.32. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md) before upgrading to 1.32. by @LucaBernstein [#969]
- `[DEVELOPER]` Updates gophercloud client to v2 by @hebelsan [#951]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused deployment issues with the `gardener.cloud-fast` storage class when the extension was deployed by `gardener-operator` in the garden runtime cluster. The deployment of this `StorageClass` object is now only done for OpenStack seeds. by @timuthy [#994]
- `[OPERATOR]` infraflow: report last error on task timeouts by @hown3d [#970]
- `[OPERATOR]` Correctly select endpoints in multi-region OpenStack environments by @mreichardt95 [#995]
## 🏃 Others

- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#997]
- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#985]
- `[OPERATOR]` Adjust replica count from high-availability webhook mutation according to the helm chart. by @kon-angelo [#918]
- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#981]
- `[OPERATOR]` Validate that all MachineImages in the CloudProfile map to a valid MachineImage in the CloudProfileConfig  by @hebelsan [#943]
- `[OPERATOR]` Locate the first ipv4 instead of using the first available FIP in bastion controller by @kon-angelo [#1005]
- `[OPERATOR]` `provider-openstack` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#889]
- `[OPERATOR]` Update golang to v1.24.0 by @kon-angelo [#989]
- `[DEPENDENCY]` Upgrade gardener dependency to v1.113.0 by @kon-angelo [#991]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.47.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.47.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.47.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.47.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.47.0`


</details>
