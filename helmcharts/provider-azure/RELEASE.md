# [github.com/gardener/gardener-extension-provider-azure:v1.56.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug in the cloud controller manager visible in Azure China has been fixed by updating the container images as follows:  
  - v1.31.9 -> v1.31.10  
  - v1.32.8 -> v1.32.9  
  - v1.33.3 -> v1.33.4 by @vpnachev [[#1369](https://github.com/gardener/gardener-extension-provider-azure/pull/1369)]
- `[OPERATOR]` Executables are now built with Go 1.25.4 by @vpnachev [[#1370](https://github.com/gardener/gardener-extension-provider-azure/pull/1370)]
- `[DEPENDENCY]` The following third party dependencies have been updated:  
  - github.com/gardener/gardener v1.130.0 -> v1.130.3 by @vpnachev [[#1363](https://github.com/gardener/gardener-extension-provider-azure/pull/1363)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.56.2`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.56.2`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.56.2`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.56.2`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.56.2`
