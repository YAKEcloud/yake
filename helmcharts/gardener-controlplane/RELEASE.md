# [gardener/gardener]

## ⚠️ Breaking Changes

- `[USER]` Deprecated `.spec.kubernetes.allowPrivilegedContainers` field in the Shoot API is now removed. by @shafeeqes [#9274]
- `[USER]` The `.status.advertisedAddresses[]` list in a `Shoot`'s status now includes the `Shoot`'s service account issuer under the name `service-account-issuer`. Please revisit any logic that might depend on all advertised addresses being used for communication with the `kube-apiserver` of a shoot cluster. by @dimityrmirchev [#9196]
- `[OPERATOR]` The `ShootForceDeletion` feature gate has been promoted to beta and is turned on by default.  by @acumino [#9325]
## ✨ New Features

- `[DEVELOPER]` The `{garden,seed,shoot}-care` controllers now incorporate `ManagedResource`s into all relevant conditions, and it is possible to override the condition type into which a `ManagedResource`'s status gets incorporated via the `care.gardener.cloud/condition-type` label. Please consult the respective documentation for more information ([`garden-care`](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#care-reconciler), [`seed-care`](https://github.com/gardener/gardener/blob/master/docs/concepts/gardenlet.md#care-reconciler-1), [`shoot-care`](https://github.com/gardener/gardener/blob/master/docs/concepts/gardenlet.md#care-reconciler-2)). by @rfranzke [#9313]
- `[OPERATOR]` The gardenlet now synchronizes the service account public keys of shoot clusters that have managed issuer enabled. The public keys are stored in a dedicated `gardener-system-shoot-issuer` namespace in the Garden cluster. by @dimityrmirchev [#9354]
- `[OPERATOR]` `gardener-resource-manager` now considers the health and the progressing status for `Certificate` and `Issuer` resources (see [cert-management](https://github.com/gardener/cert-management/)) managed via `ManagedResource`s. by @timuthy [#9326]
- `[OPERATOR]` The Shoot maintenance controller now removes unsupported feature gates and admission plugins from the Shoot during force upgrades. by @shafeeqes [#9365]
- `[OPERATOR]` `gardener-operator` now deploys two Alertmanager replicas into the `garden` namespace. They don't come with any configuration by default. It is in the responsibility of the human operators to create `monitoring.coreos.com/v1alpha1.AlertmanagerConfig` resources with the proper configuration suitable for their needs. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#observability). by @rfranzke [#9301]
- `[OPERATOR]` The `ControlPlaneHealthy` condition in `Shoot`s now reports an issue when `{kube,machine}-controller-manager` or `cluster-autoscaler` are scaled down to `0` replicas. The `EveryNodeReady` condition in `Shoot`s now reports an issue when at least `20%` of the `Lease`s related to nodes in the `kube-node-lease` namespace are expired. by @rfranzke [#9376]
## 🐛 Bug Fixes

- `[DEVELOPER]` Function `NewClientFromBytes` in package `pkg/client/kubernetes/client.go` was fixed to consider `AllowedUserFields`. Earlier, it failed when creating a Kubernetes client with a special but allowed fields in the Kubeconfig (e.g. `auth-provider`). by @timuthy [#9333]
## 🏃 Others

- `[OPERATOR]` Update CoreDNS to v1.11.1. by @DockToFuture [#8945]
- `[OPERATOR]` The gardener operator documentation now closes resembles the reality of the coding. by @ScheererJ [#9342]
- `[OPERATOR]` The istio ingress gateway orphan namespace detection no longer interferes with the istio ingress gateway zone migration in case the target zone names are unknown and there is no active usage. by @ScheererJ [#9460]
- `[OPERATOR]` The ingress domain of kube-apiserver should work again for single-zonal shoot control planes. by @ScheererJ [#9393]
- `[OPERATOR]` There is a new plutono dashboard named `Container Images` that currently contains 2 panels for image pull durations. by @ialidzhikov [#9422]
- `[OPERATOR]` Port 8132 of istio ingress gateway will respond to all ordinary http requests with a redirect (301) to the https port by @ScheererJ [#9332]
- `[OPERATOR]` The operating system config reconciler of the `gardener-node-agent` now creates directories with `0755` permissions when it creates files listed in the corresponding `OperatingSystemConfig` on the node. Previously these directories were created with no permissions. by @plkokanov [#9443]
- `[OPERATOR]` Seed clusters with a wildcard certificate no longer use `Ingress` resources to expose `kube-apiserver`. Instead, `Istio` resources are directly used now. by @ScheererJ [#9300]
- `[OPERATOR]` Shoot clusters should stay accessible after istio ingress gateway migration via annotation alpha.istio-ingress.gardener.cloud/migrate-to was triggered. by @ScheererJ [#9423]
- `[OPERATOR]` Operators can create duplicate istio ingress gateways for migration if the zone names should be changed in the seed specification by @ScheererJ [#9304]
- `[DEVELOPER]` Now the observability applications which are also targets of the authentication & authorization proxies share common label.  by @nickytd [#9385]
- `[DEVELOPER]` Local dev setup can now deploy a cluster with volume resize support. by @dnaeon [#9363]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.91.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.91.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.91.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.91.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.91.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.91.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.91.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.91.0`
