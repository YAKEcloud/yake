# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` Creating a `DNSEntry` for the base domain of a hosted zone is now allowed for all providers but `azure-dns` and `azure-private-dns`. by @MartinWeindel [gardener/external-dns-management#316]
## 🏃 Others

- `[USER]` Infoblox provider: support for extensible attributes by @nitrocb [gardener/external-dns-management#320]
- `[OPERATOR]` Update AWS canonical hosted zones from github.com/kubernetes-sigs/external-dns repository. by @MartinWeindel [gardener/external-dns-management#322]
- `[OPERATOR]` Bumps golang from 1.20.7 to 1.21.1. by @dependabot[bot] [gardener/external-dns-management#318]
- `[OPERATOR]` Additional AWS regions `ap-southeast-4` and `il-central-1` with canonical hosted zones for ELBs by @MartinWeindel [gardener/external-dns-management#321]
- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [gardener/external-dns-management#323]
- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [gardener/external-dns-management#323]
# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-dns-service` no longer supports Shoots with Кubernetes version < 1.24. by @shafeeqes [#241]
## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by @rfranzke [#240]
- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now labelled with `shoot.gardener.cloud/no-cleanup=true` to prevent `gardenlet` to deleting them during shoot deletion. by @MartinWeindel [#243]
## 🏃 Others

- `[OPERATOR]` Add copy of images.yaml to charts dir to resolve installation issue for landscapes using RBSC by @MartinWeindel [#237]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#244]
- `[OPERATOR]` Bumps golang from 1.21.0 to 1.21.1. by @dependabot[bot] [#239]