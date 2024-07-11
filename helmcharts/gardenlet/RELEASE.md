# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Merge the CoreDNS and Node Local DNS dashboards into a single improved DNS dashboard by @vicwicker [#10034]
## 🏃 Others

- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/kubernetesui/metrics-scraper` image has been updated to `v1.0.9`. by @gardener-ci-robot [#10055]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.53.1`. by @gardener-ci-robot [#10104]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.17`. [Release Notes](https://togithub.com/credativ/vali/releases/tag/v2.2.17) by @gardener-ci-robot [#10069]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.53.0`. by @gardener-ci-robot [#10002]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.30.4`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.30.4) by @gardener-ci-robot [#10048]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/kubernetesui/dashboard` image has been updated to `v2.7.0`. by @gardener-ci-robot [#10057]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/alpine` image has been updated to `3.19.2`. by @gardener-ci-robot [#10054]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.4`. by @gardener-ci-robot [#10043]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.10.2`. by @gardener-ci-robot [#10084]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.0`. by @gardener-ci-robot [#10089]
- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.32`. [Release Notes](https://togithub.com/credativ/plutono/releases/tag/v7.5.32) by @gardener-ci-robot [#10074]
- `[OPERATOR]` [OPERATOR] Optional deployment of cert-management component by @MartinWeindel [#9957]
- `[OPERATOR]` Adds the garden_seed_info metric to the longterm prometheus scrape config by @dmahmalat-sap [#10016]
- `[OPERATOR]` Gardener logging stack now features fluent-bit v3. by @nickytd [#10064]
- `[OPERATOR]` Infrastructure extensions can now propagate networking ranges (nodes, pods & services) to the shoot status. by @ScheererJ [#9998]
- `[USER]` Erroneous warnings for incomplete shoots credentials rotation has been fixed. by @oliver-goetz [#10059]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.0`
