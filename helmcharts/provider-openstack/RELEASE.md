# [gardener/gardener-extension-provider-openstack]

## ⚠️ Breaking Changes

- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-admission-openstack admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#901]
## ✨ New Features

- `[OPERATOR]` Adjustments for additional deployment of extension and admission controller on Garden runtime cluster by gardener-operator. by @MartinWeindel [#901]
## 🐛 Bug Fixes

- `[OPERATOR]` management of the router interface missed some of openstack's owner labels assigned to the routers network interface causing the infrastructure conciliation to fail due to dublicated router network interfaces by @crigertg [#917]
## 🏃 Others

- `[OPERATOR]` Update Cinder CSI `v1.30.1` -> `v1.31.2` for shoots on v1.31.x by @kon-angelo [#915]
- `[OPERATOR]` Add `NamespacedCloudProfile` admission mutation and validation to support custom machine images and types. by @LucaBernstein [#911]
- `[OPERATOR]` Update Cinder CSI `v1.30.1` -> `v1.30.2` for shoots on v1.30.x by @kon-angelo [#915]
- `[USER]` Shoots with NodeLocalDNS enabled will use UDP instead of TCP for upstream DNS queries by default to avoid performance issues on OpenStack. by @domdom82 [#925]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.44.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.44.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.44.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.44.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.44.0`
