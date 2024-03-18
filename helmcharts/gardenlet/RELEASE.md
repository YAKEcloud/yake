# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which prevented pods from starting on clusters of at least `1.28` if they were using old `PersistentVolume`s created with the deprecated `failure-domain.beta.kubernetes.io/{zone,region}` labels. by @rfranzke [#9414]
- `[OPERATOR]` A configuration issue of the prometheus-operator managed alertmanager instances is fixed. by @istvanballok [#9419]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.89.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.89.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.89.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.89.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.89.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.89.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.89.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.89.3`
