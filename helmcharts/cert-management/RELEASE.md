# [github.com/gardener/cert-management:v0.18.0]

## ✨ New Features
- `[USER]` Introduced new `Certificate` fields: `.spec.renewBefore`, `.status.renewalDate`. The field `renewBefore` allows specifying whether a `Certificate` should be renewed sooner than the configured renewal window. by @marc1404 [[#569](https://github.com/gardener/cert-management/pull/569)]

## 🏃 Others
- `[USER]` Add validation of data fields for secrets of an ACME issuer secret (private key and external account binding secrets). by @MartinWeindel [[#554](https://github.com/gardener/cert-management/pull/554)]

## 📖 Documentation
- `[USER]` Add documentation how to use ACME with external account binding. by @MartinWeindel [[#539](https://github.com/gardener/cert-management/pull/539)]


## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.18.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.18.0`
