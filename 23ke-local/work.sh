#!/usr/bin/env bash

kind create cluster

kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.7/config/manifests/metallb-native.yaml
kubectl wait --namespace metallb-system --for=condition=ready pod --selector=app=metallb --timeout=90s

# check kind network for metallb configuration
# docker network inspect -f '{{.IPAM.Config}}' kind
kubectl apply -f metalllb.yaml

############# step ca for acme server in kind cluster #################
helm repo add smallstep https://smallstep.github.io/helm-charts/

# if values are not generated yet
# step ca init --acme --helm > values.yaml

helm install -f values.yaml \
     --set inject.secrets.ca_password=$(cat password.txt) \
     --set inject.secrets.provisioner_password=$(cat password.txt) \
     --set service.targetPort=9000 \
     step-certificates smallstep/step-certificates


############# knot

kubectl apply -f knot.yaml 

svcIP=$(kubectl get svc knot -oyaml | yq .spec.clusterIP)

kubectl -n kube-system get configmap coredns -ojson | \
  yq '.data.Corefile' | \
  sed "\$a gardener.internal:53 {\n  forward . $svcIP\n}" | \
  kubectl -n kube-system create configmap coredns --from-file Corefile=/dev/stdin --dry-run=client -oyaml | \
  kubectl -n kube-system patch configmap coredns --patch-file /dev/stdin

