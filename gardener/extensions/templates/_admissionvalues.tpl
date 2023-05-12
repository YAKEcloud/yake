{{- define "admission.values" -}}
{{- $defaultValues := dict "image" (dict "tag" (printf "v%s" .version)) "virtualGarden" (dict "enabled" true) }}
{{- if .admission.values }}
{{- $mergedValues := merge .admission.values $defaultValues }}
{{ $mergedValues | toYaml }}
{{- else }}
{{ $defaultValues | toYaml }}
{{- end }}
{{- end }}
