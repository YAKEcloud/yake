# Release Notes v1.65

## Upstream Changes

Please check the following sites for upstream release notes:

- [Gardener releases](https://github.com/gardener/gardener/releases)
- [Gardener-community charts releases](https://github.com/gardener-community/gardener-charts/releases)


## 23KE Changes and Upgrade Path
### Post Upgrade
23KE moved the ingress domain specification for the default "internal" seed from `spec.dns.ingressDomain` to `spec.ingress.domain`. With this new specification the gardenlet deploys a new managed ingress-controller for the internal-seed. You should check if the migration step was successful by checking if a working dnsrecord for the ingressdomain exists (`kubectl get dnsrecord`). The record should point to the loadBalancer IP of the new ingress-controller (`kubectl get service`). Furthermore the ingress for prometheus and grafana and the terminal endpoint should be managed by the new ingress-controller. This can be checked by comparing the ingress IPs with the loadBalancer IP of the new ingress-controller.

23KE performs this migration step automatically for the internal seed. For each additional (managed) seed, the API-fields have to be changed manually:

Old format:
```
spec:
  dns:
    ingressDomain: <seeds ingressDomain>
```

New format:
```
spec:
  ingress:
    domain: <seeds ingressDomain>
    controller:
      kind: nginx
  dns:
    provider:
      type: <dns-provider>
      secretRef:
        name: <dns-provider secret>
        namespace: <dns-provider secret-namespace>
      domains:
        include:
          - <zone above seeds ingressDomain>
```

You could use the dns-secret that is used by the internal seed (name: `base-dns-provider-secret`, namespace: `garden`) or provide a new one. Afterwards check, that the dnsrecord is created and that the new ingresscontroller is used for prometheus, grafana and terminal ingresses. If the new one is used, the old manually deployed ingress can be removed.

For more information please refer to these Pull-Requests:
* https://github.com/gardener/gardener/pull/3131 - Introduction of the new API-spec
* https://github.com/gardener/gardener/pull/7529 - Depreciation of the old API-spec
