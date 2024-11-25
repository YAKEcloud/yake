# [gardener/gardener-extension-os-gardenlinux]

## ⚠️ Breaking Changes

- `[OPERATOR]` This extension is no longer able to run with Gardener versions lower than `v1.90` when the `UseGardenerNodeAgent` feature gate is disabled. by @rfranzke [#161]
## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#188]
## 🏃 Others

- `[DEVELOPER]` Static Application Security Testing (sast) with `gosec` got enabled on this repository. by @MrBatschner [#212]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#170]
- `[OPERATOR]` The cgroup drivers for containerd and kubelet are no longer configured through scripts that are run through `ExecStartPre` but instead through a mutating webhook that modifies the cgroup driver in the OSC. The cgroup driver always gets set to `systemd`. by @MrBatschner [#169]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.25.0`
## Docker Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.25.0`
