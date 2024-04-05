# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing the Shoot `status.lastMaintenance.description` to contain "Removed feature gates from" or  "Removed admission plugins from" messages with zero entries is now fixed. by @shafeeqes [#9539]
- `[OPERATOR]` A bug has been fixed which caused `PersistentVolume`s without `.spec.nodeAffinity` to become unusable in case they still had the old, deprecated topology labels. by @rfranzke [#9541]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.91.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.91.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.91.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.91.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.91.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.91.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.91.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.91.3`
