# [gardener/egress-filter-refresher]

## ✨ New Features

- `[USER]` `gosec` was introduced for Static Application Security Testing (SAST). by @ScheererJ [gardener/egress-filter-refresher#50]
- `[OPERATOR]` On switching the blocking mode, previously active egress filter rules are removed from the node. by @domdom82 [gardener/egress-filter-refresher#49]
# [gardener/gardener-extension-shoot-networking-filter]

## ✨ New Features

- `[USER]` Ingress filtering may now be turned on/off per worker-group by @domdom82 [#186]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [#190]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @ScheererJ [#181]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.106.0 to 1.107.0. by @dependabot[bot] [#189]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.104.0 to 1.105.0. by @dependabot[bot] [#180]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.105.0 to 1.106.0. by @dependabot[bot] [#185]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.21.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.21.0`
## Docker Images
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.21.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.21.0`
