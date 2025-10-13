# [github.com/gardener/gardener-extension-shoot-cert-service:v1.54.0]

## ✨ New Features
- `[USER]` Validation for secrets of ACME issuers specified in shoot manifest is performed on reconciling the extension.  
  Both the `privateKey` secret of the ACME issuer and the optional external account binding secret are validated for the allowed data keys and values. by @MartinWeindel [[#458](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/458)]

## 🐛 Bug Fixes
- `[OPERATOR]` Add networking policy label to allow access to virtual garden if the `controlplane-cert-service` extension is enabled and Garden runtime cluster and soil are the same. by @MartinWeindel [[#469](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/469)]

## 🏃 Others
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#470](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/470)]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.54.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.54.0`
