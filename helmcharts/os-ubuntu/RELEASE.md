# [github.com/gardener/gardener-extension-os-ubuntu:v1.41.0]

## 📰 Noteworthy
- `[OPERATOR]` The extension now supports custom `aptRepositories` (with optional GPG keys via inline key or key URL) and configurable `dependencies`. This allows installing different versions of dependencies like containerd from other sources based on the Ubuntu version and Ubuntu build serial. by @xoxys [[#321](https://github.com/gardener/gardener-extension-os-ubuntu/pull/321)]

## 🏃 Others
- `[OPERATOR]` The update mode of the VerticalPodAutoscaler resources deployed by the gardener-extension-os-ubuntu is now explicitly set to `InPlaceOrRecreate`, reflecting the actual runtime behavior after the unconditional enablement of the `VPAInPlaceUpdates` feature gate. by @DobromirNPeev [[#322](https://github.com/gardener/gardener-extension-os-ubuntu/pull/322)]

## application/spdx+json
- gardener-extension-os-ubuntu-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:3f105690b18e51588e7f10b9a422332693b1466b2a818373da398b490ee96491`
- gardener-extension-os-ubuntu-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:56651f20f5b8e07800e7cd70e9c021523f252e720878473858554dd6d6d64390`
## application/vnd.cyclonedx+json
- gardener-extension-os-ubuntu-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:b128f71cf61fc1d9861c65c5749a3dcf05549c97a7c77b143287b52feba5a061`
- gardener-extension-os-ubuntu-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu@sha256:b1b6c662a06f5eaae4ac423e815b813ac3a9fa1d1d1809496fef747f37506f38`
## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.41.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.41.0`
