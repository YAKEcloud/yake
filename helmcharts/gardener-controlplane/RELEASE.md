# [gardener/hvpa-controller]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused HVPA reconciliation to fail with `expected pointer, but got v2beta1.MetricSpec type` when the HPA spec had changed. by @voelzmo [gardener/hvpa-controller#125]
# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` A bug preventing `prometheus` ingress to use `wildcard-certificate` is fixed. by @gardener-ci-robot [#8320]