# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.36.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` References to the health check controller and its configuration have been removed, as they are no longer needed. Additionally, the unused OIDC service configuration API and its related files have been removed. by @theoddora [[#404](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/404)]

## ✨ New Features
- `[USER]` The OIDC service is enabled to work with the garden control plane by supporting the garden extension class alongside the existing shoot class. by @theoddora [[#412](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/412)]

## 🏃 Others
- `[OPERATOR]` The extension is now built using go version 1.25.7. by @dependabot[bot] [[#421](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/421)]

# [github.com/gardener/oidc-webhook-authenticator:v0.41.0]

## 🏃 Others
- `[OPERATOR]` OWA is now built using go version 1.25.6. by @dependabot[bot] [[#215](https://github.com/gardener/oidc-webhook-authenticator/pull/215)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.36.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.36.0`
