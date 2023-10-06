# [gardener/gardener-extension-shoot-cert-service]

## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now labelled with `shoot.gardener.cloud/no-cleanup=true` to prevent `gardenlet` to deleting them during shoot deletion. by @MartinWeindel [#195]
- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by @rfranzke [#194]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.0 to 1.21.1. by @dependabot[bot] [#193]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#196]
# [gardener/cert-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel [gardener/cert-management#138]
- `[USER]` Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel [gardener/cert-management#140]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [gardener/cert-management#142]
- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [gardener/cert-management#142]