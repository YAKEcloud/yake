# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The deprecated `.spec.runtimeCluster.ingress.domain` field has been dropped from the `Garden` API. Make use of `.spec.runtimeCluster.ingress.domains`. by @ScheererJ [#9447]
- `[OPERATOR]` Graduated `MachineControllerManagerDeployment` feature gate was removed. by @ScheererJ [#9450]
- `[OPERATOR]` The graduated `APIServerFastRollout` feature gate has been dropped. by @rfranzke [#9478]
- `[OPERATOR]` The graduated `UseGardenerNodeAgent` feature gate has been dropped. Before upgrading to this Gardener version, make sure to have up-to-date OS extensions installed on your landscape: `os-gardenlinux@v0.24+`, `os-ubuntu@v1.25+`, `os-suse-chost@v1.25+`, `os-coreos@v1.20+`, `os-metal@v0.8+`, `provider-aws@v1.53.2+`. by @rfranzke [#9477]
- `[USER]` The specification of additional, non-primary DNS providers was deprecated and will be discontinued in a future release. If you need additional DNS providers for your shoot workload, please use the provider config for the respective DNS extension. by @timuthy [#9471]
- `[DEVELOPER]` The deprecated `oscommon` package has been removed. by @rfranzke [#9477]
## 📰 Noteworthy

- `[DEVELOPER]` Admission controllers of provider extensions should be adjusted to accommodate NamespacedCloudProfiles by @benedictweis [#9440]
- `[DEVELOPER]` The following fields in the`extensions.gardener.cloud/v1alpha1.OperatingSystemConfig` API have been deprecated and will be removed in a future version: `.spec.reloadConfigFilePath`, `.status.command`, `.status.units`, `.status.files`. by @rfranzke [#9477]
- `[OPERATOR]` Secret `openvpn-diffie-hellman-key` in the `garden` namespace containing the Diffie-Hellmann key can be deleted from landscapes as it is no longer needed. by @ary1992 [#9386]
- `[OPERATOR]` resource-manager's secret reconciler that removed `resources.gardener.cloud/gardener-resource-manager` finalizer has been removed. by @Kostov6 [#9490]
## ✨ New Features

- `[DEVELOPER]` A new extension lifecycle strategy `reconcile: AfterWorker` is now available for Extensions to use in their `ControllerRegistration`. by @maboehm [#9472]
## 🐛 Bug Fixes

- `[DEVELOPER]` provider-local: An issue causing the backup directory not to be deleted after successful control plane migration is now fixed. by @Kostov6 [#9182]
- `[DEVELOPER]` An issue was fixed that caused `make verify` to fail because of `logcheck` build issues. by @timuthy [#9458]
- `[OPERATOR]` Restarting systemd units by annotating the node now works without specifying the `.service` suffix in unit names. by @oliver-goetz [#9459]
## 🏃 Others

- `[OPERATOR]` Images for local development should now be properly rebuilt, if changes are made only to files in the `main` packages under `./cmd/...` directories.  by @plkokanov [#9496]
- `[OPERATOR]` During the `restore` phase of control plane migration of HA shoots, the shoot's `kube-apiserver` is deployed immediately after one replica is ready for each of the events and main `etcd`s. The event and main `etcd`s are scaled up to 3 replicas (the current default for HA shoots) after the `kube-apiserver` is deployed and ready. This should greatly reduce the downtime during control plane migration of HA shoots. by @plkokanov [#9462]
- `[OPERATOR]` A service is added for the shoot cluster's kube-system/node-problem-detector daemonset by @istvanballok [#9483]
- `[OPERATOR]` Secret `vpn-seed-server-dh` will no longer be created as [gardener/vpn2](https://github.com/gardener/vpn2) release `v0.23.0` removed the need for supplying the vpn server with `Diffie–Hellman` parameters. by @ary1992 [#9386]
- `[OPERATOR]` The `Data Transfer` graph from the `Istio Mesh Dashboard` in the seed `plutono` now uses `rate` when displaying the `istio_tcp_received_bytes_total` and `istio_tcp_sent_bytes_total` metrics. by @plkokanov [#9495]
- `[OPERATOR]` Correct NodeNotHealthy filtering query to use `v1beta1constants.TaintNodeCriticalComponentsNotReady` by @adenitiu [#9470]
- `[DEVELOPER]` New `consistOf` and `contain` Gomega matchers for `ManagedResource`s were added. Tests can concisely check for expected objects a `ManagedResource` is responsible for. by @timuthy [#9421]
## 📖 Documentation

- `[DEVELOPER]` Add `yq` as a local setup prerequisite. by @marc1404 [#9510]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.92.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.92.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.92.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.92.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.92.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.92.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.92.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.92.0`
