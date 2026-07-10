# [github.com/gardener/gardener-extension-provider-aws:v1.72.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Update image vector for machine-controller-manager-provider-aws from `v0.28.0 → v0.28.1`. by @thiyyakat [[#1868](https://github.com/gardener/gardener-extension-provider-aws/pull/1868)]
- `[OPERATOR]` Fix admission validator rejecting new arm64 worker pools added to existing shoots when the CloudProfile defines no `capabilityDefinitions`. by @Roncossek [[#1846](https://github.com/gardener/gardener-extension-provider-aws/pull/1846)]

## 🏃 Others
- `[OPERATOR]` Update images to `alpine:3.24.1`  and `pause:3.10.2` by @matthias-horne [[#1872](https://github.com/gardener/gardener-extension-provider-aws/pull/1872)]
- `[OPERATOR]` Update `aws-custom-route-controller` image tag to `v0.17.0`. by @MartinWeindel [[#1869](https://github.com/gardener/gardener-extension-provider-aws/pull/1869)]
- `[OPERATOR]` Migrate test mock clients to fakeclient following https://github.com/gardener/gardener/pull/14799 by @hebelsan [[#1853](https://github.com/gardener/gardener-extension-provider-aws/pull/1853)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-resizer: v2.2.0 -> v2.2.1 (singleton) by @federated-github-access[bot] [[#1874](https://github.com/gardener/gardener-extension-provider-aws/pull/1874)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-ipam-controller: v0.10.0 -> v0.11.0 (singleton)  
    - cloud-controller-manager: v1.32.5 -> v1.32.8 (patch)  
    - cloud-controller-manager: v1.33.2 -> v1.33.4 (patch)  
    - cloud-controller-manager: v1.34.0 -> v1.34.3 (patch)  
    - cloud-controller-manager: v1.35.0 -> v1.35.2 (patch)  
    - csi-driver: v1.61.1 -> v1.62.0 (singleton)  
    - csi-driver-efs: v3.2.0 -> v3.3.0 (singleton)  
    - csi-provisioner: v6.2.0 -> v6.3.0 (singleton)  
    - csi-resizer: v2.1.0 -> v2.2.0 (singleton)  
    - csi-snapshot-controller: v8.5.0 -> v8.6.0 (singleton)  
    - csi-snapshotter: v8.5.0 -> v8.6.0 (singleton) by @federated-github-access[bot] [[#1840](https://github.com/gardener/gardener-extension-provider-aws/pull/1840)]

## application/spdx+json
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:751beaa187cfc9cb0710b0be916f374221ec78cfed8c63ba19f3b860315738ce`
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:8e387a7c7e0a80e3448fd309a1084dc53a8deca570ea6465c643030a39bb57c3`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:7b8ed38c1845f00fb7e9dc5bd05275b2b746ca67bd3c11cd5f26d31f3966d041`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:bb13663ee25fd090a6051515331295933f10f13e55234cebf1512d18ab388b92`
## application/vnd.cyclonedx+json
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:7a0c67e301d2bd1f900014a124d9be84187705b6a7a6a2c1228cd2573896f2a3`
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:dca0174c0c566b5eec9f719eb9e9907f079767286988f2b0ca76ecd41a2f585d`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:9cc78f8f6a6f97d087da4ea33af62f5f84ff0d4f477b9ec8d2d330732c081aa3`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:b1970aef3ae40ef9c2415b1f11aa87fb52e8c66d24546eeae1dc9d64fe845e8f`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.72.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.72.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.72.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.72.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.72.0`
