# [github.com/gardener/gardener-extension-registry-cache:v0.18.0]

## ⚠️ Breaking Changes
- `[USER]` Registry cache Pods are no longer reachable using Pod DNS - `$(podname).$(governing service domain)`, for example `registry-docker-io-0.registry-docker-io.kube-system.svc.cluster.local`. by @dimitar-kostadinov [[#455](https://github.com/gardener/gardener-extension-registry-cache/pull/455)]

## ✨ New Features
- `[USER]` The registry-cache service name can now be customized with the `serviceNameSuffix` option. by @Wieneo [[#425](https://github.com/gardener/gardener-extension-registry-cache/pull/425)]
- `[USER]` The registry-cache extension does now support shoot clusters with Kubernetes version 1.33. by @ialidzhikov [[#437](https://github.com/gardener/gardener-extension-registry-cache/pull/437)]

## 🐛 Bug Fixes
- `[OPERATOR]` The `Endpoints` role in monitoring `ScrapeConfig` has been fixed. by @oliver-goetz [[#459](https://github.com/gardener/gardener-extension-registry-cache/pull/459)]

## 🏃 Others
- `[DEVELOPER]` The golang version is updated to 1.25. by @dependabot[bot] [[#456](https://github.com/gardener/gardener-extension-registry-cache/pull/456)]
- `[OPERATOR]` The `spec.serviceName` field has been removed from the registry cache StatefulSet. All registry cache StatefulSets will be recreated once due to this change. by @dimitar-kostadinov [[#455](https://github.com/gardener/gardener-extension-registry-cache/pull/455)]
- `[DEVELOPER]` The Concourse CI/CD pipeline has been migrated to GitHub Actions. by @ccwienk [[#420](https://github.com/gardener/gardener-extension-registry-cache/pull/420)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-registry-cache/blob/v0.18.0/example/extension.yaml). by @timuthy [[#448](https://github.com/gardener/gardener-extension-registry-cache/pull/448)]

## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.18.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.18.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.18.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.18.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.18.0`
