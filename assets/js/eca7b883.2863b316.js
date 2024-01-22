"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72563],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),y=o,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},80810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1},a="Overview",l={unversionedId:"overview",id:"version-1.86.x/overview",title:"Overview",description:"YAKE is a GitOps driven Gardener distribution. It helps you to deploy your gardener setup fast and reliably. It is also your companion, when it comes to upgrading and maintaining your setup. All YAKE releases are carefully selected and tested sets of upstream gardener components. With YAKE you can run and configure your complete gardener setup through your git config-repository. Based on Flux, the actual state of the system is always reconciled to the declarative configuration from your gitrepository which results in full control of your Gardener installation.",source:"@site/versioned_docs/version-1.86.x/overview.md",sourceDirName:".",slug:"/overview",permalink:"/yake/docs/overview",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.86.x/overview.md",tags:[],version:"1.86.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Architecture / Configuration",permalink:"/yake/docs/category/architecture--configuration"}},s={},u=[{value:"Support",id:"support",level:2},{value:"Demo instance",id:"demo-instance",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Locally",id:"locally",level:3},{value:"In the cloud (production scenario)",id:"in-the-cloud-production-scenario",level:3},{value:"What you&#39;ll need",id:"what-youll-need",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"YAKE is a GitOps driven ",(0,o.kt)("a",{parentName:"p",href:"https://gardener.cloud/"},"Gardener")," distribution. It helps you to deploy your gardener setup fast and reliably. It is also your companion, when it comes to upgrading and maintaining your setup. All YAKE releases are carefully selected and tested sets of upstream gardener components. With YAKE you can run and configure your complete gardener setup through your git config-repository. Based on ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/"},"Flux"),", the actual state of the system is always reconciled to the declarative configuration from your gitrepository which results in full control of your Gardener installation."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"When you decide to build your productive Gardener environment based on YAKE, you will also get support from the 23T engineers. We tackle all kinds of issues. From simple configuration questions to advanced Gardener operation topics... We'll be by your side \ud83d\ude42."),(0,o.kt)("h2",{id:"demo-instance"},"Demo instance"),(0,o.kt)("p",null,"We host a demo instance named ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.okeanos.dev"},"Okeanos"),", which is kept up-to-date with a very recent version of the Gardener upstream. You can convince yourself from the Gardener experience after logging in with your Github account."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"locally"},"Locally"),(0,o.kt)("p",null,"Checkout the the Readme in the repository for getting started locally."),(0,o.kt)("h3",{id:"in-the-cloud-production-scenario"},"In the cloud (production scenario)"),(0,o.kt)("p",null,"First, make sure that you satisfy the requirements below and then follow the installtion guide."),(0,o.kt)("h4",{id:"what-youll-need"},"What you'll need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Kubernetes cluster (also called base cluster) running in the cloud"),(0,o.kt)("li",{parentName:"ul"},"A DNS provider e.g. azure-dns, aws-route53, openstack-designate"),(0,o.kt)("li",{parentName:"ul"},"A domain delegated to the DNS provider of choice"),(0,o.kt)("li",{parentName:"ul"},"A remote git repository which is accessible (read and write) via ssh"),(0,o.kt)("li",{parentName:"ul"},"Basic knowledge about Flux, Helm and Kustomize")))}d.isMDXComponent=!0}}]);