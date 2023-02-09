#!/usr/bin/env bash

dumpHr() {
	local helmreleases=$(kubectl get helmreleases -n flux-system | sed 1,1d | awk '{ if($3 != "True") print $1 }' | xargs echo)
	kubectl get hr $helmreleases -n flux-system -o wide
	echo ''
	kubectl get hr $helmreleases -n flux-system -o yaml
}

dumpKs() {
	local kustomizations=$(kubectl get kustomizations -n flux-system | sed 1,1d | awk '{ if($3 != "True") print $1 }' | xargs echo)
	kubectl get kustomizations $kustomizations -n flux-system -o wide
	echo ''
	kubectl get kustomizations $kustomizations -n flux-system -o yaml
}

onErr() {
  local red='\033[0;31m'
  local clear='\033[0m'

  local lineno=$1
  local msg=$2
  printf "${red}Failed at line $lineno: $msg${clear}\n"
}
trap 'onErr ${LINENO} "$BASH_COMMAND"' ERR