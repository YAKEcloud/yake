# [dashboard]
## ✨ New Features
* *[USER]* Shoot owners and Gardener operators see the same monitoring links: a link to a Grafana, a link to a Prometheus and optionally a link to an alert manager instance. ([gardener/dashboard#1408](https://github.com/gardener/dashboard/pull/1408), [@istvanballok](https://github.com/istvanballok))
## 🐛 Bug Fixes
* *[USER]* Adjust the shoot ingress domain calculation to a bugfix in Gardener 1.64 ([gardener/dashboard#1424](https://github.com/gardener/dashboard/pull/1424), [@istvanballok](https://github.com/istvanballok))
* *[OPERATOR]* Fixed: `Hide no operator action required issues` did not consider user errors in `constraints` ([gardener/dashboard#1407](https://github.com/gardener/dashboard/pull/1407), [@grolu](https://github.com/grolu))
## 📖 Documentation
* *[OPERATOR]* After this release of the Dashboard is deployed and before the shoot cluster is reconciled, the Grafana link that is displayed by the Dashboard will continue to work for the shoot owners. ([gardener/dashboard#1408](https://github.com/gardener/dashboard/pull/1408), [@istvanballok](https://github.com/istvanballok))
  * For the Gardener operators, the link to the new Grafana will start working only after the shoot cluster is reconciled. Gardener operators can access Grafana during this time by port-forwarding to it.