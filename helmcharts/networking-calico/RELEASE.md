# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#321]
- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#327]
## ✨ New Features

- `[DEVELOPER]` add ipv6 support for this extension by @nschad [#301]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#327]
- `[OPERATOR]` Update calico to `v3.26.4`. by @DockToFuture [#320]
- `[OPERATOR]` Determine iptables backend in container add-snat-rule-to-upstream-dns. by @axel7born [#324]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#327]
- `[OPERATOR]` Update calico to `v3.27.0`. by @DockToFuture [#329]

## Docker Images
- gardener-extension-admission-calico-linux-amd64: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.38.0`
- gardener-extension-networking-calico-linux-amd64: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.38.0`
