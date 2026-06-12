# [github.com/gardener/gardener-extension-registry-cache:v0.23.1]

## 🐛 Bug Fixes
- `[USER]` Fix malformed registry cache endpoint URLs when the registry cache Service in the Shoot contains an IPv6 clusterIP. IPv6 cluster IPs are now correctly wrapped in square brackets (e.g. `https://[2a05:d018:197f:7e06::1]:5000`) by @ialidzhikov [[#595](https://github.com/gardener/gardener-extension-registry-cache/pull/595)]

## application/spdx+json
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:6074c5c0911cae6867064a5e9136aa36ee0d1bc09349bf1146e28e5c482c19e3`
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:68df5efaf31a886056715f68e98a849fd041739f2292c24735b4ca03522cd215`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:04b37da88b472f6360385696c9e504f8154c9a150e64c59337a4a18b7c3cd590`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:70206af3dc00068f5700c0bc633678efea9d878ebe679f3dc9a87819f87dc837`
## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.23.1`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.23.1`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.23.1`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.23.1`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.23.1`
