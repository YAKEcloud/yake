# [gardener/gardener-extension-provider-alicloud]

## 🏃 Others

- `[OPERATOR]` Starting with gardenlet >= v1.98.0, use controlplane webhook object selector to limit mutator calls. by @LucaBernstein [#731]
- `[OPERATOR]` The shoot-webhook does no longer mutate the metrics-server Deployment and the vpn-shoot Service. The shoot-webhook that now only mutates the `addons-nginx-ingress-controller` Service does now specify object selector. by @ialidzhikov [#730]
- `[OPERATOR]` Upgrade and adapt new `WorkerPoolHash` function in Gardener `v1.98`. by @Duciwuci [#736]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.54.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.54.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.54.0`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.54.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.54.0`
