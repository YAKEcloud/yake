#!/bin/sh

CLUSTER_NAME=$1
KUBERNETES_VERSION=1.20.5

if [ "$#" -ne  "1" ]; then
     echo "Usage: "
     echo "Example: "
     exit 1
fi

mkdir -p access/

if [ ! -f access/${CLUSTER_NAME}-ssh ]; then
  ssh-keygen -b 2048 -t rsa -f access/${CLUSTER_NAME}-ssh -q -N ""
fi

# TODO: kubectl create secret?

export AZURE_SSH_PUBLIC_KEY_B64="$(cat access/${CLUSTER_NAME}-ssh.pub | base64 -w0)"

kind create cluster --name kind-${CLUSTER_NAME} --kubeconfig access/kind-${CLUSTER_NAME}.kubeconfig

export KUBECONFIG=access/kind-${CLUSTER_NAME}.kubeconfig

#clusterctl --config clusterctl-azure.yaml init --infrastructure azure
#clusterctl --config clusterctl-azure.yaml config cluster ${CLUSTER_NAME} --kubernetes-version ${KUBERNETES_VERSION} --from azure-cluster-template.yaml > ${CLUSTER_NAME}-capi.yaml
#kubectl apply -f cluster.yaml


#clusterctl get kubeconfig test1 > access/test1.kubeconfig
