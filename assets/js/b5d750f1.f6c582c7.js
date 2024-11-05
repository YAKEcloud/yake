"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26767],{7464:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"v1.59","title":"Release Notes v1.59","description":"Upstream Changes","source":"@site/release-notes/v1.59.md","sourceDirName":".","slug":"/v1.59","permalink":"/release-notes/v1.59","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes v1.60","permalink":"/release-notes/v1.60"},"next":{"title":"Release Notes v1.58","permalink":"/release-notes/v1.58"}}');var s=r(74848),t=r(28453);const o={},d="Release Notes v1.59",l={},i=[{value:"Upstream Changes",id:"upstream-changes",level:2},{value:"23KE Changes and Upgrade Path",id:"23ke-changes-and-upgrade-path",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"release-notes-v159",children:"Release Notes v1.59"})}),"\n",(0,s.jsx)(n.h2,{id:"upstream-changes",children:"Upstream Changes"}),"\n",(0,s.jsx)(n.p,{children:"Please check the following sites for upstream release notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/gardener/gardener/releases",children:"Gardener releases"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/gardener-community/gardener-charts/releases",children:"Gardener-community charts releases"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"23ke-changes-and-upgrade-path",children:"23KE Changes and Upgrade Path"}),"\n",(0,s.jsx)(n.p,{children:"This release requires some manual interaction if you are upgrading from a previous 23KE release:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:'the dashboard-configuration values got a new root-node named "global" so if your config looked like this before:'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"frontendConfig:\n  ...\nbootstrap:\n  ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"you have to change it to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"global:\n  frontendConfig:\n\t...\n  bootstrap:\n\t...\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"in contrast, gardenlet lost its root-node global.gardenlet and the leafs below moved to the root, if your config looked like this before:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"global:\n  gardenlet:\n\tconfig:\n\t  ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"you have to change it to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"config:\n  ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"In order to change the config files please follow this steps:"}),"\n",(0,s.jsx)(n.p,{children:"Disable gardenlet and dashboard reconciliations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"flux suspend helmrelease internal-gardenlet\nflux suspend helmrelease dashboard\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now edit your dashboard-values and your gardenlet-values secret in your git repository and wait for reconciliation."}),"\n",(0,s.jsx)(n.p,{children:"The dashboard has switched its helm-release name so a series of annotations is necessary:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl annotate configmap -n garden gardener-dashboard-configmap meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate configmap -n garden dashboard-assets meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate secret -n garden gardener-dashboard-kubeconfig meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate secret -n garden gardener-dashboard-oidc meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate secret -n garden gardener-dashboard-sessionsecret meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate service -n garden gardener-dashboard-service meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate deployment -n garden gardener-dashboard meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate ingress -n garden gardener-dashboard-ingress meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now update your 23KE release (change the tag in the 23ke gitrepo source to v1.59.0)"}),"\n",(0,s.jsx)(n.p,{children:"after all components have reconciled resume the gardenlet helmrelease:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"flux resume helmrelease internal-gardenlet\n"})}),"\n",(0,s.jsx)(n.p,{children:"The dashboard helmrelease should have been resumed automatically as the helmrelease has been created under a new name."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var a=r(96540);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);