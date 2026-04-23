# [github.com/gardener/gardener-extension-registry-cache:v0.22.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The migration logic introduced in `registry-cache@v0.18.0` to update immutable fields of the registry cache StatefulSet is now removed. Before updating to this version of the extension, ensure that you have not skipped minor versions when upgrading the extension and that the migration was executed successfully for all Shoot clusters using the extension. You can use the following [script](https://gist.github.com/ialidzhikov/946baa944882da780c31d9ab66addb26) to perform the check. by @dimitar-kostadinov [[#568](https://github.com/gardener/gardener-extension-registry-cache/pull/568)]

## ✨ New Features
- `[USER]` The registry-mirror extension now supports configuring non-compliant mirror registries by allowing to:  
  - set an URL path segment in the `.mirrors[].hosts[].host` field   
  - define the `override_path` option in the containerd registry configuration by using the `.mirrors[].hosts[].overridePath` field. by @dimitar-kostadinov [[#554](https://github.com/gardener/gardener-extension-registry-cache/pull/554)]

## 🏃 Others
- `[OPERATOR]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/registry` image is updated from 3.0.0 to 3.1.0. by @dimitar-kostadinov [[#564](https://github.com/gardener/gardener-extension-registry-cache/pull/564)]

## application/spdx+json
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:4738cdf6a505b26a09768d62a277fc5a53e0fa4dc00b8fb9f2113fc89df97bf7`
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:e21ce931862221f16914ae9c20fe0c799fd0dfe95bafc29772a659eae039e2a3`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:5e509150aa3ea359ae94d4f655d09289c2788cde4e5b43e0de5178666022f0d7`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:8fed6ce0fea183f2209a74f6f826f783b491a042b4a7cf98525a2a2f76293109`
## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.22.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.22.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.22.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.22.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.22.0`
