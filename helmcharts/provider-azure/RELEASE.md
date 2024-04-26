# [gardener/gardener-extension-provider-azure]

## 🏃 Others

- `[OPERATOR]` Fix a bug where the terraform-provider-azure would not properly delete shoot resource groups. The infrastructure-controller will issue an additional delete operation for the shoot's resource group. by @kon-angelo [#842]
- `[OPERATOR]` The extension will now try to delete empty resource groups on infrastructure creation after an unsuccessful terraform-apply operation.   
  A resource group may not be ready for some time after a successful create call returns. The azurerm terraform-provider on resource group does not respect that and the GET call may result in a NotFound error creating a deadlock. The extension will try to workaround this by deleting empty resource groups under the condition that this is a Create operation. by @AndreasBurger [#844]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.42.3`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.42.3`
