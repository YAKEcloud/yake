# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `VPAForETCD` feature gate is promoted to beta and now enabled by default. by @voelzmo [#9873]
- `[OPERATOR]` The `CoreDNSQueryRewriting` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @ScheererJ [#9889]
- `[OPERATOR]` The `MutableShootSpecNetworkingNodes` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @ScheererJ [#9890]
- `[DEVELOPER]` The deprecated fields `.spec.{reloadConfigFilePath,command}` and `.status.{units,files}` have been removed from the `extensions.gardener.cloud/v1alpha1.OperatingSystemConfig` API. by @rfranzke [#9885]
## 📰 Noteworthy

- `[DEVELOPER]` gardenlet now creates a secret called `worker-pools-operatingsystemconfig-hashes` in the shoot namespace on seed clusters. This secret will be used to upgrade the operating system config key calculation in the future. by @MichaelEischer [#9846]
- `[DEPENDENCY]` The "list `MachineDeployment`s" call in the generic `Worker` actuator has been moved right before its first usage to prevent that the list is outdated before it's used. by @rfranzke [#9925]
## ✨ New Features

- `[OPERATOR]` The Kubelet configuration was enhanced to add configured worker taints during node registration. Earlier, only the `machine-controller-manager` was responsible to add taints to the `Node`s which happened asynchronously, so that unwanted workload might have already scheduled to these workers. by @timuthy [#9872]
- `[OPERATOR]` `gardenlet` is now capable of keeping itself updated by pulling configuration and deployment values from the garden cluster. This way, regular manual Helm deployments can be avoided. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_manually.md#self-upgrades).  
  Please note, a Gardenlet Helm chart is required on an OCI repository. Gardener will provide this officially in a future release. by @rfranzke [#9874]
- `[DEVELOPER]` `gardener-operator` local development setup supports creating seeds, shoots and managed-seeds now. Please see [the docs](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#alternative-way-to-set-up-garden-and-seed-leveraging-gardener-operator) for details. by @oliver-goetz [#9763]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the maintenance state to no get update even though maintenance succeeds has been fixed. by @acumino [#9945]
## 🏃 Others

- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.30.2`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.30.2) by @gardener-ci-robot [#9926]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.25.0`. [Release Notes](https://togithub.com/gardener/vpn2/releases/tag/0.25.0) by @gardener-ci-robot [#9904]
- `[DEPENDENCY]` The `registry.k8s.io/dns/k8s-dns-node-cache` image has been updated to `1.23.1`. by @gardener-ci-robot [#9938]
- `[DEPENDENCY]` The `gardener/terminal-controller-manager` image has been updated to `v0.33.0`. [Release Notes](https://togithub.com/gardener/terminal-controller-manager/releases/tag/v0.33.0) by @gardener-ci-robot [#9896]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.27.4`. by @gardener-ci-robot [#9943]
- `[DEPENDENCY]` The `quay.io/brancz/kube-rbac-proxy` image has been updated to `v0.18.0`. by @gardener-ci-robot [#9917]
- `[OPERATOR]` The auto-scaling by VPA is now disabled for the `conntrack-fix` sidecar container of kube-proxy. The corresponding container does not need vertical auto-scaling. by @ialidzhikov [#9953]
## 📖 Documentation

- `[OPERATOR]` Clarify the importance of correctly configuring shoot service account issuer hostname if Gardener Operator is not used.  by @dimityrmirchev [#9923]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.97.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.97.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.97.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.97.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.97.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.97.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.97.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.97.0`
