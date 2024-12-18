# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` The following extension chart values are changed:  
  - `.dnsControllerManager.vpa.minAllowed` -> `.dnsControllerManager.vpa.resourcePolicy.minAllowed`  
    
  Make sure to adapt your values to the breaking change when upgrading to this version of the extension. by @ialidzhikov [#409]
## 🐛 Bug Fixes

- `[OPERATOR]` Ensure record for DNSEntries are left untouched during migration. by @MartinWeindel [#408]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.108.0 to 1.109.0. by @dependabot[bot] [#403]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.109.0 to 1.110.0. by @dependabot[bot] [#406]
- `[OPERATOR]` The extension Deployment does no longer specify memory limits. by @ialidzhikov [#409]
- `[OPERATOR]` Vertical scaling on CPU dropped in VPA resource by @MartinWeindel [#402]
# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Deletion of source DNSEntries must wait for completed deletion of target entries. by @MartinWeindel [gardener/external-dns-management#407]
## 🏃 Others

- `[OPERATOR]` Use AWS SDK v2 for the `aws-route53` provider by @MartinWeindel [gardener/external-dns-management#400]
- `[OPERATOR]` Remove annotation `gardener.cloud/operation=reconcile` on reconciliation by @MartinWeindel [gardener/external-dns-management#406]
- `[OPERATOR]` Bumps golang from 1.23.3 to 1.23.4. by @dependabot[bot] [gardener/external-dns-management#401]
- `[OPERATOR]` introduce `dns.gardener.cloud/target-hard-ignore` annotation by @MartinWeindel [gardener/external-dns-management#404]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.55.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.55.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.55.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.55.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.55.0`
