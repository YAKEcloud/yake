# [gardener/gardener-extension-provider-aws]

## 📰 Noteworthy

- `[USER]` The kube-system/csi-driver-node DaemonSet is no longer scaled by a VerticalPodAutoscaler as it does not really benefit from it. Removing VerticalPodAutoscaler for that component will reduce unnecessary evictions by VPA and will be a mitigation for https://issues.k8s.io/126921. by @ialidzhikov [#1179]
## ✨ New Features

- `[USER]` Support for VolumeAttributesClasses can now be enabled via shoot annotation. by @AndreasBurger [#1152]
## 🏃 Others

- `[OPERATOR]` In IPv6 and dual stack shoot cluster external load balancers will get the aws dual stack load balancer annotations in order to work properly.  by @DockToFuture [#1160]
- `[OPERATOR]` Add validation of internal-subnet CIDR for IPv6 shoots by @AndreasBurger [#1186]
- `[OPERATOR]` Set `primary-ip-family` flag for `aws-ipam-controller` by @DockToFuture [#1168]
- `[USER]` Shoots with NodeLocalDNS enabled will use UDP instead of TCP for upstream DNS queries by default to avoid performance issues on AWS. by @domdom82 [#1161]
- `[DEPENDENCY]` Update gardener to v1.110.0 by @hebelsan [#1176]
# [gardener/machine-controller-manager-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a panic that occurs while fetching the status of a VM backing a machine from the provider. by @renormalize [gardener/machine-controller-manager-provider-aws#180]
## 🏃 Others

- `[OPERATOR]` Added `gosec` for Static Application Security Testing (SAST). by @thiyyakat [gardener/machine-controller-manager-provider-aws#179]
- `[DEVELOPER]` Updated go lang version to `1.23.3` by @thiyyakat [gardener/machine-controller-manager-provider-aws#179]
- `[DEVELOPER]` The `gardener/machine-controller-manager` dependency has been updated to `v0.55.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.1) by @thiyyakat [gardener/machine-controller-manager-provider-aws#179]
# [gardener/terraformer]

## 🐛 Bug Fixes

- `[DEVELOPER]` Provider `azurerm` was updated to version 3.47.0 and is now properly recognising the `ARM_OIDC_TOKEN_FILE_PATH` env variable. by @dimityrmirchev [gardener/terraformer#156]
## 🏃 Others

- `[OPERATOR]` Update alpine to `v3.21.2` by @kon-angelo [gardener/terraformer#157]
- `[OPERATOR]` Update golang to `v1.23.5` by @kon-angelo [gardener/terraformer#157]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.60.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.60.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.60.0`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.60.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.60.0`
