# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-admission-aws admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#1100]
## 📰 Noteworthy

- `[DEVELOPER]` Updated AWS SDK from v1 to v2 by @AndreasBurger [#1060]
## ✨ New Features

- `[OPERATOR]` Adjustments for additional deployment of extension and admission controller on Garden runtime cluster by gardener-operator. by @MartinWeindel [#1100]
- `[OPERATOR]` Support specification of extended resources in provider config node template without re-specifying core resources. by @elankath [#1010]
## 🏃 Others

- `[OPERATOR]` Fixed terraform deploy and integration tests for IPv6. by @axel7born [#1112]
- `[OPERATOR]` update images of pause and alpine container by @hebelsan [#1101]
- `[OPERATOR]` Add IPv4 ranges from Spec.Networking to Status.Networking. by @axel7born [#1094]
- `[OPERATOR]` Filter pod ranges for IPv4 CIDRs to configure Custom-Route-Controller. by @axel7born [#1138]
- `[OPERATOR]` Create bastion vm from the info provided in the cloud profile bastion section by @hebelsan [#1040]
- `[OPERATOR]` Added validation to allow only IPv6-only shoot clusters, but not dual-stack as it is not supported, yet. by @ScheererJ [#1095]
- `[OPERATOR]` Fixed an issue preventing the deployment of internal load balancers in IPv6-only shoots. by @axel7born [#1108]
- `[OPERATOR]` Add `NamespacedCloudProfile` admission mutation and validation to support custom machine images and types. by @LucaBernstein [#1136]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#1117]
- `[OPERATOR]` Fix an issue where the "0.0.0.0/0" route creation would fail if the nat-gateway was previously deleted. by @kon-angelo [#1111]
- `[OPERATOR]` Update gardener to v1.106.1 by @hebelsan [#1110]
- `[OPERATOR]` Dual-stack networking, i.e. networks with IPv4 and IPv6, are allowed now. by @ScheererJ [#1139]
- `[OPERATOR]` AWS load balancers controller is always enabled for IPv6-only and dual-stack shoot clusters. by @ScheererJ [#1099]
- `[OPERATOR]` Harmonize logging output from controller-runtime logger and kubernetes logger. by @DockToFuture [#1105]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @DockToFuture [#1105]
- `[DEPENDENCY]` Update go to version 1.23.3 by @hebelsan [#1121]
- `[DEVELOPER]` Add gosec as sast makefile target by @hebelsan [#1123]
## 📖 Documentation

- `[USER]` Add overview documentation for IPv6 by @ScheererJ [#1143]
# [gardener/aws-custom-route-controller]

## ✨ New Features

- `[USER]` `gosec` was introduced for Static Application Security Testing (SAST). by @ScheererJ [gardener/aws-custom-route-controller#34]
- `[USER]` Update sdk version to v2 by @kon-angelo [gardener/aws-custom-route-controller#48]
- `[USER]` The `aws-custom-route-controller` only adds node routes for IPv4 pod CIDR ranges and does not interfere with IPv6 routes. by @DockToFuture [gardener/aws-custom-route-controller#43]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [gardener/aws-custom-route-controller#44]
- `[OPERATOR]` Bumps golang from 1.23.1 to 1.23.2. by @dependabot[bot] [gardener/aws-custom-route-controller#33]