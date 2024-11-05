"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4139],{6832:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"v1.65","title":"Release Notes v1.65","description":"Upstream Changes","source":"@site/release-notes/v1.65.md","sourceDirName":".","slug":"/v1.65","permalink":"/release-notes/v1.65","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes v1.66","permalink":"/release-notes/v1.66"},"next":{"title":"Release Notes v1.64","permalink":"/release-notes/v1.64"}}');var t=s(74848),a=s(28453);const i={},o="Release Notes v1.65",d={},l=[{value:"Upstream Changes",id:"upstream-changes",level:2},{value:"Requirements",id:"requirements",level:2},{value:"23KE Changes and Upgrade Path",id:"23ke-changes-and-upgrade-path",level:2},{value:"Post Upgrade",id:"post-upgrade",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"release-notes-v165",children:"Release Notes v1.65"})}),"\n",(0,t.jsx)(n.h2,{id:"upstream-changes",children:"Upstream Changes"}),"\n",(0,t.jsx)(n.p,{children:"Please check the following sites for upstream release notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/gardener/gardener/releases",children:"Gardener releases"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/gardener-community/gardener-charts/releases",children:"Gardener-community charts releases"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.p,{children:["This release requires a garden cluster with at least k8s v1.21.0 (",(0,t.jsx)(n.a,{href:"https://github.com/23technologies/23ke/pull/578",children:"https://github.com/23technologies/23ke/pull/578"}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"23ke-changes-and-upgrade-path",children:"23KE Changes and Upgrade Path"}),"\n",(0,t.jsx)(n.h3,{id:"post-upgrade",children:"Post Upgrade"}),"\n",(0,t.jsxs)(n.p,{children:['23KE moved the ingress domain specification for the default "internal" seed from ',(0,t.jsx)(n.code,{children:"spec.dns.ingressDomain"})," to ",(0,t.jsx)(n.code,{children:"spec.ingress.domain"}),". With this new specification the gardenlet deploys a new managed ingress-controller for the internal-seed. You should check if the migration step was successful by checking if a working dnsrecord for the ingressdomain exists (",(0,t.jsx)(n.code,{children:"kubectl get dnsrecord"}),"). The record should point to the loadBalancer IP of the new ingress-controller (",(0,t.jsx)(n.code,{children:"kubectl get service"}),"). Furthermore the ingress for prometheus and grafana and the terminal endpoint should be managed by the new ingress-controller. This can be checked by comparing the ingress IPs with the loadBalancer IP of the new ingress-controller."]}),"\n",(0,t.jsx)(n.p,{children:"23KE performs this migration step automatically for the internal seed. For each additional (managed) seed, the API-fields have to be changed manually:"}),"\n",(0,t.jsx)(n.p,{children:"Old format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"spec:\n  dns:\n    ingressDomain: <seeds ingressDomain>\n"})}),"\n",(0,t.jsx)(n.p,{children:"New format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"spec:\n  ingress:\n    domain: <seeds ingressDomain>\n    controller:\n      kind: nginx\n  dns:\n    provider:\n      type: <dns-provider>\n      secretRef:\n        name: <dns-provider secret>\n        namespace: <dns-provider secret-namespace>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You could use the dns-secret that is used by the internal seed (name: ",(0,t.jsx)(n.code,{children:"base-dns-provider-secret"}),", namespace: ",(0,t.jsx)(n.code,{children:"garden"}),") or provide a new one. Afterwards check, that the dnsrecord is created and that the new ingresscontroller is used for prometheus, grafana and terminal ingresses. If the new one is used, the old manually deployed ingress can be removed."]}),"\n",(0,t.jsx)(n.p,{children:"For more information please refer to these Pull-Requests:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gardener/gardener/pull/3131",children:"https://github.com/gardener/gardener/pull/3131"})," - Introduction of the new API-spec"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gardener/gardener/pull/7529",children:"https://github.com/gardener/gardener/pull/7529"})," - Depreciation of the old API-spec"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);