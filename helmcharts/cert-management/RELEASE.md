# [gardener/cert-management]

## ✨ New Features

- `[USER]` Introduce the new Issuer type `SelfSigned` for creating self-signed certificates. by @RaphaelVogel [#228]
- `[USER]` The certificate resource can now define a duration (the lifetime of the certificate). The issuer (especially Let's Encrypt) may ignore this field. by @marc1404 [#354]
## 🐛 Bug Fixes

- `[OPERATOR]` Cleanup status for orphan pending certificate resources by @MartinWeindel [#367]
## 🏃 Others

- `[DEVELOPER]` Use Pebble as an ACME server in the integration tests. by @marc1404 [#339]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.17.0`
## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.17.0`
