"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59987],{12478:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(85893),r=o(11151);const s={slug:"gardener-ext-shoot-flux",title:"A Gardener Extension for universal Shoot Configuration",authors:"jensac",tags:["gardener","gardener-extensions"]},i=void 0,a={permalink:"/blog/gardener-ext-shoot-flux",editUrl:"https://github.com/yakecloud/yake/tree/main/docs/blog/2022-06-08-gardener-ext-shoot-flux.md",source:"@site/blog/2022-06-08-gardener-ext-shoot-flux.md",title:"A Gardener Extension for universal Shoot Configuration",description:"TLDR;",date:"2022-06-08T00:00:00.000Z",tags:[{inline:!0,label:"gardener",permalink:"/blog/tags/gardener"},{inline:!0,label:"gardener-extensions",permalink:"/blog/tags/gardener-extensions"}],readingTime:6.55,hasTruncateMarker:!1,authors:[{name:"Jens Schneider",title:"software engineer",url:"https://github.com/jensac",imageURL:"https://github.com/jensac.png",key:"jensac",page:null}],frontMatter:{slug:"gardener-ext-shoot-flux",title:"A Gardener Extension for universal Shoot Configuration",authors:"jensac",tags:["gardener","gardener-extensions"]},unlisted:!1,prevItem:{title:"Getting started with Gardener extension development",permalink:"/blog/gardener-ext-dev"}},l={authorsImageUrls:[void 0]},c=[{value:"TLDR;",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Example use cases",id:"example-use-cases",level:2},{value:"Development",id:"development",level:3},{value:"CI/CD",id:"cicd",level:3},{value:"General concept",id:"general-concept",level:2},{value:"Example Usage",id:"example-usage",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"tldr",children:"TLDR;"}),"\n",(0,t.jsxs)(n.p,{children:["Recently, we developed the ",(0,t.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-shoot-flux",children:"gardener-extension-shoot-flux"}),", which enables preconfiguring ",(0,t.jsx)(n.code,{children:"Shoot"})," clusters.\nIf you want to give it a try, go and checkout the repository on Github.\nIf you want to learn more, keep on reading."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Table of Contents"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#tldr",children:"TLDR;"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#example-use-cases",children:"Example use cases"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#development",children:"Development"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#cicd",children:"CI/CD"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#general-concept",children:"General concept"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#example-usage",children:"Example Usage"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://fluxcd.io/",children:"Flux"})," offers a set of controllers allowing for reconciling a Kubernetes cluster with a declarative state defined in e.g. a Git repository.\nThus it enables GitOps workflows for Kubernetes clusters.\nMoreover, it provides a general approach of deploying software components into Kubernetes clusters.\n",(0,t.jsx)(n.a,{href:"https://gardener.cloud/",children:"Gardener"})," is a multi cloud managed Kubernetes service allowing end users to create clusters with a few clicks in its dashboard.\nHowever, the user will obtain a vanilla Kubernetes cluster and has to take care for all the components to be deployed into it.\nOf course, the deployment can be performed manually by applying Kubernetes manifests to the cluster.\nOn the other hand, tools like Flux can help to keep track of the deployments and automate the overall process.\nThus, the combination of Gardener and Flux features the potential of creating new Kubernetes clusters in a pre-defined state.\nFor the end users, this results in the seamless creation of clusters with all components on their wish list installed.\nThe ",(0,t.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-shoot-flux",children:"gardener-extension-shoot-flux"})," bridges the gap between Gardener and Flux and allows for reconciliation of ",(0,t.jsx)(n.code,{children:"Shoot"})," clusters to resources defined in a Git repository.\nBy concept, the extension operates on a per-project basis so that clusters in different projects can be reconciled to different repositories."]}),"\n",(0,t.jsx)(n.p,{children:"The rest of this post is organized as follows:\nFirst, we will review a few use cases for this extension.\nFurther, the general concept of the extension is outlined, and finally we provide an example on how to use the extension."}),"\n",(0,t.jsx)(n.h2,{id:"example-use-cases",children:"Example use cases"}),"\n",(0,t.jsx)(n.h3,{id:"development",children:"Development"}),"\n",(0,t.jsxs)(n.p,{children:["Imagine you are developing software which will eventually run on a Kubernetes cluster in the public cloud.\nMoreover, you and your colleagues want to be able to perform some end-to-end tests besides running your local test suite.\nFor these end-to-end test, an environment mimicking the final production environment is required.\nTherefore, you might need tools like ",(0,t.jsx)(n.a,{href:"https://cert-manager.io/",children:"cert-manager"})," or ",(0,t.jsx)(n.a,{href:"https://min.io/",children:"MinIO"}),".\nHowever, you do not want keep several testing clusters in the public cloud available for economic reasons and, in consequence, you need to create new clusters on demand.\nIn this case, the ",(0,t.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-shoot-flux",children:"gardener-extension-shoot-flux"})," comes handy, since it allows to configure the cluster asynchronously.\nPut simply, you can define the desired state of your cluster in a Git repository, and the new clusters will be reconciled to this state automatically.\nEventually, this will save the effort to configure the clusters each and every time manually.\nOf course, you could achieve something similar by hibernation of the development clusters.\nHowever, in that case you are less flexible, since throwing away the cluster in case you lost track of your clusters state comes at the price of reconfiguring the entire cluster."]}),"\n",(0,t.jsx)(n.h3,{id:"cicd",children:"CI/CD"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to the development use case above, you might want to run your CI/CD pipeline in Kubernetes clusters coming with a few components already installed.\nAs your pipeline runs frequently, you want to create clusters on the fly or maybe pre-spawn just a few of them.\nIn order to keep your pipeline simple, you can use the ",(0,t.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-shoot-flux",children:"gardener-extension-shoot-flux"})," for the configuration of your CI/CD clusters.\nThis way your pipeline can focus on the actual action and does not have to perform the cluster configuration beforehand.\nThis most probably results in cleaner and more stable CI/CD pipelines."]}),"\n",(0,t.jsx)(n.h2,{id:"general-concept",children:"General concept"}),"\n",(0,t.jsx)(n.p,{children:"The general concept of this extension is visualized in the block diagram below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2502 Gardener operator                                       \u2502\n                 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                 \u2502 - A human being                                         \u2502\n                 \u2502                                                         \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2502                                                         \u2502            \u2502\n                 \u2502                                                         \u2502            \u2502\n                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2502\n                          \u2502                           \u25b2                                 \u2502configures\n                          \u2502deploys                    \u2502                                 \u2502SSH-key\n                          \u2502Configmap                  \u2502read SSH-key                     \u2502\n                          \u2502                           \u2502                                 \u2502\n                          \u25bc                           \u2502                                 \u2502\n                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510             \u2502\n                 \u2502 Garden cluster                                         \u2502             \u2502\n                 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2524             \u2502\n                 \u2502 Projetct 1             \u2502 Project 2               \u2502 ... \u2502             \u25bc\n                 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2524  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2502- Configmap containing  \u2502- Configmap containing   \u2502     \u2502  \u2502 Git repository      \u2502\n                 \u2502  flux configuration    \u2502  flux configuration     \u2502     \u2502  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                 \u2502                        \u2502                         \u2502     \u2502  \u2502 - Configuration for \u2502\n            \u250c\u2500\u2500\u2500\u25ba\u2502- ControllerRegistration\u2502- ControllerRegistration \u2502 ... \u2502  \u2502   shoot clusters    \u2502\n            \u2502    \u2502                        \u2502                         \u2502     \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2502    \u2502- Shoot with extension  \u2502- Shoot with extension   \u2502     \u2502             \u25b2\n            \u2502    \u2502  enabled               \u2502  enabled                \u2502     \u2502             \u2502\n            \u2502    \u2502                        \u2502                         \u2502     \u2502             \u2502\nread config \u2502    \u2502                        \u2502                         \u2502     \u2502             \u2502\nand generate\u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518             \u2502reconcile\nSSH-keys    \u2502                                                                           \u2502\n            \u2502    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510              \u2502\n            \u2502    \u2502 Seed cluster           \u2502     \u2502 Shoot cluster          \u2502              \u2502\n            \u2502    \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524     \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524              \u2502\n            \u2502    \u2502- Controller watching   \u2502     \u2502                        \u2502              \u2502\n            \u2514\u2500\u2500\u2500\u2500\u253c\u2500 extension resource    \u2502     \u2502- Flux controllers  \u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                 \u2502     \u2502                  \u2502     \u2502                        \u2502\n                 \u2502     \u2502deploys           \u2502     \u2502- GitRepository resource\u2502\n                 \u2502     \u2502                  \u2502     \u2502                        \u2502\n                 \u2502     \u25bc                  \u2502     \u2502- A main kustomization  \u2502\n                 \u2502- Managed resources     \u2502     \u2502                        \u2502\n                 \u2502  for flux controllers  \u2502     \u2502                        \u2502\n                 \u2502  and flux config       \u2502     \u2502                        \u2502\n                 \u2502                        \u2502     \u2502                        \u2502\n                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As depicted, the Gardener operator needs to deploy a ",(0,t.jsx)(n.code,{children:"ConfigMap"})," into the Garden cluster.\nThis ",(0,t.jsx)(n.code,{children:"ConfigMap"})," holds some configuration parameters for the extension controller.\nMoreover, the Gardener operator needs to configure an SSH-key for the Git repository in case of a private repository.\nThis key can be read from the ",(0,t.jsx)(n.code,{children:"Secret"})," called ",(0,t.jsx)(n.code,{children:"flux-source"}),' in the Garden cluster which is created by the extension controller.\nOf course, the process of adding the SSH-key to the repository depends on the repository host.\nE.g. for repositories hosted on Github, the key can simply be added as "Deploy key" in the web-interface.']}),"\n",(0,t.jsxs)(n.p,{children:["The extension controller is running in ",(0,t.jsx)(n.code,{children:"Seed"})," clusters.\nBesides generating ",(0,t.jsx)(n.code,{children:"Secret"}),"s containing SSH-keys, it reads the configuration from the Garden cluster and creates ",(0,t.jsx)(n.code,{children:"Managedresources"})," to be processed by the ",(0,t.jsx)(n.a,{href:"https://gardener.cloud/docs/gardener/concepts/resource-manager/#managedresource-controller",children:"Gardener Resource Manager"}),".\nThese ",(0,t.jsx)(n.code,{children:"Managedresources"})," entail the resources for the Flux controllers, a ",(0,t.jsx)(n.a,{href:"https://fluxcd.io/docs/components/source/gitrepositories/",children:"GitRepository"})," resource matching the configuration, and a main ",(0,t.jsx)(n.a,{href:"https://fluxcd.io/docs/components/kustomize/kustomization/",children:"Kustomization"})," resource.\nOnce the Gardener Resource Manager has deployed these resources to the ",(0,t.jsx)(n.code,{children:"Shoot"})," cluster, the Flux controllers will reconcile the cluster to the state defined in the Git repository."]}),"\n",(0,t.jsxs)(n.p,{children:["You might wonder how the communication between ",(0,t.jsx)(n.code,{children:"Seed"})," clusters and Garden cluster is established.\nThis is achieved by making use of the ",(0,t.jsx)(n.code,{children:"Secret"})," containing the ",(0,t.jsx)(n.code,{children:"gardenlet-kubeconfig"})," which should be available, when the gardenlet is run inside the ",(0,t.jsx)(n.code,{children:"Seed"})," cluster.\nMost probably, this is not the most elegant solution, but it resulted in a quick first working solution."]}),"\n",(0,t.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Of course, you need to install the extension before you can use it.\nYou can find ",(0,t.jsx)(n.code,{children:"ControllerRegistration"}),"s on our ",(0,t.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-shoot-flux/releases",children:"Github release page"}),".\nSo, you can simply go for"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export KUBECONFIG=KUBECONFIG-FOR-GARDEN-CLUSTER\nkubectl -f https://github.com/23technologies/gardener-extension-shoot-flux/releases/download/v0.1.2/controller-registration.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"in order to install the extension."}),"\n",(0,t.jsxs)(n.p,{children:["For an exemplary use of the extension, we prepared a public repository containing manifest for the installation of ",(0,t.jsx)(n.a,{href:"https://github.com/stefanprodan/podinfo",children:"Podinfo"}),".\nAs a Gardener operator you can apply the following ",(0,t.jsx)(n.code,{children:"ConfigMap"})," to your Garden cluster"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: flux-config\n  namespace: YOUR-PROJECT-NAMESPACE\ndata:\n  fluxVersion: v0.29.5 # optional, if not defined the latest release will be used\n  repositoryUrl: https://github.com/23technologies/shootflux.git\n  repositoryBranch: main\n  repositoryType: public\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As the repository is public you can create a new ",(0,t.jsx)(n.code,{children:"Shoot"})," now and enable the extension for this ",(0,t.jsx)(n.code,{children:"Shoot"}),".\nTake the snipped below as an example."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: core.gardener.cloud/v1beta1\nkind: Shoot\nmetadata:\n  name: bar\n  namespace: garden-foo\nspec:\n  extensions:\n  - type: shoot-flux\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Gardener will take care for the ",(0,t.jsx)(n.code,{children:"Shoot"})," creation process.\nAs soon as you can, you can fetch the ",(0,t.jsx)(n.code,{children:"kubeconfig.yaml"})," for your new ",(0,t.jsx)(n.code,{children:"Shoot"})," from e.g. the Gardener dashboard.\nNow, you can watch this cluster by"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export KUBECONFIG=KUBECONFIG-FOR-SHOOT\nk9s\n"})}),"\n",(0,t.jsxs)(n.p,{children:["and you should see that a ",(0,t.jsx)(n.code,{children:"podinfo"})," deployment should come up.\nGreat! You successfully created a ",(0,t.jsx)(n.code,{children:"Shoot"})," with the ",(0,t.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-shoot-flux",children:"gardener-extension-shoot-flux"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var t=o(67294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);