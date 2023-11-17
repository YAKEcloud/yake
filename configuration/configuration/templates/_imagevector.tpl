{{- define "gardenlet.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "gardenlet" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "etcd-druid.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "etcd-druid" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml }}
{{- end }}
{{- end }}

{{- define "networking-calico.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "networking-calico" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "provider-openstack.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "provider-openstack" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "provider-hcloud.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "provider-hcloud" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "provider-azure.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "provider-azure" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "shoot-cert-service.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "shoot-cert-service" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "shoot-dns-service.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "shoot-dns-service" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "networking-cilium.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "networking-cilium" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "provider-alicloud.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "provider-alicloud" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}


{{- define "provider-aws.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "provider-aws" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "provider-gcp.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "provider-gcp" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "runtime-gvisor.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "runtime-gvisor" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "shoot-oidc-service.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "shoot-oidc-service" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "shoot-networking-filter.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "shoot-networking-filter" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "shoot-networking-problemdetector.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "shoot-networking-problemdetector" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "shoot-rsyslog-relp.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "shoot-rsyslog-relp" "imageVectorOriginal" "images" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if hasPrefix $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}
