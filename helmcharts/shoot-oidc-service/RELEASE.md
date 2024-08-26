# [gardener/gardener-extension-shoot-oidc-service]

## ✨ New Features

- `[OPERATOR]` The extension mutating webhook now uses object selector to reduce the number of calls. by @dimityrmirchev [#224]
- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#222]
## 🏃 Others

- `[DEPENDENCY]` The extension is now built using go version 1.22.5. by @dimityrmirchev [#220]
# [gardener/oidc-webhook-authenticator]

## 🏃 Others

- `[DEVELOPER]` The following dependencies have been updated:  
  - github.com/coreos/go-oidc/v3 v3.1.0 -> v3.10.0  
  - golang.org/x/time v0.3.0 -> v0.5.0  
  - k8s.io/* v0.27.9 -> v0.30.1  
  - sigs.k8s.io/controller-runtime v0.15.3 -> v0.18.4  
  - golang.org/x/crypto v0.21.0 -> v0.24.0  
  - golang.org/x/net v0.23.0 -> v0.26.0 by @vpnachev [gardener/oidc-webhook-authenticator#157]
- `[DEPENDENCY]` OWA is now built using go version 1.22.5. by @dimityrmirchev [gardener/oidc-webhook-authenticator#158]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.27.0`
## Docker Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.27.0`
