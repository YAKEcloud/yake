# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-aws` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#849]
- `[USER]` [csi-snapshotter] Enable prevent-volume-mode-conversion feature flag by default. Volume mode change can still be triggered with the respective annotations. You can read more in the [KEP](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/3141-prevent-volume-mode-conversion) by @AndreasBurger [#899]
## 🐛 Bug Fixes

- `[DEVELOPER]` `source-` prefix of `BackupEntry` name is being ignored when performing entry deletion by @Kostov6 [#892]
## 🏃 Others

- `[DEPENDENCY]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.87.0`->`v1.91.1`  
  - k8s.io/* : v0.28.3 -> v0.29.3  
  - sigs.k8s.io/controller-runtime: v0.16.3-> v0.17.2 by @shafeeqes [#901]
- `[OPERATOR]` The following images are updated:  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.25.14 -> v1.25.15  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.26.10 -> v1.26.11  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.27.5 -> v1.27.6  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.28.4 -> v1.28.5  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.29.1 -> v1.29.2 by @ialidzhikov [#900]
- `[OPERATOR]` add os information as labels in machine class objects. by @tedteng [#894]
- `[OPERATOR]` NodeGroupAutoscalingOptions can now be specified per worker group via the worker through the field `worker.spec.pools.clusterAutoscaler` by @shafeeqes [#901]

## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.54.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.54.0`
