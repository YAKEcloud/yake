---
sidebar_position: 4
---

# Working with Helm and Flux

On this page, you'll find some useful information on how to work with the commandline interfaces for [helm](https://helm.sh/) and [flux](https://fluxcd.io/) in the context of your YAKE-based Gardener installation.

## Useful Helm Commands

First things first. As already introduced in the [architecture description](./architecture.md), most of the YAKE helm charts stem from a helm repository hosted at `gardener.community.github.io/gardener-charts`. Consider adding this helm repository to your local repository cache by

```sh
helm repo add gardener-charts https://gardener-community.github.io/gardener-charts
helm repo update
```

Afterwards you can use get further information about the charts using the helm cli.

### Show upstream chart info

E.g., for the `cloudprofiles` chart:

```sh
helm show chart gardener-charts/cloudprofiles
```

### Show upstream helm default values

E.g., for the `cloudprofiles` chart:

```sh
helm show values gardener-charts/cloudprofiles
```

## Useful Flux Commands

### Check flux versions

The flux controllers running in the basecluster are maintained by YAKE itself, i.e. the flux controllers will be updated with YAKE updates. You can check the state of your cli version and the version of the cluster side components by

```sh
flux version
```

If you feel like your cli version is outdated. Go ahead and download a recent version from [the Github release page](https://github.com/fluxcd/flux2/releases). If you feel like your in-cluster components are outdated, think about updating YAKE.

### Reconcile of a resource

If you want to get fast feedback in your GitOps workflow you can trigger the reconciliation of resources manually using the `flux reconcile command`. If you want a `helmrelease` to be reconciled immediately, you can achieve this by the following command:

```sh
flux reconcile helmrelease <NAME_OF_HELMRELEASE>
```

### Suspend/Resume Reconciliation of a resource

Maybe you want to get your hands dirty and do some manual (i.e. not GitOps driven) configuration changes. For instance, this could be useful in staging environments for rapid prototyping. In this case, you need to make sure that flux does not revert your "dirty" changes and suspend the reconciliation of the affected resources. Checkout the help for `flux suspend` to get further information

```sh
flux suspend -h
```

E.g., a helmrelease can be suspended by

```sh
flux suspend helmrelease <NAME_OF_HELMRELEASE>
```

Don't forget to resume the reconciliation, when you are done with your experiments so that flux will take over the control of your deployed resources again:

```sh
flux resume helmrelease <NAME_OF_HELMRELEASE>
```

:::note
Sometimes you will need to `suspend` and `resume` resources in order to trigger an update of the deployed resources. If have the impression that the state in the cluster does not match your definitions in the git repository, try to `suspend` and `resume` the corresponding resources, wait for reconciliation, and see that the state matches the git repository again.
:::
