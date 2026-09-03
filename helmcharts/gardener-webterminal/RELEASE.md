# [github.com/gardener/terminal-controller-manager:v0.39.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Explicit `spec.target.apiServer.server` values are now restricted by `global.controller.manager.config.allowedAPIServerURLs` and must exactly match an HTTPS URL in the list. When the list is omitted or empty, the controller manager starts but denies all explicit API server URLs. Configure the landscape's Garden API server URL to keep Garden terminals enabled.  
    
  API server service references are restricted separately by `allowedAPIServerServiceRefs`. When omitted, dashboard-compatible defaults allow `kubernetes/default` and namespace-less `kube-apiserver` using the terminal host namespace. Set the field to `[]` to deny all service references, or configure a custom list to replace these defaults. by @petersutter [[#533](https://github.com/gardener/terminal-controller-manager/pull/533)]

## application/spdx+json
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:2014f7a5638e49ee84ac8a889bd75ef0d0fe54fb3e6a2f2aea752e73a88bb6e0`
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:6d80b9df68ef52c54bddc7d70070ad864b5f1b1aee54c82a816cd318a1a33447`
## application/vnd.cyclonedx+json
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:458114a22ec1de59b3df020732bd3962ff7cc5f44c5c3e21f838987e7876f281`
- terminal-controller-manager-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager@sha256:4dcc4d50576ce64afb1c0b9e57d6676956e105965b6eba03d8cece4d7095e6bd`
## Container (OCI) Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.39.0`
