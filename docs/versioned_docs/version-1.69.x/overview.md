---
sidebar_position: 1
---

# Overview

23KE is a GitOps driven [Gardener](https://gardener.cloud/) distribution. It helps you to deploy your gardener setup fast and reliably. It is also your companion, when it comes to upgrading and maintaining your setup. All 23KE releases are carefully selected and tested sets of upstream gardener components. With 23KE you can run and configure your complete gardener setup through your git config-repository. Based on [Flux](https://fluxcd.io/), the actual state of the system is always reconciled to the declarative configuration from your gitrepository which results in full control of your Gardener installation.

## Support

When you decide to build your productive Gardener environment based on 23KE, you will also get support from the 23T engineers. We tackle all kinds of issues. From simple configuration questions to advanced Gardener operation topics... We'll be by your side 🙂.

## Getting Started

Get started by setting up your trial version of 23KE using [23kectl](https://github.com/23technologies/23kectl).

### What you'll need

- A Kubernetes cluster (also called base cluster) running in the cloud
- A DNS provider e.g. azure-dns, aws-route53, openstack-designate
- A domain delegated to the DNS provider of choice
- A remote git repository which is accessible (read and write) via ssh
- Basic knowledge about Flux, Helm and Kustomize

### How you get your trial version

Just visit our trial version [self-service](https://self-service.ingress.23ke-releases.23t-prod.okeanos.dev/trial/request) and follow the instructions.

