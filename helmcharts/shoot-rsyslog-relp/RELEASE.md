# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused the `-a exit,always -F arch=b64 -S mount_setattr -F auid!=-1 -F key=privileged_special` audit rule to not get correctly applied. by @plkokanov [#151]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.5.2`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.5.2`
