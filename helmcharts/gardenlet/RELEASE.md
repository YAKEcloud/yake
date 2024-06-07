# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The broken `prometheus-longterm` `ScrapeConfig`s introduced with `v1.95.0` have been fixed. by @bd3lage [#9918]
- `[OPERATOR]` gardenlet: An issue causing alerts contributed by extensions containing a multi-line `expr` not to be properly translated in a PrometheusRule is now fixed. by @dimitar-kostadinov [#9920]
- `[USER]` A bug in the Prometheus dashboard for shoots not showing metrics for most panels has been fixed. by @rfranzke [#9928]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.95.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.95.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.95.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.95.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.95.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.95.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.95.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.95.4`
