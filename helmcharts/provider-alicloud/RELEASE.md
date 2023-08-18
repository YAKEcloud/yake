# [gardener/gardener-extension-provider-alicloud]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#634]
- `[OPERATOR]` `provider-alicloud` no longer supports Shoots or Seeds with Кubernetes version < 1.22. by @shafeeqes [#623]
## ✨ New Features

- `[OPERATOR]` The `gardener-extension-admission-alicloud` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#636]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug related to the network policy annotations that prevented the shoot control plane Prometheus from scraping the `cloud-controller-manager` and caused false alerts is fixed. by @istvanballok [#637]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]

## Docker Images
gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.48.0`
gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.48.0`