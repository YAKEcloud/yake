# [github.com/gardener/gardener:v1.141.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the guestbook TM test to fail against IPv6 Shoot clusters in now fixed. by @plkokanov [[#14705](https://github.com/gardener/gardener/pull/14705)]
- `[DEPENDENCY]` The `reconcileSeedWebhookConfig` function now correctly reconciles both `MutatingWebhookConfiguration` and `ValidatingWebhookConfiguration` for extensions that register both mutating and validating admission webhooks. Previously, only the first configuration was reconciled due to a premature return in the loop. by @Roncossek [[#14688](https://github.com/gardener/gardener/pull/14688)]

## 🏃 Others
- `[OPERATOR]` Add `resourceId` for image `istio-basic-auth-server` to fix overwrite image lookup by @MartinWeindel [[#14721](https://github.com/gardener/gardener/pull/14721)]
- `[OPERATOR]` Certain best-practice Envoy settings for HTTP2 protocol options have been applied to `istio-ingressgateways`. by @oliver-goetz [[#14685](https://github.com/gardener/gardener/pull/14685)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ext-authz-server` from `v0.2.0` to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/ext-authz-server/releases/tag/v0.3.0) by @ScheererJ [[#14728](https://github.com/gardener/gardener/pull/14728)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:a533cff53ce26faae8d16ce777e42acfaec59f37b14e037f3df49897eb6e37a6`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:f9a88c4286072181ba44333dae0899fd7f04e6109deee7649b7ec4225d061c2e`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:e4a314c878793de9230de8e578f4affde97f13669773b1038a1cedb542e3a46f`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:ec09bb23be84cdc04592a29db374e1107b91114c4420523bb8ad52a07777d2e2`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:2f4e2274461634f42f90fb5787cf2176d00079b0dcb1cbd6d6b06b5e8bfa3243`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:a20de14a51d7512cf7e4658a4e52a2c60dff17efbf2965ef20565a696619aa6a`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:0723efdd00b677215935e8d86c5568c7c583afbecc130f1a281bd1da4ccacb67`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:e1ddbc08706eb9ac4af03811a12553cadeb00915f890883572ba7c267173473f`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:2904444a43a685fee5e601b621603114585857c6205d3d9286921a114110849c`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:a592e08ced947cda1565a4bf3800785c2596880940542843787388baf0ad51ee`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:63efdd9693ec670ba326fd4c3f70f88702aa41aaac69c268c83ab4a69820eea1`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:f61bcb10bfbd98c0a17d944d061357b78a59e09f79bc207db64203488bfb6ebd`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:358db949d83420843f863158d5b97d6a7d2d6df8ed48e4ac4a442e883387c0d9`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:90d8da86f54ce63dd043285388d7acce0f9b3fb30f15e040ae4452f59d1d5b02`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:1c50c5a130190374ed9ddf8244e48585ef15fc4bed428817b7db101e8b14d747`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:9b1947be7ce2fe329591e02acb40960aadb1c41a88f9b8b9e10824ed5dd85787`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:0406036d984dcb000eb4a7af85a453ca7ec8a5cf7772c0cf7dfdbd6e576ba881`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:c5272548e8a05a13aeaf02d69bc1b10a57fd0e3de0ce44cf51433b43d00f964b`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.1`
