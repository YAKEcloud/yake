#!/usr/bin/env bash

ensureDependencies() {
  make -f hack/tools/tools.mk all

  export FLUX=hack/tools/bin/flux
  export KUBECTL=hack/tools/bin/kubectl
  export MC=hack/tools/bin/mc
  export YQ=hack/tools/bin/yq
}

checkDependencies() {
  DEPS=(envsubst git go rclone)

  for DEP in "${DEPS[@]}"; do
    if ! which "$DEP" &>/dev/null; then
      DIE=1
      printErr "$DEP not found, please install $DEP."
    fi
  done

  if [ -v DIE ]; then
      return 1
  fi

  return 0
}

printErr() {
  local msg=$1

  if [ -v GITHUB_ACTIONS ]; then
    local prefix="::error::"
    local suffix=""
  else
    local prefix='\033[0;31m' # red
    local suffix='\033[0m' # clear
  fi

  echo -e "${prefix}${msg}${suffix}" >&2
}

onErr() {
  local lineno=$1
  local msg=$2

  printErr "Failed at line $lineno: $msg"
}

# ----------------------------------------

trap 'onErr ${LINENO} "$BASH_COMMAND"' ERR
ensureDependencies
