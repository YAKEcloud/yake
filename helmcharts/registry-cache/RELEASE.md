# [github.com/gardener/gardener-extension-registry-cache:v0.24.0]

## 🐛 Bug Fixes
- `[USER]` Fix malformed registry cache endpoint URLs when the registry cache Service in the Shoot contains an IPv6 clusterIP. IPv6 cluster IPs are now correctly wrapped in square brackets (e.g. `https://[2a05:d018:197f:7e06::1]:5000`) by @I501307 [[#591](https://github.com/gardener/gardener-extension-registry-cache/pull/591)]

## 🏃 Others
- `[OPERATOR]` Monitoring resources (Grafana dashboard, PrometheusRule, ScrapeConfig) are no longer deployed for the registry cache extension for Shoots with `.spec.purpose=testing`. by @DobromirNPeev [[#590](https://github.com/gardener/gardener-extension-registry-cache/pull/590)]
- `[OPERATOR]` The update mode of the VerticalPodAutoscaler resources deployed by the registry-cache extension is now explicitly set to `InPlaceOrRecreate`, reflecting the actual runtime behavior after the unconditional enablement of the `VPAInPlaceUpdates` feature gate. by @DobromirNPeev [[#606](https://github.com/gardener/gardener-extension-registry-cache/pull/606)]

## application/spdx+json
- gardener-extension-registry-cache-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:65a3333e16422c608e06bbbab0cd1e48e58e90910261c259c2531b0ec83505a4`
- gardener-extension-registry-cache-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:d2446ec9c96b3b170eb772751c95319156f909682a3a3a96c22ff720ebeaabd1`
- gardener-extension-registry-cache-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:870ffdf688d181dfea4fc92292994672cbc03b38ecd7b074b5af716c0fe02cf3`
- gardener-extension-registry-cache-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:92dbfa2a76436db98dc3f9acc35dc412671b37403d3950b75615782933ee3e77`
## application/vnd.cyclonedx+json
- gardener-extension-registry-cache-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:a55bb4767712ba3af189059251d5e3ae7081c0ea3c5c21c5531d62c6d16b9b8b`
- gardener-extension-registry-cache-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:c619ea61f4737ab74780d412ed146f16721b8a6290489232b80ba90c13fe6105`
- gardener-extension-registry-cache-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:2d665dd71231d4e8387c9e6713be54016e19b8e064f252df079ccd2f0e38b7db`
- gardener-extension-registry-cache-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:771d086c2f44a3784ded55f82d3a9dd9e7b79198d370ae0a3e6d785e4191f9c4`
## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.24.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.24.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.24.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.24.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.24.0`
