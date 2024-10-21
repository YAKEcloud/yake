# [gardener/cert-management]

## 📰 Noteworthy

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [#313]
## ✨ New Features

- `[USER]` Istio gateways: Allow to specify namespace for TLS secret by annotation `cert.gardener.cloud/secret-namespace`. by @MartinWeindel [#316]
- `[OPERATOR]` The Helm chart is published as OCI artifacts now. by @rfranzke [#281]
## 🐛 Bug Fixes

- `[USER]` Creating certificates with a given csr referencing a ca issuer do not throw a nil pointer exception anymore  by @RaphaelVogel [#234]
## 🏃 Others

- `[DEVELOPER]` Refactoring: introduce issuer key interface by @MartinWeindel [#240]
- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [#253]
- `[OPERATOR]` Add local Kind setup with knot-dns,peeble, and dns-controller-manager by @MartinWeindel [#181]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.16.0`
## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.16.0`
