"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14760],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64843:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:5,title:"FAQ"},a=void 0,s={unversionedId:"faq",id:"version-1.85.x/faq",title:"FAQ",description:"Do the trial version and production version differ?",source:"@site/versioned_docs/version-1.85.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/yake/docs/1.85.x/faq",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.85.x/faq.md",tags:[],version:"1.85.x",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Future Guides",permalink:"/yake/docs/1.85.x/guides/"}},l={},u=[{value:"Do the trial version and production version differ?",id:"do-the-trial-version-and-production-version-differ",level:3},{value:"Which Gardener version do I get with 23KE?",id:"which-gardener-version-do-i-get-with-23ke",level:3},{value:"Can I migrate from my garden-setup-based installation to 23KE?",id:"can-i-migrate-from-my-garden-setup-based-installation-to-23ke",level:3},{value:"Why is 23KE not open source? Will this result in a vendor lock?",id:"why-is-23ke-not-open-source-will-this-result-in-a-vendor-lock",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"do-the-trial-version-and-production-version-differ"},"Do the trial version and production version differ?"),(0,o.kt)("p",null,"Conceptually, the trial version works exactly as the production version. However, we did not enable all production grade features such as backups, webterminals etc. in the trial version. Moreover, a migration from the trial version to the production version is not provided."),(0,o.kt)("h3",{id:"which-gardener-version-do-i-get-with-23ke"},"Which Gardener version do I get with 23KE?"),(0,o.kt)("p",null,"We keep the pace of the Gardener upstream and release new Gardener versions with 23KE as soon as possible. This enables 23KE users the keep their installation up-to-date, and get the experience of new features in a two week rhythm."),(0,o.kt)("h3",{id:"can-i-migrate-from-my-garden-setup-based-installation-to-23ke"},"Can I migrate from my garden-setup-based installation to 23KE?"),(0,o.kt)("p",null,"Yes, this is possible. Most probably our support is required but we are happy to help in these kind of scenarios."),(0,o.kt)("h3",{id:"why-is-23ke-not-open-source-will-this-result-in-a-vendor-lock"},"Why is 23KE not open source? Will this result in a vendor lock?"),(0,o.kt)("p",null,"First things first. You will not be vendor locked, as all of the resources you need for your Gardener installation will be available to you, when you have a 23KE license. Consequently, you are always free to manage your Gardener environment on your own and you are neither dependent on our work progress nor locked to our product.\nRegarding the open source question, fundamentally different aspects come into play. Of course, open source is a great and resulted in many popular and useful software packages. However, open source software is often confused with free of charge software. From this perspective, it is mandatory to find customers before open sourcing the solution. Consequently, our approach does not include an open source strategy at the moment without sacrificing that our customers stay independent."))}d.isMDXComponent=!0}}]);