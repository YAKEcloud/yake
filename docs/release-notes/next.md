---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-azure to <code>1.57.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.57.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Following the renaming based on [PR13273](https://github.com/gardener/gardener/pull/13273), **autonomous shoot cluster** was renamed to **self hosted shoot cluster**. This leads to e.g. a change of the `/gardener-extension-provider-azure`'s cli argument `--autonomous-shoot-cluster` to change to `--self-hosted-shoot-cluster` and the respective helm chart's variable `.Values.gardener.autonomousShootCluster` to change to `.Values.gardener.selfHostedShootCluster`. by @wpross [[#1376](https://github.com/gardener/gardener-extension-provider-azure/pull/1376)]

## 📰 Noteworthy
- `[OPERATOR]` Deprecate resourceGroup field of infrastructureConfig by @hebelsan [[#1356](https://github.com/gardener/gardener-extension-provider-azure/pull/1356)]

## ✨ New Features
- `[OPERATOR]` The `Worker` controller is prepared to support self-hosted shoot clusters with managed infrastructure (see [GEP-28](https://github.com/gardener/gardener/blob/master/docs/proposals/28-self-hosted-shoot-clusters.md#managed-infrastructure)). by @timebertt [[#1378](https://github.com/gardener/gardener-extension-provider-azure/pull/1378)]
- `[USER]` VMs can now be deployed into capacity reservations by @AndreasBurger [[#1373](https://github.com/gardener/gardener-extension-provider-azure/pull/1373)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug in the cloud controller manager visible in Azure China has been fixed by updating the container images as follows:  
  - v1.31.9 -> v1.31.10  
  - v1.32.8 -> v1.32.9  
  - v1.33.3 -> v1.33.4 by @vpnachev [[#1368](https://github.com/gardener/gardener-extension-provider-azure/pull/1368)]
- `[OPERATOR]` Fix bug in Azure client failing to make use of Workload Identity in Azure China by downgrading the module `github.com/AzureAD/microsoft-authentication-library-for-go` to version `v1.4.2`. by @vpnachev [[#1357](https://github.com/gardener/gardener-extension-provider-azure/pull/1357)]

## 🏃 Others
- `[OPERATOR]` Add input validation for DNS provider secrets referenced in the shoot spec. by @wpross [[#1337](https://github.com/gardener/gardener-extension-provider-azure/pull/1337)]
- `[OPERATOR]` Update azure container registry links to v2 for new images by @hebelsan [[#1385](https://github.com/gardener/gardener-extension-provider-azure/pull/1385)]
- `[OPERATOR]` Improve the implementation of the `DisableRemedyController` featuregate. Now by @kon-angelo [[#1361](https://github.com/gardener/gardener-extension-provider-azure/pull/1361)]
- `[OPERATOR]` Remove controlplane webhook cleanup by @hebelsan [[#1349](https://github.com/gardener/gardener-extension-provider-azure/pull/1349)]
- `[OPERATOR]` Remove CPU requests for azure-extension components in Shoot and Seed. by @voelzmo [[#1384](https://github.com/gardener/gardener-extension-provider-azure/pull/1384)]
- `[OPERATOR]` Annotations added to ensure in-tree PVs can be forced attached to the node in ReadOnly caching mode. by @kon-angelo [[#1382](https://github.com/gardener/gardener-extension-provider-azure/pull/1382)]
- `[OPERATOR]` Support for K8S version v1.34 has been added. Check the [K8S release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) before upgrading to v1.34.  
    
  Updated  azure-sdk-for-go, microsoft-authentication-library-for-go, gardener/gardener, gardener/machine-controller-manager, gardener/remedy-controller, ginkgo, prometheus-operator, x/crypto, x/tools, k8s.io/api, k8s.io/apiextensions-apiserver, k8s.io/apimachinery, k8s.io/autoscaler/vertical-pod-autoscaler, k8s.io/client-go, k8s.io/code-generator, k8s.io/component-base, k8s.io/kubelet, sigs.k8s.io/controller-runtime, sigs.k8s.io/controller-tools, cloud-controller-manager by @wpross [[#1376](https://github.com/gardener/gardener-extension-provider-azure/pull/1376)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.31.10 -> v1.31.11 (patch)  
    - cloud-controller-manager: v1.32.9 -> v1.32.10 (patch)  
    - cloud-controller-manager: v1.33.4 -> v1.33.5 (patch)  
    - cloud-controller-manager: v1.34.2 -> v1.34.3 (patch)  
    - cloud-node-manager: v1.31.10 -> v1.31.11 (patch)  
    - cloud-node-manager: v1.32.9 -> v1.32.10 (patch)  
    - cloud-node-manager: v1.33.4 -> v1.33.5 (patch)  
    - cloud-node-manager: v1.34.2 -> v1.34.3 (patch)  
    - csi-provisioner: v6.0.0 -> v6.1.0 (singleton) by @gardener-github-actions[bot] [[#1381](https://github.com/gardener/gardener-extension-provider-azure/pull/1381)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-node-manager: v1.31.9 -> v1.31.10 (patch)  
    - cloud-node-manager: v1.32.8 -> v1.32.9 (patch)  
    - cloud-node-manager: v1.33.3 -> v1.33.4 (patch)  
    - csi-provisioner: v5.3.0 -> v6.0.0 (singleton)  
    - csi-resizer: v1.14.0 -> v2.0.0 (singleton)  
    - csi-snapshot-controller: v8.3.0 -> v8.4.0 (singleton)  
    - csi-snapshotter: v8.3.0 -> v8.4.0 (singleton) by @gardener-github-actions[bot] [[#1315](https://github.com/gardener/gardener-extension-provider-azure/pull/1315)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.57.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.57.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.57.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.57.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.57.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.35.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-gardenlinux:v0.35.0]

## 🏃 Others
- `[OPERATOR]` The Garden Linux OS extension now reconciles on OSCs of type `gardenlinux-fips`. by @MrBatschner [[#321](https://github.com/gardener/gardener-extension-os-gardenlinux/pull/321)]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.35.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.35.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.48.0</code></b></summary>

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


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.67.0</code></b></summary>

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


</details>

<details>
<summary><b>Update dashboard to <code>1.82.6</code></b></summary>

# [github.com/gardener/dashboard:1.82.6]

## 🐛 Bug Fixes
- `[USER]` Adds CSRF protection to the `authorizeToken` function that handles token-based authentication via `POST /auth`. by @gardener-github-actions[bot] [[#2703](https://github.com/gardener/dashboard/pull/2703)]
- `[USER]` Fixed an issue where floating pool names using a domain selector were not displayed by @grolu [[#2700](https://github.com/gardener/dashboard/pull/2700)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.6`


</details>

<details>
<summary><b>Update dashboard to <code>1.82.6</code></b></summary>

# [github.com/gardener/dashboard:1.82.6]

## 🐛 Bug Fixes
- `[USER]` Adds CSRF protection to the `authorizeToken` function that handles token-based authentication via `POST /auth`. by @gardener-github-actions[bot] [[#2703](https://github.com/gardener/dashboard/pull/2703)]
- `[USER]` Fixed an issue where floating pool names using a domain selector were not displayed by @grolu [[#2700](https://github.com/gardener/dashboard/pull/2700)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.6`


</details>
