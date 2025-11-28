# [github.com/gardener/gardener-extension-shoot-rsyslog-relp:v0.11.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix casing of `role` in `ScrapeConfig`. by @LucaBernstein [[#313](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/313)]
- `[USER]` Fixed `perm used without an arch is slower` warnings in the system integrity rules by explicitly specifying the `arch` parameter to be `b64`.  
  This also fixes issues when calling `augenrules --load` to load the configured audit rules. by @plkokanov [[#334](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/334)]

## 🏃 Others
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/blob/v0.11.0/example/extension.yaml). by @timuthy [[#301](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/301)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#318](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/318)]
- `[DEVELOPER]` The Concourse CI/CD pipeline has been migrated to GitHub Actions. by @ccwienk [[#281](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/281)]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.11.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.11.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.11.0`
## Container (OCI) Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.11.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.11.0`
