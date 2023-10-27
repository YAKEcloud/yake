# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
## 🏃 Others

- `[OPERATOR]` github.com/gardener/etcd-druid #714 @aaronfern  
  Alpine image used in init containers is now part of the IMAGEVECTOR_OVERWRITE by @gardener-ci-robot [#8684]
- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.82.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.82.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.82.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.82.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.82.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.82.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.82.1`
