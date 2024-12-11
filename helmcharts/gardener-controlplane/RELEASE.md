# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The `autoscaling.k8s.io/v1alpha1.Hvpa` and `autoscaling.k8s.io/v1alpha1.HvpaList` resources were removed from the `pkg/client/kubernetes.SeedScheme` and `pkg/operator/client.RuntimeScheme`    by @plkokanov [#10921]
- `[DEVELOPER]` Extension webhooks need to remove the provider type `Predicates` and add an `ObjectSelector` against the object's provider type label instead. by @LucaBernstein [#10896]
## ✨ New Features

- `[OPERATOR]` Secrets for the `TokenRequestor` can be additionally annotated with `serviceaccount.resources.gardener.cloud/inject-ca-bundle=true` to get the current CA bundle injected as well by @maboehm [#10988]
## 🐛 Bug Fixes

- `[OPERATOR]` `seed-authorizer` and structured authorization webhooks of shoot kube-apiservers no longer use the default TTL for `AuthorizedTTL` and `UnauthorizedTTL`. by @oliver-goetz [#10703]
- `[OPERATOR]` An issue was fixed in `gardener-operator` that led to an inactive Gardenlet controller after a certain period. Thus, the operator needed a restart to react on Gardenlet resources. by @timuthy [#10663]
- `[OPERATOR]` Fixes the bug where ManagedResource were still in progressing phase because of `Completed` pods by @ary1992 [#10961]
## 🏃 Others

- `[OPERATOR]` Fixes the calculation of the maximum number of nodes for cluster autoscaling for dual-stack shoots. by @axel7born [#10994]
- `[OPERATOR]` RBAC rules related to `HVPA` resources have been removed from `gardenlet` and `gardener-operator` - they are no longer necessary. by @plkokanov [#10921]
- `[OPERATOR]` The resource-manager is no longer HVPA-aware.  by @ialidzhikov [#10860]
- `[OPERATOR]` [NewVPN] Enable IPv6 for non-HA if needed. by @MartinWeindel [#10997]
- `[OPERATOR]` Custom CAs are updated on existing nodes too. by @oliver-goetz [#10923]
- `[OPERATOR]` Set env variables for dual-stack in kube-apiserver. by @axel7born [#10970]
- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.55.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.1) by @gardener-ci-robot [#10956]
- `[DEPENDENCY]` The `quay.io/brancz/kube-rbac-proxy` image has been updated to `v0.18.2`. by @gardener-ci-robot [#10953]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.20`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.20) by @gardener-ci-robot [#10993]
- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.35`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.35) by @gardener-ci-robot [#10995]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.28.1`. by @gardener-ci-robot [#10981]
- `[DEPENDENCY]` The `gardener/apiserver-proxy` image has been updated to `v0.18.0`. [Release Notes](https://redirect.github.com/gardener/apiserver-proxy/releases/tag/v0.18.0) by @gardener-ci-robot [#10933]
- `[DEPENDENCY]` The `registry.k8s.io/coredns/coredns` image has been updated to `v1.12.0`. by @gardener-ci-robot [#10909]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.33.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.33.0) by @gardener-ci-robot [#10996]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.2) by @gardener-ci-robot [#11000]
- `[DEPENDENCY]` The `gardener/gardener-metrics-exporter` image has been updated to `0.31.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.31.0) by @gardener-ci-robot [#10941]
- `[DEPENDENCY]` The `gardener/gardener-metrics-exporter` image has been updated to `0.33.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.33.0) by @gardener-ci-robot [#10952]
- `[DEPENDENCY]` The `gardener/ext-authz-server` image has been updated to `0.11.0`. [Release Notes](https://redirect.github.com/gardener/ext-authz-server/releases/tag/0.11.0) by @gardener-ci-robot [#10935]
- `[DEVELOPER]` The `HVPA` CRD has been removed from the codebase and is no longer generated. by @plkokanov [#10921]
## 📖 Documentation

- `[OPERATOR]` Improve shoot credential rotation documentation. by @marc1404 [#10998]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.0`
