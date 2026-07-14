# [github.com/gardener/gardener-extension-shoot-rsyslog-relp:v0.14.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#405](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/405)]

## 🏃 Others
- `[OPERATOR]` `rsyslog-relp-configuration-cleaner` DaemonSet now sets `revisionHistoryLimit` to 2 to comply with the gardener component checklist. by @alliasgher [[#406](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/406)]

## application/spdx+json
- gardener-extension-shoot-rsyslog-relp-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:83fc351804cf40f9d91443bc979d4cda8ac0601bc94eaa5d4d6f43e81284cdb9`
- gardener-extension-shoot-rsyslog-relp-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:f59572659806a77ae078f879dbd016be6743f67a3546a14e9e0316e2b9ff5af1`
- gardener-extension-shoot-rsyslog-relp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:8b1f927b27d5ac91e621e4de9582e7ce72ac449d3247ef21a1a5f7e09fb24b09`
- gardener-extension-shoot-rsyslog-relp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:8fe1d77852d0762daf3cb607a5837557c18abaa7004f97fcb87c5c6aa3ed3ca5`
## application/vnd.cyclonedx+json
- gardener-extension-shoot-rsyslog-relp-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:1dd7b4a81cce6f768b0451bdf6a58d26eb5b050a586754bd60c3b7c0e1c34a20`
- gardener-extension-shoot-rsyslog-relp-admission-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission@sha256:842c8309af6b3cb3a8e4b505c2251dd62b91112c483f1611ab98db630e3b6dc8`
- gardener-extension-shoot-rsyslog-relp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:6b4294f109f9028b88ec2cc6feaaa8737ab0cc91334cc83b94c739a57a669006`
- gardener-extension-shoot-rsyslog-relp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp@sha256:c01af58c4da11cc198340381741d370556c376694ab0311e8f4966a91ac9fcba`
## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.14.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.14.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.14.0`
## Container (OCI) Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.14.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.14.0`
