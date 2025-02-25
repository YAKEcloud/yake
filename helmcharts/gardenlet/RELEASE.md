# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused the Gardenlet to crash when deleting a hibernated shoot if the NodeAgentAuthorizer feature gate was enabled by @Wieneo [#11424]
- `[OPERATOR]` A bug which prevented usage of labels with `seed.gardener.cloud/` prefix on `BackupEntry`, and `Shoot` resources has been fixed. by @plkokanov [#11492]
- `[OPERATOR]` An issue was fixed that caused a downtime of Gardener API services up to `1m` every time the `virtual-garden-kube-controller-manager` changed its leader.  by @plkokanov [#11453]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.111.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.111.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.111.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.111.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.111.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.111.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.111.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.111.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.111.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.111.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.111.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.111.3`
