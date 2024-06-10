# [gardener/gardener]

## ✨ New Features

- `[OPERATOR]` `gardenlet`'s `Pod` garbage collector (part of its `shoot-care` controller) now considers `Pod`s with reason `NodeAffinity`, i.e., it auto-deletes such `Pod`s. by @rfranzke [#9949]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.96.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.96.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.96.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.96.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.96.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.96.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.96.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.96.3`
