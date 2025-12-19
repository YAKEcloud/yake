# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.35.0]

## ✨ New Features
- `[DEVELOPER]` It is now possible to deploy the extension, via `make extension-up`, in a locally running gardener installation managed with gardener-operator. by @vpnachev [[#399](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/399)]

## 🏃 Others
- `[OPERATOR]` The container image base layer has been updated to Debian 13 (trixie). by @dimityrmirchev [[#401](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/401)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.132.1 -> v1.134.0  
  - golang.org/x/tools v0.38.0 -> v0.40.0  
  - golang.org/x/crypto v0.44.0 -> v0.46.0  
  - golang.org/x/mod v0.29.0 -> v0.31.0  
  - golang.org/x/net v0.46.0 -> v0.48.0  
  - golang.org/x/sync v0.18.0 -> v0.19.0  
  - golang.org/x/sys v0.38.0 -> v0.39.0  
  - golang.org/x/term v0.37.0 -> v0.38.0  
  - golang.org/x/text v0.31.0 -> v0.32.0  
  - helm.sh/helm/v3 v3.19.1 -> v3.19.2  
  - istio.io/api v1.27.3 -> v1.27.4  
  - k8s.io/api v0.34.1 -> v0.34.3  
  - k8s.io/apiextensions-apiserver v0.34.1 -> v0.34.3  
  - k8s.io/apimachinery v0.34.1 -> v0.34.3  
  - k8s.io/apiserver v0.34.1 -> v0.34.3  
  - k8s.io/client-go v0.34.1 -> v0.34.3  
  - k8s.io/code-generator v0.34.1 -> v0.34.3  
  - k8s.io/component-base v0.34.1 -> v0.34.3  
  - k8s.io/component-helpers v0.34.1 -> v0.34.3  
  - k8s.io/cluster-bootstrap v0.34.1 -> v0.34.3  
  - k8s.io/kube-aggregator v0.34.1 -> v0.34.3  
  - k8s.io/kubelet v0.34.1 -> v0.34.3  
  - k8s.io/metrics v0.34.1 -> v0.34.3 by @dependabot[bot] [[#400](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/400)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.132.0 -> v1.132.1 by @dependabot[bot] [[#393](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/393)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.35.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.35.0`
