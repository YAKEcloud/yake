# [github.com/gardener/gardener-extension-provider-gcp:v1.48.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Following the renaming based on [PR13273](https://github.com/gardener/gardener/pull/13273), **autonomous shoot cluster** was renamed to **self hosted shoot cluster**. This leads to e.g. a change of the `/gardener-extension-provider-gcp`'s cli argument `--autonomous-shoot-cluster` to change to `--self-hosted-shoot-cluster` and the respective helm chart's variable `.Values.gardener.autonomousShootCluster` to change to `.Values.gardener.selfHostedShootCluster`. by @tobschli [[#1236](https://github.com/gardener/gardener-extension-provider-gcp/pull/1236)]

## ✨ New Features
- `[OPERATOR]` The `Worker` controller is prepared to support self-hosted shoot clusters with managed infrastructure (see [GEP-28](https://github.com/gardener/gardener/blob/master/docs/proposals/28-self-hosted-shoot-clusters.md#managed-infrastructure)). by @timebertt [[#1239](https://github.com/gardener/gardener-extension-provider-gcp/pull/1239)]
- `[USER]` The provider-gcp extension does now support shoot clusters with Kubernetes version 1.34. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) before upgrading to 1.34. by @tobschli [[#1236](https://github.com/gardener/gardener-extension-provider-gcp/pull/1236)]

## 🏃 Others
- `[OPERATOR]` Add missing `useWorkloadIdentity` helm parameter for the ingress-gce chart. by @kon-angelo [[#1226](https://github.com/gardener/gardener-extension-provider-gcp/pull/1226)]
- `[OPERATOR]` A bug in the migration of dual-stack to single-stack clusters has been fixed. by @axel7born [[#1243](https://github.com/gardener/gardener-extension-provider-gcp/pull/1243)]
- `[OPERATOR]` Introduce a healthcheck for the ingress controller when deployed. by @kon-angelo [[#1230](https://github.com/gardener/gardener-extension-provider-gcp/pull/1230)]
- `[OPERATOR]` Remove CPU requests for gcp-extension components in Shoot and Seed. by @voelzmo [[#1242](https://github.com/gardener/gardener-extension-provider-gcp/pull/1242)]
- `[OPERATOR]` Deployment gce-ingress is scaled to 0, but still enabled after migration from dual-stack to single-stack networking. by @axel7born [[#1227](https://github.com/gardener/gardener-extension-provider-gcp/pull/1227)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-driver: v1.17.14 -> v1.22.1 (singleton)  
    - csi-driver-filestore: v1.11.0 -> v1.11.4 (singleton)  
    - csi-provisioner: v5.3.0 -> v6.1.0 (singleton)  
    - csi-resizer: v1.14.0 -> v2.0.0 (singleton)  
    - csi-snapshot-controller: v8.3.0 -> v8.4.0 (singleton)  
    - csi-snapshotter: v8.3.0 -> v8.4.0 (singleton) by @gardener-github-actions[bot] [[#1221](https://github.com/gardener/gardener-extension-provider-gcp/pull/1221)]
- `[DEPENDENCY]` Updated   
  gardener/gardener -> v1.132.2  
  ginkgo -> v2.27.2  
  x/exp, x/oauth2, x/tools by @wpross [[#1247](https://github.com/gardener/gardener-extension-provider-gcp/pull/1247)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.48.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.48.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.48.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.48.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.48.0`
