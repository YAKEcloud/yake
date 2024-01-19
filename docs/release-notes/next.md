---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update dashboard to <code>1.71.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixed an issue where the error message `_all is not a function` was displayed on the `ALL PROJECTS` page. by @holgerkoser [#1663]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.71.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.71.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixed an issue where the error message `_all is not a function` was displayed on the `ALL PROJECTS` page. by @holgerkoser [#1663]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.71.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.16.1</code></b></summary>

# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#342]
- `[OPERATOR]` rfc2136 provider expects TSIGSecret in base64 encoded format (previously base64 decoded was expected) by @Avarei [#347]
## ✨ New Features

- `[USER]` [AWS Route53] Create an additional alias `AAAA` record for load balancers (NLBs) if load balancer target domain name has an IPv6 address. by @MartinWeindel [#341]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [#338]
- `[DEVELOPER]` Remove vendoring by @MartinWeindel [#345]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.16.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.42.0</code></b></summary>

# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` rfc2136 provider expects TSIGSecret in base64 encoded format (previously base64 decoded was expected) by @Avarei [gardener/external-dns-management#347]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/external-dns-management#342]
## ✨ New Features

- `[USER]` [AWS Route53] Create an additional alias `AAAA` record for load balancers (NLBs) if load balancer target domain name has an IPv6 address. by @MartinWeindel [gardener/external-dns-management#341]
## 🏃 Others

- `[DEVELOPER]` Remove vendoring by @MartinWeindel [gardener/external-dns-management#345]
- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [gardener/external-dns-management#338]
# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.85.0 to 1.86.0. by @MartinWeindel [#268]
- `[DEVELOPER]` Remove vendoring from project by @MartinWeindel [#268]

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.10</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.9...0.6.10

</details>

<details>
<summary><b>Update provider-azure to <code>1.40.0</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#762]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug which caused an empty `vmType` under certain conditions has been fixed. Empty `vmType`s prevent load balancers from being deleted on Kubernetes v1.28 shoots. by @oliver-goetz [#754]
## 🏃 Others

- `[DEVELOPER]` Add new unit tests. by @axel7born [#751]
- `[OPERATOR]` Updated azurecsi-file image -> `v1.29.2` by @kon-angelo [#760]
- `[OPERATOR]` Set azurefile-csi CSIDriver object to support ephemeral disks. by @kon-angelo [#756]
- `[OPERATOR]` Add new flow-based infrastructure reconciler. by @kon-angelo [#739]
- `[OPERATOR]` Set azurefile-csi CSIDriver object with `attachRequired` to false. by @kon-angelo [#756]
- `[DEPENDENCY]` Vendor gardener `v1.83.3` by @kon-angelo [#764]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.40.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.40.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.23.0</code></b></summary>

# [gardener/gardener-extension-os-gardenlinux]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`) by @ccwienk [#134]
- `[OPERATOR]` hardcoded cgroup driver for containerd and kubelet to systemd for ALL new nodes. Requires the Gardener installation to only have Gardenlinux versions with cgroups-v2 only. This includes GL 934 and up. by @danielfoehrKn [#133]
## 📰 Noteworthy

- `[OPERATOR]` This extension is now prepared to run with an enabled `UseGardenerNodeAgent` feature gate. by @rfranzke [#130]
## ✨ New Features

- `[USER]` `os-gardenlinux` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @acumino [#131]
## 🏃 Others

- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.1-> v1.80.0  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#127]

## Docker Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.23.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.42.1</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue has been fixed that led to invalid webhook configurations after the admission controller rotated the CA and server certificates. by @timuthy [#278]

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.42.2</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Downgrade dns-controller-manager from `v0.16.1` to `v0.16.0` to disable newly introduced feature "Create alias AAAA records for load balancers if target domain name has an IPv6 address" because of leaking `AAAA` under some circumstances. by @MartinWeindel [#279]

</details>

<details>
<summary><b>Update provider-azure to <code>1.40.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[USER]` Disk detachment step is skipped while terminating terminal state vms. Terminal state vms have `provisioningState` as `Failed` by @himanshu-kun [#773]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.40.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.40.1`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.20.0</code></b></summary>

# [gardener/network-problem-detector]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/network-problem-detector#53]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [gardener/network-problem-detector#51]
- `[OPERATOR]` Fix image repository for releases by @MartinWeindel [gardener/network-problem-detector#55]
- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [gardener/network-problem-detector#52]
- `[DEVELOPER]` remove vendoring by @MartinWeindel [gardener/network-problem-detector#54]
# [gardener/gardener-extension-shoot-networking-problemdetector]

## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.0 to 1.84.1. by @dependabot[bot] [#106]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.81.1 to 1.82.0. by @dependabot[bot] [#99]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.83.0 to 1.84.0. by @dependabot[bot] [#105]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.0 to 1.82.1. by @dependabot[bot] [#100]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.85.0 to 1.86.0. by @dependabot[bot] [#111]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.1 to 1.83.0. by @dependabot[bot] [#102]
- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.80.1 to 1.81.1. by @dependabot[bot] [#97]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.1 to 1.85.0. by @dependabot[bot] [#108]

## Docker Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.20.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.86.1</code></b></summary>

# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @shreyas-s-rao [gardener/etcd-druid#756]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Dynamic loading of IaaS credentials is now optimized to make use of file system information instead of calculating a hash of the credentials to detect changes. by @renormalize [gardener/etcd-backup-restore#670]
- `[OPERATOR]` A regression in chunk deletion behavior for openstack provider has now been fixed. by @shreyas-s-rao [gardener/etcd-backup-restore#703]
- `[OPERATOR]` Add unit tests for chunk deletion by @anveshreddy18 [gardener/etcd-backup-restore#685]
- `[USER]` Add support for overriding storage API endpoint for provider GCS, by setting environment variable `GOOGLE_STORAGE_API_ENDPOINT`, with the value in the format `http[s]://host[:port]/storage/v1/`. ⚠️ Note: GCS storage API endpoint will not be overridden for `copy` subcommand, since backup buckets may reside in different regions. by @shreyas-s-rao [gardener/etcd-backup-restore#691]

## Docker Images
- admission-controller-linux-amd64: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.1`
- apiserver-linux-amd64: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.1`
- controller-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.1`
- gardenlet-linux-amd64: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.1`
- node-agent-linux-amd64: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.1`
- operator-linux-amd64: `eu.gcr.io/gardener-project/gardener/operator:v1.86.1`
- resource-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.1`
- scheduler-linux-amd64: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.86.1</code></b></summary>

# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @shreyas-s-rao [gardener/etcd-druid#756]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Dynamic loading of IaaS credentials is now optimized to make use of file system information instead of calculating a hash of the credentials to detect changes. by @renormalize [gardener/etcd-backup-restore#670]
- `[OPERATOR]` A regression in chunk deletion behavior for openstack provider has now been fixed. by @shreyas-s-rao [gardener/etcd-backup-restore#703]
- `[OPERATOR]` Add unit tests for chunk deletion by @anveshreddy18 [gardener/etcd-backup-restore#685]
- `[USER]` Add support for overriding storage API endpoint for provider GCS, by setting environment variable `GOOGLE_STORAGE_API_ENDPOINT`, with the value in the format `http[s]://host[:port]/storage/v1/`. ⚠️ Note: GCS storage API endpoint will not be overridden for `copy` subcommand, since backup buckets may reside in different regions. by @shreyas-s-rao [gardener/etcd-backup-restore#691]

## Docker Images
- admission-controller-linux-amd64: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.1`
- apiserver-linux-amd64: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.1`
- controller-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.1`
- gardenlet-linux-amd64: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.1`
- node-agent-linux-amd64: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.1`
- operator-linux-amd64: `eu.gcr.io/gardener-project/gardener/operator:v1.86.1`
- resource-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.1`
- scheduler-linux-amd64: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.86.1</code></b></summary>

# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @shreyas-s-rao [gardener/etcd-druid#756]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Dynamic loading of IaaS credentials is now optimized to make use of file system information instead of calculating a hash of the credentials to detect changes. by @renormalize [gardener/etcd-backup-restore#670]
- `[OPERATOR]` A regression in chunk deletion behavior for openstack provider has now been fixed. by @shreyas-s-rao [gardener/etcd-backup-restore#703]
- `[OPERATOR]` Add unit tests for chunk deletion by @anveshreddy18 [gardener/etcd-backup-restore#685]
- `[USER]` Add support for overriding storage API endpoint for provider GCS, by setting environment variable `GOOGLE_STORAGE_API_ENDPOINT`, with the value in the format `http[s]://host[:port]/storage/v1/`. ⚠️ Note: GCS storage API endpoint will not be overridden for `copy` subcommand, since backup buckets may reside in different regions. by @shreyas-s-rao [gardener/etcd-backup-restore#691]

## Docker Images
- admission-controller-linux-amd64: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.1`
- apiserver-linux-amd64: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.1`
- controller-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.1`
- gardenlet-linux-amd64: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.1`
- node-agent-linux-amd64: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.1`
- operator-linux-amd64: `eu.gcr.io/gardener-project/gardener/operator:v1.86.1`
- resource-manager-linux-amd64: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.1`
- scheduler-linux-amd64: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.1`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.11</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.10...0.6.11

</details>

<details>
<summary><b>Update dashboard to <code>1.72.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[USER]` Removed support for deprecated annotations. These annotations have been deprecated long time ago:  
  - `garden.sapcloud.io/createdBy`. If you still have a cluster using this annotation, you can migrate it manually to `dashboard.gardener.cloud/created-by` if you need to  
  - `shoot.garden.sapcloud.io/ignore`: If you still have a cluster using this annotation, you can migrate it manually to `shoot.gardener.cloud/ignore` if you need to by @grolu [#1669]
## ✨ New Features

- `[USER]` Streamlined Kubernetes cluster upgrades for enhanced user experience. We've removed non-eligible versions from the upgrade selection, replacing them with a hint to indicate the existence of more versions. Additionally, only supported versions are now highlighted on the version chip. To aid in version management, chips for deprecated versions will now display in a warning color, alerting users to the need for an upgrade by @grolu [#1683]
- `[USER]` Hidden GitHub comments will no longer be displayed on the Cluster Details page. by @holgerkoser [#1675]
- `[USER]` Added support to request a time-limited kubeconfig on the cluster details page. The lifetime can be configured on the settings page. This feature is disabled by default and can be enabled by the gardener dashboard operator. by @grolu [#1666]
- `[OPERATOR]` The feature to request a time-limited kubeconfig is disabled by default. You can enabled it via `.Values.global.dashboard.frontendConfig.shootAdminKubeconfig.enabled`. The maximum expiration seconds can be controlled via `.Values.global.dashboard.frontendConfig.shootAdminKubeconfig.maxExpirationSeconds`. by @grolu [#1666]
## 🐛 Bug Fixes

- `[USER]` The broken link to the permission configuration documentation for Azure secrets was fixed. by @MrBatschner [#1667]
- `[USER]` Fixed an issue on the member management page. Update members and service account dialog did not render correctly because of an issue with the input validation by @grolu [#1686]
- `[USER]` Project list: fixed issue where the second entry is highlighted on key-down in some cases by @petersutter [#1687]
- `[USER]` Fixed email check for account names: Non email user accounts are no longer converted to a `mailto` link by @grolu [#1669]
- `[USER]` Resolved an issue from Dashboard version `1.70` that prevented the display of descriptions in the 'Update Cluster Version' dropdown selection by @grolu [#1672]
- `[USER]` Improved Navigation in project list filter: Disabled spell check to enhance arrow key navigation reliability. This update addresses an issue where spell check functionality occasionally interfered with keyboard navigation by @grolu [#1696]
- `[USER]` Resolved a styling issue that affected the hover functionality in the Safari browser by @grolu [#1696]
## 🏃 Others

- `[USER]` Introduced tonal variations to our chips and alert designs, previously defined with outline styles by @grolu [#1681]
## 📖 Documentation

- `[USER]` Enhanced the `Connect Kubectl` documentation by @petersutter [#1679]
- `[DEVELOPER]` Updated the `Project Operations` kubeconfig documentation by @n-boshnakov [#1673]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.72.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.72.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[USER]` Removed support for deprecated annotations. These annotations have been deprecated long time ago:  
  - `garden.sapcloud.io/createdBy`. If you still have a cluster using this annotation, you can migrate it manually to `dashboard.gardener.cloud/created-by` if you need to  
  - `shoot.garden.sapcloud.io/ignore`: If you still have a cluster using this annotation, you can migrate it manually to `shoot.gardener.cloud/ignore` if you need to by @grolu [#1669]
## ✨ New Features

- `[USER]` Streamlined Kubernetes cluster upgrades for enhanced user experience. We've removed non-eligible versions from the upgrade selection, replacing them with a hint to indicate the existence of more versions. Additionally, only supported versions are now highlighted on the version chip. To aid in version management, chips for deprecated versions will now display in a warning color, alerting users to the need for an upgrade by @grolu [#1683]
- `[USER]` Hidden GitHub comments will no longer be displayed on the Cluster Details page. by @holgerkoser [#1675]
- `[USER]` Added support to request a time-limited kubeconfig on the cluster details page. The lifetime can be configured on the settings page. This feature is disabled by default and can be enabled by the gardener dashboard operator. by @grolu [#1666]
- `[OPERATOR]` The feature to request a time-limited kubeconfig is disabled by default. You can enabled it via `.Values.global.dashboard.frontendConfig.shootAdminKubeconfig.enabled`. The maximum expiration seconds can be controlled via `.Values.global.dashboard.frontendConfig.shootAdminKubeconfig.maxExpirationSeconds`. by @grolu [#1666]
## 🐛 Bug Fixes

- `[USER]` The broken link to the permission configuration documentation for Azure secrets was fixed. by @MrBatschner [#1667]
- `[USER]` Fixed an issue on the member management page. Update members and service account dialog did not render correctly because of an issue with the input validation by @grolu [#1686]
- `[USER]` Project list: fixed issue where the second entry is highlighted on key-down in some cases by @petersutter [#1687]
- `[USER]` Fixed email check for account names: Non email user accounts are no longer converted to a `mailto` link by @grolu [#1669]
- `[USER]` Resolved an issue from Dashboard version `1.70` that prevented the display of descriptions in the 'Update Cluster Version' dropdown selection by @grolu [#1672]
- `[USER]` Improved Navigation in project list filter: Disabled spell check to enhance arrow key navigation reliability. This update addresses an issue where spell check functionality occasionally interfered with keyboard navigation by @grolu [#1696]
- `[USER]` Resolved a styling issue that affected the hover functionality in the Safari browser by @grolu [#1696]
## 🏃 Others

- `[USER]` Introduced tonal variations to our chips and alert designs, previously defined with outline styles by @grolu [#1681]
## 📖 Documentation

- `[USER]` Enhanced the `Connect Kubectl` documentation by @petersutter [#1679]
- `[DEVELOPER]` Updated the `Project Operations` kubeconfig documentation by @n-boshnakov [#1673]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.72.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.17.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` [aws-route53] Support dual-stack AWS load balancers by creating additional AAAA record with alias target if annotation `service.beta.kubernetes.io/aws-load-balancer-ip-address-type=dualstack` (services only) or `dns.gardener.cloud/ip-stack=dual-stack` (ingresses,dnsentries, and services) is set. by @MartinWeindel [#350]
## 🏃 Others

- `[DEVELOPER]` Move canonicalhostedzone map of `aws-route53` provider to own package to allow reuse in [gardener/provider-aws](https://github.com/gardener/gardener-extension-provider-aws/). by @MartinWeindel [#348]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.17.0`


</details>
