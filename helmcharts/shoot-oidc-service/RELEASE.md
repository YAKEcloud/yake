# [gardener/oidc-webhook-authenticator]

## ⚠️ Breaking Changes

- `[OPERATOR]` The default CPU and memory limits on the `oidc-webhook-authenticator` container have been removed, please set your own limits via the helm chart value `.runtime.resources` if needed.  by @vpnachev [gardener/oidc-webhook-authenticator#173]
## 🏃 Others

- `[OPERATOR]` OWA is now built using go version 1.24.2. by @dimityrmirchev [gardener/oidc-webhook-authenticator#177]
# [gardener/gardener-extension-shoot-oidc-service]

## ✨ New Features

- `[USER]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#307]
## 🏃 Others

- `[OPERATOR]` The following 3rd party dependencies have been updated:  
  - github.com/gardener/gardener v1.110.1 -> v1.117.1  
  - github.com/spf13/cobra v1.8.1 -> v1.9.1  
  - github.com/spf13/pflag v1.0.5 -> v1.0.6  
  - go.uber.org/mock v0.5.0 -> v0.5.0  
  - golang.org/x/tools v0.28.0 -> v0.32.0  
  - k8s.io/api v0.31.3 -> v0.32.3  
  - k8s.io/apimachinery v0.31.3 -> v0.32.3  
  - k8s.io/autoscaler/vertical-pod-autoscaler v1.2.1 -> v1.3.0  
  - k8s.io/client-go v0.31.3 -> v0.32.3  
  - k8s.io/code-generator v0.31.3 -> v0.32.3  
  - k8s.io/component-base v0.31.3 -> v0.32.3  
  - sigs.k8s.io/controller-runtime v0.19.3 -> v0.20.4  
  - golang.org/x/crypto v0.35.0 -> golang.org/x/crypto v0.37.0  
  - golang.org/x/mod v0.22.0 -> golang.org/x/mod v0.24.0  
  - golang.org/x/net v0.32.0 -> golang.org/x/net v0.39.0  
  - golang.org/x/oauth2 v0.24.0 -> golang.org/x/oauth2 v0.28.0  
  - golang.org/x/sync v0.11.0 -> golang.org/x/sync v0.13.0  
  - golang.org/x/sys v0.30.0 -> golang.org/x/sys v0.32.0  
  - golang.org/x/term v0.29.0 -> golang.org/x/term v0.31.0  
  - golang.org/x/text v0.22.0 -> golang.org/x/text v0.24.0  
  - golang.org/x/time v0.8.0 -> golang.org/x/time v0.11.0 by @dependabot[bot] [#312]
- `[OPERATOR]` `extension-shoot-oidc-service` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#253]
- `[OPERATOR]` The extension no longer has permissions over configmaps as it does not require such access. by @dimityrmirchev [#308]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#298]
- `[OPERATOR]` The extension is now built using go version 1.24.3. by @dependabot[bot] [#316]
- `[OPERATOR]` Fix the service annotation to reconcile the network policies that allow scraping extension metrics in the seed by @vicwicker [#290]
- `[OPERATOR]` The extension is now built using go version 1.24.2. by @dependabot[bot] [#301]
- `[DEPENDENCY]` Dependency to golang.org/x/crypto was upgraded to version v0.35.0. by @dimityrmirchev [#309]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.31.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.31.0`
