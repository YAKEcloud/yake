# [gardener/cert-management]

## 🐛 Bug Fixes

- `[USER]` Updating certificates from source objects (like Ingress or Service) with first domain name longer than 64 character failed, as the commonName field was filled. It must be left empty in this case. by @MartinWeindel [#164]
## 🏃 Others

- `[OPERATOR]` Bump golang from 1.22.0 to 1.22.1 by @MartinWeindel [#165]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.12.1`
