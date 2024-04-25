# [gardener/gardener-extension-provider-alicloud]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-alicloud` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#678]
## 🐛 Bug Fixes

- `[DEVELOPER]` `source-` prefix of `BackupEntry` name is being ignored when performing entry deletion by @Kostov6 [#698]
## 🏃 Others

- `[OPERATOR]` Update csi-plugin-alicloud to v1.30.1-242df8a-aliyun by @kevin-lacoo [#709]
- `[OPERATOR]` The code related to `machine-controller-manager` management has been cleaned up because `gardenlet` is responsible for it since `gardener/gardener@v1.83`. by @kevin-lacoo [#706]
- `[OPERATOR]` add os information as labels in machine class objects. by @tedteng [#703]
- `[DEVELOPER]` Add GetBucketInfo to OSS client interface. by @MartinWeindel [#694]
- `[DEPENDENCY]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.86.0`->`v1.91.1`  
  - k8s.io/* : v0.28.3 -> v0.29.3  
  - sigs.k8s.io/controller-runtime: v0.16.3-> v0.17.2 by @shafeeqes [#704]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update go -> v1.21.5 by @kon-angelo [gardener/terraformer#146]
- `[OPERATOR]` Update alpine -> v1.29.0 by @kon-angelo [gardener/terraformer#146]

## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.52.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.52.0`
