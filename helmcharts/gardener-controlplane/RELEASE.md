# [github.com/gardener/gardener:v1.131.3]

## 🐛 Bug Fixes
- `[DEVELOPER]` Fix `make kind-up` command to work correctly with Docker>=`v29.0.0`. by @oliver-goetz [[#13417](https://github.com/gardener/gardener/pull/13417)]
- `[OPERATOR]` `UnauthenticatedHTTP2DOSMitigation` feature gate is now always disabled for kube-apiservers where `IstioTLSTermination` (aka L7 load-balancing) is activated. This prevents unwanted side-effects when unauthenticated requests are sent. HTTP/2 "Rapid Reset" DoS Vulnerability is mitigated by Envoy in this case. by @oliver-goetz [[#13425](https://github.com/gardener/gardener/pull/13425)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.131.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.131.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.131.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.131.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.131.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.131.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.131.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.131.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.131.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.131.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.131.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.131.3`
