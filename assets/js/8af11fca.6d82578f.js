"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33948],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(96540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}},90283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"architecture-configuration/23ke-config-secret","title":"The 23KE config secret","description":"Via the 23ke-config secret, some basic parameters for the resulting Gardener installation are configured. In particular, values which should be kept secret such as dnsprovider credentials are set in 23k-config.","source":"@site/versioned_docs/version-1.78.x/architecture-configuration/23ke-config-secret.md","sourceDirName":"architecture-configuration","slug":"/architecture-configuration/23ke-config-secret","permalink":"/docs/1.78.x/architecture-configuration/23ke-config-secret","draft":false,"unlisted":false,"editUrl":"https://github.com/yakecloud/yake/tree/main/docs/versioned_docs/version-1.78.x/architecture-configuration/23ke-config-secret.md","tags":[],"version":"1.78.x","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Architecture","permalink":"/docs/1.78.x/architecture-configuration/architecture"},"next":{"title":"The 23KE config git repository","permalink":"/docs/1.78.x/architecture-configuration/23ke-config-gitrepo"}}');var l=n(74848),i=n(28453);const r={sidebar_position:2},d="The 23KE config secret",c={},x=[];function a(e){const t={a:"a",br:"br",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"the-23ke-config-secret",children:"The 23KE config secret"})}),"\n",(0,l.jsxs)(t.p,{children:["Via the ",(0,l.jsx)(t.code,{children:"23ke-config"})," secret, some basic parameters for the resulting Gardener installation are configured. In particular, values which should be kept secret such as dnsprovider credentials are set in ",(0,l.jsx)(t.code,{children:"23k-config"}),".\nAs the ",(0,l.jsx)(t.code,{children:"23ke-config"})," secret serves as input values for the ",(0,l.jsx)(t.code,{children:"configuration"})," helm chart (see ",(0,l.jsx)(t.a,{href:"/docs/1.78.x/architecture-configuration/architecture",children:"architecture"}),"), the secret is defined as"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: 23ke-config\n  namespace: flux-system\ntype: Opaque\nstringData:\n  values.yaml: |\n  ...\n"})}),"\n",(0,l.jsxs)(t.p,{children:["and the configuration needs to be inserted below ",(0,l.jsx)(t.code,{children:"stringData.values.yaml"}),". The configuration options are listed and explained below."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Field"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Subfield"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Subfield"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"clusterIdentity"})," ",(0,l.jsx)(t.br,{}),"string"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"a unique identifier for your garden cluster"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dashboard"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"clientSecret"})," ",(0,l.jsx)(t.br,{}),"string"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["client secret e.g. some value obtained by ",(0,l.jsx)(t.code,{children:"openssl rand -hex 20"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"sessionSecret"})," ",(0,l.jsx)(t.br,{}),"string"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["session secret e.g. some value obtained by ",(0,l.jsx)(t.code,{children:"openssl rand -hex 20"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"kubeApiServer"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"basicAuthPassword"})," ",(0,l.jsx)(t.br,{}),"string"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["basic auth password for kubeapiserver e.g. ",(0,l.jsx)(t.code,{children:"openssl rand -hex 20"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"issuer"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"acme"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"email"})," ",(0,l.jsx)(t.br,{}),"string"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Email address used for certificate handlin"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"server"})," ",(0,l.jsx)(t.br,{}),"string"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"acme server, letsencryp production by default"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"ca"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ca of the acme server, not needed when using letsencrypt production"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"domains"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"global"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"global means used for ingress, gardener defaultDomain and internalDomain"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"domain"})," ",(0,l.jsx)(t.br,{}),"string"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"domain for your gardener installation, e.g. the dashboard will appear under dashboard.domain"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"provider"})," ",(0,l.jsx)(t.br,{}),"string"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"DNS provider for your installation, e.g. azure-dns, aws-route53, openstack-designate etc."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"credentials"})," ",(0,l.jsx)(t.br,{}),(0,l.jsx)(t.a,{href:"https://github.com/gardener/external-dns-management/tree/master/examples",children:"dnscredentials"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["DNS provider credential, see ",(0,l.jsx)(t.a,{href:"https://github.com/gardener/external-dns-management/tree/master/examples",children:"examples"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"registryOverwrite"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["See Guide ",(0,l.jsx)(t.a,{href:"/docs/1.78.x/guides/registryOverwrite",children:"Use different container registry"})]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}}}]);