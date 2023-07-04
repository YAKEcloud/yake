# [gardener/gardener-extension-provider-aws]

## ✨ New Features

- `[DEVELOPER]` This extension now uses the simplified `NetworkPolicy` approach for allowing traffic to its webhook server from `kube-apiserver`s of shoot clusters. by @rfranzke [#772]
- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.27. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md) before upgrading to 1.27.  by @ary1992 [#759]
## ⚠️ Breaking Changes

- `[OPERATOR]` With https://github.com/gardener/gardener-extension-provider-aws/pull/337 provider-aws migrated the volumesnapshot CRDs to a new dedicated ManagedResources. provider-aws does now remove the ignored CRDs. by @ialidzhikov [#752]
- Before updating to this version of provider-aws, make sure that the migration of the volumesnapshot CRDs from the `extension-controlplane-shoot` to the `extension-controlplane-shoot-crds`  ManagedResource completed. If the migration did not complete yet, GRM will interpret the removal of the CRDs as deletion and will delete the CRDs.
## 🏃 Others

- `[OPERATOR]` Old and obsolete logging configurations are removed. by @vlvasilev [#765]
- `[DEPENDENCY]` The following dependencies were updated: by @dimityrmirchev [#768]
  - registry.k8s.io/sig-storage/csi-provisioner v3.4.0 -> v3.4.1
- `[DEVELOPER]` All code related to the removed `APIServerSNI` feature gate of `gardenlet` has been removed from this extension. by @rfranzke [#773]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix the name of the aws-csi-volume-modifier container the in the respective VPA resource. by @bd3lage [#763]
- `[OPERATOR]` Handle S3 bucket policy IAM ARN for China and GovCloud (US) regions. by @shreyas-s-rao [#766]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @ialidzhikov [gardener/machine-controller-manager#834]