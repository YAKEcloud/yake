# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @ialidzhikov [gardener/machine-controller-manager#834]
# [gardener/gardener-extension-provider-gcp]

## ✨ New Features

- `[USER]` The GCP extension does now support shoot clusters with Kubernetes version 1.27. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md) before upgrading to 1.27.  by @ary1992 [#615]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies were updated: by @dimityrmirchev [#618]
  - registry.k8s.io/sig-storage/csi-provisioner v3.4.0 -> v3.4.1
- `[DEPENDENCY]` The following dependency is updated: by @ary1992 [#604]
- github.com/gardener/gardener: v1.70.2 -> v1.73.0
- `[OPERATOR]` Old and obsolete logging configurations are removed. by @vlvasilev [#616]
- `[OPERATOR]` This extension is now build with golang 1.20.5. by @vpnachev [#622]
- `[DEVELOPER]` All code related to the removed `APIServerSNI` feature gate of `gardenlet` has been removed from this extension. by @rfranzke [#623]
## ⚠️ Breaking Changes

- `[OPERATOR]` With https://github.com/gardener/gardener-extension-provider-gcp/pull/283 provider-gcp migrated the volumesnapshot CRDs to a new dedicated ManagedResources. provider-gcp does now remove the ignored CRDs. by @ialidzhikov [#606]
- Before updating to this version of provider-gcp, make sure that the migration of the volumesnapshot CRDs from the `extension-controlplane-shoot` to the `extension-controlplane-shoot-crds`  ManagedResource completed. If the migration did not complete yet, GRM will interpret the removal of the CRDs as deletion and will delete the CRDs.