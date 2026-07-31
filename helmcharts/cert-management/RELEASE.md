# [github.com/gardener/cert-management:v0.27.0]

## 🐛 Bug Fixes
- `[USER]` Certificates issued by CA issuers now include the common name in the subject alternative names (SANs), matching the behavior of the ACME issuer. This fixes certificates that specify only `commonName` (and no `dnsNames`) being rejected by clients that validate the hostname against SANs only. by @amendezsap [[#775](https://github.com/gardener/cert-management/pull/775)]
- `[USER]` Certificates issued by CA issuers now include the CA's full chain in `tls.crt` when the issuer's CA secret contains a certificate chain (e.g. an intermediate CA and its root). Self-signed root certificates are excluded from the served chain. by @amendezsap [[#774](https://github.com/gardener/cert-management/pull/774)]

## 🏃 Others
- `[OPERATOR]` [chore] Update pkg/apis/go.sum to fix outdated module checksums. by @MartinWeindel [[#771](https://github.com/gardener/cert-management/pull/771)]

## application/spdx+json
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:65f7fd6ca7c64d98e6422108c7df87794aaee2612ac65acdad8162ad10504793`
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:8934315860aff84ea2908fa8a3f32801e3d28ed6e1c93fb608452cf5c190ab5e`
## application/vnd.cyclonedx+json
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:601f463d5f3eba3dc58b7de7a3ba52f2d0f1aa624f737778c86bc5c1f036a30e`
- cert-management-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager@sha256:9c167eafa517b87d8918f1c24c7031857dd3483e493edfea1b457b5cf182155d`
## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.27.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.27.0`
