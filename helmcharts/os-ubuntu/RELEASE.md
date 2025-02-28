# [gardener/gardener-extension-os-ubuntu]

## ⚠️ Breaking Changes

- `[OPERATOR]` The option `values.disableAutoUpgrades` was moved under the config directive and therefore must be configured like this now `values.config.disableUnattendedUpgrades` by @nschad [#178]
## 🐛 Bug Fixes

- `[OPERATOR]` The provision OSC script does not run anymore when the node is rebooting.  by @MrBatschner [#184]
## 🏃 Others

- `[OPERATOR]` Allows the operator to deploy nodes with the timesyncing service `ntp` to be enabled and configured by default by @nschad [#178]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.29.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.29.0`
