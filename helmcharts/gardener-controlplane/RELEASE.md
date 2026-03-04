# [github.com/gardener/gardener:v1.137.3]

## 🐛 Bug Fixes
- `[OPERATOR]` An issues has been fixed causing `gardener-resource-manager` crash loops in large clusters. by @timuthy [[#14214](https://github.com/gardener/gardener/pull/14214)]
- `[OPERATOR]` Add a network policy label for allowing communication from the OpenTelemetryCollector in the control plane to the Shoot Kubernetes API Server. by @rrhubenov [[#14221](https://github.com/gardener/gardener/pull/14221)]

## 🏃 Others
- `[OPERATOR]` Fluent-bit resource limits are increased. by @nickytd [[#14211](https://github.com/gardener/gardener/pull/14211)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.3`
