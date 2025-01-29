# [gardener/remedy-controller]

## ✨ New Features

- `[OPERATOR]` The remedy controller now supports authentication via federated token. The file containing the token can be specified via the "aadFederatedTokenFile" field. by @dimityrmirchev [gardener/remedy-controller#64]
## 🏃 Others

- `[OPERATOR]` Update golang to v1.23.5 by @kon-angelo [gardener/remedy-controller#66]
- `[DEPENDENCY]` Introduce SAST checking by @kon-angelo [gardener/remedy-controller#66]
- `[DEPENDENCY]` Update gardener to v1.110.4 by @kon-angelo [gardener/remedy-controller#66]
- `[DEPENDENCY]` Update go version to `v1.22.0` by @LucaBernstein [gardener/remedy-controller#63]
- `[DEPENDENCY]` Update gardener/gardener version to `v1.96.2` by @LucaBernstein [gardener/remedy-controller#63]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @LucaBernstein [gardener/remedy-controller#63]
# [gardener/terraformer]

## 🐛 Bug Fixes

- `[DEVELOPER]` Provider `azurerm` was updated to version 3.47.0 and is now properly recognising the `ARM_OIDC_TOKEN_FILE_PATH` env variable. by @dimityrmirchev [gardener/terraformer#156]
## 🏃 Others

- `[OPERATOR]` Update golang to `v1.23.5` by @kon-angelo [gardener/terraformer#157]
- `[OPERATOR]` Update alpine to `v3.21.2` by @kon-angelo [gardener/terraformer#157]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.49.4`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.49.4`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.49.4`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.49.4`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.49.4`
