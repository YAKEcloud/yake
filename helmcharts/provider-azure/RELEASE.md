# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` Machine Controller Manager now supports a new machine deployment strategy called InPlaceUpdate. by @acumino [gardener/machine-controller-manager#973]
## 🐛 Bug Fixes

- `[OPERATOR]` A new termination queue to handle machines scheduled for deletion introduced to separate creation requests from deletion by @takoverflow [gardener/machine-controller-manager#964]
- `[OPERATOR]` machine-controller-manager version, and build information are printed at startup. by @renormalize [gardener/machine-controller-manager#985]
## 🏃 Others

- `[OPERATOR]` Integration test framework enhancements for resource and process cleanup by @takoverflow [gardener/machine-controller-manager#968]
- `[OPERATOR]` Resource exhaustion on machine creation results in a longer retry period by @takoverflow [gardener/machine-controller-manager#981]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.52.3`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.52.3`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.52.3`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.52.3`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.52.3`
