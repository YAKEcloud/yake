# [gardener/oidc-webhook-authenticator]

## ✨ New Features

- `[USER]` OWA is built using go version 1.23.5. by @dimityrmirchev [gardener/oidc-webhook-authenticator#171]
## 🏃 Others

- `[USER]` Dependency to gopkg.in/square/go-jose.v2 was replaced with github.com/go-jose/go-jose/v4 by @dimityrmirchev [gardener/oidc-webhook-authenticator#169]
- `[USER]` OWA is now built using go version 1.23.6. by @dimityrmirchev [gardener/oidc-webhook-authenticator#172]
- `[DEPENDENCY]` golang.org/x/crypto was updated to v0.31.0 by @dimityrmirchev [gardener/oidc-webhook-authenticator#168]
# [gardener/gardener-extension-shoot-oidc-service]

## ✨ New Features

- `[USER]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#276]
## 🏃 Others

- `[OPERATOR]` Extension reconciliation and `kube-apiserver` deployment mutation flows are improved to not consider hibernation status of the shoot cluster as OWA is no longer authenticating itself in-front of the `kube-apiserver` and the dead lock around issuing access tokens cannot occur anymore.   by @vpnachev [#277]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.30.0`
## Docker Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.30.0`
