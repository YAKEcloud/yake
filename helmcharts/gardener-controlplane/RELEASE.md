# [github.com/gardener/gardener:v1.136.4]

## 🐛 Bug Fixes
- `[OPERATOR]` Additional finetuning to the `Collector` configuration has been applied for improved memory usage. by @rrhubenov [[#14152](https://github.com/gardener/gardener/pull/14152)]
- `[USER]` Maximum worker pool nodes can now exceed the configured limits. by @LucaBernstein [[#14153](https://github.com/gardener/gardener/pull/14153)]

## 🏃 Others
- `[OPERATOR]` A regression in Gardener Node Agent that can occur on Debian based OS images and that prevents it to successfully reconcile nodes that run a containerd version that contains - according to semver - invalid characters in its version number was fixed. by @MrBatschner [[#14187](https://github.com/gardener/gardener/pull/14187)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.4`
