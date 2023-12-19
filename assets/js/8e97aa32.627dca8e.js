"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={hide_table_of_contents:!0},o="Release Notes next",i={unversionedId:"next",id:"next",title:"Release Notes next",description:"Yake release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/yake/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},s={},d=[{value:"Yake release notes and upgrade guide",id:"yake-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"Docker Images",id:"docker-images-1",level:2}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,a.kt)("h2",{id:"yake-release-notes-and-upgrade-guide"},"Yake release notes and upgrade guide"),(0,a.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update dashboard to ",(0,a.kt)("code",null,"1.71.1"))),(0,a.kt)("h1",{id:"gardenerdashboard"},"[gardener/dashboard]"),(0,a.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Fixed an issue where the error message ",(0,a.kt)("inlineCode",{parentName:"li"},"_all is not a function")," was displayed on the ",(0,a.kt)("inlineCode",{parentName:"li"},"ALL PROJECTS")," page. by @holgerkoser ","[#1663]")),(0,a.kt)("h2",{id:"docker-images"},"Docker Images"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dashboard: ",(0,a.kt)("inlineCode",{parentName:"li"},"europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.71.1")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update dashboard to ",(0,a.kt)("code",null,"1.71.1"))),(0,a.kt)("h1",{id:"gardenerdashboard-1"},"[gardener/dashboard]"),(0,a.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Fixed an issue where the error message ",(0,a.kt)("inlineCode",{parentName:"li"},"_all is not a function")," was displayed on the ",(0,a.kt)("inlineCode",{parentName:"li"},"ALL PROJECTS")," page. by @holgerkoser ","[#1663]")),(0,a.kt)("h2",{id:"docker-images-1"},"Docker Images"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dashboard: ",(0,a.kt)("inlineCode",{parentName:"li"},"europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.71.1")))))}c.isMDXComponent=!0}}]);