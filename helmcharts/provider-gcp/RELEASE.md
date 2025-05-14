# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` Machine Controller Manager now supports a new machine deployment strategy called InPlaceUpdate. by @acumino [gardener/machine-controller-manager#973]
## 🐛 Bug Fixes

- `[OPERATOR]` A new termination queue to handle machines scheduled for deletion introduced to separate creation requests from deletion by @takoverflow [gardener/machine-controller-manager#964]
- `[OPERATOR]` machine-controller-manager version, and build information are printed at startup. by @renormalize [gardener/machine-controller-manager#985]
## 🏃 Others

- `[OPERATOR]` Integration test framework enhancements for resource and process cleanup by @takoverflow [gardener/machine-controller-manager#968]
- `[OPERATOR]` Resource exhaustion on machine creation results in a longer retry period by @takoverflow [gardener/machine-controller-manager#981]
# [gardener/machine-controller-manager-provider-gcp]

## 📰 Noteworthy

- `[DEVELOPER]` Golang version updated to `1.24.1` by @aaronfern [gardener/machine-controller-manager-provider-gcp#145]
- `[OPERATOR]` The `gardener/machine-controller-manager` dependency has been updated to `v0.57.1`. [Release Notes](https://github.com/gardener/machine-controller-manager/releases/tag/v0.57.1) by @aaronfern [gardener/machine-controller-manager-provider-gcp#144]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.43.3`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.43.3`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.43.3`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.43.3`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.43.3`
