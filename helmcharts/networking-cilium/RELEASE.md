# [gardener/gardener-extension-networking-cilium]

## ✨ New Features

- `[USER]` `networking-cilium` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @shafeeqes [#218]
## 🏃 Others

- `[OPERATOR]` Egress gateway validation is fixed in case kube-proxy is disabled. by @DockToFuture [#220]
- `[OPERATOR]` Update cilium to `v1.14.3`. by @DockToFuture [#222]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.76.0 -> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @shafeeqes [#213]

## Docker Images
gardener-extension-admission-cilium: `eu.gcr.io/gardener-project/gardener/extensions/admission-cilium:v1.30.0`
gardener-extension-networking-cilium: `eu.gcr.io/gardener-project/gardener/extensions/networking-cilium:v1.30.0`
