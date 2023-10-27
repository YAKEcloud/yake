# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
## 🏃 Others

- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.4`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.4`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.4`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.4`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.4`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.4`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.4`
