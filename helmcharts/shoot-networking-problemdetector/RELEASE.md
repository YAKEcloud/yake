# [gardener/gardener-extension-shoot-networking-problemdetector]

## ✨ New Features

- `[USER]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#209]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.106.0 to 1.107.0. by @dependabot[bot] [#192]
- `[OPERATOR]` Add `patch` verb for the `gardener-extension-heartbeat` resource in the RBAC rules by @MartinWeindel [#234]
- `[OPERATOR]` Dashboard shows now additional IPv6 metrics for dual-stack clusters.  by @axel7born [#240]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#228]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.109.0 to 1.110.0. by @dependabot[bot] [#200]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#230]
- `[OPERATOR]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#232]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.107.0 to 1.108.0. by @dependabot[bot] [#196]
- `[OPERATOR]` `extension-shoot-netwroking-problemdetector` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#190]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.108.0 to 1.109.0. by @dependabot[bot] [#198]
- `[OPERATOR]` The health check controller was previously checking the health of ManagedResources `extension-shoot-networking-problemdetector-controller-shoot` and `extension-shoot-networking-problemdetector-agent-shoot`. This was redundant as gardenlet already checks and reports the health of ManagedResources with class `shoot` - see https://github.com/gardener/gardener/pull/7462. The health check controller of the extension is adapted to check the health of ManagedResource `extension-shoot-networking-problemdetector-controller-seed`. by @RadaBDimitrova [#214]
- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [#193]

## Helm Charts
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.27.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.27.0`
