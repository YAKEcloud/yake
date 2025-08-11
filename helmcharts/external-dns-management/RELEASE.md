# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` Extended validation of `DNSEntry` data fields. by @marc1404 [#564]
## 🐛 Bug Fixes

- `[USER]` Fixed conditionally requiring `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` only when `AWS_USE_CREDENTIALS_CHAIN` is not set (relevant for AWS Route53 `DNSProvider`). by @marc1404 [#578]
- `[USER]` Increased maximum length of PowerDNS provider `apiKey` to `8192`. by @Lappihuan [#576]
## 🏃 Others

- `[DEVELOPER]` Refactor `DNSHandlerAdapter` implementations to avoid provider specific dependencies on reuse. by @MartinWeindel [#589]
- `[OPERATOR]` Allow values `local` and `gdch-dns` for provider types by @MartinWeindel [#589]
