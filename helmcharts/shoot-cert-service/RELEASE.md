# [gardener/gardener-extension-shoot-cert-service]

## ✨ New Features

- `[USER]` `shoot-cert-service` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @acumino [#204]
## 🏃 Others

- `[OPERATOR]` Remove redundant short name for `issuer` CustomResourceDefinition. by @MartinWeindel [#211]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.0 to 1.82.1. by @dependabot[bot] [#207]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.81.1 to 1.82.0. by @dependabot[bot] [#206]
# [gardener/cert-management]

## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.2 to 1.21.3. by @dependabot[bot] [gardener/cert-management#143]
- `[OPERATOR]` Remove `issuer` short name for issuer CustomResourceDefinition as it is the same as the singular. by @MartinWeindel [gardener/cert-management#147]
- `[USER]` Support PKCS8 private keys for CA issuers by @MartinWeindel [gardener/cert-management#146]

## Docker Images
gardener-extension-shoot-cert-service: `eu.gcr.io/gardener-project/gardener/extensions/shoot-cert-service:v1.39.0`
