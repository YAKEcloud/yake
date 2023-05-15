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

{{- define "gardener.defaultDomains" -}}
{{- if (.Values.domains.gardener).defaultDomains }}
{{- range .Values.domains.gardener.defaultDomains }}
- domain: {{ .domain }}
  provider: {{ $.Values.domains.global.provider }}
  credentials:
    {{- toYaml $.Values.domains.global.credentials | nindent 4 }}
{{- end }}
{{- else }}
- domain: {{ .Values.domains.global.domain }}
  provider: {{ .Values.domains.global.provider }}
  credentials:
    {{- toYaml .Values.domains.global.credentials | nindent 4 }}
{{- end }}
{{- end -}}

{{- define "gardener.internalDomain" -}}
{{- if ((.Values.domains.gardener).internalDomain).domain }}
domain: {{ .Values.domains.gardener.internalDomain.domain }}
provider: {{ .Values.domains.global.provider }}
credentials:
  {{- toYaml .Values.domains.global.credentials | nindent 2 }}
{{- else }}
domain: internal.{{ .Values.domains.global.domain }}
provider: {{ .Values.domains.global.provider }}
credentials:
  {{- toYaml .Values.domains.global.credentials | nindent 2 }}
{{- end }}
{{- end -}}
