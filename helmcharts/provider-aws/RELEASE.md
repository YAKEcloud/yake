# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-aws` no longer supports Shoots with Кubernetes version <= 1.26. by @shafeeqes [#1093]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @AleksandarSavchev [#1207]
## ✨ New Features

- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.32. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md) before upgrading to 1.32. by @LucaBernstein [#1206]
- `[USER]` The extension now supports `Shoot`s using `WorkloadIdentity`s instead of cloud provider credentials. by @dimityrmirchev [#1141]
## 🐛 Bug Fixes

- `[USER]` Recover from panics and print shoot information during infrastructure reconciliation by @kon-angelo [#1264]
- `[USER]` Fix an issue where the vpc-id was not properly added to the subnet filters by @kon-angelo [#1264]
## 🏃 Others

- `[OPERATOR]` Validate that all MachineImages in the CloudProfile map to a valid MachineImage in the CloudProfileConfig by @hebelsan [#1185]
- `[OPERATOR]` Update CSI container kube-api-* and worker arguments according to upstream recommendations.  by @kon-angelo [#1255]
- `[OPERATOR]` Fix an issue with missing network policies on ALBC webhook. by @kon-angelo [#1260]
- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#1229]
# [gardener/machine-controller-manager-provider-aws]

## ✨ New Features

- `[OPERATOR]` MCM now supports workload identity authentication. This can be configured if the secret contains `roleARN` and `workloadIdentityTokenFile`. by @dimityrmirchev [gardener/machine-controller-manager-provider-aws#177]
## 🏃 Others

- `[OPERATOR]` pipeline_integration_test now uses the control plane of a cluster to deploy objects part of its tests by @aaronfern [gardener/machine-controller-manager-provider-aws#184]
- `[OPERATOR]` vendored MCM version has been upgraded to v0.56.0 by @aaronfern [gardener/machine-controller-manager-provider-aws#184]
# [gardener/aws-custom-route-controller]

## ✨ New Features

- `[OPERATOR]` The controller now supports workload identity authentication. by @dimityrmirchev [gardener/aws-custom-route-controller#47]
## 🏃 Others

- `[OPERATOR]` Introduce multi-arch build for `linux/arm64` images. by @MartinWeindel [gardener/aws-custom-route-controller#136]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.61.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.61.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.61.0`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.61.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.61.0`
