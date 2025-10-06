# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.33.0]

## ✨ New Features
- `[USER]` `shoot-oidc-service` no longer supports Shoots with Кubernetes version <= 1.28. by @georgibaltiev [[#340](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/340)]

## 🏃 Others
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#333](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/333)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-shoot-oidc-service/blob/master/example/extension.yaml) by @timuthy [[#353](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/353)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#365](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/365)]
- `[OPERATOR]` Test results are now exported as inlined ocm-resource. by @heldkat [[#342](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/342)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.33.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.33.0`
