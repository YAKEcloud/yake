#!/usr/bin/env bash
set -eo pipefail

git config --global user.email "trash@23technologies.cloud"
git config --global user.name "23T Machine User"

tmpDir=$(hack/release/make-tmp-release-dir.sh GitRepository)
cd 23ke-releases
git rm -rf -- .
cp -r $tmpDir/* .

if [[ $(git status --porcelain) ]]; then
  git add .
  git commit -m "Add release $tag" --allow-empty

  git tag $tag
  git push
  git push --tags
fi
