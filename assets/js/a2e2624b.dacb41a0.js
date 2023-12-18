"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98033],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},53929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1,title:"Prerequisites"},i=void 0,s={unversionedId:"installation/prerequisites",id:"version-1.81.x/installation/prerequisites",title:"Prerequisites",description:"Before you can start with your 23KE deployment, you should check whether you have everything you need at hand. In the following, the prerequisites are listed and detailed.",source:"@site/versioned_docs/version-1.81.x/installation/prerequisites.md",sourceDirName:"installation",slug:"/installation/prerequisites",permalink:"/yake/docs/1.81.x/installation/prerequisites",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.81.x/installation/prerequisites.md",tags:[],version:"1.81.x",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/yake/docs/1.81.x/category/installation"},next:{title:"Installation",permalink:"/yake/docs/1.81.x/installation/"}},l={},u=[{value:"23KE License",id:"23ke-license",level:2},{value:"Deployment Host",id:"deployment-host",level:2},{value:"Tools",id:"tools",level:3},{value:"Git Repository",id:"git-repository",level:2},{value:"Domain and DNS provider",id:"domain-and-dns-provider",level:2},{value:"Kubernetes Cluster",id:"kubernetes-cluster",level:2},{value:"Basic Kubernetes, Helm and Flux Knowledge",id:"basic-kubernetes-helm-and-flux-knowledge",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before you can start with your 23KE deployment, you should check whether you have everything you need at hand. In the following, the prerequisites are listed and detailed."),(0,o.kt)("h2",{id:"23ke-license"},"23KE License"),(0,o.kt)("p",null,"First and foremost, you need a 23KE license. This could also be the trial license which you can issue yourself via our ",(0,o.kt)("a",{parentName:"p",href:"https://self-service.ingress.23ke-releases.23t-prod.okeanos.dev/trial/request"},"self-service")," website.\nJust enter and verify your email address, and you will be good to go."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the trial license, some enterprise class features such as backups are unavailable.")),(0,o.kt)("h2",{id:"deployment-host"},"Deployment Host"),(0,o.kt)("p",null,"This can be any workstation machine, laptop, VM, whatnot, as long as it is connected to the internet. Most preferably, it is a Linux-based host, however, macOS or WSL should also work fine."),(0,o.kt)("h3",{id:"tools"},"Tools"),(0,o.kt)("p",null,"To use 23KE efficiently you will need these tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/23technologies/23kectl/releases"},"23kectl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/"},"kubectl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/installation/"},"flux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," (optional)")),(0,o.kt)("p",null,"We recommend using an interactive tool like ",(0,o.kt)("a",{parentName:"p",href:"https://k9scli.io/"},"k9s")," as a more convenient way of working with your clusters."),(0,o.kt)("h2",{id:"git-repository"},"Git Repository"),(0,o.kt)("p",null,"To store and manage the configuration of your Gardener environment you need a git repository (see also ",(0,o.kt)("a",{parentName:"p",href:"/yake/docs/next/architecture-configuration/architecture"},"architecture"),"), which is accessible via ssh over the internet. Of course, you can host your configuration git repository on forges like GitHub or GitLab. Conceptually, the forge needs to support ssh deploy keys. However, this should not be a limitation with modern forges."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"A local git repository will not work with 23KE, as the ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/"},"flux")," controllers need be able to access the repository.")),(0,o.kt)("h2",{id:"domain-and-dns-provider"},"Domain and DNS provider"),(0,o.kt)("p",null,"For the Gardener installation, you need a domain under which e.g. the Gardener dashboard is served. Moreover, a DNS provider like azure-dns, aws-route53, or openstack-designate is required. Make sure to delegate a domain to your DNS provider of choice (see ",(0,o.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/extensions/others/gardener-extension-shoot-dns-service/docs/usage/dns_names/#gardener-dns-extension"},"here")," for a list of supported DNS providers by Gardener). You will also need the DNS provider credentials in order to configure these for 23KE."),(0,o.kt)("h2",{id:"kubernetes-cluster"},"Kubernetes Cluster"),(0,o.kt)("p",null,'As Gardener is installed on top of Kubernetes itself, you need a base cluster which hosts your Gardener installation. This needs to be a cluster with "full cloud support", i.e. you need to have a cluster with'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3x 4vcpu, 8GB RAM (control plane) and 3x 8vcpu 16GB RAM (workers) for a production ready setup (",(0,o.kt)("strong",{parentName:"li"},"or")," 4x 4vcpu, 8GB RAM for a working basic setup)"),(0,o.kt)("li",{parentName:"ul"},"a working load balancer service"),(0,o.kt)("li",{parentName:"ul"},"a running ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," like ",(0,o.kt)("a",{parentName:"li",href:"https://www.tigera.io/project-calico/"},"calico")," or ",(0,o.kt)("a",{parentName:"li",href:"https://cilium.io/"},"cilium")),(0,o.kt)("li",{parentName:"ul"},"a running ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes-csi.github.io/"},"CSI")," for your cloud provider's volumes\nMoreover, the cluster needs to be hosted on a cloud provider with existing Gardener extension. Checkout this ",(0,o.kt)("a",{parentName:"li",href:"https://gardener.cloud/docs/extensions/infrastructure-extensions/"},"list")," for the infrastructure extensions maintained in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gardener"},"gardener organization on GitHub"),".")),(0,o.kt)("p",null,"Moreover, you should consider the following aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As 23KE ships with a deployement of ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/"},"ingress-nginx"),", you must not install any ingress controller into the base cluster"),(0,o.kt)("li",{parentName:"ul"},"As Gardener uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"192.168.123.0/24"),"internally, your pod network of the base cluster should not interfere with that range. Therefore, it is recommended to use ",(0,o.kt)("inlineCode",{parentName:"li"},"172.16.0.0/16")," as pod network in the base cluster. For the service network no restrictions are known.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"There are more provider extensions than the ones hosted in the Gardener organization on GitHub. For instance, there is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/23technologies/gardener-extension-provider-hcloud"},"provider-hcloud")," extension supporting managed Kubernetes on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.hetzner.com/cloud"},"Hetzner cloud"),". If you are interested in a custom extension, you can also contact us, and we can discuss on a development plan for another extension.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"A local Kubernetes cluster like k3s, kind, minikube or similar will not work for a production deployment of Gardener. If you want to start locally for development purposes, checkout ",(0,o.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/gardener/development/getting_started_locally/"},"Gardener's Getting started locally guide"),".")),(0,o.kt)("h2",{id:"basic-kubernetes-helm-and-flux-knowledge"},"Basic Kubernetes, Helm and Flux Knowledge"),(0,o.kt)("p",null,"If you are entirely new to ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," and related tooling like ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm")," and ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/"},"Flux")," your learning curve will be really steep, when using 23KE. If you already have some experience with those tools, you can consult the ",(0,o.kt)("a",{parentName:"p",href:"/yake/docs/next/architecture-configuration/helm-flux"},"Helm/Flux page")," for some basic commands and explanation. Otherwise, you could also contact us for a training."))}p.isMDXComponent=!0}}]);