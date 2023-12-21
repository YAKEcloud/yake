# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#762]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug which caused an empty `vmType` under certain conditions has been fixed. Empty `vmType`s prevent load balancers from being deleted on Kubernetes v1.28 shoots. by @oliver-goetz [#754]
## 🏃 Others

- `[DEVELOPER]` Add new unit tests. by @axel7born [#751]
- `[OPERATOR]` Updated azurecsi-file image -> `v1.29.2` by @kon-angelo [#760]
- `[OPERATOR]` Set azurefile-csi CSIDriver object to support ephemeral disks. by @kon-angelo [#756]
- `[OPERATOR]` Add new flow-based infrastructure reconciler. by @kon-angelo [#739]
- `[OPERATOR]` Set azurefile-csi CSIDriver object with `attachRequired` to false. by @kon-angelo [#756]
- `[DEPENDENCY]` Vendor gardener `v1.83.3` by @kon-angelo [#764]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.40.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.40.0`
