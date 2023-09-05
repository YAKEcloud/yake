# [gardener/gardener-extension-os-gardenlinux]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-os-gardenlinux` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#113]
## 🏃 Others

- `[OPERATOR]` The Garden Linux OS extension now features support for vSMP MemoryOne and Garden Linux. It will now consider itself responsible for a new type `OperatingSystemConfig/memoryone-gardenlinux` and understands a `providerConfig` with which certain parameters of MemoryOne can be configured. by @MrBatschner [#116]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.70.2 -> v1.72.0 by @dependabot[bot] [#105]