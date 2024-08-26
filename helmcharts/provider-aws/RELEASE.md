# [gardener/gardener-extension-provider-aws]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#1012]
## 🐛 Bug Fixes

- `[OPERATOR]` Removed unnecessary preStop hook from `node-driver-registrar` in `csi-driver-node`, as socket removal is now handled internally by `node-driver-registrar`, resolving distroless image error. by @AndreasBurger [#992]
## 🏃 Others

- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-aws` Helm chart. by @timuthy [#994]
- `[OPERATOR]` Starting with gardenlet >= v1.98.0, use controlplane webhook object selector to limit mutator calls. by @LucaBernstein [#989]
- `[OPERATOR]` Update the VPA CRD used for testing locally by @kon-angelo [#1019]
- `[OPERATOR]` Inserts `architecture` from worker to the machine class by @sssash18 [#853]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.57.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.57.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.57.0`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.57.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.57.0`
