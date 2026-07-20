# [github.com/gardener/dashboard:1.84.4]

## 🐛 Bug Fixes
- `[USER]` The Gardener dashboard now sends ETag headers for SPA fallback responses such as /login. This improves browser cache validation and fixes an issue where rolling back to a previous dashboard version could make browsers reuse stale HTML that referenced assets no longer present on the server, causing 404 errors and failed page loads by @grolu [[#3076](https://github.com/gardener/dashboard/pull/3076)]
- `[USER]` Fix status sort order to include the 'Error' state by @petersutter [[#3065](https://github.com/gardener/dashboard/pull/3065)]
- `[USER]` Prevent a TypeError in the HTTP/2 session pool heartbeat when the underlying socket is no longer available. by @petersutter [[#3011](https://github.com/gardener/dashboard/pull/3011)]

## application/spdx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:54e584ddc2aa7b7b1d9206bcc5aaf70530269c13f245bee33e39b4ce9fae46e0`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:c74370b37e4ffda986f04cdc513bb68408439d40254fd09daaec77558d0891db`
## application/vnd.cyclonedx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:1983c6eb7b43cb2f63741fbe1fb496497edce423a2c8e31654e0a2df1d38245f`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:9812cacf7af1106acf03b7122ce76e6b75ad3966ddcb3f23f527bd1ec088ccbc`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.4`
