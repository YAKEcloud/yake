"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91388],{74766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"v1.63","title":"Release Notes v1.63","description":"Upstream Changes","source":"@site/release-notes/v1.63.md","sourceDirName":".","slug":"/v1.63","permalink":"/release-notes/v1.63","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes v1.64","permalink":"/release-notes/v1.64"},"next":{"title":"Release Notes v1.62","permalink":"/release-notes/v1.62"}}');var r=t(74848),s=t(28453);const l={},i="Release Notes v1.63",o={},d=[{value:"Upstream Changes",id:"upstream-changes",level:2},{value:"23KE Changes and Upgrade Path",id:"23ke-changes-and-upgrade-path",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"release-notes-v163",children:"Release Notes v1.63"})}),"\n",(0,r.jsx)(n.h2,{id:"upstream-changes",children:"Upstream Changes"}),"\n",(0,r.jsx)(n.p,{children:"Please check the following sites for upstream release notes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/gardener/gardener/releases",children:"Gardener releases"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/gardener-community/gardener-charts/releases",children:"Gardener-community charts releases"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"23ke-changes-and-upgrade-path",children:"23KE Changes and Upgrade Path"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Before upgrade\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Due to upstream changes in the gardenlet helm chart, an adujstment to the internal gardenlet installation is required. Resources need to be annotated with a corrected value manually before the update, as follows:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"for type in PodDisruptionBudget ServiceAccount ClusterRole ClusterRoleBinding Role RoleBinding Deployment Service ConfigMap PriorityClass; do\n  kubectl -n garden annotate $type -l helm.toolkit.fluxcd.io/name=internal-gardenlet,helm.toolkit.fluxcd.io/namespace=flux-system meta.helm.sh/release-name=garden-internal-gardenlet meta.helm.sh/release-namespace=garden --overwrite\ndone\n"})}),"\nYou might need to rerun this command again later if the ",(0,r.jsx)(n.code,{children:"internal-gardenlet"})," HelmRelease is still not able to reconcile due to an error simliar to\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Helm install failed: rendered manifests contain a resource that already exists. ... invalid ownership metadata; annotation validation error: ..."\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(96540);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);