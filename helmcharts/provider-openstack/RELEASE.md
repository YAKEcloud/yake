# [gardener/gardener-extension-provider-openstack]

## ⚠️ Breaking Changes

- `[OPERATOR]` Deprecated configuring bastion via helm chart config map by @hebelsan [#838]
## 📰 Noteworthy

- `[OPERATOR]` Added support for configuring bastion vm from CloudProfile's bastion section by @hebelsan [#838]
## 🏃 Others

- `[DEPENDENCY]` Add gosec as sast makefile target by @hebelsan [#902]
- `[DEPENDENCY]` Update go to version 1.23.3 by @hebelsan [#900]
- `[OPERATOR]` Fix an issue where provider-openstack required permissions for share network operations even when not required by the `InfrastructureConfig`. by @kon-angelo [#885]
- `[OPERATOR]` Update gardener/gardener to v1.107.0 by @hebelsan [#896]
- `[OPERATOR]` Fix an issue where the deletion with the flow reconciler would fail if the network was already deleted. by @kon-angelo [#898]
- `[OPERATOR]` Added validation to prevent IPv6-only/dual-stack clusters as they are not supported, yet. by @ScheererJ [#886]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#895]
- `[OPERATOR]` Fix possible nil-pointer deref when looking for networks. during reconciliation by @AndreasBurger [#879]
- `[OPERATOR]` subnet overlapping, missing expected router and Policy doesn't allow .* to be performed errors are now non-retryable user errors. by @RadaBDimitrova [#894]
- `[OPERATOR]` Updating CSI driver provisioner ClusterRole rules by @hebelsan [#880]
- `[DEVELOPER]` Update gardener/gardener to v1.105.0 by @hebelsan [#881]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.43.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.43.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.43.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.43.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.43.0`
