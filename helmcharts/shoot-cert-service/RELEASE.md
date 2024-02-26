# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.0 to 1.84.1. by @dependabot[bot] [#216]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.85.0 to 1.86.0. by @dependabot[bot] [#222]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.86.0 to 1.87.0. by @dependabot[bot] [#228]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.87.0 to 1.88.0. by @dependabot[bot] [#232]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.88.0 to 1.89.0. by @dependabot[bot] [#233]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.83.0 to 1.84.0. by @dependabot[bot] [#215]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.1 to 1.85.0. by @dependabot[bot] [#218]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.1 to 1.83.0. by @dependabot[bot] [#212]
- `[DEVELOPER]` Remove vendoring from project by @MartinWeindel [#227]
# [gardener/cert-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/cert-management#156]
## ✨ New Features

- `[USER]` Allow certificates without common name. As the common name is restricted to 64 characters, this means it is now possible to create certificates for domains longer than 64 characters without needing to set the common name to a shorter domain name. by @MartinWeindel [gardener/cert-management#150]
## 🏃 Others

- `[DEVELOPER]` Remove vendoring by @MartinWeindel [gardener/cert-management#157]
- `[OPERATOR]` Bump golang.org/x/crypto from 0.14.0 to 0.17.0 by @dependabot[bot] [gardener/cert-management#158]
- `[OPERATOR]` Update expirationDate if secret is shared between certs by @MartinWeindel [gardener/cert-management#152]
- `[OPERATOR]` Bumps golang from 1.21.5 to 1.21.6. by @dependabot[bot] [gardener/cert-management#159]
- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [gardener/cert-management#148]
- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [gardener/cert-management#154]
- `[OPERATOR]` Updated dependencies controller-manager-library and kubernetes from `v1.28.2` to `v1.28.3` by @MartinWeindel [gardener/cert-management#149]
- `[OPERATOR]` Bumps golang from 1.21.6 to 1.22.0. by @dependabot[bot] [gardener/cert-management#161]
- `[USER]` Improve message if DNS entry is not getting ready. by @MartinWeindel [gardener/cert-management#151]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.40.0`
