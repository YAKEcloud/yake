{{- define "gardenlet.imageVectorOverwrite" -}}
images:
{{- range $i := .Values.gardenlet.imageVectorOriginal }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if contains $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "networking-calico.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "networking-calico" "imageVectorOriginal" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if contains $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}

{{- define "provider-openstack.imageVectorOverwrite" -}}
images:
{{- range $i := index .Values "provider-openstack" "imageVectorOriginal" }}
{{- range $k, $v := $.Values.registryOverwrite }}
{{- if contains $k $i.repository }}
{{- $a := replace $k $v $i.repository }}
{{- $_ := set $i "repository" $a }}
{{- end }}
{{- end }}
{{ list $i | toYaml}}
{{- end }}
{{- end }}
