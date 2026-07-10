# [github.com/gardener/gardener-extension-provider-alicloud:v1.72.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Bump machine-controller-manager dependency from v0.62.0->v.62.1 and image vector for machine-controller-manager-provider-alicloud from `v0.15.0 → v0.15.1`. by @thiyyakat [[#918](https://github.com/gardener/gardener-extension-provider-alicloud/pull/918)]

## 🏃 Others
- `[OPERATOR]` Fix `NamespacedCloudProfile` admission to populate `capabilityFlavors` on spec machine images and allow expirationDate-only overrides of parent versions without requiring a providerConfig entry. by @kevin-lacoo [[#911](https://github.com/gardener/gardener-extension-provider-alicloud/pull/911)]
- `[OPERATOR]` When new zones are added to an existing BYO-VPC Shoot, the admission webhook validates CIDR conflicts against existing VSwitches. by @kevin-lacoo [[#913](https://github.com/gardener/gardener-extension-provider-alicloud/pull/913)]
- `[DEPENDENCY]` Bumped Gardener dependency to v1.143.1, including module split migration. Bumped MCM dependency to v0.62.0 by @thiyyakat [[#907](https://github.com/gardener/gardener-extension-provider-alicloud/pull/907)]

## application/spdx+json
- gardener-extension-admission-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:2d1801ed532e18caac303cf2bae0be8a035158e1ffd36e8ed9819f70f7929ce7`
- gardener-extension-admission-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:3b5788a0a752d319d813009c1f4c79ef307352d6f116fdc103d8ad19574575da`
- gardener-extension-provider-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:2aff6e7abf901946ae5190fd00eb77cce4063fc2a28208c3681307d9d35d0ad9`
- gardener-extension-provider-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:f7c81ffd4c6690587f2315ab0595639829dd806a811d871815a5a697177ccc6d`
## application/vnd.cyclonedx+json
- gardener-extension-admission-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:33ed9fff578f6806c423a7bb442f46c4b85d8e252ecb27faeff4bbebb5eea74d`
- gardener-extension-admission-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:bedf429a6981ed3bb5ea07ee9188f6c4e83e95cb0fa2227bf2119af2cc6400e9`
- gardener-extension-provider-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:1dde6e30aef0b9163b14e6307804538389bc9f26549730066e4ced4c1e255d13`
- gardener-extension-provider-alicloud-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:4c8fb12359da08a01e6c91aaf97fa12b1ee3b2bfbef23fd2209d608fa314f0a4`
## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.72.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.72.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.72.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.72.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.72.0`
