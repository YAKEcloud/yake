---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update garden-kube-apiserver to <code>5.7.2</code></b></summary>

## What's Changed
* kube-controller-manager enable root-ca-cert-publisher controller by @lotharbach in https://github.com/gardener-community/garden-kube-apiserver/pull/10


**Full Changelog**: https://github.com/gardener-community/garden-kube-apiserver/compare/v5.7.0...v5.7.2

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.123.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `gardener-resource-manager` is now excluded from `pod-kube-apiserver-load-balancing` webhook when running in garden runtime cluster. by @oliver-goetz [#12530]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.123.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `gardener-resource-manager` is now excluded from `pod-kube-apiserver-load-balancing` webhook when running in garden runtime cluster. by @oliver-goetz [#12530]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.123.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `gardener-resource-manager` is now excluded from `pod-kube-apiserver-load-balancing` webhook when running in garden runtime cluster. by @oliver-goetz [#12530]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.1`


</details>

<details>
<summary><b>Update cert-management to <code>0.17.8</code></b></summary>

# [gardener/cert-management]

## ✨ New Features

- `[USER]` Added support for subject alternative names (SANs) in the Certificate spec and certificate signing requests (CSRs). The following SANs have been added: emailAddresses, ipAddresses, and uris. by @marc1404 [#524]
## 🏃 Others

- `[DEVELOPER]` migrate CICD-Pipelines to GitHub-Actions by @ccwienk [#520]
- `[OPERATOR]` Fix the `linux/arm64` image build. by @MartinWeindel [#531]


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.63.2</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## 🏃 Others

- `[OPERATOR]` Update csi-plugin-alicloud tov1.31.4-75f6f4a-aliyun by @kevin-lacoo [#812]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.63.2`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.63.2`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.63.2`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.63.2`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.63.2`


</details>

<details>
<summary><b>Update provider-aws to <code>1.62.3</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[DEVELOPER]` run `make generate` for release- and bump-commits (again) by @kon-angelo [#1400]


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.32.0</code></b></summary>

# [gardener/gardener-extension-os-gardenlinux]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing `gardenlinux-update` tool to fail with version suffixes is now fixed. by @shafeeqes [#277]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.32.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.32.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.45.0</code></b></summary>

# [gardener/machine-controller-manager-provider-gcp]

## 🏃 Others

- `[USER]` Improved credentials configuration validation. by @aaronfern [gardener/machine-controller-manager-provider-gcp#155]
- `[OPERATOR]` machine-controller-manager-provider-gcp base image is updated to `gcr.io/distroless/static-debian12:nonroot` by @aaronfern [gardener/machine-controller-manager-provider-gcp#154]
# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[OPERATOR]` The native-SDK infrastructure reconciler is now promoted as default. Existing shoots will be migrated during their maintenance period and new shoots will automatically use this implementation without any need for the added annotations. Migration from the Terraformer implementation is still supported but will be removed in subsequent releases. by @kon-angelo [#1012]
## ✨ New Features

- `[USER]` This extension now supports in-place node updates. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/proposals/31-inplace-node-update.md). by @acumino [#1069]
- `[OPERATOR]` Add support for enabling the CSI Filestore driver by @hebelsan [#1095]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix Bastion deletion when VM details cannot be determined by @hebelsan [#1081]
## 🏃 Others

- `[OPERATOR]` Update `gardener/gardener` to `v1.120.0` [Release Notes](https://github.com/gardener/gardener/releases/tag/v1.120.0). by @acumino [#1069]
- `[OPERATOR]` The provider-gcp extension does now support shoot clusters with Kubernetes version 1.33. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md) before upgrading to 1.33. by @plkokanov [#1092]
- `[OPERATOR]` Upgrade vendored gardener/gardener `v1.120.1` -> `v1.121.1` by @hebelsan [#1097]
- `[OPERATOR]` Clients created by the GCP extension provider will now identify themselves by adding to the `user-agent` header of their calls. by @AndreasBurger [#1112]
- `[OPERATOR]` The cloud-controller-manager image for clusters running Kubernetes >= 1.33 is now updated to `v33.1.1`. by @plkokanov [#1113]
- `[OPERATOR]` Allow creating new internal subnet for an externally managed VPC if it didn't exist before. by @voelzmo [#1108]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.45.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.45.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.45.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.45.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.45.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.48.1</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🏃 Others

- `[OPERATOR]` Upgrade gardener dependency to v1.122.1 by @kon-angelo [#1106]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.48.1`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.48.1`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.48.1`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.48.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.48.1`


</details>
