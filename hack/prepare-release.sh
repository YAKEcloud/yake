#!/usr/bin/env bash

set -eo pipefail

_fail() {
  msg=$1
  prefix=""
  if [ "$GITHUB_ACTIONS" == "true" ]; then
    prefix="::error::"
  fi

  echo "$prefix$msg"
  exit 1
}

minorPattern='^[0-9]{1,}[.][0-9]{1,}'
versionPattern='^[0-9]{1,}[.][0-9]{1,}[.][0-9]{1,}-[0-9]{1,}$'

version=${version:-$1}

if [[ ! -d .git ]]; then
  _fail "script must be run from the repository root"
fi

if [[ ! $version =~ $versionPattern ]]; then
  _fail "usage: $0 1.2.3-4"
fi

minor=$(echo "$version" | grep -oE "$minorPattern")
releaseNotes="release-notes/v$minor.md"

tag="v$version"
branch="release-v$minor"

git fetch
git fetch --tags

if [[ -e ".git/refs/tags/$tag" ]]; then
  _fail "A tag named '$tag' already exists."
fi

if [[ ! -f "$releaseNotes" ]]; then
  _fail "No release notes found for version $minor. Expected file '$releaseNotes' to exist."
fi

if [[ $(grep "$branch" .github/renovate.json5 | wc -l) == "0" ]]; then
  echo Updating .github/renovate.json5

  maj=$(echo "$minor" | grep -oE "^[0-9]{1,}")
  min=$(echo "$minor" | grep -oE "[0-9]{1,}$")

  sed "/\/\/ template/ {
    p
    s;// template\s*;;
    s;_BRANCH_;$branch;g
    s;_MAJOR_;$maj;g
    s;_MINOR_;$min;g
  }" .github/renovate.json5

  git add .github/renovate.json5
  git commit -m "track $tag"
  git push
fi

if [[ -e ".git/refs/remotes/origin/$branch" ]]; then
  git switch "$branch"
  git pull
else
  git switch -c "$branch"
fi

git add .
git commit --allow-empty -m "$tag"
git tag "$tag"
git push -u origin "$branch"
git push -u origin "$tag"
