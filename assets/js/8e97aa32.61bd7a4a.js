"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74047],{76114:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"next","title":"Release Notes next","description":"Yake release notes and upgrade guide","source":"@site/release-notes/next.md","sourceDirName":".","slug":"/next","permalink":"/release-notes/next","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"hide_table_of_contents":true},"sidebar":"tutorialSidebar","next":{"title":"Release Notes v1.112","permalink":"/release-notes/v1.112"}}');var i=n(74848),d=n(28453);const a={hide_table_of_contents:!0},l="Release Notes next",o={},t=[{value:"Yake release notes and upgrade guide",id:"yake-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"Helm Charts",id:"helm-charts",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"Helm Charts",id:"helm-charts-1",level:2},{value:"Docker Images",id:"docker-images-1",level:2},{value:"Helm Charts",id:"helm-charts-2",level:2},{value:"Docker Images",id:"docker-images-2",level:2}];function c(e){const r={b:"b",code:"code",details:"details",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",summary:"summary",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"release-notes-next",children:"Release Notes next"})}),"\n",(0,i.jsx)(r.h2,{id:"yake-release-notes-and-upgrade-guide",children:"Yake release notes and upgrade guide"}),"\n",(0,i.jsx)(r.h2,{id:"related-upstream-release-notes--changelogs",children:"Related upstream release notes / changelogs"}),"\n",(0,i.jsxs)(r.details,{children:["\n",(0,i.jsx)(r.summary,{children:(0,i.jsxs)(r.b,{children:["Update runtime-gvisor to ",(0,i.jsx)(r.code,{children:"0.18.0"})]})}),"\n",(0,i.jsx)(r.h1,{id:"gardenergardener-extension-runtime-gvisor",children:"[gardener/gardener-extension-runtime-gvisor]"}),"\n",(0,i.jsx)(r.h2,{id:"-others",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"[USER]"})," The gVisor binaries were updated to release ",(0,i.jsx)(r.code,{children:"20250210.0"}),". by @MrBatschner [#192]"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"[OPERATOR]"})," Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#176]"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"helm-charts",children:"Helm Charts"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["runtime-gvisor: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.18.0"})]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"docker-images",children:"Docker Images"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["gardener-extension-runtime-gvisor-installation: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.18.0"})]}),"\n",(0,i.jsxs)(r.li,{children:["gardener-extension-runtime-gvisor: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.18.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.details,{children:["\n",(0,i.jsx)(r.summary,{children:(0,i.jsxs)(r.b,{children:["Update provider-azure to ",(0,i.jsx)(r.code,{children:"1.50.1"})]})}),"\n",(0,i.jsx)(r.p,{children:"no release notes available"}),"\n",(0,i.jsx)(r.h2,{id:"helm-charts-1",children:"Helm Charts"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["admission-azure-application: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.50.1"})]}),"\n",(0,i.jsxs)(r.li,{children:["admission-azure-runtime: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.50.1"})]}),"\n",(0,i.jsxs)(r.li,{children:["provider-azure: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.50.1"})]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"docker-images-1",children:"Docker Images"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["gardener-extension-admission-azure: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.50.1"})]}),"\n",(0,i.jsxs)(r.li,{children:["gardener-extension-provider-azure: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.50.1"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.details,{children:["\n",(0,i.jsx)(r.summary,{children:(0,i.jsxs)(r.b,{children:["Update provider-alicloud to ",(0,i.jsx)(r.code,{children:"1.59.1"})]})}),"\n",(0,i.jsx)(r.p,{children:"no release notes available"}),"\n",(0,i.jsx)(r.h2,{id:"helm-charts-2",children:"Helm Charts"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["admission-alicloud-application: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.59.1"})]}),"\n",(0,i.jsxs)(r.li,{children:["admission-alicloud-runtime: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.59.1"})]}),"\n",(0,i.jsxs)(r.li,{children:["provider-alicloud: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.59.1"})]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"docker-images-2",children:"Docker Images"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["gardener-extension-admission-alicloud: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.59.1"})]}),"\n",(0,i.jsxs)(r.li,{children:["gardener-extension-provider-alicloud: ",(0,i.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.59.1"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var s=n(96540);const i={},d=s.createContext(i);function a(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);