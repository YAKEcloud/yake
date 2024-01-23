---
sidebar_position: 1
---

# Overview

YAKE is thea GitOps driven installer and lifecycle management tool for [Gardener](https://gardener.cloud/). It helps you
to deploy your Gardener setup fast and reliably. It is also your companion, when it comes to upgrading and maintaining
your setup. All YAKE releases are carefully selected and tested sets of upstream Gardener components. With YAKE you can
run and configure your complete Gardener setup through your git config-repository. Based on [Flux](https://fluxcd.io/),
the actual state of the system is always reconciled to the declarative configuration from your gitrepository which results
in full control of your Gardener installation.

## Support

When you decide to build your productive Gardener environment based on YAKE, you will also get support from the 23T engineers.
We tackle all kinds of issues. From simple configuration questions to advanced Gardener operation topics... We'll be by your side 🙂.

## Getting Started

### Locally

Checkout the [Readme](https://github.com/YAKEcloud/yake/blob/main/README.md) in the repository for getting started locally.

### In the cloud (production scenario)

First, make sure that you satisfy the requirements below and then follow the installtion guide.

#### What you'll need

- A Kubernetes cluster (also called base cluster) running in the cloud
- A DNS provider e.g. azure-dns, aws-route53, openstack-designate
- A domain delegated to the DNS provider of choice
- A remote git repository which is accessible (read and write) via ssh
- Basic knowledge about Flux, Helm and Kustomize
