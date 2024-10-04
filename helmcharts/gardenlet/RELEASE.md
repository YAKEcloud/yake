# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` The `VPAForETCD` and `VPAAndHPAForAPIServer` feature gates have been promoted to GA and locked to `true`. by @plkokanov [#10599]
- `[USER]` The limitation of having at maximum ~80 worker pools in `Shoot`s has been lifted. Much higher numbers should be possible now (concrete limit depends on the amount of configuration within the pools (e.g., labels, taints, annotations, etc.)). by @rfranzke [#10542]
## ✨ New Features

- `[DEVELOPER]` Add functionality for the determination of bastion VM parameters used by the extensions by @hebelsan [#10537]
- `[OPERATOR]` `gardener-operator` is now capable of deploying extension controllers to the garden runtime cluster via `operator.gardener.cloud/v1alpha1.Extension` resources. Please visit [this document](https://github.com/gardener/gardener/blob/70ef15cb1c26e7cb93388b5cecf91c95d5b3f459/docs/concepts/operator.md#configuration-for-extension-deployment) for more information. by @timuthy [#10518]
- `[OPERATOR]` `gardenlet` now performs garbage collection of stale `Pod`s in all namespaces (except `kube-system`) in the seed cluster. by @rfranzke [#10548]
## 🐛 Bug Fixes

- `[OPERATOR]` When checking whether a `Deployment` rollout is complete, stale `Pod`s are now ignored and no longer counted. by @rfranzke [#10548]
## 🏃 Others

- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.0`. by @gardener-ci-robot [#10547]
- `[DEPENDENCY]` The `gardener/ingress-default-backend` image has been updated to `0.20.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.20.0) by @gardener-ci-robot [#10560]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @gardener-ci-robot [#10570]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.6`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.6) by @gardener-ci-robot [#10556]
- `[DEPENDENCY]` The `gardener/gardener-discovery-server` image has been updated to `v0.2.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.2.0) by @gardener-ci-robot [#10546]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.77.1`. by @gardener-ci-robot [#10573]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.28.0`. by @gardener-ci-robot [#10591]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.31.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.31.2) by @gardener-ci-robot [#10553]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.6`. by @gardener-ci-robot [#10564]
- `[DEVELOPER]` provider-extensions setup: Seed VPA is disabled by default to avoid two VPA deployments to act on the same cluster causing endless eviction loops. by @ialidzhikov [#10593]
- `[DEVELOPER]` Correctly extract and install the go binaries in the remote local setup by @vicwicker [#10605]
- `[OPERATOR]` Allow overlapping network ranges in case of single stack IPv6. by @axel7born [#10584]
- `[OPERATOR]` Allow empty pod and service ranges in shoot spec for IPv6 single stack. by @axel7born [#10541]
- `[OPERATOR]` The `TopologySpreadConstraint` calculation was improved for workload spread across multiple zones. This especially leads to a more balanced distribution of `kube-apiserver` and `istio` replicas in seed clusters. by @timuthy [#10608]
- `[OPERATOR]` VPA resource settings are now adapted - memory limits are removed and initial resource requests are lowered. by @voelzmo [#10568]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.0`
