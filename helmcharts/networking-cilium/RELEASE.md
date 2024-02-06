# [gardener/gardener-extension-networking-cilium]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#234]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#231]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixes an error that occurs when running with iptables-nft. by @axel7born [#229]
- `[OPERATOR]` The `actuator.Delete` doesn't wait for ManagedResources to get deleted in case of `ForceDelete`. by @shafeeqes [#227]
- `[OPERATOR]` An issue in the charts missing versions for some resources is now fixed. by @shafeeqes [#225]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#234]
- `[OPERATOR]` Update cilium to `v1.14.6` by @DockToFuture [#239]
- `[OPERATOR]` Reconciliation of hibernated cilium clusters now works again. by @ScheererJ [#226]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#234]
- `[OPERATOR]` Update cilium to `v1.14.5`. by @DockToFuture [#235]
- `[OPERATOR]` Update cilium to `v1.14.4`. by @DockToFuture [#230]

## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.32.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.32.0`
