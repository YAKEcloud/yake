# [github.com/gardener/gardener-extension-registry-cache:v0.23.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Deploying the registry-cache admission in a setup where the virtual cluster is NOT enabled is no longer supported. The presence of the virtual cluster is now always required. It is recommended to deploy the registry-cache extension via the gardener-operator. by @dimitar-kostadinov [[#581](https://github.com/gardener/gardener-extension-registry-cache/pull/581)]
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#572](https://github.com/gardener/gardener-extension-registry-cache/pull/572)]
- `[USER]` The use of `..` in the URL path for the `.mirrors.hosts[].host` field of the `registry-mirror` extension is now forbidden. by @dimitar-kostadinov [[#575](https://github.com/gardener/gardener-extension-registry-cache/pull/575)]

## ✨ New Features
- `[DEVELOPER]` The registry-cache extension does now support the [Deploying Gardener Remotely](https://github.com/gardener/gardener/blob/v1.140.0/docs/deployment/getting_started_remotely.md) development setup. by @dimitar-kostadinov [[#566](https://github.com/gardener/gardener-extension-registry-cache/pull/566)]

## 🐛 Bug Fixes
- `[USER]` The generation of a CA bundle path when `.mirrors.hosts[].caBundleSecretReferenceName` from the `registry-mirror` extension is set is now fixed. by @dimitar-kostadinov [[#575](https://github.com/gardener/gardener-extension-registry-cache/pull/575)]

## 🏃 Others
- `[OPERATOR]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/registry` image is updated from 3.1.0 to 3.1.1. by @dimitar-kostadinov [[#576](https://github.com/gardener/gardener-extension-registry-cache/pull/576)]

## application/spdx+json
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:9deff9f848a5cd7c75546859d986dc139e66764b37fc53d76890697244fc6811`
- gardener-extension-registry-cache-admission-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission@sha256:9fb2f3c1055c6c0024b6931482c96a4bb9e377b0614626931419204b2d6013c3`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:42cc378163b1f1fa6ec3c56185d15c1ae24502df3659931e31ee43e6ed65d9eb`
- gardener-extension-registry-cache-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache@sha256:5ac384bfc4ab91aa14b0eb01b6358da397703f4239a722a80a08e439f7519b89`
## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.23.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.23.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.23.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.23.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.23.0`
