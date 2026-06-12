# [github.com/gardener/cert-management:v0.24.1]

## 🐛 Bug Fixes
- `[USER]` ACME-issued certificates now include the correct Subject Common Name again. The recent lego v5 upgrade had silently dropped the CN from issued certificates, breaking consumers that pin to or parse `Subject.CommonName`. The CN is now populated from `spec.commonName` (or the first DNS name when CN is unset and ≤64 characters). by @MartinWeindel [[#745](https://github.com/gardener/cert-management/pull/745)]

## application/spdx+json
- cert-management-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:6a60daddee9aeffb7da0d330eaedc2361fd258f94e6f0dc8dbd6be0c4f73fb50`
- cert-management-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:ca3c454ecf27b8fdefa0951f3bebc1eeba74ca7ce5699aec4ba670daeccee167`
## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.24.1`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.24.1`
