<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### ⚠️ Breaking
* [GEP-30] Drop webhook code unneeded with `RemoveAPIServerProxyLegacyPort` by @Wieneo in https://github.com/stackitcloud/gardener-extension-acl/pull/120
* This version of the extension is only compatible with Gardener installations, which have the `RemoveAPIServerProxyLegacyPort` feature gate enabled
### 🤖 Dependencies
* Update k8s packages to v0.32.6 (patch) by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/150
* Update dependency go to v1.24.5 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/151

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.9.0...v1.10.0