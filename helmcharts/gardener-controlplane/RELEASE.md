# [github.com/gardener/gardener:v1.140.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fixed that caused unintentional `ShootState` creations for `Shoot`s running on managed seed clusters (those backed by `ManagedSeed` objects). The affected `ShootState` resources are automatically cleaned up by `gardenlet` during start-up. by @tobschli [[#14652](https://github.com/gardener/gardener/pull/14652)]
- `[USER]` Cluster-proportional autoscaling of coredns now works with Kubernetes >= 1.33 by @ScheererJ [[#14650](https://github.com/gardener/gardener/pull/14650)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-discovery-server` from `v0.9.0` to `v0.10.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.10.0) by @gardener-ci-robot [[#14609](https://github.com/gardener/gardener/pull/14609)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:8e632c165a58e3d73b7b8d91ba20c6c9c0d56eb2c77eb51ed8f68c53b7c119ec`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:b1bbf47c6050a0b0bd375b1caa6ed7676ab3f55c415ebf7d0b5ef6e474d6b3c0`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:3dbd103fd2bff6f557201f8c2089d835ab8690aa7c45fc2ab3ea9d246faa4d5c`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:bba291fa54adf1fee863013d8e1853eb1b69e269957837619ccb44882293d79e`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:197cc1f8adb17c6dedf2bff14cae41e2995101208b664ddea635e79410738d61`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:3f2d2108871940f6a8ad215cc221044fc27998f835ee4a4a5b486f7b0f14b080`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:666d9f776aa93a4aadc2abe094acfab8b042407255ee44f6f085e346741c3478`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:dfc8facb4841da0a19feea65952dbfc3306404ada2e595ef1ca322fd594db0c7`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:670478cf01ee601df03a77215e1c79fbda52181d4ec43c293b43cb2c4c468faf`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:e69825509720518c2419a2b701e9a9433359a4a3d067176473557d2587a4b4f6`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:0ce0315f2f8b870e9518a63a6ef3ce1d7c3b8f4871a049a5f645c7b6f1f41bb7`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:38781d55c778f4b5432c5b8189b06780eebe2850085ea3268a9111ec328afba7`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:649244b2bebce7cd92c3b6db632a7e8c26a0e4a9f40670ca2ce7da7f205551f4`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:b55360921c2a8c84a1897a3d64c25dfbb3f0603d0c3d9d20c516a0a2c3b76e26`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:5155120ca1aac1ce9b752b1a629fcef61c246e1e74621e3c58aead8bdfd33bac`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:b547e944c7be9504bc0ec013beaaf507bb4794e22ceb9d925456d1eab8430849`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:44b1e433d7e7870a787774b2964657a4113ca758ac1e5a6444ea820f484ec038`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:fe309373e4bd99f3a1ae293fefce589cd8a4afe69269db261ce6c1fd2986f1e4`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.140.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.140.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.140.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.140.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.140.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.140.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.140.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.140.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.140.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.140.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.140.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.140.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.140.2`
