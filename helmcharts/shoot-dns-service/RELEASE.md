# [github.com/gardener/gardener-extension-shoot-dns-service:v1.76.0]

## 🏃 Others
- `[USER]` Allow to use next-generation dns-controller-manager per configuration in shoot manifest with `.spec.extensions[@type="shoot-dns-service"].providerConfig.useNextGenerationController=true`. This feature has alpha status. by @MartinWeindel [[#615](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/615)]

# [github.com/gardener/external-dns-management:v0.34.0]

## 🐛 Bug Fixes
- `[OPERATOR]` In an edge case, the data section for a `Secret` is not dropped anymore when it is not longer used by any provider and the secret is updated to remove the finalizer. by @MartinWeindel [[#723](https://github.com/gardener/external-dns-management/pull/723)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.76.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.76.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.76.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.76.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.76.0`
