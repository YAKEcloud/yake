# [gardener/cert-management]

## ✨ New Features

- `[USER]` Added `cert.gardener.cloud/not-before` annotation and `IssuanceDate` field to `Certificate`. by @marc1404 [#489]
## 🏃 Others

- `[OPERATOR]` Support `cert.gardener.cloud/class` annotation for `issuers` by @MartinWeindel [#512]
## 📖 Documentation

- `[USER]` Documented the correct minimum duration of `Certificate`s assuming the default renewal window of 30 days. by @marc1404 [#495]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.17.7`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.17.7`
