# [gardener/gardener-extension-shoot-cert-service]

## ✨ New Features

- `[OPERATOR]` Manage `garden-cert` and `controlplane-cert` for runtime cluster and seeds by @MartinWeindel [#369]
## 🏃 Others

- `[OPERATOR]` Introduce second extension type `controlplane-cert-service` with lifecycle `reconcile: BeforeKubeAPIServer`. by @MartinWeindel [#407]
- `[OPERATOR]` Drop sni-config webhook by @MartinWeindel [#405]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.51.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.51.0`
