# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12645]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12678]
- `[OPERATOR]` Seed registration was fixed for `ManagedSeed`s with seed templates configuring `spec.resources`. by @timuthy [#12662]
## 🏃 Others

- `[OPERATOR]` A bug in Gardener Node Agent that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12671]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.122.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.122.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.122.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.122.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.122.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.122.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.122.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.122.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.122.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.122.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.122.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.122.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.122.3`
