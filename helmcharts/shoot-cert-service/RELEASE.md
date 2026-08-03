# [github.com/gardener/cert-management:v0.27.0]

## 🐛 Bug Fixes
- `[USER]` Certificates issued by CA issuers now include the common name in the subject alternative names (SANs), matching the behavior of the ACME issuer. This fixes certificates that specify only `commonName` (and no `dnsNames`) being rejected by clients that validate the hostname against SANs only. by @amendezsap [[#775](https://github.com/gardener/cert-management/pull/775)]
- `[USER]` Certificates issued by CA issuers now include the CA's full chain in `tls.crt` when the issuer's CA secret contains a certificate chain (e.g. an intermediate CA and its root). Self-signed root certificates are excluded from the served chain. by @amendezsap [[#774](https://github.com/gardener/cert-management/pull/774)]

## 🏃 Others
- `[OPERATOR]` [chore] Update pkg/apis/go.sum to fix outdated module checksums. by @MartinWeindel [[#771](https://github.com/gardener/cert-management/pull/771)]

## application/spdx+json
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:a98a81b8883ec7d3b1ab0da4880b62a7e69fd1c294a6a4030d1b1277591aa531`
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:becd81f2a92adc575687861d5e9a06e90aa32227408f4bd5091494b16b08541c`
## application/vnd.cyclonedx+json
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:454933a5ec1297732020c2035ad8238db166a16cb820f55524a122dcb4dc4747`
- gardener-extension-shoot-cert-service-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service@sha256:9d062fdcf654493048de4360687973bc9c0af2cb5955569bea999701fdb40880`
## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.65.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.65.0`
