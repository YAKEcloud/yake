"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={hide_table_of_contents:!0},l="Release Notes next",i={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},s={},d=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\u2728 New Features",id:"-new-features",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"Docker Images",id:"docker-images-1",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,a.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,a.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update shoot-networking-filter to ",(0,a.kt)("code",null,"0.16.0"))),(0,a.kt)("h1",{id:"gardenergardener-extension-shoot-networking-filter"},"[gardener/gardener-extension-shoot-networking-filter]"),(0,a.kt)("h2",{id:"-new-features"},"\u2728 New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Update image of egress-filter to 0.14.0 by @axel7born ","[#107]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Mount ",(0,a.kt)("inlineCode",{parentName:"li"},"/run/xtables.lock")," to prevent concurrent modifications of iptables rules. by @axel7born ","[#106]")),(0,a.kt)("h2",{id:"-others"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Bump github.com/gardener/gardener from 1.84.0 to 1.84.1. by @dependabot","[bot][#102]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Bumps golang from 1.21.4 to 1.21.5. by @dependabot","[bot][#105]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Bump github.com/gardener/gardener from 1.84.1 to 1.85.0. by @dependabot","[bot][#104]")),(0,a.kt)("h2",{id:"docker-images"},"Docker Images"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gardener-extension-shoot-networking-filter: ",(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/gardener/extensions/shoot-networking-filter:v0.16.0")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-aws to ",(0,a.kt)("code",null,"1.51.0"))),(0,a.kt)("h1",{id:"gardenergardener-extension-provider-aws"},"[gardener/gardener-extension-provider-aws]"),(0,a.kt)("h2",{id:"-others-1"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The following golang dependencies have been upgraded :  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gardener/gardener"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.81.6"),"->",(0,a.kt)("inlineCode",{parentName:"li"},"v1.83.2")," by @shafeeqes ","[#828]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]"),' Add documentation for the "flow" infrastructure reconciler. by @kon-angelo ',"[#827]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[DEVELOPER]")," Add new unit tests. by @axel7born ","[#829]")),(0,a.kt)("h2",{id:"docker-images-1"},"Docker Images"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gardener-extension-admission-aws: ",(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/gardener/extensions/admission-aws:v1.51.0")),(0,a.kt)("li",{parentName:"ul"},"gardener-extension-provider-aws: ",(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/gardener/extensions/provider-aws:v1.51.0")))))}p.isMDXComponent=!0}}]);