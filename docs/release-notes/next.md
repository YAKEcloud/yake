---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-gcp to <code>1.40.0</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[USER]` Remove redundant firewall rule `*-allow-external-access` that allowed traffic from all 0 by @kon-angelo [#876]
## 🏃 Others

- `[OPERATOR]` Check priority of firewall rules in integration tests by @kon-angelo [#877]
- `[OPERATOR]` Added validation to prevent IPv6-only/dual-stack clusters as they are not supported, yet. by @ScheererJ [#878]
- `[OPERATOR]` Update gardener/gardener to v1.105.0 by @hebelsan [#869]
- `[OPERATOR]` Updating CSI driver provisioner ClusterRole rules by @hebelsan [#867]
- `[OPERATOR]` Prevent unnecessary CNI side car containers for SNAT to upstream DNS servers by @ScheererJ [#868]
# [gardener/machine-controller-manager]

## ✨ New Features

- `[DEVELOPER]` MCM replaces the magic string `<<MACHINE_NAME>>` in user data with the name of the machine when it is bootstrapped. by @oliver-goetz [gardener/machine-controller-manager#919]
- `[DEVELOPER]` MCM adds the name of the machine to `node.gardener.cloud/machine-name` label of the corresponding node. by @oliver-goetz [gardener/machine-controller-manager#919]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fixed bug that removed the shoot-- prefix from control cluster namespace for integration tests using the gardener local setup case by @thiyyakat [gardener/machine-controller-manager#935]
- `[OPERATOR]` Fixed a bug where failure of machine initialization caused label updates to not happen.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[OPERATOR]` Fixed a bug where the `Unitialised` error code was blocking machine deletion by @rishabh-11 [gardener/machine-controller-manager#928]
## 🏃 Others

- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.3` -> `v0.31.0` by @ary1992 [gardener/machine-controller-manager#938]
- `[OPERATOR]` golangci-lint will now be used as the linter instead of the older golint by @aaronfern [gardener/machine-controller-manager#929]
- `[OPERATOR]` Drain timeout is now correctly honored for Pod eviction during Machine Drain by @sssash18 [gardener/machine-controller-manager#920]
- `[OPERATOR]` Golang version used is now upgraded to `1.22.5` by @aaronfern [gardener/machine-controller-manager#929]
- `[OPERATOR]` `getVMStatus` always redirects to `InitiateDrain`. It also populates the node label on the machine object by checking `node.gardener.cloud/machine-name` label on the nodes.  by @thiyyakat [gardener/machine-controller-manager#940]
## 📖 Documentation

- `[OPERATOR]` Broken API doc links are now fixed by @rishabh-11 [gardener/machine-controller-manager#927]
# [gardener/machine-controller-manager-provider-gcp]

## 🏃 Others

- `[OPERATOR]` golangci-lint will now be used as the linter instead of the older golint by @aaronfern [gardener/machine-controller-manager-provider-gcp#127]
- `[USER]` Golang version updated to `1.22.5` by @rishabh-11 [gardener/machine-controller-manager-provider-gcp#126]
- `[DEVELOPER]` MCM can now retrieve the project ID from a "projectID" data key, allowing support for credential configurations that do not directly contain the project ID. One such case is a [workload identity credential configuration](https://cloud.google.com/iam/docs/workload-download-cred-and-grant-access). by @dimityrmirchev [gardener/machine-controller-manager-provider-gcp#130]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.40.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.40.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.40.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.40.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.40.0`


</details>
