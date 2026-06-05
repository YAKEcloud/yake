# [github.com/gardener/external-dns-management:v0.43.0]

## 🐛 Bug Fixes
- `[OPERATOR]` [next-generation] Fix wildcard DNS records for alias targets with routing policy by @MartinWeindel [[#915](https://github.com/gardener/external-dns-management/pull/915)]

## 🏃 Others
- `[OPERATOR]` [next-generation] Adds a new `propagationWaitTime` configuration option (default: 10s) to `DNSEntryControllerConfig` that prevents phantom reads from authoritative DNS servers after a DNSEntries is deleted and immediately recreated with same spec. by @MartinWeindel [[#907](https://github.com/gardener/external-dns-management/pull/907)]
- `[OPERATOR]` [next-generation] use the default finalizer `dns.gardener.cloud/compound` instead of `gardendns-next-gen.dns.gardener.cloud/compound` by @MartinWeindel [[#912](https://github.com/gardener/external-dns-management/pull/912)]

## application/spdx+json
- dns-controller-manager-next-generation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:58385bd3d737fe58b3480b3dd58080baaca215be58eb981b63986d8743bdf593`
- dns-controller-manager-next-generation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation@sha256:dae832b0c5046d116f43315d7a3328458245675b088d8f39a8874189e755fa48`
- dns-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:0e6d5d166f1362b4199fbfa2f99944df9052bdd1ecab6fb42790cf805cea24e0`
- dns-controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager@sha256:b37c2e63b764b3c995348f521cb9f7ce0405013796b58532471e4099af1d7dce`
## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.43.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.43.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.43.0`
