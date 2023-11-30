# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[USER]` `NS` records are not retrieved anymore for all accessible hosted zones to avoid reading all DNS record sets of all hosted zones periodically independently if they are used. Only hosted zones with active `DNSProviders` are synched, but without caring about consequences of `NS` records for subdomains. If there are many large hosted zones accessible for given credentials and there are only  `DNSProviders` using a few of these zones (either by domain or zone include), the period synchronisation of the zone state for all other hosted zones is avoided. This can result in a significant reduction of requests to the provider backend. As a downside of this change, applying a `DNSEntry` for a forwarded subdomain now results in a DNS record set in the parent hosted zone, if the real hosted zone is unknown to the controller. Formerly, applying such a `DNSEnty` resulted in an error state.   
  No action is necessary from the users, this is only a "heads up" for the changed behaviour if `NS` records are used for subdomains. by @MartinWeindel [#336]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [#333]
- `[USER]` Validate provider domain includes and excludes for forbidden wildcard domains. by @MartinWeindel [#335]

## Docker Images
- dns-controller-manager: `eu.gcr.io/gardener-project/dns-controller-manager:v0.16.0`
