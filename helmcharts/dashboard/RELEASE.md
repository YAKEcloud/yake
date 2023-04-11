# [dashboard]
## 🐛 Bug Fixes
* *[OPERATOR]* The `dashboard-terminal-kube-apiserver-${seedName}` `Service` now points to the `default/kubernetes` `Service`, instead of the external URL of the kube apiserver ([gardener/dashboard#1470](https://github.com/gardener/dashboard/pull/1470), [@petersutter](https://github.com/petersutter))