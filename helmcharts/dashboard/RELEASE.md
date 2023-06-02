# [dashboard]
## ⚠️ Breaking Changes
* *[OPERATOR]* The default ingress class annotation under `Values.global.dashboard.ingress.annotations['kubernetes.io/ingress.class']` will not be set anymore. Instead, the ingress class name will be set using `Values.global.dashboard.ingress.ingressClassName` ([gardener/dashboard#1499](https://github.com/gardener/dashboard/pull/1499), [@petersutter](https://github.com/petersutter))
## 🐛 Bug Fixes
* *[OPERATOR]* Fixed an issue where the helm deployment failed with the error `annotations.kubernetes.io/ingress.class: Invalid value: "nginx": can not be set when the class field is also set` ([gardener/dashboard#1499](https://github.com/gardener/dashboard/pull/1499), [@petersutter](https://github.com/petersutter))