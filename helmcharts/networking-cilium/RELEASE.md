# [gardener/gardener-extension-networking-cilium]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#199]
## ✨ New Features

- `[OPERATOR]` The `gardener-extension-admission-cilium` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#208]
## 🏃 Others

- `[OPERATOR]` Allow propagating pod routes to nodes without overlay network by specifying `shoot.spec.networking.providerConfig.overlay.createPodRoutes: true` by @ScheererJ [#203]
- `[OPERATOR]` Update cilium to `v1.14.0`. by @DockToFuture [#206]
- `[OPERATOR]` Update to cilium `v1.14.1`. by @DockToFuture [#209]