# [github.com/gardener/gardener:v1.136.3]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed the shoot-care controller panic for clusters where `.status.credentials.rotation` exists but `.status.credentials.encryptionAtRest` is nil. by @maboehm [[#14148](https://github.com/gardener/gardener/pull/14148)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.35.0` to `v0.35.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.35.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.35.0` to `v0.35.1`. by @ary1992 [[#14149](https://github.com/gardener/gardener/pull/14149)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.3`
