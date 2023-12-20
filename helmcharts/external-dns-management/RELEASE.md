# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#342]
- `[OPERATOR]` rfc2136 provider expects TSIGSecret in base64 encoded format (previously base64 decoded was expected) by @Avarei [#347]
## ✨ New Features

- `[USER]` [AWS Route53] Create an additional alias `AAAA` record for load balancers (NLBs) if load balancer target domain name has an IPv6 address. by @MartinWeindel [#341]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [#338]
- `[DEVELOPER]` Remove vendoring by @MartinWeindel [#345]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.16.1`
