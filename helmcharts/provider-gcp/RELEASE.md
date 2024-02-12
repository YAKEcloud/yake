# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#675]
## 📰 Noteworthy

- `[OPERATOR]` Tagging the 'default' StorageClass and VolumeSnapshotClass as default can now be disabled. by @AndreasBurger [#687]
- `[USER]` Disks, boot disks, and instances will now share a common label 'k8s-cluster-name' that contains the shoot-ID.  
  Also, user-provided labels will now be added to boot disks as well. by @AndreasBurger [#669]
## ✨ New Features

- `[USER]` The provider-gcp extension does now support shoot clusters with Kubernetes version 1.29. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md) before upgrading to 1.29.  by @acumino [#693]
- `[USER]` `minCpuPlatform` can now be specified for workers to request a minimum CPU platform on GCP. For more information and a list of platform-names see https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. by @AndreasBurger [#667]
## 🏃 Others

- `[OPERATOR]` fix unknown flag  --gardenlet-manages-mcm by @tedteng [#690]
- `[OPERATOR]` Newly provisioned disks by the GCP CSI driver will now have a label `k8s-cluster-name=<shoot-technical-id>`. The label makes possible finding the owning Shoot cluster for a GCP disk. by @ialidzhikov [#660]
- `[OPERATOR]` Update csi-driver to `v1.13.0` by @kon-angelo [#685]
- `[OPERATOR]` Vendor gardener v1.87.1 by @kon-angelo [#694]
- `[OPERATOR]` The code related to `machine-controller-manager` management has been cleaned up because `gardenlet` is responsible for it since `gardener/gardener@v1.83`. by @kon-angelo [#691]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#675]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#675]
- `[DEVELOPER]` Add new unit tests. by @axel7born [#664]
# [gardener/machine-controller-manager]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @ccwienk [gardener/machine-controller-manager#878]
## 🐛 Bug Fixes

- `[DEVELOPER]` MCM restart happens properly in integration tests now. This fix will get activated, once this version is vendored in your mcm-provider by @sssash18 [gardener/machine-controller-manager#879]
- `[DEVELOPER]` A bug in `UpdateNodeToMachine` which cause the IT to fail is fixed. by @gardener-robot-ci-1 [gardener/machine-controller-manager#106]
- `[OPERATOR]` Fix for edge case of Node object deletion missed during machine termination. by @elankath [gardener/machine-controller-manager#887]
## 🏃 Others

- `[OPERATOR]` machine controller won't reconcile machine on non-spec update events by @himanshu-kun [gardener/machine-controller-manager#877]
- `[OPERATOR]` fixed IT for seed with k8s >= 1.27 as control cluster  by @piyuagr [gardener/machine-controller-manager#869]
- `[OPERATOR]` Architecture field added in the nodetemplate. This will allow CA to pickup architecture from machine class and schedule pods on relevant arch nodes. by @sssash18 [gardener/machine-controller-manager#894]
- `[DEVELOPER]` go-git now removed from dependencies due to CVE's. by @elankath [gardener/machine-controller-manager#896]
- `[DEVELOPER]` Bump `k8s.io/*` deps to `v0.28.2` by @afritzler [gardener/machine-controller-manager#858]
## 📖 Documentation

- `[DEVELOPER]` Phase transition diagram for a machine object is added to FAQs by @himanshu-kun [gardener/machine-controller-manager#886]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Terraform alicloud provider is updated to v1.213.0 by @shaoyongfeng [gardener/terraformer#145]
# [gardener/machine-controller-manager-provider-gcp]

## 📰 Noteworthy

- `[DEVELOPER]` The GCPProviderSpec now supports setting `minCpuPlatform` to configure the minimum CPU platform requested for the VM. by @AndreasBurger [gardener/machine-controller-manager-provider-gcp#98]

## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.34.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.34.0`
