# 23kectl

## Requirements

First and foremost: You need a 23KE license for installing 23KE. This could be a trial license.

Moreover, you need:

1. A Kubernetes cluster (also called base cluster) running in the cloud
2. A DNS provider e.g. azure-dns, aws-route53, openstack-designate
3. A domain delegated to the DNS provider of choice
4. A remote git repository which is accessible (read and write) via ssh
5. Knowledge about Flux, Helm and Kustomize

## Quickstart

Run 23kectl
```shell
go mod tidy && go mod vendor
go run main.go install --kubeconfig KUBECONFIG_FOR_BASE_CLUSTER
```

The wizard will guide you through the configuration process.
Once finished, you will find the configuration files in your configuration git repository.
This is meant to be the main entry point for further configuration, as 23ke comes as a gitops driven Gardener distribution.
Therefore, the preferred way for configuration is to change values/add resources/ whatnot in the configuration repository.

If you want to watch the installation process, you can watch the flux resources, such as helm releases:
```shell
kubectl get -n flux-system hr --watch
```

## Demo Gardener installation

You can find a demo Gardener installation on [Okeanos](https://dashboard.okeanos.dev/). You can login with your Github account and if you bring your own cloud credentials you can easily create a Kubernetes cluster. Of course, you could also use this cluster for hosting your own Gardener (Gardener on Gardner).

## Other resources

- On GitHub, you will finde the [gardener community](https://github.com/gardener-community) organization where the Gardener helmcharts are consolidated and some components, such as cloudprofiles, are maintained.
- If you want to learn more about Gardener's internal functionality, check out the Gardener [documentation](https://gardener.cloud/docs/).

## Bigger Picture

If you are interested in 23ke details you can checkout our documentation, which is yet to be published. Please contact us, if you want to get a preview.
