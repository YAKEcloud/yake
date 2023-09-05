---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update os-gardenlinux to <code>0.21.0</code></b></summary>

# [gardener/gardener-extension-os-gardenlinux]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-os-gardenlinux` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#113]
## 🏃 Others

- `[OPERATOR]` The Garden Linux OS extension now features support for vSMP MemoryOne and Garden Linux. It will now consider itself responsible for a new type `OperatingSystemConfig/memoryone-gardenlinux` and understands a `providerConfig` with which certain parameters of MemoryOne can be configured. by @MrBatschner [#116]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.70.2 -> v1.72.0 by @dependabot[bot] [#105]

</details>

<details>
<summary><b>Update cert-management to <code>0.11.1</code></b></summary>

# [gardener/cert-management]

## 🏃 Others

- `[OPERATOR]` Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel [#140]
- `[OPERATOR]` Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel [#138]

</details>

<details>
<summary><b>Update dashboard to <code>1.69.2</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Errors shown as notification alerts sometimes did not contain the failure reason by @grolu [#1539]
- `[USER]` Fixed error handling for manage workers and hibernation dialogs. The dialogs did not show all error messages and resetted to empty broken state on errors by @grolu [#1539]

</details>

<details>
<summary><b>Update dashboard to <code>1.69.2</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Errors shown as notification alerts sometimes did not contain the failure reason by @grolu [#1539]
- `[USER]` Fixed error handling for manage workers and hibernation dialogs. The dialogs did not show all error messages and resetted to empty broken state on errors by @grolu [#1539]

</details>
