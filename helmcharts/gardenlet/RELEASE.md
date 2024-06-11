# [gardener/gardener]

## ✨ New Features

- `[OPERATOR]` `gardenlet`'s `Pod` garbage collector (part of its `shoot-care` controller) now considers `Pod`s with reason `NodeAffinity`, i.e., it auto-deletes such `Pod`s. by @rfranzke [#9950]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.74.2`. [Release Notes](https://togithub.com/gardener/dashboard/releases/tag/1.74.2) by @ialidzhikov [#9947]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.95.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.95.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.95.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.95.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.95.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.95.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.95.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.95.5`
