# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🏃 Others

- `[OPERATOR]` The memory of the `rsyslog.service` systemd unit is now limited via a drop-in config. The following configurations are used: `MemoryMin=15M`, `MemoryHigh=150M`, `MemoryMax=300M`, `MemorySwapMax=0` by @plkokanov [#139]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.5.1`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.5.1`
