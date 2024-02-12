# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Terraform alicloud provider is updated to v1.213.0 by @shaoyongfeng [gardener/terraformer#145]
# [gardener/machine-controller-manager-provider-azure]

## 🐛 Bug Fixes

- `[OPERATOR]` Disk detachment step is skipped while terminating terminal state vms. Terminal state vms have `provisioningState` as `Failed` by @himanshu-kun [gardener/machine-controller-manager-provider-azure#120]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @elankath [gardener/machine-controller-manager#866]
- `[OPERATOR]` Fix for edge case of Node object deletion missed during machine termination. by @elankath [gardener/machine-controller-manager#887]
- `[DEVELOPER]` MCM restart happens properly in integration tests now. This fix will get activated, once this version is vendored in your mcm-provider by @sssash18 [gardener/machine-controller-manager#879]
## 🏃 Others

- `[DEVELOPER]` Bump `k8s.io/*` deps to `v0.28.2` by @afritzler [gardener/machine-controller-manager#858]
- `[DEVELOPER]` go-git now removed from dependencies due to CVE's. by @elankath [gardener/machine-controller-manager#896]
- `[OPERATOR]` Architecture field added in the nodetemplate. This will allow CA to pickup architecture from machine class and schedule pods on relevant arch nodes. by @sssash18 [gardener/machine-controller-manager#894]
- `[OPERATOR]` machine controller won't reconcile machine on non-spec update events by @himanshu-kun [gardener/machine-controller-manager#877]
- `[OPERATOR]` fixed IT for seed with k8s >= 1.27 as control cluster  by @piyuagr [gardener/machine-controller-manager#869]
- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @elankath [gardener/machine-controller-manager#866]
## 📖 Documentation

- `[DEVELOPER]` Phase transition diagram for a machine object is added to FAQs by @himanshu-kun [gardener/machine-controller-manager#886]
# [gardener/remedy-controller]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/remedy-controller#61]
## 🐛 Bug Fixes

- `[OPERATOR]` Disable unused health bind address by @MartinWeindel [gardener/remedy-controller#56]
## 🏃 Others

- `[OPERATOR]` Moved integration test to internal CI because of security constraints by @MartinWeindel [gardener/remedy-controller#57]
- `[OPERATOR]` Update go version to v1.21 by @kon-angelo [gardener/remedy-controller#62]
# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#774]
## ✨ New Features

- `[USER]` The provider-azure extension does now support shoot clusters with Kubernetes version 1.29. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md) before upgrading to 1.29.  by @acumino [#785]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#774]
- `[OPERATOR]` The code related to `machine-controller-manager` management has been cleaned up because `gardenlet` is responsible for it since `gardener/gardener@v1.83`. by @kon-angelo [#783]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#774]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.41.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.41.0`
