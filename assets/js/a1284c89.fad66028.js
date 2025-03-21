"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88249],{90676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"architecture-configuration/architecture","title":"Architecture","description":"High Level Overview","source":"@site/versioned_docs/version-1.115.x/architecture-configuration/architecture.md","sourceDirName":"architecture-configuration","slug":"/architecture-configuration/architecture","permalink":"/docs/architecture-configuration/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/yakecloud/yake/tree/main/docs/versioned_docs/version-1.115.x/architecture-configuration/architecture.md","tags":[],"version":"1.115.x","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Architecture / Configuration","permalink":"/docs/category/architecture--configuration"},"next":{"title":"The YAKE config secret","permalink":"/docs/architecture-configuration/yake-config-secret"}}');var i=r(74848),s=r(28453);const a={sidebar_position:1},c="Architecture",o={},h=[{value:"High Level Overview",id:"high-level-overview",level:2},{value:"Detailed Architecture",id:"detailed-architecture",level:2},{value:"Main entry points",id:"main-entry-points",level:3},{value:"General Concepts",id:"general-concepts",level:3},{value:"backups",id:"backups",level:3},{value:"webterminal",id:"webterminal",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,i.jsx)(t.h2,{id:"high-level-overview",children:"High Level Overview"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"YAKE High Level Overview",src:r(94076).A+"",title:"YAKE High Level Overview",width:"1058",height:"290"})}),"\n",(0,i.jsxs)(t.p,{children:["Let's start off with the very high level overview in the block diagram above. The most important aspect to note is that all deployments needed for the ",(0,i.jsx)(t.a,{href:"https://gardener.cloud/",children:"Gardener"})," installation are based on helm charts. Since the helm charts developed in the Gardener upstream are distributed over several repositories in the Gardener ",(0,i.jsx)(t.a,{href:"https://github.com/gardener/external-dns-management",children:"Github organization"}),", we consolidated the relevant charts in another ",(0,i.jsx)(t.a,{href:"https://github.com/gardener-community/gardener-charts",children:"repository"})," hosted on Github. Consequently, YAKE fetches helm charts from several helm repositories and deploys the components for the Gardener installation into the base cluster."]}),"\n",(0,i.jsx)(t.h2,{id:"detailed-architecture",children:"Detailed Architecture"}),"\n",(0,i.jsx)(t.p,{children:"A more detailed view of the YAKE architecture is depicted in the block diagram below."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"YAKE architecture",src:r(66009).A+"",title:"YAKE architecture",width:"1652",height:"1129"})}),"\n",(0,i.jsx)(t.h3,{id:"main-entry-points",children:"Main entry points"}),"\n",(0,i.jsx)(t.p,{children:"Conceptually, there are two entry points for Gardener operators to interact with the configuration:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"yake-config"})," secret in the base cluster"]}),"\n",(0,i.jsx)(t.li,{children:"The YAKE configuration git repository"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The reason for having a dedicated ",(0,i.jsx)(t.code,{children:"yake-config"})," secret lies in the assumption that an operator does not want to store credentials such as dnsprovider credentials in a git repository. Of course, this could also be handled by solutions like ",(0,i.jsx)(t.a,{href:"https://github.com/mozilla/sops",children:"sops"}),", but we wanted to let the operator decide where to store the ",(0,i.jsx)(t.code,{children:"yake-config"})," secret in the end."]}),"\n",(0,i.jsx)(t.h3,{id:"general-concepts",children:"General Concepts"}),"\n",(0,i.jsxs)(t.p,{children:["As observed from the figure, the YAKE concept divides the installation process into tree separate stages: The ",(0,i.jsx)(t.code,{children:"configuration"}),", ",(0,i.jsx)(t.code,{children:"pre-gardener"})," stage and the ",(0,i.jsx)(t.code,{children:"gardener"})," stage. The configuration stages transfer the content of the ",(0,i.jsx)(t.code,{children:"yake-config"})," secret into separate secrets serving as values for the eventually deployed helm charts. Consequently, the default values given in the upstream values files for the helm charts are extended by the ",(0,i.jsx)(t.code,{children:"*-base-values"})," secrets, so that all components come with a meaningful base configuration. This base configuration is assumed to be homogeneous across many Gardener environments. For the parts which are environment specific, another set of secrets stores another set of values for the helm charts. These secrets are pulled in from the YAKE configuration git repository and managed by a GitOps workflow."]}),"\n",(0,i.jsxs)(t.p,{children:["As we assume that the underlying base cluster does not come with any services installed, the ",(0,i.jsx)(t.code,{children:"pre-gardener"})," stage ensures that the required services are deployed to the cluster. In more detail, the following services and resources are deployed:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://cert-manager.io/",children:"cert-manager"})," for internal certificate handling"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/gardener/cert-management",children:"cert-management"})," for browser trusted certificate handling\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["An ",(0,i.jsx)(t.code,{children:"issuer"})," resource representing a certificate issuer in the base cluster"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/gardener/external-dns-management",children:"external-dns-management"})," for creation of DNS entries\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.code,{children:"dnsprovider"})," resource representing a DNS provider such as azure-dns, aws-route53 etc. in the base cluster"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://kubernetes.github.io/ingress-nginx/",children:"ingress-nginx"})," as ingress controller"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"gardener"})," stage, the gardener specific components are deployed to the base cluster and to the ",(0,i.jsx)(t.a,{href:"https://github.com/gardener/garden-setup#concept-the-virtual-cluster",children:"virtual garden"}),". The most important aspect to note here is that the ",(0,i.jsx)(t.a,{href:"https://gardener.cloud/docs/gardener/concepts/gardenlet/",children:"gardenlet"})," is deployed to the base cluster, i.e. the base cluster also serves as initial seed cluster for the resulting Gardener environment."]}),"\n",(0,i.jsx)(t.h3,{id:"backups",children:"backups"}),"\n",(0,i.jsx)(t.h3,{id:"webterminal",children:"webterminal"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},94076:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/high-level-overview.excalidraw-703f5e1847553142a726d02189f59b82.png"},66009:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/yake-architecture-c56565378b96bee5516b496de78a79db.png"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);