# [gardener/gardener-extension-shoot-rsyslog-relp]

## ⚠️ Breaking Changes

- `[USER]` When changing referenced TLS secret in `shoot.spec.resources[]` the user should provide only immutable secret by @Kostov6 [#76]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused audit logs to be duplicated in journald if the `system-journald-audit` socket was enabled. Now if the `system-journald-audit` socket exists on the node, it is disabled and stopped when this extension is used. by @plkokanov [#104]
- `[USER]` Rsyslog processes logs on nodes with os suse-chost 15 SP3  by @Kostov6 [#123]
## 🏃 Others

- `[OPERATOR]` Errors that can occur when loading audit rules are now ignored and reported as warnings. This allows all correct audit rules to be loaded. by @plkokanov [#128]
- `[OPERATOR]` The `rsyslog-relp` action which is used to forward logs to a RELP server now uses a separate in-memory queue of 100000 messages. Additionally, it also uses a disk queue of max 48 MiB which is used to store messages after the in-memory queue is exhausted or to save the current messages in the in-memory queue when the `rsyslog` service is restarted. by @plkokanov [#115]
- `[OPERATOR]` This extension is now using the new way of providing monitoring configuration (ref [GEP-19](https://github.com/gardener/gardener/blob/master/docs/proposals/19-migrating-observability-stack-to-operators.md)) in case a shoot cluster's Prometheus has been migrated to management via `prometheus-operator`. by @rfranzke [#99]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.5.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.5.0`
