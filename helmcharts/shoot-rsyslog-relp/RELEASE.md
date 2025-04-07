# [gardener/gardener-extension-shoot-rsyslog-relp]

## ⚠️ Breaking Changes

- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-shoot-rsyslog-relp-admission admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#228]
## 📰 Noteworthy

- `[OPERATOR]` A new field, `messageContent`, has been added to the `loggingRules` section of the `rsyslog-relp.extensions.gardener.cloud/v1alpha1.RsyslogRelpConfig` API. This enhancement allows users to filter log messages sent to the target server based on their content. The `messageContent` field includes two subfields:  
  - `messageContent.regex`: This subfield specifies a regular expression to determine which log messages should be sent to the target server.  
  - `messageContent.exclude`: This subfield specifies a regular expression to exclude log messages from being sent to the target server.  
  These additions provide more granular control over log message filtering, enhancing the flexibility and efficiency of log management. by @RadaBDimitrova [#243]
- `[OPERATOR]` Memory resource limits have been removed from `charts/gardener-extension-shoot-rsyslog-relp-admission/values.yaml` and `charts/gardener-extension-shoot-rsyslog-relp/values.yaml`, and therefore from the corresponding deployments. by @plkokanov [#211]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fixed an issue that caused skaffold to fail to tag the `gardener-extension-shoot-rsyslog-relp` image during the execution of the `make remote-extension-up` command. by @plkokanov [#236]
- `[OPERATOR]` The script which configures the audit rules on the system now ensures that the `/var/lib/node-exporter/textfile-collector` directory exists before attempting to write the result of the `augenrules --load` command to the `/var/lib/node-exporter/textfile-collector/rsyslog_auditd.prom` file. by @plkokanov [#256]
- `[OPERATOR]` An issue causing the ControllerDeployment in provider-local NOT to update the locally built image if the image is already present in the skaffold's cache is now fixed. `make extension-up` is now guaranteed to always use the image version that corresponds to the local git revision of the repository. by @RadaBDimitrova [#242]
## 🏃 Others

- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#226]
- `[OPERATOR]` The parallel execution of e2e tests is increased from 2 to 3 to speed up the e2e test execution times. by @RadaBDimitrova [#248]
- `[OPERATOR]` Prepare for deployment of admission controller by gardener-operator by @MartinWeindel [#228]
- `[OPERATOR]` The [`ServiceTrafficDistribution`](https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution) feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#224]
- `[OPERATOR]` `extension-shoot-rsyslog-relp` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#190]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.8.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.8.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.8.0`
## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.8.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.8.0`
