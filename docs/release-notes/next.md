---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-gcp to <code>1.48.2</code></b></summary>



## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.48.2`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.48.2`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.48.2`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.48.2`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.48.2`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.76.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.76.0]

## 🏃 Others
- `[USER]` Allow to use next-generation dns-controller-manager per configuration in shoot manifest with `.spec.extensions[@type="shoot-dns-service"].providerConfig.useNextGenerationController=true`. This feature has alpha status. by @MartinWeindel [[#615](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/615)]

# [github.com/gardener/external-dns-management:v0.34.0]

## 🐛 Bug Fixes
- `[OPERATOR]` In an edge case, the data section for a `Secret` is not dropped anymore when it is not longer used by any provider and the secret is updated to remove the finalizer. by @MartinWeindel [[#723](https://github.com/gardener/external-dns-management/pull/723)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.76.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.76.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.76.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.76.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.76.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.66.2</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.66.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Set --strict-topology for the external provisioner of the EBS CSI Driver. by @hebelsan [[#1610](https://github.com/gardener/gardener-extension-provider-aws/pull/1610)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.66.2`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.66.2`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.66.2`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.66.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.66.2`


</details>

<details>
<summary><b>Update provider-azure to <code>1.57.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.57.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Support not only the DNS-specific keys for dns provider secrets, but in addition the infrastructure secret keys. by @wpross [[#1404](https://github.com/gardener/gardener-extension-provider-azure/pull/1404)]

## 🏃 Others
- `[OPERATOR]` Fix a bug where the namespace for the discovery of the kubeconfig secret was incorrect during the remedy-controller removal. by @kon-angelo [[#1405](https://github.com/gardener/gardener-extension-provider-azure/pull/1405)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.57.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.57.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.57.1`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.57.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.57.1`


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.35.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.35.0]

## ✨ New Features
- `[DEVELOPER]` It is now possible to deploy the extension, via `make extension-up`, in a locally running gardener installation managed with gardener-operator. by @vpnachev [[#399](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/399)]

## 🏃 Others
- `[OPERATOR]` The container image base layer has been updated to Debian 13 (trixie). by @dimityrmirchev [[#401](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/401)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.132.1 -> v1.134.0  
  - golang.org/x/tools v0.38.0 -> v0.40.0  
  - golang.org/x/crypto v0.44.0 -> v0.46.0  
  - golang.org/x/mod v0.29.0 -> v0.31.0  
  - golang.org/x/net v0.46.0 -> v0.48.0  
  - golang.org/x/sync v0.18.0 -> v0.19.0  
  - golang.org/x/sys v0.38.0 -> v0.39.0  
  - golang.org/x/term v0.37.0 -> v0.38.0  
  - golang.org/x/text v0.31.0 -> v0.32.0  
  - helm.sh/helm/v3 v3.19.1 -> v3.19.2  
  - istio.io/api v1.27.3 -> v1.27.4  
  - k8s.io/api v0.34.1 -> v0.34.3  
  - k8s.io/apiextensions-apiserver v0.34.1 -> v0.34.3  
  - k8s.io/apimachinery v0.34.1 -> v0.34.3  
  - k8s.io/apiserver v0.34.1 -> v0.34.3  
  - k8s.io/client-go v0.34.1 -> v0.34.3  
  - k8s.io/code-generator v0.34.1 -> v0.34.3  
  - k8s.io/component-base v0.34.1 -> v0.34.3  
  - k8s.io/component-helpers v0.34.1 -> v0.34.3  
  - k8s.io/cluster-bootstrap v0.34.1 -> v0.34.3  
  - k8s.io/kube-aggregator v0.34.1 -> v0.34.3  
  - k8s.io/kubelet v0.34.1 -> v0.34.3  
  - k8s.io/metrics v0.34.1 -> v0.34.3 by @dependabot[bot] [[#400](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/400)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.132.0 -> v1.132.1 by @dependabot[bot] [[#393](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/393)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.35.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.35.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.134.1</code></b></summary>

# [github.com/gardener/gardener:v1.134.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Refactor the collector `journald` receiver to capture kernel logs via a more stable method. by @rrhubenov [[#13730](https://github.com/gardener/gardener/pull/13730)]
- `[OPERATOR]` An issue causing credentials rotation for the Garden resource to fail is now fixed. by @ialidzhikov [[#13738](https://github.com/gardener/gardener/pull/13738)]
- `[DEVELOPER]` Change the registry port in the local setup to `:5001`. by @LucaBernstein [[#13672](https://github.com/gardener/gardener/pull/13672)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.134.1</code></b></summary>

# [github.com/gardener/gardener:v1.134.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Refactor the collector `journald` receiver to capture kernel logs via a more stable method. by @rrhubenov [[#13730](https://github.com/gardener/gardener/pull/13730)]
- `[OPERATOR]` An issue causing credentials rotation for the Garden resource to fail is now fixed. by @ialidzhikov [[#13738](https://github.com/gardener/gardener/pull/13738)]
- `[DEVELOPER]` Change the registry port in the local setup to `:5001`. by @LucaBernstein [[#13672](https://github.com/gardener/gardener/pull/13672)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.134.1</code></b></summary>

# [github.com/gardener/gardener:v1.134.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Refactor the collector `journald` receiver to capture kernel logs via a more stable method. by @rrhubenov [[#13730](https://github.com/gardener/gardener/pull/13730)]
- `[OPERATOR]` An issue causing credentials rotation for the Garden resource to fail is now fixed. by @ialidzhikov [[#13738](https://github.com/gardener/gardener/pull/13738)]
- `[DEVELOPER]` Change the registry port in the local setup to `:5001`. by @LucaBernstein [[#13672](https://github.com/gardener/gardener/pull/13672)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.1`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.43.0</code></b></summary>

# [github.com/gardener/gardener-metrics-exporter:0.43.0]

## 🏃 Others
- `[OPERATOR]` Update dependencies by @chrkl [[#141](https://github.com/gardener/gardener-metrics-exporter/pull/141)]
- `[USER]` Add metrics for Gardenlet resources in virtual garden. by @RaphSku [[#138](https://github.com/gardener/gardener-metrics-exporter/pull/138)]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.43.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.43.0</code></b></summary>

# [github.com/gardener/gardener-metrics-exporter:0.43.0]

## 🏃 Others
- `[OPERATOR]` Update dependencies by @chrkl [[#141](https://github.com/gardener/gardener-metrics-exporter/pull/141)]
- `[USER]` Add metrics for Gardenlet resources in virtual garden. by @RaphSku [[#138](https://github.com/gardener/gardener-metrics-exporter/pull/138)]

## Container (OCI) Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.43.0`


</details>

<details>
<summary><b>Update image-rewriter to <code>0.7.0</code></b></summary>



## Helm Charts
- image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/image-rewriter:v0.7.0`
## Container (OCI) Images
- gardener-extension-image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/image-rewriter:v0.7.0`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.26.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-filter:v0.26.0]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#302](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/302)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#278](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/278)]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.26.0`
- shoot-networking-filter-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-application:v0.26.0`
- shoot-networking-filter-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-runtime:v0.26.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.26.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-filter-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter-admission:v0.26.0`
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.26.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.26.0`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.31.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-problemdetector:v0.31.0]

## 🏃 Others
- `[OPERATOR]` Update go version to v1.25. by @DockToFuture [[#299](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/pull/299)]
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#315](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/pull/315)]

## Helm Charts
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.31.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.31.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.34.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-ubuntu:v1.34.0]

## 🏃 Others
- `[OPERATOR]` Allows the operator to deploy nodes with custom apt configuration. by @robinschneider [[#203](https://github.com/gardener/gardener-extension-os-ubuntu/pull/203)]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.34.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.34.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.68.0</code></b></summary>

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


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.134.2</code></b></summary>

# [github.com/gardener/gardener:v1.134.2]

## 🐛 Bug Fixes
- `[OPERATOR]` extension library: An issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the BackupEntry Secret is now fixed. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#13791](https://github.com/gardener/gardener/pull/13791)]
- `[USER]` Fix a bug that prevents updating expiration dates of overridden machine image versions in `NamespacedCloudProfile`s. by @LucaBernstein [[#13769](https://github.com/gardener/gardener/pull/13769)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.134.2</code></b></summary>

# [github.com/gardener/gardener:v1.134.2]

## 🐛 Bug Fixes
- `[OPERATOR]` extension library: An issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the BackupEntry Secret is now fixed. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#13791](https://github.com/gardener/gardener/pull/13791)]
- `[USER]` Fix a bug that prevents updating expiration dates of overridden machine image versions in `NamespacedCloudProfile`s. by @LucaBernstein [[#13769](https://github.com/gardener/gardener/pull/13769)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.134.2</code></b></summary>

# [github.com/gardener/gardener:v1.134.2]

## 🐛 Bug Fixes
- `[OPERATOR]` extension library: An issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the BackupEntry Secret is now fixed. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#13791](https://github.com/gardener/gardener/pull/13791)]
- `[USER]` Fix a bug that prevents updating expiration dates of overridden machine image versions in `NamespacedCloudProfile`s. by @LucaBernstein [[#13769](https://github.com/gardener/gardener/pull/13769)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.2`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.68.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-alicloud:v1.68.1]

## 🐛 Bug Fixes
- `[OPERATOR]` The `github.com/gardener/gardener` dependency was bumped to `v1.134.2` to include a fix for an issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the `BackupEntry` Secret. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.2)). by @plkokanov [[#866](https://github.com/gardener/gardener-extension-provider-alicloud/pull/866)]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.68.1`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.68.1`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.68.1`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.68.1`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.68.1`


</details>

<details>
<summary><b>Update provider-azure to <code>1.57.2</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.57.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The `github.com/gardener/gardener` dependency was bumped to `v1.132.4` to include a fix for an issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the `BackupEntry` Secret. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#1426](https://github.com/gardener/gardener-extension-provider-azure/pull/1426)]
- `[OPERATOR]` Downgrade csi-provisioner and csi-resizer for K8S <= 1.33 to make VolumeAttributesClass available for K8S <= 1.33 (v1beta1 + enabled featureGate) and K8S >= 1.34 (v1). by @AndreasBurger [[#1428](https://github.com/gardener/gardener-extension-provider-azure/pull/1428)]
- `[OPERATOR]` Fixed an issue during backupBucket validation without providerConfig. by @wpross [[#1424](https://github.com/gardener/gardener-extension-provider-azure/pull/1424)]

## 🏃 Others
- `[OPERATOR]` Fix an issue that would prevent cluster-autoscaler from considering `VolumeAttributesClasses` for scaling on shoot `< v1.34` by @AndreasBurger [[#1429](https://github.com/gardener/gardener-extension-provider-azure/pull/1429)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.57.2`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.57.2`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.57.2`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.57.2`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.57.2`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.48.3</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.48.3]

## ✨ New Features
- `[USER]` Update `VolumeAttributesClass` enablement for clusters <= `v1.34`. If annotated the kube-apiserver, kube-scheduler, kube-controller-manager will get the VAC feature gate enabled automatically. by @kon-angelo [[#1289](https://github.com/gardener/gardener-extension-provider-gcp/pull/1289)]

## 🐛 Bug Fixes
- `[OPERATOR]` The `github.com/gardener/gardener` dependency was bumped to `v1.132.4` to include a fix for an issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the `BackupEntry` Secret. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#1288](https://github.com/gardener/gardener-extension-provider-gcp/pull/1288)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.48.3`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.48.3`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.48.3`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.48.3`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.48.3`


</details>

<details>
<summary><b>Update cert-management to <code>0.20.0</code></b></summary>

# [github.com/gardener/cert-management:v0.20.0]

## ✨ New Features
- `[USER]` Support `PKCS#8` encoding of certificate private key. For `Certificate` objects, set `.spec.privateKey.encoding` to `PKCS8`. For source objects like `Ingress` and `Service`, set the annotation `cert.gardener.cloud/private-key-encoding=PKCS8`. by @MartinWeindel [[#638](https://github.com/gardener/cert-management/pull/638)]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#633](https://github.com/gardener/cert-management/pull/633)]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.20.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.20.0`


</details>

<details>
<summary><b>Update networking-calico to <code>1.55.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-calico:v1.55.0]

## 📰 Noteworthy
- `[OPERATOR]` CNI plugins are now updated regularly by @domdom82 [[#766](https://github.com/gardener/gardener-extension-networking-calico/pull/766)]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#763](https://github.com/gardener/gardener-extension-networking-calico/pull/763)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.55.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.55.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.55.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.55.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.55.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.55.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.28.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.28.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260105.0. by @gardener-github-actions[bot] [[#334](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/334)]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.28.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.28.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.28.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.52.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-openstack:v1.52.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ETCD backup config in the provider-chart no longer requires an additional `backup` yaml-level to render as expected by @AndreasBurger [[#1234](https://github.com/gardener/gardener-extension-provider-openstack/pull/1234)]
- `[OPERATOR]` Following the renaming based on [PR13273](https://github.com/gardener/gardener/pull/13273), **autonomous shoot cluster** was renamed to **self hosted shoot cluster**. This leads to e.g. a change of the `/gardener-extension-provider-azure`'s cli argument `--autonomous-shoot-cluster` to change to `--self-hosted-shoot-cluster` and the respective helm chart's variable `.Values.gardener.autonomousShootCluster` to change to `.Values.gardener.selfHostedShootCluster`. by @tobschli [[#1210](https://github.com/gardener/gardener-extension-provider-openstack/pull/1210)]
- `[OPERATOR]` `provider-openstack` no longer supports Shoots with Кubernetes version <= 1.29. by @marc1404 [[#1226](https://github.com/gardener/gardener-extension-provider-openstack/pull/1226)]

## ✨ New Features
- `[OPERATOR]` Implements Machine Image Capabilities support for OpenStack, enabling better compatibility management between MachineTypes and MachineImages through CapabilitySets. by @Vincinator [[#1222](https://github.com/gardener/gardener-extension-provider-openstack/pull/1222)]
- `[OPERATOR]` The `Worker` controller is prepared to support self-hosted shoot clusters with managed infrastructure (see [GEP-28](https://github.com/gardener/gardener/blob/master/docs/proposals/28-self-hosted-shoot-clusters.md#managed-infrastructure)). by @timebertt [[#1211](https://github.com/gardener/gardener-extension-provider-openstack/pull/1211)]
- `[USER]` The provider-openstack extension does now support shoot clusters with Kubernetes version 1.34. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) before upgrading to 1.34. by @tobschli [[#1210](https://github.com/gardener/gardener-extension-provider-openstack/pull/1210)]

## 🐛 Bug Fixes
- `[OPERATOR]` Downgrade csi-provisioner and csi-resizer for K8S <= 1.33 to make VolumeAttributesClass available for K8S <= 1.33 (v1beta1 + enabled featureGate) and K8S >= 1.34 (v1). by @wpross [[#1232](https://github.com/gardener/gardener-extension-provider-openstack/pull/1232)]

## 🏃 Others
- `[OPERATOR]` Upgrade csi-provisioner for K8S version >= 1.34 to v6.1.0. by @wpross [[#1232](https://github.com/gardener/gardener-extension-provider-openstack/pull/1232)]
- `[OPERATOR]` Update gardener/gardener to v1.133.0 by @hebelsan [[#1224](https://github.com/gardener/gardener-extension-provider-openstack/pull/1224)]
- `[OPERATOR]` Adds DNS Record integration tests by @hebelsan [[#1205](https://github.com/gardener/gardener-extension-provider-openstack/pull/1205)]
- `[OPERATOR]` Set --strict-topology for the external provisioner of the Cinder CSI controller. by @hebelsan [[#1230](https://github.com/gardener/gardener-extension-provider-openstack/pull/1230)]
- `[OPERATOR]` Remove CPU requests for openstack-extension components in Shoot and Seed. by @voelzmo [[#1215](https://github.com/gardener/gardener-extension-provider-openstack/pull/1215)]
- `[OPERATOR]` Extension-provider logging config can now be changed via helm-values by @AndreasBurger [[#1234](https://github.com/gardener/gardener-extension-provider-openstack/pull/1234)]
- `[DEPENDENCY]` Updated dependency `gardener/gardener` to `v1.134.0` ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.0)). by @marc1404 [[#1226](https://github.com/gardener/gardener-extension-provider-openstack/pull/1226)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.52.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.52.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.52.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.52.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.52.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.56.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-cert-service:v1.56.0]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#497](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/497)]
- `[OPERATOR]` Adjust DNS class if next generation dns-shoot-service settings detected. by @MartinWeindel [[#505](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/505)]

# [github.com/gardener/cert-management:v0.20.0]

## ✨ New Features
- `[USER]` Support `PKCS#8` encoding of certificate private key. For `Certificate` objects, set `.spec.privateKey.encoding` to `PKCS8`. For source objects like `Ingress` and `Service`, set the annotation `cert.gardener.cloud/private-key-encoding=PKCS8`. by @MartinWeindel [[#638](https://github.com/gardener/cert-management/pull/638)]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#633](https://github.com/gardener/cert-management/pull/633)]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.56.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.56.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.1</code></b></summary>

# [github.com/gardener/dashboard:1.83.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Redacts sensitive authorization headers from Octokit debug logs to avoid token leaks. by @petersutter [[#2720](https://github.com/gardener/dashboard/pull/2720)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.1</code></b></summary>

# [github.com/gardener/dashboard:1.83.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Redacts sensitive authorization headers from Octokit debug logs to avoid token leaks. by @petersutter [[#2720](https://github.com/gardener/dashboard/pull/2720)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.1`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.46.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-cilium:v1.46.0]

## ✨ New Features
- `[USER]` Allow configuration of Cilium's wireguard encryption by @hown3d [[#654](https://github.com/gardener/gardener-extension-networking-cilium/pull/654)]

## 🏃 Others
- `[OPERATOR]` Update `node-local-dns` mutate function to init sidecar approach. by @DockToFuture [[#661](https://github.com/gardener/gardener-extension-networking-cilium/pull/661)]
- `[OPERATOR]` Update cilium to `v1.17.11`. by @DockToFuture [[#667](https://github.com/gardener/gardener-extension-networking-cilium/pull/667)]
- `[OPERATOR]` Increased backoff limit of hubble-generate-certs job. by @axel7born [[#651](https://github.com/gardener/gardener-extension-networking-cilium/pull/651)]
- `[OPERATOR]` Update `cilium-cli` image ref to `europe-docker.pkg.dev/gardener-project/releases/gardener/cilium-cli:1.11.0`. by @DockToFuture [[#668](https://github.com/gardener/gardener-extension-networking-cilium/pull/668)]
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#666](https://github.com/gardener/gardener-extension-networking-cilium/pull/666)]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.46.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.46.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.46.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.46.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.46.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.35.0</code></b></summary>



## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.35.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.35.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.2</code></b></summary>

# [github.com/gardener/dashboard:1.83.2]

## 🏃 Others
- `[OPERATOR]` Updated markdown parsing to `unified / remark / rehype` pipeline, improving security and GitHub-flavored Markdown compatibility by @grolu [[#2728](https://github.com/gardener/dashboard/pull/2728)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.2`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.2</code></b></summary>

# [github.com/gardener/dashboard:1.83.2]

## 🏃 Others
- `[OPERATOR]` Updated markdown parsing to `unified / remark / rehype` pipeline, improving security and GitHub-flavored Markdown compatibility by @grolu [[#2728](https://github.com/gardener/dashboard/pull/2728)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.2`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.68.2</code></b></summary>



## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.68.2`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.68.2`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.68.2`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.68.2`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.68.2`


</details>

<details>
<summary><b>Update provider-aws to <code>1.67.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.67.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` `provider-aws` no longer supports Shoots with Кubernetes version <= 1.29. by @tobschli [[#1591](https://github.com/gardener/gardener-extension-provider-aws/pull/1591)]
- `[OPERATOR]` Following the renaming based on [PR13273](https://github.com/gardener/gardener/pull/13273), **autonomous shoot cluster** was renamed to **self hosted shoot cluster**. This leads to e.g. a change of the `/gardener-extension-provider-aws`'s cli argument `--autonomous-shoot-cluster` to change to `--self-hosted-shoot-cluster` and the respective helm chart's variable `.Values.gardener.autonomousShootCluster` to change to `.Values.gardener.selfHostedShootCluster`. by @tobschli [[#1591](https://github.com/gardener/gardener-extension-provider-aws/pull/1591)]
- `[OPERATOR]` ETCD backup config in the provider-chart no longer requires an additional `backup` yaml-level to render as expected by @AndreasBurger [[#1623](https://github.com/gardener/gardener-extension-provider-aws/pull/1623)]

## 📰 Noteworthy
- `[OPERATOR]` Update credential provider ECR patterns by @hebelsan [[#1602](https://github.com/gardener/gardener-extension-provider-aws/pull/1602)]

## ✨ New Features
- `[OPERATOR]` The `Worker` controller is prepared to support self-hosted shoot clusters with managed infrastructure (see [GEP-28](https://github.com/gardener/gardener/blob/master/docs/proposals/28-self-hosted-shoot-clusters.md#managed-infrastructure)). by @timebertt [[#1581](https://github.com/gardener/gardener-extension-provider-aws/pull/1581)]
- `[USER]` It's possible to specify an own IPv6 IPAM pool now. by @axel7born [[#1573](https://github.com/gardener/gardener-extension-provider-aws/pull/1573)]
- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.34. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) before upgrading to 1.34. by @tobschli [[#1591](https://github.com/gardener/gardener-extension-provider-aws/pull/1591)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix cluster deletion if EFS can not be found by @hebelsan [[#1593](https://github.com/gardener/gardener-extension-provider-aws/pull/1593)]
- `[OPERATOR]` no rollout hot-update of ProviderConfig.NodeTemplate.VirtualCapacity with/without already existing ProviderConfig.  
  new hash strategy adopted for ProviderConfig for k8s versions >= 1.34 by @elankath [[#1589](https://github.com/gardener/gardener-extension-provider-aws/pull/1589)]
- `[OPERATOR]` Downgrade csi-provisioner and csi-resizer for K8S <= 1.33 to make VolumeAttributesClass available for K8S <= 1.33 (v1beta1 + enabled featureGate) and K8S >= 1.34 (v1). by @wpross [[#1609](https://github.com/gardener/gardener-extension-provider-aws/pull/1609)]
- `[OPERATOR]` Fixed issue when validating a backupBucket without providerConfig. by @wpross [[#1633](https://github.com/gardener/gardener-extension-provider-aws/pull/1633)]
- `[OPERATOR]` A bug leading to nil pointer exception in the Route53 client when Workload Identity credentials are used has been fixed. by @vpnachev [[#1629](https://github.com/gardener/gardener-extension-provider-aws/pull/1629)]

## 🏃 Others
- `[OPERATOR]` Add the ipAddressType to VPC Gateway Endpoints by @hebelsan [[#1611](https://github.com/gardener/gardener-extension-provider-aws/pull/1611)]
- `[OPERATOR]` Set --strict-topology for the external provisioner of the EBS CSI Driver. by @hebelsan [[#1607](https://github.com/gardener/gardener-extension-provider-aws/pull/1607)]
- `[OPERATOR]` Switch VPAs to control memory only by @voelzmo [[#1585](https://github.com/gardener/gardener-extension-provider-aws/pull/1585)]
- `[OPERATOR]` Improve routing table association management by @hebelsan [[#1636](https://github.com/gardener/gardener-extension-provider-aws/pull/1636)]
- `[OPERATOR]` Update aws-custom-route-controller image tag to `v0.14.0`. by @DockToFuture [[#1587](https://github.com/gardener/gardener-extension-provider-aws/pull/1587)]
- `[OPERATOR]` Add input validation for DNS provider secrets referenced in the shoot spec. by @wpross [[#1612](https://github.com/gardener/gardener-extension-provider-aws/pull/1612)]
- `[OPERATOR]` Update alpine to v3.32.2 by @kon-angelo [[#1620](https://github.com/gardener/gardener-extension-provider-aws/pull/1620)]
- `[OPERATOR]` Move back to `public.ecr.aws` registry for `aws-load-balancer-controller` and `volume-modifier-for-k8s` as it is now reachable via AAAA record. by @DockToFuture [[#1597](https://github.com/gardener/gardener-extension-provider-aws/pull/1597)]
- `[OPERATOR]` Update AWS SDK to support EUSC region by @kon-angelo [[#1618](https://github.com/gardener/gardener-extension-provider-aws/pull/1618)]
- `[OPERATOR]` Introduce automated conversions for `NamespacedCloudProfile.status.spec.{machineTypes,machineImages,providerConfig}` to ensure consistency and compatibility during the transition to CloudProfiles with enabled `machineCapabilities`, see also [GEP-33](https://github.com/gardener/gardener/blob/master/docs/proposals/33-machine-image-capabilities.md). by @Roncossek [[#1515](https://github.com/gardener/gardener-extension-provider-aws/pull/1515)]
- `[OPERATOR]` Update `aws-ipam-controller` image to `europe-docker.pkg.dev/gardener-project/releases/gardener/aws-ipam-controller:v0.9.0`. by @DockToFuture [[#1627](https://github.com/gardener/gardener-extension-provider-aws/pull/1627)]
- `[OPERATOR]` Upgrade csi-provisioner for K8S version >= 1.34 to v6.1.0. by @wpross [[#1609](https://github.com/gardener/gardener-extension-provider-aws/pull/1609)]
- `[OPERATOR]` Extension-provider logging config can now be changed via helm-values by @AndreasBurger [[#1623](https://github.com/gardener/gardener-extension-provider-aws/pull/1623)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v2.13.4 -> v2.17.1 (singleton)  
    - cloud-controller-manager: v1.30.9 -> v1.30.10 (patch)  
    - cloud-controller-manager: v1.31.8 -> v1.31.9 (patch)  
    - cloud-controller-manager: v1.34.0 -> v1.35.0 (minor)  
    - csi-driver: v1.52.1 -> v1.54.0 (singleton)  
    - csi-driver-efs: v2.1.14 -> v2.2.0 (singleton)  
    - csi-volume-modifier: v0.7.0 -> v0.9.1 (singleton)  
    - machine-controller-manager-provider-aws: v0.26.0 -> v0.27.0 (singleton) by @gardener-github-actions[bot] [[#1562](https://github.com/gardener/gardener-extension-provider-aws/pull/1562)]
- `[DEPENDENCY]` Updated dependency `gardener/gardener` to `v1.134.0` ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.0)). by @marc1404 [[#1603](https://github.com/gardener/gardener-extension-provider-aws/pull/1603)]
- `[DEPENDENCY]` The following container images have been updated:  
    - machine-controller-manager-provider-aws: v0.27.0 -> v0.27.1 (singleton) by @AndreasBurger [[#1655](https://github.com/gardener/gardener-extension-provider-aws/pull/1655)]
- `[DEPENDENCY]` The following container images have been updated:  
    - ecr-credential-provider: v1.34.0 -> v1.34.1 (patch) by @gardener-github-actions[bot] [[#1646](https://github.com/gardener/gardener-extension-provider-aws/pull/1646)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.67.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.67.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.67.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.67.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.67.0`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.27.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-filter:v0.27.0]

## ✨ New Features
- `[USER]` Added support for v2 filter lists. by @axel7born [[#311](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/311)]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.27.0`
- shoot-networking-filter-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-application:v0.27.0`
- shoot-networking-filter-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-runtime:v0.27.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.27.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-filter-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter-admission:v0.27.0`
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.27.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.27.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.57.3</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.57.3]

## 🐛 Bug Fixes
- `[USER]` Fixes the RBAC permission setup when using VACs by @AndreasBurger [[#1435](https://github.com/gardener/gardener-extension-provider-azure/pull/1435)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.57.3`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.57.3`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.57.3`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.57.3`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.57.3`


</details>

<details>
<summary><b>Update acl to <code>1.15.0</code></b></summary>

<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed

- ✨ The ACL extension now generates the required EnvoyFilters the alpha feature gate `UseUnifiedHTTPProxyPort`. Users should update the extension **BEFORE** enabling the feature gate. https://github.com/stackitcloud/gardener-extension-acl/pull/238

### 🤖 Dependencies
* Update module github.com/gardener/gardener to v1.133.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/220
* Update dependency ko-build/ko to v0.18.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/221
* Update k8s.io/utils digest to 61b37f7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/222
* Update k8s.io/utils digest to 98d557b by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/223
* Update k8s.io/utils digest to 9d40a56 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/224
* Update k8s.io/utils digest to 718f0e5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/225
* Update k8s.io/utils digest to 0fe9cd7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/226
* Update module github.com/gardener/gardener to v1.133.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/227
* Update module github.com/onsi/ginkgo/v2 to v2.27.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/228
* Update k8s.io/utils digest to 914a6e7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/230
* Update module github.com/onsi/ginkgo/v2 to v2.27.5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/233
* Update dependency go to v1.25.6 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/234
* Update module github.com/gardener/gardener to v1.133.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/235
* Update module sigs.k8s.io/controller-runtime to v0.22.5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/237
* Update dependency go to v1.25.6 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/236
* Update module golang.org/x/tools to v0.41.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/232
* Update module github.com/onsi/gomega to v1.39.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/229
### ℹ️ Other Changes
* fix spelling of we in ReadMe by @IndritFejza in https://github.com/stackitcloud/gardener-extension-acl/pull/231
* [GEP-30] Generate envoy filter for new unified http proxy port by @maboehm in https://github.com/stackitcloud/gardener-extension-acl/pull/238

## New Contributors
* @IndritFejza made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/231

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.14.0...v1.15.0

</details>

<details>
<summary><b>Update gardener-webterminal to <code>0.35.0</code></b></summary>

# [github.com/gardener/terminal-controller-manager:v0.35.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Handle terminal deletion when namespace (of garden project) is deleted by @petersutter [[#408](https://github.com/gardener/terminal-controller-manager/pull/408)]

## 🏃 Others
- `[OPERATOR]` Dropped obsolete permission to read secrets from the (virtual) garden cluster. by @petersutter [[#394](https://github.com/gardener/terminal-controller-manager/pull/394)]
- `[OPERATOR]` Terminal webhook: stricter validation for namespaces/names, RBAC RoleRefs, apiServer URL/CA data, and pod labels. by @petersutter [[#452](https://github.com/gardener/terminal-controller-manager/pull/452)]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#404](https://github.com/gardener/terminal-controller-manager/pull/404)]

## Container (OCI) Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.35.0`


</details>

<details>
<summary><b>Update gardener-webterminal to <code>0.35.0</code></b></summary>

# [github.com/gardener/terminal-controller-manager:v0.35.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Handle terminal deletion when namespace (of garden project) is deleted by @petersutter [[#408](https://github.com/gardener/terminal-controller-manager/pull/408)]

## 🏃 Others
- `[OPERATOR]` Dropped obsolete permission to read secrets from the (virtual) garden cluster. by @petersutter [[#394](https://github.com/gardener/terminal-controller-manager/pull/394)]
- `[OPERATOR]` Terminal webhook: stricter validation for namespaces/names, RBAC RoleRefs, apiServer URL/CA data, and pod labels. by @petersutter [[#452](https://github.com/gardener/terminal-controller-manager/pull/452)]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#404](https://github.com/gardener/terminal-controller-manager/pull/404)]

## Container (OCI) Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.35.0`


</details>
