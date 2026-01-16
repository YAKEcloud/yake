# [github.com/gardener/gardener:v1.133.3]

## 🐛 Bug Fixes
- `[OPERATOR]` extension library: An issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the BackupEntry Secret is now fixed. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#13792](https://github.com/gardener/gardener/pull/13792)]
- `[USER]` Fix a bug that prevents updating expiration dates of overridden machine image versions in `NamespacedCloudProfile`s. by @LucaBernstein [[#13770](https://github.com/gardener/gardener/pull/13770)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.133.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.133.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.133.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.133.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.133.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.133.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.133.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.133.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.133.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.133.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.133.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.133.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.133.3`
