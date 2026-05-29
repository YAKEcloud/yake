# [github.com/gardener/gardener-extension-provider-alicloud:v1.71.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#899](https://github.com/gardener/gardener-extension-provider-alicloud/pull/899)]

## 🏃 Others
- `[OPERATOR]` Update alicloud-controller-manage image version to v2.14.0 by @kevin-lacoo [[#904](https://github.com/gardener/gardener-extension-provider-alicloud/pull/904)]
- `[OPERATOR]` [DNSRecord controller] Filter `RR` exactly on retrieving records by domain name to prevent updating unintended records in edge cases. by @MartinWeindel [[#906](https://github.com/gardener/gardener-extension-provider-alicloud/pull/906)]
- `[OPERATOR]` Infrastructure custom route table support can be enabled via `spec.provider.infrastructureConfig.networks.vpc.useCustomRouteTable: true` in the shoot.yaml. by @kevin-lacoo [[#901](https://github.com/gardener/gardener-extension-provider-alicloud/pull/901)]
- `[OPERATOR]` Infrastructure dualstack support can be enabled via `spec.provider.infrastructureConfig.dualStack.enabled: true` in the shoot.yaml. by @kevin-lacoo [[#901](https://github.com/gardener/gardener-extension-provider-alicloud/pull/901)]

## application/spdx+json
- gardener-extension-admission-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:4546744763280f03ad6516f62689c171cd83a7c419023362b61c62563b64db2e`
- gardener-extension-admission-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud@sha256:7373111761bafae6851a84fdb0201b5cbd9220a5fc1f74f66548999aef15ce6a`
- gardener-extension-provider-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:bf3c87048d819410e465120ec734ba98876f47ba00e8ee2140a6f55d655d2fc3`
- gardener-extension-provider-alicloud-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud@sha256:cf31b84a4b5386fa9a25978f47adb68e259f824453a22f878e56ffed6cdca270`
## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.71.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.71.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.71.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.71.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.71.0`
