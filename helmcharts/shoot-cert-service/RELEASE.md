# [gardener/gardener-extension-shoot-cert-service]

## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by `Johannes Scheerer <johannes.scheerer@sap.com>` [$7ab1bd02618105eed26fbdd829016be587ad0891]