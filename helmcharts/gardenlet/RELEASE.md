# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented the deployment of `gardenlet`s via `gardener-operator` and the `Gardenlet` resource when `.spec.kubeconfigSecretRef` was used. by @rfranzke [#10410]
- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10372]
## 🏃 Others

- `[OPERATOR]` Kernel setting `net.netfilter.nf_conntrack_max` is only set on nodes by `sysctl.d` if `kube-proxy` is disabled. by @oliver-goetz [#10444]
- `[OPERATOR]` gardener-controller-manager: A corner case issue in the maintenance controller that prevented forceful minor K8s version update from K8s 1.29 to K8s 1.30 is now resolved. by @ialidzhikov [#10439]
- `[OPERATOR]` An issue in gardener-node-agent causing registry hosts probe to fail when the `spec.criConfig.containerd.registries.hosts.caCerts` field of OperatingSystemConfig is set is now fixed. by @dimitar-kostadinov [#10380]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.76.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.76.2) by @gardener-ci-robot [#10454]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.3`
