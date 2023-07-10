# [gardener/gardener-extension-networking-cilium]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-cilium` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#194]
## ✨ New Features

- `[DEVELOPER]` This extension now uses the simplified `NetworkPolicy` approach for allowing traffic to its webhook server from `kube-apiserver`s of shoot clusters. by @rfranzke [#193]
## 🏃 Others

- `[OPERATOR]` bpf-policy-map-max value is increased to 65536. by @DockToFuture [#197]
- `[OPERATOR]` Update to cilium `v1.13.4`. by @DockToFuture [#196]