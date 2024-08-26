# [gardener/gardener-extension-provider-gcp]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#805]
## 🐛 Bug Fixes

- `[OPERATOR]` Removed unnecessary preStop hook from `node-driver-registrar` in `csi-driver-node`, as socket removal is now handled internally by `node-driver-registrar`, resolving distroless image error. by @sujeet01 [#792]
- `[USER]` Allow configuring iops and throughput of hyperdisk-balanced disks by @hebelsan [#793]
## 🏃 Others

- `[OPERATOR]` Inserts architecture from worker to the machine class by @sssash18 [#809]
- `[OPERATOR]` Starting with gardenlet >= v1.98.0, use controlplane webhook object selector to limit mutator calls. by @LucaBernstein [#789]
- `[OPERATOR]` Update the VPA CRD used for testing locally by @hebelsan [#812]
- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-gcp` Helm chart. by @timuthy [#794]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.38.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.38.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.38.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.38.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.38.0`
