# [gardener/gardener-extension-shoot-oidc-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-oidc-service` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#142]
# [gardener/oidc-webhook-authenticator]

## ⚠️ Breaking Changes

- `[OPERATOR]` :warning: OWA no longer delegates authentication and authorization to a `kube-apiserver`. It now only supports optional client certificate authentication which can be configured via the "--client-ca-file" flag. Paths that do require authentication can be skipped by setting the flag "--authentication-always-allow-paths". The same flags can be configured with the helm chart via `.Values.runtime.auth.clientCABundle` and `.Values.runtime.auth.authenticationAlwaysAllowPaths`. Operators should remove residuals of roles and rolebindings that were used to authorize OWA callers. by @dimityrmirchev [gardener/oidc-webhook-authenticator#148]
- `[OPERATOR]` Flags related to `kube-apiserver` authn/z delegation and `kube-apiserver` serving were removed.  by @dimityrmirchev [gardener/oidc-webhook-authenticator#148]
## 🏃 Others

- `[DEPENDENCY]` OWA is now built using go version 1.22.1. by @dimityrmirchev [gardener/oidc-webhook-authenticator#151]

## Docker Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.25.0`
