{{/*
Catalog of extensions with an upstream OCI chart in europe-docker.pkg.dev/gardener-project.
  name:       Extension (and ControllerRegistration) name
  chart:      extension chart name
  admission:  base name of the admission charts <admission>-runtime / <admission>-application (empty: none)
  inject:     injectGardenKubeconfig
  resources:  .spec.resources (Resource kinds verified against the ControllerRegistrations of the running landscape)
*/}}
{{- define "extensions.catalog" -}}
provider-azure:
  name: provider-azure
  chart: provider-azure
  admission: admission-azure
  inject: true
  resources:
    - {kind: BackupBucket, type: azure}
    - {kind: BackupEntry, type: azure}
    - {kind: Bastion, type: azure}
    - {kind: ControlPlane, type: azure}
    - {kind: DNSRecord, type: azure-dns}
    - {kind: Infrastructure, type: azure}
    - {kind: Worker, type: azure}
provider-openstack:
  name: provider-openstack
  chart: provider-openstack
  admission: admission-openstack
  inject: true
  resources:
    - {kind: BackupBucket, type: openstack}
    - {kind: BackupEntry, type: openstack}
    - {kind: Bastion, type: openstack}
    - {kind: ControlPlane, type: openstack}
    - {kind: DNSRecord, type: openstack-designate}
    - {kind: Infrastructure, type: openstack}
    - {kind: Worker, type: openstack}
provider-aws:
  name: provider-aws
  chart: provider-aws
  admission: admission-aws
  inject: true
  resources:
    - {kind: BackupBucket, type: aws}
    - {kind: BackupEntry, type: aws}
    - {kind: Bastion, type: aws}
    - {kind: ControlPlane, type: aws}
    - {kind: DNSRecord, type: aws-route53}
    - {kind: Infrastructure, type: aws}
    - {kind: Worker, type: aws}
provider-gcp:
  name: provider-gcp
  chart: provider-gcp
  admission: admission-gcp
  inject: true
  resources:
    - {kind: BackupBucket, type: gcp}
    - {kind: BackupEntry, type: gcp}
    - {kind: Bastion, type: gcp}
    - {kind: ControlPlane, type: gcp}
    - {kind: DNSRecord, type: google-clouddns}
    - {kind: Infrastructure, type: gcp}
    - {kind: Worker, type: gcp}
networking-calico:
  name: networking-calico
  chart: networking-calico
  admission: admission-calico
  resources:
    - {kind: Network, type: calico}
networking-cilium:
  name: networking-cilium
  chart: networking-cilium
  admission: admission-cilium
  resources:
    - {kind: Network, type: cilium}
os-gardenlinux:
  name: os-gardenlinux
  chart: os-gardenlinux
  resources:
    - {kind: OperatingSystemConfig, type: gardenlinux}
    - {kind: OperatingSystemConfig, type: gardenlinux-fips}
    - {kind: OperatingSystemConfig, type: memoryone-gardenlinux}
os-ubuntu:
  name: os-ubuntu
  chart: os-ubuntu
  resources:
    - {kind: OperatingSystemConfig, type: ubuntu}
shoot-cert-service:
  name: extension-shoot-cert-service
  chart: shoot-cert-service
  inject: true
  resources:
    - {kind: Extension, type: shoot-cert-service, workerlessSupported: true, clusterCompatibility: [shoot]}
    - {kind: Extension, type: controlplane-cert-service, clusterCompatibility: [garden, seed]}
shoot-dns-service:
  name: extension-shoot-dns-service
  chart: shoot-dns-service
  admission: shoot-dns-service-admission
  resources:
    - {kind: Extension, type: shoot-dns-service, workerlessSupported: true, clusterCompatibility: [shoot]}
shoot-oidc-service:
  name: shoot-oidc-service
  chart: shoot-oidc-service
  resources:
    - {kind: Extension, type: shoot-oidc-service, workerlessSupported: true}
{{- end -}}
