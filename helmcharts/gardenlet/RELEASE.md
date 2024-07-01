# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `Registry` in `pkg/utils/managedresources/registry.go` was changed to return all objects as a compressed data chunk.  
  As soon as you update the `github.com/gardener/gardener` dependency to this version, `ManagedResource` secrets will be rewritten in a [Brotli](https://github.com/google/brotli) compressed format (combined under data key `data.yaml.br`). by @timuthy [#9964]
- `[DEPENDENCY]` The `github.com/gardener/gardener/extensions/pkg/webhook/cloudprovider.Args#EnableObjectSelector` field is now removed. The corresponding webhook's object selector is now enforced unconditionally. by @ialidzhikov [#10027]
- `[OPERATOR]` Provider extensions specifying a "controlplane" mutating webhook `ObjectSelector` are incompatible with gardenlet < `v1.98.0`. by @LucaBernstein [#9981]
- `[OPERATOR]` The [Resource Size Validator](https://github.com/gardener/gardener/blob/master/docs/concepts/admission-controller.md) of the `gardener-admission-controller` ignores `status` subresource and `metadata.managedFields` for resource size limits. Please consider adjusting your configuration if you already increased the limits because of these now ignored sections. by @LucaBernstein [#10011]
- `[USER]` Separately configuring resource reservations for system processes via `shoot.spec.kubernetes.kubelet.systemReserved` or `spec.provider.workers[].kubernetes.kubelet.systemReserved` is deprecated in Gardener and will be removed in a future release. Please merge existing resource reservations into the corresponding `kubeReserved` field. by @MichaelEischer [#9985]
- `[DEVELOPER]` The function `github.com/gardener/gardener/extensions/pkg/controller/worker/WorkerPoolHash` now expects separate additional data for version 1 and 2 of the hash calculation. Version 2 does not include extension provider specific fields by default. Add those to the additional data for version 2 if necessary. by @MichaelEischer [#9865]
## 📰 Noteworthy

- `[DEVELOPER]` The resources mutated by the "controlplane" mutating webhooks are labeled with `provider.extensions.gardener.cloud/mutated-by-controlplane-webhook: true` by gardenlet. The provider extensions can add an object selector to their "controlplane" mutating webhooks to do not intercept requests for unrelated objects. by @LucaBernstein [#9981]
## ✨ New Features

- `[OPERATOR]` Version 2 of the WorkerPoolHash calculation now takes the current name of the OperatingSystemConfig into account. Its usage is controlled by the gardenlet feature gate `NewWorkerPoolHash`. All provider extension must be upgraded before enabling this feature gate. The new calculation also ensures that changes of the fields kubeReserved, evictionHard and cpuManagerPolicy in the kubelet config of a worker pool result in node rolls. by @MichaelEischer [#9865]
- `[OPERATOR]` Failure of snapshot compaction jobs at a rate greater than 10% of shoots in a seed will raise alerts now. by @renormalize [#9739]
- `[DEVELOPER]` `gosec` was introduced for Static Application Security Testing (SAST). by @oliver-goetz [#9959]
- `[USER]` A new field `.spec.CredentialsBindingName` referencing a `CredentialsBinding` was introduced to shoot specification. It is meant to replace the existing `SecretBindingName`. As of now the field is guarded by a feature gate called `AllowCredentialsBinding`. by @dimityrmirchev [#9853]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix a bug where the Reversed VPN OpenVPN Server (HA) doesn't display any data. by @axel7born [#10035]
## 🏃 Others

- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.30.3`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.30.3) by @gardener-ci-robot [#10031]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.20.1`. [Release Notes](https://togithub.com/gardener/alpine-conntrack/releases/tag/3.20.1) by @gardener-ci-robot [#10010]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.3`. by @gardener-ci-robot [#9914]
- `[DEPENDENCY]` extensions lib: The shoot webhook does now support specifying an object selector. by @ialidzhikov [#10026]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.16`. [Release Notes](https://togithub.com/credativ/vali/releases/tag/v2.2.16) by @gardener-ci-robot [#9976]
- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.31`. [Release Notes](https://togithub.com/credativ/plutono/releases/tag/v7.5.31) by @gardener-ci-robot [#9978]
- `[DEVELOPER]` The "remote local setup" is enhanced e.g. to support multiple scenarios. by @istvanballok [#9980]
- `[OPERATOR]` `machine-controller-manager-provider-xxx` container now exposes metrics that prometheus can scrapes by @aaronfern [#9933]
- `[OPERATOR]` kube-apiserver HPA's max replicas count from 3 to 6 in `VPAAndHPA` autoscaling mode to support very large control planes. by @ialidzhikov [#9971]
- `[OPERATOR]` Gardener Enhancement Proposal for a bastion section in the CloudProfile by @hebelsan [#9935]
- `[OPERATOR]` Introduce the operator `Extension` type. An `Extension` is responsible for installing the `ControllerRegistration` and `ControllerRuntime` in the garden cluster and also install any extensions necessary to manage infrastructure resources in the runtime cluster. This release contains the API only, further functionality will be released in future Gardener versions. by @kon-angelo [#9924]
- `[OPERATOR]` The data in `ManagedResource` secrets is now compressed with [Brotli](https://github.com/google/brotli) and stored under a single data key `data.yaml.br`. by @timuthy [#9964]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.0`
