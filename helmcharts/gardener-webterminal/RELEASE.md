# [gardener/terminal-controller-manager]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `credential.secretRef` property has been removed from the terminal `host` and `target` properties:  
  - For `Seed` resources, `spec.secretRef` was removed from the API without replacement, eliminating the need for `credential.secretRef`.  
  - For `Shoot` resources, `credential.shootRef` now replaces the previously used `credential.secretRef` for static token kubeconfigs. by @petersutter [#320]
## ✨ New Features

- `[OPERATOR]` Enhance terminal pods with service account token projection when the terminal host and target are in the same cluster and namespace by @petersutter [#322]
- `[DEVELOPER]` `gosec` was introduced for Static Application Security Testing (SAST). by @petersutter [#328]

## Docker Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.34.0`
