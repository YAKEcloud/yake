#!/usr/bin/env bash

checkDependencies() {
  DEPS=(envsubst flux git go kubectl mc rclone yq)

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

waitForDNS() {
  local DOMAIN=$1
  local TIMEOUT=${2:-120}

  local BEGIN=$(date +%s)

  echo "waiting for $DOMAIN to resolve"

  if which dig
  then
    local CMD="dig +short $DOMAIN"
  elif which drill
  then
    local CMD="drill -Q $DOMAIN"
  else
    echo "I need dig or drill to wait for a dns record to be present"
  fi

  while [[ $($CMD) == "" ]]; do
    if [[ $((BEGIN + TIMEOUT)) < $(date +%s) ]]; then
      return 1
    fi
    sleep 1
  done

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
trap 'onErr ${LINENO} "$BASH_COMMAND"' ERR
