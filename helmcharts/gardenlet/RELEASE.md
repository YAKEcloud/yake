# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented the deployment of `gardenlet`s via `gardener-operator` and the `Gardenlet` resource when `.spec.kubeconfigSecretRef` was used. by @rfranzke [#10411]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.5`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.5) by @gardener-ci-robot [#10443]
- `[OPERATOR]` gardener-controller-manager: A corner case issue in the maintenance controller that prevented forceful minor K8s version update from K8s 1.29 to K8s 1.30 is now resolved. by @ialidzhikov [#10438]
- `[OPERATOR]` Kernel setting `net.netfilter.nf_conntrack_max` is only set on nodes by `sysctl.d` if `kube-proxy` is disabled. by @ScheererJ [#10434]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.1`
