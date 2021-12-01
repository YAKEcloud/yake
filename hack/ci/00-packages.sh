#!/bin/bash

# kubectl
sudo curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo mv kubectl /usr/local/bin/
sudo chmod +x /usr/local/bin/kubectl

# flux
wget https://github.com/fluxcd/flux2/releases/download/v0.17.2/flux_0.17.2_linux_amd64.tar.gz
tar xfvz flux_0.17.2_linux_amd64.tar.gz
sudo mv flux /usr/local/bin/
sudo chmod +x /usr/local/bin/flux

# yq
wget https://github.com/mikefarah/yq/releases/download/v4.15.1/yq_linux_amd64
sudo mv yq_linux_amd64 /usr/local/bin/yq
sudo chmod +x /usr/local/bin/yq

# helm
wget https://get.helm.sh/helm-v3.7.1-linux-amd64.tar.gz
tar xfvz helm-v3.7.1-linux-amd64.tar.gz
sudo mv linux-amd64/helm /usr/local/bin/helm
sudo chmod +x /usr/local/bin/helm

# mc
wget https://dl.min.io/client/mc/release/linux-amd64/mc
sudo mv mc /usr/local/bin/mc
sudo chmod +x /usr/local/bin/mc
