# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[USER]` [csi-snapshotter] Enable prevent-volume-mode-conversion feature flag by default. Volume mode change can still be triggered with the respective annotations. You can read more in the [KEP](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/3141-prevent-volume-mode-conversion) by @hebelsan [#809]
- `[OPERATOR]` `provider-azure` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#769]
## 🏃 Others

- `[OPERATOR]` Update clients for dns, storage, compute, and msi to use the new Azure SDK libraries by @AndreasBurger [#833]
- `[OPERATOR]` add os information as labels in machine class objects. by @tedteng [#816]
- `[OPERATOR]` Deployment of the Remedy Controller can now additionally be controlled using the `DisableRemedyController` feature gate. by @AndreasBurger [#806]
- `[OPERATOR]` The Azure instance to connect to can now be configured in the CloudProfile and BackupBucket/BackupEntry. by @AndreasBurger [#815]
- `[OPERATOR]` NodeGroupAutoscalingOptions can now be specified per worker group via the worker through the field `worker.spec.pools.clusterAutoscaler` by @aaronfern [#831]
- `[DEPENDENCY]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.87.0`->`v1.91.1`  
  - k8s.io/* : v0.28.3 -> v0.29.3  
  - sigs.k8s.io/controller-runtime: v0.16.3-> v0.17.2  
  - sigs.k8s.io/controller-tools v0.13.0-> v0.14.0  by @hebelsan [#814]
# [gardener/machine-controller-manager-provider-azure]

## 🏃 Others

- `[USER]` Bugfix:- During VM deletion, the cascade delete option is set only for the resources part of VM creation.  by @rishabh-11 [gardener/machine-controller-manager-provider-azure#143]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.43.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.43.0`
