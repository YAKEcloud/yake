#!/bin/sh

PREFIX=~/.local/bin

curl -Lo $PREFIX/kind https://kind.sigs.k8s.io/dl/v0.10.0/kind-linux-amd64
chmod +x $PREFIX/kind


curl -Lo $PREFIX/clusterctl https://github.com/kubernetes-sigs/cluster-api/releases/download/v0.3.16/clusterctl-linux-amd64
chmod +x $PREFIX/clusterctl

curl -Lo - https://github.com/fluxcd/flux2/releases/download/v0.13.2/flux_0.13.2_linux_amd64.tar.gz | tar zxf - -C $PREFIX

curl -Lo $PREFIX/mc https://dl.min.io/client/mc/release/linux-amd64/mc
chmod +x $PREFIX/mc

curl -Lo $PREFIX/sops https://github.com/mozilla/sops/releases/download/v3.7.1/sops-v3.7.1.linux
chmod +x $PREFIX/sops
