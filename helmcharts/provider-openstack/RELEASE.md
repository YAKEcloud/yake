# [gardener/gardener-extension-provider-openstack]

## 🏃 Others

- `[OPERATOR]` Add migration test for the infrastructure reconciler by @kon-angelo [#779]
- `[OPERATOR]` QoL improvements to the infrastructure reconciler by @kon-angelo [#779]
- `[OPERATOR]` A problem with deploying MachineClasses that reference an operating system image whose version contains a `+` character was fixed.  by @AndreasBurger [#795]
- `[USER]` When a missing router is being encountered during reconciliation/deletion it will now be classified as `ERR_INFRA_DEPENDENCIES`, enabling force deletion of the shoot via annotation. by @AndreasBurger [#794]

## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.41.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.41.0`
