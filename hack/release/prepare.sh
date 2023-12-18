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

tag="v$version"
branch="release-v$minor"

git fetch
git fetch --tags

if [[ -e ".git/refs/tags/$tag" ]]; then
  echo "Warning: tag: $tag already exists"
fi

if [[ $(grep "$branch" .github/renovate.json5 | wc -l) == "0" ]]; then
  echo Updating .github/renovate.json5

  assignee=$GITHUB_ACTOR
  sed -i 's;"assignees": .*,$;"assignees": ["'$assignee'"],;' .github/renovate.json5

  maj=$(echo "$minor" | grep -oE "^[0-9]{1,}")
  min=$(echo "$minor" | grep -oE "[0-9]{1,}$")

  sed -i "/\/\/ template/ {
    p
    s;// template\s*;;
    s;_BRANCH_;$branch;g
    s;_MAJOR_;$maj;g
    s;_MINOR_;$min;g
  }" .github/renovate.json5

  git add .github/renovate.json5
  git commit -m "[skip ci] track $tag"
  git push
fi

if [[ -e ".git/refs/remotes/origin/$branch" ]]; then
  git switch "$branch"
  git pull
else
  touch docs/release-notes/next.md
  mv docs/release-notes/next.md docs/release-notes/v$minor.md
  sed -i "s;# Release Notes next;# Release Notes v$minor;" "docs/release-notes/v$minor.md"
	echo "---" > docs/release-notes/next.md
  echo "hide_table_of_contents: true" >> docs/release-notes/next.md
  echo "---" >> docs/release-notes/next.md
  echo "" >> docs/release-notes/next.md
  echo "# Release Notes next" >> docs/release-notes/next.md
  echo "" >> docs/release-notes/next.md
  echo "## Yake release notes and upgrade guide" >> docs/release-notes/next.md
  echo "" >> docs/release-notes/next.md
  echo "## Related upstream release notes / changelogs" >> docs/release-notes/next.md
  echo "" >> docs/release-notes/next.md
	if [ ! -d docs/versioned_docs/version-$minor.x ]; then
		 cd docs
		 yarn install
		 yarn docusaurus docs:version $minor.x
		 cd ..
	fi
  git add .
  git commit -m "Add documentation for $minor"
  git push

  git switch -c "$branch"
fi

git add .
git commit --allow-empty -m "[skip ci] $tag"
git tag "$tag" -f
git push -u origin "$branch"
git push -u origin "$tag" -f

# copy release notes to reuse in github release, cut frontmatter
tail -n +5 "docs/release-notes/v$minor.md" > /tmp/release-body.md
