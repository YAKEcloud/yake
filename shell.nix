{ sources ? import ./nix/sources.nix { },
  # should be false on derived configs
  uploadDevConfig ? true}:
let
  pkgs = import sources.nixpkgs {};

  fluxVersion = "0.15.3";
  fluxManifests = pkgs.fetchzip {
    url = "https://github.com/fluxcd/flux2/releases/download/v${fluxVersion}/manifests.tar.gz";
    sha256 = "sha256-/uD0hxtTJSr+2tZcwzOIQcEbikHOshWukEBSaK3FiP4=";
    stripRoot = false;
  };
in
let
  inherit (pkgs) lib buildGoPackage buildGoModule fetchFromGitHub installShellFiles;

  clusterctl = buildGoModule rec {
    pname = "clusterctl";
    version = "0.3.19";

    src = fetchFromGitHub {
      owner = "kubernetes-sigs";
      repo = "cluster-api";
      rev = "v${version}";
      sha256 = "0k3mkjiymcqk3gn5mk2pf0jpgwg40hf4piipd0dwzsr970jgi23x";
    };

    vendorSha256 = "122i08mnshqp619pf90bvn82ar38z5907j16qp064yjm740yak6g";

    doCheck = false;

    subPackages = [ "cmd/clusterctl" ];

    meta = with lib; {
      inherit (src.meta) homepage;
      description =
        "Home for the Cluster Management API work, a subproject of sig-cluster-lifecycle";
      license = licenses.asl20;
    };
  };

  charts-syncer = buildGoModule rec {
    pname = "charts-syncer";
    version = "0.9.0";

    src = fetchFromGitHub {
      owner = "bitnami-labs";
      repo = "charts-syncer";
      rev = "v${version}";
      sha256 = "0cj29ppsr4xnncxrgq5xg9v0j8sgi59mx24vlnxr8rba80siqhh2";
    };

    vendorSha256 = "0hky6jz3kpslkad1sn9gnyspw1crl4fn20m85vh5hcqwdvyiflw7";

    doCheck = false;

    meta = with lib; {
      inherit (src.meta) homepage;
      description =
        "Tool for synchronizing Helm Chart repositories.";
      license = licenses.asl20;
    };
  };

  cert-manager-cli = buildGoModule rec {
    pname = "cert-manager-cli";
    version = "1.4.0";

    src = fetchFromGitHub {
      owner = "jetstack";
      repo = "cert-manager";
      rev = "v${version}";
      sha256 = "03v64zdrdn68p7ami6m7rqfnhkkz8mpnmmd2fc9g0m20a8b2ijqs";
    };

    vendorSha256 = "14rx786mff0a651y33vq8pjy0bxbhzqrqlqfyslkg8vn99lx4575";

    doCheck = false;

    subPackages = [ "cmd/ctl" ];

    meta = with lib; {
      inherit (src.meta) homepage;
      description =
        "Tool for synchronizing Helm Chart repositories.";
      license = licenses.asl20;
    };
  };

  gardenctl = buildGoModule rec {
    pname = "gardenctl";
    version = "0.24.2";

    src = fetchFromGitHub {
      owner = "gardener";
      repo = "gardenctl";
      rev = "v${version}";
      sha256 = "16klf2l4kffy15171dk198plia4blkxkm0nn971sy72a2akyd5dd";
    };

    vendorSha256 = null; #"1igmmwgn4mbbhrnc02f3pjdpx10c07a043x8qgqc950ra3cjcp7g";

    doCheck = false;

    meta = with lib; {
      inherit (src.meta) homepage;
      description =
        "Command-line client for the Gardener.";
      license = licenses.asl20;
    };
  };

  flux2 = buildGoModule rec {
    version = fluxVersion;
    pname = "fluxcd";

    src = fetchFromGitHub {
      owner = "fluxcd";
      repo = "flux2";
      rev = "v${version}";
      sha256 = "sha256-Pyt5BaOawBwyBz7ULzOZr0Fc6bqM5dKn775AylUjDVE=";
    };

    vendorSha256 = "sha256-17Kbun6Mrip4/XHN5eMHxgnSoX1KuGHwtb8yLTf/Mks=";

    nativeBuildInputs = [ installShellFiles ];

    doCheck = false;

    subPackages = [ "cmd/flux" ];

    buildFlagsArray = [ "-ldflags=-s -w -X main.VERSION=${version}" ];

    postUnpack = ''
      cp -r ${fluxManifests} source/cmd/flux/manifests
    '';

    doInstallCheck = true;
    installCheckPhase = ''
      $out/bin/flux --version | grep ${version} > /dev/null
    '';

    postInstall = ''
      for shell in bash fish zsh; do
        $out/bin/flux completion $shell > flux.$shell
        installShellCompletion flux.$shell
      done
    '';

    meta = with lib; {
      description = "Open and extensible continuous delivery solution for Kubernetes";
      longDescription = ''
        Flux is a tool for keeping Kubernetes clusters in sync
        with sources of configuration (like Git repositories), and automating
        updates to configuration when there is new code to deploy.
      '';
      homepage = "https://fluxcd.io";
      license = licenses.asl20;
      maintainers = with maintainers; [ jlesquembre ];
      platforms = platforms.unix;
    };
  };

  calicoctl = buildGoModule rec {
    pname = "calicoctl";
    version = "3.19.2";

    src = fetchFromGitHub {
      owner = "projectcalico";
      repo = "calicoctl";
      rev = "v${version}";
      sha256 = "007dig2n9fiq7lk2hz38v1m4f95di79jlmp026bqcgw2s2bs7wxh";
    };

    vendorSha256 = "1ff294xj2gc6qbzkdm35hxms38222pabjfvrzkm22s2q5g9js8sn";

    doCheck = false;

    # subPackages = [ "cmd/ctl" ];

    meta = with lib; {
      inherit (src.meta) homepage;
      description =
        "Command-line client for the Gardener.";
      license = licenses.asl20;
    };
  };

in pkgs.mkShell {
  # NIX_TERRAFORM_PLUGIN_DIR = "${terraform-kubectl}/bin";
  nativeBuildInputs = with pkgs; [
    # terraform-kubectl
    calicoctl
    cert-manager-cli
    clusterctl
    coreutils
    docker
    flux2
    gardenctl
    git
    gnumake
    gnused
    ipcalc
    iproute
    jq
    k9s
    kind
    kubectl
    kubernetes-helm
    kubeval
    kustomize
    minikube
    minio-client
    openssh
    screen
    sops
    yaml2json
  ];
  shellHook = ''
    . <(flux completion bash)

    export KE23_ROOT=`pwd`
    export PATH=$PATH:$KE23_ROOT/hack
    export KE23_UPLOAD_DEV_CONFIG=${(if uploadDevConfig then "1" else "0")}
  '';
}
