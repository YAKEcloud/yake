# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` Component config change for `gardener-operator`: `extensionVirtualClusterConfig` was renamed to `extension`. by @MartinWeindel [#10277]
## 📰 Noteworthy

- `[DEVELOPER]` Enable apiserver feature gate `UseNamespacedCloudProfile` in local setup by default. Though, feature gate should not be enabled in production environments yet, until access control is implemented. by @LucaBernstein [#10266]
- `[OPERATOR]` `kube-proxy` now has a readiness probe so that a node will only become ready for workloads after `kube-proxy` was ready at least once. by @ScheererJ [#10407]
- `[OPERATOR]` Host spread for shoots with failure tolerance `node` (`.spec.controlPlane.highAvailability.failureTolerance.type`) is now accomplished via `minDomains`. Earlier, this happened at a best effort basis only. If a seed was having less than 3 nodes at the time the control-plane pods were scheduled, the desired pod distribution was not possible. by @timuthy [#10400]
## ✨ New Features

- `[OPERATOR]` Introduced metrics exposing the Garden resource's condition and last operation. by @rickardsjp [#10393]
- `[OPERATOR]` Add `NamespacedCloudProfile` controller to enable usage of `NamespacedCloudProfile` in `Shoot` spec. by @LucaBernstein [#10266]
- `[OPERATOR]` `gardener-operator` is now capable of deploying admission controllers for the virtual-garden via `operator.gardener.cloud/v1alpha1.Extension` resources. by @MartinWeindel [#10277]
- `[DEVELOPER]` Extension `provider-local` has a dummy admission controller now. by @MartinWeindel [#10277]
## 🐛 Bug Fixes

- `[DEVELOPER]` A bug was fixed that led to `env-test` setup errors when `make test-integration` was executed locally. by @timuthy [#10456]
## 🏃 Others

- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.54.1`. by @gardener-ci-robot [#10395]
- `[DEPENDENCY]` The `fluent-operator` image has been updated to `v3.10`. [Release Notes](https://redirect.github.com/fluent/fluent-operator/releases/tag/v3.1.0)  
  The `fluent-bit` image has been updated to `v3.1.5`. [Release Notes](https://redirect.github.com/fluent/fluent-bit/releases/tag/v3.1.5)  
  The `gardener/logging` image has been updated to `v0.61.0`. [Release Notes](https://redirect.github.com/gardener/logging/releases/tag/v0.61.0) by @nickytd [#10429]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.77.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.77.0) by @gardener-ci-robot [#10463]
- `[DEPENDENCY]` The `registry.k8s.io/metrics-server/metrics-server` image has been updated to `v0.7.2`. by @gardener-ci-robot [#10408]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.76.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.76.2) by @gardener-ci-robot [#10446]
- `[DEPENDENCY]` The `quay.io/brancz/kube-rbac-proxy` image has been updated to `v0.18.1`. by @gardener-ci-robot [#10427]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.76.1`. by @gardener-ci-robot [#10448]
- `[DEPENDENCY]` The `quay.io/cortexproject/cortex` image has been updated to `v1.18.0`. by @gardener-ci-robot [#10458]
- `[DEPENDENCY]` The `gardener/hvpa-controller` image has been updated to `v0.16.0`. [Release Notes](https://redirect.github.com/gardener/hvpa-controller/releases/tag/v0.16.0) by @gardener-ci-robot [#10397]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.27.6`. by @gardener-ci-robot [#10424]
- `[DEVELOPER]` The guestbook container image used in the test machinery tests is now updated from an image in GCR to an image in Artifact Registry. by @ialidzhikov [#10409]
- `[DEVELOPER]` Introduce `golang-test` image for Go 1.23 and remove its Go 1.21 version. by @oliver-goetz [#10388]
- `[OPERATOR]` A stale VPA related to the old alertmanager deployment was not cleaned up by gardenlet. Now, gardenlet on startup cleans up the these stale alertmanager VPAs. by @ialidzhikov [#10462]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.103.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.103.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.103.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.103.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.103.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.103.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.103.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.103.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.103.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.103.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.103.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.103.0`
