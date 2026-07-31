# [github.com/gardener/dashboard:1.84.5]

## ⚠️ Breaking Changes
- `[OPERATOR]` OIDC providers that do not support PKCE must explicitly configure `usePKCE: false` under `global.dashboard.oidc` when using the Helm chart. by @petersutter [[#3112](https://github.com/gardener/dashboard/pull/3112)]

## 🐛 Bug Fixes
- `[OPERATOR]` Hardened OIDC callback validation and enabled PKCE by default. by @petersutter [[#3112](https://github.com/gardener/dashboard/pull/3112)]

## application/spdx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:73ba9c529f8d032ffa57c9f575e92469b3ea6da6f3cea21e372ed09311ee816f`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:94ef182fdaa3db4b5f87edef28dc34ad24ede2903f55d34505d64ae1650be377`
## application/vnd.cyclonedx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:0ae614a587c98380579e070eddf0b63f3b216a59ae777c649e190b70c72a429f`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:f377d6cedf7fe55e774e20bcee6c80c930d9334b962963001e209c21f4cd9ded`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.5`
