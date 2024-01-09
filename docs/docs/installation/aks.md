# Yake installation on AKS

There's a wide variety of managed kubernetes services. Here's a few of the big players you may have come across: Azure Kubernetes Service (AKS), Google Kubernetes Engine (GKE), Amazon Elastic Kubernetes Service (Amazon EKS) and others.
All those kubernetes environments have subtle differences to them and installing YAKE may or may not require steps specific to those enviroments.

This document will guide you through setting up YAKE on an AKS cluster. AKS being an arbitrary choice here, others are up to the task just as well.

## prerequisites

### Creating the cluster

Log into azure and [create a kubernetes cluster](https://portal.azure.com/#create/Microsoft.AKS).

Make sure to select CNI "Kubenet" since Azure's CNI doesn't meet gardener's requirements. The other default settings should be fine.
At the time of writing (01/24) the default settings include:
- Network Policy: "Calico"
- Load balancer: "Standard"

### Creating a DNS zone

Log into azure and [create a DNS zone](https://portal.azure.com/#create/Microsoft.DnsZone-ARM).
It can manage any domain or subdomain of your choice. Make sure to set it in config/yake-config.secret.yaml (.domains.global.domain)

### Creating credentials

Gardener needs valid credentials to perform operations on your azure subscription.

- Create app
- assign app to subscription as contributor
- Create secret for app

Add credentials toconfig/yake-config.secret.yaml (.domains.global.credentials)
Add credentials to garden-content/azure.secret.yaml (.data)

## Installation

Create configuration secrets

```sh
kubectl apply -f docs/docs/installation/config/
```

### flux
Yake relies on [flux](https://github.com/fluxcd/flux2/) to perform git-based reconciliation.
Install flux into the cluster:

```sh
kubectl apply -f flux-system/gotk-components.yaml
```

To let flux know where to find yake's files, create a flux `GitRepository` resource pointing to yake's repository on GitHub.
Set the version to install by choosing the corresponding tag. Here it's `v1.86.0-0`.

```sh
flux create source git --url="https://github.com/yakecloud/yake.git" --tag=v1.86.0-2 yake
```

Let's use the `yake` source in a flux `Kustomization` to make flux apply the kustomize `Kustomization` /kustomization.yaml

```sh
cat <<EOF | kubectl apply -f -
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata:
  name: yake
  namespace: flux-system
spec:
  interval: 10s
  sourceRef:
    kind: GitRepository
    name: yake
  path: ./
  prune: true
EOF
```

###

