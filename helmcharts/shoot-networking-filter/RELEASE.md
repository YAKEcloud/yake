# [gardener/gardener-extension-shoot-networking-filter]

## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.1 to 1.22.2. by @dependabot[bot] [#132]
- `[OPERATOR]` Bumps golang from 1.22.3 to 1.22.4. by @dependabot[bot] [#146]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.97.1 to 1.98.0. by @dependabot[bot] [#153]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.96.1 to 1.97.0. by @dependabot[bot] [#150]
- `[OPERATOR]` Bumps golang from 1.22.2 to 1.22.3. by @dependabot[bot] [#139]
- `[OPERATOR]` Bumps golang from 1.22.4 to 1.22.5. by @dependabot[bot] [#156]
- `[OPERATOR]` The `resources.requests.cpu` and `resources.requests.memory` of the `egress-filter-applier` container have been reduced to `5m` and `20Mi`, respectively. by @plkokanov [#160]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.93.0 to 1.94.0. by @dependabot[bot] [#137]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.98.0 to 1.99.0. by @dependabot[bot] [#158]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.94.0 to 1.95.0. by @dependabot[bot] [#140]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.92.0 to 1.93.0. by @dependabot[bot] [#135]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.95.0 to 1.96.1. by @dependabot[bot] [#145]
- `[OPERATOR]` Add OCM-Component-Descriptor-Labels required for ImageVector-Generation. by @ccwienk [#154]
# [gardener/egress-filter-refresher]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/egress-filter-refresher#25]

## Docker Images
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.19.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.19.0`
