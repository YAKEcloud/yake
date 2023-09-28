# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]