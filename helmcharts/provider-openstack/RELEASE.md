# [gardener/gardener-extension-provider-openstack]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#704]
- `[OPERATOR]` If operators specified machine image versions in their `CloudProfile` specific to the `arm64` architecture, they should migrate to an architecture-based mapping in the `CloudProfileConfig`. by @timebertt [#690]
## ✨ New Features

- `[OPERATOR]` The `CloudProfileConfig` allows specifying machine image mappings by architecture. With this, the OpenStack extension can support `arm64` machine types. by @timebertt [#690]
- `[USER]` The provider-openstack extension does now support shoot clusters with Kubernetes version 1.29. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md) before upgrading to 1.29.  by @acumino [#712]
## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#704]
- `[DEPENDENCY]` Vendor gardener/gardener =>  `v1.83.3` by @kon-angelo [#697]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#704]
- `[DEVELOPER]` The code related to `machine-controller-manager` management has been cleaned up because `gardenlet` is responsible for it since `gardener/gardener@v1.83`. by @AndreasBurger [#711]
# [gardener/terraformer]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/terraformer#143]
## 🏃 Others

- `[OPERATOR]` Terraform alicloud provider is updated to v1.213.0 by @shaoyongfeng [gardener/terraformer#145]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[DEVELOPER]` MCM restart happens properly in integration tests now. This fix will get activated, once this version is vendored in your mcm-provider by @sssash18 [gardener/machine-controller-manager#879]
- `[OPERATOR]` Fix for edge case of Node object deletion missed during machine termination. by @elankath [gardener/machine-controller-manager#887]
## 🏃 Others

- `[DEVELOPER]` Bump `k8s.io/*` deps to `v0.28.2` by @afritzler [gardener/machine-controller-manager#858]
- `[OPERATOR]` fixed IT for seed with k8s >= 1.27 as control cluster  by @piyuagr [gardener/machine-controller-manager#869]
- `[OPERATOR]` machine controller won't reconcile machine on non-spec update events by @himanshu-kun [gardener/machine-controller-manager#877]
## 📖 Documentation

- `[DEVELOPER]` Phase transition diagram for a machine object is added to FAQs by @himanshu-kun [gardener/machine-controller-manager#886]

## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.39.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.39.0`
