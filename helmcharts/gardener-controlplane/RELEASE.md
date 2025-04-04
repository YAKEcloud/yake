# [gardener/gardener]

## 🐛 Bug Fixes

- `[DEVELOPER]` An issue causing the Shoot logging test-machinery integration tests to fail is now fixed. by @ialidzhikov [#11798]
- `[OPERATOR]` The step which deploys the source `BackupEntry` during the `restore` phase of control plane migration now depends on the successful deployment of the `Shoot`'s control plane namespace. This fixes a potential race condition which could cause the `source-etcd-backup` Secret to not be deployed in the `Shoot`'s control plane namespace and the subsequent step which copies etcd backups to time out. by @plkokanov [#11812]
## 🏃 Others

- `[DEVELOPER]` An issue causing the `should copy data to pod` VPN tunnel test-machinery integration test to fail is now fixed. by @ialidzhikov [#11804]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.115.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.115.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.115.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.115.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.115.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.115.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.115.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.115.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.115.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.115.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.115.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.115.2`
