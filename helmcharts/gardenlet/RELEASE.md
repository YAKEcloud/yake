# [github.com/gardener/gardener:v1.124.3]

## 🐛 Bug Fixes
- `[OPERATOR]` The `plutono-datasources` `ConfigMap` is no longer wrongfully garbage collected while it is in use. by @gardener-ci-robot [[#12766](https://github.com/gardener/gardener/pull/12766)]
- `[OPERATOR]` An issue causing the `plutono-datasources` ConfigMap to be reconciled by 2 ManagedResources when Seed is Garden managed by `gardener-operator` is now fixed. Occasionally, the issue was preventing successful Seed deletion. by @gardener-ci-robot [[#12797](https://github.com/gardener/gardener/pull/12797)]
- `[USER]` Errors that occur during `Worker` reconciliation are now also propagated to the `Shoot` status. by @gardener-ci-robot [[#12790](https://github.com/gardener/gardener/pull/12790)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.3`
