# [github.com/gardener/gardener-extension-networking-cilium:v1.48.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#717](https://github.com/gardener/gardener-extension-networking-cilium/pull/717)]

## 🐛 Bug Fixes
- `[USER]` Respect NetworkConfig Hubble settings in cilium-config by @hown3d [[#741](https://github.com/gardener/gardener-extension-networking-cilium/pull/741)]

## 🏃 Others
- `[OPERATOR]` Updated charts and images to cilium v1.19.4 by @axel7born [[#734](https://github.com/gardener/gardener-extension-networking-cilium/pull/734)]
- `[OPERATOR]` Cilium agent and `cilium-envoy` DaemonSets now set `revisionHistoryLimit=2` to comply with the gardener component checklist. by @alliasgher [[#718](https://github.com/gardener/gardener-extension-networking-cilium/pull/718)]

## application/spdx+json
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:00c4a2d89a41d2063357062a9ec50c314eae1441834da0357c1139ae9ad58bcd`
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:e851c60b1c7002355655dbb68a6060a66c93d31bdb5843491ab42651921c8cbb`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:42c30fd0ae8b96d2d42a4a7727dfb4c4bd054a6e862a74a8d5dcdbaab6cc0b49`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:501966b6f66dab86dd285b1637c7764111c1f803fdea11e8aa6b5d5f16f862ce`
## application/vnd.cyclonedx+json
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:42799ddddfa6ff18c805412f01ac343acddddd21b52ac594519fb4255177fff6`
- gardener-extension-admission-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium@sha256:a2cfc08ae6b233fce138bbdda800e0e0b8ee501c0f77fa780def3d7197f54d4f`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:9097174a5fa3ffd7183b6855ab98d559fe621eeb6199362c327e5d61ddab945d`
- gardener-extension-networking-cilium-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium@sha256:e86512d24c5a0f199f92a16a8eba971b2b5bbd1b383da6d514700813781943f8`
## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.48.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.48.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.48.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.48.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.48.0`
