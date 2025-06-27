---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update os-coreos to <code>1.25.0</code></b></summary>

# [gardener/gardener-extension-os-coreos]

## 📰 Noteworthy

- `[OPERATOR]` It should be noted that this will **NOT** work for nodes already created with a default time sync service provided by this extension by @nschad [#190]
## ✨ New Features

- `[OPERATOR]` Added option to opt-out of the default ntp configuration provided by this extension. by @nschad [#190]
- `[OPERATOR]` Allow on shoot by shoot basis to override global extension options by @nschad [#192]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an RBAC issue when deploying this extension through the Gardener operator. by @Wieneo [#196]
- `[OPERATOR]` Restart ntpd if ntp.conf changes. by @dergeberl [#194]
- `[OPERATOR]` The provision OSC script does not run anymore when the node is rebooting.  by @oliver-goetz [#166]
## 🏃 Others

- `[OPERATOR]` The image repository in the Helm-Chart is updated to point to the current location in Google Artefact Repository (GAR). by @MrBatschner [#168]
- `[OPERATOR]` `extension-os-coreos` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#139]

## Helm Charts
- os-coreos: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-coreos:v1.25.0`
## Container (OCI) Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.25.0`


</details>

<details>
<summary><b>Update provider-hcloud to <code>0.6.41</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.41

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.27</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.26...0.7.27

</details>

<details>
<summary><b>Update external-dns-management to <code>0.25.2</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Fix sporadic failing updates on switching entries between simple and weighted routing policy. by @MartinWeindel [#524]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.25.2`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.25.2`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.20.1</code></b></summary>

## What's Changed
* Fix lease RBAC by @Wieneo in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/163


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.20.0...v0.20.1

</details>
