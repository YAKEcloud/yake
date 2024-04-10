---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-calico to <code>1.39.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-calico` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#326]
## 🏃 Others

- `[OPERATOR]` Update calico to `v3.27.2`. by @gardener-ci-robot [#354]
- `[OPERATOR]` Set leader election namespace in calico admission deployment. by @DockToFuture [#335]
- `[OPERATOR]` Allow communication to runtime apiserver from admission deployment. by @DockToFuture [#336]

## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.39.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.39.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.33.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-cilium` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#233]
## 🏃 Others

- `[OPERATOR]` Update cilium to `v1.14.9` by @gardener-ci-robot [#259]
- `[OPERATOR]` Cilium configuration option `enable-l7-proxy` is now enabled per default. by @ScheererJ [#261]
- `[OPERATOR]` Fixed a validation error which occurs when deploying the `gardener-extension-admission-cilium` charts because of a missing `apiVersion` field in its `charts/gardener-extension-admission-cilium/charts/runtime/templates/serviceaccount.yaml` file. by @plkokanov [#241]
- `[OPERATOR]` Set leader election namespace in cilium admission deployment. by @DockToFuture [#243]

## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.33.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.33.0`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.4.0</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#57]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @ccwienk [#47]
- `[OPERATOR]` `extension-shoot-rsyslog-relp` no longer supports Shoots with Кubernetes version == 1.24. by @Kostov6 [#79]
## 📰 Noteworthy

- `[DEVELOPER]` The `charts/images.yaml` file was moved to `imagevector/images.yaml`. by @plkokanov [#66]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue where the `extension-shoot-rsyslog-relp-configuration-cleaner` ManagedResource could block Shoot deletion if the `shoot-rsyslog-relp` was disabled before the Shoot deletion was triggered, and disabling the extension failed while trying to deploy the said ManagedResource and wait for it to become ready.  by @plkokanov [#80]
## 🏃 Others

- `[OPERATOR]` Bumped `github.com/gardener/gardener` to `v1.89.0.` by @plkokanov [#73]
- `[OPERATOR]` The extension now deploys the `rsyslog` configuration files by mutating the `OperatingSystemConfig` resource via a mutating webhook. Cleanup of the `rsyslog` configuration files is still handled by the `rsyslog-relp-configuration-cleaner` daemonset. by @plkokanov [#41]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#57]
- `[OPERATOR]` Fixed an issue where `rsyslog.service` would never get enabled if it was not already enabled by default. by @plkokanov [#58]
- `[OPERATOR]` The name of the `gardener-extension-shoot-rsyslog-relp-admission` chart is now correctly specified as `gardener-extension-shoot-rsysloog-relp-admission`. Previously it was `gardener-extension-shoot-rsyslog-relp`. This should not require anything to be done by operators when upgrading the chart. by @plkokanov [#39]
- `[OPERATOR]` The repository is now compliant with the [REUSE](https://reuse.software/) license format. by @plkokanov [#71]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#57]
- `[DEVELOPER]` Bumped golang to `v1.22.0` by @plkokanov [#73]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.4.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.4.0`


</details>
