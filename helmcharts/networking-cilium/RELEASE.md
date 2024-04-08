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
