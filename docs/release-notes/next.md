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

<details>
<summary><b>Update provider-aws to <code>1.51.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.81.6`->`v1.83.2` by @shafeeqes [#828]
- `[OPERATOR]` Add documentation for the "flow" infrastructure reconciler. by @kon-angelo [#827]
- `[DEVELOPER]` Add new unit tests. by @axel7born [#829]

## Docker Images
- gardener-extension-admission-aws: `eu.gcr.io/gardener-project/gardener/extensions/admission-aws:v1.51.0`
- gardener-extension-provider-aws: `eu.gcr.io/gardener-project/gardener/extensions/provider-aws:v1.51.0`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.3.0</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @AleksandarSavchev [#17]
## ✨ New Features

- `[USER]` The `shoot-rsyslog-relp` configuration now allows users to specify which tls library should be used by `librerlp` when tls communication is enabled via the `tls.tlsLib` optional field. The possible options are `gnutls` and `openssl`. When the field is omitted, `librelp` uses its default tls library which in most cases is `gnutls`. More information can be found here: https://www.rsyslog.com/doc/v8-stable/configuration/modules/imrelp.html#tls-tlslib by @plkokanov [#27]
- `[USER]` `shoot-rsyslog-relp` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @acumino [#24]
## 🏃 Others

- `[OPERATOR]` Metrics for the rsyslog service running on the shoot nodes are now exposed and collected according to the following:  
    - The metrics are available on the `node-exporter`'s `/metrics` endpoint.   
    - The names of the new metrics match the `rsyslog_pstat_.+` regex.  
    - The metrics are scraped and collected in the shoot's prometheus instance.  
    - A dedicated plutono dashboard is added which displays the rsyslog metrics. by @plkokanov [#32]
- `[OPERATOR]` Fixed an issue where the rsyslog systemd unit could become stuck in a failed state immediately after it is installed on the shoot's nodes, if the `shoot-rsyslog-relp` extension was enabled on the shoot before that. The `configure-rsyslog.sh` script which is responsible for configuring and restarting the rsyslog systemd unit will now wait for the `syslog.service` symlink to be created before attempting to configure and restart the rsyslog systemd unit. by @plkokanov [#34]
- `[OPERATOR]` The shoot-rsyslog-relp extension is now aligned with Gardener's [component checklist](https://github.com/gardener/gardener/blob/v1.82.0/docs/development/component-checklist.md):  
  - RBAC for the `shoot-rsyslog-relp` extension controller have been drastically reduced to only the required ones.  
  - The deployment for the `shoot-rsyslog-relp` extension controller now contains the proper label for HA - `high-availability-config.resources.gardener.cloud/type: controller`  
  - The `shoot-rsyslog-relp` admission pod no longer has a `SecurityContext`. This will be automatically added by the `seccomp-profile` webhook of the `gardener-resource-manager`   
  - The `rsyslog-relp-configurator` and `rsyslog-relp-configuration-cleaner` pods now use the `RuntimeDefault` seccomp profile.  
  - The init containers of the `rsyslog-relp-configurator` and `rsyslog-relp-configuration-cleaner` pods no longer run in privileged mode.  
  - The `rsyslog-relp-configurator` and `rsyslog-relp-configuration-cleaner` now specify resource requests and limits.  
  - `PodSecurityPolicy`s for the `rsyslog-relp-configurator` and `rsyslog-relp-configuration-cleaner` are now deployed in the shoot cluster, if its kubernetes version is `1.24.x`. by @plkokanov [#29]
- `[OPERATOR]` The healthcheck controller is now removed. Starting [v1.65.0](https://github.com/gardener/gardener/releases/tag/v1.65.0), gardenlet perform health checks for all ManagedResources in the Shoot control plane in the Seed. There is no longer need of the custom healthcheck controller in the shoot-rsyslog-relp extension as it was doing the same job. It was performing health check for the ManagedResource it deploys. by @plkokanov [#28]
- `[OPERATOR]` The `rsyslog-relp-configuration-cleaner` is no longer deployed on Shoot deletion with `shoot-rsyslog-relp` extension enabled. The Extension deletion occurs after the Worker deletion. There are no Nodes, hence there is no need to clean up registry configuration. by @plkokanov [#30]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `eu.gcr.io/gardener-project/gardener/extensions/shoot-rsyslog-relp-admission:v0.3.0`
- gardener-extension-shoot-rsyslog-relp: `eu.gcr.io/gardener-project/gardener/extensions/shoot-rsyslog-relp:v0.3.0`


</details>

<details>
<summary><b>Update etcd to <code>6.0.0</code></b></summary>

## What's Changed
* Downgrade to etcd 3.4.26, Upgrade to etcd-backup-restore 0.24.7 by @JensAc in https://github.com/gardener-community/etcd/pull/13

## New Contributors
* @JensAc made their first contribution in https://github.com/gardener-community/etcd/pull/13

**Full Changelog**: https://github.com/gardener-community/etcd/compare/5.3.2...6.0.0

</details>

<details>
<summary><b>Update etcd to <code>6.0.0</code></b></summary>

## What's Changed
* Downgrade to etcd 3.4.26, Upgrade to etcd-backup-restore 0.24.7 by @JensAc in https://github.com/gardener-community/etcd/pull/13

## New Contributors
* @JensAc made their first contribution in https://github.com/gardener-community/etcd/pull/13

**Full Changelog**: https://github.com/gardener-community/etcd/compare/5.3.2...6.0.0

</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.28.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` Metrics are exported for pending shoots as well. by @timebertt [#91]
- `[OPERATOR]` Minimum and maximum shoot node counts are no longer reversed. by @Sinscerly [#90]

## Docker Images
- metrics-exporter: `eu.gcr.io/gardener-project/gardener/metrics-exporter:0.28.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.28.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` Metrics are exported for pending shoots as well. by @timebertt [#91]
- `[OPERATOR]` Minimum and maximum shoot node counts are no longer reversed. by @Sinscerly [#90]

## Docker Images
- metrics-exporter: `eu.gcr.io/gardener-project/gardener/metrics-exporter:0.28.0`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.16.1</code></b></summary>

no release notes available

## Docker Images
- gardener-extension-shoot-networking-filter: `eu.gcr.io/gardener-project/gardener/extensions/shoot-networking-filter:v0.16.1`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.50.1</code></b></summary>

no release notes available

## Docker Images
- gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.50.1`
- gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.50.1`


</details>

<details>
<summary><b>Update provider-aws to <code>1.51.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` The following dependency is updated to adopt a cherry-pick of https://github.com/gardener/gardener/pull/8943:  
  - github.com/gardener/gardener: v1.83.2 -> v1.83.3 by @ialidzhikov [#843]

## Docker Images
- gardener-extension-admission-aws: `eu.gcr.io/gardener-project/gardener/extensions/admission-aws:v1.51.1`
- gardener-extension-provider-aws: `eu.gcr.io/gardener-project/gardener/extensions/provider-aws:v1.51.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.41.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#266]
## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that caused shoot clusters with a `shoot-dns-service` extension configuration not to be validated during creation. Potential validation errors only happened later and remained unnoticed, e.g. when update requests from Gardenlet were denied and shoot reconciliation got stuck. by @timuthy [#270]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [#267]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.83.0 to 1.84.0. by @dependabot[bot] [#261]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.1 to 1.85.0. by @timuthy [#266]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.84.0 to 1.84.1. by @dependabot[bot] [#262]
# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[USER]` `NS` records are not retrieved anymore for all accessible hosted zones to avoid reading all DNS record sets of all hosted zones periodically independently if they are used. Only hosted zones with active `DNSProviders` are synched, but without caring about consequences of `NS` records for subdomains. If there are many large hosted zones accessible for given credentials and there are only  `DNSProviders` using a few of these zones (either by domain or zone include), the period synchronisation of the zone state for all other hosted zones is avoided. This can result in a significant reduction of requests to the provider backend. As a downside of this change, applying a `DNSEntry` for a forwarded subdomain now results in a DNS record set in the parent hosted zone, if the real hosted zone is unknown to the controller. Formerly, applying such a `DNSEnty` resulted in an error state.   
  No action is necessary from the users, this is only a "heads up" for the changed behaviour if `NS` records are used for subdomains. by @MartinWeindel [gardener/external-dns-management#336]
## 🏃 Others

- `[USER]` Validate provider domain includes and excludes for forbidden wildcard domains. by @MartinWeindel [gardener/external-dns-management#335]
- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [gardener/external-dns-management#333]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `eu.gcr.io/gardener-project/gardener/extensions/admission-shoot-dns-service:v1.41.0`
- gardener-extension-shoot-dns-service: `eu.gcr.io/gardener-project/gardener/extensions/shoot-dns-service:v1.41.0`


</details>
