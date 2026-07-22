#!/usr/bin/env bash
# Creates retroactive YAKE releases for Gardener versions that were skipped.
#
# Usage: hack/release/create-retroactive-releases.sh
#
# Must be run from the repository root with a clean working tree.
# Requires: node + yarn (for docusaurus versioning), git push access to origin.
#
# What it does for each missing version:
#   1. Creates a temporary branch from the correct historical commit
#   2. Pulls the upstream gardener-controlplane + gardenlet charts (for 1.138)
#   3. Runs prepare.sh which creates the release-v* branch, docs, tag, and pushes
#   4. The push to release-v* triggers the CI to create the GitHub Release + OCI artifact
#   5. Cleans up the temporary branch

set -eo pipefail

source hack/tools/install.sh
install_yq
install_helm

if [[ ! -d .git ]]; then
  echo "Must be run from repository root"
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Stash or commit your changes first."
  exit 1
fi

_reset_next_md() {
  cat > docs/release-notes/next.md <<'EOF'
---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs

EOF
}

_set_gardener_version() {
  local version=$1
  # Update both HelmReleases (gardener-application + gardener-runtime) in gardener/gardener.yaml
  $YQ -i "(.spec.chart.spec.version) = \"$version\"" gardener/gardener.yaml
  $YQ -i "(.spec.chart.spec.version) = \"$version\"" gardener/gardenlet.yaml
}

_release() {
  local version=$1         # e.g. 1.138.3-0
  local start_commit=$2    # git commit to branch from (empty = stay on current branch)
  local temp_branch=$3     # temporary branch name (empty = no temp branch needed)
  local pull_charts=$4     # gardener version to pull from upstream (empty = skip)

  echo ""
  echo "========================================="
  echo "  Creating release $version"
  echo "========================================="

  if [[ -n "$start_commit" ]]; then
    git checkout "$start_commit" -b "$temp_branch"
    git push -u origin "$temp_branch"
  fi

  if [[ -n "$pull_charts" ]]; then
    _reset_next_md
    ./hack/pull-helmchart.sh gardener-controlplane "$pull_charts"
    ./hack/pull-helmchart.sh gardenlet "$pull_charts"
    _set_gardener_version "$pull_charts"
    git add gardener/gardener.yaml gardener/gardenlet.yaml \
            helmcharts/gardener-controlplane/ helmcharts/gardenlet/ \
            docs/release-notes/next.md
    git commit -m "Update gardener-controlplane to v${pull_charts}"
  fi

  ./hack/release/prepare.sh "$version"

  if [[ -n "$temp_branch" ]]; then
    git checkout main
    git branch -d "$temp_branch"
    # The temp branch on origin had the docs commit pushed to it by prepare.sh.
    # It can be deleted; the real release branch is release-v<major.minor>.
    git push origin --delete "$temp_branch" || true
  fi

  echo ""
  echo "  Release $version done. CI will create the GitHub Release + OCI artifact."
  echo "  Wait for CI to finish before creating the next release."
  echo ""
}

# ─────────────────────────────────────────────────────────────────────────────
# 1.138.3 — not in git history, pulled fresh from gardener-community-charts.
#           Starting point: last commit on main that had gardener 1.137.7.
# ─────────────────────────────────────────────────────────────────────────────
_release "1.138.3-0" "9414c562393" "temp-create-1138" "1.138.3"

# ─────────────────────────────────────────────────────────────────────────────
# 1.139.1 — commit 13d39d3cd74 is the merge of the 1.139 PR (includes all
#           required config changes: DNS secretRef removal, gardenlet VPA, etc.)
# ─────────────────────────────────────────────────────────────────────────────
_release "1.139.1-0" "13d39d3cd74" "temp-create-1139" ""

# ─────────────────────────────────────────────────────────────────────────────
# 1.140.2 — last commit on main with gardener 1.140.x
# ─────────────────────────────────────────────────────────────────────────────
_release "1.140.2-0" "294fca1ecae" "temp-create-1140" ""

echo "All retroactive releases created."
echo "Check CI for GitHub Release + OCI artifact status."
