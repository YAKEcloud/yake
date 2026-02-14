# [github.com/gardener/external-dns-management:v0.35.1]

## 🏃 Others
- `[OPERATOR]` Fix race condition if only one of two expected gateway CRDs (either from group  `gateway.networking.k8s.io` or `networking.istio.io`) is deployed causing endless restarts. (#790) by @Martin Weindel [[gardener/external-dns-management@30134a717b07f5d2ec7c706fe2b3d938be564cde](https://github.com/gardener/external-dns-management/commit/30134a717b07f5d2ec7c706fe2b3d938be564cde)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.77.1`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.77.1`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.77.1`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.77.1`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.77.1`
