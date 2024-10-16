# [gardener/gardener-extension-provider-gcp]

## 📰 Noteworthy

- `[USER]` In order to reduce log events, only the minimal required changes will be made when applying firewall rules using the flow-reconciler. This matches the behaviour of the Terraform-reconciler. by @AndreasBurger [#831]
- `[OPERATOR]` Switch to upstream CCM for kubernetes versions greater than `1.31.0` by @AndreasBurger [#842]
## ✨ New Features

- `[USER]` Enable support for the field `shoot.Spec.CloudProfile` alongside `shoot.Spec.CloudProfileName` and enable the future use of `NamespacedCloudProfile`. by @LucaBernstein [#853]
- `[USER]` The provider-gcp extension does now support shoot clusters with Kubernetes version 1.31. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md) before upgrading to 1.31.  by @ialidzhikov [#844]
- `[USER]` The admission webhook now validates `CredentialsBinding`s. by @dimityrmirchev [#832]
## 🏃 Others

- `[OPERATOR]` The provider-gcp extension no longer configures min/maxAllowed in any managed VPA resource. by @AndreasBurger [#854]
- `[OPERATOR]` Update CCM and CSI-sidecar containers to latest version by @AndreasBurger [#816]
- `[OPERATOR]` Disable soft-delete for new GCP `backupbuckets`. by @kon-angelo [#834]
- `[DEVELOPER]` Update gardener/gardener to 1.103.0 and golang to 1.23.0 by @hebelsan [#841]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.39.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.39.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.39.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.39.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.39.0`
