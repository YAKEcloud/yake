# [github.com/gardener/gardener-extension-provider-alicloud:v1.69.0]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.35. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) before upgrading to 1.35. by @rfranzke [[#874](https://github.com/gardener/gardener-extension-provider-alicloud/pull/874)]

## 🏃 Others
- `[OPERATOR]` Updated dependency `gardener/gardener` to `v1.134.2` ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.2)). by @plkokanov [[#867](https://github.com/gardener/gardener-extension-provider-alicloud/pull/867)]
- `[OPERATOR]` Remove terraformer reconciler for infrastructure resources by @kevin-lacoo [[#871](https://github.com/gardener/gardener-extension-provider-alicloud/pull/871)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#875](https://github.com/gardener/gardener-extension-provider-alicloud/pull/875)]
- `[OPERATOR]` The `gardener.cloud-fast` StorageClass is now updated with `allowVolumeExpansion=true` to correctly reflect that it supports volume resize when the Gardener volume provider is CSI (`gardener.seed.volumeProvider=csi`). by @ialidzhikov [[#865](https://github.com/gardener/gardener-extension-provider-alicloud/pull/865)]
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @kevin-lacoo [[#884](https://github.com/gardener/gardener-extension-provider-alicloud/pull/884)]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.69.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.69.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.69.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.69.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.69.0`
