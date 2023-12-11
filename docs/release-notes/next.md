---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-networking-filter to <code>0.16.0</code></b></summary>

# [gardener/gardener-extension-shoot-networking-filter]

## ✨ New Features

- `[USER]` Update image of egress-filter to 0.14.0 by @axel7born [#107]
- `[USER]` Mount `/run/xtables.lock` to prevent concurrent modifications of iptables rules. by @axel7born [#106]
## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.0 to 1.84.1. by @dependabot[bot] [#102]
- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [#105]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.1 to 1.85.0. by @dependabot[bot] [#104]

## Docker Images
- gardener-extension-shoot-networking-filter: `eu.gcr.io/gardener-project/gardener/extensions/shoot-networking-filter:v0.16.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.51.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.81.6`->`v1.83.2` by @shafeeqes [#828]
- `[OPERATOR]` Add documentation for the "flow" infrastructure reconciler. by @kon-angelo [#827]
- `[DEVELOPER]` Add new unit tests. by @axel7born [#829]

## Docker Images
- gardener-extension-admission-aws: `eu.gcr.io/gardener-project/gardener/extensions/admission-aws:v1.51.0`
- gardener-extension-provider-aws: `eu.gcr.io/gardener-project/gardener/extensions/provider-aws:v1.51.0`


</details>
