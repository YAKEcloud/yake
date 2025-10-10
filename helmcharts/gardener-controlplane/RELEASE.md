# [github.com/gardener/gardener:v1.129.1]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed which prevented L7 load-balancing for kube-apiservers to work correctly on Seeds/Gardens where topology-aware-routing is activated. by @@oliver-goetz [[#13142](https://github.com/gardener/gardener/pull/13142)]

## 🏃 Others
- `[OPERATOR]` Logging stack configuration is now tuned for high-throughput scenarios. It brings changes in local file system resource utilization, addressing potential node disk pressure occurrences. by @@nickytd [[#13139](https://github.com/gardener/gardener/pull/13139)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.21` to `v0.8.22`. by @@gardener-ci-robot [[#13099](https://github.com/gardener/gardener/pull/13099)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.1`
