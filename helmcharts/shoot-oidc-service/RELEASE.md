# [gardener/oidc-webhook-authenticator]

## 🏃 Others

- `[OPERATOR]` OWA is now built using go version 1.23.3. by @dimityrmirchev [gardener/oidc-webhook-authenticator#167]
- `[DEVELOPER]` `gosec` is made available for SAST(static application security testing), it can be run with `make sast` or `make sast-report`.  by @vpnachev [gardener/oidc-webhook-authenticator#165]
# [gardener/gardener-extension-shoot-oidc-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` The type of the `imageVectorOverwrite` helm chart value is changed from string to object. by @dimityrmirchev [#251]
## 🏃 Others

- `[OPERATOR]` The following dependencies have been updated:  
  - github.com/gardener/gardener v1.105.0 -> v1.106.0  
  - k8s.io/api v0.29.8 -> v0.31.1  
  - k8s.io/apimachinery v0.29.9 -> v0.31.1  
  - k8s.io/client-go v0.29.9 -> v0.31.1  
  - k8s.io/code-generator v0.29.9 -> v0.31.1  
  - k8s.io/component-base v0.29.9 -> v0.31.1  
  - sigs.k8s.io/controller-runtime v0.17.6 -> v0.19.0 by @vpnachev [#248]
- `[DEVELOPER]` `gosec` is made available for SAST(static application security testing), it can be run with `make sast` or `make sast-report`, but is also incorporated in the `verify` and `verify-extended` makefile targets.  by @vpnachev [#248]
## 📖 Documentation

- `[USER]` Documentation now clarifies when Structured Authentication should be preferred over the Gardener OIDC extension. by @dimityrmirchev [#259]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.29.0`
## Docker Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.29.0`
