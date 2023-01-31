{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    # nativeBuildInputs is usually what you want -- tools you need to run
    nativeBuildInputs = [ pkgs.go_1_19 (import <nixos-unstable> {}).delve ];
    hardeningDisable = [ "all" ];
}
