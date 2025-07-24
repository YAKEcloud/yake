# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12566]
- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12561]
- `[OPERATOR]` A bug in the `istio-ingress` helm chart which could lead to a missing traffic distribution policy in the internal istio-ingressgateway service on certain Kubernetes versions has been fixed. by @oliver-goetz [#12545]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.2`
