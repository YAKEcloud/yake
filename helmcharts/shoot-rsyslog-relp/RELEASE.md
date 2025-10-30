# [github.com/gardener/gardener-extension-shoot-rsyslog-relp:v0.10.2]

## 🐛 Bug Fixes
- `[USER]` Fixed `perm used without an arch is slower` warnings in the system integrity rules by explicitly specifying the `arch` parameter to be `b64`.  
  This also fixes issues when calling `augenrules --load` to load the configured audit rules. by @plkokanov [[#336](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/336)]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.10.2`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.10.2`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.10.2`
## Container (OCI) Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.10.2`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.10.2`
