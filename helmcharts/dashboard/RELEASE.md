# [gardener/dashboard]

## ✨ New Features

- `[OPERATOR]` Enhanced the `gardener-dashboard` helm chart with additional configuration options:  
  * Browser window title is now customizable via `Values.global.dashboard.frontendConfig.branding.documentTitle`  
  * Manual configuration of OIDC redirect URLs is supported through `Values.global.dashboard.oidc.redirectUris`. This is particularly useful for local development setups by @holgerkoser [#1611]
## 🐛 Bug Fixes

- `[USER]` If the login session in the dasboard expires the user no longer gets an error message `JWT expired`. In case of autoLogin is enabled the user is redirected back to the last visited page by @holgerkoser [#1612]
- `[USER]` Fixed duplicative tooltip on issue since value by @petersutter [#1614]
- `[USER]` Fixed a typo in shoot credentials rotation by @memeToasty [#1610]
- `[USER]` Fixed two memory leaks in `GTimeString` and `localStorage` store. This issue was causing an unnecessary allocation of memory, which, over time, led to degraded UI performance and eventually leading to Out of Memory crashes. by @holgerkoser [#1613]
## 🏃 Others

- `[OPERATOR]` This release includes nodejs `v20.8.1` by @holgerkoser [#1609]