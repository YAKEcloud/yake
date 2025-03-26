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

<details>
<summary><b>Update gardener-controlplane to <code>1.115.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @gardener-ci-robot [#11739]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @gardener-ci-robot [#11737]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.57.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`.  by @gardener-ci-robot [#11725]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.115.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.115.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.115.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.115.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.115.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.115.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.115.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @gardener-ci-robot [#11739]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @gardener-ci-robot [#11737]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.57.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`.  by @gardener-ci-robot [#11725]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.115.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.115.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.115.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.115.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.115.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.115.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.115.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @gardener-ci-robot [#11739]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @gardener-ci-robot [#11737]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.57.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`.  by @gardener-ci-robot [#11725]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.115.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.115.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.115.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.115.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.115.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.115.1`


</details>
