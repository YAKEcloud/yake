# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `shoot-dns-service` no longer supports Shoots with Кubernetes version <= 1.28. by @RadaBDimitrova [#512]
## 🏃 Others

- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [#513]
- `[OPERATOR]` Upgrade github.com/gardener/external-dns-management from `v0.25.2` to `v0.26.0` by @MartinWeindel [#516]
- `[DEVELOPER]` migrate CICD-Pipelines to GitHub-Actions by @ccwienk [#505]

# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Deprecated `DNSEntry.spec.reference`. The field will be removed with a future release. by @marc1404 [gardener/external-dns-management#558]
- `[USER]` The values of provider secrets are now validated restrictedly. Because of this policy change, minor inconsistencies tolerated formerly can now lead to failing validation and therefore for failing provider states. Especially check for leading and trailing whitespaces, empty values or unknown secret keys. by @MartinWeindel [gardener/external-dns-management#535]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix panic on controller startup if a `DNSEntry` is annotated with `dns.gardener.cloud/target-hard-ignore=true` by @MartinWeindel [gardener/external-dns-management#554]
- `[USER]` Ensure ignored entries are not deleted on cleanup in an edge case. by @MartinWeindel [gardener/external-dns-management#505]
- `[USER]` Fix sporadic failing updates on switching entries between simple and weighted routing policy. by @MartinWeindel [gardener/external-dns-management#524]

## 🏃 Others

- `[OPERATOR]` Bump `openstack-designate` provider library `gophercloud` from version `v0.24.0` to `v2.7.0`. by @MartinWeindel [gardener/external-dns-management#481]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [gardener/external-dns-management#561]
- `[OPERATOR]` Avoid entry reconciliation starvation on high load by improving timing of zone reconciliations. by @MartinWeindel [gardener/external-dns-management#533]
- `[OPERATOR]` Implement validation of provider secrets. Trailing whitespaces are not ignored anymore. Empty values or unknown secret keys are not allowed anymore for security reasons. by @MartinWeindel [gardener/external-dns-management#535]
- `[OPERATOR]` Fix the `linux/arm64` image build. by @MartinWeindel [gardener/external-dns-management#551]
- `[OPERATOR]` Add validation for `DNSProvider` field `.spec.type` to restrict it to known types. Additional standard validations have been added for fields like `.spec.defaultTTL`, `domains.include`, `domains.exclude`, `zones.include`, `zones.exclude`. by @MartinWeindel [gardener/external-dns-management#557]
- `[DEVELOPER]` migrate CICD-Pipelines to GitHub-Actions by @ccwienk [gardener/external-dns-management#531]
- `[USER]` [provider type openstack-designate] Allow secret key `authURL` as alias of `OS_AUTH_URL` by @MartinWeindel [gardener/external-dns-management#504]
