"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,c=h["".concat(m,".").concat(u)]||h[u]||d[u]||i;return a?r.createElement(c,l(l({ref:t},s),{},{components:a})):r.createElement(c,l({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[h]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={hide_table_of_contents:!0},l="Release Notes next",o={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},m={},p=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\u2728 New Features",id:"-new-features",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udcd6 Documentation",id:"-documentation",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\u2728 New Features",id:"-new-features-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83d\udcd6 Documentation",id:"-documentation-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"\ud83c\udfc3 Others",id:"-others-4",level:2}],s={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,n.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,n.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-aws to ",(0,n.kt)("code",null,"1.44.0"))),(0,n.kt)("h1",{id:"gardener-extension-provider-aws"},"[gardener-extension-provider-aws]"),(0,n.kt)("h2",{id:"-new-features"},"\u2728 New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," Enable awslabs/volume-modifier-for-k8s by default (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/754"},"gardener/gardener-extension-provider-aws#754"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kon-angelo"},"@kon-angelo"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Flow-based infrastructure reconciliation without Terraformer (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/603"},"gardener/gardener-extension-provider-aws#603"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MartinWeindel"},"@MartinWeindel"),")")),(0,n.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Allow patching events for aws-custom-route-controller (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/742"},"gardener/gardener-extension-provider-aws#742"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MartinWeindel"},"@MartinWeindel"),")")),(0,n.kt)("h2",{id:"-documentation"},"\ud83d\udcd6 Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEPENDENCY]")," The flags which went out-of-support in MCM v0.49.0 have been cleaned up from MCM deployment yaml. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/739"},"gardener/gardener-extension-provider-aws#739"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")")),(0,n.kt)("h2",{id:"-others"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Block public access for newly created S3 buckets. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/738"},"gardener/gardener-extension-provider-aws#738"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/shreyas-s-rao"},"@shreyas-s-rao"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The admission/validation component is now adapted such that it works well in garden cluster with enabled ",(0,n.kt)("inlineCode",{parentName:"li"},"NetworkPolicy")," protection (default since ",(0,n.kt)("inlineCode",{parentName:"li"},"gardener/gardener@v1.71")," when garden cluster is managed by ",(0,n.kt)("inlineCode",{parentName:"li"},"gardener-operator"),"). (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/747"},"gardener/gardener-extension-provider-aws#747"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rfranzke"},"@rfranzke"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Update go to ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.20.4")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/753"},"gardener/gardener-extension-provider-aws#753"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kon-angelo"},"@kon-angelo"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Update ebs driver to ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.19.0")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/754"},"gardener/gardener-extension-provider-aws#754"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kon-angelo"},"@kon-angelo"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The following images have been updated: (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/757"},"gardener/gardener-extension-provider-aws#757"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dkistner"},"@dkistner"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mtu-customizer: alpine:3.16.2  \u2192 alpine:3.18.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," provider-aws does now define proper ",(0,n.kt)("inlineCode",{parentName:"li"},"create")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"delete")," timeouts for ",(0,n.kt)("inlineCode",{parentName:"li"},"aws_internet_gateway"),". Now, these timeouts are aligned with the terraformer's timeout. Previously the timeouts were not aligned and provider-aws was not able to properly report the ",(0,n.kt)("inlineCode",{parentName:"li"},"aws_internet_gateway")," related error. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/761"},"gardener/gardener-extension-provider-aws#761"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEPENDENCY]")," The following dependency is updated: (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/749"},"gardener/gardener-extension-provider-aws#749"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/shafeeqes"},"@shafeeqes"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"github.com/gardener/gardener: v1.67.1 -> v1.71.0"),(0,n.kt)("li",{parentName:"ul"},"k8s.io/* : v0.26.2 -> v0.26.3"),(0,n.kt)("li",{parentName:"ul"},"sigs.k8s.io/controller-runtime: v0.14.5-> v0.14.6")))),(0,n.kt)("h1",{id:"aws-custom-route-controller"},"[aws-custom-route-controller]"),(0,n.kt)("h2",{id:"-others-1"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Update builder image from ",(0,n.kt)("inlineCode",{parentName:"li"},"golang:1.20.2")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"golang:1.20.4")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/aws-custom-route-controller/pull/14"},"gardener/aws-custom-route-controller#14"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MartinWeindel"},"@MartinWeindel"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," updated kubernetes dependencies from ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.25.4")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.26.4")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/aws-custom-route-controller/pull/15"},"gardener/aws-custom-route-controller#15"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MartinWeindel"},"@MartinWeindel"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," improved timestamp format for JSON logging; added command-line options for log level and format. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/aws-custom-route-controller/pull/15"},"gardener/aws-custom-route-controller#15"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MartinWeindel"},"@MartinWeindel"),")")),(0,n.kt)("h1",{id:"machine-controller-manager"},"[machine-controller-manager]"),(0,n.kt)("h2",{id:"\ufe0f-breaking-changes"},"\u26a0\ufe0f Breaking Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Removal of the following flags (and corresponding fields in associated structs): 'machine-creation-timeout' 'machine-drain-timeout', 'machine-pv-detach-timeout', 'machine-health-timeout=10m', 'machine-safety-apiserver-statuscheck-timeout', 'machine-safety-apiserver-statuscheck-period', 'machine-safety-orphan-vms-period', 'machine-max-evict-retries', 'node-conditions', 'bootstrap-token-auth-extra-groups', 'delete-migrated-machine-class'. The MCM no longer accepts these flags since these are options handled by the Machine Controller invoked by platform specific provider launchers. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/769"},"gardener/machine-controller-manager#769"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/elankath"},"@elankath"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEVELOPER]")," Deletion of 'Driver.GenerateMachineClassForMigration'. Providers need to adapt to this. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/769"},"gardener/machine-controller-manager#769"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/elankath"},"@elankath"),")")),(0,n.kt)("h2",{id:"-new-features-1"},"\u2728 New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," Machine object won't turn from ",(0,n.kt)("inlineCode",{parentName:"li"},"Pending"),"  to ",(0,n.kt)("inlineCode",{parentName:"li"},"Running")," state if ",(0,n.kt)("inlineCode",{parentName:"li"},"node.gardener.cloud/critical-components-not-ready")," taint is there on the corresponding node. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/778"},"gardener/machine-controller-manager#778"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimonKienzler"},"@SimonKienzler"),")")),(0,n.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," An edge case where all the machineSets were scaled down to zero has been dealt with. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/803"},"gardener/machine-controller-manager#803"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/773"},"gardener/machine-controller-manager#773"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/schrodit"},"@schrodit"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," An edge case where all the machineSets were scaled down to zero has been dealt with. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/804"},"gardener/machine-controller-manager#804"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/822"},"gardener/machine-controller-manager#822"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rishabh-11"},"@rishabh-11"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/817"},"gardener/machine-controller-manager#817"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")")),(0,n.kt)("h2",{id:"-documentation-1"},"\ud83d\udcd6 Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEVELOPER]")," Added proposal for hot-update of resources (instance/Nic/Disk) (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/761"},"gardener/machine-controller-manager#761"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")")),(0,n.kt)("h2",{id:"-others-2"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," ",(0,n.kt)("inlineCode",{parentName:"li"},"CrashloopBackoff")," machines will turn to ",(0,n.kt)("inlineCode",{parentName:"li"},"Running")," quicker (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/806"},"gardener/machine-controller-manager#806"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rishabh-11"},"@rishabh-11"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," CVE categorization for MCM has been added. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/791"},"gardener/machine-controller-manager#791"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dkistner"},"@dkistner"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEVELOPER]")," The API generation now works again. Previously the API docs was generated to a location that was ignored by git and other API docs file was maintained. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/800"},"gardener/machine-controller-manager#800"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEVELOPER]")," Bump ",(0,n.kt)("inlineCode",{parentName:"li"},"k8s.io/*")," dependencies to v1.26.2 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/792"},"gardener/machine-controller-manager#792"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/afritzler"},"@afritzler"),")")),(0,n.kt)("h1",{id:"machine-controller-manager-provider-aws"},"[machine-controller-manager-provider-aws]"),(0,n.kt)("h2",{id:"\ufe0f-breaking-changes-1"},"\u26a0\ufe0f Breaking Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Support for migration of machineClass is dropped by the mcm-provider (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager-provider-aws/pull/118"},"gardener/machine-controller-manager-provider-aws#118"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")")),(0,n.kt)("h2",{id:"-bug-fixes-2"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Fix handling of capacity reservations in ",(0,n.kt)("inlineCode",{parentName:"li"},"MachineClass")," that prevented correct scale up (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager-provider-aws/pull/115"},"gardener/machine-controller-manager-provider-aws#115"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/saley89"},"@saley89"),")")),(0,n.kt)("h2",{id:"-others-3"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Updated golang version to 1.20.4 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager-provider-aws/pull/121"},"gardener/machine-controller-manager-provider-aws#121"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rishabh-11"},"@rishabh-11"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEPENDENCY]")," upgraded dependency: (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager-provider-aws/pull/118"},"gardener/machine-controller-manager-provider-aws#118"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"github.com/gardener/machine-controller-manager -> v0.49.1")))),(0,n.kt)("h1",{id:"terraformer"},"[terraformer]"),(0,n.kt)("h2",{id:"-others-4"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Update alpine base image to ",(0,n.kt)("inlineCode",{parentName:"li"},"v3.17.3")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/terraformer/pull/136"},"gardener/terraformer#136"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kon-angelo"},"@kon-angelo"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Terrafomer base image has been updated from ",(0,n.kt)("inlineCode",{parentName:"li"},"alpine:3.17.2")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"alpine:3.18.0")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/terraformer/pull/137"},"gardener/terraformer#137"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MartinWeindel"},"@MartinWeindel"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Builder base image has been updated from ",(0,n.kt)("inlineCode",{parentName:"li"},"golang:1.19.6")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"golang:1.20.4")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/terraformer/pull/137"},"gardener/terraformer#137"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MartinWeindel"},"@MartinWeindel"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Gardener dependency has been updated from ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.59.1")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.71.2")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/terraformer/pull/137"},"gardener/terraformer#137"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MartinWeindel"},"@MartinWeindel"),")"))))}h.isMDXComponent=!0}}]);