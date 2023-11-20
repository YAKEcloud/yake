# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🏃 Others

- `[OPERATOR]` The following images are updated:  
  - `eu.gcr.io/gardener-project/3rd/alpine`: 3.15.8 -> 3.18.4  
  - `registry.k8s.io/pause`: 3.7 -> 3.9 by @plkokanov [#36]
- `[OPERATOR]` Vulnerability scans are disabled for the alpine image as the corresponding container is not accessible from outside of the k8s clusters and not interacted with from other containers or other systems. by @plkokanov [#36]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `eu.gcr.io/gardener-project/gardener/extensions/shoot-rsyslog-relp-admission:v0.2.2`
- gardener-extension-shoot-rsyslog-relp: `eu.gcr.io/gardener-project/gardener/extensions/shoot-rsyslog-relp:v0.2.2`
