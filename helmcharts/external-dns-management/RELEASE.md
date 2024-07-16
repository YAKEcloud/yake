# [gardener/external-dns-management]

## ✨ New Features

- `[OPERATOR]` The address lookups for domain names in `DNSEntries` to create  `A` or `AAAA` records has been moved to a separate background processing to avoid periodic reconciliation of such `DNSEntries`.  
  Additionally, it is now possible to create `A` or `AAAA` records instead of a `CNAME` record for a single domain name target by specifying `.spec.resolveTargetsToAddresses: true`. by @MartinWeindel [#377]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.4 to 1.22.5. by @dependabot[bot] [#376]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.19.0`
