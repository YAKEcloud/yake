# [github.com/gardener/gardener:v1.141.5]

## 🐛 Bug Fixes
- `[USER]` Fix an issue where shoot node logging is broken when the `valitail` and `opentelemetry-collector` systemd units start before their auth-token file is written to disk. The units now wait for the token file to exist before starting, ensuring logs and telemetry from worker nodes are reliably shipped by @iypetrov [[#14903](https://github.com/gardener/gardener/pull/14903)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:39616e02a4da7688d29c22af1e9bb7ed88ae58e3049d3212026cdf9e74ed4720`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:41523e7fb5160e036ead3ad15e562d8a357caceefde2275a41db2798c7bd17f2`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:53f1ec243c9a758bdd08c97f73a787c3ee537bbaf83edd7e316664f1500afde9`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:545ea8bac3d03e2a46a2cc555880d5acd70f65f3497eb87ba74aae5ec1553958`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:7e78a6cfaa3d8c1af317c2dc5712fb84462c2f8e65969d73f42f02655af09136`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:afc6813bf6aba3f0414931331f795b439ce39c46c1aeff3f9a12605c05e0a9cb`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:6b52bcb866375fb232f62759c69fe9c4f84b6d991d451bd1655da62eb0c74afe`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:d9a5bb96d67f9d69a91cf09c55ea6d7a817f108b8a3c91509217edb9ee8b528b`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:47f8d9ea9aa762deea007db79c703e98b7245c1931e6ad518560b24b92b466f8`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:819572e61855d890466dd6e75fee21e6642dfb7f884a32ba3f5ba08e1d42f3d6`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:1d0ef26f699eea62bd3e03bb691d56e993a1c2b3497d0d84ce5a1eedf9145ce2`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b630b100918bde19df1f18b0d799c8e1c85e3f56f8c1dff0fec812054ea9c8d6`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:2c3fdfccb3a0530cadeaef574bb6469973b2bf2c51421c4ea744cc27dc167a81`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:64df0ff0b3e5b90801be025738d404a71aaea4fe622088ef8fcf821684d2b08b`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:e7df1e8a1b1e7c0db9ef34e650e973658fe55a1066b932c95c7b171fe502717b`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:e91afa5610825fb962e035b9fdbf2618f6d6024a65765d64f8ff72e4d6a71040`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:01ab13b1d08bf066d33969867471a81c703079ea4c578da352736aadfdc289b7`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:3df951c7365a0d2bfe6a7ebe55b2988bb068082cf6b1543a3527452fa6182213`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.5`
