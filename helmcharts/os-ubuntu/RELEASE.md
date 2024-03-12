# [gardener/gardener-extension-os-ubuntu]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`) by @ccwienk [#101]
## 📰 Noteworthy

- `[OPERATOR]` It is assumed that `gardenlet`'s `UseGardenerNodeAgent` is turned on by default if the feature gate is not explicitly set. Hence, make sure to use at least Gardener `v1.82` when using this extension version. by @rfranzke [#111]
- `[OPERATOR]` This extension is now prepared to run with an enabled `UseGardenerNodeAgent` feature gate. by @rfranzke [#99]
## 🏃 Others

- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.1-> v1.80.3  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @shafeeqes [#95]

## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.25.0`
