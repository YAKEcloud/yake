# [gardener/cert-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#156]
## 🏃 Others

- `[OPERATOR]` Update expirationDate if secret is shared between certs by @MartinWeindel [#152]
- `[OPERATOR]` Updated dependencies controller-manager-library and kubernetes from `v1.28.2` to `v1.28.3` by @MartinWeindel [#149]
- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [#148]
- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [#154]
- `[USER]` Improve message if DNS entry is not getting ready. by @MartinWeindel [#151]
- `[DEVELOPER]` Remove vendoring by @MartinWeindel [#157]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.11.4`
