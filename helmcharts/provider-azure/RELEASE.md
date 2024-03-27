# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[USER]` Extend the user of deprecated topology labels until `<=v1.29`. Azure clusters upgrading to v1.30 should make sure to have migrated away from the deprecated [topology labels](failure-domain.beta.kubernetes.io/zone). See https://github.com/kubernetes-sigs/cloud-provider-azure/issues/2453 for more details. by @kon-angelo [#813]
## 🏃 Others

- `[OPERATOR]` Fix an issue where the vnet name was not correctly calculated in status by @kon-angelo [#812]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.42.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.42.1`
