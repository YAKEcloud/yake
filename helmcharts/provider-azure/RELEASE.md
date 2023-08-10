# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[USER]` The node-controller-manager is now set to keep setting deprecated node labels for k8s clusters of version `>=1.26.0, <1.28.0` to ensure pods using persistent volumes with node affinities are scheduled in the cluster. by @kon-angelo [#718]