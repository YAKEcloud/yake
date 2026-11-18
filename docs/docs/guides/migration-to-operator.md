---
sidebar_position: 50
---

# Migration to the gardener-operator

This guide moves a classic YAKE installation (Helm charts `gardener-controlplane`, `etcd`, `garden-kube-apiserver`) to the `gardener-operator`.
The `gardener-controlplane` chart no longer exists as of Gardener 1.142, so the operator is the only way forward. Afterwards you only raise a single version.

## Principles

* Only what the migration needs. Secrets, PVCs, PVs, CRDs, namespaces and PriorityClasses are never deleted.
* Only objects owned by an abandoned YAKE Helm release are deleted (checked via the annotation `meta.helm.sh/release-name`). Everything else stays.
* Anything the customer deploys on top (for example `extra-resources/`) is maintained by the customer.
  This includes Ingresses with class `nginx`: `ingress-nginx` is removed by the migration (the operator and the dashboard use Istio), so expose them via Istio or run `ingress-nginx` yourself.
* All scripts that change something run as a dry run and execute with `--apply` (one confirmation of the cluster context name).

## Preparation

1. **Base:** Create a branch from the tag `v1.137.7-1` (not `main`) and copy `operator/`, `flux/operator.yaml` and `hack/migrate-to-operator/` into it.
2. **Pin instead of tag:** In your Flux repository, set the `GitRepository` `yake` to `ref.commit: <sha>`. Every step below is a commit that you pin ("publish").
3. **Config** (templates are in the comments of your `config/values.yaml`):
   * Secret `yake-config-0` with the block `garden:` (networks, region, load balancer annotations, storage, `kubernetesVersion` = **exactly the running version**).
   * `addons-values`: `vpa.enabled: false` and `dashboard.enabled: false`. Set both only during the cutover (after `cutover.sh pre`, before `cutover.sh post`), because the classic setup still needs them.
   * etcd backup: set a new bucket (do not reuse the old one) or leave it empty, then the operator creates one.
4. **Tools:** `kubectl`, `helm`, `jq`, `git`. Access to the runtime cluster and to the virtual garden.
5. **Backup:** Verify the latest etcd snapshot in the bucket and note it. It is your way back after the point of no return.

## Procedure

`R` = kubeconfig of the runtime cluster, `G` = kubeconfig of the virtual garden. `...` stands for `--runtime-kubeconfig=$R --garden-kubeconfig=$G`. Read every script's dry-run output first.

```bash
cd hack/migrate-to-operator
./preflight.sh --runtime-kubeconfig=$R --garden-kubeconfig=$G        # must report PREFLIGHT OK
./prepare-secrets.sh --runtime-kubeconfig=$R --apply                  # labeled copies of the CAs and the service account key
```

| Step | Commands | Then |
|---|---|---|
| 1. Cutover | `./switch.sh core`, commit (do **not** pin yet), `./cutover.sh pre ... --apply`, set `addons-values` | publish the commit |
| | `./cutover.sh post ... --sha=<commit> --apply` | Operator and `Garden` are running. With `dnsManagedByGardener: false`, set `garden.dns.entries` now |
| 2. Extensions | `./cutover.sh extensions ... --apply`, `./switch.sh extensions`, commit | publish, then `./cutover.sh resume ... --sha=<commit> --apply` |
| 3. Gardenlet | `./switch.sh gardenlet`, commit, publish, `./cutover.sh gardenlet ... --apply`, `./switch.sh gardenlet-final`, commit | publish, then `./cutover.sh resume ... --sha=<commit> --apply` |
| 4. Kubernetes | raise `garden.kubernetesVersion` one minor at a time: 1.33.13, 1.34.13, 1.35.10 | per step `./k8s-step.sh <version> ...` |
| 5. Gardener | `./upgrade-chain.sh ... --pin-cmd='<sets ref.commit: {sha} and pushes>' --confirm` | stops at the first failure |
| 6. Kubernetes | 1.36.6, 1.37.2 | per step `./k8s-step.sh <version> ...` |
| 7. Final check | `./verify.sh ... --expect-version=1.155.1 --expect-k8s=1.37.2` | must report `VERIFY OK` |

The Kubernetes version of the garden is raised only after the migration (with the operator it is a single value, the classic chart cannot do it).
Gardener 1.154 requires at least Kubernetes 1.33.

## Rollback

* **Until the first operator reconcile** (before `cutover.sh post`): fully reversible. Pin back to `v1.137.7-0`, delete the labeled copies, rename the etcd PVCs back
  (the PVs are `Retain`). The Helm release secrets of the old releases remain.
