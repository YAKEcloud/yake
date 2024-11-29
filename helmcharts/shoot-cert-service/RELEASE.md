# [gardener/cert-management]

## ✨ New Features

- `[USER]` Introduce the new Issuer type `SelfSigned` for creating self-signed certificates. by @RaphaelVogel [gardener/cert-management#228]
- `[USER]` The certificate resource can now define a duration (the lifetime of the certificate). The issuer (especially Let's Encrypt) may ignore this field. by @marc1404 [gardener/cert-management#354]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix panic if target issuer referenced but not allowed by @MartinWeindel [gardener/cert-management#371]
- `[OPERATOR]` Cleanup status for orphan pending certificate resources by @MartinWeindel [gardener/cert-management#367]
## 🏃 Others

- `[DEVELOPER]` Use Pebble as an ACME server in the integration tests. by @marc1404 [gardener/cert-management#339]
# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.108.0 to 1.109.0. by @dependabot[bot] [#320]
- `[OPERATOR]` Vertical scaling on CPU dropped in VPA resource by @MartinWeindel [#318]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.47.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.47.0`
