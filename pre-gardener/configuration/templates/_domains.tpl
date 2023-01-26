{{- define "gardenlet.ingressDomain" -}}
{{- if (.Values.domains.gardenlet).ingressDomain }}
{{- .Values.domains.gardenlet.ingressDomain }}
{{- else }}
{{- (print .Values.gardenlet.ingressDomain "." .Values.domains.global.domain) }}
{{- end }}
{{- end -}}
