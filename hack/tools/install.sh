#!/usr/bin/env bash

TOOLS_DIR=$(dirname "$(pwd)/${BASH_SOURCE[0]}")
TOOLS_BIN_DIR="$TOOLS_DIR/bin"

FLUX="$TOOLS_BIN_DIR/flux"
HELM="$TOOLS_BIN_DIR/helm"
KIND="$TOOLS_BIN_DIR/kind"
KUBECTL="$TOOLS_BIN_DIR/kubectl"
MC="$TOOLS_BIN_DIR/mc"
RCLONE="$TOOLS_BIN_DIR/rclone"
YQ="$TOOLS_BIN_DIR/yq"
SIPCALC="$TOOLS_BIN_DIR/sipcalc"
ENVSUBST="$TOOLS_BIN_DIR/envsubst"

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
  VERSION=v2.1.2

  if _isStale $FLUX $VERSION; then
    curl -L "https://github.com/fluxcd/flux2/releases/download/$VERSION/flux_${VERSION/v/}_${TOOLS_KERNEL}_$TOOLS_ARCH.tar.gz" | tar -xzm -C "$TOOLS_BIN_DIR"
    chmod +x $FLUX

    _setVersion $FLUX $VERSION
  fi
}

install_kubectl() {
  # renovate: datasource=github-tags depName=kubernetes/kubectl
  VERSION=v0.28.4

  if _isStale $KUBECTL $VERSION; then
    curl -Lo $KUBECTL "https://dev-tools-proxy.ingress.23ke-releases.23t-prod.okeanos.dev/kubectl/release/${VERSION/v0/v1}/bin/$TOOLS_KERNEL/$TOOLS_ARCH/kubectl"
    chmod +x $KUBECTL

    _setVersion $KUBECTL $VERSION
  fi
}

install_yq() {
  # renovate: datasource=github-releases depName=mikefarah/yq
  VERSION=v4.40.3

  if _isStale $YQ $VERSION; then
    curl -L -o $YQ "https://github.com/mikefarah/yq/releases/download/$VERSION/yq_${TOOLS_KERNEL}_$TOOLS_ARCH"
    chmod +x $YQ

    _setVersion $YQ $VERSION
  fi
}

install_mc() {
  # renovate: datasource=github-tags depName=minio/mc versioning=regex:^(?<compatibility>RELEASE\.)(?<major>\d+)-(?<minor>\d+)-(?<patch>\d+)T(?<build>\d+)-\d+-\d+Z$
  VERSION=RELEASE.2023-11-20T16-30-59Z

  if _isStale $MC $VERSION; then
    curl -L -o "$MC" "https://dl.min.io/client/mc/release/$TOOLS_KERNEL-$TOOLS_ARCH/archive/mc.$VERSION"
    chmod +x "$MC"

    _setVersion $MC $VERSION
  fi
}

install_helm() {
  # renovate: datasource=github-tags depName=helm/helm
  VERSION=v3.13.2

  if _isStale $HELM $VERSION; then
    curl -L "https://get.helm.sh/helm-$VERSION-$TOOLS_KERNEL-$TOOLS_ARCH.tar.gz" | tar -xzm --strip-components 1 -C $TOOLS_BIN_DIR "$TOOLS_KERNEL-$TOOLS_ARCH/helm"
    chmod +x $HELM

    _setVersion $HELM $VERSION
  fi
}

install_rclone() {
  # renovate: datasource=github-tags depName=rclone/rclone
  VERSION=v1.65.0

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

install_23kectl() {
  # not under renovate control
  VERSION=$1
  local _23KECTL="$TOOLS_BIN_DIR/23kectl"

  if _isStale $_23KECTL $VERSION; then
		curl -L -o $_23KECTL https://github.com/23technologies/23kectl/releases/download/${_23KECTL_VERSION}/23kectl-${_23KECTL_VERSION}-${TOOLS_KERNEL}-${TOOLS_ARCH}
		chmod +x $_23KECTL

    _setVersion $_23KECTL $VERSION
  fi

  echo $_23KECTL
}

install_kind() {
  # not under renovate control
  VERSION=v0.20.0

  if _isStale "$KIND" "$VERSION"; then
		curl -L -o "$KIND" "https://github.com/kubernetes-sigs/kind/releases/download/${VERSION}/kind-${TOOLS_KERNEL}-${TOOLS_ARCH}"
		chmod +x "$KIND"

    _setVersion "$KIND" "$VERSION"
  fi
}


install_sipcalc() {
  # not under renovate control
  VERSION=1.1.6

  if _isStale "$SIPCALC" "$VERSION"; then
		TAR="sipcalc-${VERSION}.tar.gz"
		curl -L -o "$TAR" "http://www.routemeister.net/projects/sipcalc/files/${TAR}"
	  tar -xvf $TAR
		cd sipcalc-${VERSION}
		./configure --prefix="$TOOLS_DIR"
		make install
		cd ..
		rm -rf sipcalc-${VERSION}
		rm $TAR

    _setVersion "$SIPCALC" "$VERSION"
  fi
}

install_envsubst() {
		# not under renovate control
		VERSION=v1.2.0

		if _isStale "$SIPCALC" "$VERSION"; then
				curl -L https://github.com/a8m/envsubst/releases/download/${VERSION}/envsubst-`uname -s`-`uname -m` -o $ENVSUBST
				chmod +x $ENVSUBST

				_setVersion "$ENVSUBST" "$VERSION"
		fi
}
