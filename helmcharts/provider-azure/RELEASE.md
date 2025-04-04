# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[OPERATOR]` Enabling the immutable bucket feature is a breaking change, as it requires additional permissions. The permissions given to your credential are to be first modified before enabling the alpha feature. by @renormalize [#1098]
## 📰 Noteworthy

- `[OPERATOR]` Azure Blob Storage Containers can now be configured to be created with container-level immutability settings.  by @renormalize [#1098]
## ✨ New Features

- `[OPERATOR]` The immutable bucket feature is currently in alpha state. The immutable bucket feature can be enabled by enabling `config.featureGates.enableImmutableBuckets`. More information can be found in `docs/usage/usage.md`. by @renormalize [#1098]
## 🏃 Others

- `[OPERATOR]` `provider-azure` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#997]
- `[OPERATOR]` Implement etcd credential rotation by @kon-angelo [#1114]
- `[USER]` Update worker pool hash if diagnostic profile option is enabled by @hebelsan [#1122]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.52.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.52.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.52.0`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.52.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.52.0`
