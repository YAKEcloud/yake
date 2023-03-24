# [gardener]
## ⚠️ Breaking Changes
* *[OPERATOR]* The deprecated fields `seed.spec.dns.ingressDomain`, `seed.spec.dns.provider.domains`, `seed.spec.dns.provider.zones` has been removed from the Seed API. Please check your `Seed` manifests and remove any usage before upgrading to this Gardener version. ([gardener/gardener#7602](https://github.com/gardener/gardener/pull/7602), [@shafeeqes](https://github.com/shafeeqes))
* *[DEPENDENCY]* The deprecated `{Deploy,Cleanup}MachineDependencies` methods have been dropped from the `WorkerDelegate` interface. Similar, the deprecated `WorkerCredentialsDelegate` interface has been dropped. ([gardener/gardener#7600](https://github.com/gardener/gardener/pull/7600), [@rfranzke](https://github.com/rfranzke))
* *[DEPENDENCY]* Deprecated functions `DeprecatedDetermineError`, `DeprecatedDetermineErrorCodes`, and `DeprecatedNewWrappedLastErrors` have been dropped . ([gardener/gardener#7641](https://github.com/gardener/gardener/pull/7641), [@acumino](https://github.com/acumino))
## ✨ New Features
* *[USER]* Gardener considers the readiness of CSI Drivers on the node before scheduling user workload. Please refer to the [documentation](https://github.com/gardener/gardener/blob/master/docs/usage/node-readiness.md) for more details. ([gardener/gardener#7621](https://github.com/gardener/gardener/pull/7621), [@SimonKienzler](https://github.com/SimonKienzler))
* *[OPERATOR]* Shoot clusters using `provider-local` can now have multiple worker nodes with calico as CNI. ([gardener/gardener#7684](https://github.com/gardener/gardener/pull/7684), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* `gardenlet`'s cache support has been enhanced to virtually all object kinds it requires from the Gardener API server. Earlier, objects like `ShootState`s, `Project`s, `SecretBinding`s, `ControllerDeployment`s, etc. couldn't be cached for security reasons. Especially in large landscapes, this enhancement will lead to less load on the Gardener API server besides reducing the overall network traffic. ([gardener/gardener#7632](https://github.com/gardener/gardener/pull/7632), [@timuthy](https://github.com/timuthy))
* *[DEVELOPER]* Extensions should label `csi-driver-node` pods that they manage with `node.gardener.cloud/wait-for-csi-node-<suffix>=<driver-name>` to ensure user workload is only scheduled to nodes once the driver is properly registered. Please refer to the [documentation](https://github.com/gardener/gardener/blob/master/docs/usage/node-readiness.md) for more details. ([gardener/gardener#7621](https://github.com/gardener/gardener/pull/7621), [@SimonKienzler](https://github.com/SimonKienzler))
* *[DEVELOPER]* The Helm chart values provided when extension controllers are deployed are now including the new value `gardener.seed.name`. ([gardener/gardener#7624](https://github.com/gardener/gardener/pull/7624), [@MartinWeindel](https://github.com/MartinWeindel))
* *[DEVELOPER]* Developers can now use `make gardener-dev` to start a skaffold-based dev loop which can trigger new builds and deployments when changing source files. See the [documentation](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#developing-gardener) for more details. ([gardener/gardener#7659](https://github.com/gardener/gardener/pull/7659), [@timebertt](https://github.com/timebertt))
* *[DEVELOPER]* The local deployment of Gardener with extensions can now deal with multiple seeds. Additional seeds can be added and removed again. ([gardener/gardener#7673](https://github.com/gardener/gardener/pull/7673), [@MartinWeindel](https://github.com/MartinWeindel))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed that caused Grafana dashboard panels related to kubernetes API server monitoring to show no data. ([gardener/gardener#7639](https://github.com/gardener/gardener/pull/7639), [@rickardsjp](https://github.com/rickardsjp))
* *[OPERATOR]* An issue has been fixed which caused undesired `PATCH` requests when updating the state in the `Worker` or `ShootState` resources. ([gardener/gardener#7637](https://github.com/gardener/gardener/pull/7637), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* A bug causing Shoot deletion to fail if the gardener-apiserver is upgraded during deletion is now fixed. ([gardener/gardener#7656](https://github.com/gardener/gardener/pull/7656), [@shafeeqes](https://github.com/shafeeqes))
* *[DEVELOPER]* A bug in `managedresources.NewRegistry` that was leading to excessive memory usage when this function is called multiple times has been fixed. ([gardener/gardener#7694](https://github.com/gardener/gardener/pull/7694), [@vpnachev](https://github.com/vpnachev))
* *[DEPENDENCY]* Extensions can now define conditions to clean them from extensions status in the health check controller. ([gardener/gardener#7660](https://github.com/gardener/gardener/pull/7660), [@acumino](https://github.com/acumino))
## 📖 Documentation
* *[USER]* Added document in which we share our HA best practices with end users to help them make their software highly available. ([gardener/gardener#7556](https://github.com/gardener/gardener/pull/7556), [@vlerenc](https://github.com/vlerenc))
## 🏃 Others
* *[OPERATOR]* Switched images from DockerHub to copies in Gardener GCR ([gardener/gardener#7686](https://github.com/gardener/gardener/pull/7686), [@robinschneider](https://github.com/robinschneider))
* *[OPERATOR]* Update Istio to v1.17.1 ([gardener/gardener#7631](https://github.com/gardener/gardener/pull/7631), [@axel7born](https://github.com/axel7born))
* *[OPERATOR]* Minimal Loki init container with `tunef2s` now enables the `large_dir` filesystem feature on Loki PV. ([gardener/gardener#7650](https://github.com/gardener/gardener/pull/7650), [@vlvasilev](https://github.com/vlvasilev))
* *[OPERATOR]* Update node local dns to version `1.22.20`. ([gardener/gardener#7663](https://github.com/gardener/gardener/pull/7663), [@DockToFuture](https://github.com/DockToFuture))
* *[DEVELOPER]* The Shoot creation test does no longer hard-code the `spec.kubernetes.enableStaticTokenKubeconfig` field to true. The field will be now defaulted by gardener-apiserver: for Shoots with K8s < 1.26, it is set to true; for Shoots with K8s >= 1.26, it is set to false. ([gardener/gardener#7609](https://github.com/gardener/gardener/pull/7609), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEVELOPER]* The following dependencies are updated: ([gardener/gardener#7612](https://github.com/gardener/gardener/pull/7612), [@shafeeqes](https://github.com/shafeeqes))
  * `k8s.io/*` : `v0.26.1` -> `v0.26.2`
  * `sigs.k8s.io/controller-runtime`: `v0.14.4` -> `v0.14.5`
# [hvpa-controller]
## 🏃 Others
* *[OPERATOR]* Bumped go to 1.19.7 ([gardener/hvpa-controller#120](https://github.com/gardener/hvpa-controller/pull/120), [@voelzmo](https://github.com/voelzmo))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.67.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.67.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.67.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.67.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.67.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.67.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.67.0`