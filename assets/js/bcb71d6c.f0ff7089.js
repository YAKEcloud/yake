"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67173],{48806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(85893),r=t(11151);const o={sidebar_position:1,title:"Prerequisites"},i=void 0,l={id:"installation/prerequisites",title:"Prerequisites",description:"Before you can start with your 23KE deployment, you should check whether you have everything you need at hand. In the following, the prerequisites are listed and detailed.",source:"@site/versioned_docs/version-1.78.x/installation/prerequisites.md",sourceDirName:"installation",slug:"/installation/prerequisites",permalink:"/docs/1.78.x/installation/prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/yakecloud/yake/tree/main/docs/versioned_docs/version-1.78.x/installation/prerequisites.md",tags:[],version:"1.78.x",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/1.78.x/category/installation"},next:{title:"Installation",permalink:"/docs/1.78.x/installation/"}},a={},d=[{value:"23KE License",id:"23ke-license",level:2},{value:"Deployment Host",id:"deployment-host",level:2},{value:"Tools",id:"tools",level:3},{value:"Git Repository",id:"git-repository",level:2},{value:"Domain and DNS provider",id:"domain-and-dns-provider",level:2},{value:"Kubernetes Cluster",id:"kubernetes-cluster",level:2},{value:"Basic Kubernetes, Helm and Flux Knowledge",id:"basic-kubernetes-helm-and-flux-knowledge",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Before you can start with your 23KE deployment, you should check whether you have everything you need at hand. In the following, the prerequisites are listed and detailed."}),"\n",(0,s.jsx)(n.h2,{id:"23ke-license",children:"23KE License"}),"\n",(0,s.jsxs)(n.p,{children:["First and foremost, you need a 23KE license. This could also be the trial license which you can issue yourself via our ",(0,s.jsx)(n.a,{href:"https://self-service.ingress.23ke-releases.23t-prod.okeanos.dev/trial/request",children:"self-service"})," website.\nJust enter and verify your email address, and you will be good to go."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"In the trial license, some enterprise class features such as backups are unavailable."})}),"\n",(0,s.jsx)(n.h2,{id:"deployment-host",children:"Deployment Host"}),"\n",(0,s.jsx)(n.p,{children:"This can be any workstation machine, laptop, VM, whatnot, as long as it is connected to the internet. Most preferably, it is a Linux-based host, however, macOS or WSL should also work fine."}),"\n",(0,s.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,s.jsx)(n.p,{children:"To use 23KE efficiently you will need these tools:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"git"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/23technologies/23kectl/releases",children:"23kectl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubectl/",children:"kubectl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://fluxcd.io/flux/installation/",children:"flux"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"helm"})," (optional)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We recommend using an interactive tool like ",(0,s.jsx)(n.a,{href:"https://k9scli.io/",children:"k9s"})," as a more convenient way of working with your clusters."]}),"\n",(0,s.jsx)(n.h2,{id:"git-repository",children:"Git Repository"}),"\n",(0,s.jsxs)(n.p,{children:["To store and manage the configuration of your Gardener environment you need a git repository (see also ",(0,s.jsx)(n.a,{href:"/docs/next/architecture-configuration/architecture",children:"architecture"}),"), which is accessible via ssh over the internet. Of course, you can host your configuration git repository on forges like GitHub or GitLab. Conceptually, the forge needs to support ssh deploy keys. However, this should not be a limitation with modern forges."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["A local git repository will not work with 23KE, as the ",(0,s.jsx)(n.a,{href:"https://fluxcd.io/",children:"flux"})," controllers need be able to access the repository."]})}),"\n",(0,s.jsx)(n.h2,{id:"domain-and-dns-provider",children:"Domain and DNS provider"}),"\n",(0,s.jsxs)(n.p,{children:["For the Gardener installation, you need a domain under which e.g. the Gardener dashboard is served. Moreover, a DNS provider like azure-dns, aws-route53, or openstack-designate is required. Make sure to delegate a domain to your DNS provider of choice (see ",(0,s.jsx)(n.a,{href:"https://gardener.cloud/docs/extensions/others/gardener-extension-shoot-dns-service/docs/usage/dns_names/#gardener-dns-extension",children:"here"})," for a list of supported DNS providers by Gardener). You will also need the DNS provider credentials in order to configure these for 23KE."]}),"\n",(0,s.jsx)(n.h2,{id:"kubernetes-cluster",children:"Kubernetes Cluster"}),"\n",(0,s.jsx)(n.p,{children:'As Gardener is installed on top of Kubernetes itself, you need a base cluster which hosts your Gardener installation. This needs to be a cluster with "full cloud support", i.e. you need to have a cluster with'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["3x 4vcpu, 8GB RAM (control plane) and 3x 8vcpu 16GB RAM (workers) for a production ready setup (",(0,s.jsx)(n.strong,{children:"or"})," 4x 4vcpu, 8GB RAM for a working basic setup)"]}),"\n",(0,s.jsx)(n.li,{children:"a working load balancer service"}),"\n",(0,s.jsxs)(n.li,{children:["a running ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",children:"CNI"})," like ",(0,s.jsx)(n.a,{href:"https://www.tigera.io/project-calico/",children:"calico"})," or ",(0,s.jsx)(n.a,{href:"https://cilium.io/",children:"cilium"})]}),"\n",(0,s.jsxs)(n.li,{children:["a running ",(0,s.jsx)(n.a,{href:"https://kubernetes-csi.github.io/",children:"CSI"})," for your cloud provider's volumes\nMoreover, the cluster needs to be hosted on a cloud provider with existing Gardener extension. Checkout this ",(0,s.jsx)(n.a,{href:"https://gardener.cloud/docs/extensions/infrastructure-extensions/",children:"list"})," for the infrastructure extensions maintained in the ",(0,s.jsx)(n.a,{href:"https://github.com/gardener",children:"gardener organization on GitHub"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Moreover, you should consider the following aspects:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["As 23KE ships with a deployement of ",(0,s.jsx)(n.a,{href:"https://kubernetes.github.io/ingress-nginx/",children:"ingress-nginx"}),", you must not install any ingress controller into the base cluster"]}),"\n",(0,s.jsxs)(n.li,{children:["As Gardener uses the ",(0,s.jsx)(n.code,{children:"192.168.123.0/24"}),"internally, your pod network of the base cluster should not interfere with that range. Therefore, it is recommended to use ",(0,s.jsx)(n.code,{children:"172.16.0.0/16"})," as pod network in the base cluster. For the service network no restrictions are known."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["There are more provider extensions than the ones hosted in the Gardener organization on GitHub. For instance, there is the ",(0,s.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-provider-hcloud",children:"provider-hcloud"})," extension supporting managed Kubernetes on the ",(0,s.jsx)(n.a,{href:"https://www.hetzner.com/cloud",children:"Hetzner cloud"}),". If you are interested in a custom extension, you can also contact us, and we can discuss on a development plan for another extension."]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["A local Kubernetes cluster like k3s, kind, minikube or similar will not work for a production deployment of Gardener. If you want to start locally for development purposes, checkout ",(0,s.jsx)(n.a,{href:"https://gardener.cloud/docs/gardener/development/getting_started_locally/",children:"Gardener's Getting started locally guide"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"basic-kubernetes-helm-and-flux-knowledge",children:"Basic Kubernetes, Helm and Flux Knowledge"}),"\n",(0,s.jsxs)(n.p,{children:["If you are entirely new to ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/",children:"Kubernetes"})," and related tooling like ",(0,s.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})," and ",(0,s.jsx)(n.a,{href:"https://fluxcd.io/",children:"Flux"})," your learning curve will be really steep, when using 23KE. If you already have some experience with those tools, you can consult the ",(0,s.jsx)(n.a,{href:"/docs/next/architecture-configuration/helm-flux",children:"Helm/Flux page"})," for some basic commands and explanation. Otherwise, you could also contact us for a training."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);