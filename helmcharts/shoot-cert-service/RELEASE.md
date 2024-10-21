# [gardener/gardener-extension-shoot-cert-service]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#282]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.99.0 to 1.100.0. by @dependabot[bot] [#283]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.100.0 to 1.101.0. by @dependabot[bot] [#290]
- `[OPERATOR]` Bumps golang from 1.23.0 to 1.23.1. by @dependabot[bot] [#297]
- `[OPERATOR]` Bumps golang from 1.22.3 to 1.22.4. by @dependabot[bot] [#267]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.96.1 to 1.97.0. by @dependabot[bot] [#271]
- `[OPERATOR]` Bumps golang from 1.22.4 to 1.22.5. by @dependabot[bot] [#276]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.101.0 to 1.102.0. by @dependabot[bot] [#294]
- `[OPERATOR]` Bumps golang from 1.22.6 to 1.23.0. by @dependabot[bot] [#292]
- `[OPERATOR]` Bumps golang from 1.23.1 to 1.23.2. by @dependabot[bot] [#299]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.103.0 to 1.105.0. by @dependabot[bot] [#301]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.97.0 to 1.98.0. by @dependabot[bot] [#274]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.98.0 to 1.99.0. by @dependabot[bot] [#278]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.95.0 to 1.96.1. by @dependabot[bot] [#266]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [#302]
# [gardener/cert-management]

## 📰 Noteworthy

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [gardener/cert-management#313]
## ✨ New Features

- `[OPERATOR]` The Helm chart is published as OCI artifacts now. by @rfranzke [gardener/cert-management#281]
- `[OPERATOR]` Use `dnsrecords.extensions.gardener.cloud` API as an alternative to `dnsentries.dns.gardener.cloud` for DNS challenges. by @MartinWeindel [gardener/cert-management#177]
- `[USER]` Istio gateways: Allow to specify namespace for TLS secret by annotation `cert.gardener.cloud/secret-namespace`. by @MartinWeindel [gardener/cert-management#316]
## 🐛 Bug Fixes

- `[USER]` Creating certificates with a given csr referencing a ca issuer do not throw a nil pointer exception anymore  by @RaphaelVogel [gardener/cert-management#234]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [gardener/cert-management#253]
- `[OPERATOR]` Add local Kind setup with knot-dns,peeble, and dns-controller-manager by @MartinWeindel [gardener/cert-management#181]
- `[DEVELOPER]` Refactoring: introduce issuer key interface by @MartinWeindel [gardener/cert-management#240]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.45.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.45.0`
