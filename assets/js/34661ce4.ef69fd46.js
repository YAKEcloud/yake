"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Working with Helm and Flux",l={unversionedId:"architecture-configuration/helm-flux",id:"version-1.74.x/architecture-configuration/helm-flux",title:"Working with Helm and Flux",description:"On this page, you'll find some useful information on how to work with the commandline interfaces for helm and flux in the context of your 23KE-based Gardener installation.",source:"@site/versioned_docs/version-1.74.x/architecture-configuration/helm-flux.md",sourceDirName:"architecture-configuration",slug:"/architecture-configuration/helm-flux",permalink:"/docs/architecture-configuration/helm-flux",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.74.x/architecture-configuration/helm-flux.md",tags:[],version:"1.74.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Gardener Extensions Configuration",permalink:"/docs/architecture-configuration/extensions-config"},next:{title:"Installation",permalink:"/docs/category/installation"}},s={},u=[{value:"Useful Helm Commands",id:"useful-helm-commands",level:2},{value:"Show upstream chart info",id:"show-upstream-chart-info",level:3},{value:"Show upstream helm default values",id:"show-upstream-helm-default-values",level:3},{value:"Useful Flux Commands",id:"useful-flux-commands",level:2},{value:"Check flux versions",id:"check-flux-versions",level:3},{value:"Reconcile of a resource",id:"reconcile-of-a-resource",level:3},{value:"Suspend/Resume Reconciliation of a resource",id:"suspendresume-reconciliation-of-a-resource",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-helm-and-flux"},"Working with Helm and Flux"),(0,o.kt)("p",null,"On this page, you'll find some useful information on how to work with the commandline interfaces for ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," and ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/"},"flux")," in the context of your 23KE-based Gardener installation."),(0,o.kt)("h2",{id:"useful-helm-commands"},"Useful Helm Commands"),(0,o.kt)("p",null,"First things first. As already introduced in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture-configuration/architecture"},"architecture description"),", most of the 23KE helm charts stem from a helm repository hosted at ",(0,o.kt)("inlineCode",{parentName:"p"},"gardener.community.github.io/gardener-charts"),". Consider adding this helm repository to your local repository cache by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add gardener-charts https://gardener-community.github.io/gardener-charts\nhelm repo update\n")),(0,o.kt)("p",null,"Afterwards you can use get further information about the charts using the helm cli."),(0,o.kt)("h3",{id:"show-upstream-chart-info"},"Show upstream chart info"),(0,o.kt)("p",null,"E.g., for the ",(0,o.kt)("inlineCode",{parentName:"p"},"cloudprofiles")," chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"helm show chart gardener-charts/cloudprofiles\n")),(0,o.kt)("h3",{id:"show-upstream-helm-default-values"},"Show upstream helm default values"),(0,o.kt)("p",null,"E.g., for the ",(0,o.kt)("inlineCode",{parentName:"p"},"cloudprofiles")," chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"helm show values gardener-charts/cloudprofiles\n")),(0,o.kt)("h2",{id:"useful-flux-commands"},"Useful Flux Commands"),(0,o.kt)("h3",{id:"check-flux-versions"},"Check flux versions"),(0,o.kt)("p",null,"The flux controllers running in the basecluster are maintained by 23KE itself, i.e. the flux controllers will be updated with 23KE updates. You can check the state of your cli version and the version of the cluster side components by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flux version\n")),(0,o.kt)("p",null,"If you feel like your cli version is outdated. Go ahead and download a recent version from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2/releases"},"the Github release page"),". If you feel like your in-cluster components are outdated, think about updating 23KE."),(0,o.kt)("h3",{id:"reconcile-of-a-resource"},"Reconcile of a resource"),(0,o.kt)("p",null,"If you want to get fast feedback in your GitOps workflow you can trigger the reconciliation of resources manually using the ",(0,o.kt)("inlineCode",{parentName:"p"},"flux reconcile command"),". If you want a ",(0,o.kt)("inlineCode",{parentName:"p"},"helmrelease")," to be reconciled immediately, you can achieve this by the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flux reconcile helmrelease <NAME_OF_HELMRELEASE>\n")),(0,o.kt)("h3",{id:"suspendresume-reconciliation-of-a-resource"},"Suspend/Resume Reconciliation of a resource"),(0,o.kt)("p",null,'Maybe you want to get your hands dirty and do some manual (i.e. not GitOps driven) configuration changes. For instance, this could be useful in staging environments for rapid prototyping. In this case, you need to make sure that flux does not revert your "dirty" changes and suspend the reconciliation of the affected resources. Checkout the help for ',(0,o.kt)("inlineCode",{parentName:"p"},"flux suspend")," to get further information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flux suspend -h\n")),(0,o.kt)("p",null,"E.g., a helmrelease can be suspended by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flux suspend helmrelease <NAME_OF_HELMRELEASE>\n")),(0,o.kt)("p",null,"Don't forget to resume the reconciliation, when you are done with your experiments so that flux will take over the control of your deployed resources again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flux resume helmrelease <NAME_OF_HELMRELEASE>\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Sometimes you will need to ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," resources in order to trigger an update of the deployed resources. If have the impression that the state in the cluster does not match your definitions in the git repository, try to ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," the corresponding resources, wait for reconciliation, and see that the state matches the git repository again.")))}d.isMDXComponent=!0}}]);