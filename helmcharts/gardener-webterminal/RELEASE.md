# [github.com/gardener/terminal-controller-manager:v0.37.0]

## 🐛 Bug Fixes
- `[USER]` Fix terminal attach against Kubernetes v1.35+ Shoot clusters by granting the `create` verb on `pods/attach` in the attach ServiceAccount's Role, in addition to `get`. Required by the `AuthorizePodWebsocketUpgradeCreatePermission` feature gate (default-on since v1.35). by @petersutter [[#505](https://github.com/gardener/terminal-controller-manager/pull/505)]

## application/spdx+json
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:504a7760a514473831c519315a7fd554ece5924542bb51d6e93e6a5b8524fa68`
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:f21079bddcfff50678cc7d3a7c833998098135c5066b21fec151c04aa90f71bf`
## application/vnd.cyclonedx+json
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:0652e5eb443b68acf628a5a8607e16dfeaa948b648a8464bf3b1c29b1ebcc449`
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:7386bc7782b030565bb5aae32378ff000fb79e2e3f2cf360c170e7f2d4bcfaa8`
## Container (OCI) Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.37.0`
