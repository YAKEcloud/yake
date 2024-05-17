# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `.monitoring.shoot.remoteWrite.queueConfig` field is no longer available in the `gardenlet` component configuration. If needed, you have to register a webhook for the `monitoring.coreos.com/v1.Prometheus` object named `shoot` in the shoot namespaces. The webhook can inject the needed configuration in `.spec.remoteWrite[0].queueConfig`. by @rfranzke [#9695]
## 📰 Noteworthy

- `[DEVELOPER]` The `extensions.gardener.cloud/v1alpha1.Worker` resource now has a new `.spec.pools[].userDataSecretRef` field which references a `Secret` containing the actual user data. the `.spec.pools[].userData` field is deprecated and will be removed in a future version. `Worker` extensions should fetch the user data from the secret and can use the `extensions/pkg/controller/worker.FetchUserData` helper function for it. by @rfranzke [#9722]
- `[DEVELOPER]` The legacy method for extensions to provide observability configuration for shoot clusters (via `ConfigMap`s labelled with `extensions.gardener.cloud/configuration=monitoring`) is deprecated and will be removed in a future release. Please refer to [this document](https://github.com/gardener/gardener/blob/master/docs/extensions/logging-and-monitoring.md#extensions-monitoring-integration) to get information about the new, recommended way, and start migrating to it. by @rfranzke [#9695]
## ✨ New Features

- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.30. To allow creation/update of 1.30 clusters you will have to update the version of your provider extension(s) to a version that supports 1.30 as well. Please consult the respective releases and notes in the provider extension's repository. by @shafeeqes [#9689]
- `[OPERATOR]` A new feature gate named `VPAAndHPAForAPIServer` is introduced to gardenlet. When enabled, the Shoot Kubernetes API Server is scaled simultaneously by VPA and HPA on the same metric (CPU and memory usage). The new feature aims to replace the existing HVPA autoscaling mechanism for the Shoot Kubernetes API server. by @ialidzhikov [#9678]
- `[USER]` It is now possible to configure `Project`s with the "four-👀 approval concept for deletion" concept. For now, this can only be applied to `Shoot`s. If configured, the user confirming a `Shoot` deletion (via the `confirmation.gardener.cloud/deletion` annotation) must not be the same user who is sending the DELETE request. This can help preventing accidental/unintentional `Shoot` deletion. Find all information about the feature in [this document](https://github.com/gardener/gardener/tree/master/docs/usage/projects.md#four-eyes-principle-for-resource-deletion). by @rfranzke [#9680]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.30. Extension developers have to prepare individual extensions as well to work with 1.30. by @shafeeqes [#9689]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused regeneration of `managedresource-shoot-core-system-*` `Secret`s on each `Shoot` reconciliation. by @rfranzke [#9718]
- `[USER]` A bug has has been fixed which caused unneeded `gardener-node-agent` reconciliations after each `Shoot` reconciliation even if the underlying `OperatingSystemConfig` did not contain relevant changes. by @rfranzke [#9723]
## 🏃 Others

- `[OPERATOR]` e2e-kind tests can now run successfully in an IPv4-only environment by @ScheererJ [#9693]
- `[OPERATOR]` Validation of DNSRecords: allow domain names starting with an underscore "_" by @MartinWeindel [#9714]
- `[OPERATOR]` The istio ingress gateway access log now includes the connections initiated via apiserver-proxy, i.e. cluster-internal communication via kubernetes.default.svc.cluster.local. by @ScheererJ [#9686]
- `[OPERATOR]` Replaced HVPA for the `vali` StatefulSet with VPA. Additionally, the `curator` `kube-rbac-proxy` and `telegraf` containers of the `vali` StatefulSet now specify CPU resource requests of `5m` each. by @plkokanov [#9611]
- `[OPERATOR]` Updated `MCM` metrics list used to configure prometheus by @rishabh-11 [#9684]
- `[OPERATOR]` The `kube-controller-manager` component is now scaled by VPA, instead of HVPA. by @andrerun [#9698]
- `[OPERATOR]` Modified the CPU and memory resource requests for the `plutono` container to `5m` and `45Mi`, respectively. Additionally, reduced the `vali` container CPU resource requests to `20m`. by @plkokanov [#9754]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.95.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.95.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.95.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.95.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.95.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.95.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.95.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.95.0`