* **After that:** The operator enables etcd encryption (point of no return). The only way back is the snapshot, with data loss since the snapshot.
* The operator does not skip minor versions and does not support downgrades. On failure, repair forward instead of pinning back.

## Notes per version (only where something is to do)

`upgrade-chain.sh` walks through these versions (latest patch each, as of 2026-11): 1.138.3, 1.139.4, 1.140.5, 1.141.6, 1.142.6, 1.143.4, 1.144.6, 1.145.4,
1.146.6, 1.147.5, 1.148.5, 1.149.5, 1.150.4, 1.151.4, 1.152.3, 1.153.5, 1.154.5, 1.155.1.

| Version | What happens | Action |
|---|---|---|
| 1.139 | Seed field `secretRef` is removed, Shoot `dns.providers[].secretName` is forbidden from Kubernetes 1.35, VPA uses `InPlaceOrRecreate` | Gardenlet config uses `credentialsRef` (done by `switch.sh core`). `addons-values` `vpa.enabled: false` |
| 1.145 | Scheduler default becomes `SameRegion` (was `MinimalDistance`) | if wanted, set `garden.schedulerStrategy: MinimalDistance` |
| 1.147 | Provider extensions must enable the `BackupEntry` controllers | with garden backup, check the extension versions |
| 1.149 | nginx in the garden runtime is removed | nothing, dashboard and seed run through Istio |
| 1.153 | Gardenlet requires `seedConfig.spec.dns.defaults` | added to the config template (done by `switch.sh core`) |
| 1.154 | Kubernetes 1.32 is dropped, Shoot fields `maxEmptyBulkDelete` and `podEvictionTimeout` are removed | garden on Kubernetes >= 1.33, adapt Shoots that use these fields |
| 1.155 | The seed default domain must differ from the internal domain | check your domains |

## Who maintains what

* **Delivered by Gardener:** control plane, etcd, dashboard, Istio, VPA, Gardenlet (after the self-upgrade), extensions as OCI charts.
* **Maintained in this repository (everything Gardener does not deliver):**
  * `operator/garden`: the `Garden` built from your values, Dex via Istio (`identity-istio`), access for Flux, the NetworkPolicies for Flux and the Gardenlet.
  * `operator/extensions`: the extension catalog (`templates/_catalog.tpl`). Versions and `enabled` come from `extensions-values`. A new extension is one
    catalog entry (chart names, admission, `resources`). The template is `yake-ansible` (`roles/gardener_operator/templates/extensions.yaml.j2`).
  * Extensions without an OCI chart (backup-s3, shoot-flux) stay in the classic chart `gardener/extensions`.
  * Not maintained anymore: `provider-hcloud`, `provider-alicloud`, `os-coreos`. Whoever still needs them maintains them in their own Flux repository.
* **Alternative:** If you prefer to maintain this yourself, keep these manifests in your own Flux repository and document that you are responsible for them.
  For the Gardener version, the operator chart and the `Garden` are enough.
* **Flux access to the virtual garden:** The operator does not create a static token. Gardener's token requestor provides an automatically renewed token
  in the namespace `garden`, and a CronJob copies it to `flux-system/gardener-internal-kubeconfig` (the copy is our bridge, not part of Gardener). The role
  is `cluster-admin`, as in Gardener's documentation example.

## Not tested

* Certificates and DNS through Gardener (cert-service, DNS extension, `dnsManagedByGardener: true`), Azure DNS, Hetzner load balancers, ManagedSeed, dashboard login via OIDC.
  cert-manager, cert-management, external-dns-management and dnsprovider therefore keep running unchanged. Replacing them is optional and not part of the migration.

## Test status

Full run in a fresh kind cluster (Kubernetes v1.35.8, rootless Podman) from the classic Gardener 1.137.7 to the end of this guide:
`preflight.sh`, `prepare-secrets.sh`, cutover, extensions, gardenlet, Kubernetes 1.35.10, Gardener 1.138.3 to 1.155.1 (18 steps), Kubernetes 1.37.2, `verify.sh`
reports `VERIFY OK`. The Gardenlet was upgraded by the operator (auto-update label) in every chain step. The local test uses `provider-local` and a test-only
NetworkPolicy and DNS setup, which a real landscape does not need.
During the run two script bugs surfaced (an empty Helm release in `remove-release-objects.sh`, a status line in `upgrade-step.sh`). Both are fixed and the run
was continued from the failed step, not repeated from scratch.
