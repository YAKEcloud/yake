# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Deletion of source DNSEntries must wait for completed deletion of target entries. by @MartinWeindel [#407]
## 🏃 Others

- `[OPERATOR]` introduce `dns.gardener.cloud/target-hard-ignore` annotation by @MartinWeindel [#404]
- `[OPERATOR]` Use AWS SDK v2 for the `aws-route53` provider by @MartinWeindel [#400]
- `[OPERATOR]` Bumps golang from 1.23.3 to 1.23.4. by @dependabot[bot] [#401]
- `[OPERATOR]` Remove annotation `gardener.cloud/operation=reconcile` on reconciliation by @MartinWeindel [#406]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.22.2`
## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.22.2`
