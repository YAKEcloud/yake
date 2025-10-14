# [github.com/gardener/external-dns-management:v0.29.0]

## ⚠️ Breaking Changes
- `[USER]` The `infoblox-dns` provider is deprecated and will be removed end of 2025. by @MartinWeindel [[#645](https://github.com/gardener/external-dns-management/pull/645)]
- `[OPERATOR]` The `infoblox-dns` provider is deprecated and will be removed end of 2025. by @MartinWeindel [[#645](https://github.com/gardener/external-dns-management/pull/645)]

## ✨ New Features
- `[OPERATOR]` Support command line option `--kubeconfig.crds-shoot-no-cleanup-label` to allow to set the label `shoot.gardener.cloud/no-cleanup=true`  for deployed CRDs. by @MartinWeindel [[#674](https://github.com/gardener/external-dns-management/pull/674)]

## 🐛 Bug Fixes
- `[OPERATOR]` [netlify-dns] Allow underscore character on validating the API token for netlify. by @MartinWeindel [[#644](https://github.com/gardener/external-dns-management/pull/644)]

## 🏃 Others
- `[OPERATOR]` Migrate the workload VPA from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#671](https://github.com/gardener/external-dns-management/pull/671)]
- `[OPERATOR]` Update cloudflare-dns to use the Version 6 of `github.com/cloudflare/cloudflare-go/v6`. by @MartinWeindel [[#640](https://github.com/gardener/external-dns-management/pull/640)]
- `[OPERATOR]` Aligned zone metrics handling in Azure DNS and Azure Private DNS providers with all other DNS providers. by @marc1404 [[#667](https://github.com/gardener/external-dns-management/pull/667)]
- `[OPERATOR]` Simplify build workflow, drop redundant `check` step. by @MartinWeindel [[#658](https://github.com/gardener/external-dns-management/pull/658)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.29.0`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.29.0`
