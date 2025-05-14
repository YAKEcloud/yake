# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` Machine Controller Manager now supports a new machine deployment strategy called InPlaceUpdate. by @acumino [gardener/machine-controller-manager#973]
## 🐛 Bug Fixes

- `[OPERATOR]` machine-controller-manager version, and build information are printed at startup. by @renormalize [gardener/machine-controller-manager#985]
- `[OPERATOR]` A new termination queue to handle machines scheduled for deletion introduced to separate creation requests from deletion by @takoverflow [gardener/machine-controller-manager#964]
## 🏃 Others

- `[OPERATOR]` Resource exhaustion on machine creation results in a longer retry period by @takoverflow [gardener/machine-controller-manager#981]
- `[OPERATOR]` Integration test framework enhancements for resource and process cleanup by @takoverflow [gardener/machine-controller-manager#968]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.61.2`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.61.2`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.61.2`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.61.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.61.2`
