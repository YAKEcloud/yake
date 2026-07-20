# [github.com/gardener/cert-management:v0.25.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The package `github.com/gardener/cert-manament/pkg/apis` has been made a Go submodule. by @MartinWeindel [[#754](https://github.com/gardener/cert-management/pull/754)]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#744](https://github.com/gardener/cert-management/pull/744)]

# [github.com/gardener/cert-management:v0.24.1]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#745](https://github.com/gardener/cert-management/pull/745)]

# [github.com/gardener/cert-management:v0.26.0]

## 🏃 Others
- `[OPERATOR]` Improve container build: cache mounts, multi-arch, digest pinning by @MartinWeindel [[#763](https://github.com/gardener/cert-management/pull/763)]

## application/spdx+json
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:e5576f533d9a1136b3416008c7e295894996bd8993cf02a297d8da4b2d204298`
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:ee0aab57504718c2125737d63a55d1029f53020759019447e04a34d169fecb9a`
## application/vnd.cyclonedx+json
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:8bc2445745bec4db29f8d9c3ddb0df546af3fef6da7abbd50796ba3c558ac8f0`
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:a30a3fa18f4ba7eab638d46cc6175eed0bccff27cc3e704a3b89485c218dafe4`
## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.63.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.63.0`
