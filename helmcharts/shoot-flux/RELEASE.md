## What's Changed
* ✨ The new `FluxConfig.flux.networkPolicy` field allows disabling Flux's default NetworkPolicies, e.g. when Flux shares a namespace with workloads that must be reachable from the kube-apiserver (admission webhooks). Defaults to `true`. by @linusfr in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/323
* 🤖 Update k8s and gardener packages to v1.146.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/306
* 🤖 Update actions/setup-go action to v7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/313
* 🤖 Update k8s and gardener packages to v1.146.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/314
* 🤖 Update k8s and gardener packages to v1.147.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/315
* 🤖 Update module github.com/go-logr/logr to v1.4.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/317
* 🤖 Update k8s and gardener packages to v0.36.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/316
* fix: Add make generate call to renovate flux upgrades by @jamand in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/319
* 🤖 Update k8s and gardener packages to v1.147.2 by @ske-renovate-operator[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/320
* fix: Add tools downloading in Makefile (avoid cold cache issues in Renovate) by @jamand in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/321
* 🤖 Update fluxcd (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/318

## New Contributors
* @ske-renovate-operator[bot] made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/320
* @linusfr made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/323

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.27.0...v0.28.0