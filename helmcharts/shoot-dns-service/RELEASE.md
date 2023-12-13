# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#266]
## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that caused shoot clusters with a `shoot-dns-service` extension configuration not to be validated during creation. Potential validation errors only happened later and remained unnoticed, e.g. when update requests from Gardenlet were denied and shoot reconciliation got stuck. by @timuthy [#270]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [#267]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.83.0 to 1.84.0. by @dependabot[bot] [#261]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.1 to 1.85.0. by @timuthy [#266]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.0 to 1.84.1. by @dependabot[bot] [#262]
# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[USER]` `NS` records are not retrieved anymore for all accessible hosted zones to avoid reading all DNS record sets of all hosted zones periodically independently if they are used. Only hosted zones with active `DNSProviders` are synched, but without caring about consequences of `NS` records for subdomains. If there are many large hosted zones accessible for given credentials and there are only  `DNSProviders` using a few of these zones (either by domain or zone include), the period synchronisation of the zone state for all other hosted zones is avoided. This can result in a significant reduction of requests to the provider backend. As a downside of this change, applying a `DNSEntry` for a forwarded subdomain now results in a DNS record set in the parent hosted zone, if the real hosted zone is unknown to the controller. Formerly, applying such a `DNSEnty` resulted in an error state.   
  No action is necessary from the users, this is only a "heads up" for the changed behaviour if `NS` records are used for subdomains. by @MartinWeindel [gardener/external-dns-management#336]
## 🏃 Others

- `[USER]` Validate provider domain includes and excludes for forbidden wildcard domains. by @MartinWeindel [gardener/external-dns-management#335]
- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [gardener/external-dns-management#333]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `eu.gcr.io/gardener-project/gardener/extensions/admission-shoot-dns-service:v1.41.0`
- gardener-extension-shoot-dns-service: `eu.gcr.io/gardener-project/gardener/extensions/shoot-dns-service:v1.41.0`
