<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### ⚠️ Breaking Changes
* Drop support for Seeds with Kubernetes version <= 1.26 by @RadaBDimitrova in https://github.com/stackitcloud/gardener-extension-acl/pull/119
### ✨ Features
* Publish helm charts to ghcr.io by @oliver-goetz in https://github.com/stackitcloud/gardener-extension-acl/pull/114
* Use ServiceTrafficDistribution to make Services topology-aware when runtime Kubernetes >= 1.31 by @ialidzhikov in https://github.com/stackitcloud/gardener-extension-acl/pull/105
* Adapt admission controller helm charts for deployment by gardener-operator by @oliver-goetz in https://github.com/stackitcloud/gardener-extension-acl/pull/121
### 🤖 Dependencies
* Update dependency ko-build/ko to v0.17.1 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/84
* Update module github.com/spf13/cobra to v1.9.1 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/113
* Update module github.com/onsi/ginkgo/v2 to v2.23.4 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/116
* Update module github.com/tidwall/gjson to v1.18.0 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/103
* Update module golang.org/x/tools to v0.32.0 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/125
* Update module github.com/onsi/gomega to v1.37.0 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/124
* Update dependency go to v1.24.2 by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/112
* Update k8s packages (minor) by @renovate in https://github.com/stackitcloud/gardener-extension-acl/pull/65
### ℹ️ Other Changes
* Forbid container privilege escalations for Gardener Extension ACL component containers by @georgibaltiev in https://github.com/stackitcloud/gardener-extension-acl/pull/117

## New Contributors
* @oliver-goetz made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/114
* @RadaBDimitrova made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/119
* @georgibaltiev made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/117
* @Wieneo made their first contribution in https://github.com/stackitcloud/gardener-extension-acl/pull/126

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.6.0...v1.7.0