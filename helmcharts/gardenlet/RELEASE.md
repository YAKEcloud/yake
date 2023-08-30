# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which was causing the garbage collector in `gardener-resource-manager` to wrongfully collect `Secret`s related to `ManagedResource`s when the source and the target cluster are equal. by @gardener-ci-robot [#8403]