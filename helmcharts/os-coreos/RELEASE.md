# [gardener/gardener-extension-os-coreos]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#82]
## 📰 Noteworthy

- `[OPERATOR]` It is assumed that `gardenlet`'s `UseGardenerNodeAgent` is turned on by default if the feature gate is not explicitly set. Hence, make sure to use at least Gardener `v1.82` when using this extension version. by @rfranzke [#91]
- `[OPERATOR]` This extension is now prepared to run with an enabled `UseGardenerNodeAgent` feature gate. by @rfranzke [#80]
## ✨ New Features

- `[USER]` `os-coreos` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @ary1992 [#79]
## 🏃 Others

- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.80.1-> v1.81.0 by @ary1992 [#79]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.1-> v1.80.0  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#76]

## Docker Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.20.0`
