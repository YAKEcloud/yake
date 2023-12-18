"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},h),{},{components:r})):n.createElement(m,o({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:1},o="Architecture",s={unversionedId:"architecture-configuration/architecture",id:"version-1.75.x/architecture-configuration/architecture",title:"Architecture",description:"High Level Overview",source:"@site/versioned_docs/version-1.75.x/architecture-configuration/architecture.md",sourceDirName:"architecture-configuration",slug:"/architecture-configuration/architecture",permalink:"/yake/docs/1.75.x/architecture-configuration/architecture",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.75.x/architecture-configuration/architecture.md",tags:[],version:"1.75.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture / Configuration",permalink:"/yake/docs/1.75.x/category/architecture--configuration"},next:{title:"The 23KE config secret",permalink:"/yake/docs/1.75.x/architecture-configuration/23ke-config-secret"}},c={},l=[{value:"High Level Overview",id:"high-level-overview",level:2},{value:"Detailed Architecture",id:"detailed-architecture",level:2},{value:"Main entry points",id:"main-entry-points",level:3},{value:"General Concepts",id:"general-concepts",level:3},{value:"backups",id:"backups",level:3},{value:"webterminal",id:"webterminal",level:3}],h={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("h2",{id:"high-level-overview"},"High Level Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"23KE High Level Overview",src:r(99757).Z,title:"23KE High Level Overview",width:"3174",height:"870"})),(0,a.kt)("p",null,"Let's start off with the very high level overview in the block diagram above. The most important aspect to note is that all deployments needed for the ",(0,a.kt)("a",{parentName:"p",href:"https://gardener.cloud/"},"Gardener")," installation are based on helm charts. Since the helm charts developed in the Gardener upstream are distributed over several repositories in the Gardener ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gardener/external-dns-management"},"Github organization"),", we consolidated the relevant charts in another ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gardener-community/gardener-charts"},"repository")," hosted on Github. Consequently, 23KE fetches helm charts from several helm repositories and deploys the components for the Gardener installation into the base cluster."),(0,a.kt)("h2",{id:"detailed-architecture"},"Detailed Architecture"),(0,a.kt)("p",null,"A more detailed view of the 23KE architecture is depicted in the block diagram below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"23KE architecture",src:r(87569).Z,title:"23KE architecture",width:"1652",height:"1129"})),(0,a.kt)("h3",{id:"main-entry-points"},"Main entry points"),(0,a.kt)("p",null,"Conceptually, there are two entry points for Gardener operators to interact with the configuration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"23ke-config")," secret in the base cluster"),(0,a.kt)("li",{parentName:"ol"},"The 23KE configuration git repository")),(0,a.kt)("p",null,"The reason for having a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"23ke-config")," secret lies in the assumption that an operator does not want to store credentials such as dnsprovider credentials in a git repository. Of course, this could also be handled by solutions like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/sops"},"sops"),", but we wanted to let the operator decide where to store the ",(0,a.kt)("inlineCode",{parentName:"p"},"23ke-config")," secret in the end."),(0,a.kt)("h3",{id:"general-concepts"},"General Concepts"),(0,a.kt)("p",null,"As observed from the figure, the 23KE concept divides the installation process into tree separate stages: The ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-gardener")," stage and the ",(0,a.kt)("inlineCode",{parentName:"p"},"gardener")," stage. The configuration stages transfer the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"23ke-config")," secret into separate secrets serving as values for the eventually deployed helm charts. Consequently, the default values given in the upstream values files for the helm charts are extended by the ",(0,a.kt)("inlineCode",{parentName:"p"},"*-base-values")," secrets, so that all components come with a meaningful base configuration. This base configuration is assumed to be homogeneous across many Gardener environments. For the parts which are environment specific, another set of secrets stores another set of values for the helm charts. These secrets are pulled in from the 23KE configuration git repository and managed by a GitOps workflow."),(0,a.kt)("p",null,"As we assume that the underlying base cluster does not come with any services installed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-gardener")," stage ensures that the required services are deployed to the cluster. In more detail, the following services and resources are deployed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cert-manager.io/"},"cert-manager")," for internal certificate handling"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/cert-management"},"cert-management")," for browser trusted certificate handling",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"issuer")," resource representing a certificate issuer in the base cluster"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/external-dns-management"},"external-dns-management")," for creation of DNS entries",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"dnsprovider")," resource representing a DNS provider such as azure-dns, aws-route53 etc. in the base cluster"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/"},"ingress-nginx")," as ingress controller")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"gardener")," stage, the gardener specific components are deployed to the base cluster and to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gardener/garden-setup#concept-the-virtual-cluster"},"virtual garden"),". The most important aspect to note here is that the ",(0,a.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/gardener/concepts/gardenlet/"},"gardenlet")," is deployed to the base cluster, i.e. the base cluster also serves as initial seed cluster for the resulting Gardener environment."),(0,a.kt)("h3",{id:"backups"},"backups"),(0,a.kt)("h3",{id:"webterminal"},"webterminal"))}p.isMDXComponent=!0},87569:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/23ke-architecture-412cff5ddb682e5d87b039e6167a65cf.png"},99757:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/high-level-overview.excalidraw-c7259ae820b60ab952326b1490f02e46.png"}}]);