"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70240],{28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var i=n(96540);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:r},e.children)}},32180:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"guides/registryOverwrite","title":"Use custom container registry","description":"YAKE in its default configuration will use container images from public container registries, whichever the developers of the respective component decided to publish to \\"upstream\\". Larger installations could run into rate limits of specific registries or have other reasons not to use those registries directly, and pull the same images from a registry mirror instead.","source":"@site/versioned_docs/version-1.87.x/guides/registryOverwrite.md","sourceDirName":"guides","slug":"/guides/registryOverwrite","permalink":"/docs/1.87.x/guides/registryOverwrite","draft":false,"unlisted":false,"editUrl":"https://github.com/yakecloud/yake/tree/main/docs/versioned_docs/version-1.87.x/guides/registryOverwrite.md","tags":[],"version":"1.87.x","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"tutorialSidebar","previous":{"title":"Scaling out with Managed Seeds","permalink":"/docs/1.87.x/guides/managed-seeds"},"next":{"title":"Authentication with OpenID Connect","permalink":"/docs/1.87.x/guides/openid-connect"}}');var t=n(74848),s=n(28453);const o={sidebar_position:30},l="Use custom container registry",c={},a=[{value:"Full example",id:"full-example",level:2},{value:"Replacement mechanism examples",id:"replacement-mechanism-examples",level:2},{value:"Flux configuration to change repository",id:"flux-configuration-to-change-repository",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"use-custom-container-registry",children:"Use custom container registry"})}),"\n",(0,t.jsx)(r.p,{children:'YAKE in its default configuration will use container images from public container registries, whichever the developers of the respective component decided to publish to "upstream". Larger installations could run into rate limits of specific registries or have other reasons not to use those registries directly, and pull the same images from a registry mirror instead.'}),"\n",(0,t.jsx)(r.p,{children:"For environments that prefer and can provide an internal registry, YAKE has a config switch to easily reconfigure all components to pull from this registry."}),"\n",(0,t.jsxs)(r.p,{children:["The setup and mirroring procedure of such an internal registry mirror is not covered in this guide. We use and recommend harbors ",(0,t.jsx)(r.a,{href:"https://goharbor.io/docs/2.1.0/administration/configure-proxy-cache/",children:"proxy cache"})," mode, as it won't require to identify, pull and push each single image in each version/tag beforehand, which will change frequently and even with patch updates."]}),"\n",(0,t.jsxs)(r.p,{children:["This feature only affects components deployed by YAKE and Gardener, from the basecluster down to each shoot node (f.e. ",(0,t.jsx)(r.code,{children:"calico-node"})," pods), but will not alter anything else deployed to a shoot or custom deployments on the basecluster."]}),"\n",(0,t.jsx)(r.h2,{id:"full-example",children:"Full example"}),"\n",(0,t.jsxs)(r.p,{children:["The registryOverwrite configuration option in ",(0,t.jsx)(r.code,{children:"yake-config"}),' allows you to specify replacement pairs as "originalURL: replacementURL", and will then look for and replace all registries that start with ',(0,t.jsx)(r.code,{children:"originalURL"})," and replace that part of the full path with ",(0,t.jsx)(r.code,{children:"replacementURL"}),". If you only want to mirror certain upstream registries, for example docker.io because of rate limits, you can only specify that and everything else will be left unchanged. To pull all containers currently used in YAKE from your internal registry you need all of the following overwrites:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"registryOverwrite:\n  eu.gcr.io: myregistry.io/eu.gcr.io\n  registry.k8s.io: myregistry.io/registry.k8s.io\n  quay.io: myregistry.io/quay.io\n  docker.io: myregistry.io/docker.io\n  gcr.io: myregistry.io/gcr.io\n  ghcr.io: myregistry.io/ghcr.io\n  registry.k8s.io: myregistry.io/registry.k8s.io\n  mcr.microsoft.com: myregistry.io/mcr.microsoft.com\n  public.ecr.aws: myregistry.io/public.ecr.aws\n  registry.eu-central-1.aliyuncs.com: myregistry.io/registry.eu-central-1.aliyuncs.com\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Replacements look only for the ",(0,t.jsx)(r.em,{children:"prefix"})," of the full repository path. Wildcards or other expressions are currently not supported, so certain mirror layouts would require a very lengthy replacement map. We recommend to follow a structure similar to the one above, so one project or folder or subfolder for each upstream registry, and inside of that the same structure as the original registry uses."]}),"\n",(0,t.jsx)(r.h2,{id:"replacement-mechanism-examples",children:"Replacement mechanism examples"}),"\n",(0,t.jsx)(r.p,{children:"Given the following replacement map"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"registryOverwrite:\n  eu.gcr.io: myregistry.io/eu.gcr.io\n"})}),"\n",(0,t.jsx)(r.p,{children:"the following replacements would be performed"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Original"}),(0,t.jsx)(r.th,{children:"Will be replaced?"}),(0,t.jsx)(r.th,{children:"Replacement"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eu.gcr.io/examplefolder/example1"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"myregistry.io/eu.gcr.io/examplefolder/example1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eu.gcr.io/otherexample/example2"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"myregistry.io/eu.gcr.io/otherexample/example2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"registry.k8s.io/kube-apiserver"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.p,{children:"Given the following replacement map"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"registryOverwrite:\n  eu.gcr.io/examplefolder: myregistry.io/mirror-example\n"})}),"\n",(0,t.jsx)(r.p,{children:"the following replacements would be performed"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Original"}),(0,t.jsx)(r.th,{children:"Will be replaced?"}),(0,t.jsx)(r.th,{children:"Replacement"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eu.gcr.io/examplefolder/example1"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"myregistry.io/mirror-example/example1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eu.gcr.io/otherexample/example2"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"registry.k8s.io/kube-apiserver"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.p,{children:"Given the following replacement map"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"registryOverwrite:\n  eu.gcr.io/examplefolder: myregistry.io/mirror-example\n  eu.gcr.io/otherexample: myregistry.io/mirror-example\n  registry.k8s.io: myregistry.io/mirror-example\n"})}),"\n",(0,t.jsx)(r.p,{children:"the following replacements would be performed"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Original"}),(0,t.jsx)(r.th,{children:"Will be replaced?"}),(0,t.jsx)(r.th,{children:"Replacement"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eu.gcr.io/examplefolder/example1"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"myregistry.io/mirror-example/example1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eu.gcr.io/otherexample/example2"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"myregistry.io/mirror-example/example2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"registry.k8s.io/kube-apiserver"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"myregistry.io/mirror-example/kube-apiserver"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.p,{children:"Given the following replacement map"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"registryOverwrite:\n  gcr.io: myregistry.io\n"})}),"\n",(0,t.jsx)(r.p,{children:"the following replacements would be performed"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Original"}),(0,t.jsx)(r.th,{children:"Will be replaced?"}),(0,t.jsx)(r.th,{children:"Replacement"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eu.gcr.io/examplefolder/example1"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eu.gcr.io/otherexample/example2"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"registry.k8s.io/kube-apiserver"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"flux-configuration-to-change-repository",children:"Flux configuration to change repository"}),"\n",(0,t.jsx)(r.p,{children:"YAKE includes flux's controllers in a specific version and installs available updates with each release. Due to the way we include flux, unfortunately it can't use the registryOverwrite map to change where the flux images are pulled from and needs it's own instructions to use an internal registry."}),"\n",(0,t.jsxs)(r.p,{children:["In your configuration git you will have a file ",(0,t.jsx)(r.code,{children:"flux/yake-base.yaml"}),", that needs to be changed similar to the following example, where you would change the ",(0,t.jsx)(r.code,{children:"newName"})," parameters to point to your internal registry mirror."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: yake-base\n  namespace: flux-system\nspec:\n  interval: 1m0s\n  path: ./\n  prune: false\n  sourceRef:\n    kind: GitRepository\n    name: yake\n  patches:\n    - patch: |-\n        apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\n        kind: Kustomization\n        metadata:\n          name: not-used\n        spec:\n          images:\n            - name: ghcr.io/fluxcd/helm-controller\n              newName: changeme.internal.mirror/ghcr.io/fluxcd/helm-controller\n            - name: ghcr.io/fluxcd/kustomize-controller\n              newName: changeme.internal.mirror/ghcr.io/fluxcd/kustomize-controller\n            - name: ghcr.io/fluxcd/notification-controller\n              newName: changeme.internal.mirror/ghcr.io/fluxcd/notification-controller\n            - name: ghcr.io/fluxcd/source-controller\n              newName: changeme.internal.mirror/ghcr.io/fluxcd/source-controller\n      target:\n        kind: Kustomization\n        name: flux-system\n        namespace: flux-system\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);