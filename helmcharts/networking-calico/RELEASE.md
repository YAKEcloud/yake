# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-calico` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#278]
## 🏃 Others

- `[OPERATOR]` Updated calico to v3.26.1 by @ScheererJ [#273]
- `[OPERATOR]` The obsolete logging configuration is cleaned up. by @vlvasilev [#276]
- `[OPERATOR]` networking-calico does no longer use Gardener GCR copies for the calico images. Instead, the upstream quay.io container images are used (`quay.io/calico/node`, `quay.io/calico/cni`, `quay.io/calico/typha`, `quay.io/calico/kube-controllers`). by @ialidzhikov [#275]