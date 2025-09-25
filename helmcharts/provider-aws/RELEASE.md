# [github.com/gardener/gardener-extension-provider-aws:v1.64.0]

## ✨ New Features
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to use credentials of either `v1.Secret` or `security.gardener.cloud/v1alpha1.WorkloadIdentity` by @vpnachev [[#1461](https://github.com/gardener/gardener-extension-provider-aws/pull/1461)]

## 🏃 Others
- `[OPERATOR]` Update RBAC for extensions running in the runtime cluster. by @hebelsan [[#1460](https://github.com/gardener/gardener-extension-provider-aws/pull/1460)]
- `[OPERATOR]` LoadBalancer services in IPv6 and dual-stack clusters can now opt out of automatic dual-stack annotations using `extensions.gardener.cloud/ignore-load-balancer: "true"`. by @axel7born [[#1459](https://github.com/gardener/gardener-extension-provider-aws/pull/1459)]
- `[OPERATOR]` AMI selection for workers' `MachineClass` supports `Cloudprofiles` with `Capabilities`. by @Roncossek [[#1458](https://github.com/gardener/gardener-extension-provider-aws/pull/1458)]
- `[OPERATOR]` Adopts Gardener MachineImage `Capabilities` and introduces `CapabilitySets` to the `providerConfig`. by @Roncossek [[#1306](https://github.com/gardener/gardener-extension-provider-aws/pull/1306)]
- `[OPERATOR]` Migration from dual-stack [IPv4, IPv6] to [IPv4] networking is now allowed. by @axel7born [[#1481](https://github.com/gardener/gardener-extension-provider-aws/pull/1481)]
- `[OPERATOR]` Input validation for shoot fields by @kon-angelo [[#1479](https://github.com/gardener/gardener-extension-provider-aws/pull/1479)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-provider-aws/blob/master/example/extension.yaml) by @timuthy [[#1454](https://github.com/gardener/gardener-extension-provider-aws/pull/1454)]
- `[OPERATOR]` Remove CPU requests for aws-extension components in Shoot and Seed. by @voelzmo [[#1448](https://github.com/gardener/gardener-extension-provider-aws/pull/1448)]
- `[OPERATOR]` Update mcm AWS image from v0.25.0 to v0.26.0 by @hebelsan [[#1478](https://github.com/gardener/gardener-extension-provider-aws/pull/1478)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.64.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.64.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.64.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.64.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.64.0`
