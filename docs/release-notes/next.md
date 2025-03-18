---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update garden-kube-apiserver to <code>5.3.0</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/garden-kube-apiserver/compare/v5.2.0...v5.3.0

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.49.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixes the cert controller manager's observability configuration. by @rickardsjp [#356]
## 🏃 Others

- `[OPERATOR]` Support for using a `CA` issuer as default issuer. by @MartinWeindel [#337]
- `[OPERATOR]` `extension-shoot-cert-service` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#309]
# [gardener/cert-management]

## ✨ New Features

- `[OPERATOR]` Introduce multi-arch build for `linux/arm64` images. by @marc1404 [gardener/cert-management#405]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.49.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.49.0`


</details>
