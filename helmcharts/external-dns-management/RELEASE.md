# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` As AWS "us-gov" zones do not support alias target records, they are excluded from the list of canonical hosted zones used to decide if `ALIAS` records are created instead of `CNAME` records. by @MartinWeindel [#365]
- `[USER]` Keep stale entries of other providers of the same zone untouched if all providers but one have invalid credentials and last valid provider is removed. by @MartinWeindel [#364]
## 🏃 Others

- `[OPERATOR]` Update golang from `1.21.6` to `1.22.2` by @MartinWeindel [#366]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.5`
