# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[USER]` VMSS-Flex based shoots are not the default deployment for non-zonal shoots. by @kon-angelo [#1025]
- `[USER]` Disable the creation of Availability-Set-based shoots. by @kon-angelo [#1025]
- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-admission-azure admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#1030]
## 📰 Noteworthy

- `[USER]` The kube-system/csi-driver-node-disk and kube-system/csi-driver-node-file DaemonSet are no longer scaled by a VerticalPodAutoscaler as they do not really benefit from it. Removing VerticalPodAutoscaler for these components will reduce unnecessary evictions by VPA and will be a mitigation for https://issues.k8s.io/126921. by @ialidzhikov [#1046]
## ✨ New Features

- `[USER]` Introduce an annotation to migrate the availability-set shoots to VMSS-Flex shoots. by @kon-angelo [#1025]
- `[OPERATOR]` Adjustments for additional deployment of extension and admission controller on Garden runtime cluster by gardener-operator. by @MartinWeindel [#1030]
## 🏃 Others

- `[OPERATOR]` Fix an issue where the provider-extension would delete a route table because of a location mismatch by @kon-angelo [#1068]
- `[OPERATOR]` Fixed an issue that prevented the `Infrastructure` resource to be correctly restored during control plane migration, if the `Infrastructure` was previously migrated from a single subnet network layout to a multiple subnet network layout. by @plkokanov [#907]
- `[OPERATOR]` Validate that all images in cloudProfile are valid images in the cloudProfileConfig  by @hebelsan [#1020]
- `[USER]` Shoots with NodeLocalDNS enabled will use UDP instead of TCP for upstream DNS queries by default to avoid performance issues on Azure. by @domdom82 [#1032]
- `[USER]` Update CSI images  by @AndreasBurger [#1063]
- `[DEPENDENCY]` Update gardener to v1.110.0 by @hebelsan [#1044]
# [gardener/machine-controller-manager-provider-azure]

## 🏃 Others

- `[DEVELOPER]` The `gardener/machine-controller-manager` dependency has been updated to `v0.55.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.1) by @thiyyakat [gardener/machine-controller-manager-provider-azure#169]
- `[DEVELOPER]` Added `gosec` for Static Application Security Testing (SAST). by @thiyyakat [gardener/machine-controller-manager-provider-azure#169]
- `[DEVELOPER]` Updated go lang version to 1.23 by @thiyyakat [gardener/machine-controller-manager-provider-azure#169]
- `[USER]` It is now possible to use a workload identity token instead of a client secret when authenticating to Azure. The path to the file containing the federated token can be configured via the "workloadIdentityTokenFile" field in the secret config. by @dimityrmirchev [gardener/machine-controller-manager-provider-azure#167]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.50.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.50.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.50.0`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.50.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.50.0`
