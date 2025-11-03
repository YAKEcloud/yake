# [github.com/gardener/cert-management:v0.19.0]

## 🏃 Others
- `[USER]` Allow to request intermediate CA certificates for CA issuers by @MartinWeindel [[#601](https://github.com/gardener/cert-management/pull/601)]
- `[USER]` Support annotation `gardener.cloud/operation=reconcile` for `Certificate` and `Issuer` resources.  
  If it is set for a `Certificate` with back-off status, it is cleared to enable immediate reconciliation. by @MartinWeindel [[#600](https://github.com/gardener/cert-management/pull/600)]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.19.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.19.0`
