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
