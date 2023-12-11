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
