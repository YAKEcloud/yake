# [github.com/gardener/gardener:v1.127.3]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed the `alertmanager-garden` peer discovery service port names by @gardener-ci-robot [[#12990](https://github.com/gardener/gardener/pull/12990)]

## 🏃 Others
- `[USER]` Gardener API server now serves the OpenAPI v2 schema ( `/openapi/v2` endpoint) again and will keep on serving it until Gardener `v1.160`. In Gardener `v1.127.0`, the support for OpenAPI v2 schemas was removed. However, [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) does not yet support OpenAPI v3 schema. by @gardener-ci-robot [[#12993](https://github.com/gardener/gardener/pull/12993)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.127.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.127.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.127.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.127.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.127.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.127.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.127.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.127.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.127.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.127.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.127.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.127.3`
