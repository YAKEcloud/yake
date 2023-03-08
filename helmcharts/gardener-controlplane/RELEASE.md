# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed which prevented `blackbox-exporter` to scrape the `kube-apiserver`s of shoot clusters via the `istio-ingressgateway`. As a result, its "external probe" was always failing. ([gardener/gardener#7604](https://github.com/gardener/gardener/pull/7604), [@rfranzke](https://github.com/rfranzke))