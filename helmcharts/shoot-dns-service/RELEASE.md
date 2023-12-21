# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` rfc2136 provider expects TSIGSecret in base64 encoded format (previously base64 decoded was expected) by @Avarei [gardener/external-dns-management#347]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/external-dns-management#342]
## ✨ New Features

- `[USER]` [AWS Route53] Create an additional alias `AAAA` record for load balancers (NLBs) if load balancer target domain name has an IPv6 address. by @MartinWeindel [gardener/external-dns-management#341]
## 🏃 Others

- `[DEVELOPER]` Remove vendoring by @MartinWeindel [gardener/external-dns-management#345]
- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [gardener/external-dns-management#338]
# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.85.0 to 1.86.0. by @MartinWeindel [#268]
- `[DEVELOPER]` Remove vendoring from project by @MartinWeindel [#268]