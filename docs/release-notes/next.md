---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-dns-service to <code>1.67.1</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[OPERATOR]` Update CRD for `DNSEntry` (missing field `.status.dnsName`) (cherry-picking of #517) by @MartinWeindel [#520]


</details>

<details>
<summary><b>Update backup-s3 to <code>0.8.0</code></b></summary>

## General Changes

* improve resource naming of chart by using fullname rather than the static gardener-extension-backup-s3 (#18) @nschad
* Harden deployment to comply with pod security standard "restricted" (#19) @MichaelEischer


</details>

<details>
<summary><b>Update networking-calico to <code>1.49.1</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-calico` no longer supports Shoots with Кubernetes version <= 1.28. by @RadaBDimitrova [#684]
## 🏃 Others

- `[OPERATOR]` Admission controller and reconciliation now check the content of the networking provider configuration for validity and report problems. by @DockToFuture [#669]
- `[OPERATOR]` Enable the `usePodCidr` option for `ipam.cidr` during input validation. by @DockToFuture [#690]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [#686]
- `[OPERATOR]` Fixes a bug in Prometheus ScrapeConfigs that prevented Calico metrics from being collected. by @rickardsjp [#692]


</details>

<details>
<summary><b>Update networking-calico to <code>1.50.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-calico` no longer supports Shoots with Кubernetes version <= 1.28. by @RadaBDimitrova [#684]
## 🏃 Others

- `[OPERATOR]` Fixes a bug in Prometheus ScrapeConfigs that prevented Calico metrics from being collected. by @rickardsjp [#692]
- `[OPERATOR]` Admission controller and reconciliation now check the content of the networking provider configuration for validity and report problems. by @DockToFuture [#669]
- `[OPERATOR]` Enable the `usePodCidr` option for `ipam.cidr` during input validation. by @DockToFuture [#690]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [#686]


</details>
