# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Keep stale entries of other providers of the same zone untouched if all providers but one have invalid credentials and last valid provider is removed. by @MartinWeindel [gardener/external-dns-management#364]
- `[OPERATOR]` As AWS "us-gov" zones do not support alias target records, they are excluded from the list of canonical hosted zones used to decide if `ALIAS` records are created instead of `CNAME` records. by @MartinWeindel [gardener/external-dns-management#365]
## 🏃 Others

- `[OPERATOR]` Update golang from `1.21.6` to `1.22.2` by @MartinWeindel [gardener/external-dns-management#366]
# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.91.0 to 1.92.0. by @dependabot[bot] [#318]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.47.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.47.0`
