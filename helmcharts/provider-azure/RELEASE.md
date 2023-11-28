# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug which caused an empty `vmType` under certain conditions has been fixed. Empty `vmType`s prevent load balancers from being deleted on Kubernetes v1.28 shoots. by @oliver-goetz [#755]

## Docker Images
- gardener-extension-admission-azure: `eu.gcr.io/gardener-project/gardener/extensions/admission-azure:v1.39.3`
- gardener-extension-provider-azure: `eu.gcr.io/gardener-project/gardener/extensions/provider-azure:v1.39.3`
