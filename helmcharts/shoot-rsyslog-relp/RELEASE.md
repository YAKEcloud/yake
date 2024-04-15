# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🏃 Others

- `[OPERATOR]` The reconciliation of the `shoot-rsyslog-relp` extension no longer waits for the `extension-shoot-rsyslog-relp-shoot` `MangedResource` to be deleted during reconciliations, if the `Shoot` cluster is hibernated. The wait will still be executed when the `Shoot` is woken up to ensure that the resources deployed in the `Shoot` are removed. by @plkokanov [#93]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.4.2`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.4.2`
