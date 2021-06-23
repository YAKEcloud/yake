{ sources ? import ./nix/sources.nix { },
  # should be false on derived configs
  uploadDevConfig ? true}:
let 
  pkgs = import sources.nixpkgs {};
in
let
  inherit (pkgs) lib buildGoPackage buildGoModule fetchFromGitHub;

  clusterctl = buildGoModule rec {
    pname = "clusterctl";
    version = "0.3.16";

    src = fetchFromGitHub {
      owner = "kubernetes-sigs";
      repo = "cluster-api";
      rev = "v${version}";
      sha256 = "0snjwj6jqsvpi497a2fvqipim63k6vm219xwf3x574isz54xy8y3";
    };

    vendorSha256 = "0ywzw3razhapqbacd6hbq785aimph4m77wsd89wxw3vnxrfqgj4b";

    doCheck = false;

    subPackages = [ "cmd/clusterctl" ];

    meta = with lib; {
      inherit (src.meta) homepage;
      description =
        "Home for the Cluster Management API work, a subproject of sig-cluster-lifecycle";
      license = licenses.asl20;
      #maintainers = with maintainers; [ mupdt ];
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
    pname = "charts-syncer";
    version = "1.3.1";

    src = fetchFromGitHub {
      owner = "jetstack";
      repo = "cert-manager";
      rev = "v${version}";
      sha256 = "0gcshqhzmc6dyw448npir9i7b2dqlpzlaaffq3smi569clz7dmns";
    };

    vendorSha256 = "1igmmwgn4mbbhrnc02f3pjdpx10c06a043x8qgqc950ra3cjcp7g";

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

    # subPackages = [ "cmd/ctl" ];

    meta = with lib; {
      inherit (src.meta) homepage;
      description =
        "Command-line client for the Gardener.";
      license = licenses.asl20;
    };
  };

  # myTerraform = pkgs.terraform_0_13 {
  #       plugins = [terraform-kubectl];
  #     };

in pkgs.mkShell {
  # NIX_TERRAFORM_PLUGIN_DIR = "${terraform-kubectl}/bin";
  nativeBuildInputs = with pkgs; [
    # terraform-kubectl
    cert-manager-cli
    clusterctl
    coreutils
    docker
    fluxcd
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
