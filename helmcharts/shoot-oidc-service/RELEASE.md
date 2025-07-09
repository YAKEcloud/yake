# [gardener/gardener-extension-shoot-oidc-service]

## 🏃 Others

- `[OPERATOR]` The extension is now built using go version 1.24.5. by @dependabot[bot] [#335]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  -	github.com/gardener/gardener v1.121.2 -> v1.122.1  
  -	k8s.io/api v0.32.5 -> v0.33.2  
  -	k8s.io/apimachinery v0.32.5 -> v0.33.2  
  -	k8s.io/autoscaler/vertical-pod-autoscaler v1.3.1 -> v1.4.1  
  -	k8s.io/client-go v0.32.5 -> v0.33.2  
  -	k8s.io/code-generator v0.32.5 -> v0.33.2  
  -	k8s.io/component-base v0.32.5 -> v0.33.2  
  -	k8s.io/apiserver v0.32.5  -> v0.33.2  
  -	sigs.k8s.io/controller-runtime v0.20.4 -> v0.21.0  
  -	sigs.k8s.io/controller-tools v0.17.3 -> v0.18.0  
  -	helm.sh/helm/v3 v3.17.3 -> v3.18.3 by @dependabot[bot] [#334]
# [gardener/oidc-webhook-authenticator]

## ✨ New Features

- `[USER]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [gardener/oidc-webhook-authenticator#179]
## 🏃 Others

- `[OPERATOR]` `oidc-webhook-authenticator` is now built with go 1.24.5. by @vpnachev [gardener/oidc-webhook-authenticator#185]
- `[OPERATOR]` OWA is now built using go version 1.24.4. by @dimityrmirchev [gardener/oidc-webhook-authenticator#180]
- `[DEPENDENCY]` The following 3rd party dependencies have been updated:  
  - k8s.io/api v0.31.1 -> v0.33.2  
  - k8s.io/apiextensions-apiserver v0.31.0 -> v0.33.2  
  - k8s.io/apimachinery v0.31.1 -> v0.33.2  
  - k8s.io/apiserver v0.31.0 -> v0.33.2  
  - k8s.io/client-go v0.31.1 -> v0.33.2  
  - k8s.io/component-base v0.31.1 -> v0.33.2  
  - sigs.k8s.io/controller-runtime v0.19.0 -> v0.21.0  
  - golang.org/x/crypto v0.36.0 -> v0.39.0  
  - golang.org/x/net v0.38.0 -> v0.41.0  
  - golang.org/x/oauth2 v0.21.0 -> v0.30.0  
  - golang.org/x/sync v0.12.0 -> v0.15.0  
  - golang.org/x/sys v0.31.0 -> v0.33.0  
  - golang.org/x/term v0.30.0 -> v0.32.0  
  - golang.org/x/text v0.23.0 -> v0.26.0  
  - golang.org/x/time v0.6.0 -> v0.12.0 by @vpnachev [gardener/oidc-webhook-authenticator#182]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.32.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.32.0`
