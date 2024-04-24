---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.18.5</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` As AWS "us-gov" zones do not support alias target records, they are excluded from the list of canonical hosted zones used to decide if `ALIAS` records are created instead of `CNAME` records. by @MartinWeindel [#365]
- `[USER]` Keep stale entries of other providers of the same zone untouched if all providers but one have invalid credentials and last valid provider is removed. by @MartinWeindel [#364]
## 🏃 Others

- `[OPERATOR]` Update golang from `1.21.6` to `1.22.2` by @MartinWeindel [#366]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.5`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.47.0</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Keep stale entries of other providers of the same zone untouched if all providers but one have invalid credentials and last valid provider is removed. by @MartinWeindel [gardener/external-dns-management#364]
- `[OPERATOR]` As AWS "us-gov" zones do not support alias target records, they are excluded from the list of canonical hosted zones used to decide if `ALIAS` records are created instead of `CNAME` records. by @MartinWeindel [gardener/external-dns-management#365]
## 🏃 Others

- `[OPERATOR]` Update golang from `1.21.6` to `1.22.2` by @MartinWeindel [gardener/external-dns-management#366]
# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.91.0 to 1.92.0. by @dependabot[bot] [#318]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.47.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.47.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.47.1</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[OPERATOR]` fix regression bug "secret name is not defined as named resource references at 'spec.resources'" introduced with #320 by `Martin Weindel <martin.weindel@sap.com>` [$490d837737a4f524b83b8997a18f31e860f23fc3]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.47.1`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.47.1`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.30.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` The costObject for workerless shoots is now determined correctly. by @vicwicker [#103]
- `[OPERATOR]` Add garden_version to the garden_shoot_info metric by @Kumm-Kai [#101]
- `[OPERATOR]` Rename `garden_version` label to `gardener_version` on `garden_shoot_info` metric. by @rickardsjp [#102]

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.30.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.30.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` The costObject for workerless shoots is now determined correctly. by @vicwicker [#103]
- `[OPERATOR]` Add garden_version to the garden_shoot_info metric by @Kumm-Kai [#101]
- `[OPERATOR]` Rename `garden_version` label to `gardener_version` on `garden_shoot_info` metric. by @rickardsjp [#102]

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.30.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.54.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` DNSRecord controller will not create ALIAS DNS records for AWS "us-gov" zones anymore. by @AndreasBurger [#930]
## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/external-dns-management from 0.18.4 to 0.18.5. by @AndreasBurger [#930]

## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.54.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.54.1`


</details>

<details>
<summary><b>Update cert-management to <code>0.14.1</code></b></summary>

# [gardener/cert-management]

## 🏃 Others

- `[OPERATOR]` Fix cluster configuration for new source controllers `istio-gateways-dns` and `k8s-gateways-dns`. by @MartinWeindel [#175]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.14.1`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.43.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.91.0 to 1.92.0. by @dependabot[bot] [#249]
- `[OPERATOR]` Bumps golang from 1.22.1 to 1.22.2. by @dependabot[bot] [#247]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.92.0 to 1.93.0. by @dependabot[bot] [#251]
- `[USER]` The defaults for the private key of new certificates have been changed from `RSA 2048bit` to `RSA 3072bit`. Existing certificates will make use of these new defaults when they are renewed. by @gardener-robot-ci-3 [#253]
# [gardener/cert-management]

## ✨ New Features

- `[USER]` The Istio resource `Gateway` can now be annotated with `cert.gardener.cloud/purpose=managed` to enable the automatic creation of `Certificate` resources for domain names extracted from hosts fields in this resource or related `VirtualServices` resources.  
  The `Gateway` and `HTTPRoute` resources from the Gateway API are supported in a similar way. by @MartinWeindel [gardener/cert-management#174]
## 🏃 Others

- `[OPERATOR]` Fix cluster configuration for new source controllers `istio-gateways-dns` and `k8s-gateways-dns`. by @MartinWeindel [gardener/cert-management#175]
- `[OPERATOR]` Support deployment specific default values for private key algorithm and size with the new command line options `--default-private-key-algorithm`, `--default-rsa-private-key-size`, `--default-ecdsa-private-key-size` by @MartinWeindel [gardener/cert-management#171]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.43.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.74.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Ticket titles start with `[<projectName>/<shootName>]`, unless overridden by a Gardener administrator's configuration. by @petersutter [#1830]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.74.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.74.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Ticket titles start with `[<projectName>/<shootName>]`, unless overridden by a Gardener administrator's configuration. by @petersutter [#1830]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.74.1`


</details>
