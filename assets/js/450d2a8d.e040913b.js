"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68778],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=m(n),g=r,N=s["".concat(d,".").concat(g)]||s[g]||k[g]||l;return n?a.createElement(N,i(i({ref:e},p),{},{components:n})):a.createElement(N,i({ref:e},p))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},42416:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:4},i="Gardener Extensions Configuration",o={unversionedId:"architecture-configuration/extensions-config",id:"version-1.85.x/architecture-configuration/extensions-config",title:"Gardener Extensions Configuration",description:"Other than the core Gardener components, Gardener extensions are configured through a 23KE internal helm chart. Consequently, you cannot retrieve any information about possible values via e.g. the helm cli. For this reason the extension-values Secret is documented here. As the other configuration secrets, the secret's header looks like the following:",source:"@site/versioned_docs/version-1.85.x/architecture-configuration/extensions-config.md",sourceDirName:"architecture-configuration",slug:"/architecture-configuration/extensions-config",permalink:"/docs/1.85.x/architecture-configuration/extensions-config",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.85.x/architecture-configuration/extensions-config.md",tags:[],version:"1.85.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"The 23KE config git repository",permalink:"/docs/1.85.x/architecture-configuration/23ke-config-gitrepo"},next:{title:"Working with Helm and Flux",permalink:"/docs/1.85.x/architecture-configuration/helm-flux"}},d={},m=[],p={toc:m};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gardener-extensions-configuration"},"Gardener Extensions Configuration"),(0,r.kt)("p",null,"Other than the core Gardener components, Gardener extensions are configured through a 23KE internal helm chart. Consequently, you cannot retrieve any information about possible values via e.g. the ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh"},"helm")," cli. For this reason the ",(0,r.kt)("inlineCode",{parentName:"p"},"extension-values")," Secret is documented here. As the other configuration secrets, the secret's header looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: extensions-values\n  namespace: flux-system\ntype: Opaque\nstringData:\n  values.yaml: |\n  ...\n")),(0,r.kt)("p",null,"Possbile values are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subfield"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"os-ubuntu")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-os-ubuntu/blob/master/charts/gardener-extension-os-ubuntu/values.yaml"},"os-ubuntu values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"os-coreos")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-os-coreos/blob/master/charts/gardener-extension-os-coreos/values.yaml"},"os-coreos values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"os-gardenlinux")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-os-gardenlinux/blob/master/charts/gardener-extension-os-gardenlinux/values.yaml"},"os-gardenlinux-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"provider-hcloud")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/23technologies/gardener-extension-provider-hcloud/blob/main/charts/gardener-extension-provider-hcloud/values.yaml"},"provider-hcloud-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"provider-azure")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"admission")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension's admission controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-provider-azure/blob/master/charts/gardener-extension-provider-azure/values.yaml"},"provider-azure-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"provider-openstack")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"admission")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension's admission controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-provider-openstack/blob/master/charts/gardener-extension-provider-openstack/values.yaml"},"provider-openstack-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"provider-aws")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-provider-aws/blob/master/charts/gardener-extension-provider-aws/values.yaml"},"provider-aws-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"provider-gcp")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-provider-gcp/blob/master/charts/gardener-extension-provider-gcp/values.yaml"},"provider-gcp-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"provider-alicloud")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-provider-alicloud/blob/master/charts/gardener-extension-provider-alicloud/values.yaml"},"provider-alicloud-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"networking-calico")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-networking-calico/blob/master/charts/gardener-extension-networking-calico/values.yaml"},"networking-calico-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"networking-cilium")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-networking-cilium/blob/master/charts/gardener-extension-networking-cilium/values.yaml"},"networking-cilium-values")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"runtime-gvisor")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-runtime-gvisor/blob/master/charts/gardener-extension-runtime-gvisor/values.yaml"},"runtime-gvisor-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shoot-dns-service")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"globallyEnabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension globally, i.e. for every ",(0,r.kt)("inlineCode",{parentName:"td"},"Shoot"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-shoot-dns-service/blob/master/charts/gardener-extension-shoot-dns-service/values.yaml"},"shoot-dns-service-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shoot-cert-service")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"globallyEnabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension globally, i.e. for every ",(0,r.kt)("inlineCode",{parentName:"td"},"Shoot"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-shoot-cert-service/blob/master/charts/gardener-extension-shoot-cert-service/values.yaml"},"shoot-cert-service-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shoot-oidc-service")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"globallyEnabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension globally, i.e. for every ",(0,r.kt)("inlineCode",{parentName:"td"},"Shoot"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-shoot-oidc-service/blob/master/charts/gardener-extension-shoot-oidc-service/values.yaml"},"shoot-oidc-service-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shoot-networking-filter")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"globallyEnabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension globally, i.e. for every ",(0,r.kt)("inlineCode",{parentName:"td"},"Shoot"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-shoot-networking-filter/blob/master/charts/gardener-extension-shoot-networking-filter/values.yaml"},"shoot-networking-filter-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shoot-networking-problemdetector")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"globallyEnabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension globally, i.e. for every ",(0,r.kt)("inlineCode",{parentName:"td"},"Shoot"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/blob/master/charts/gardener-extension-shoot-networking-problemdetector/values.yaml"},"shoot-networking-problemdetector-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shoot-rsyslog-relp")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"globallyEnabled")," ",(0,r.kt)("br",null)," bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enables the extension globally, i.e. for every ",(0,r.kt)("inlineCode",{parentName:"td"},"Shoot"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version")," ",(0,r.kt)("br",null)," string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"version of the extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values"),"  ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/blob/master/charts/gardener-extension-shoot-rsyslog-relp/values.yaml"},"shoot-rsyslog-relp-values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"values for the extension's helm chart")))))}s.isMDXComponent=!0}}]);