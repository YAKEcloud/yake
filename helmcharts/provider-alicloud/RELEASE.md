# [github.com/gardener/gardener-extension-provider-alicloud:v1.68.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Following the renaming based on [gardener/gardener#13273](https://github.com/gardener/gardener/pull/13273), **autonomous shoot cluster** was renamed to **self-hosted shoot cluster**. This leads to e.g. a change of the `/gardener-extension-provider-alicloud`'s cli argument `--autonomous-shoot-cluster` to change to `--self-hosted-shoot-cluster` and the respective helm chart's variable `.Values.gardener.autonomousShootCluster` to change to `.Values.gardener.selfHostedShootCluster`. by @marc1404 [[#859](https://github.com/gardener/gardener-extension-provider-alicloud/pull/859)]
- `[OPERATOR]` `provider-alicloud` no longer supports Shoots with Кubernetes version <= 1.29. by @marc1404 [[#859](https://github.com/gardener/gardener-extension-provider-alicloud/pull/859)]

## 🏃 Others
- `[OPERATOR]` out put error info during infra config validate by @kevin-lacoo [[#862](https://github.com/gardener/gardener-extension-provider-alicloud/pull/862)]
- `[OPERATOR]` Update following images version: alicloud-controller-manager to v2.12.4, csi-plugin-alicloud to v1.34.3, csi-attacher to v4.10.0, csi-node-driver-registrar to v2.15.0, csi-provisioner to v5.3.0, csi-snapshotter to v8.4.0, csi-snapshot-controller to v8.4.0, csi-resizer tov1.14.0, csi-liveness-probe to v2.17.0 by @kevin-lacoo [[#863](https://github.com/gardener/gardener-extension-provider-alicloud/pull/863)]
- `[DEPENDENCY]` Updated dependency `gardener/gardener` to `v1.134.0` ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.0)). by @marc1404 [[#859](https://github.com/gardener/gardener-extension-provider-alicloud/pull/859)]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.68.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.68.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.68.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.68.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.68.0`
