# [gardener/cert-management]

## ✨ New Features

- `[USER]` Allow certificates without common name. As the common name is restricted to 64 characters, this means it is now possible to create certificates for domains longer than 64 characters without needing to set the common name to a shorter domain name. by @MartinWeindel [#150]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.6 to 1.22.0. by @dependabot[bot] [#161]
- `[OPERATOR]` Bumps golang from 1.21.5 to 1.21.6. by @dependabot[bot] [#159]
- `[OPERATOR]` Bump golang.org/x/crypto from 0.14.0 to 0.17.0 by @dependabot[bot] [#158]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.12.0`
