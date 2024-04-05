# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `PersistentVolume`s without `.spec.nodeAffinity` to become unusable in case they still had the old, deprecated topology labels. by @rfranzke [#9540]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.90.7`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.90.7`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.90.7`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.90.7`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.90.7`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.90.7`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.90.7`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.90.7`
