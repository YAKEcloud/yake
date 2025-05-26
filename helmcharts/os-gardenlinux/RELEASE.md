# [gardener/gardener-extension-os-gardenlinux]

## ⚠️ Breaking Changes

- `[USER]` The os-gardenlinux extension does no longer enable and restart the `docker` unit as part of the init OperatingSystemConfig. If you, as end user, rely on the docker unit to be enabled by default on the Node, this is a breaking change for you. In such case, you would need to enable the docker unit on your own.  
  Pay attention that [gardenlinux@1443.1+](https://github.com/gardenlinux/gardenlinux/releases/tag/1443.1) no longer includes the `docker` binary unit in the OS. by @Kostov6 [#221]
## 🏃 Others

- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#242]
- `[OPERATOR]` The os-gardenlinux extension does no longer enable and restart the `docker` unit as part of the init OperatingSystemConfig. Gardener and Kubernetes does no longer support `docker` as CRI. Gardener does no longer rely on the `docker` binary to be present on the Nodes. [gardenlinux@1443.1+](https://github.com/gardenlinux/gardenlinux/releases/tag/1443.1) no longer includes the `docker` binary unit in the OS. by @Kostov6 [#221]
- `[OPERATOR]` Limit RBAC verbs for `cluster` resource and remove obsolete `configmap` rules by @Roncossek [#253]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#243]
- `[OPERATOR]` `extension-os-gardenlinux` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#207]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.30.0`
## Docker Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.30.0`
