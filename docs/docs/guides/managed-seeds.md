---
sidebar_position: 30
---

# Scaling out with Managed Seeds

## Deployment of `ManagedSeeds` in YAKE

Conceptually, a [managed seed](https://gardener.cloud/docs/gardener/usage/managed_seed/) is a `Shoot` cluster which is registered as `Seed` cluster. Thus, an operator has to deploy two resources to the virtual garden: a `Shoot` and a `ManagedSeed`. In consequence, Gardener will take care for the `Shoot` and register it as `Seed`.
In YAKE, you can maintain managed seeds via the GitOps approach. For this, two `Kustomization`s are required. One is responsible for the creation of `Shoot` Clusters and the other one for the creation of `ManagedSeed` resources. Examples for these `Kustomization`s are given below.

```yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: shoots
  namespace: flux-system
spec:
  kubeConfig:
	secretRef:
	  name: gardener-internal-kubeconfig
  interval: 1m0s
  dependsOn:
	- name: yake-env-garden-content
  sourceRef:
	kind: GitRepository
	name: yake-config
  path: ./seeds/shoots
  prune: false
---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: seeds
  namespace: flux-system
spec:
  kubeConfig:
	secretRef:
	  name: gardener-internal-kubeconfig
  interval: 1m0s
  dependsOn:
	- name: yake-env-garden-content
	- name: shoots
  sourceRef:
	kind: GitRepository
	name: yake-config
  path: ./seeds
  prune: false
```

In this example, the `Kustomization`s point to a directory called `seeds` (and the subdirectory `seeds/shoots`) in the repository root. Consequently, all required manifests have to be stored in these directories. As the directory names already indicate, the `Shoot` manifests are organized in the `seeds/shoots` directory and the `ManagedSeed` manifests in the seeds directory, respectively. The easiest option to obtain a valid `Shoot` manifest for your YAKE environment is to configure a shoot via the Gardener dashboard and just copy over the corresponding yaml manifest.
:::tip
It is recommended to use a dedicated cloud provider secret for the `Shoots` to be registered as `Seeds`. Therefore, you might need to create a corresponding secret. Also here, the easiest way to create it is via the Gardener Dashboard.
:::
:::note
Keep in mind that the `Shoot` will be used as `Seed` and should be equipped with meaningful resources, e.g. a minimum amount of 3 workers with 8vCPU and 32GB RAM.
:::

For the `ManagedSeed` manifest, an example is given below. You can also find an example in the [Gardener upstream repository](https://github.com/gardener/gardener/blob/master/example/55-managedseed-gardenlet.yaml).

```yaml
apiVersion: seedmanagement.gardener.cloud/v1alpha1
kind: ManagedSeed
metadata:
  name: my-region-0
  namespace: garden # Must be garden
spec:
  shoot:
    name: my-region-0 # has to be the name of the shoot to be used
  # gardenlet specifies that the ManagedSeed controller should deploy a gardenlet into the cluster
  # with the given deployment parameters and GardenletConfiguration.
  gardenlet:
    config: # GardenletConfiguration resource
      apiVersion: gardenlet.config.gardener.cloud/v1alpha1
      kind: GardenletConfiguration
      seedConfig:
        metadata:
          labels:
            name: my-region-0
        taints:
          seed.gardener.cloud/protected: false
        spec:
          dns:
            provider:
              type: # a valid dns provider
              secretRef:
                name: default-domain-gardener-... # the default-domain-secret of your environment
                namespace: garden
          ingress:
            domain: ingress.my-region-0.garden.BASEDOMAIN # replace BASEDOMAIN with your domain
            controller:
              kind: nginx
          networks:
            shootDefaults:
              pods: 100.74.0.0/16
              services: 100.96.0.0/13
          provider:
            region: MYREGION
            type: # your cluster provider type
          backup:
            provider: # your backup provider type
            region: # your backup provider region
            secretRef:
              name: # your backup provider secret
              namespace: # your backup provider secret namespace
          settings:
            scheduling:
              visible: true
            excessCapacityReservation:
              enabled: true
      featureGates:
        HVPA: true
        HVPAForShootedSeed: true
```

:::note
You will need to provide a `Secret` for your backup provider in advance, if you want to enable backups on this `Seed`.
:::

## Deployment of wildcard certificate for Grafana/Prometheus dashboards

We prepared everything in YAKE so that the only thing you need to do is to set a label in the `SeedConfig` in your `managedSeed` resource with `yake.cloud/generate-controlplane-cert="true"`:
``` yaml
apiVersion: seedmanagement.gardener.cloud/v1alpha1
kind: ManagedSeed
spec:
  shoot:
    ...
  gardenlet:
    ...
      seedConfig:
        metadata:
          labels:
            ...
            yake.cloud/generate-controlplane-cert: "true"
```
When this label is set, your Grafana/Prometheus dashboard should be equipped with a browser trusted certificate.
