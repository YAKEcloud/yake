# [github.com/gardener/gardener-extension-shoot-networking-filter:v0.25.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Networking filter now prints the server's response in case no valid JSON was returned while downloading the filter list. by @domdom82 [[#273](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/273)]

## 🏃 Others
- `[OPERATOR]` Fix priorityClassName for deployment on Garden runtime cluster. by @MartinWeindel [[#266](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/266)]


## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.25.0`
- shoot-networking-filter-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-application:v0.25.0`
- shoot-networking-filter-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-runtime:v0.25.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.25.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-filter-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter-admission:v0.25.0`
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.25.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.25.0`
