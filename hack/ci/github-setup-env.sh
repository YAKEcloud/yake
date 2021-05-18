#!/usr/bin/env bash

# output parsed ENV variables to stdout

# GITHUB_BASE_REF is set only when triggered by a pull request
# it refers to the branch where the PR should be merged to.
if [[ -z "${GITHUB_BASE_REF}" ]]; then
  export BRANCH_NAME="$(echo "${GITHUB_REF}" | sed 's/refs\/heads\///' | tr '[:upper:]_/' '[:lower:]--')"
else
  export BRANCH_NAME="$(echo "${GITHUB_BASE_REF}" | tr '[:upper:]_/' '[:lower:]--')"
fi
echo "BRANCH_NAME=${BRANCH_NAME}"
