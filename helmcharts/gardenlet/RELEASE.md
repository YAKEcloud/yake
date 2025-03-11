# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The injection of a garden cluster kubeconfig into extension deployments running in the seed cluster does NO LONGER happen automatically. If you need it, make sure to set `.injectGardenKubeconfig=true` in your `ControllerDeployment` resources before you upgrade your `gardenlet`s to this version. by @rfranzke [#11607]
- `[OPERATOR]` ⚠️ Gardener does no longer support garden, seed, or shoot clusters with Kubernetes versions <= 1.26. Make sure to upgrade all existing clusters before upgrading to this Gardener version. by @shafeeqes [#10664]
- `[USER]` The `.spec.kubernetes.enableStaticTokenKubeconfig` field in the Shoot API is deprecated and will be removed in Gardener `v1.120`. Please adapt your Shoot manifests accordingly. by @shafeeqes [#10664]
- `[USER]` The `.spec.kubernetes.kubeControllerManager.podEvictionTimeout` field in the Shoot API is deprecated since Gardener `v1.63` and will be removed in Gardener `v1.120`. Please adapt your Shoot manifests accordingly. by @shafeeqes [#10664]
- `[USER]` A `deny-all` network policy is now deployed in the `kube-system` namespaces of `Shoot`s with Kubernetes version `>= v1.33`. by @AleksandarSavchev [#11502]
## 📰 Noteworthy

- `[DEVELOPER]` The `SeedNamePredicate` function in the `pkg/controllerutils/predicate` pkg is now dropped. by @shafeeqes [#11449]
- `[DEVELOPER]` A new convenience tool `extension-generator` was added to generate `Extension` example manifests. Gardener extensions can execute this script in the scope of the build process to always check in and provide an up-to-date example in their repositories. by @timuthy [#11329]
- `[USER]` All `Seed`s are now automatically labeled with `name.seed.gardener.cloud/<name>=true` (⚠ no longer `seed.gardener.cloud/<name>=true`) where `<name>` is their own name, and (if applicable) the name of their parent seed in case they are managed seeds. This label can be used as selector for requests. by @rfranzke [#11479]
- `[OPERATOR]` Removed reversed-vpn-auth-server deployment as it was unused. See https://github.com/gardener/gardener/issues/11214 by @Wieneo [#11338]
## ✨ New Features

- `[OPERATOR]` Layer 7 load balancing for `virtual-garden-` and `shoot-kube-apiservers` can be activated via `IstioTLSTermination` feature gate in `gardener-operator` and `gardenlet` by @oliver-goetz [#11085]
- `[OPERATOR]` Enhanced the `Shoot` and `Garden` APIs to configured `minAllowed` VPA values for `etcd`s and `kube-apiserver`. See [shoot example](https://github.com/gardener/gardener/blob/master/example/90-shoot.yaml) or [garden example](https://github.com/gardener/gardener/blob/master/example/operator/20-garden.yaml) for more information. by @timuthy [#11252]
- `[OPERATOR]` `gardener-operator` now waits for required `Extension`s to get ready early in the reconcile flow. It addresses use-cases where extensions run mutating webhooks in the garden runtime cluster that must be present when `Garden` components are deployed. by @timuthy [#11523]
- `[USER]` When the scheduler succeeds to assign a `Seed` to a `Shoot`, its `.status.lastOperation` is set to `nil` (in case it was set to `Create Pending`). by @rfranzke [#11484]
## 🐛 Bug Fixes

- `[OPERATOR]` To be compatible with containerd 2.0, calls to the `ctr` binary now have flags before arguments when pulling images from a registry during node bootstrap. by @MrBatschner [#11507]
- `[OPERATOR]` Fixed a bug where the destination gardenlet acted on shoots in control plane migration too early. by @timebertt [#11521]
- `[OPERATOR]` An issue was fixed that caused a deployment error when a `Gardenlet` resource referred to a remote cluster (`spec.kubeconfigSecretRef` defined). by @timuthy [#11580]
- `[DEVELOPER]` local setup: An issue causing the machine-controller-manager-provider-local image not to be updated in the local setup when the images are cached is now fixed. by @ialidzhikov [#11472]
- `[DEVELOPER]` SSH tunnel for local development with remote seed no longer fails with slow DNS. by @matthias-horne [#11538]
## 🏃 Others

- `[DEVELOPER]` `machinecontrollermanager`, `fluentoperator` and `extension` components now use the `CRDDeployer` to deploy `CRD`s. by @tobschli [#11128]
- `[OPERATOR]` The logging stack is now updated with the latest released components. by @nickytd [#11475]
- `[OPERATOR]` Include `VPA` dashboards in `plutono` running within a `Garden` cluster with enabled VPA configuration. by @vitanovs [#11391]
- `[OPERATOR]` Increase timeout used for waiting for CRD readiness to 2 minutes by @ScheererJ [#11503]
- `[OPERATOR]` Update `prometheus` label of `vpa-admission-controller` and `vpa-recommender` `ServiceMonitors` from `seed` to `garden` when deployed by the `garden-operator`. With this change, the `Garden` cluster `Prometheus` will match the `ServiceMonitors` and start collecting metrics from the configured services. by @vitanovs [#11318]
- `[OPERATOR]` `API Server Request Rates Per Verb And Resource` supports selection per Pod by @hendrikKahl [#11501]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.0` to `1.30.1`.  by @gardener-ci-robot [#11476]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.35.0` to `0.36.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.36.0) by @gardener-ci-robot [#11543]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/node-exporter` from `v1.8.2` to `v1.9.0`.  by @gardener-ci-robot [#11408]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/cortexproject/cortex` from `v1.18.1` to `v1.19.0`.  by @gardener-ci-robot [#11542]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.34.0` to `0.35.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.35.0) by @gardener-ci-robot [#11541]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.114.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.114.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.114.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.114.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.114.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.114.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.114.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.114.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.114.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.114.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.114.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.114.0`
