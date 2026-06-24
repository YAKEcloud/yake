# [github.com/gardener/gardener-extension-networking-calico:v1.59.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#834](https://github.com/gardener/gardener-extension-networking-calico/pull/834)]

## 📰 Noteworthy
- `[USER]` Support Calico NFTables mode by @hown3d [[#824](https://github.com/gardener/gardener-extension-networking-calico/pull/824)]

## 🏃 Others
- `[OPERATOR]` Calico charts are update to version v1.31.5 by @axel7born [[#831](https://github.com/gardener/gardener-extension-networking-calico/pull/831)]
- `[OPERATOR]` Support `admissionregistration.k8s.io/v1beta1` runtime config for MutatingAdmissionPolicy detection by @DockToFuture [[#827](https://github.com/gardener/gardener-extension-networking-calico/pull/827)]
- `[OPERATOR]` Disable Felix IP-in-IP when overlay is explicitly disabled to prevent unnecessary tunnel device creation and incorrect MTU overhead. by @axel7born [[#843](https://github.com/gardener/gardener-extension-networking-calico/pull/843)]
- `[OPERATOR]` Calico `calico-node` and `multus` DaemonSets now use `revisionHistoryLimit=2` to comply with the gardener component checklist. by @alliasgher [[#835](https://github.com/gardener/gardener-extension-networking-calico/pull/835)]
- `[OPERATOR]` Seamless overlay switch activation is aligned with the `MutatingAdmissionPolicy` admission API availability across Kubernetes versions: `>= 1.36` (GA) activates automatically, `< 1.36` (alpha or beta, off by default per KEP-3136) requires explicit feature gate + `runtimeConfig` opt-in. by @DockToFuture [[#829](https://github.com/gardener/gardener-extension-networking-calico/pull/829)]

## application/spdx+json
- cni-plugins-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins@sha256:4a3a3fa29a6b5c48ba70fe0a7df3371dfcdd47a3634367764dc04f81379ec4e3`
- cni-plugins-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins@sha256:dca348d64aab8584427382a6d8450ed34c62cf56c7d43385fa0080aa7445dfea`
- gardener-extension-admission-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico@sha256:a24ebbcea37d09ac9a06efde7923f49c5bba3ecfa4d569ec35e331c403734ec7`
- gardener-extension-admission-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico@sha256:d42b2ceadd6432ba8cf8ae06cb8e603218d189411abfca5d6f7e068b7190286e`
- gardener-extension-networking-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico@sha256:6620e19ffc78fb5ae0cabfb40d31351a7e8a9d6cc585badae366a47801269122`
- gardener-extension-networking-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico@sha256:d2eaae1bc8b9f71671e3a4efccc4210bb59fa049d28de964e95bd1092ca86bbf`
## application/vnd.cyclonedx+json
- cni-plugins-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins@sha256:62200434226656fcb99d0cffd93c1c1ed2743d181dac39d9a5c6cf71d390755e`
- cni-plugins-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins@sha256:93922efce9551ea6c97650dc3422415c0a7aa1481e4093e3c895f2d028f82189`
- gardener-extension-admission-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico@sha256:1e5c2fa6581aabbb0d5255ab2002e434a61793c1f3e6faf81b9af32b4385baab`
- gardener-extension-admission-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico@sha256:e878e24df982e5d7b750c9679e6167c4d9a39ffc53a290ae47510b1ba8724ad6`
- gardener-extension-networking-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico@sha256:593896d862a4d46b0df51a4cbfbfe9f7f753f507e7e7f935ccd4aa239124a66a`
- gardener-extension-networking-calico-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico@sha256:cdbf1198bbb01221de4e57284fc689bd6828176ca32c38ca0144856f6c4b6b1f`
## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.59.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.59.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.59.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.59.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.59.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.59.0`
