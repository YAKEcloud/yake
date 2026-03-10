---
sidebar_position: 3
---

# The YAKE config git repository
As already introduced in the [architecture diagram](./architecture.md), values for the helm charts deployed for the Gardener installation are configured and maintained in a GitOps workflow. For instance, your repository tree looks like this:
```
.
├── config
│   ├── cloudprofiles-values.yaml
│   ├── dashboard-values.yaml
│   ├── extensions-values.yaml
│   ├── gardener-values.yaml
│   ├── gardenlet-values.yaml
│   ├── identity-values.yaml
│   └── kustomization.yaml
├── flux
│   ├── yake-env-config.yaml
│   └── yake-env-garden-content.yaml
├── garden-content
│   ├── admin-clusterrolebinding.yaml
│   ├── kustomization.yaml
│   ├── project-dev.yaml
│   └── rbac.yaml
└── kustomization.yaml
```
The top-level `kustomization.yaml` file contains [`Kustomization`](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/) pointing to the files in the `flux` directory. Inside the `flux` directory two flux `Kustomizations` [`Kustomization`](https://fluxcd.io/flux/components/kustomize/api/)s reside which point to the `config` directory and the `garden-content` directory.

:::caution
The top-level `kustomization.yaml` is of type `kustomize.config.k8s.io/v1beta1`, whereas the `Kustomization`s in the `flux` directory are of type `kustomize.toolkit.fluxcd.io/v1beta2`. Therefore, you will only find the `Kustomization`s defined in the `flux` directory in your base cluster, when watching `Kustomization` resources.
:::

### The `config` Directory
In the `config` directory, you find configuration files defining values for the deployed helm charts. All files entail the same "header", and are constructed like in the following example for `cloudprofiles-values.yaml`
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: cloudprofiles-values
  namespace: flux-system
type: Opaque
stringData:
  values.yaml: |
```
Below of the key `stringData.values.yaml` you can insert your configuration.

:::tip
As the upstream helm charts are distributed over several repositories, there is no single documentation page for possible helm chart values. You can get information on the default values by e.g.
```sh
helm repo add gardener-charts https://gardener-community.github.io/gardener-charts
helm repo update
helm show values gardener-charts/<CHART_NAME>
```
:::

### The `garden-content` Directory
In the `garden-content` Directory, resources to be deployed to the [virtual garden](https://github.com/gardener/garden-setup#concept-the-virtual-cluster) are defined. You can easily add some resources, if you need more than if the example from above does not fit your needs. For instance, you can create [`Project`](https://gardener.cloud/docs/gardener/api-reference/core/#core.gardener.cloud/v1beta1.Project)s or further [`Cloudprofile`](https://gardener.cloud/docs/gardener/api-reference/core/#core.gardener.cloud/v1beta1.CloudProfile)s here.
:::note
The `garden-content` folder also contains a `kustomization.yaml` file which just lists the resources to be deployed to the [virtual garden](https://github.com/gardener/garden-setup#concept-the-virtual-cluster). You can just comment our resources you do not want to deploy for a moment but still keep in you git repository for documentation purposes.
:::
