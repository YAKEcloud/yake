"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},h),{},{components:n})):r.createElement(g,i({ref:t},h))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={slug:"Gardener Hackathon 2023",title:"Gardener Hackathon - May 2023",authors:"jensac",tags:["gardener","hackathon"]},i=void 0,l={permalink:"/blog/Gardener Hackathon 2023",editUrl:"https://github.com/23technologies/23ke-docs/tree/main/blog/2023-06-06-hackathon.md",source:"@site/blog/2023-06-06-hackathon.md",title:"Gardener Hackathon - May 2023",description:"TLDR;",date:"2023-06-06T00:00:00.000Z",formattedDate:"June 6, 2023",tags:[{label:"gardener",permalink:"/blog/tags/gardener"},{label:"hackathon",permalink:"/blog/tags/hackathon"}],readingTime:1.77,hasTruncateMarker:!1,authors:[{name:"Jens Schneider",title:"software engineer",url:"https://github.com/jensac",imageURL:"https://github.com/jensac.png",key:"jensac"}],frontMatter:{slug:"Gardener Hackathon 2023",title:"Gardener Hackathon - May 2023",authors:"jensac",tags:["gardener","hackathon"]},nextItem:{title:"Build Cluster with CAPH - the challanges when installing 23KE",permalink:"/blog/build-cluster-with-caph"}},c={authorsImageUrls:[void 0]},s=[{value:"TLDR;",id:"tldr",level:2},{value:"Another great experience with great achievements",id:"another-great-experience-with-great-achievements",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tldr"},"TLDR;"),(0,a.kt)("p",null,"From May 22th until 26th, the colleagues from SAP, StackIT, x-cellent, and 23 Technologies met for another Gardener hackathon. One output is another ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gardener-community/hackathon"},"repository")," collecting the hackathon outputs. Go ahead and checkout the repo, for a concise summary of all past hackathons and information on future hackathons."),(0,a.kt)("h2",{id:"another-great-experience-with-great-achievements"},"Another great experience with great achievements"),(0,a.kt)("p",null,"When we met on Monday 22th, we synchronized our expectations for the week in the first place. Almost everyone agreed that having a good time together belongs to the main expectations. A few days after the hackathon, I can definitely state that we had a good and productive time together. From the social perspective, we enjoyed the fruitful discussions during lunch or dinner. From the hacking perspective, we were really fascinated by the progress made with respect to some topics which have made it to the agenda for several times before:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supporting pure IPv6 shoot clusters and"),(0,a.kt)("li",{parentName:"ul"},"Replacing the bash scripts for node provisioning with a golang-based approach.")),(0,a.kt)("p",null,'Moreover, we were working on a more research oriented topic dealing with the deployment of "masterful clusters" aka. "autonomous shoots". Even though the final concept for "gardener-like initial clusters" was not developed during the hackathon, the collected experience with respect to this challenging task is crucial for further steps.\nBesides the bigger topics mentioned above, we brought the following task close to (or even in) production:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We moved the ",(0,a.kt)("inlineCode",{parentName:"li"},"machine-controller-manager")," deployment responsibility to the ",(0,a.kt)("inlineCode",{parentName:"li"},"gardenlet")),(0,a.kt)("li",{parentName:"ul"},"We introduced an ",(0,a.kt)("inlineCode",{parentName:"li"},"InternalSecret")," resource in the Gardener API"),(0,a.kt)("li",{parentName:"ul"},"We replaced the ",(0,a.kt)("inlineCode",{parentName:"li"},"ShootState"),"s With data in backup buckets"),(0,a.kt)("li",{parentName:"ul"},"We found a concept for Garden cluster acccess for extensions in Seed clusters.")),(0,a.kt)("p",null,"Of course, there are still open questions and not every issue was solved during this short week. Therefore, we are happy that the colleagues from x-cellent opted for organizing the next Gardener hackathon in November/December 2023."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,'Once again, the Gardener hackathon was a great experience with great achievements for the overall project. The community work towards a "managed Kubernetes done right" service is still gathering pace which is forms a great basis for all future development.'))}u.isMDXComponent=!0}}]);