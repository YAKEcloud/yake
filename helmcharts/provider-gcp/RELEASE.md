# [gardener/gardener-extension-provider-gcp]

## ✨ New Features

- `[OPERATOR]` Workload identity can be now configured so that the federated identity impersonates a GCP Service Account. by @dimityrmirchev [#973]
- `[USER]` The provider-gcp extension does now support shoot clusters with Kubernetes version 1.32. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md) before upgrading to 1.32. by @LucaBernstein [#957]
- `[USER]` The extension now supports `Shoot`s using `WorkloadIdentity`s instead of cloud provider credentials. by @dimityrmirchev [#855]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused deployment issues with the `gardener.cloud-fast` storage class when the extension was deployed by `gardener-operator` in the garden runtime cluster. The deployment of this `StorageClass` object is now only done for GCP seeds. by @timuthy [#982]
- `[OPERATOR]` The bug which prevented buckets' immutability to be switched off is fixed. by @renormalize [#966]
- `[OPERATOR]` Fixed a bug where removing the ProviderConfig did not remove the retention policy from the bucket. Improved deletion behavior for immutable backup objects in GCP: when immediate deletion fails due to retention restrictions, the object's CustomTime is set, enabling delayed deletion via bucket lifecycle policies. by @seshachalam-yv [#1002]
## 🏃 Others

- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#972]
- `[OPERATOR]` Fix a dependency bug of flow log and log config. by @DockToFuture [#988]
- `[OPERATOR]` The egress CIDRs will be provided for dual-stack clusters only if both IPv4 and IPv6 egress CIDRs are known, i.e. the NAT gateway needs to be configured with static IPs. by @ScheererJ [#1000]
- `[OPERATOR]` Fix a bug causing the deletion of firewall rules from different shoots if the shoot names had identical prefixes by @kon-angelo [#985]
- `[OPERATOR]` Fix an issue where the filter for the listRoutes call was not applied correctly. by @kon-angelo [#953]
- `[OPERATOR]` Dual-stack clusters are only possible with Kubernetes v1.31 and above. by @ScheererJ [#999]
- `[OPERATOR]` Fix a missing property of the machine hash  
   by @kon-angelo [#979]
- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#960]
- `[OPERATOR]` Update golang to v1.24.0 by @kon-angelo [#977]
# [gardener/machine-controller-manager-provider-gcp]

## 🏃 Others

- `[USER]` Fix validation of Ipv6AccessType by @kron4eg [gardener/machine-controller-manager-provider-gcp#137]
- `[OPERATOR]` vendored MCM version has been upgraded to v0.56.0 by @aaronfern [gardener/machine-controller-manager-provider-gcp#139]
- `[OPERATOR]` pipeline_integration_test now uses the control plane of a cluster to deploy objects part of its tests by @aaronfern [gardener/machine-controller-manager-provider-gcp#139]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.43.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.43.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.43.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.43.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.43.0`
