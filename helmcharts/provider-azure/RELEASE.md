# [gardener/machine-controller-manager]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @ccwienk [gardener/machine-controller-manager#878]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix for edge case of Node object deletion missed during machine termination. by @elankath [gardener/machine-controller-manager#887]
- `[DEVELOPER]` MCM restart happens properly in integration tests now. This fix will get activated, once this version is vendored in your mcm-provider by @sssash18 [gardener/machine-controller-manager#879]
## 🏃 Others

- `[DEVELOPER]` Bump `k8s.io/*` deps to `v0.28.2` by @afritzler [gardener/machine-controller-manager#858]
- `[DEVELOPER]` go-git now removed from dependencies due to CVE's. by @elankath [gardener/machine-controller-manager#896]
- `[OPERATOR]` fixed IT for seed with k8s >= 1.27 as control cluster  by @piyuagr [gardener/machine-controller-manager#869]
- `[OPERATOR]` Architecture field added in the nodetemplate. This will allow CA to pickup architecture from machine class and schedule pods on relevant arch nodes. by @sssash18 [gardener/machine-controller-manager#894]
- `[OPERATOR]` machine controller won't reconcile machine on non-spec update events by @himanshu-kun [gardener/machine-controller-manager#877]
## 📖 Documentation

- `[DEVELOPER]` Phase transition diagram for a machine object is added to FAQs by @himanshu-kun [gardener/machine-controller-manager#886]
# [gardener/gardener-extension-provider-azure]

## ✨ New Features

- `[OPERATOR]` Updated the default storage account SKU from StandardLRS to StandardZRS to enhance data durability and availability. by @seshachalam-yv [#790]
## 🐛 Bug Fixes

- `[DEVELOPER]` `source-` prefix of `BackupEntry` name is being ignored when performing entry deletion by @Kostov6 [#805]
## 🏃 Others

- `[OPERATOR]` fix an issue where an empty infrastructure state would cause issues when picking the proper reconciler. by @kon-angelo [#787]
- `[OPERATOR]` Fix an issue where backupentry secrets would not be deleted due to incorrect credential format error. by @kon-angelo [#795]
# [gardener/machine-controller-manager-provider-azure]

## 🏃 Others

- `[OPERATOR]` Fixed handling for data disk in ToBeDetached=true state during vm deletion by @unmarshall [gardener/machine-controller-manager-provider-azure#132]
- `[OPERATOR]` Fixed the gap where VM marketplace images with no plans were not handled properly. Now one can start VMs having marketplace image with no plan. by @unmarshall [gardener/machine-controller-manager-provider-azure#134]
- `[USER]` Fixed recording of erroneous metrics for driver and API requests by @unmarshall [gardener/machine-controller-manager-provider-azure#130]
- `[USER]` Uses new Azure SDK as the older go-autorest is out of support.   
  Adds 2 new metrics which compute driver API call duration and Azure API call duration for all successful API calls.  
  Recently introduced Azure fakes are used extensively for unit tests.  
  Driver.GetMachineStatus now only gets the status from the Machine and not from associated NIC(s).  
  Deletion of a machine now cascade deletes NIC(s) and Disk(s) (OSDisk and DataDisk(s)) as well. Previously it was a 2 step process of detatch followed by a delete.  
  In the API following have been marked as deprecated:  
  - Constants: [api.AzureClientID, api.AzureClientSecret, api.AzureSubscriptionID, api.AzureTenantID, api.AzureAlternativeClientID, api.AzureAlternativeClientSecret, api.AzureAlternativeSubscriptionID, api.AzureAlternativeTenantID, api.MachineSetKindVMO and api.MachineSetKindAvailabilitySet]  
  - AzureVirtualMachineProperties.MachineSet has been marked as deprecated by @unmarshall [gardener/machine-controller-manager-provider-azure#105]
- `[USER]` Updated the following dependencies:  
  --------------------------------------------------------------------------------------------------------------  
  * github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/compute/armcompute/v5 [v5.3.0-beta.2 to v5.3.0]  
  * github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/marketplaceordering/armmarketplaceordering [v1.2.0-beta.3 to v1.2.0]  
  * github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/network/armnetwork/v4 [v4.3.0-beta.1 to v4.3.0]  
  * github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/resources/armresources [v1.2.0-beta.3 to v1.2.0] by @unmarshall [gardener/machine-controller-manager-provider-azure#117]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update go -> v1.21.5 by @kon-angelo [gardener/terraformer#146]
- `[OPERATOR]` Update alpine -> v1.29.0 by @kon-angelo [gardener/terraformer#146]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.42.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.42.0`
