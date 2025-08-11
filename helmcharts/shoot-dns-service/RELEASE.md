# [gardener/gardener-extension-shoot-dns-service]

## 📰 Noteworthy

- `[USER]` The provider secret data fields are now validated by the admission controller when configured in the shoot manifest in the provider config of the shoot-dns-service extension (at `spec.extensions.[@.type='shoot-dns-service'].providerConfig`) by @MartinWeindel [#528]
## 🐛 Bug Fixes

- `[OPERATOR]` Update CRD for `DNSEntry` (missing field `.status.dnsName`) by @MartinWeindel [#517]
## 🏃 Others

- `[OPERATOR]` Upgrade github.com/gardener/external-dns-management from `v0.26.0` to `v0.27.0` by @MartinWeindel [#530]
- `[DEVELOPER]` Update the custom resource definitions from the external-dns-management projects in the make target `generate`. by @MartinWeindel [#522]
## 📖 Documentation

- `[USER]` Documented requesting the creation of `AAAA` DNS records when using dual-stack load balancers on AWS. by @marc1404 [#527]
