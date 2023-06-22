"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={hide_table_of_contents:!0},i="Release Notes next",o={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},u={},s=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,a.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,a.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-alicloud to ",(0,a.kt)("code",null,"1.46.1"))),(0,a.kt)("h1",{id:"machine-controller-manager"},"[machine-controller-manager]"),(0,a.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[USER]")," An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/822"},"gardener/machine-controller-manager#822"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rishabh-11"},"@rishabh-11"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/817"},"gardener/machine-controller-manager#817"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," Included ",(0,a.kt)("inlineCode",{parentName:"li"},"UnavailableReplicas")," in determining if a machine deployment status update is needed (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/834"},"gardener/machine-controller-manager#834"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-azure to ",(0,a.kt)("code",null,"1.36.2"))),(0,a.kt)("h1",{id:"machine-controller-manager-1"},"[machine-controller-manager]"),(0,a.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," Included ",(0,a.kt)("inlineCode",{parentName:"li"},"UnavailableReplicas")," in determining if a machine deployment status update is needed (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/834"},"gardener/machine-controller-manager#834"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"))))}p.isMDXComponent=!0}}]);