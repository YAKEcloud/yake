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
