# [github.com/gardener/gardener:v1.132.4]

## 🐛 Bug Fixes
- `[OPERATOR]` extension library: An issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the BackupEntry Secret is now fixed. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#13793](https://github.com/gardener/gardener/pull/13793)]
- `[OPERATOR]` Refactor the collector `journald` receiver to capture kernel logs via a more stable method. by @rrhubenov [[#13736](https://github.com/gardener/gardener/pull/13736)]
- `[OPERATOR]` An issue causing credentials rotation for the Garden resource to fail is now fixed. by @ialidzhikov [[#13740](https://github.com/gardener/gardener/pull/13740)]
- `[USER]` Fix a bug that prevents updating expiration dates of overridden machine image versions in `NamespacedCloudProfile`s. by @LucaBernstein [[#13771](https://github.com/gardener/gardener/pull/13771)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.4`
