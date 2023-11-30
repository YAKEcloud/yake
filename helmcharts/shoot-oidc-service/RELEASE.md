# [gardener/gardener-extension-shoot-oidc-service]

## ✨ New Features

- `[USER]` `shoot-oidc-service` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @acumino [#134]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug in the `shoot-oidc-service` controller that was causing the OIDC Webhook Authenticator CA secret for a shoot cluster to be recreated instead of restored during control plane migration has been fixed.   by @vpnachev [#137]
# [gardener/oidc-webhook-authenticator]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies were updated:  
   - github.com/go-logr/logr v1.2.4 -> v1.3.0  
   - k8s.io/* v0.27.6 -> v0.27.6  
   - sigs.k8s.io/controller-runtime v0.15.2 -> v0.15.3 by @dimityrmirchev [gardener/oidc-webhook-authenticator#141]
- `[DEPENDENCY]` OWA is now built using go version `1.21.4`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#141]

## Docker Images
- gardener-extension-shoot-oidc-service: `eu.gcr.io/gardener-project/gardener/extensions/shoot-oidc-service:v0.23.0`
