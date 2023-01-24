{{- define "gardenlet.ingressDomain" -}}
{{- if (.Values.domains.gardenlet).ingressDomain }}
{{- .Values.domains.gardenlet.ingressDomain }}
{{- else }}
{{- (print .Values.gardenlet.ingressDomain "." .Values.domains.global.domain) }}
{{- end }}
{{- end -}}

{{- define "dashboard.domain" -}}
{{- if (.Values.domains.dashboard).domain }}
{{- .Values.domains.dashboard.domain }}
{{- else }}
{{- (print "dashboard." .Values.domains.global.domain) }}
{{- end }}
{{- end -}}


{{- define "identity.domain" -}}
{{- if (.Values.domains.identity).domain }}
{{- .Values.domains.identity.domain }}
{{- else }}
{{- (print "identity." .Values.domains.global.domain) }}
{{- end }}
{{- end -}}


{{- define "api.domain" -}}
{{- if (.Values.domains.api).domain }}
{{- .Values.domains.api.domain }}
{{- else }}
{{- (print "api." .Values.domains.global.domain) }}
{{- end }}
{{- end -}}
