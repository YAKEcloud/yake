# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` `kubeletCSRApprover` controller in `gardener-resource-manager` Helm chart has been renamed to `csrApprover`. by @oliver-goetz [#10549]
- `[OPERATOR]` The `HVPA` and `HVPAForShootedSeed` feature gates have been deprecated and locked to false. Disable the `HVPA` and `HVPAForShootedSeed` feature gates if you have them enabled before upgrading to this version of Gardener. by @plkokanov [#10659]
## 📰 Noteworthy

- `[USER]` For Kubernetes 1.31+ Shoot clusters, the kubelet and containerd cgroup driver is set to `systemd`. Previously, the used cgroup driver was `cgroupfs`. Find more details in the [cgroup driver section](https://github.com/gardener/gardener/blob/v1.105.0/docs/extensions/operatingsystemconfig.md#cgroup-driver). by @ialidzhikov [#10472]
- `[OPERATOR]` The gardener operator chart (`charts/gardener/operator`) does no longer enable the `HVPA` feature gate in its default `values.yaml`. by @ialidzhikov [#10566]
## ✨ New Features

- `[DEVELOPER]` Allow gosec to be consumed from gardener/gardener by @ScheererJ [#10642]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.31. Extension developers have to prepare individual extensions as well to work with 1.31. by @ialidzhikov [#10472]
- `[OPERATOR]` Adds `CloudProfile` validation for the recently introduced `.spec.bastion` section. by @hebelsan [#10318]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.31. To allow creation/update of 1.31 clusters you will have to update the version of your provider extension(s) to a version that supports 1.31 as well. Please consult the respective releases and notes in the provider extension's repository. by @ialidzhikov [#10472]
- `[OPERATOR]` Added an alert for the `Garden` resource's conditions, along with a dashboard that also displays the resource's last operation. by @rickardsjp [#10562]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixes an issue with the network metrics relabeling config that caused the `Node Details` dashboard to not display data for AWS nodes. by @rickardsjp [#10625]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.3`. by @gardener-ci-robot [#10626]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.28.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.28.0) by @gardener-ci-robot [#10640]
- `[DEPENDENCY]` The `quay.io/cortexproject/cortex` image has been updated to `v1.18.1`. by @gardener-ci-robot [#10657]
- `[DEPENDENCY]` The `registry.k8s.io/node-problem-detector/node-problem-detector` image has been updated to `v0.8.20`. by @gardener-ci-robot [#10661]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.0) by @gardener-ci-robot [#10656]
- `[OPERATOR]` HA-VPN works if seed and shoot have different IPFamilies. by @DockToFuture [#10622]
- `[OPERATOR]` Update istio to version 1.23.2 by @axel7born [#10558]
- `[OPERATOR]` [NewVPN] Enable IPv6 for HA if needed. by @MartinWeindel [#10641]
- `[OPERATOR]` Gardener generated certificates are valid 1 minute before issuance to handle some amount of clock skew. by @ScheererJ [#10603]
- `[OPERATOR]` Metrics for `vpa-recommender`s are now collected in separate prometheus instances depending on where the `vpa-recommender` pods are deployed. Metrics for the `vpa-recommender` in the `garden` namespace are collected in `prometheus-seed`. Metrics for the `vpa-recommender` in the shoot control plane namespaces are collected in the corresponding `prometheus-shoot`. Additionally, the `VPA Recommender` plutono dashboard is separately deployed for seeds in the `garden` namespace and shoots in their control plane namespaces. by @plkokanov [#10517]
- `[OPERATOR]` Clean up migration code from the monitoring component by @vicwicker [#10597]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.8` -> `v0.31.0`  
  - `sigs.k8s.io/controller-runtime`: `v0.17.5` -> `v0.19.0` by @ary1992 [#10459]
- `[DEVELOPER]` The HVPA features gates (`HVPA` and `HVPAForShootedSeed`) are no longer enabled in local setups. by @ialidzhikov [#10566]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.0`
