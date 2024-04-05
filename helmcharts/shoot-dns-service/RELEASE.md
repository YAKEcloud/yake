# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-dns-service` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#276]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.0 to 1.22.1. by @dependabot[bot] [#304]
- `[OPERATOR]` Bumps golang from 1.22.1 to 1.22.2. by @dependabot[bot] [#317]
- `[OPERATOR]` Add Gardener error codes on DNS deletion and "no domain matching" errors. by @MartinWeindel [#303]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.90.0 to 1.91.0. by @dependabot[bot] [#311]
- `[OPERATOR]` An issue caused the test execution to fail due to outdated go version in the TestDefinition is now fixed. by @ialidzhikov [#302]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.89.0 to 1.90.0. by @dependabot[bot] [#306]
- `[USER]` Allow DNS provider type `rfc2136` by @MartinWeindel [#313]
# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Fix panic if source object referenced by a DNSAnnotation object has no annotations in its metadata. by @MartinWeindel [gardener/external-dns-management#363]
## 📖 Documentation

- `[USER]` Revised Cloudflare External DNS Management document to no longer recommend base64 encoding of the token in the secret. by @SeanKilleen [gardener/external-dns-management#361]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.46.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.46.0`
