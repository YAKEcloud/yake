# [github.com/gardener/external-dns-management:v0.36.1]

## 🐛 Bug Fixes
- `[OPERATOR]` The `dnsprovider-replication` controller no longer replicates DNSProvider objects that carry a foreign dns.gardener.cloud/class annotation. Previously, such providers were copied to the target cluster and then instantly deleted, leading to avoidable processing. by @MartinWeindel [[#812](https://github.com/gardener/external-dns-management/pull/812)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.36.1`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.36.1`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.36.1`
