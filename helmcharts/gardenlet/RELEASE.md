# [github.com/gardener/gardener:v1.131.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Gardenlet's backupbucket and backupentry controllers are now unsetting all unknown labels and annotations on the extension secrets in the seed cluster, this fixes a bug that occurs after migration from `WorkloadIdentity` to `Secret` credentials the workload identity annotations and labels were kept in the secrets causing other controllers to keep trying to use the WorkloadIdentity credentials. by @vpnachev [[#13364](https://github.com/gardener/gardener/pull/13364)]
- `[DEVELOPER]` Backupentry generic actuator is fixed to clean all unknown annotations and labels from the `etcd-backup` secret, this change fixes issues when the credentials are switched between static secret and workload identity. by @vpnachev [[#13364](https://github.com/gardener/gardener/pull/13364)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.131.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.131.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.131.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.131.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.131.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.131.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.131.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.131.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.131.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.131.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.131.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.131.2`
