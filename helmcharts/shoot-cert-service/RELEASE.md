# [github.com/gardener/cert-management:v0.24.1]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#745](https://github.com/gardener/cert-management/pull/745)]

## application/spdx+json
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:096574bd0579a14e39d1e509fa00dbafb89a197493bfc48dc92fd02522694422`
- gardener-extension-shoot-cert-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:1c78b07b4ecf4cdad93bb6fa5979f6889cf7bbd183bac2583c4c8fd74497ab12`
## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.62.1`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.62.1`
