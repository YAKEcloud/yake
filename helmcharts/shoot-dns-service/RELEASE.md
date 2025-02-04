# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-admission-shoot-dns-service admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#429]
## 🏃 Others

- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#427]
- `[OPERATOR]` Prepare for deployment of admission controller by gardener-operator by @MartinWeindel [#429]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.59.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.59.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.59.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.59.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.59.0`
