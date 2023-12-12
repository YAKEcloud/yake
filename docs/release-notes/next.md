---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

:::danger

This update definitely needs backups to be configured. If you are running a 23KE instance without backups, enable backups before performing this update.

:::


In order to align the versions of `etcd` and `etcd-backup-restore` with gardener/etcd-druid, we perform a downgrade to etcd-3.4.26 and an upgrade to etcd-backup-restore-0.24.7. This is also expected to improve the stability of the backup process. For the upgrade, you need to
- Make sure you have an up-to-date backup of the virtual garden `etcd`s. To perform a full backup you can use the following request:
```sh
kubectl -n garden exec -it etcd-0 curl localhost:8080/snapshot/full
```
- Delete the statefulset `etcd` and `etcd-events` in the `garden` namespace
``` sh
kubectl delete statefulset -n garden etcd
kubectl delete statefulset -n garden etcd-events
```
- Perform the 23KE update. This will create new `persistentVolumes` for the virtual garden's `etcd`s. These volumes are prefixed by `virtual-garden-`.
- (Optional) Delete the old `persistenVolumes` belonging to the already deleted statefulsets.

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-networking-filter to <code>0.16.0</code></b></summary>

# [gardener/gardener-extension-shoot-networking-filter]

## ✨ New Features

- `[USER]` Update image of egress-filter to 0.14.0 by @axel7born [#107]
- `[USER]` Mount `/run/xtables.lock` to prevent concurrent modifications of iptables rules. by @axel7born [#106]
## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.0 to 1.84.1. by @dependabot[bot] [#102]
- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [#105]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.1 to 1.85.0. by @dependabot[bot] [#104]

## Docker Images
- gardener-extension-shoot-networking-filter: `eu.gcr.io/gardener-project/gardener/extensions/shoot-networking-filter:v0.16.0`


</details>
