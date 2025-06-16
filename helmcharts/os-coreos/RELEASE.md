# [gardener/gardener-extension-os-coreos]

## 📰 Noteworthy

- `[OPERATOR]` It should be noted that this will **NOT** work for nodes already created with a default time sync service provided by this extension by @nschad [#190]
## ✨ New Features

- `[OPERATOR]` Added option to opt-out of the default ntp configuration provided by this extension. by @nschad [#190]
- `[OPERATOR]` Allow on shoot by shoot basis to override global extension options by @nschad [#192]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an RBAC issue when deploying this extension through the Gardener operator. by @Wieneo [#196]
- `[OPERATOR]` Restart ntpd if ntp.conf changes. by @dergeberl [#194]
- `[OPERATOR]` The provision OSC script does not run anymore when the node is rebooting.  by @oliver-goetz [#166]
## 🏃 Others

- `[OPERATOR]` The image repository in the Helm-Chart is updated to point to the current location in Google Artefact Repository (GAR). by @MrBatschner [#168]
- `[OPERATOR]` `extension-os-coreos` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#139]

## Helm Charts
- os-coreos: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-coreos:v1.25.0`
## Container (OCI) Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.25.0`
