# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing an UID conflict between two Grafana dashboards is now fixed by removing the unneeded "istio-workload-dashboard.json" dashboard. Moreover, the Istio Ingress Gateway has been fixed by providing a valid configuration file. ([gardener/gardener#7758](https://github.com/gardener/gardener/pull/7758), [@axel7born](https://github.com/axel7born))
## 🏃 Others
* *[OPERATOR]* The nested kubelet in the Gardener e2e tests (in prow/kind) now work on hosts using cgroupsv2 ([gardener/gardener#7799](https://github.com/gardener/gardener/pull/7799), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[DEVELOPER]* Set `cgroupDriver` of `provider-local` to `systemd`. ([gardener/gardener#7804](https://github.com/gardener/gardener/pull/7804), [@gardener-ci-robot](https://github.com/gardener-ci-robot))