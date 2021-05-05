{ sources ? import ./nix/sources.nix { }}:
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

  # myTerraform = pkgs.terraform_0_13 {
  #       plugins = [terraform-kubectl];
  #     };

in pkgs.mkShell {
  # NIX_TERRAFORM_PLUGIN_DIR = "${terraform-kubectl}/bin";
  nativeBuildInputs = with pkgs; [
    coreutils
    clusterctl
    docker
    fluxcd
    git
    gnumake
    gnused
    iproute
    k9s
    kind
    kubectl
    kubernetes-helm
    kustomize
    kubeval
    minikube
    minio-client
    openssh
    screen
    sops
    # terraform-kubectl
    yaml2json
  ];
  shellHook = ''
    . <(flux completion bash)

    export KE23_ROOT=`pwd`
    export PATH=$PATH:$KE23_ROOT/hack
  '';
}
