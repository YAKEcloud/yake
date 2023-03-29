"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,title:"Installation"},i=void 0,l={unversionedId:"installation/installation",id:"version-1.66.x/installation/installation",title:"Installation",description:"Most easily, the installation can be performed by 23kectl, a configuration wizard for a basic setup. It is recommended to start with a basic setup and tweak it afterwards to the desired behavior.",source:"@site/versioned_docs/version-1.66.x/installation/installation.md",sourceDirName:"installation",slug:"/installation/",permalink:"/docs/1.66.x/installation/",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.66.x/installation/installation.md",tags:[],version:"1.66.x",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/docs/1.66.x/installation/prerequisites"},next:{title:"Guides",permalink:"/docs/1.66.x/category/guides"}},s={},c=[{value:"Basic Install Command",id:"basic-install-command",level:2},{value:"Help Commands",id:"help-commands",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Most easily, the installation can be performed by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/23technologies/23kectl"},"23kectl"),", a configuration wizard for a basic setup. It is recommended to start with a basic setup and tweak it afterwards to the desired behavior."),(0,r.kt)("h2",{id:"basic-install-command"},"Basic Install Command"),(0,r.kt)("p",null,"Once your environment fulfills the ",(0,r.kt)("a",{parentName:"p",href:"./prerequisites"},"prerequisites")," and you have ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/23technologies/23kectl"},"23kectl")," installed, you can start the installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export KUBECONFIG=KUBECONFIG_FOR_BASE_CLUSTER\n23kectl install\n")),(0,r.kt)("p",null,"This command will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file in the current directory which stores the configuration options collected by the wizard. If you do not want to export the ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," variable and/or use another configuration file name you can also run ",(0,r.kt)("inlineCode",{parentName:"p"},"23kectl")," like so"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"23kectl install --kubeconfig KUBECONFIG_FOR_BASE_CLUSTER --config=another-config.yaml\n")),(0,r.kt)("p",null,"After completing the wizard, you can watch the installation process in the cluster. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", you can watch flux resources like ",(0,r.kt)("inlineCode",{parentName:"p"},"helmreleases")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"kustomizations")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get -n flux-system helmrelease --watch\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get -n flux-system kustomization --watch\n")),(0,r.kt)("p",null,"Once all ",(0,r.kt)("inlineCode",{parentName:"p"},"helmreleases"),' are in the "reconcile succeeded" state, the installation is complete.'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For further configuration, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/architecture--configuration"},"architecture and configuration"),".\nIf you are interested in more sophisticated setups, have a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/guides"},"guides")," provided in this documentation.")),(0,r.kt)("h2",{id:"help-commands"},"Help Commands"),(0,r.kt)("p",null,"If you like to get some help on the command line you can invoke"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"23kectl install -h\n")),(0,r.kt)("p",null,"However, you will find more comprehensive information in this documentation."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If the installation process fails, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"helmrelease"),"s and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"kustomization"),"s do not get into a healthy state, you should"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check the credentials in your config file. If you have a typo somewhere, correct it and run the install command again."),(0,r.kt)("li",{parentName:"ul"},"Check whether your cloud credentials such as the DNS provider credentials are allowed to perform the required actions. Also consult the ",(0,r.kt)("a",{parentName:"li",href:"https://gardener.cloud/docs/"},"Gardener documentation")," in that case."),(0,r.kt)("li",{parentName:"ul"},"Check which ",(0,r.kt)("inlineCode",{parentName:"li"},"helmrelease")," fails and check the resources deployed by this ",(0,r.kt)("inlineCode",{parentName:"li"},"helmrelease")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"events")," showing errors.")),(0,r.kt)("p",null,"If none of these help, there could be an issue in your base infrastructure. In that case, contact us or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/23technologies/23kectl/issues"},"file an issue"),". We're always happy to help."))}u.isMDXComponent=!0}}]);