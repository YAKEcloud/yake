# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#844]
## ✨ New Features

- `[USER]` dual-stack ingress with bring-your-own VPC is supported. by @axel7born [#834]
- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.29. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md) before upgrading to 1.29.  by @acumino [#873]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#844]
- `[DEVELOPER]` The code related to `machine-controller-manager` management has been cleaned up because `gardenlet` is responsible for it since `gardener/gardener@v1.83`. by @AndreasBurger [#872]
- `[DEVELOPER]` Add new unit tests. by @axel7born [#829]
- `[OPERATOR]` provider-aws will calculate a shoot's Egress CIDRs on infrastructure reconciliation.  by @kon-angelo [#862]
- `[OPERATOR]` Add documentation for the "flow" infrastructure reconciler. by @kon-angelo [#827]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.85.1. by @timuthy [#844]
- `[OPERATOR]` Remove `aws-lb-readvertiser` component from provider-aws. by @kon-angelo [#840]
- `[OPERATOR]` The following dependency is updated to adopt a cherry-pick of https://github.com/gardener/gardener/pull/8943:  
  - github.com/gardener/gardener: v1.83.2 -> v1.83.3 by @ialidzhikov [#842]
- `[OPERATOR]` Bump aws-custom-route-controller from `v0.7.0` to `v0.8.0` by @MartinWeindel [#848]
- `[OPERATOR]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.81.6`->`v1.83.2` by @shafeeqes [#828]
- `[DEPENDENCY]` Updated mtu-customizer base image to `alpine:3.19.0` by @kon-angelo [#839]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix for edge case of Node object deletion missed during machine termination. by @elankath [gardener/machine-controller-manager#887]
- `[DEVELOPER]` MCM restart happens properly in integration tests now. This fix will get activated, once this version is vendored in your mcm-provider by @sssash18 [gardener/machine-controller-manager#879]
## 🏃 Others

- `[DEVELOPER]` Bump `k8s.io/*` deps to `v0.28.2` by @afritzler [gardener/machine-controller-manager#858]
- `[OPERATOR]` machine controller won't reconcile machine on non-spec update events by @himanshu-kun [gardener/machine-controller-manager#877]
- `[OPERATOR]` fixed IT for seed with k8s >= 1.27 as control cluster  by @piyuagr [gardener/machine-controller-manager#869]
## 📖 Documentation

- `[DEVELOPER]` Phase transition diagram for a machine object is added to FAQs by @himanshu-kun [gardener/machine-controller-manager#886]
# [gardener/terraformer]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/terraformer#143]
## 🏃 Others

- `[OPERATOR]` Terraform alicloud provider is updated to v1.213.0 by @shaoyongfeng [gardener/terraformer#145]

## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.52.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.52.0`
