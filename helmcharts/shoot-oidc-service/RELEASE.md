# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.38.0]

## ✨ New Features
- `[OPERATOR]` The `shoot-oidc-service` extension provides a new `garden-shoot-trust-configurator` controller that manages OIDC resources for trusted shoots in the garden cluster. When enabled in the `Garden` resource, it automatically configures trusted shoots (having `authentication.gardener.cloud/trusted=true` annotation) to create the corresponding OIDC resources. by @theoddora [[#445](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/445)]

## 🏃 Others
- `[OPERATOR]` The previously reported oidc-extension healthcheck conditions with type `ControlPlaneHealthy` are now cleaned up from shoots. by @theoddora [[#446](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/446)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.38.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.38.0`
