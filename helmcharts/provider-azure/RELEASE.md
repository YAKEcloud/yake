# [gardener/machine-controller-manager-provider-azure]

## 🏃 Others

- `[OPERATOR]` pipeline_integration_test now uses the control plane of a cluster to deploy objects part of its tests by @aaronfern [gardener/machine-controller-manager-provider-azure#175]
- `[OPERATOR]` vendored MCM version has been upgraded to v0.56.0 by @aaronfern [gardener/machine-controller-manager-provider-azure#175]
# [gardener/gardener-extension-provider-azure]

## ✨ New Features

- `[USER]` The provider-azure extension does now support shoot clusters with Kubernetes version 1.32. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md) before upgrading to 1.32.  by @marc1404 [#1076]
- `[USER]` Allow users to disable the deployment of allow-* loadbalancers for outbound traffic. by @kon-angelo [#1099]
- `[USER]` The extension now supports `Shoot`s using `WorkloadIdentity`s instead of cloud provider credentials. by @dimityrmirchev [#999]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused deployment issues with the `gardener.cloud-fast` storage class when the extension was deployed by `gardener-operator` in the garden runtime cluster. The deployment of this `StorageClass` object is now only done for Azure seeds. by @timuthy [#1105]
- `[USER]` This PR prevents the deletion of certain user managed public IPs during flow reconciliation after Terraform migration by @hebelsan [#1052]
## 🏃 Others

- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#1082]
- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#1090]
- `[DEVELOPER]` Update Go to 1.24. by @marc1404 [#1102]
- `[DEPENDENCY]` Update `gardener/gardener` to `v1.113.0`. by @marc1404 [#1101]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.51.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.51.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.51.0`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.51.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.51.0`
