# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🏃 Others

- `[OPERATOR]` The `ConfigMap` deployed for the monitoring configuration of the `shoot-rsyslog-relp` extension  in `Shoot` control planes is no longer `immutable`. This fixes an issue that could cause `prometheus-0` pods to get stuck in `CrashLoopBackOff`. by @plkokanov [#91]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.4.1`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.4.1`
