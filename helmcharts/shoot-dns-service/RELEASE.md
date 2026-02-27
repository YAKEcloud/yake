# [github.com/gardener/external-dns-management:v0.35.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The `dnsprovider-replication` controller no longer replicates DNSProvider objects that carry a foreign dns.gardener.cloud/class annotation. Previously, such providers were copied to the target cluster and then instantly deleted, leading to avoidable processing. by @MartinWeindel [[#804](https://github.com/gardener/external-dns-management/pull/804)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.77.2`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.77.2`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.77.2`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.77.2`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.77.2`
