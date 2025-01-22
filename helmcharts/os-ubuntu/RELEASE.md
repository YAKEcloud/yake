# [gardener/gardener-extension-os-ubuntu]

## 🏃 Others

- `[OPERATOR]` Container images for the ubuntu extension are now built with Docker buildx to enable cross-platform builds and default to the `linux/amd64` architecture. by @Roncossek [#166]
- `[OPERATOR]` SAST assets are now collected in the release pipeline and attached to the component-descriptor. by @MrBatschner [#177]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.28.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.28.0`
