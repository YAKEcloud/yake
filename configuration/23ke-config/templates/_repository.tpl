{{- define "replaceRegistry" -}}
{{- range $original, $overwrite := . }}
{{- range $k, $v := $overwrite }}
{{- if hasPrefix $k $original }}
{{- replace $k $v $original }}
{{- end }}
{{- end }}
{{- end }}
{{- end }}
