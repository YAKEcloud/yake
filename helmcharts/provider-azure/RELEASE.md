# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[USER]` Disk detachment step is skipped while terminating terminal state vms. Terminal state vms have `provisioningState` as `Failed` by @himanshu-kun [#773]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.40.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.40.1`
