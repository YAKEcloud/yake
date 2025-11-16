# [github.com/gardener/gardener:v1.132.1]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug which made istio-ingressgateway forwarding requests via HTTP1.1 only to kube-apiserver when `IstioTLSTermination` feature gate is active has been fixed. Exhausted connection limits between istio-ingressgateway and kube-apiserver could be a consequence of this bug. by @oliver-goetz [[#13467](https://github.com/gardener/gardener/pull/13467)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.1`
