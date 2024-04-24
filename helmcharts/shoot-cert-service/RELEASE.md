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
