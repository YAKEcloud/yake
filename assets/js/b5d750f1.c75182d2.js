"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4362],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,h=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return t?n.createElement(h,l(l({ref:r},u),{},{components:t})):n.createElement(h,l({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76571:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const o={},l="Release Notes v1.59",s={unversionedId:"v1.59",id:"v1.59",title:"Release Notes v1.59",description:"Upstream Changes",source:"@site/release-notes/v1.59.md",sourceDirName:".",slug:"/v1.59",permalink:"/release-notes/v1.59",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Release Notes v1.60",permalink:"/release-notes/v1.60"},next:{title:"Release Notes v1.58",permalink:"/release-notes/v1.58"}},i={},d=[{value:"Upstream Changes",id:"upstream-changes",level:2},{value:"23KE Changes and Upgrade Path",id:"23ke-changes-and-upgrade-path",level:2}],u={toc:d};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-v159"},"Release Notes v1.59"),(0,a.kt)("h2",{id:"upstream-changes"},"Upstream Changes"),(0,a.kt)("p",null,"Please check the following sites for upstream release notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/releases"},"Gardener releases")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-community/gardener-charts/releases"},"Gardener-community charts releases"))),(0,a.kt)("h2",{id:"23ke-changes-and-upgrade-path"},"23KE Changes and Upgrade Path"),(0,a.kt)("p",null,"This release requires some manual interaction if you are upgrading from a previous 23KE release:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'the dashboard-configuration values got a new root-node named "global" so if your config looked like this before:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"frontendConfig:\n  ...\nbootstrap:\n  ...\n")),(0,a.kt)("p",null,"you have to change it to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"global:\n  frontendConfig:\n    ...\n  bootstrap:\n    ...\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"in contrast, gardenlet lost its root-node global.gardenlet and the leafs below moved to the root, if your config looked like this before:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"global:\n  gardenlet:\n    config:\n      ...\n")),(0,a.kt)("p",null,"you have to change it to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"config:\n  ...\n")),(0,a.kt)("p",null,"In order to change the config files please follow this steps:"),(0,a.kt)("p",null,"Disable gardenlet and dashboard reconciliations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"flux suspend helmrelease internal-gardenlet\nflux suspend helmrelease dashboard\n")),(0,a.kt)("p",null,"Now edit your dashboard-values and your gardenlet-values secret in your git repository and wait for reconciliation."),(0,a.kt)("p",null,"The dashboard has switched its helm-release name so a series of annotations is necessary:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl annotate configmap -n garden gardener-dashboard-configmap meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate configmap -n garden dashboard-assets meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate secret -n garden gardener-dashboard-kubeconfig meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate secret -n garden gardener-dashboard-oidc meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate secret -n garden gardener-dashboard-sessionsecret meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate service -n garden gardener-dashboard-service meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate deployment -n garden gardener-dashboard meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\nkubectl annotate ingress -n garden gardener-dashboard-ingress meta.helm.sh/release-name=garden-dashboard-runtime --overwrite\n")),(0,a.kt)("p",null,"Now update your 23KE release (change the tag in the 23ke gitrepo source to v1.59.0)"),(0,a.kt)("p",null,"after all components have reconciled resume the gardenlet helmrelease:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"flux resume helmrelease internal-gardenlet\n")),(0,a.kt)("p",null,"The dashboard helmrelease should have been resumed automatically as the helmrelease has been created under a new name."))}c.isMDXComponent=!0}}]);