# [gardener/cert-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel [gardener/cert-management@dbff065ac5686aaddd8d2eb1fb6c62c3520b0c3d]
- `[USER]` Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel [gardener/cert-management@dbff065ac5686aaddd8d2eb1fb6c62c3520b0c3d]