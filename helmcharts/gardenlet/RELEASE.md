# [gardener/gardener]

## ✨ New Features

- `[OPERATOR]` `gardenlet`'s `Pod` garbage collector (part of its `shoot-care` controller) now considers `Pod`s with reason `NodeAffinity`, i.e., it auto-deletes such `Pod`s. by @rfranzke [#9951]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.74.2`. [Release Notes](https://togithub.com/gardener/dashboard/releases/tag/1.74.2) by @ialidzhikov [#9948]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.94.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.94.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.94.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.94.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.94.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.94.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.94.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.94.4`
