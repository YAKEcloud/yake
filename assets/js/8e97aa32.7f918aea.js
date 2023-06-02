"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(r),p=n,g=h["".concat(d,".").concat(p)]||h[p]||m[p]||i;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[h]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={hide_table_of_contents:!0},l="Release Notes next",o={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},d={},s=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83c\udfc3 Others",id:"-others-4",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-5",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-6",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"\ud83d\udcd6 Documentation",id:"-documentation",level:2},{value:"\ud83c\udfc3 Others",id:"-others-7",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-3",level:2},{value:"\u2728 New Features",id:"-new-features",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-3",level:2},{value:"\ud83d\udcd6 Documentation",id:"-documentation-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-8",level:2},{value:"\ud83c\udfc3 Others",id:"-others-9",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83c\udfc3 Others",id:"-others-10",level:2},{value:"\ud83c\udfc3 Others",id:"-others-11",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-4",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-5",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-6",level:2}],u={toc:s};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,n.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Before upgrade",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The 23KE configuration chart was unified and moved, so resources need to be annotated to get adopted by the new chart name. To prevent the old charts from deleting resources when they get removed, they need to get suspended first.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"flux suspend hr pre-gardener-configuration\nflux suspend hr gardener-configuration\nkubectl -n flux-system annotate Secret -l helm.toolkit.fluxcd.io/name=pre-gardener-configuration meta.helm.sh/release-name=configuration --overwrite\nkubectl -n flux-system annotate Secret -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=configuration --overwrite\nkubectl -n garden annotate Secret -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\nkubectl -n flux-system annotate Certificate -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\nkubectl -n flux-system annotate Issuer -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\n")),"If something goes wrong or the charts weren't suspended, other charts might complain about their -base-values Secret missing. To remedy,suspend and then resume the new ",(0,n.kt)("inlineCode",{parentName:"li"},"configuration")," HelmRelease so it re-generates those Secrets.")))),(0,n.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-azure to ",(0,n.kt)("code",null,"1.35.3"))),(0,n.kt)("h1",{id:"gardener-extension-provider-azure"},"[gardener-extension-provider-azure]"),(0,n.kt)("h2",{id:"-others"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Remove the error code check from ",(0,n.kt)("inlineCode",{parentName:"li"},"NodesChecker")," to prevent nil pointer panic. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-azure/pull/684"},"gardener/gardener-extension-provider-azure#684"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-aws to ",(0,n.kt)("code",null,"1.43.2"))),(0,n.kt)("h1",{id:"gardener-extension-provider-aws"},"[gardener-extension-provider-aws]"),(0,n.kt)("h2",{id:"-others-1"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Remove the error code check from ",(0,n.kt)("inlineCode",{parentName:"li"},"NodesChecker")," to prevent nil pointer panic. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/748"},"gardener/gardener-extension-provider-aws#748"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-gcp to ",(0,n.kt)("code",null,"1.29.3"))),(0,n.kt)("h1",{id:"gardener-extension-provider-gcp"},"[gardener-extension-provider-gcp]"),(0,n.kt)("h2",{id:"-others-2"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Remove the error code check from ",(0,n.kt)("inlineCode",{parentName:"li"},"NodesChecker")," to prevent nil pointer panic. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-gcp/pull/595"},"gardener/gardener-extension-provider-gcp#595"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-openstack to ",(0,n.kt)("code",null,"1.33.3"))),(0,n.kt)("h1",{id:"gardener-extension-provider-openstack"},"[gardener-extension-provider-openstack]"),(0,n.kt)("h2",{id:"-others-3"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Remove the error code check from ",(0,n.kt)("inlineCode",{parentName:"li"},"NodesChecker")," to prevent nil pointer panic. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-openstack/pull/622"},"gardener/gardener-extension-provider-openstack#622"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update gardener-controlplane to ",(0,n.kt)("code",null,"1.70.2"))),(0,n.kt)("h1",{id:"gardener"},"[gardener]"),(0,n.kt)("h2",{id:"\ufe0f-breaking-changes"},"\u26a0\ufe0f Breaking Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," Gardener denies setting ",(0,n.kt)("inlineCode",{parentName:"li"},"Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type")," if shoot is hibernated. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7920"},"gardener/gardener#7920"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,n.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," A bug has been fixed which could cause ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-proxy"),"s from being missing after a ",(0,n.kt)("inlineCode",{parentName:"li"},"Shoot")," has been woken up from hibernation. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7917"},"gardener/gardener#7917"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue has been fixed that caused traffic from outside of the cluster to ",(0,n.kt)("inlineCode",{parentName:"li"},"Istio-Ingress")," being blocked. This is only relevant if seed(s) specify additional load balancer annotations via ",(0,n.kt)("inlineCode",{parentName:"li"},"seed.spec.settings.loadBalancerServices.annotations"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7911"},"gardener/gardener#7911"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,n.kt)("h2",{id:"-others-4"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing panic in the health check for extension is fixed. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7914"},"gardener/gardener#7914"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update gardener-controlplane to ",(0,n.kt)("code",null,"1.70.2"))),(0,n.kt)("h1",{id:"gardener-1"},"[gardener]"),(0,n.kt)("h2",{id:"\ufe0f-breaking-changes-1"},"\u26a0\ufe0f Breaking Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," Gardener denies setting ",(0,n.kt)("inlineCode",{parentName:"li"},"Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type")," if shoot is hibernated. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7920"},"gardener/gardener#7920"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,n.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," A bug has been fixed which could cause ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-proxy"),"s from being missing after a ",(0,n.kt)("inlineCode",{parentName:"li"},"Shoot")," has been woken up from hibernation. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7917"},"gardener/gardener#7917"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue has been fixed that caused traffic from outside of the cluster to ",(0,n.kt)("inlineCode",{parentName:"li"},"Istio-Ingress")," being blocked. This is only relevant if seed(s) specify additional load balancer annotations via ",(0,n.kt)("inlineCode",{parentName:"li"},"seed.spec.settings.loadBalancerServices.annotations"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7911"},"gardener/gardener#7911"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,n.kt)("h2",{id:"-others-5"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing panic in the health check for extension is fixed. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7914"},"gardener/gardener#7914"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update gardenlet to ",(0,n.kt)("code",null,"1.70.2"))),(0,n.kt)("h1",{id:"gardener-2"},"[gardener]"),(0,n.kt)("h2",{id:"\ufe0f-breaking-changes-2"},"\u26a0\ufe0f Breaking Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," Gardener denies setting ",(0,n.kt)("inlineCode",{parentName:"li"},"Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type")," if shoot is hibernated. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7920"},"gardener/gardener#7920"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,n.kt)("h2",{id:"-bug-fixes-2"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," A bug has been fixed which could cause ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-proxy"),"s from being missing after a ",(0,n.kt)("inlineCode",{parentName:"li"},"Shoot")," has been woken up from hibernation. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7917"},"gardener/gardener#7917"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue has been fixed that caused traffic from outside of the cluster to ",(0,n.kt)("inlineCode",{parentName:"li"},"Istio-Ingress")," being blocked. This is only relevant if seed(s) specify additional load balancer annotations via ",(0,n.kt)("inlineCode",{parentName:"li"},"seed.spec.settings.loadBalancerServices.annotations"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7911"},"gardener/gardener#7911"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,n.kt)("h2",{id:"-others-6"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing panic in the health check for extension is fixed. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7914"},"gardener/gardener#7914"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update cloudprofiles to ",(0,n.kt)("code",null,"0.6.2"))),(0,n.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Regiocloud: Change regiocloud-a to RegionA by @JensAc in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-community/cloudprofiles/pull/23"},"https://github.com/gardener-community/cloudprofiles/pull/23"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gardener-community/cloudprofiles/compare/0.6.1...0.6.2"},"https://github.com/gardener-community/cloudprofiles/compare/0.6.1...0.6.2"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-alicloud to ",(0,n.kt)("code",null,"1.46.0"))),(0,n.kt)("h1",{id:"gardener-extension-provider-alicloud"},"[gardener-extension-provider-alicloud]"),(0,n.kt)("h2",{id:"-documentation"},"\ud83d\udcd6 Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEPENDENCY]")," The flags which went out-of-support in MCM v0.49.0 have been cleaned up from MCM deployment yaml. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-alicloud/pull/595"},"gardener/gardener-extension-provider-alicloud#595"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")")),(0,n.kt)("h2",{id:"-others-7"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The ",(0,n.kt)("inlineCode",{parentName:"li"},"gardener-extension-admission-alicloud")," Service in the ",(0,n.kt)("inlineCode",{parentName:"li"},"gardener-extension-admission-alicloud")," chart can now be configured to be topology-aware. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-alicloud/pull/591"},"gardener/gardener-extension-provider-alicloud#591"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The admission/validation component is now adapted such that it works well in garden cluster with enabled ",(0,n.kt)("inlineCode",{parentName:"li"},"NetworkPolicy")," protection (default since ",(0,n.kt)("inlineCode",{parentName:"li"},"gardener/gardener@v1.71")," when garden cluster is managed by ",(0,n.kt)("inlineCode",{parentName:"li"},"gardener-operator"),"). (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-alicloud/pull/599"},"gardener/gardener-extension-provider-alicloud#599"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rfranzke"},"@rfranzke"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The following dependency has been updated: (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-alicloud/pull/600"},"gardener/gardener-extension-provider-alicloud#600"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"github.com/gardener/gardener 1.67.1 -> 1.70.2")))),(0,n.kt)("h1",{id:"machine-controller-manager"},"[machine-controller-manager]"),(0,n.kt)("h2",{id:"\ufe0f-breaking-changes-3"},"\u26a0\ufe0f Breaking Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Removal of the following flags (and corresponding fields in associated structs): 'machine-creation-timeout' 'machine-drain-timeout', 'machine-pv-detach-timeout', 'machine-health-timeout=10m', 'machine-safety-apiserver-statuscheck-timeout', 'machine-safety-apiserver-statuscheck-period', 'machine-safety-orphan-vms-period', 'machine-max-evict-retries', 'node-conditions', 'bootstrap-token-auth-extra-groups', 'delete-migrated-machine-class'. The MCM no longer accepts these flags since these are options handled by the Machine Controller invoked by platform specific provider launchers. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/769"},"gardener/machine-controller-manager#769"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/elankath"},"@elankath"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEVELOPER]")," Deletion of 'Driver.GenerateMachineClassForMigration'. Providers need to adapt to this. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/769"},"gardener/machine-controller-manager#769"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/elankath"},"@elankath"),")")),(0,n.kt)("h2",{id:"-new-features"},"\u2728 New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," Machine object won't turn from ",(0,n.kt)("inlineCode",{parentName:"li"},"Pending"),"  to ",(0,n.kt)("inlineCode",{parentName:"li"},"Running")," state if ",(0,n.kt)("inlineCode",{parentName:"li"},"node.gardener.cloud/critical-components-not-ready")," taint is there on the corresponding node. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/778"},"gardener/machine-controller-manager#778"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimonKienzler"},"@SimonKienzler"),")")),(0,n.kt)("h2",{id:"-bug-fixes-3"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," An edge case where all the machineSets were scaled down to zero has been dealt with. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/803"},"gardener/machine-controller-manager#803"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/773"},"gardener/machine-controller-manager#773"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/schrodit"},"@schrodit"),")")),(0,n.kt)("h2",{id:"-documentation-1"},"\ud83d\udcd6 Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEVELOPER]")," Added proposal for hot-update of resources (instance/Nic/Disk) (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/761"},"gardener/machine-controller-manager#761"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")")),(0,n.kt)("h2",{id:"-others-8"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," ",(0,n.kt)("inlineCode",{parentName:"li"},"CrashloopBackoff")," machines will turn to ",(0,n.kt)("inlineCode",{parentName:"li"},"Running")," quicker (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/806"},"gardener/machine-controller-manager#806"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rishabh-11"},"@rishabh-11"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," CVE categorization for MCM has been added. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/791"},"gardener/machine-controller-manager#791"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dkistner"},"@dkistner"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEVELOPER]")," The API generation now works again. Previously the API docs was generated to a location that was ignored by git and other API docs file was maintained. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/800"},"gardener/machine-controller-manager#800"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEVELOPER]")," Bump ",(0,n.kt)("inlineCode",{parentName:"li"},"k8s.io/*")," dependencies to v1.26.2 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/792"},"gardener/machine-controller-manager#792"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/afritzler"},"@afritzler"),")")),(0,n.kt)("h1",{id:"terraformer"},"[terraformer]"),(0,n.kt)("h2",{id:"-others-9"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Update alpine base image to ",(0,n.kt)("inlineCode",{parentName:"li"},"v3.17.3")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/terraformer/pull/136"},"gardener/terraformer#136"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kon-angelo"},"@kon-angelo"),")")),(0,n.kt)("h2",{id:"docker-images"},"Docker Images"),(0,n.kt)("p",null,"gardener-extension-provider-alicloud: ",(0,n.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.46.0"),"\ngardener-extension-admission-alicloud: ",(0,n.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.46.0"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update shoot-dns-service to ",(0,n.kt)("code",null,"1.34.0"))),(0,n.kt)("h1",{id:"gardener-extension-shoot-dns-service"},"[gardener-extension-shoot-dns-service]"),(0,n.kt)("h2",{id:"-others-10"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The admission/validation component is now adapted such that it works well in garden cluster with enabled ",(0,n.kt)("inlineCode",{parentName:"li"},"NetworkPolicy")," protection (default since ",(0,n.kt)("inlineCode",{parentName:"li"},"gardener/gardener@v1.71")," when garden cluster is managed by ",(0,n.kt)("inlineCode",{parentName:"li"},"gardener-operator"),"). (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-shoot-dns-service/pull/210"},"gardener/gardener-extension-shoot-dns-service#210"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rfranzke"},"@rfranzke"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Exclude external kube-apiserver domain from the ",(0,n.kt)("inlineCode",{parentName:"li"},"external")," DNSProvider (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-shoot-dns-service/pull/213"},"gardener/gardener-extension-shoot-dns-service#213"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MartinWeindel"},"@MartinWeindel"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[DEPENDENCY]")," The following dependency is updated: (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-shoot-dns-service/pull/212"},"gardener/gardener-extension-shoot-dns-service#212"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/shafeeqes"},"@shafeeqes"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"github.com/gardener/gardener: v1.65.3 -> v1.71.0"),(0,n.kt)("li",{parentName:"ul"},"k8s.io/* : v0.26.1 -> v0.26.3"),(0,n.kt)("li",{parentName:"ul"},"sigs.k8s.io/controller-runtime: v0.14.4-> v0.14.6"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update os-gardenlinux to ",(0,n.kt)("code",null,"0.20.0"))),(0,n.kt)("h1",{id:"gardener-extension-os-gardenlinux"},"[gardener-extension-os-gardenlinux]"),(0,n.kt)("h2",{id:"-others-11"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," golang version is now updated to 1.20.4. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-os-gardenlinux/pull/97"},"gardener/gardener-extension-os-gardenlinux#97"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dependabot%5Bbot%5D"},"@dependabot[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Update go.mod to golang 1.20. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-os-gardenlinux/pull/100"},"gardener/gardener-extension-os-gardenlinux#100"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/danielfoehrKn"},"@danielfoehrKn"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The following dependency is updated: (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-os-gardenlinux/pull/94"},"gardener/gardener-extension-os-gardenlinux#94"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dependabot%5Bbot%5D"},"@dependabot[bot]"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"github.com/gardener/gardener: v1.66.0 -> v1.70.2"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-hcloud to ",(0,n.kt)("code",null,"0.6.16"))),(0,n.kt)("h1",{id:"gardener-extension-provider-hcloud-v0616"},"[gardener-extension-provider-hcloud]"," v0.6.16")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-hcloud to ",(0,n.kt)("code",null,"0.6.17"))),(0,n.kt)("h1",{id:"gardener-extension-provider-hcloud-v0617"},"[gardener-extension-provider-hcloud]"," v0.6.17")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update gardener-controlplane to ",(0,n.kt)("code",null,"1.71.3"))),(0,n.kt)("h1",{id:"gardener-3"},"[gardener]"),(0,n.kt)("h2",{id:"-bug-fixes-4"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," A bug causing ",(0,n.kt)("inlineCode",{parentName:"li"},"gardenlet")," to panic when ",(0,n.kt)("inlineCode",{parentName:"li"},"admission-controller")," is upgraded to ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.71")," but gardenlet is still on ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.70"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7989"},"gardener/gardener#7989"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Several low timeouts (30s) that were introduced in v1.71.0 for several steps are now reverted as in some cases the Network/ControlPlane reconciliation cannot succeed for 30s. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8006"},"gardener/gardener#8006"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update gardener-controlplane to ",(0,n.kt)("code",null,"1.71.3"))),(0,n.kt)("h1",{id:"gardener-4"},"[gardener]"),(0,n.kt)("h2",{id:"-bug-fixes-5"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," A bug causing ",(0,n.kt)("inlineCode",{parentName:"li"},"gardenlet")," to panic when ",(0,n.kt)("inlineCode",{parentName:"li"},"admission-controller")," is upgraded to ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.71")," but gardenlet is still on ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.70"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7989"},"gardener/gardener#7989"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Several low timeouts (30s) that were introduced in v1.71.0 for several steps are now reverted as in some cases the Network/ControlPlane reconciliation cannot succeed for 30s. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8006"},"gardener/gardener#8006"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update gardenlet to ",(0,n.kt)("code",null,"1.71.3"))),(0,n.kt)("h1",{id:"gardener-5"},"[gardener]"),(0,n.kt)("h2",{id:"-bug-fixes-6"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," A bug causing ",(0,n.kt)("inlineCode",{parentName:"li"},"gardenlet")," to panic when ",(0,n.kt)("inlineCode",{parentName:"li"},"admission-controller")," is upgraded to ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.71")," but gardenlet is still on ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.70"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7989"},"gardener/gardener#7989"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Several low timeouts (30s) that were introduced in v1.71.0 for several steps are now reverted as in some cases the Network/ControlPlane reconciliation cannot succeed for 30s. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8006"},"gardener/gardener#8006"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))))}h.isMDXComponent=!0}}]);