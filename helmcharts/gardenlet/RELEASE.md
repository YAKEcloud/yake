# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which prevented `gardenlet` from creating its own `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource when `selfUpgrade` was set in its Helm chart values ([more information](https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades)). by @rfranzke [#10307]
- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10373]
## 🏃 Others

- `[OPERATOR]` An issue in gardener-node-agent causing registry hosts probe to fail when the `spec.criConfig.containerd.registries.hosts.caCerts` field of OperatingSystemConfig is set is now fixed. by @dimitar-kostadinov [#10381]
- `[OPERATOR]` Kernel setting `net.netfilter.nf_conntrack_max` is only set on nodes by `sysctl.d` if `kube-proxy` is disabled. by @oliver-goetz [#10445]
- `[OPERATOR]` gardener-controller-manager: A corner case issue in the maintenance controller that prevented forceful minor K8s version update from K8s 1.29 to K8s 1.30 is now resolved. by @ialidzhikov [#10440]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.100.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.100.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.100.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.100.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.100.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.100.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.100.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.100.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.100.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.100.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.100.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.100.2`
