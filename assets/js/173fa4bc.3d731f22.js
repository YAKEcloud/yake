"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={slug:"gardener-ext-shoot-flux",title:"A Gardener Extension for universal Shoot Configuration",authors:"jensac",tags:["gardener","gardener-extensions"]},i=void 0,s={permalink:"/blog/gardener-ext-shoot-flux",editUrl:"https://github.com/23technologies/23ke-docs/tree/main/blog/2022-06-08-gardener-ext-shoot-flux.md",source:"@site/blog/2022-06-08-gardener-ext-shoot-flux.md",title:"A Gardener Extension for universal Shoot Configuration",description:"TLDR;",date:"2022-06-08T00:00:00.000Z",formattedDate:"June 8, 2022",tags:[{label:"gardener",permalink:"/blog/tags/gardener"},{label:"gardener-extensions",permalink:"/blog/tags/gardener-extensions"}],readingTime:6.55,hasTruncateMarker:!1,authors:[{name:"Jens Schneider",title:"software engineer",url:"https://github.com/jensac",imageURL:"https://github.com/jensac.png",key:"jensac"}],frontMatter:{slug:"gardener-ext-shoot-flux",title:"A Gardener Extension for universal Shoot Configuration",authors:"jensac",tags:["gardener","gardener-extensions"]},prevItem:{title:"Getting started with Gardener extension development",permalink:"/blog/gardener-ext-dev"}},l={authorsImageUrls:[void 0]},c=[{value:"TLDR;",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Example use cases",id:"example-use-cases",level:2},{value:"Development",id:"development",level:3},{value:"CI/CD",id:"cicd",level:3},{value:"General concept",id:"general-concept",level:2},{value:"Example Usage",id:"example-usage",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tldr"},"TLDR;"),(0,r.kt)("p",null,"Recently, we developed the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/23technologies/gardener-extension-shoot-flux"},"gardener-extension-shoot-flux"),", which enables preconfiguring ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," clusters.\nIf you want to give it a try, go and checkout the repository on Github.\nIf you want to learn more, keep on reading."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Table of Contents")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tldr"},"TLDR;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example-use-cases"},"Example use cases"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#development"},"Development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cicd"},"CI/CD")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#general-concept"},"General concept")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example-usage"},"Example Usage"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/"},"Flux")," offers a set of controllers allowing for reconciling a Kubernetes cluster with a declarative state defined in e.g. a Git repository.\nThus it enables GitOps workflows for Kubernetes clusters.\nMoreover, it provides a general approach of deploying software components into Kubernetes clusters.\n",(0,r.kt)("a",{parentName:"p",href:"https://gardener.cloud/"},"Gardener")," is a multi cloud managed Kubernetes service allowing end users to create clusters with a few clicks in its dashboard.\nHowever, the user will obtain a vanilla Kubernetes cluster and has to take care for all the components to be deployed into it.\nOf course, the deployment can be performed manually by applying Kubernetes manifests to the cluster.\nOn the other hand, tools like Flux can help to keep track of the deployments and automate the overall process.\nThus, the combination of Gardener and Flux features the potential of creating new Kubernetes clusters in a pre-defined state.\nFor the end users, this results in the seamless creation of clusters with all components on their wish list installed.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/23technologies/gardener-extension-shoot-flux"},"gardener-extension-shoot-flux")," bridges the gap between Gardener and Flux and allows for reconciliation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," clusters to resources defined in a Git repository.\nBy concept, the extension operates on a per-project basis so that clusters in different projects can be reconciled to different repositories."),(0,r.kt)("p",null,"The rest of this post is organized as follows:\nFirst, we will review a few use cases for this extension.\nFurther, the general concept of the extension is outlined, and finally we provide an example on how to use the extension."),(0,r.kt)("h2",{id:"example-use-cases"},"Example use cases"),(0,r.kt)("h3",{id:"development"},"Development"),(0,r.kt)("p",null,"Imagine you are developing software which will eventually run on a Kubernetes cluster in the public cloud.\nMoreover, you and your colleagues want to be able to perform some end-to-end tests besides running your local test suite.\nFor these end-to-end test, an environment mimicking the final production environment is required.\nTherefore, you might need tools like ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"cert-manager")," or ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO"),".\nHowever, you do not want keep several testing clusters in the public cloud available for economic reasons and, in consequence, you need to create new clusters on demand.\nIn this case, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/23technologies/gardener-extension-shoot-flux"},"gardener-extension-shoot-flux")," comes handy, since it allows to configure the cluster asynchronously.\nPut simply, you can define the desired state of your cluster in a Git repository, and the new clusters will be reconciled to this state automatically.\nEventually, this will save the effort to configure the clusters each and every time manually.\nOf course, you could achieve something similar by hibernation of the development clusters.\nHowever, in that case you are less flexible, since throwing away the cluster in case you lost track of your clusters state comes at the price of reconfiguring the entire cluster."),(0,r.kt)("h3",{id:"cicd"},"CI/CD"),(0,r.kt)("p",null,"Similar to the development use case above, you might want to run your CI/CD pipeline in Kubernetes clusters coming with a few components already installed.\nAs your pipeline runs frequently, you want to create clusters on the fly or maybe pre-spawn just a few of them.\nIn order to keep your pipeline simple, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/23technologies/gardener-extension-shoot-flux"},"gardener-extension-shoot-flux")," for the configuration of your CI/CD clusters.\nThis way your pipeline can focus on the actual action and does not have to perform the cluster configuration beforehand.\nThis most probably results in cleaner and more stable CI/CD pipelines."),(0,r.kt)("h2",{id:"general-concept"},"General concept"),(0,r.kt)("p",null,"The general concept of this extension is visualized in the block diagram below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2502 Gardener operator                                       \u2502\n                 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                 \u2502 - A human being                                         \u2502\n                 \u2502                                                         \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2502                                                         \u2502            \u2502\n                 \u2502                                                         \u2502            \u2502\n                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2502\n                          \u2502                           \u25b2                                 \u2502configures\n                          \u2502deploys                    \u2502                                 \u2502SSH-key\n                          \u2502Configmap                  \u2502read SSH-key                     \u2502\n                          \u2502                           \u2502                                 \u2502\n                          \u25bc                           \u2502                                 \u2502\n                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510             \u2502\n                 \u2502 Garden cluster                                         \u2502             \u2502\n                 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2524             \u2502\n                 \u2502 Projetct 1             \u2502 Project 2               \u2502 ... \u2502             \u25bc\n                 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2524  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2502- Configmap containing  \u2502- Configmap containing   \u2502     \u2502  \u2502 Git repository      \u2502\n                 \u2502  flux configuration    \u2502  flux configuration     \u2502     \u2502  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                 \u2502                        \u2502                         \u2502     \u2502  \u2502 - Configuration for \u2502\n            \u250c\u2500\u2500\u2500\u25ba\u2502- ControllerRegistration\u2502- ControllerRegistration \u2502 ... \u2502  \u2502   shoot clusters    \u2502\n            \u2502    \u2502                        \u2502                         \u2502     \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2502    \u2502- Shoot with extension  \u2502- Shoot with extension   \u2502     \u2502             \u25b2\n            \u2502    \u2502  enabled               \u2502  enabled                \u2502     \u2502             \u2502\n            \u2502    \u2502                        \u2502                         \u2502     \u2502             \u2502\nread config \u2502    \u2502                        \u2502                         \u2502     \u2502             \u2502\nand generate\u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518             \u2502reconcile\nSSH-keys    \u2502                                                                           \u2502\n            \u2502    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510              \u2502\n            \u2502    \u2502 Seed cluster           \u2502     \u2502 Shoot cluster          \u2502              \u2502\n            \u2502    \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524     \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524              \u2502\n            \u2502    \u2502- Controller watching   \u2502     \u2502                        \u2502              \u2502\n            \u2514\u2500\u2500\u2500\u2500\u253c\u2500 extension resource    \u2502     \u2502- Flux controllers  \u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                 \u2502     \u2502                  \u2502     \u2502                        \u2502\n                 \u2502     \u2502deploys           \u2502     \u2502- GitRepository resource\u2502\n                 \u2502     \u2502                  \u2502     \u2502                        \u2502\n                 \u2502     \u25bc                  \u2502     \u2502- A main kustomization  \u2502\n                 \u2502- Managed resources     \u2502     \u2502                        \u2502\n                 \u2502  for flux controllers  \u2502     \u2502                        \u2502\n                 \u2502  and flux config       \u2502     \u2502                        \u2502\n                 \u2502                        \u2502     \u2502                        \u2502\n                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"As depicted, the Gardener operator needs to deploy a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," into the Garden cluster.\nThis ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," holds some configuration parameters for the extension controller.\nMoreover, the Gardener operator needs to configure an SSH-key for the Git repository in case of a private repository.\nThis key can be read from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"flux-source"),' in the Garden cluster which is created by the extension controller.\nOf course, the process of adding the SSH-key to the repository depends on the repository host.\nE.g. for repositories hosted on Github, the key can simply be added as "Deploy key" in the web-interface.'),(0,r.kt)("p",null,"The extension controller is running in ",(0,r.kt)("inlineCode",{parentName:"p"},"Seed")," clusters.\nBesides generating ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret"),"s containing SSH-keys, it reads the configuration from the Garden cluster and creates ",(0,r.kt)("inlineCode",{parentName:"p"},"Managedresources")," to be processed by the ",(0,r.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/gardener/concepts/resource-manager/#managedresource-controller"},"Gardener Resource Manager"),".\nThese ",(0,r.kt)("inlineCode",{parentName:"p"},"Managedresources")," entail the resources for the Flux controllers, a ",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/components/source/gitrepositories/"},"GitRepository")," resource matching the configuration, and a main ",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/components/kustomize/kustomization/"},"Kustomization")," resource.\nOnce the Gardener Resource Manager has deployed these resources to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," cluster, the Flux controllers will reconcile the cluster to the state defined in the Git repository."),(0,r.kt)("p",null,"You might wonder how the communication between ",(0,r.kt)("inlineCode",{parentName:"p"},"Seed")," clusters and Garden cluster is established.\nThis is achieved by making use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"gardenlet-kubeconfig")," which should be available, when the gardenlet is run inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Seed")," cluster.\nMost probably, this is not the most elegant solution, but it resulted in a quick first working solution."),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("p",null,"Of course, you need to install the extension before you can use it.\nYou can find ",(0,r.kt)("inlineCode",{parentName:"p"},"ControllerRegistration"),"s on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/23technologies/gardener-extension-shoot-flux/releases"},"Github release page"),".\nSo, you can simply go for"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=KUBECONFIG-FOR-GARDEN-CLUSTER\nkubectl -f https://github.com/23technologies/gardener-extension-shoot-flux/releases/download/v0.1.2/controller-registration.yaml\n")),(0,r.kt)("p",null,"in order to install the extension."),(0,r.kt)("p",null,"For an exemplary use of the extension, we prepared a public repository containing manifest for the installation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stefanprodan/podinfo"},"Podinfo"),".\nAs a Gardener operator you can apply the following ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," to your Garden cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: flux-config\n  namespace: YOUR-PROJECT-NAMESPACE\ndata:\n  fluxVersion: v0.29.5 # optional, if not defined the latest release will be used\n  repositoryUrl: https://github.com/23technologies/shootflux.git\n  repositoryBranch: main\n  repositoryType: public\n")),(0,r.kt)("p",null,"As the repository is public you can create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," now and enable the extension for this ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot"),".\nTake the snipped below as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.gardener.cloud/v1beta1\nkind: Shoot\nmetadata:\n  name: bar\n  namespace: garden-foo\nspec:\n  extensions:\n  - type: shoot-flux\n...\n")),(0,r.kt)("p",null,"Gardener will take care for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," creation process.\nAs soon as you can, you can fetch the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig.yaml")," for your new ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," from e.g. the Gardener dashboard.\nNow, you can watch this cluster by"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=KUBECONFIG-FOR-SHOOT\nk9s\n")),(0,r.kt)("p",null,"and you should see that a ",(0,r.kt)("inlineCode",{parentName:"p"},"podinfo")," deployment should come up.\nGreat! You successfully created a ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/23technologies/gardener-extension-shoot-flux"},"gardener-extension-shoot-flux"),"."))}p.isMDXComponent=!0}}]);