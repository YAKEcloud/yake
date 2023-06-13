# [cert-management]
## ✨ New Features
* *[OPERATOR]* Added metrics named `cert_management_cert_object_expire` for certificate expiration date. ([gardener/cert-management#131](https://github.com/gardener/cert-management/pull/131), [@MartinWeindel](https://github.com/MartinWeindel))
## 🏃 Others
* *[OPERATOR]* The Helm chart is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/cert-management#128](https://github.com/gardener/cert-management/pull/128), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Updated golang builder image from version `1.20.4` to `1.20.5`. ([gardener/cert-management#131](https://github.com/gardener/cert-management/pull/131), [@MartinWeindel](https://github.com/MartinWeindel))