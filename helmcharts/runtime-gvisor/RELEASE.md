# [gardener/gardener-extension-runtime-gvisor]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the gvisor test-machinery integration test to fail is now fixed. by @dimitar-kostadinov [#201]
## 🏃 Others

- `[USER]` If debugging of workloads in gVisor is required, runsc debug logs can be turned on by specifying `debug: "true"` in the gVisor providerConfig. by @MrBatschner [#204]
- `[OPERATOR]` moved imageVectorOverwrite to top level of values file by @Roncossek [#199]
- `[OPERATOR]` `extension-runtime-gvisor` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#151]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.19.0`
## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.19.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.19.0`
