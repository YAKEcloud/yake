# [gardener/gardener-extension-shoot-rsyslog-relp]

## 📰 Noteworthy

- `[DEVELOPER]` Monitoring config is now getting deleted on extension removal by @Kostov6 [#185]
## ✨ New Features

- `[OPERATOR]` A new api object `rsyslog-relp.extensions.gardener.cloud/v1alpha1.Auditd` is introduced which is used to specify a configuration for the linux audit daemon on the shoot nodes. by @plkokanov [#149]
- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#147]
- `[OPERATOR]` Two new fields have been added to the provider config for the `shoot-rsyslog-relp` extension:  
  - `.auditConfig.enabled` allows users to opt in whether to enable the reconfiguration of audit rules on the shoot's nodes and to also configure `auditd` to send logs to `rsyslog`. By default this field is `true`.  
  - `.auditConfig.configMapReferenceName` is a reference to a `ConfigMap` shoot resource which contains audit configuration. This field is only taken into account if `.auditRulesConfig.enabled` is `true`. The `ConfigMap` must contain a data key `auditd` which must contain a value of type `rsyslog-relp.extensions.gardener.cloud/v1alpha1.Auditd`. by @plkokanov [#149]
## 🏃 Others

- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-shoot-rsyslog-relp-admission` Helm chart. by @timuthy [#135]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.6.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.6.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.6.0`
## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.6.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.6.0`
