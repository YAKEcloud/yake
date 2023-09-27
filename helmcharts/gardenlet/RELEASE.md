# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]`  An issue causing several tasks from the Shoot reconciliation flow to fail with transient errors of type `duplicate filename in registry` is now fixed. by @gardener-ci-robot [#8555]
- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8552]
## 🏃 Others

- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @gardener-ci-robot [#8492]