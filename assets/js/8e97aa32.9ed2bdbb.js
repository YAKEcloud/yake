"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74047],{28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var s=n(96540);const d={},i=s.createContext(d);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(i.Provider,{value:r},e.children)}},76114:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"next","title":"Release Notes next","description":"Yake release notes and upgrade guide","source":"@site/release-notes/next.md","sourceDirName":".","slug":"/next","permalink":"/release-notes/next","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"hide_table_of_contents":true},"sidebar":"tutorialSidebar","next":{"title":"Release Notes v1.116","permalink":"/release-notes/v1.116"}}');var d=n(74848),i=n(28453);const o={hide_table_of_contents:!0},l="Release Notes next",c={},a=[{value:"Yake release notes and upgrade guide",id:"yake-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"Helm Charts",id:"helm-charts",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"Helm Charts",id:"helm-charts-1",level:2},{value:"Docker Images",id:"docker-images-1",level:2},{value:"Helm Charts",id:"helm-charts-2",level:2},{value:"Docker Images",id:"docker-images-2",level:2},{value:"Helm Charts",id:"helm-charts-3",level:2},{value:"Docker Images",id:"docker-images-3",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-3",level:2},{value:"Helm Charts",id:"helm-charts-4",level:2},{value:"Docker Images",id:"docker-images-4",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-4",level:2},{value:"Helm Charts",id:"helm-charts-5",level:2},{value:"Docker Images",id:"docker-images-5",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-5",level:2},{value:"Helm Charts",id:"helm-charts-6",level:2},{value:"Docker Images",id:"docker-images-6",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-6",level:2},{value:"Helm Charts",id:"helm-charts-7",level:2},{value:"Docker Images",id:"docker-images-7",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-7",level:2},{value:"Helm Charts",id:"helm-charts-8",level:2},{value:"Docker Images",id:"docker-images-8",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-8",level:2},{value:"Helm Charts",id:"helm-charts-9",level:2},{value:"Docker Images",id:"docker-images-9",level:2},{value:"\ud83c\udfc3 Others",id:"-others-4",level:2},{value:"Helm Charts",id:"helm-charts-10",level:2},{value:"Docker Images",id:"docker-images-10",level:2}];function t(e){const r={a:"a",b:"b",br:"br",code:"code",details:"details",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",summary:"summary",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.header,{children:(0,d.jsx)(r.h1,{id:"release-notes-next",children:"Release Notes next"})}),"\n",(0,d.jsx)(r.h2,{id:"yake-release-notes-and-upgrade-guide",children:"Yake release notes and upgrade guide"}),"\n",(0,d.jsx)(r.h2,{id:"related-upstream-release-notes--changelogs",children:"Related upstream release notes / changelogs"}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update shoot-rsyslog-relp to ",(0,d.jsx)(r.code,{children:"0.8.0"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-extension-shoot-rsyslog-relp",children:"[gardener/gardener-extension-shoot-rsyslog-relp]"}),"\n",(0,d.jsx)(r.h2,{id:"\ufe0f-breaking-changes",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," The Helm charts for the ",(0,d.jsx)(r.code,{children:"application"})," and ",(0,d.jsx)(r.code,{children:"runtime"})," parts of the gardener-extension-shoot-rsyslog-relp-admission admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the ",(0,d.jsx)(r.code,{children:"runtime"})," chart on the Garden runtime cluster, and the ",(0,d.jsx)(r.code,{children:"application"})," chart on the virtual garden. Additionally, the intermediate ",(0,d.jsx)(r.code,{children:"global"})," level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#228]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"-noteworthy",children:"\ud83d\udcf0 Noteworthy"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," A new field, ",(0,d.jsx)(r.code,{children:"messageContent"}),", has been added to the ",(0,d.jsx)(r.code,{children:"loggingRules"})," section of the ",(0,d.jsx)(r.code,{children:"rsyslog-relp.extensions.gardener.cloud/v1alpha1.RsyslogRelpConfig"})," API. This enhancement allows users to filter log messages sent to the target server based on their content. The ",(0,d.jsx)(r.code,{children:"messageContent"})," field includes two subfields:\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"messageContent.regex"}),": This subfield specifies a regular expression to determine which log messages should be sent to the target server."]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"messageContent.exclude"}),": This subfield specifies a regular expression to exclude log messages from being sent to the target server.",(0,d.jsx)(r.br,{}),"\nThese additions provide more granular control over log message filtering, enhancing the flexibility and efficiency of log management. by @RadaBDimitrova [#243]"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Memory resource limits have been removed from ",(0,d.jsx)(r.code,{children:"charts/gardener-extension-shoot-rsyslog-relp-admission/values.yaml"})," and ",(0,d.jsx)(r.code,{children:"charts/gardener-extension-shoot-rsyslog-relp/values.yaml"}),", and therefore from the corresponding deployments. by @plkokanov [#211]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[DEVELOPER]"})," Fixed an issue that caused skaffold to fail to tag the ",(0,d.jsx)(r.code,{children:"gardener-extension-shoot-rsyslog-relp"})," image during the execution of the ",(0,d.jsx)(r.code,{children:"make remote-extension-up"})," command. by @plkokanov [#236]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," The script which configures the audit rules on the system now ensures that the ",(0,d.jsx)(r.code,{children:"/var/lib/node-exporter/textfile-collector"})," directory exists before attempting to write the result of the ",(0,d.jsx)(r.code,{children:"augenrules --load"})," command to the ",(0,d.jsx)(r.code,{children:"/var/lib/node-exporter/textfile-collector/rsyslog_auditd.prom"})," file. by @plkokanov [#256]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," An issue causing the ControllerDeployment in provider-local NOT to update the locally built image if the image is already present in the skaffold's cache is now fixed. ",(0,d.jsx)(r.code,{children:"make extension-up"})," is now guaranteed to always use the image version that corresponds to the local git revision of the repository. by @RadaBDimitrova [#242]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"-others",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#226]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," The parallel execution of e2e tests is increased from 2 to 3 to speed up the e2e test execution times. by @RadaBDimitrova [#248]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Prepare for deployment of admission controller by gardener-operator by @MartinWeindel [#228]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," The ",(0,d.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution",children:(0,d.jsx)(r.code,{children:"ServiceTrafficDistribution"})})," feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#224]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," ",(0,d.jsx)(r.code,{children:"extension-shoot-rsyslog-relp"})," no longer supports Shoots with \u041aubernetes version <= 1.26. by @RadaBDimitrova [#190]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["shoot-rsyslog-relp-admission-application: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.8.0"})]}),"\n",(0,d.jsxs)(r.li,{children:["shoot-rsyslog-relp-admission-runtime: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.8.0"})]}),"\n",(0,d.jsxs)(r.li,{children:["shoot-rsyslog-relp: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.8.0"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-shoot-rsyslog-relp-admission: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.8.0"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-shoot-rsyslog-relp: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.8.0"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update provider-alicloud to ",(0,d.jsx)(r.code,{children:"1.60.0"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-extension-provider-alicloud",children:"[gardener/gardener-extension-provider-alicloud]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-1",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Fixed an issue that caused deployment issues with the ",(0,d.jsx)(r.code,{children:"gardener.cloud-fast"})," storage class when the extension was deployed by ",(0,d.jsx)(r.code,{children:"gardener-operator"})," in the garden runtime cluster. The deployment of this ",(0,d.jsx)(r.code,{children:"StorageClass"})," object is now only done for Alicloud seeds. by @timuthy [#767]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"-others-1",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," The ",(0,d.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution",children:(0,d.jsx)(r.code,{children:"ServiceTrafficDistribution"})})," feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#760]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Update gardener/gardener dependency to v1.113.0. by @kevin-lacoo [#772]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#765]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," ",(0,d.jsx)(r.code,{children:"RBAC"})," resources now explicitly state ",(0,d.jsx)(r.code,{children:"resources"})," and ",(0,d.jsx)(r.code,{children:"verbs"}),", replaced use of wildcards ",(0,d.jsx)(r.code,{children:"*"}),". by @georgibaltiev [#768]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," ",(0,d.jsx)(r.code,{children:"provider-alicloud"})," no longer supports Shoots with \u041aubernetes version <= 1.26. by @RadaBDimitrova [#742]"]}),"\n"]}),"\n",(0,d.jsx)(r.h1,{id:"gardenermachine-controller-manager",children:"[gardener/machine-controller-manager]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-2",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," A bug was fixed where MCM panics when trying to add an annotation to a nil map by @aaronfern [gardener/machine-controller-manager#966]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," CA tainted node is removed as soon as possible by MachineSet controller  by @aaronfern [gardener/machine-controller-manager#976]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"-others-2",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Introduced API changes to support InPlaceUpdate by @acumino [gardener/machine-controller-manager#962]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Introduced ",(0,d.jsx)(r.code,{children:"MachineConfiguration"})," options for InPlaceUpdates by @acumino [gardener/machine-controller-manager#970]"]}),"\n"]}),"\n",(0,d.jsx)(r.h1,{id:"gardenermachine-controller-manager-provider-alicloud",children:"[gardener/machine-controller-manager-provider-alicloud]"}),"\n",(0,d.jsx)(r.h2,{id:"-others-3",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," Fixed a bug where machines could not be deleted unless ",(0,d.jsx)(r.code,{children:".spec.providerID"})," was set by @aaronfern [gardener/machine-controller-manager-provider-alicloud#95]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-1",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-alicloud-application: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.60.0"})]}),"\n",(0,d.jsxs)(r.li,{children:["admission-alicloud-runtime: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.60.0"})]}),"\n",(0,d.jsxs)(r.li,{children:["provider-alicloud: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.60.0"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-1",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-admission-alicloud: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.60.0"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-provider-alicloud: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.60.0"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update networking-calico to ",(0,d.jsx)(r.code,{children:"1.47.1"})]})}),"\n",(0,d.jsx)(r.p,{children:"no release notes available"}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-2",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-calico-application: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.47.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["admission-calico-runtime: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.47.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["networking-calico: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.47.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-2",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-admission-calico: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.47.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-networking-calico: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.47.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update networking-cilium to ",(0,d.jsx)(r.code,{children:"1.40.2"})]})}),"\n",(0,d.jsx)(r.p,{children:"no release notes available"}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-3",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-cilium-application: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.40.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["admission-cilium-runtime: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.40.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["networking-cilium: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.40.2"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-3",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-admission-cilium: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.40.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-networking-cilium: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.40.2"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update shoot-dns-service to ",(0,d.jsx)(r.code,{children:"1.62.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-extension-shoot-dns-service",children:"[gardener/gardener-extension-shoot-dns-service]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-3",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Fix filterByKindReconciler for long names (external-dns-management#440) by ",(0,d.jsx)(r.code,{children:"Gardener CI Robot 2 <52166830+gardener-robot-ci-2@users.noreply.github.com>"})," [$2210f81ec8c55f58415aa55645bb1fdea71b4c36]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-4",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-shoot-dns-service-application: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.62.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["admission-shoot-dns-service-runtime: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.62.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["shoot-dns-service: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.62.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-4",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-admission-shoot-dns-service: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.62.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-shoot-dns-service: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.62.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update shoot-rsyslog-relp to ",(0,d.jsx)(r.code,{children:"0.8.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-extension-shoot-rsyslog-relp-1",children:"[gardener/gardener-extension-shoot-rsyslog-relp]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-4",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Fixed an issue that caused ",(0,d.jsx)(r.code,{children:"augenrules --load"})," to be executed every time the ",(0,d.jsx)(r.code,{children:"configure-rsyslog.sh"})," script runs instead of only when audit rules have changed. by @plkokanov [#263]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-5",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["shoot-rsyslog-relp-admission-application: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.8.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["shoot-rsyslog-relp-admission-runtime: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.8.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["shoot-rsyslog-relp: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.8.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-5",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-shoot-rsyslog-relp-admission: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.8.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-shoot-rsyslog-relp: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.8.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,d.jsx)(r.code,{children:"1.116.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-5",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," An issue causing the ",(0,d.jsx)(r.code,{children:"cloudprovider"})," Secret to contain both static credentials and workload identity config, which are mutually exclusive, when migrating to workload identity is now fixed. by @dimityrmirchev [#11847]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[DEVELOPER]"})," Fix malformed file path error on ",(0,d.jsx)(r.code,{children:"go get github.com/gardener/gardener@v1.116.0"})," by @MartinWeindel [#11820]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-6",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["controlplane: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-6",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-controller: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["apiserver: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["node-agent: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["scheduler: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,d.jsx)(r.code,{children:"1.116.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-1",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-6",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," An issue causing the ",(0,d.jsx)(r.code,{children:"cloudprovider"})," Secret to contain both static credentials and workload identity config, which are mutually exclusive, when migrating to workload identity is now fixed. by @dimityrmirchev [#11847]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[DEVELOPER]"})," Fix malformed file path error on ",(0,d.jsx)(r.code,{children:"go get github.com/gardener/gardener@v1.116.0"})," by @MartinWeindel [#11820]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-7",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["controlplane: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-7",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-controller: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["apiserver: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["node-agent: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["scheduler: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardenlet to ",(0,d.jsx)(r.code,{children:"1.116.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-2",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-7",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," An issue causing the ",(0,d.jsx)(r.code,{children:"cloudprovider"})," Secret to contain both static credentials and workload identity config, which are mutually exclusive, when migrating to workload identity is now fixed. by @dimityrmirchev [#11847]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[DEVELOPER]"})," Fix malformed file path error on ",(0,d.jsx)(r.code,{children:"go get github.com/gardener/gardener@v1.116.0"})," by @MartinWeindel [#11820]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-8",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["controlplane: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-8",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-controller: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["apiserver: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["node-agent: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["scheduler: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update garden-kube-apiserver to ",(0,d.jsx)(r.code,{children:"5.5.0"})]})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"Full Changelog"}),": ",(0,d.jsx)(r.a,{href:"https://github.com/gardener-community/garden-kube-apiserver/compare/v5.4.0...v5.5.0",children:"https://github.com/gardener-community/garden-kube-apiserver/compare/v5.4.0...v5.5.0"})]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update provider-azure to ",(0,d.jsx)(r.code,{children:"1.52.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-extension-provider-azure",children:"[gardener/gardener-extension-provider-azure]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-8",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," An issue causing ",(0,d.jsx)(r.code,{children:"csi-driver-controller"})," to not have mounted a workload identity token when the feature is enabled is now fixed. by @ialidzhikov [#1144]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-9",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-azure-application: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.52.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["admission-azure-runtime: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.52.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["provider-azure: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.52.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-9",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-admission-azure: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.52.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-provider-azure: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.52.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update networking-cilium to ",(0,d.jsx)(r.code,{children:"1.40.3"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-extension-networking-cilium",children:"[gardener/gardener-extension-networking-cilium]"}),"\n",(0,d.jsx)(r.h2,{id:"-others-4",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Fix an issue where creating IPv6-only shoots fails. by @axel7born [#550]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-10",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-cilium-application: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.40.3"})]}),"\n",(0,d.jsxs)(r.li,{children:["admission-cilium-runtime: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.40.3"})]}),"\n",(0,d.jsxs)(r.li,{children:["networking-cilium: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.40.3"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-10",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-admission-cilium: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.40.3"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-networking-cilium: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.40.3"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}}}]);