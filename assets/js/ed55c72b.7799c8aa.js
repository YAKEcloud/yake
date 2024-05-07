"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41940],{78412:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=o(85893),s=o(11151);const t={sidebar_position:4},i="Working with Helm and Flux",a={id:"architecture-configuration/helm-flux",title:"Working with Helm and Flux",description:"On this page, you'll find some useful information on how to work with the commandline interfaces for helm and flux in the context of your YAKE-based Gardener installation.",source:"@site/versioned_docs/version-1.93.x/architecture-configuration/helm-flux.md",sourceDirName:"architecture-configuration",slug:"/architecture-configuration/helm-flux",permalink:"/docs/1.93.x/architecture-configuration/helm-flux",draft:!1,unlisted:!1,editUrl:"https://github.com/yakecloud/yake/tree/main/docs/versioned_docs/version-1.93.x/architecture-configuration/helm-flux.md",tags:[],version:"1.93.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Gardener Extensions Configuration",permalink:"/docs/1.93.x/architecture-configuration/extensions-config"},next:{title:"Installation",permalink:"/docs/1.93.x/category/installation"}},l={},c=[{value:"Useful Helm Commands",id:"useful-helm-commands",level:2},{value:"Show upstream chart info",id:"show-upstream-chart-info",level:3},{value:"Show upstream helm default values",id:"show-upstream-helm-default-values",level:3},{value:"Useful Flux Commands",id:"useful-flux-commands",level:2},{value:"Check flux versions",id:"check-flux-versions",level:3},{value:"Reconcile of a resource",id:"reconcile-of-a-resource",level:3},{value:"Suspend/Resume Reconciliation of a resource",id:"suspendresume-reconciliation-of-a-resource",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"working-with-helm-and-flux",children:"Working with Helm and Flux"}),"\n",(0,r.jsxs)(n.p,{children:["On this page, you'll find some useful information on how to work with the commandline interfaces for ",(0,r.jsx)(n.a,{href:"https://helm.sh/",children:"helm"})," and ",(0,r.jsx)(n.a,{href:"https://fluxcd.io/",children:"flux"})," in the context of your YAKE-based Gardener installation."]}),"\n",(0,r.jsx)(n.h2,{id:"useful-helm-commands",children:"Useful Helm Commands"}),"\n",(0,r.jsxs)(n.p,{children:["First things first. As already introduced in the ",(0,r.jsx)(n.a,{href:"/docs/1.93.x/architecture-configuration/architecture",children:"architecture description"}),", most of the YAKE helm charts stem from a helm repository hosted at ",(0,r.jsx)(n.code,{children:"gardener.community.github.io/gardener-charts"}),". Consider adding this helm repository to your local repository cache by"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"helm repo add gardener-charts https://gardener-community.github.io/gardener-charts\nhelm repo update\n"})}),"\n",(0,r.jsx)(n.p,{children:"Afterwards you can use get further information about the charts using the helm cli."}),"\n",(0,r.jsx)(n.h3,{id:"show-upstream-chart-info",children:"Show upstream chart info"}),"\n",(0,r.jsxs)(n.p,{children:["E.g., for the ",(0,r.jsx)(n.code,{children:"cloudprofiles"})," chart:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"helm show chart gardener-charts/cloudprofiles\n"})}),"\n",(0,r.jsx)(n.h3,{id:"show-upstream-helm-default-values",children:"Show upstream helm default values"}),"\n",(0,r.jsxs)(n.p,{children:["E.g., for the ",(0,r.jsx)(n.code,{children:"cloudprofiles"})," chart:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"helm show values gardener-charts/cloudprofiles\n"})}),"\n",(0,r.jsx)(n.h2,{id:"useful-flux-commands",children:"Useful Flux Commands"}),"\n",(0,r.jsx)(n.h3,{id:"check-flux-versions",children:"Check flux versions"}),"\n",(0,r.jsx)(n.p,{children:"The flux controllers running in the basecluster are maintained by YAKE itself, i.e. the flux controllers will be updated with YAKE updates. You can check the state of your cli version and the version of the cluster side components by"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"flux version\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you feel like your cli version is outdated. Go ahead and download a recent version from ",(0,r.jsx)(n.a,{href:"https://github.com/fluxcd/flux2/releases",children:"the Github release page"}),". If you feel like your in-cluster components are outdated, think about updating YAKE."]}),"\n",(0,r.jsx)(n.h3,{id:"reconcile-of-a-resource",children:"Reconcile of a resource"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to get fast feedback in your GitOps workflow you can trigger the reconciliation of resources manually using the ",(0,r.jsx)(n.code,{children:"flux reconcile command"}),". If you want a ",(0,r.jsx)(n.code,{children:"helmrelease"})," to be reconciled immediately, you can achieve this by the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"flux reconcile helmrelease <NAME_OF_HELMRELEASE>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"suspendresume-reconciliation-of-a-resource",children:"Suspend/Resume Reconciliation of a resource"}),"\n",(0,r.jsxs)(n.p,{children:['Maybe you want to get your hands dirty and do some manual (i.e. not GitOps driven) configuration changes. For instance, this could be useful in staging environments for rapid prototyping. In this case, you need to make sure that flux does not revert your "dirty" changes and suspend the reconciliation of the affected resources. Checkout the help for ',(0,r.jsx)(n.code,{children:"flux suspend"})," to get further information"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"flux suspend -h\n"})}),"\n",(0,r.jsx)(n.p,{children:"E.g., a helmrelease can be suspended by"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"flux suspend helmrelease <NAME_OF_HELMRELEASE>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Don't forget to resume the reconciliation, when you are done with your experiments so that flux will take over the control of your deployed resources again:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"flux resume helmrelease <NAME_OF_HELMRELEASE>\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Sometimes you will need to ",(0,r.jsx)(n.code,{children:"suspend"})," and ",(0,r.jsx)(n.code,{children:"resume"})," resources in order to trigger an update of the deployed resources. If have the impression that the state in the cluster does not match your definitions in the git repository, try to ",(0,r.jsx)(n.code,{children:"suspend"})," and ",(0,r.jsx)(n.code,{children:"resume"})," the corresponding resources, wait for reconciliation, and see that the state matches the git repository again."]})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var r=o(67294);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);