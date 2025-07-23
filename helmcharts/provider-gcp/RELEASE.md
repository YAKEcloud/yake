# [gardener/machine-controller-manager-provider-gcp]

## 🏃 Others

- `[USER]` Improved credentials configuration validation. by @aaronfern [gardener/machine-controller-manager-provider-gcp#155]
- `[OPERATOR]` machine-controller-manager-provider-gcp base image is updated to `gcr.io/distroless/static-debian12:nonroot` by @aaronfern [gardener/machine-controller-manager-provider-gcp#154]
# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[OPERATOR]` The native-SDK infrastructure reconciler is now promoted as default. Existing shoots will be migrated during their maintenance period and new shoots will automatically use this implementation without any need for the added annotations. Migration from the Terraformer implementation is still supported but will be removed in subsequent releases. by @kon-angelo [#1012]
## ✨ New Features

- `[USER]` This extension now supports in-place node updates. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/proposals/31-inplace-node-update.md). by @acumino [#1069]
- `[OPERATOR]` Add support for enabling the CSI Filestore driver by @hebelsan [#1095]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix Bastion deletion when VM details cannot be determined by @hebelsan [#1081]
## 🏃 Others

- `[OPERATOR]` Update `gardener/gardener` to `v1.120.0` [Release Notes](https://github.com/gardener/gardener/releases/tag/v1.120.0). by @acumino [#1069]
- `[OPERATOR]` The provider-gcp extension does now support shoot clusters with Kubernetes version 1.33. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md) before upgrading to 1.33. by @plkokanov [#1092]
- `[OPERATOR]` Upgrade vendored gardener/gardener `v1.120.1` -> `v1.121.1` by @hebelsan [#1097]
- `[OPERATOR]` Clients created by the GCP extension provider will now identify themselves by adding to the `user-agent` header of their calls. by @AndreasBurger [#1112]
- `[OPERATOR]` The cloud-controller-manager image for clusters running Kubernetes >= 1.33 is now updated to `v33.1.1`. by @plkokanov [#1113]
- `[OPERATOR]` Allow creating new internal subnet for an externally managed VPC if it didn't exist before. by @voelzmo [#1108]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.45.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.45.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.45.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.45.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.45.0`
