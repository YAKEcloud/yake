# [gardener/gardener-metrics-exporter]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#92]
## 🐛 Bug Fixes

- `[OPERATOR]` Helm chart upgrades no longer fail due to the immutable `Deployment.spec.selector` field. In order to upgrade to this version, the `gardener-metrics-exporter` Deployment needs to be deleted first. by @timebertt [#94]
## 🏃 Others

- `[OPERATOR]` Upgrade dependencies  
  Upgrade golang to 1.22 by @rickardsjp [#96]
- `[OPERATOR]` Upgrade go to 1.22, update base image to distroless based on Debian 12, and exchange the linter. by @rickardsjp [#97]
- `[OPERATOR]` Adds: garden_shoot_worker_node_max_total and garden_shoot_worker_node_min_total. Also gives insight into the worker type (for example for OpenStack the Flavor name). by @Sinscerly [#95]

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.29.0`
