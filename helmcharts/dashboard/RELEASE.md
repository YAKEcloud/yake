# [gardener/dashboard]

## ✨ New Features

- `[USER]` Adds line selection highlighting in the `Shoot` YAML editor when selecting the line numbers. The line selection is reflected in the URL. by @petersutter [#1982]
- `[USER]` Available purposes now depend on enabled add-ons, which can only be activated if the purpose is set to `evaluation`. Hints have been added to explain potential limitations in purpose selection by @grolu [#2031]
## 🐛 Bug Fixes

- `[USER]` Resolved an issue where updates to existing worker groups would fail if an unused zone network configuration was present by @grolu [#2048]
- `[USER]` chart: An issue causing the `controlledValues: RequestsOnly` field not to be set for the `gardener-dashboard-vpa` VPA is now fixed. by @ialidzhikov [#2017]
- `[OPERATOR]` Upgraded the gardener dashboard to use Node.js version v22.7 which resolves  [CVE-2024-24806](https://nvd.nist.gov/vuln/detail/CVE-2024-24806) by @holgerkoser [#2063]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.77.0`
