TOOLS_DIR 								 := hack/tools
TOOLS_BIN_DIR              := $(TOOLS_DIR)/bin

FLUX	                     := $(TOOLS_BIN_DIR)/flux
KUBECTL                    := $(TOOLS_BIN_DIR)/kubectl
YQ                         := $(TOOLS_BIN_DIR)/yq
MC                         := $(TOOLS_BIN_DIR)/mc
HELM                         := $(TOOLS_BIN_DIR)/helm

# default tool versions
# renovate: datasource=github-releases depName=fluxcd/flux2
FLUX_VERSION ?= v0.35.0
# renovate: datasource=github-tags depName=helm/helm
HELM_VERSION ?= v3.12.0
# renovate: datasource=github-tags depName=kubernetes/kubectl
KUBECTL_VERSION ?= v0.24.3
# renovate: datasource=github-releases depName=mikefarah/yq
YQ_VERSION ?= v4.9.6
# renovate: datasource=github-tags depName=minio/mc versioning=regex:^(?<compatibility>RELEASE\.)(?<major>\d+)-(?<minor>\d+)-(?<patch>\d+)T(?<build>\d+)-\d+-\d+Z$
MC_VERSION ?= RELEASE.2023-01-28T20-29-38Z

# kubectl v0.x.y corresponds with kubernetes v1.x.y, the kubectl download server expects the kubernetes version
KUBERNETES_VERSION := $(subst v0,v1,$(KUBECTL_VERSION))

#########################################
# Common                                #
#########################################

# Tool targets should declare go.mod as a prerequisite, if the tool's version is managed via go modules. This causes
# make to rebuild the tool in the desired version, when go.mod is changed.
# For tools where the version is not managed via go.mod, we use a file per tool and version as an indicator for make
# whether we need to install the tool or a different version of the tool (make doesn't rerun the rule if the rule is
# changed).

# Use this "function" to add the version file as a prerequisite for the tool target: e.g.
#   $(HELM): $(call tool_version_file,$(HELM),$(HELM_VERSION))
tool_version_file = $(TOOLS_BIN_DIR)/.version_$(subst $(TOOLS_BIN_DIR)/,,$(1))_$(2)

# This target cleans up any previous version files for the given tool and creates the given version file.
# This way, we can generically determine, which version was installed without calling each and every binary explicitly.
$(TOOLS_BIN_DIR)/.version_%:
	@version_file=$@; rm -f $${version_file%_*}*
	@touch $@

.PHONY: clean-tools-bin
clean-tools-bin:
	rm -rf $(TOOLS_BIN_DIR)/*

KERNEL := $(shell uname -s | tr '[:upper:]' '[:lower:]')
ARCH := $(shell uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')

#########################################
# Tools                                 #
#########################################

$(FLUX): $(call tool_version_file,$(FLUX),$(FLUX_VERSION))
	curl -L https://github.com/fluxcd/flux2/releases/download/$(FLUX_VERSION)/flux_$(subst v,,$(FLUX_VERSION))_$(KERNEL)_$(ARCH).tar.gz | tar -xzm -C $(TOOLS_BIN_DIR)
	chmod +x $(FLUX)

$(KUBECTL): $(call tool_version_file,$(KUBECTL),$(KUBERNETES_VERSION))
	curl -Lo $(KUBECTL) https://dl.k8s.io/release/$(KUBERNETES_VERSION)/bin/$(KERNEL)/$(ARCH)/kubectl
	chmod +x $(KUBECTL)

$(YQ): $(call tool_version_file,$(YQ),$(YQ_VERSION))
	curl -L -o $(YQ) https://github.com/mikefarah/yq/releases/download/$(YQ_VERSION)/yq_$(KERNEL)_$(ARCH)
	chmod +x $(YQ)

$(MC): $(call tool_version_file,$(MC),$(MC_VERSION))
	curl -L -o $(MC) https://dl.min.io/client/mc/release/$(KERNEL)-$(ARCH)/archive/mc.$(MC_VERSION)
	chmod +x $(MC)

$(HELM): $(call tool_version_file,$(HELM),$(HELM_VERSION))
	curl -L https://get.helm.sh/helm-$(HELM_VERSION)-$(KERNEL)-$(ARCH).tar.gz | tar -xz --strip-components 1 -C $(TOOLS_BIN_DIR) "$(KERNEL)-$(ARCH)/helm"
	chmod +x $(HELM)

all: $(FLUX) $(YQ) $(KUBECTL) $(MC) $(HELM)
