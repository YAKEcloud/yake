# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The step which deploys the source `BackupEntry` during the `restore` phase of control plane migration now depends on the successful deployment of the `Shoot`'s control plane namespace. This fixes a potential race condition which could cause the `source-etcd-backup` Secret to not be deployed in the `Shoot`'s control plane namespace and the subsequent step which copies etcd backups to time out. by @plkokanov [#11814]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @Kostov6 [#11746]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @Kostov6 [#11745]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.0` to `1.30.2`.  by @Kostov6 [#11753]
- `[DEVELOPER]` An issue causing the `should copy data to pod` VPN tunnel test-machinery integration test to fail is now fixed. by @ialidzhikov [#11806]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.3`
