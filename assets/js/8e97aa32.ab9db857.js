"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{99522:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var d=n(85893),s=n(11151);const a={hide_table_of_contents:!0},i="Release Notes next",l={id:"next",title:"Release Notes next",description:"Yake release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},c={},o=[{value:"Yake release notes and upgrade guide",id:"yake-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"Docker Images",id:"docker-images-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"Docker Images",id:"docker-images-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"Docker Images",id:"docker-images-3",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"Docker Images",id:"docker-images-4",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"Docker Images",id:"docker-images-5",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-3",level:2},{value:"Docker Images",id:"docker-images-6",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-4",level:2},{value:"Docker Images",id:"docker-images-7",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-5",level:2},{value:"Docker Images",id:"docker-images-8",level:2}];function t(e){const r={b:"b",br:"br",code:"code",details:"details",h1:"h1",h2:"h2",li:"li",summary:"summary",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"release-notes-next",children:"Release Notes next"}),"\n",(0,d.jsx)(r.h2,{id:"yake-release-notes-and-upgrade-guide",children:"Yake release notes and upgrade guide"}),"\n",(0,d.jsx)(r.h2,{id:"related-upstream-release-notes--changelogs",children:"Related upstream release notes / changelogs"}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,d.jsx)(r.code,{children:"1.87.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," A regression is fixed that led to unnecessary and repetitive updates in the ",(0,d.jsx)(r.code,{children:"status.constraints[].last{Update,Transition}Time"})," fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the ",(0,d.jsx)(r.code,{children:"gardener-apiserver"})," and the ",(0,d.jsx)(r.code,{children:"gardenlet"}),"s in the seeds. by @istvanballok [#9086]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the ",(0,d.jsx)(r.code,{children:"shoots/viewerkubeconfig"})," subresource). by @petersutter [#9083]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-controller: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["apiserver: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["node-agent: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["scheduler: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,d.jsx)(r.code,{children:"1.87.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-1",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-1",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," A regression is fixed that led to unnecessary and repetitive updates in the ",(0,d.jsx)(r.code,{children:"status.constraints[].last{Update,Transition}Time"})," fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the ",(0,d.jsx)(r.code,{children:"gardener-apiserver"})," and the ",(0,d.jsx)(r.code,{children:"gardenlet"}),"s in the seeds. by @istvanballok [#9086]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the ",(0,d.jsx)(r.code,{children:"shoots/viewerkubeconfig"})," subresource). by @petersutter [#9083]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-1",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-controller: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["apiserver: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["node-agent: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["scheduler: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardenlet to ",(0,d.jsx)(r.code,{children:"1.87.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-2",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-2",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," A regression is fixed that led to unnecessary and repetitive updates in the ",(0,d.jsx)(r.code,{children:"status.constraints[].last{Update,Transition}Time"})," fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the ",(0,d.jsx)(r.code,{children:"gardener-apiserver"})," and the ",(0,d.jsx)(r.code,{children:"gardenlet"}),"s in the seeds. by @istvanballok [#9086]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the ",(0,d.jsx)(r.code,{children:"shoots/viewerkubeconfig"})," subresource). by @petersutter [#9083]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-2",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-controller: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["apiserver: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["node-agent: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["scheduler: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update external-dns-management to ",(0,d.jsx)(r.code,{children:"0.17.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenerexternal-dns-management",children:"[gardener/external-dns-management]"}),"\n",(0,d.jsx)(r.h2,{id:"-others",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Bumps golang from 1.21.5 to 1.21.6. by @MartinWeindel [#353]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," Merge ",(0,d.jsx)(r.code,{children:"dns.gardener.cloud/dnsnames"})," annotations from multiple DNSAnnotation objects. by @MartinWeindel [#352]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-3",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["dns-controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.17.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update shoot-dns-service to ",(0,d.jsx)(r.code,{children:"1.44.0"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenerexternal-dns-management-1",children:"[gardener/external-dns-management]"}),"\n",(0,d.jsx)(r.h2,{id:"-others-1",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Bumps golang from 1.21.5 to 1.21.6. by @MartinWeindel [gardener/external-dns-management#353]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," Merge ",(0,d.jsx)(r.code,{children:"dns.gardener.cloud/dnsnames"})," annotations from multiple DNSAnnotation objects. by @MartinWeindel [gardener/external-dns-management#352]"]}),"\n"]}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-extension-shoot-dns-service",children:"[gardener/gardener-extension-shoot-dns-service]"}),"\n",(0,d.jsx)(r.h2,{id:"-others-2",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Bump github.com/gardener/gardener from 1.86.0 to 1.87.0. by @dependabot[bot] [#286]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-4",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-admission-shoot-dns-service: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.44.0"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-shoot-dns-service: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.44.0"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update runtime-gvisor to ",(0,d.jsx)(r.code,{children:"0.13.0"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-extension-runtime-gvisor",children:"[gardener/gardener-extension-runtime-gvisor]"}),"\n",(0,d.jsx)(r.h2,{id:"\ufe0f-breaking-changes",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Change OCI Image Registry from GCR (",(0,d.jsx)(r.code,{children:"eu.gcr.io/gardener-project"}),") to Artifact-Registry (",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases"}),"). Users should update their references.",(0,d.jsx)(r.br,{}),"\nby @ccwienk [#109]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"-others-3",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Update runsc to version 20240115.0 by @danatsap [#113]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-5",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener-extension-runtime-gvisor-installation: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.13.0"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener-extension-runtime-gvisor: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.13.0"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,d.jsx)(r.code,{children:"1.87.2"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-3",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-3",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," The ",(0,d.jsx)(r.code,{children:"worker.gardener.cloud/kubernetes-version"})," is now correctly maintained as label on ",(0,d.jsx)(r.code,{children:"Node"}),"s (instead of an annotation) when the ",(0,d.jsx)(r.code,{children:"UseGardenerNodeAgent"})," feature gate is turned on. by @rfranzke [#9111]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-6",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.2"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,d.jsx)(r.code,{children:"1.87.2"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-4",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-4",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," The ",(0,d.jsx)(r.code,{children:"worker.gardener.cloud/kubernetes-version"})," is now correctly maintained as label on ",(0,d.jsx)(r.code,{children:"Node"}),"s (instead of an annotation) when the ",(0,d.jsx)(r.code,{children:"UseGardenerNodeAgent"})," feature gate is turned on. by @rfranzke [#9111]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-7",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.2"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardenlet to ",(0,d.jsx)(r.code,{children:"1.87.2"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-5",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-5",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[USER]"})," The ",(0,d.jsx)(r.code,{children:"worker.gardener.cloud/kubernetes-version"})," is now correctly maintained as label on ",(0,d.jsx)(r.code,{children:"Node"}),"s (instead of an annotation) when the ",(0,d.jsx)(r.code,{children:"UseGardenerNodeAgent"})," feature gate is turned on. by @rfranzke [#9111]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-8",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.2"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardener: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.2"})]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>i});var d=n(67294);const s={},a=d.createContext(s);function i(e){const r=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(a.Provider,{value:r},e.children)}}}]);