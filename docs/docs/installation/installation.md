---
sidebar_position: 2
title: Installation
---

Most easily, the installation can be performed by [23kectl](https://github.com/23technologies/23kectl), a configuration wizard for a basic setup. It is recommended to start with a basic setup and tweak it afterwards to the desired behavior.

## Basic Install Command

Once your environment fulfills the [prerequisites](./prerequisites) and you have [23kectl](https://github.com/23technologies/23kectl) installed, you can start the installation:

```sh
export KUBECONFIG=KUBECONFIG_FOR_BASE_CLUSTER
23kectl install
```

This command will create a `config.yaml` file in the current directory which stores the configuration options collected by the wizard. If you do not want to export the `KUBECONFIG` variable and/or use another configuration file name you can also run `23kectl` like so

```sh
23kectl install --kubeconfig KUBECONFIG_FOR_BASE_CLUSTER --config=another-config.yaml
```

After completing the wizard, you can watch the installation process in the cluster. Using `kubectl`, you can watch flux resources like `helmreleases` or `kustomizations`

```sh
kubectl get -n flux-system helmrelease --watch
```

or

```sh
kubectl get -n flux-system kustomization --watch
```

Once all `helmreleases` are in the "reconcile succeeded" state, the installation is complete.

:::tip
For further configuration, see the [architecture and configuration](/docs/category/architecture--configuration).
If you are interested in more sophisticated setups, have a look at the [guides](/docs/category/guides) provided in this documentation.
:::

## Help Commands

If you like to get some help on the command line you can invoke

```sh
23kectl install -h
```

However, you will find more comprehensive information in this documentation.

## Troubleshooting

If the installation process fails, i.e. `helmrelease`s and/or `kustomization`s do not get into a healthy state, you should

- Check the credentials in your config file. If you have a typo somewhere, correct it and run the install command again.
- Check whether your cloud credentials such as the DNS provider credentials are allowed to perform the required actions. Also consult the [Gardener documentation](https://gardener.cloud/docs/) in that case.
- Check which `helmrelease` fails and check the resources deployed by this `helmrelease` for `events` showing errors.

If none of these help, there could be an issue in your base infrastructure. In that case, contact us or [file an issue](https://github.com/23technologies/23kectl/issues). We're always happy to help.
