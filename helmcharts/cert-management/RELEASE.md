# [gardener/cert-management]

## ✨ New Features

- `[USER]` The algorithm and size for the private key can now be specified in the certificate spec section to override the default algorithm `RSA` with key size 2048.  
  Supported algorithms are `RSA` and `ECDSA`. For `RSA` the allowed key sizes are `2048`, `3072`, and `4096` with `2048` as default is not specified explicitly. For `ECDSA` the allowed key sizes are `256` and `384` with `256` as default.  
  These algorithms and key sizes are supported by Let's Encrypt. For other ACME servers please check their documentation for information about supported combinations. by @MartinWeindel [#168]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.13.0`
