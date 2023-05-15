{{- define "replaceRegistry" -}}
{{- $found := false }}
{{- range $original, $overwrite := . }}
{{- range $k, $v := $overwrite }}
{{- if hasPrefix $k $original }}
{{- $found = true}}
{{- replace $k $v $original }}
{{- end }}
{{- end }}
{{- if not $found }}
{{- $original }}
{{- end }}
{{- end }}
{{- end }}
