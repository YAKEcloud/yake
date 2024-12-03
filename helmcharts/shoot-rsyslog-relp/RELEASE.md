# [gardener/gardener-extension-shoot-rsyslog-relp]

## 📰 Noteworthy

- `[DEVELOPER]` `gosec` is made available for SAST(static application security testing), it can be run with `make sast` or `make sast-report`, but is also incorporated in the `verify` and `verify-extended` makefile targets.  by @Kostov6 [#189]
## 🐛 Bug Fixes

- `[DEVELOPER]` An issue causing `make extension-up` to fail to patch the ControllerDeployment is now mitigated. by @ialidzhikov [#194]
- `[DEVELOPER]` An issue causing `make extension-up` to do NOT generate a new tag for local source code changes is now fixed. by @ialidzhikov [#194]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.7.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.7.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.7.0`
## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.7.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.7.0`
