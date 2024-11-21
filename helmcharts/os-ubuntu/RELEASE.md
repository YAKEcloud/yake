# [gardener/gardener-extension-os-ubuntu]

## ⚠️ Breaking Changes

- `[OPERATOR]` This extension is no longer able to run with Gardener versions lower than `v1.90` when the `UseGardenerNodeAgent` feature gate is disabled. by @rfranzke [#126]
## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#143]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @LucaBernstein [#133]
- `[DEVELOPER]` Static Application Security Testing (sast) with `gosec` got enabled on this repository. by @MrBatschner [#163]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.26.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.26.0`
