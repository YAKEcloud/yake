# [github.com/gardener/external-dns-management:v0.34.0]

## 🐛 Bug Fixes
- `[OPERATOR]` In an edge case, the data section for a `Secret` is not dropped anymore when it is not longer used by any provider and the secret is updated to remove the finalizer. by @MartinWeindel [[#723](https://github.com/gardener/external-dns-management/pull/723)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.34.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.34.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.34.0`
