# [github.com/gardener/gardener-extension-runtime-gvisor:v0.40.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260601.0. Notable upstream fixes: sentry panic fix for path resolution from unlinked tmpfs directories, IPv6 fragment reassembly fix, KVM/ARM64 PAC VDSO crash fix (affects fork/exec-heavy workloads on PAC-capable hardware), pause/resume fix in containerd shim, CLONE_CLEAR_SIGHAND and CLONE_PARENT support, mount UID/GID mappings, statx btime support, panic fix on unknown transport protocol during forwarding, and rootless execution support. by @federated-github-access[bot] [[#412](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/412)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:0fb38b8a2242eb9730145a104d172aaaf53c5a5f6087f8aae938fe0b9469a67c`
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:d705bc8e1d488ba07a462a4cd024649125054a5473387cc8d6d2b63e16e4f955`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:4e020fad1ec6b010c6f1b9a56bd5597169d7ee97750432ed92a477dc790df6b3`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:637dab4ab2496907fe00d3642baa696a6930b4b6041b7ee98ba0711c82ad12c4`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.40.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.40.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.40.0`
