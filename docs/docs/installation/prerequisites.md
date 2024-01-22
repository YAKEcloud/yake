---
sidebar_position: 1
title: Prerequisites
---

Before you can start with your YAKE deployment, you should check whether you have everything you need at hand. In the following, the prerequisites are listed and detailed.

## Deployment Host

This can be any workstation machine, laptop, VM, whatnot, as long as it is connected to the internet. Most preferably, it is a Linux-based host, however, macOS or WSL should also work fine.

### Tools

To use YAKE efficiently you will need these tools:

- [git](https://git-scm.com/downloads)
- [kubectl](https://kubernetes.io/docs/reference/kubectl/)
- [flux](https://fluxcd.io/flux/installation/)
- [helm](https://helm.sh/docs/intro/install/) (optional)

We recommend using an interactive tool like [k9s](https://k9scli.io/) as a more convenient way of working with your clusters.

## Git Repository

To store and manage the configuration of your Gardener environment you need a git repository (see also [architecture](/docs/architecture-configuration/architecture.md)), which is accessible via ssh over the internet. Of course, you can host your configuration git repository on forges like GitHub or GitLab. Conceptually, the forge needs to support ssh deploy keys. However, this should not be a limitation with modern forges.

:::note
A local git repository will not work with YAKE, as the [flux](https://fluxcd.io/) controllers need be able to access the repository.
:::

## Domain and DNS provider

For the Gardener installation, you need a domain under which e.g. the Gardener dashboard is served. Moreover, a DNS provider like azure-dns, aws-route53, or openstack-designate is required. Make sure to delegate a domain to your DNS provider of choice (see [here](https://gardener.cloud/docs/extensions/others/gardener-extension-shoot-dns-service/docs/usage/dns_names/#gardener-dns-extension) for a list of supported DNS providers by Gardener). You will also need the DNS provider credentials in order to configure these for YAKE.

## Kubernetes Cluster

As Gardener is installed on top of Kubernetes itself, you need a base cluster which hosts your Gardener installation. This needs to be a cluster with "full cloud support", i.e. you need to have a cluster with

- 3x 4vcpu, 8GB RAM (control plane) and 3x 8vcpu 16GB RAM (workers) for a production ready setup (**or** 4x 4vcpu, 8GB RAM for a working basic setup)
- a working load balancer service
- a running [CNI](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/) like [calico](https://www.tigera.io/project-calico/) or [cilium](https://cilium.io/)
- a running [CSI](https://kubernetes-csi.github.io/) for your cloud provider's volumes
  Moreover, the cluster needs to be hosted on a cloud provider with existing Gardener extension. Checkout this [list](https://gardener.cloud/docs/extensions/infrastructure-extensions/) for the infrastructure extensions maintained in the [gardener organization on GitHub](https://github.com/gardener).

Moreover, you should consider the following aspects:

- As YAKE ships with a deployement of [ingress-nginx](https://kubernetes.github.io/ingress-nginx/), you must not install any ingress controller into the base cluster
- As Gardener uses the `192.168.123.0/24`internally, your pod network of the base cluster should not interfere with that range. Therefore, it is recommended to use `172.16.0.0/16` as pod network in the base cluster. For the service network no restrictions are known.

:::tip
There are more provider extensions than the ones hosted in the Gardener organization on GitHub. For instance, there is the [provider-hcloud](https://github.com/23technologies/gardener-extension-provider-hcloud) extension supporting managed Kubernetes on the [Hetzner cloud](https://www.hetzner.com/cloud). If you are interested in a custom extension, you can also contact us, and we can discuss on a development plan for another extension.
:::

:::warning
A local Kubernetes cluster like k3s, kind, minikube or similar will not work for a production deployment of Gardener. If you want to start locally for development purposes, checkout [Gardener's Getting started locally guide](https://gardener.cloud/docs/gardener/development/getting_started_locally/).
:::

## Basic Kubernetes, Helm and Flux Knowledge

If you are entirely new to [Kubernetes](https://kubernetes.io/) and related tooling like [Helm](https://helm.sh) and [Flux](https://fluxcd.io/) your learning curve will be really steep, when using YAKE. If you already have some experience with those tools, you can consult the [Helm/Flux page](/docs/architecture-configuration/helm-flux.md) for some basic commands and explanation. Otherwise, you could also contact us for a training.
