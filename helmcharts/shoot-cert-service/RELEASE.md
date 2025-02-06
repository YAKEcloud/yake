# [gardener/cert-management]

## 🐛 Bug Fixes

- `[USER]` Fix exhaustion of request quotas on concurrent certificates with same domain name by @MartinWeindel [gardener/cert-management#399]
## 🏃 Others

- `[OPERATOR]` Support `DNSRecord.spec.class` by annotation `cert.gardener.cloud/dnsrecord-class` by @MartinWeindel [gardener/cert-management#384]
- `[DEPENDENCY]` Update module `gardener/gardener` to `v1.111.1`. by @gardener-ci-robot [gardener/cert-management#398]
## 📖 Documentation

- `[DEVELOPER]` Document gaps between the community `cert-manager` and Gardener's `cert-management`. by @marc1404 [gardener/cert-management#379]
# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.109.0 to 1.110.0. by @dependabot[bot] [#324]
- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#335]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.48.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.48.0`
