#!/usr/bin/env bash

TOOLS_BIN_DIR="hack/tools/bin"

FLUX="$TOOLS_BIN_DIR/flux"
KUBECTL="$TOOLS_BIN_DIR/kubectl"
YQ="$TOOLS_BIN_DIR/yq"
MC="$TOOLS_BIN_DIR/mc"
HELM="$TOOLS_BIN_DIR/helm"
RCLONE="$TOOLS_BIN_DIR/rclone"

TOOLS_KERNEL="$(uname -s | tr '[:upper:]' '[:lower:]')"
TOOLS_ARCH="$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')"

_versionFile() {
  echo "$TOOLS_BIN_DIR/.version_$(basename $1)"
}

_isStale() {
  local dep=$1
  local ver=$2
  local versionFile=$(_versionFile $dep)

  if [ ! -f "$dep" ]; then
    return 0
  elif [ ! -f "$versionFile" ]; then
    return 0
  elif [[ $ver != $(cat $versionFile) ]]; then
    return 0
  fi

  return 1
}

_setVersion() {
  local dep=$1
  local ver=$2
  local versionFile=$(_versionFile $dep)

  echo -n "$ver" > "$versionFile"
}

install_flux() {
  # renovate: datasource=github-releases depName=fluxcd/flux2
  VERSION=v0.41.2

  if _isStale $FLUX $VERSION; then
    curl -L "https://github.com/fluxcd/flux2/releases/download/$VERSION/flux_${VERSION/v/}_${TOOLS_KERNEL}_$TOOLS_ARCH.tar.gz" | tar -xzm -C "$TOOLS_BIN_DIR"
    chmod +x $FLUX

    _setVersion $FLUX $VERSION
  fi
}

install_kubectl() {
  # renovate: datasource=github-tags depName=kubernetes/kubectl
  VERSION=v0.27.1

  if _isStale $KUBECTL $VERSION; then
    curl -Lo $KUBECTL "https://dl.k8s.io/release/${VERSION/v0/v1}/bin/$TOOLS_KERNEL/$TOOLS_ARCH/kubectl"
    chmod +x $KUBECTL

    _setVersion $KUBECTL $VERSION
  fi
}

install_yq() {
  # renovate: datasource=github-releases depName=mikefarah/yq
  VERSION=v4.33.3

  if _isStale $YQ $VERSION; then
    curl -L -o $YQ "https://github.com/mikefarah/yq/releases/download/$VERSION/yq_${TOOLS_KERNEL}_$TOOLS_ARCH"
    chmod +x $YQ

    _setVersion $YQ $VERSION
  fi
}

install_mc() {
  # renovate: datasource=github-tags depName=minio/mc versioning=regex:^(?<compatibility>RELEASE\.)(?<major>\d+)-(?<minor>\d+)-(?<patch>\d+)T(?<build>\d+)-\d+-\d+Z$
  VERSION=RELEASE.2023-05-04T18-10-16Z

  if _isStale $MC $VERSION; then
    curl -L -o "$MC" "https://dl.min.io/client/mc/release/$TOOLS_KERNEL-$TOOLS_ARCH/archive/mc.$VERSION"
    chmod +x "$MC"

    _setVersion $MC $VERSION
  fi
}

install_helm() {
  # renovate: datasource=github-tags depName=helm/helm
  VERSION=v3.12.0

  if _isStale $HELM $VERSION; then
    curl -L "https://get.helm.sh/helm-$VERSION-$TOOLS_KERNEL-$TOOLS_ARCH.tar.gz" | tar -xzm --strip-components 1 -C $TOOLS_BIN_DIR "$TOOLS_KERNEL-$TOOLS_ARCH/helm"
    chmod +x $HELM

    _setVersion $HELM $VERSION
  fi
}


install_rclone() {
  # renovate: datasource=github-tags depName=rclone/rclone
  VERSION=v1.62.2

  if _isStale $RCLONE $VERSION; then
    ZIP="$RCLONE.zip"
    OS=${TOOLS_KERNEL/darwin/osx}

    curl -Lo $ZIP "https://github.com/rclone/rclone/releases/download/${VERSION}/rclone-${VERSION}-${OS}-${TOOLS_ARCH}.zip"
    unzip -p $ZIP "rclone-${VERSION}-${OS}-${TOOLS_ARCH}/rclone" > $RCLONE
    rm $ZIP -f
    chmod +x $RCLONE

    _setVersion $RCLONE $VERSION
  fi
}
