# [github.com/gardener/dashboard:1.84.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Detect stalled HTTP/2 sessions used by the kube-client via a Go-style read-idle / ping-timeout heartbeat. Previously a half-open session was never torn down, which could leave streams hanging indefinitely. Configurable via `KUBE_CLIENT_READ_IDLE_TIMEOUT` / `KUBE_CLIENT_PING_TIMEOUT` env vars and the matching `global.dashboard.kubeClient.readIdleTimeout` / `pingTimeout` Helm values. by @petersutter [[#2985](https://github.com/gardener/dashboard/pull/2985)]
- `[USER]` Fixed IOPS input field not visible for aws workers by @grolu [[#2986](https://github.com/gardener/dashboard/pull/2986)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:284638885fb3e0b6ba4a933044027b0dec1b57339ba630a80b0cb4f61ab3b818`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:950872ed3c345556919700d81862d6d69f61098c080b64168b3bb721da34ea38`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.2`
