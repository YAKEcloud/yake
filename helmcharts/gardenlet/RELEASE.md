# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Update Kubernetes dependencies (especially `k8s.io/client-go`) from `v0.26.3` to `v0.26.4` to resolve panic on working with special shoots. by @gardener-ci-robot [#8425]
- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8409]