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
