---
slug: build-cluster-with-caph
title: Build Cluster with CAPH - the challanges when installing 23KE
authors: rhizoet
tags: [gardener, caph, k8s]
---

## TLDR;
We recently built new Kubernetes clusters on Hetzner Cloud. We had several challenges to get the cluster up and running.

This started with the selection of the correct Kubernetes version, the CNI solution and the actual deployment of 23KE. Spoiler: We had to add a few annotations.

If these instructions in this blog post are followed, you can build a working gardener cluster. 

**Table of Contents**
- [TLDR;](#tldr)
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Setup the management cluster](#setup-the-management-cluster)
  - [Modifications](#modifications)
- [Setup the worker cluster](#setup-the-worker-cluster)
- [Install of 23KE](#install-of-23ke)
- [Summary](#summary)

## Introduction
In times of rising costs in all areas of life, we also wanted to reduce these sustainably in our day-to-day operations.

We had been running okeanos.dev on a managed kubernetes cluster on Azure. This is very expensive so we wanted to minimize these costs. In this case, the European cloud from Hetzner was the obvious choice. The following question was how we could best build a k8s cluster there.

After some research, ClusterAPI provider for Hetzner (CAPH) from [Syself](https://syself.com/) turned out to be the optimal solution.

When testing the provider, we had to overcome a few challenges, which we would like to discuss in the following.

## Requirements
You need to install some basic tools to work with CAPH and Gardener. It makes sense to set up a management VM (on Hetzner) running a kind cluster and on it the management cluster. 

* [docker-engine](https://docs.docker.com/engine/install/)
* [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installing-from-release-binaries)
* [clusterctl](https://cluster-api.sigs.k8s.io/user/quick-start.html#install-clusterctl)
* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
* [helm](https://helm.sh/docs/intro/install/)
* [flux](https://fluxcd.io/flux/installation/)
* [k9s](https://k9scli.io/topics/install/)

## Setup the management cluster
To start, let's create a kind cluster with a customized Kubernetes version (Currently it is important that the kubernetes version is `>1.26`)

```shell
kind create cluster -n my-cluster --image=kindest/node:v1.25.9
```

When the cluster is up, [initialize the management cluster](https://github.com/syself/cluster-api-provider-hetzner/blob/main/docs/topics/preparation.md) with CAPH

```shell
clusterctl init --core cluster-api --bootstrap kubeadm --control-plane kubeadm --infrastructure hetzner
```
and export your environment variables
```shell
export HCLOUD_SSH_KEY="MY_SSH_KEY" \
export CLUSTER_NAME="my-cluster" \
export HCLOUD_REGION="nbg1" \
export CONTROL_PLANE_MACHINE_COUNT=3 \
export WORKER_MACHINE_COUNT=3 \
export KUBERNETES_VERSION=1.25.9 \
export HCLOUD_CONTROL_PLANE_MACHINE_TYPE=cpx31 \
export HCLOUD_WORKER_MACHINE_TYPE=cpx41 \
export HCLOUD_TOKEN="YOUR_HCLOUD_TOKEN_HERE"
```
The region can be for sure anything else like `hel1`.

To be able to build the machines a secret must be created:
```shell
kubectl create secret generic hetzner --from-literal=hcloud=$HCLOUD_TOKEN
```

You can also still build yourself a customized node image, but we didn't do that. We used the Ubuntu 22.04 image, which is available from Hetzner.

Now let's create the `my-cluster.yaml` with the private network flavor as in the [quickstart-guide](https://github.com/syself/cluster-api-provider-hetzner/blob/main/docs/topics/quickstart.md):
```shell
clusterctl generate cluster my-cluster --kubernetes-version v1.25.9 --control-plane-machine-count=3 --worker-machine-count=3 --flavor hcloud-network > my-cluster.yaml
```

### Modifications

After creation you need to modify the `my-cluster.yaml`. Remove the following blocks (it gives two of them) because we need to reset the containerd config
```diff
- - content: |
-     version = 2
-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
-       runtime_type = "io.containerd.runc.v2"
-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
-       SystemdCgroup = true
-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.crun]
-       runtime_type = "io.containerd.runc.v2"
-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.crun.options]
-       BinaryName = "crun"
-       Root = "/usr/local/sbin"
-       SystemdCgroup = true
-     [plugins."io.containerd.grpc.v1.cri".containerd]
-       default_runtime_name = "crun"
-     [plugins."io.containerd.runtime.v1.linux"]
-       runtime = "crun"
-       runtime_root = "/usr/local/sbin"
-   owner: root:root
-   path: /etc/containerd/config.toml
-   permissions: "0744"
```
and add
```diff
+ - mkdir /etc containerd
+ - containerd config default > /etc/containerd/confi.toml
+ - sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml
  - systemctl daemon-reload && systemctl enable containerd && systemctl start containerd
+ - sysctl fs.inotify.max_user_instances=8192
+ - sysctl fs.inotify.max_user_watches=524288
```

The containerd-config is missing some options. In addition, the `SystemdCgroup` must be set to `true`. Only then the `vpn-seed-server` starts, which is created when a shoot is created.

When you have finished the modification, you can start building the worker cluster by appling the modified file on the management cluster

```shell
kubectl apply -f my-cluster.yaml
```
With `watch clusterctl describe cluster my-cluster` you can watch one control-plane and three workers are being built.

## Setup the worker cluster

> **_NOTE:_** From now on you should make sure that you are working on the newly built cluster. Make sure that you have exported the Kubeconfig for the worker cluster!

Get the kubeconfig of the worker cluster
```shell
clusterctl get kubeconfig my-cluster > /path/to/my/worker-cluster.kc
```
and export it to work on the cluster (you can do this on your local machine. You don't need to work anymore on the management vm):
```shell
export KUBECONFIG=/path/to/my/worker-cluster.kc
```

At the point of "Deploy a CNI solution" keep in mind not to install cilium like in the guide but [calico](https://docs.tigera.io/calico/latest/getting-started/kubernetes/helm). We had a lot of trouble with cilium.
```shell
helm repo add projectcalico https://docs.tigera.io/calico/charts
kubectl create namespace tigera-operator
helm install calico projectcalico/tigera-operator --version v3.25.1 --namespace tigera-operator
```
Wait till calico is ready.

Now deploy the CCM for hcloud only. Set `privateNetwork.enabled=true` because we need a private network to function properly:
```shell
helm repo add syself https://charts.syself.com
helm upgrade --install ccm syself/ccm-hcloud --version 1.0.11 \
  --namespace kube-system \
  --set secret.name=hetzner \
  --set secret.tokenKeyName=hcloud \
  --set privateNetwork.enabled=true
```

At the end we need a CSI to build volumes on hcloud:
```shell
cat << EOF > csi-values.yaml
storageClasses:
- name: hcloud-volumes
  defaultStorageClass: true
  reclaimPolicy: Retain
EOF

helm upgrade --install csi syself/csi-hcloud --version 0.2.0 \
  --namespace kube-system -f csi-values.yaml
```

The remaining control planes should now be built and added to the cluster. Wait until the entire cluster has `Ready` status before proceeding.

> **_NOTE:_** If you want to transform the workload cluster into a management cluster, you need to do the "move"-steps in the guide. But its recommended to have a management vm with kind installed and hold there the management cluster.

## Install of 23KE

If you plan to install 23KE, you need to keep in mind that there are a few customizations that need to be made for hcloud.

If you have installed 23KE and the data from the installation is in a repository, the following file need to be adjusted.

Add under `settings:` in `gardenlet-values.yaml`
```diff
settings:
+ loadBalancerServices:
+   annotations:
+     load-balancer.hetzner.cloud/location: nbg1
+     load-balancer.hetzner.cloud/ipv6-disabled: "true"
+     load-balancer.hetzner.cloud/disable-private-ingress: "true"
```

Commit and push your changes. You can execute a `flux reconcile source git 23ke-config` to speed up the things.

If any ingress won't get a public IP, you can add the annotations manualy e.g. for `nginx-ingress-controller`:
```shell
kubectl annotate svc -n garden nginx-ingress-controller load-balancer.hetzner.cloud/location=nbg1 \
  load-balancer.hetzner.cloud/ipv6-disabled=true \
  load-balancer.hetzner.cloud/disable-private-ingress=true
```

Now all things should come up as well as e.g. the dashboard should be accessible. If something is not running smoothly, the cluster can be inspected with k9s and you have an easy overview of what the problem is.

In the next steps, secrets can be added to connect to a public or private cloud. With these and a cloudprofile it is then possible to build and run shoots (k8s clusters).

## Summary

With all these steps, it is possible for you to build a functional gardener cluster on Hetzner Cloud. With this you can run a low cost K8s cluster and run what you want on it. Whereas 23KE is already very cool.

This setup has allowed us to drastically reduce the cost of a fully functional gardener. As a pleasant side effect, we are also no longer dependent on a cloud in the USA, but now operate the gardener in a data center in Germany with a German operator in accordance with the GDPR.