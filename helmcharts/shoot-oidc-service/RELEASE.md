# [gardener/gardener-extension-shoot-oidc-service]

## ✨ New Features

- `[USER]` `shoot-oidc-service` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @acumino [#134]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug in the `shoot-oidc-service` controller that was causing the OIDC Webhook Authenticator CA secret for a shoot cluster to be recreated instead of restored during control plane migration has been fixed.   by @vpnachev [#137]
## 🏃 Others

- `[DEPENDENCY]` The extension now uses a debian 12 based base image. by @dimityrmirchev [#149]
- `[DEPENDENCY]` This extension is now built using go version `1.21.6`. by @dependabot[bot] [#146]
- `[DEPENDENCY]` The following dependencies were updated:  
   - github.com/gardener/gardener v1.81.1 -> v1.86.1  
   - k8s.io/* v0.28.2 -> v0.28.3  
   - sigs.k8s.io/controller-runtime v0.16.2 -> v0.16.3 by @dimityrmirchev [#143]
# [gardener/oidc-webhook-authenticator]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/oidc-webhook-authenticator#143]
## 🏃 Others

- `[DEPENDENCY]` OWA is now built using go version `1.21.5`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#145]
- `[DEPENDENCY]` OWA is now built using go version `1.21.6`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#146]
- `[DEPENDENCY]` Base image updated to `gcr.io/distroless/static-debian12:nonroot`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#145]
- `[DEPENDENCY]` The following dependencies were updated:  
   - k8s.io/* v0.27.7 -> v0.27.9 by @dimityrmirchev [gardener/oidc-webhook-authenticator#145]
- `[DEPENDENCY]` The following dependencies were updated:  
   - github.com/go-logr/logr v1.2.4 -> v1.3.0  
   - k8s.io/* v0.27.6 -> v0.27.6  
   - sigs.k8s.io/controller-runtime v0.15.2 -> v0.15.3 by @dimityrmirchev [gardener/oidc-webhook-authenticator#141]
- `[DEPENDENCY]` OWA is now built using go version `1.21.4`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#141]

## Docker Images
- gardener-extension-shoot-oidc-service-linux-amd64: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.24.0`
