<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### ⚠️ Breaking Changes
* Drop special handling for provider-openstack by @timebertt in https://github.com/stackitcloud/gardener-extension-acl/pull/173
  * Operators should ensure that the provider-openstack version is recent enough to publish `Infrastructure.status.egressCIDRs` for all clusters before upgrading to this version of this extension.
### 🤖 Dependencies
* Update dependency go to v1.25.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/166
* Update actions/setup-go action to v6 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/167
* Update module github.com/onsi/ginkgo/v2 to v2.25.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/168
* Update k8s packages to v0.32.9 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/169
* Update module golang.org/x/tools to v0.37.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/170
* Update k8s packages (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/149
* Update module github.com/gardener/gardener to v1.127.4 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/175
* Update k8s packages (minor) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/176

## New Contributors
* @MichaelEischer made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/171

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.11.0...v1.12.0