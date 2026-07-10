# [github.com/gardener/cert-management:v0.25.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The package `github.com/gardener/cert-manament/pkg/apis` has been made a Go submodule. by @MartinWeindel [[#754](https://github.com/gardener/cert-management/pull/754)]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#744](https://github.com/gardener/cert-management/pull/744)]

## application/spdx+json
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:03c55c9b92fba7809ae2fbaebf14c1e5f055aa017bad1d345f5a48a50ee3e08b`
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:7f21a795d3711409c6a6698c46df2d1cb59131ee06deb2b55905249ff0a69139`
## application/vnd.cyclonedx+json
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:0a42cfdceca2054537e8ee8434499f3174bc0745f5b9fbc27aedc1b6bd777365`
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:575d8631c6805b25786e9acf30f4011c314b2b697b52aba315b60e4233963110`
## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.25.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.25.0`
