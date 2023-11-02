# [gardener/gardener-extension-networking-calico]

## ✨ New Features

- `[USER]` `networking-calico` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @shafeeqes [#302]
## 🏃 Others

- `[OPERATOR]` Update calico to version `3.26.2` and make sure that tyhpa gets scheduled on all nodes. by @DockToFuture [#304]
- `[OPERATOR]` Update calico to `v3.26.3`. by @DockToFuture [#308]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.76.0 -> v1.77.2 by @shafeeqes [#293]
- `[OPERATOR]` Add autoscaling mode for calico node/typha, for vpa mode (autoScaling.mode: vpa), for cluster-proportional mode (autoScaling.mode: cluster-proportional) by @jfortin-sap [#286]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.79.1 -> v1.80.1  
  - k8s.io/* : v0.27.5 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.15.2-> v0.16.2 by @shafeeqes [#300]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.2 -> v1.79.1  
  - k8s.io/* : v0.26.3 -> v0.27.5  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.15.2 by @shafeeqes [#296]
- `[OPERATOR]` Vertical and horizontal cluster-proportional autoscalers for calico-typha now use different label selectors. by @ScheererJ [#297]

## Docker Images
gardener-extension-admission-calico: `eu.gcr.io/gardener-project/gardener/extensions/admission-calico:v1.37.0`
gardener-extension-networking-calico: `eu.gcr.io/gardener-project/gardener/extensions/networking-calico:v1.37.0`
