---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update backup-s3 to <code>0.8.2</code></b></summary>

## General Changes

* Check if S3 bucket exists before creation (#25) @Gerrit91


</details>

<details>
<summary><b>Update shoot-flux to <code>0.25.0</code></b></summary>

## What's Changed

This release officially supports fluxcd>2.8

* 🤖 Update module golang.org/x/tools to v0.42.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/231
* 🤖 Update k8s.io/utils digest to b8788ab by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/232
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.28.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/228
* 🤖 Update k8s and gardener packages (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/239
* 🤖 Update module github.com/onsi/gomega to v1.39.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/227
* 🤖 Update docker/login-action action to v4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/240
* 🤖 Update fluxcd (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/235
* 🤖 Update k8s and gardener packages (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/241


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.24.1...v0.25.0

</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.37.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.37.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The name of the validating webhook configuration has been updated from `oidc-webhook-authenticator-shoot` to `oidc-webhook-authenticator` for better consistency with other resources naming. by @theoddora [[#433](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/433)]
- `[DEVELOPER]` The `GOARCH` makefile variable has been replaced by `TARGET_PLATFORM`. by @vpnachev [[#427](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/427)]

## ✨ New Features
- `[DEVELOPER]` Gardener extension `shoot-oidc-service` container image now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @vpnachev [[#427](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/427)]

## 🐛 Bug Fixes
- `[OPERATOR]` Switch the default port for exposing the extension mutating webhook to 10250. Configure `webhookConfig.serverPort` through values.yaml if you require a different port number. by @theoddora [[#439](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/439)]

## 🏃 Others
- `[OPERATOR]` `shoot-oidc-service` extension binaries are now built with Go 1.26.0. by @dependabot[bot] [[#440](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/440)]

# [github.com/gardener/oidc-webhook-authenticator:v0.42.0]

## 🏃 Others
- `[OPERATOR]` OWA is now built with Go 1.26.0 by @dependabot[bot] [[#220](https://github.com/gardener/oidc-webhook-authenticator/pull/220)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.37.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.37.0`


</details>
