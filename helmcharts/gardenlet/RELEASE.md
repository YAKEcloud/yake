# [github.com/gardener/gardener:v1.136.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug is fixed in the extension scrape configuration in the seed Prometheus, where the scrape address was not correctly configured on IPv4 setups. by @vicwicker [[#14118](https://github.com/gardener/gardener/pull/14118)]
- `[OPERATOR]` Fixed an issue with the maximum batch size that the `OpenTelemetry Collector` instances can send. by @rrhubenov [[#14120](https://github.com/gardener/gardener/pull/14120)]
- `[USER]` An issue which lead to a nil pointer in gardenlet when a Shoot had an empty `.spec.addons` structure defined is now fixed. by @timuthy [[#14123](https://github.com/gardener/gardener/pull/14123)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.2`
