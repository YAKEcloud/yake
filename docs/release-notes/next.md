---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.18.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` The Istio resource `Gateway` can now be annotated with `dns.gardener.cloud/dnsnames='*'` to enable the automatic creation of `DNSEntries` for domain names extracted from hosts fields in this resource or related `VirtualServices` resources.  
  The `Gateway` and `HTTPRoute` resources from the Gateway API are supported in a similar way. by @MartinWeindel [#354]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.34.1</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🏃 Others

- `[OPERATOR]` Admission controller will be deployed with the LEADER_ELECTION_NAMESPACE set to the pod namespace by @kon-angelo [#700]
- `[OPERATOR]` Enable storage pool in CSI driver by @kon-angelo [#698]

## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.34.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.34.1`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.12</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.11...0.6.12

</details>

<details>
<summary><b>Update dashboard to <code>1.73.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Enhanced volume management for OpenStack workers  
  In the last dashboard release, we inadvertently introduced an issue that caused the loss of custom volume sizes for OpenStack workers when they were updated via the dashboard. This release brings a fix to this bug, ensuring that your custom volume configurations are retained post-update.  
  Additionally, we've improved the storage size configuration interface. Now, it's easier to distinguish between default and custom volumes. by @grolu [#1722]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.73.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.73.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Enhanced volume management for OpenStack workers  
  In the last dashboard release, we inadvertently introduced an issue that caused the loss of custom volume sizes for OpenStack workers when they were updated via the dashboard. This release brings a fix to this bug, ensuring that your custom volume configurations are retained post-update.  
  Additionally, we've improved the storage size configuration interface. Now, it's easier to distinguish between default and custom volumes. by @grolu [#1722]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.73.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.18.1</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Uncached listing of virtual services and httproutes by @MartinWeindel [#355]
- `[OPERATOR]` Ignore generated load balancer services of gateways. by @MartinWeindel [#355]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.1`


</details>

<details>
<summary><b>Update provider-aws to <code>1.52.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` Admission controller will be deployed with the LEADER_ELECTION_NAMESPACE set to the pod namespace by @kon-angelo [#879]

## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.52.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.52.1`


</details>
