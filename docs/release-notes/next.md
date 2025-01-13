---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.22.2</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Deletion of source DNSEntries must wait for completed deletion of target entries. by @MartinWeindel [#407]
## 🏃 Others

- `[OPERATOR]` introduce `dns.gardener.cloud/target-hard-ignore` annotation by @MartinWeindel [#404]
- `[OPERATOR]` Use AWS SDK v2 for the `aws-route53` provider by @MartinWeindel [#400]
- `[OPERATOR]` Bumps golang from 1.23.3 to 1.23.4. by @dependabot[bot] [#401]
- `[OPERATOR]` Remove annotation `gardener.cloud/operation=reconcile` on reconciliation by @MartinWeindel [#406]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.22.2`
## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.22.2`


</details>

<details>
<summary><b>Update provider-aws to <code>1.59.2</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🐛 Bug Fixes

- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#1172]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.59.2`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.59.2`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.59.2`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.59.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.59.2`


</details>

<details>
<summary><b>Update provider-azure to <code>1.49.2</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#1041]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.49.2`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.49.2`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.49.2`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.49.2`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.49.2`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.55.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` The following extension chart values are changed:  
  - `.dnsControllerManager.vpa.minAllowed` -> `.dnsControllerManager.vpa.resourcePolicy.minAllowed`  
    
  Make sure to adapt your values to the breaking change when upgrading to this version of the extension. by @ialidzhikov [#409]
## 🐛 Bug Fixes

- `[OPERATOR]` Ensure record for DNSEntries are left untouched during migration. by @MartinWeindel [#408]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.108.0 to 1.109.0. by @dependabot[bot] [#403]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.109.0 to 1.110.0. by @dependabot[bot] [#406]
- `[OPERATOR]` The extension Deployment does no longer specify memory limits. by @ialidzhikov [#409]
- `[OPERATOR]` Vertical scaling on CPU dropped in VPA resource by @MartinWeindel [#402]
# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Deletion of source DNSEntries must wait for completed deletion of target entries. by @MartinWeindel [gardener/external-dns-management#407]
## 🏃 Others

- `[OPERATOR]` Use AWS SDK v2 for the `aws-route53` provider by @MartinWeindel [gardener/external-dns-management#400]
- `[OPERATOR]` Remove annotation `gardener.cloud/operation=reconcile` on reconciliation by @MartinWeindel [gardener/external-dns-management#406]
- `[OPERATOR]` Bumps golang from 1.23.3 to 1.23.4. by @dependabot[bot] [gardener/external-dns-management#401]
- `[OPERATOR]` introduce `dns.gardener.cloud/target-hard-ignore` annotation by @MartinWeindel [gardener/external-dns-management#404]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.55.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.55.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.55.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.55.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.55.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.44.1</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🐛 Bug Fixes

- `[USER]` MCM update to v0.20.1: Increase VM status check timeout to 1200 seconds by @hebelsan [#939]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.44.1`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.44.1`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.44.1`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.44.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.44.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` Fix initial scheduling of `Shoot` with `NamespacedCloudProfile` reference. by @LucaBernstein [#11076]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` Fix initial scheduling of `Shoot` with `NamespacedCloudProfile` reference. by @LucaBernstein [#11076]

</details>

<details>
<summary><b>Update gardenlet to <code>1.110.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` Fix initial scheduling of `Shoot` with `NamespacedCloudProfile` reference. by @LucaBernstein [#11076]

</details>

<details>
<summary><b>Update shoot-flux to <code>0.13.0</code></b></summary>

## What's Changed
* 🤖 Update module github.com/onsi/gomega to v1.36.1 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/125
* Bump gardener to `v1.107` by @Duciwuci in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/127


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.12.0...v0.13.0

</details>

<details>
<summary><b>Update provider-alicloud to <code>1.57.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## ⚠️ Breaking Changes

- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-admission-alicloud admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#746]
## ✨ New Features

- `[OPERATOR]` Adjustments for additional deployment of extension and admission controller on Garden runtime cluster by gardener-operator. by @MartinWeindel [#746]
## 🏃 Others

- `[OPERATOR]` Fixes Alicloud bastion instance CPU architecture not aligning with the image CPU architecture in certain conditions by @tedteng [#747]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#749]
- `[OPERATOR]` Bump gardener/gardener from v1.98.4 to v1.108.1. by @MartinWeindel [#746]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.57.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.57.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.57.0`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.57.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.57.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.41.1</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🏃 Others

- `[OPERATOR]` Disable --allocate-node-cidrs in kube-controller-manager for kubernetes >= 1.31 as cloud-controller-manager takes over this responsibility. by @hebelsan [#937]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.41.1`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.41.1`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.41.1`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.41.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.41.1`


</details>

<details>
<summary><b>Update cert-management to <code>0.17.2</code></b></summary>

# [gardener/cert-management]

## 🏃 Others

- `[OPERATOR]` Support `DNSRecord.spec.class` by annotation `cert.gardener.cloud/dnsrecord-class` by @MartinWeindel [#384]
## 📖 Documentation

- `[DEVELOPER]` Document gaps between the community `cert-manager` and Gardener's `cert-management`. by @marc1404 [#379]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.17.2`
## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.17.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A permission issue was fixed that prevented the `VPAEvictionRequirements` controller to patch `VPA` resources in the garden runtime cluster, in case it is also registered as a seed. by @timuthy [#11143]
## 🏃 Others

- `[DEVELOPER]` The order of the predicates for extension controllers has been changed to ensure that class and types are checked first.   
  This avoids side effects by the passed predicates especially if the controller runs on the runtime cluster. by @oliver-goetz [#11133]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A permission issue was fixed that prevented the `VPAEvictionRequirements` controller to patch `VPA` resources in the garden runtime cluster, in case it is also registered as a seed. by @timuthy [#11143]
## 🏃 Others

- `[DEVELOPER]` The order of the predicates for extension controllers has been changed to ensure that class and types are checked first.   
  This avoids side effects by the passed predicates especially if the controller runs on the runtime cluster. by @oliver-goetz [#11133]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.110.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A permission issue was fixed that prevented the `VPAEvictionRequirements` controller to patch `VPA` resources in the garden runtime cluster, in case it is also registered as a seed. by @timuthy [#11143]
## 🏃 Others

- `[DEVELOPER]` The order of the predicates for extension controllers has been changed to ensure that class and types are checked first.   
  This avoids side effects by the passed predicates especially if the controller runs on the runtime cluster. by @oliver-goetz [#11133]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.2`


</details>
