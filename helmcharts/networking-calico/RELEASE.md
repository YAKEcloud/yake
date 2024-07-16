# [gardener/gardener-extension-networking-calico]

## 🏃 Others

- `[OPERATOR]` This extension is now using the new way of providing monitoring configuration (ref [GEP-19](https://github.com/gardener/gardener/blob/master/docs/proposals/19-migrating-observability-stack-to-operators.md)) in case a shoot cluster's Prometheus has been migrated to management via `prometheus-operator`. by @rfranzke [#394]
- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-calico` Helm chart. by @timuthy [#437]
- `[OPERATOR]` Downgraded calico-cni container to v3.27.0 to prevent cni copy failures. by @ScheererJ [#404]
- `[OPERATOR]` allow users to enable node to node wireguard encryption by @hown3d [#381]
- `[OPERATOR]` Enable automatic MTU detection as default. by @axel7born [#387]
- `[OPERATOR]` Update calico to `v3.27.4`. by @DockToFuture [#440]

## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.40.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.40.0`
