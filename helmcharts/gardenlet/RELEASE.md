# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The unused method `WithShootCredentials` have been removed from `github.com/gardener/gardener/pkg/gardenlet/operation/shoot.Builder`. by @vpnachev [#10672]
- `[DEVELOPER]` In the local development setup, the images are pushed to `garden.local.gardener.cloud:5001` instead of `localhost:5001` now. Please add `127.0.0.1 garden.local.gardener.cloud` to your `/etc/hosts`.  by @rrhubenov [#10257]
- `[OPERATOR]` Feature gate `IPv6SingleStack` has been removed. Infrastructure-specific validations will be added in parallel to the corresponding provider extensions. by @ScheererJ [#10716]
## 📰 Noteworthy

- `[OPERATOR]` ManagedSeed's `.spec.gardenlet.config.seedConfig.spec.ingress.controller.kind` field is now defaulted to `nginx` when  
  `.spec.gardenlet.config.seedConfig` or `.spec.gardenlet.config.seedConfig.spec.ingress` is nil.  
   This allows the creation of ManagedSeed without specifying the `.spec.gardenlet` field. by @RadaBDimitrova [#10655]
- `[OPERATOR]` A new `required` controller was added to `gardener-operator`. It maintains the `RequiredRuntime` condition for `Extension` resources to indicate that the extension deployment is required in the Garden-Runtime cluster. by @timuthy [#10650]
- `[OPERATOR]` The `gardener/controlplane` Helm chart has been deprecated and will be removed after `v1.135` has been released (around beginning of 2026). We urge you to switch to a [`gardener-operator`](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md)-based installation. Read all about it [here](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#migrating-an-existing-gardener-landscape-to-gardener-operator). by @rfranzke [#10706]
- `[DEVELOPER]` `.spec.gardenlet` of ManagedSeed is now a required field. This was already the case from an API perspective, enforced by validation. by @RadaBDimitrova [#10648]
- `[USER]` The `spec.kubernetes.kubeAPIServer.oidcConfig` field in the `Shoot` API is deprecated and will be removed after support for Kubernetes 1.31 is dropped. by @AleksandarSavchev [#10666]
## ✨ New Features

- `[OPERATOR]` If an admission webhook which was deployed via `Extension` resource by `gardener-operator` is deleted again, its webhook configuration in the virtual-cluster is cleaned up automatically. by @oliver-goetz [#10585]
- `[OPERATOR]` The `CloudProfile`, `Seed`, and `Shoot` APIs are now allowing to configure access restrictions (e.g., to enable "EU access"-only or similar policies). The legacy approach with the `seed.gardener.cloud/eu-access` labels is deprecated and will be removed in a future release. Make sure to adapt to the new APIs. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/usage/shoot/access_restrictions.md). by @rfranzke [#10654]
- `[USER]` The viewer kubeconfigs for shoot clusters now allow the `pods/log` subresource. by @rfranzke [#10711]
- `[USER]` Service Account Managed Issuer can be now enabled for workerless shoot clusters. by @dimityrmirchev [#10689]
- `[USER]` Structured authorization configuration can now be set by creating a `ConfigMap` with the `AuthorizationConfiguration` file set in the `config.yaml` data key and referencing it (in the `Shoot` via `.spec.kubernetes.kubeAPIServer.structuredAuthorization`, in the `Garden` via `.spec.virtualCluster.kubernetes.kubeAPIServer.structuredAuthorization` for Kubernetes versions `>= v1.30`. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/usage/shoot/shoot_access.md#structured-authorization). by @rfranzke [#10682]
- `[USER]` Gardener reports the cluster's egress CIDRs in `Shoot.status.networking.egressCIDRs` if supported by the used provider extension. by @timebertt [#10240]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix Prometheus rule `shoot-kube-proxy`. by @LucaBernstein [#10757]
- `[OPERATOR]` The TopologySpreadConstraints calculation was improved for `StatefulSet`s to always use a stable label selector. This led to issues in the past when shoots were upgraded to HA. by @timuthy [#10750]
- `[OPERATOR]` valitail version is now pinned to v2.2.15 (depends on glibc 2.32). by @ialidzhikov [#10776]
## 🏃 Others

- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.34`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.34) by @gardener-ci-robot [#10732]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.23.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.2) by @gardener-ci-robot [#10747]
- `[DEPENDENCY]` The `gardener/cert-management` image has been updated to `v0.16.0`. [Release Notes](https://redirect.github.com/gardener/cert-management/releases/tag/v0.16.0) by @gardener-ci-robot [#10684]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.19`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.19) by @gardener-ci-robot [#10680]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.23.3`. by @gardener-ci-robot [#10725]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.55.0`. by @gardener-ci-robot [#10697]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.2`. by @gardener-ci-robot [#10692]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.1) by @gardener-ci-robot [#10755]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.78.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.78.0) by @gardener-ci-robot [#10731]
- `[OPERATOR]` The admission automatically adds the `provider.extensions.gardener.cloud` label to `NamespacedCloudProfile`s. by @LucaBernstein [#10742]
- `[OPERATOR]` Add dual-stack support for coredns. by @DockToFuture [#10733]
- `[OPERATOR]` Allow extensions to be scraped in garden runtime cluster even outside garden namespace by @ScheererJ [#10720]
- `[OPERATOR]` Add label selector to ShootResourceReservation plugin to control for which Shoots the ShootResourceReservation Plugin sets `kubeReserved` according to the GKE formula when `useGKEFormula: true` is set. by @voelzmo [#10492]
- `[OPERATOR]` Increase the readiness probe timeout for the `gardener-metrics-exporter` from 1s to 10s. by @vicwicker [#10771]
- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.23.1`. [Release Notes v0.23.1](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.1), [Release Notes v0.23.0](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.23.0) by @shreyas-s-rao [#10526]
- `[OPERATOR]` The `autoscaler/cluster-autoscaler` image has been updated to `v1.29.2` (for Kubernetes v1.29). [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.29.2) by @rishabh-11 [#10700]
- `[OPERATOR]` Gardener API Server feature gate `ShootCredentialsBinding` has been promoted to beta and is enabled by default. by @dimityrmirchev [#10662]
- `[DEVELOPER]` Add Make target `make operator-seed-dev` for local development of the `gardenlet` in the operator setup. by @marc1404 [#10710]
- `[DEVELOPER]` Fix `/etc/hosts` configuration in the remote local setup by @vicwicker [#10744]
- `[DEVELOPER]` The base image of the `gardener-extension-provider-local-node` image is now updated to `kindest/node@v1.31.1`. by @ialidzhikov [#10688]
- `[DEVELOPER]` local setup: The kind cluster's node image is now updated to `kindest/node@v1.31.1`. by @ialidzhikov [#10723]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.107.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.107.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.107.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.107.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.107.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.107.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.107.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.107.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.107.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.107.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.107.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.107.0`
