# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the reconciliation of backupentries to be stuck when the extension fails to populate the status is now fixed. by @shafeeqes [#9371]
- `[USER]` An issue has been fixed which was causing scale-downs of `kube-controller-manager` and similar controllers due to prevented deletion of orphaned node `Lease`s. by @rfranzke [#9353]
- `[USER]` An issue has been fixed which caused `Shoot` reconciliation to get stuck because the API discovery used to generate the read-only `ClusterRole` for `shoots/viewerkubeconfig` subresource failed. by @rfranzke [#9362]
# [gardener/autoscaler]

## 🏃 Others

- `[OPERATOR]` Add logging for mcm cloud-provider methods for better traceability by @rishabh-11 [gardener/autoscaler#301]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.89.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.89.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.89.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.89.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.89.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.89.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.89.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.89.2`
