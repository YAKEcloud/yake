# [github.com/gardener/gardener-extension-provider-alicloud:v1.67.0]

## ✨ New Features
- `[OPERATOR]` The `Worker` controller is prepared to support self-hosted shoot clusters with managed infrastructure (see [GEP-28](https://github.com/gardener/gardener/blob/master/docs/proposals/28-self-hosted-shoot-clusters.md#managed-infrastructure)). by @timebertt [[#853](https://github.com/gardener/gardener-extension-provider-alicloud/pull/853)]
- `[USER]` The provider-alicloud extension does now support shoot clusters with Kubernetes version 1.34. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) before upgrading to 1.34. by @tobschli [[#856](https://github.com/gardener/gardener-extension-provider-alicloud/pull/856)]

## 🏃 Others
- `[OPERATOR]` Update the deletion process of Natgateway in Flow-Base by @kevin-lacoo [[#858](https://github.com/gardener/gardener-extension-provider-alicloud/pull/858)]
- `[OPERATOR]` Update golang to 1.25 by @kevin-lacoo [[#852](https://github.com/gardener/gardener-extension-provider-alicloud/pull/852)]
- `[OPERATOR]` Update gardener/gardener to v1.127.1 by @kevin-lacoo [[#857](https://github.com/gardener/gardener-extension-provider-alicloud/pull/857)]
- `[OPERATOR]` Avoid duplicate creation of Natgateway by @kevin-lacoo [[#847](https://github.com/gardener/gardener-extension-provider-alicloud/pull/847)]
- `[OPERATOR]` Update gardener/gardener to v1.125.1 by @kevin-lacoo [[#849](https://github.com/gardener/gardener-extension-provider-alicloud/pull/849)]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.67.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.67.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.67.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.67.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.67.0`
