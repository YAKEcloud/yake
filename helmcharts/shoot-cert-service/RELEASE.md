# [gardener/cert-management]

## 🐛 Bug Fixes

- `[USER]` Updating certificates from source objects (like Ingress or Service) with first domain name longer than 64 character failed, as the commonName field was filled. It must be left empty in this case. by @MartinWeindel [gardener/cert-management#164]
## 🏃 Others

- `[OPERATOR]` Bump golang from 1.22.0 to 1.22.1 by @MartinWeindel [gardener/cert-management#165]
# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.0 to 1.22.1. by @dependabot[bot] [#236]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.41.0`
