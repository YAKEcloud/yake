# [gardener/gardener-extension-shoot-cert-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-cert-service` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#223]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.90.0 to 1.91.0. by @dependabot[bot] [#244]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.89.0 to 1.90.0. by @dependabot[bot] [#238]
# [gardener/cert-management]

## ✨ New Features

- `[USER]` The algorithm and size for the private key can now be specified in the certificate spec section to override the default algorithm `RSA` with key size 2048.  
  Supported algorithms are `RSA` and `ECDSA`. For `RSA` the allowed key sizes are `2048`, `3072`, and `4096` with `2048` as default is not specified explicitly. For `ECDSA` the allowed key sizes are `256` and `384` with `256` as default.  
  These algorithms and key sizes are supported by Let's Encrypt. For other ACME servers please check their documentation for information about supported combinations. by @MartinWeindel [gardener/cert-management#168]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.42.0`
