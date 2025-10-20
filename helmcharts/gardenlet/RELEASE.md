# [github.com/gardener/gardener:v1.127.7]

## 🐛 Bug Fixes
- `[USER]` An upstream issue causing kube-proxy to log thousands of log entries per second is now mitigated by reducing the kube-proxy verbosity level when running an affected Kubernetes version in the range [1.33.0, 1.33.6). For more details, see http://issues.k8s.io/132678. by @ialidzhikov [[#13195](https://github.com/gardener/gardener/pull/13195)]
- `[OPERATOR]` A bug which deactivates topology aware routing for kube-apiservers when l7 load-balancing is not active has been fixed. by @oliver-goetz [[#13184](https://github.com/gardener/gardener/pull/13184)]
- `[OPERATOR]` The `quay.io/kiwigrid/k8s-sidecar` image is downgraded to `v1.30.9` to prevent a regression that causes Plutono dashboards to not be loaded. by @vitanovs [[#13201](https://github.com/gardener/gardener/pull/13201)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.127.7`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.127.7`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.127.7`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.127.7`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.127.7`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.127.7`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.127.7`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.127.7`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.127.7`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.127.7`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.127.7`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.127.7`
