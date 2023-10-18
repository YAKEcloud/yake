# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @rfranzke [#8664]
## 🏃 Others

- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @gardener-ci-robot [#8658]