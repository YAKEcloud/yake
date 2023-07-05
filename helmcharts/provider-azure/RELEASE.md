# [gardener/gardener-extension-provider-azure]

## ✨ New Features

- `[USER]` The Azure extension does now support shoot clusters with Kubernetes version 1.27. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md) before upgrading to 1.27.  by @ary1992 [#699]
## 🏃 Others

- `[OPERATOR]` Fix an issue with the bastion integration testing panicking on cleanup due to the security group having being deleted. by @kon-angelo [#709]
- `[OPERATOR]` Old and obsolete logging configurations are removed. by @vlvasilev [#700]
- `[OPERATOR]` Add calico scheme to azure-validator. by @kon-angelo [#696]
- `[OPERATOR]` The following images are updated:  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-controller-manager: v1.24.20 -> v1.24.21 (for Kubernetes 1.24)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-controller-manager: v1.25.14 -> v1.25.15 (for Kubernetes 1.25)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.23.25 -> v1.23.30 (for Kubernetes 1.23)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.24.14 -> v1.24.21 (for Kubernetes 1.24)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.25.6 -> v1.25.15 (for Kubernetes 1.25)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.26.2 -> v1.26.11 (for Kubernetes 1.26) by @ary1992 [#699]
- `[OPERATOR]` Update azure-validator to use the lenient decoder for Calico resources. by @kon-angelo [#698]
- `[DEPENDENCY]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.70.2 -> v1.71.2 by @ary1992 [#693]
- `[DEPENDENCY]` The following dependencies were updated:  
    - registry.k8s.io/sig-storage/csi-provisioner v3.4.0 -> v3.4.1 by @dimityrmirchev [#702]
- `[DEVELOPER]` All code related to the removed `APIServerSNI` feature gate of `gardenlet` has been removed from this extension. by @rfranzke [#704]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @ialidzhikov [gardener/machine-controller-manager#834]