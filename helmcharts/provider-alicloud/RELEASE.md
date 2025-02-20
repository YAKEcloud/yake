# [gardener/gardener-extension-provider-alicloud]

## ✨ New Features

- `[USER]` Enable support for the field `shoot.Spec.CloudProfile` alongside `cloudProfileName` and enable the future use of `NamespacedCloudProfile`s. by @LucaBernstein [#755]
- `[USER]` The provider-alicloud extension does now support shoot clusters with Kubernetes version 1.32. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md) before upgrading to 1.32. by @LucaBernstein [#762]
## 🐛 Bug Fixes

- `[OPERATOR]` Correctly inject `podNetwork` cidr in control plane chart values. by @LucaBernstein [#763]
## 🏃 Others

- `[OPERATOR]` Add gosec as sast makefile target by @kevin-lacoo [#758]
- `[OPERATOR]` Add `NamespacedCloudProfile` admission mutation and validation to support custom machine images and types. by @LucaBernstein [#755]
# [gardener/machine-controller-manager-provider-alicloud]

## 🏃 Others

- `[OPERATOR]` Added `gosec` for Static Application Security Testing (SAST). by @aaronfern [gardener/machine-controller-manager-provider-alicloud#85]
- `[OPERATOR]` golangci-lint will now be used as the linter instead of the older golint by @aaronfern [gardener/machine-controller-manager-provider-alicloud#80]
- `[OPERATOR]` vendored MCM version has been upgraded to v0.56.0 by @aaronfern [gardener/machine-controller-manager-provider-alicloud#86]
- `[OPERATOR]` pipeline_integration_test now uses the control plane of a cluster to deploy objects part of its tests by @aaronfern [gardener/machine-controller-manager-provider-alicloud#86]
- `[USER]` Golang version updated to `1.22.5` by @rishabh-11 [gardener/machine-controller-manager-provider-alicloud#81]
- `[DEVELOPER]` Golang version updated to `1.23.3` by @aaronfern [gardener/machine-controller-manager-provider-alicloud#87]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.59.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.59.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.59.0`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.59.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.59.0`
