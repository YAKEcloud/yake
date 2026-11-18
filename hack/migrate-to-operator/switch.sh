#!/usr/bin/env bash
# Edits the working tree of the yake repo from the classic layout to the gardener-operator layout. Re-runnable on any base
# (release tag or main). Review the result with `git diff`, then commit it yourself.
#   switch.sh core         replaces etcd, kube-apiserver, gardener-application/runtime, dashboard/webterminal and ingress-nginx
#                          by gardener-operator + Garden (operator/), re-points all dependsOn to the `garden` HelmRelease
#   switch.sh extensions   replaces the catalog extensions of gardener/extensions by operator Extension resources
#   switch.sh gardenlet    enables the gardenlet self-upgrade (selfUpgrade values in the gardenlet HelmRelease), then `cutover.sh gardenlet`
#   switch.sh gardenlet-final  removes the gardenlet HelmRelease from Flux (after `cutover.sh gardenlet`)
# Usage: switch.sh <core|extensions|gardenlet|gardenlet-final> [--force]   (without --force the tree must be clean)
set -euo pipefail
STAGE="${1:-}"; FORCE="${2:-}"
[[ "$STAGE" == core || "$STAGE" == extensions || "$STAGE" == gardenlet || "$STAGE" == gardenlet-final ]] || { sed -n '2,8p' "$0"; exit 1; }
cd "$(git rev-parse --show-toplevel)"
[[ -d operator && -f flux/operator.yaml ]] || { echo "operator/ and flux/operator.yaml are missing (wrong branch?)"; exit 1; }
if [[ "$FORCE" != --force ]] && [[ -n "$(git status --porcelain --untracked-files=no)" ]]; then echo "tracked files are modified, commit or use --force"; exit 1; fi
STAGE="$STAGE" python3 -I - <<'PY'
import os, re
stage = os.environ["STAGE"]
def rd(p): return open(p).read()
def wr(p, s): open(p, "w").write(s)
def cut(s, text):
    return s.replace(text, "")
def hc(name):
    return f"    - apiVersion: helm.toolkit.fluxcd.io/v2\n      kind: HelmRelease\n      name: {name}\n      namespace: flux-system\n"

if stage == "core":
    s = rd("kustomization.yaml")
    if "flux/operator.yaml" not in s:
        s = s.replace("  - flux/gardener.yaml\n", "  - flux/gardener.yaml\n  - flux/operator.yaml\n")
    wr("kustomization.yaml", s)
    s = rd("gardener/kustomization.yaml")
    # gardener-metrics-exporter: gardener-operator deploys its own gardener-metrics-exporter (same Deployment name in garden)
    for r in ["etcd.yaml", "etcd-events.yaml", "gardener.yaml", "kube-apiserver.yaml", "webterminal.yaml", "gardener-metrics-exporter.yaml"]:
        s = cut(s, f"  - {r}\n")
    wr("gardener/kustomization.yaml", s)
    s = rd("flux/gardener.yaml")
    for n in ["etcd", "etcd-events", "gardener-application", "gardener-runtime", "kube-apiserver"]:
        s = cut(s, hc(n))
    wr("flux/gardener.yaml", s)
    s = rd("pre-gardener/kustomization.yaml"); wr("pre-gardener/kustomization.yaml", cut(s, "  - ingress-nginx.yaml\n"))
    s = rd("flux/pre-gardener.yaml"); wr("flux/pre-gardener.yaml", cut(s, hc("ingress-nginx")))
    s = rd("pre-gardener/cert-management.yaml"); wr("pre-gardener/cert-management.yaml", cut(s, "    - name: ingress-nginx\n"))
    for p in ["gardener/cloudprofiles.yaml", "gardener/extensions.yaml", "gardener/garden-content.yaml", "gardener/gardenlet.yaml",
              "gardener/extensions/templates/helmrelease-controller.yaml",
              "gardener/extensions/templates/helmrelease-admission.yaml"]:
        s = rd(p)
        s = s.replace("    - name: gardener-application\n    - name: gardener-runtime\n", "    - name: garden\n")
        s = s.replace("    - name: gardener-runtime\n    - name: gardener-application\n", "    - name: garden\n")
        s = s.replace("    - name: gardener-application\n", "    - name: garden\n")
        s = s.replace("    - name: gardener-runtime\n", "")
        wr(p, s)
    # Gardener 1.139 removed Seed .spec.dns.provider.secretRef: the gardenlet config of releases before main must use credentialsRef
    p = "configuration/configuration/templates/gardenlet.yaml"
    if os.path.exists(p):
        s = rd(p)
        old = """              secretRef:
                name: base-dns-provider-secret
                namespace: garden
"""
        new = """              credentialsRef:
                apiVersion: v1
                kind: Secret
                name: base-dns-provider-secret
                namespace: garden
"""
        if old in s:
            s = s.replace(old, new, 1); wr(p, s)
    # Gardener 1.153: the gardenlet must keep the Seed .spec.dns.defaults (removing them is forbidden). Derive them from the default
    # domains, the Secrets default-domain-<domain> are created by the garden-content chart.
    p = "configuration/configuration/templates/gardenlet.yaml"
    if os.path.exists(p):
        s = rd(p)
        if "            defaults:" not in s:
            anchor = "          dns:\n            provider:\n"
            block = """          dns:
            defaults:
{{- $defaultDomains := (.Values.domains.gardener).defaultDomains | default (list (dict "domain" .Values.domains.global.domain "provider" .Values.domains.global.provider)) }}
{{- range $defaultDomains }}
              - domain: {{ .domain }}
                type: {{ .provider | default $.Values.domains.global.provider }}
                credentialsRef:
                  apiVersion: v1
                  kind: Secret
                  name: default-domain-{{ .domain | replace "." "-" }}
                  namespace: garden
{{- end }}
            provider:
"""
            if anchor in s:
                s = s.replace(anchor, block, 1); wr(p, s)
    s = rd("gardener/identity.yaml")
    if "$patch: delete" not in s:
        s = s.replace("""  postRenderers:
    - kustomize:
        patches:
""", """  postRenderers:
    - kustomize:
        patches:
          # Exposed through the virtual garden Istio ingress gateway (operator/garden), not through an Ingress.
          - target:
              kind: Ingress
              name: identity-ingress
            patch: |
              $patch: delete
              apiVersion: networking.k8s.io/v1
              kind: Ingress
              metadata:
                name: identity-ingress
""")
    wr("gardener/identity.yaml", s)

