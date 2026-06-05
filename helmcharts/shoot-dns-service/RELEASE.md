# [github.com/gardener/gardener-extension-shoot-dns-service:v1.85.0]

## 🏃 Others
- `[OPERATOR]` Annotate extension resource to make usage of next-generation controller visible by @MartinWeindel [[#746](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/746)]

# [github.com/gardener/external-dns-management:v0.43.0]

## 🐛 Bug Fixes
- `[OPERATOR]` [next-generation] Fix wildcard DNS records for alias targets with routing policy by @MartinWeindel [[#915](https://github.com/gardener/external-dns-management/pull/915)]

## 🏃 Others
- `[OPERATOR]` [next-generation] Adds a new `propagationWaitTime` configuration option (default: 10s) to `DNSEntryControllerConfig` that prevents phantom reads from authoritative DNS servers after a DNSEntries is deleted and immediately recreated with same spec. by @MartinWeindel [[#907](https://github.com/gardener/external-dns-management/pull/907)]
- `[OPERATOR]` [next-generation] use the default finalizer `dns.gardener.cloud/compound` instead of `gardendns-next-gen.dns.gardener.cloud/compound` by @MartinWeindel [[#912](https://github.com/gardener/external-dns-management/pull/912)]

## application/spdx+json
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:2892c73581e45611fbc1fb8fcec670a49cbe14c640a8329d3cae88d363953fa4`
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:89bb772d1030d72f91f64449d9744d1b7a6d3d0dbd52f8ad8886c2525e16661c`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:254831972c273959a4ad685a359bd41be0fdcd1c0aebc7e8b6479d2055ba8dc7`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:5542e459dcaee7e146070f3de78c0bf2f75a273f5aa185cdae64f6c4d6768ab4`
## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.85.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.85.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.85.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.85.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.85.0`
