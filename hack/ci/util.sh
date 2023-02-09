#!/usr/bin/env bash

onErr() {
  local red='\033[0;31m'
  local clear='\033[0m'

  local lineno=$1
  local msg=$2
  printf "${red}Failed at line $lineno: $msg${clear}\n"
}
trap 'onErr ${LINENO} "$BASH_COMMAND"' ERR