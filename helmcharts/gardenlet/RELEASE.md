# [github.com/gardener/gardener:v1.125.3]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the `plutono-datasources` ConfigMap to be reconciled by 2 ManagedResources when Seed is Garden managed by `gardener-operator` is now fixed. Occasionally, the issue was preventing successful Seed deletion. by @gardener-ci-robot [[#12796](https://github.com/gardener/gardener/pull/12796)]
