# [gardener/gardener-extension-shoot-rsyslog-relp]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#57]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @ccwienk [#47]
- `[OPERATOR]` `extension-shoot-rsyslog-relp` no longer supports Shoots with Кubernetes version == 1.24. by @Kostov6 [#79]
## 📰 Noteworthy

- `[DEVELOPER]` The `charts/images.yaml` file was moved to `imagevector/images.yaml`. by @plkokanov [#66]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue where the `extension-shoot-rsyslog-relp-configuration-cleaner` ManagedResource could block Shoot deletion if the `shoot-rsyslog-relp` was disabled before the Shoot deletion was triggered, and disabling the extension failed while trying to deploy the said ManagedResource and wait for it to become ready.  by @plkokanov [#80]
## 🏃 Others

- `[OPERATOR]` Bumped `github.com/gardener/gardener` to `v1.89.0.` by @plkokanov [#73]
- `[OPERATOR]` The extension now deploys the `rsyslog` configuration files by mutating the `OperatingSystemConfig` resource via a mutating webhook. Cleanup of the `rsyslog` configuration files is still handled by the `rsyslog-relp-configuration-cleaner` daemonset. by @plkokanov [#41]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#57]
- `[OPERATOR]` Fixed an issue where `rsyslog.service` would never get enabled if it was not already enabled by default. by @plkokanov [#58]
- `[OPERATOR]` The name of the `gardener-extension-shoot-rsyslog-relp-admission` chart is now correctly specified as `gardener-extension-shoot-rsysloog-relp-admission`. Previously it was `gardener-extension-shoot-rsyslog-relp`. This should not require anything to be done by operators when upgrading the chart. by @plkokanov [#39]
- `[OPERATOR]` The repository is now compliant with the [REUSE](https://reuse.software/) license format. by @plkokanov [#71]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#57]
- `[DEVELOPER]` Bumped golang to `v1.22.0` by @plkokanov [#73]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.4.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.4.0`
