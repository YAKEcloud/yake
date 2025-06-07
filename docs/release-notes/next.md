---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-flux to <code>0.19.0</code></b></summary>

## What's Changed
* renovate: disable semantic commits by @timebertt in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/152
* 🤖 Update module github.com/ironcore-dev/vgopath to v0.1.8 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/147
* 🤖 Update module golang.org/x/tools to v0.33.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/149
* 🤖 Update module github.com/go-logr/logr to v1.4.3 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/153
* 🤖 Update module github.com/onsi/gomega to v1.37.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/148
* 🤖 Update k8s.io/utils digest to 0f33e8f by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/145
* 🤖 Update module github.com/gardener/gardener to v1.120.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/150
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.23.4 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/146
* 🤖 Update module github.com/gardener/gardener to v1.120.1 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/143
* 🤖 Update fluxcd (minor) by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/154


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.18.0...v0.19.0

</details>

<details>
<summary><b>Update provider-alicloud to <code>1.62.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## ✨ New Features

- `[USER]` This extension now supports in-place node updates. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/proposals/31-inplace-node-update.md). by @ary1992 [#795]
## 🏃 Others

- `[OPERATOR]` Obsolete ClusterRoles and ClusterRoleBindings that were leftovers from the machine-controller-manager component are now cleaned up. by @georgibaltiev [#794]
- `[OPERATOR]` Update `gardener/gardener` to `v1.117.0` [Release Notes](https://github.com/gardener/gardener/releases/tag/v1.117.0) by @kevin-lacoo [#786]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.62.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.62.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.62.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.62.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.62.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.25.1</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Ensure ignored entries are not deleted on cleanup in an edge case. by @MartinWeindel [#505]
## 🏃 Others

- `[USER]` [provider type openstack-designate] Allow secret key `authURL` as alias of `OS_AUTH_URL` by @MartinWeindel [#504]
- `[OPERATOR]` Bump `openstack-designate` provider library `gophercloud` from version `v0.24.0` to `v2.7.0`. by @MartinWeindel [#481]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.25.1`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.25.1`


</details>
