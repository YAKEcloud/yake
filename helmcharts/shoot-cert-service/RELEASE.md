# [gardener/cert-management]

## 🐛 Bug Fixes

- `[USER]` Allow to specify shoot issuer in annotation `cert.gardener.cloud/issuer annotation` with format `namespace/name`. by @MartinWeindel [gardener/cert-management#132]
# [gardener/gardener-extension-shoot-cert-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-cert-service` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#169]
## 🏃 Others

- `[OPERATOR]` Updated builder image from `golang:1.20.5` to `golang:1.20.6` by @MartinWeindel [#173]