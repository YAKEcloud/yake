# [github.com/gardener/gardener-extension-os-coreos:v1.33.0]

## 🏃 Others
- `[OPERATOR]` The update mode of the VerticalPodAutoscaler resource, deployed by  gardener-extension-os-coreos, is now explicitly set to `InPlaceOrRecreate`, reflecting the actual runtime behavior after the unconditional enablement of the `VPAInPlaceUpdates` feature gate. by @Velin-Todorov [[#298](https://github.com/gardener/gardener-extension-os-coreos/pull/298)]
- `[OPERATOR]` Turns `update-engine.service` and `locksmithd.service` into no-ops on existing worker nodes via an `ExecStart` drop-in. by @cerealsnow [[#300](https://github.com/gardener/gardener-extension-os-coreos/pull/300)]

## application/spdx+json
- gardener-extension-os-coreos-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos@sha256:7697a514318bc147c2bc4537772cd1c3abe2dc0e466a233f709198ae47f6b399`
## application/vnd.cyclonedx+json
- gardener-extension-os-coreos-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos@sha256:3ee59212c39f31e7c797241ae83ee4bde26afdb310d747f93c82bdde63d675ef`
## Helm Charts
- os-coreos: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-coreos:v1.33.0`
## Container (OCI) Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.33.0`
