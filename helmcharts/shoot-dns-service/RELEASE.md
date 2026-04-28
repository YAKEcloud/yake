# [github.com/gardener/gardener-extension-shoot-dns-service:v1.82.0]

## 🏃 Others
- `[OPERATOR]` Optionally restrict the number of DNSEntries allowed for default domains by setting the Helm value `defaultExternalProviderEntriesQuota`. Allows override of quota per shoot annotation, but only up to limit set with Helm value `defaultExternalProviderEntriesQuotaMax` by @MartinWeindel [[#690](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/690)]

# [github.com/gardener/external-dns-management:v0.40.0]

## 🏃 Others
- `[OPERATOR]` Enhances the DNSProvider resource status to include Gardener-standard `lastOperation` and `lastError` fields by @MartinWeindel [[#872](https://github.com/gardener/external-dns-management/pull/872)]

## application/spdx+json
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:1a12fbcf89cbca974d1a924ffaff629453298abfed73d81907d4ed9dbcedfcfb`
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:935a7091ef5be399d3fc6777b5a52984c240d62c3c1e34d9c44c79955ae5a528`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:39ea17183c710fb59c1197f2908fe883c2a2fa5634844d020154c30f21a258d2`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:ffeb23216e402e7447ef113d20c607a23a7e5229a9fea959655e4e14dda102a2`
## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.82.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.82.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.82.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.82.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.82.0`