elif stage == "gardenlet":
    p = "gardener/gardenlet.yaml"
    s = rd(p)
    if "selfUpgrade:" not in s:
        ver = re.search(r"chart: gardenlet\n\s+version: (\S+)", s).group(1)
        s = s.replace("  values:\n    runtime:", "  values:\n    selfUpgrade:\n      deployment:\n        helm:\n          ociRepository:\n          # kept in sync by upgrade-step.sh until the operator takes over (auto-update label)\n            ref: europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v" + ver + "\n    runtime:", 1)
        s = s.replace("          ociRepository:\n          # kept in sync", "          ociRepository:\n            # kept in sync", 1)
        wr(p, s)
elif stage == "gardenlet-final":
    s = rd("gardener/kustomization.yaml"); wr("gardener/kustomization.yaml", cut(s, "  - gardenlet.yaml\n"))
    s = rd("flux/gardener.yaml"); wr("flux/gardener.yaml", cut(s, hc("internal-gardenlet")))
    if os.path.exists("gardener/gardenlet.yaml"): os.remove("gardener/gardenlet.yaml")
else:
    # catalog keys of operator/extensions
    cat = rd("operator/extensions/templates/_catalog.tpl")
    keys = re.findall(r"^([a-z0-9-]+):\n  name:", cat, re.M)
    skip = "{{- if not (has $k (list " + " ".join(f'"{k}"' for k in keys) + ")) }}\n"
    # classic chart renders only what the operator does not manage
    for p in ["gardener/extensions/templates/helmrelease-controller.yaml", "gardener/extensions/templates/helmrelease-admission.yaml",
              "gardener/extensions/templates/certificate.yaml"]:
        s = rd(p)
        if "has $k (list" in s: continue
        s = s.replace("{{- if $v.enabled }}\n", "{{- if $v.enabled }}\n" + skip, 1)
        assert skip in s, p
        s = s.rstrip("\n") + "\n{{- end }}\n"
        wr(p, s)
    s = rd("operator/kustomization.yaml")
    if "extensions.yaml" not in s:
        s = s.rstrip("\n") + "\n  - extensions.yaml\n"
    wr("operator/kustomization.yaml", s)
print("done:", stage)
PY
git status --short
