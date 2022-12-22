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
  # todo: update renovate.json5 automatically

  _fail "It seems you haven't set up .github/renovate.json5 to track the new version's release branch ($branch). Please do so."
fi

if [[ -e ".git/refs/remotes/origin/$branch" ]]; then
  git switch "$branch"
  git pull
else
  git switch -c "$branch"
fi

echo "Updating chart versions to $version"
while read -r chart; do
  echo "$chart"
  sed -i -r -e "s;^version:.+$;version: $version;" "$chart"
done <<< "$(find . -name Chart.yaml)"
echo "Done"

git add .
git commit -m "$tag"
git tag "$tag"
git push -u origin "$branch"
git push -u origin "$tag"
