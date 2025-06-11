# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[USER]` The worker pool hash calculation for workers with in-place update strategy no longer depends on the `NewWorkerPoolHash` feature gate. by @hebelsan [#1352]
## 🐛 Bug Fixes

- `[USER]` Fix nil pointer dereference error when switching from managed to custom elastic Natgateway IP  by @hebelsan [#1351]
## 🏃 Others

- `[DEPENDENCY]` vendor gardener@v1.120 by @hebelsan [#1352]
