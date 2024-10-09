# [gardener/gardener-extension-runtime-gvisor]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#138]
## 🏃 Others

- `[OPERATOR]` This extension now deploys gVisor `20240930` to Shoot clusters. by @MrBatschner [#146]
- `[USER]` gVisor was updated to `20240603.0`. by @MrBatschner [#127]
- `[USER]` Alpine in the gVisor installation container was updated to `3.18.6` to provide a fix for [CVE-2024-0727](https://nvd.nist.gov/vuln/detail/CVE-2024-0727). by @MrBatschner [#127]
- `[DEPENDENCY]` Update go version to `v1.22.0` by @LucaBernstein [#126]
- `[DEPENDENCY]` Update gardener/gardener version to `v1.96.1` by @LucaBernstein [#126]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @LucaBernstein [#126]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.15.0`
## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.15.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.15.0`
