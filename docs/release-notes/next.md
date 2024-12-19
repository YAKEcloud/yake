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
