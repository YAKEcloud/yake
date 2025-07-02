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

<details>
<summary><b>Update runtime-gvisor to <code>0.22.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## 🏃 Others

- `[OPERATOR]` The gVisor binaries were updated to release `20250505.0`. by @Roncossek [#223]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.22.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.22.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.22.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.66.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[OPERATOR]` Patch dnsowners CRD with annotation `confirmation.gardener.cloud/deletion=true` before deleting it by @MartinWeindel [#504]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.66.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.66.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.66.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.66.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.66.0`


</details>

<details>
<summary><b>Update cert-management to <code>0.17.7</code></b></summary>

# [gardener/cert-management]

## ✨ New Features

- `[USER]` Added `cert.gardener.cloud/not-before` annotation and `IssuanceDate` field to `Certificate`. by @marc1404 [#489]
## 🏃 Others

- `[OPERATOR]` Support `cert.gardener.cloud/class` annotation for `issuers` by @MartinWeindel [#512]
## 📖 Documentation

- `[USER]` Documented the correct minimum duration of `Certificate`s assuming the default renewal window of 30 days. by @marc1404 [#495]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.17.7`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.17.7`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.40.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 📰 Noteworthy

- `[OPERATOR]` Update Go module dependencies by @chrkl [#128]
## 🏃 Others

- `[OPERATOR]` Add support for `CredentialsBinding` to identify shoot cost objects by @vicwicker [#129]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.40.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.40.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 📰 Noteworthy

- `[OPERATOR]` Update Go module dependencies by @chrkl [#128]
## 🏃 Others

- `[OPERATOR]` Add support for `CredentialsBinding` to identify shoot cost objects by @vicwicker [#129]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.40.0`


</details>
