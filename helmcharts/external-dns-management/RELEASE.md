# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Ensure ignored entries are not deleted on cleanup in an edge case. by @MartinWeindel [#505]
## 🏃 Others

- `[USER]` [provider type openstack-designate] Allow secret key `authURL` as alias of `OS_AUTH_URL` by @MartinWeindel [#504]
- `[OPERATOR]` Bump `openstack-designate` provider library `gophercloud` from version `v0.24.0` to `v2.7.0`. by @MartinWeindel [#481]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.25.1`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.25.1`
