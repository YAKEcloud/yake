---
sidebar_position: 3
---

# Managed Seeds

## Deployment

Conceptually, a [managed seed](https://gardener.cloud/docs/gardener/usage/managed_seed/) is a `Shoot` cluster which is registered as `Seed` cluster. Thus, an operator has to deploy two resources to the virtual garden: a `Shoot` and a `ManagedSeed`. In consequence, Gardener will take care for the `Shoot` and register it as `Seed`.
In 23KE, you can maintain managed seeds via the GitOps approach. For this, two `Kustomization`s are required. One is responsible for the creation of `Shoot` Clusters and the other one for the creation of `ManagedSeed` resources. Examples for these `Kustomization`s are given below.

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
	- name: 23ke-env-garden-content
  sourceRef:
	kind: GitRepository
	name: 23ke-config
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
	- name: 23ke-env-garden-content
	- name: shoots
  sourceRef:
	kind: GitRepository
	name: 23ke-config
  path: ./seeds
  prune: false
```

In this example, the `Kustomization`s point to a directory called `seeds` (and the subdirectory `seeds/shoots`) in the repository root. Consequently, all required manifests have to be stored in these directories. As the directory names already indicate, the `Shoot` manifests are organized in the `seeds/shoots` directory and the `ManagedSeed` manifests in the seeds directory, respectively. The easiest option to obtain a valid `Shoot` manifest for your 23KE environment is to configure a shoot via the Gardener dashboard and just copy over the corresponding yaml manifest.
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

If you want to use e.g. the Grafana dashboard of a `Shoot` cluster hosted on the `ManagedSeed`, you will need to make sure that the `ManagedSeed` can make use of browser trusted certificates. It is possible to use the `extension-shoot-cert-service` for this purpose, as a `ManagedSeed` is also a `Shoot`. For this reason, you need to enable this extension on `Shoot`s to be used as `ManagedSeed`s, i.e.

```yaml
kind: Shoot
apiVersion: core.gardener.cloud/v1beta1
metadata: ...
spec:
  extensions:
    - type: shoot-cert-service
```

Then, you can apply a `Certificate` resource directly to the `Shoot` cluster used for the `ManagedSeed`. An example `Certificate` resource manifest is given below

```yaml
apiVersion: cert.gardener.cloud/v1alpha1
kind: Certificate
metadata:
  name: seed-ingress
  namespace: garden
spec:
  commonName: '*.ingress.my-region-0.garden.BASE_DOMAIN'
  issuerRef:
	name: garden
  secretRef:
	name: seed-ingress-certificate
	namespace: garden
```

This instructs the `extension-shoot-cert-service` to create a `Secret` containing the certificate data. In order to use this secret as certificate for every `Ingress` in the cluster, it needs to have the "magic" label `gardener.cloud/role: controlplane-cert`. Consequently, you have to label the `Secret` as soon as it exists:

```
kubectl label -n garden secret seed-ingress-certificate gardener.cloud/role=controlplane-cert
```
Afterwards, your Grafana urls should be equipped with a browser trusted certificate.
:::info
We are aware of the fact that these steps require some manual effort and this is not really inline with the idea of a `ManagedSeed`. However, at the moment this is the way to go, and we are looking forward to make things easier via e.g. a Gardener extension which automates the manual process.
:::
