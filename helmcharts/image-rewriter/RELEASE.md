# [github.com/gardener/gardener-extension-image-rewriter:v0.6.0]

## ✨ New Features
- `[OPERATOR]` The `regions` fields for image rewrites and containerd host configurations is now optional.  
  If regions is not set, only the shoot provider is used to select the mirror, enabling global, region-independent endpoints. by @timuthy [[#34](https://github.com/gardener/gardener-extension-image-rewriter/pull/34)]

## 🏃 Others
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#31](https://github.com/gardener/gardener-extension-image-rewriter/pull/31)]

## Helm Charts
- image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/image-rewriter:v0.6.0`
## Container (OCI) Images
- gardener-extension-image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/image-rewriter:v0.6.0`
