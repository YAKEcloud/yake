# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.96.1 to 1.97.0. by @dependabot[bot] [#342]
- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-shoot-dns-service` Helm chart. by @timuthy [#353]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.95.0 to 1.96.1. by @dependabot[bot] [#336]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.97.0 to 1.98.0. by @dependabot[bot] [#346]
- `[OPERATOR]` Bumps golang from 1.22.3 to 1.22.4. by @dependabot[bot] [#338]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.98.0 to 1.99.0. by @dependabot[bot] [#355]
# [gardener/external-dns-management]

## ✨ New Features

- `[OPERATOR]` The address lookups for domain names in `DNSEntries` to create  `A` or `AAAA` records has been moved to a separate background processing to avoid periodic reconciliation of such `DNSEntries`.  
  Additionally, it is now possible to create `A` or `AAAA` records instead of a `CNAME` record for a single domain name target by specifying `.spec.resolveTargetsToAddresses: true`. by @MartinWeindel [gardener/external-dns-management#377]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.4 to 1.22.5. by @dependabot[bot] [gardener/external-dns-management#376]
- `[OPERATOR]` Update golang from `1.22.3` to `1.22.4` by @MartinWeindel [gardener/external-dns-management#372]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.49.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.49.0`
