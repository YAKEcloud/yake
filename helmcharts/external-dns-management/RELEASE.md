# [github.com/gardener/external-dns-management:v0.36.0]

## ✨ New Features
- `[OPERATOR]` Support Trust Based Authentication by `WorkloadIdentity` secrets for AWS Route53, Azure DNS, Azure Private DNS and Google Cloud DNS by @MartinWeindel [[#775](https://github.com/gardener/external-dns-management/pull/775)]

## 🏃 Others
- `[OPERATOR]` Fix race condition if only one of two expected gateway CRDs (either from group  `gateway.networking.k8s.io` or `networking.istio.io`) is deployed causing endless restarts. by @MartinWeindel [[#790](https://github.com/gardener/external-dns-management/pull/790)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.36.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.36.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.36.0`
