# [github.com/gardener/gardener-extension-runtime-gvisor:v0.39.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260525.0. Notable upstream fixes: TCP RFC 5961 RST hardening (off-path blind RST mitigation), EINTR leakage fix to sandboxed processes, overlay copy-up tolerates EOPNOTSUPP from setxattr, auto-enable nvproxy when GPU resources are in the OCI spec, rootfs bind-mount fix for hosts with symlinked paths (e.g. /var/run -> /run), ARM 64k page support, and veth TX checksum offload. by @federated-github-access[bot] [[#406](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/406)]
- `[OPERATOR]` Updated gVisor binaries to 20260520.0. Notable upstream fixes: TCP DF bit set during handshake (PMTU discovery), systemd compatibility (timerfd, unix sockets), /proc/[pid]/setgroups for buildah/podman, full xattr + overlayfs gofer support, per-mount directfs opt-out, and NVIDIA CDI createContainer hooks. by @federated-github-access[bot] [[#405](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/405)]

## application/spdx+json
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:876ab6a2bcf1c7c43b9ff24865c5b5715323f6fa68219e25c0081352db16414f`
- gardener-extension-runtime-gvisor-installation-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation@sha256:d35cc2d4433e8e86773599baf9e477dc0c4d1112b1406b7c5dfd92ad9c0f322c`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:08d313f71c4e23dc3a8cc5276c90776a8f56f3cef249e69cfd2174bfb9aa7cd3`
- gardener-extension-runtime-gvisor-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor@sha256:56605f691c7c43cbb55c00ed2ed2fc23a612dabc1be3d9c16f301abab9dc2617`
## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.39.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.39.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.39.0`
