# [gardener/gardener]

## ✨ New Features

- `[DEVELOPER]` A wrapper function for `OperatingSystemConfig` provisioning bash script has been implemented. Using the wrapper ensures that the script exits early in case it has been executed successfully before. by @oliver-goetz [#11261]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug which might lead to duplicate config entries for `node-agent-authorizer` webhook has been fixed. by @oliver-goetz [#11308]
- `[OPERATOR]` A bug which prevented usage of labels with `seed.gardener.cloud/` prefix on, `BackupEntry`, and `Shoot` resources has been fixed. by @plkokanov [#11499]
- `[OPERATOR]` Fixed a bug that caused the Gardenlet to crash when deleting a hibernated shoot if the NodeAgentAuthorizer feature gate was enabled by @Wieneo [#11425]
- `[OPERATOR]` An issue was fixed that caused a downtime of Gardener API services up to `1m` every time the `virtual-garden-kube-controller-manager` changed its leader.  by @plkokanov [#11452]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.5`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.5`
