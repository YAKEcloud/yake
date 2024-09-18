---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-calico to <code>1.41.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#445]
## 🏃 Others

- `[OPERATOR]` Add static resource allocation autoscaling mode for calico node/typha (autoScaling.mode: static). by @ScheererJ [#464]
- `[OPERATOR]` The race between a calico-node instance shutting down and a new one coming up is mitigated by setting `NetworkUnavailable` condition properly some time after initialization. by @ScheererJ [#477]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.41.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.41.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.41.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.41.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.41.0`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.17</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.16...0.7.17

</details>

<details>
<summary><b>Update provider-hcloud to <code>0.6.31</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.31

</details>

<details>
<summary><b>Update shoot-flux to <code>0.7.0</code></b></summary>

## What's Changed
* Add ability to add args/env to deployment by @maboehm in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/93


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.6.1...v0.7.0

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.18</code></b></summary>

## What's Changed
* Add hcloud ccx[1-6]3 instances, remove ccx*1 and ccx*2 by @j2L4e in https://github.com/gardener-community/cloudprofiles/pull/29


**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.17...0.7.18

</details>

<details>
<summary><b>Update backup-s3 to <code>0.4.1</code></b></summary>

## General Changes

* Generate new controller-registration.yaml


</details>
