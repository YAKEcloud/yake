# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` Machine Controller Manager now supports a new machine deployment strategy called `InPlaceUpdate`. by @acumino [gardener/machine-controller-manager#973]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug was fixed where MCM panics when trying to add an annotation to a nil map by @aaronfern [gardener/machine-controller-manager#966]
- `[OPERATOR]` A new termination queue to handle machines scheduled for deletion introduced to separate creation requests from deletion by @takoverflow [gardener/machine-controller-manager#964]
- `[OPERATOR]` machine-controller-manager version, and build information are printed at startup. by @renormalize [gardener/machine-controller-manager#985]
- `[OPERATOR]` CA tainted node is removed as soon as possible by MachineSet controller  by @elankath [gardener/machine-controller-manager#972]
## 🏃 Others

- `[OPERATOR]` Introduced `MachineConfiguration` options for InPlaceUpdates by @acumino [gardener/machine-controller-manager#970]
- `[OPERATOR]` Introduce Constants needed for Conditons and Status for InPlace update by @ary1992 [gardener/machine-controller-manager#980]
- `[OPERATOR]` Resource exhaustion on machine creation results in a longer retry period by @takoverflow [gardener/machine-controller-manager#981]
- `[OPERATOR]` Introduced API changes to support InPlaceUpdate by @acumino [gardener/machine-controller-manager#962]
- `[OPERATOR]` Integration test framework enhancements for resource and process cleanup by @takoverflow [gardener/machine-controller-manager#968]
# [gardener/gardener-extension-provider-alicloud]

## 🏃 Others

- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#778]
- `[OPERATOR]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#781]
- `[OPERATOR]` Added `cloudprovider` webhook part of `gardener-extension-provider-alicloud` which ensures that the `cloudprovider` secret has the `credentialsFile` field present. The format of this field can be found in [this documentation](https://www.alibabacloud.com/help/en/sdk/developer-reference/credentials-settings). by @AleksandarSavchev [#779]
- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#766]
- `[OPERATOR]` The `csi-plugin-controller` deployment and `csi-diskplugin` daemonset now use an Alibaba cloud credentials file for authentication. by @AleksandarSavchev [#779]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update gardener to v1.117.0 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update fsnotify to v1.9.0 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update aws-sdk-go to v1.55.7 by @hebelsan [gardener/terraformer#162]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.61.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.61.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.61.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.61.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.61.0`
