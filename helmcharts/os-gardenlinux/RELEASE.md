# [gardener/gardener-extension-os-gardenlinux]

## 🐛 Bug Fixes

- `[OPERATOR]` Previous removal of `11-exec_config.conf` systemd drop-in for containerd from the provision OSC was reverted, the file gets created again. by @MrBatschner [#232]
- `[OPERATOR]` The provision OSC script does not run anymore when the node is rebooting.  by @oliver-goetz [#231]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.29.0`
## Docker Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.29.0`
