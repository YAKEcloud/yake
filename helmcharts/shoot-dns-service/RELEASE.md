# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Downgrade dns-controller-manager from `v0.16.1` to `v0.16.0` to disable newly introduced feature "Create alias AAAA records for load balancers if target domain name has an IPv6 address" because of leaking `AAAA` under some circumstances. by @MartinWeindel [#279]