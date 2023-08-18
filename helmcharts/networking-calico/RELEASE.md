# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#280]
## ✨ New Features

- `[OPERATOR]` The `gardener-extension-admission-calico` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#289]
## 🏃 Others

- `[OPERATOR]` Allow propagating pod routes to nodes without overlay network by specifying `shoot.spec.networking.providerConfig.overlay.createPodRoutes: true` by @ScheererJ [#285]