# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `hack/check-docforge.sh` script is now removed. The repo based manifest are removed in favor of a centrally managed manifests. See https://github.com/gardener/documentation/issues/431. The manifests are now maintained centrally in https://github.com/gardener/documentation/tree/master/.docforge. by @Kostov6 [#8692]
- `[USER]` Validation has been added for `spec.kubernetes.kubeAPIServer.runtimeConfig` field in the Shoot API. Disabling APIs marked as "Required" by gardener is not permitted. by @shafeeqes [#8695]
## ✨ New Features

- `[OPERATOR]` CloudProfiles allow configuring update strategies {patch, minor, major} for machine images that affect update behavior during auto and force update. by @danielfoehrKn [#8275]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` An issue causing the `etcd-backup` Secret to be wrongly deleted for a Shoot cluster due to stale BackupEntry deletion from a previous Shoot creation with the same name is now fixed. by @Kostov6 [#8709]
- `[OPERATOR]` An issue has been fixed that prevented setting the `UnauthenticatedHTTP2DOSMitigation` feature gate. by @timuthy [#8732]
- `[OPERATOR]` Add memory and cpu limits (maxAllowed) to Prometheus (H)VPAs. by @rickardsjp [#8694]
## 🏃 Others

- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.4`. by @shafeeqes [#8727]
- `[OPERATOR]` Partial Shoot maintenance errors are now reported as events on the Shoot and in the Shoot's `LastMaintenance` status. by @danielfoehrKn [#8275]
- `[OPERATOR]` With this release the obervability compoents are updated to the latest release versions. Plutono is now at v2.5.25 and Vali is now at v2.2.9 by @nickytd [#8689]
- `[OPERATOR]` The `.status.lastOperation` in `core.gardener.cloud/v1beta1.Seed` and `operator.gardener.cloud/v1alpha1.Garden` resources is now only updated each `5s` during a reconciliation. Previously, it was updated immediately when a task was finished. by @rfranzke [#8705]
- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]
- `[OPERATOR]` APIServer validation allows updating to expired Kubernetes and machine image versions. by @danielfoehrKn [#8275]
# [gardener/etcd-druid]

## 🏃 Others

- `[OPERATOR]` Alpine image used in init containers is now part of the IMAGEVECTOR_OVERWRITE by @aaronfern [gardener/etcd-druid#714]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.83.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.83.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.83.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.83.0`
node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.83.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.83.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.83.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.83.0`
