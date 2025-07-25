# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Deprecated `DNSEntry.spec.reference`. The field will be removed with a future release. by @marc1404 [#558]
- `[USER]` The values of provider secrets are now validated restrictedly. Because of this policy change, minor inconsistencies tolerated formerly can now lead to failing validation and therefore for failing provider states. Especially check for leading and trailing whitespaces, empty values or unknown secret keys. by @MartinWeindel [#535]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix panic on controller startup if a `DNSEntry` is annotated with `dns.gardener.cloud/target-hard-ignore=true` by @MartinWeindel [#554]
- `[USER]` Ensure ignored entries are not deleted on cleanup in an edge case. by @MartinWeindel [#505]
- `[USER]` Fix sporadic failing updates on switching entries between simple and weighted routing policy. by @MartinWeindel [#524]
## 🏃 Others

- `[OPERATOR]` Bump `openstack-designate` provider library `gophercloud` from version `v0.24.0` to `v2.7.0`. by @MartinWeindel [#481]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [#561]
- `[OPERATOR]` Avoid entry reconciliation starvation on high load by improving timing of zone reconciliations. by @MartinWeindel [#533]
- `[OPERATOR]` Implement validation of provider secrets. Trailing whitespaces are not ignored anymore. Empty values or unknown secret keys are not allowed anymore for security reasons. by @MartinWeindel [#535]
- `[OPERATOR]` Fix the `linux/arm64` image build. by @MartinWeindel [#551]
- `[OPERATOR]` Add validation for `DNSProvider` field `.spec.type` to restrict it to known types. Additional standard validations have been added for fields like `.spec.defaultTTL`, `domains.include`, `domains.exclude`, `zones.include`, `zones.exclude`. by @MartinWeindel [#557]
- `[DEVELOPER]` migrate CICD-Pipelines to GitHub-Actions by @ccwienk [#531]
- `[USER]` [provider type openstack-designate] Allow secret key `authURL` as alias of `OS_AUTH_URL` by @MartinWeindel [#504]
