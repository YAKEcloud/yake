# [gardener/dashboard]

## ✨ New Features

- `[OPERATOR]` Added support for kubeconfigs that include a path in the API server URL by @grolu [#2368]
- `[USER]` CredentialsBinding Support  
  - Support viewing, editing, and creating `CredentialsBindings` referencing `Secrets`  
  - New `Secrets` are now automatically created with a `CredentialsBinding`  
  - Existing `SecretBindings` remain updatable; however, creating new `SecretBindings` via the Dashboard is no longer supported  
  - `CredentialsBindings` referencing `WorkloadIdentity` resources are visible (for cluster creation) but cannot be edited or deleted (yet)  
  - The "Secrets" page has been renamed to "Credentials" and now includes an extra "Kind" column to differentiate `Binding` types. The "Secret" column (showing the referenced credential resource name) has been removed  
  - A hint is displayed when a `Secret` is referenced by another `Binding`, and deletion is prevented if a secret is in use.  
  - Refactored the credential selection dropdown, aligned icons with "Credentials" page by @grolu [#2336]
- `[USER]` Kubernetes warning notifications are dismissed after 5 seconds by @petersutter [#2330]
- `[USER]` Implemented virtual scrolling for the cluster list. Rows are now rendered dynamically as you scroll, replacing the previous paging option. This improvement optimizes performance and provides a smoother browsing experience when viewing large data sets by @grolu [#1674]
- `[USER]` When editing an existing secret, the dialog now displays all associated data, providing clear context for review and modification by @grolu [#2195]
- `[USER]` Notifications will remain visible as long as the mouse hovers over them, rather than disappearing after 5 seconds. by @petersutter [#2280]
- `[USER]` Real-time updates for projects are now supported. Changes and deletions to projects are instantly reflected in the frontend through the WebSocket connection. by @holgerkoser [#2222]
## 🐛 Bug Fixes

- `[USER]` Minor icon fixes:  
  - Fixed the issue where the connection icon was missing in the subscription progress state  
  - Corrected the generic "box icon" tooltip  
  - A tooltip is now displayed for the subscription state icon by @petersutter [#2331]
- `[USER]` Fixed missing details on error notification by @petersutter [#2280]
- `[USER]` Fixed a couple of issues related to CodeMirror state handling:  
  - Toggling managed fields only works once #2249  
  - Unsaved changes dialog appears though changes were saved #2355  
  - History not reseted correctly after changes were saved  
  - Enter key falls back to default behavior if code completions fail to load by @grolu [#2361]
- `[USER]` Added PowerDNS support by @Lappihuan [#2349]
- `[USER]` Fixed several issues with Create Terminal Dialog:  
  - Disable terminal scheduling on non-managed seeds  
  - Added error handling in case cluster nodes cannot be retrieved  
  - Moved alerts from scrollable container to fixed position to make them always visible by @grolu [#2373]
- `[USER]` The generated kubeconfig for garden cluster access (Account page) previously used the deprecated `--oidc-use-pkce` flag. It has now been replaced with the `--oidc-pkce-method` flag. Please redownload your kubeconfig if you encounter any deprecation messages. by @benedikt-haug [#2353]
- `[USER]` Fixed missing terminal shortcuts for "shoot" and "cp" scopes by @Lappihuan [#2339]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.80.0`
