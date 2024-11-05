"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74106],{2141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"guides/serviceaccount-tokens","title":"ServiceAccounts and Tokens","description":"For automated operations, you can create a ServiceAccount in either:","source":"@site/versioned_docs/version-1.106.x/guides/serviceaccount-tokens.md","sourceDirName":"guides","slug":"/guides/serviceaccount-tokens","permalink":"/docs/guides/serviceaccount-tokens","draft":false,"unlisted":false,"editUrl":"https://github.com/yakecloud/yake/tree/main/docs/versioned_docs/version-1.106.x/guides/serviceaccount-tokens.md","tags":[],"version":"1.106.x","sidebarPosition":50,"frontMatter":{"sidebar_position":50},"sidebar":"tutorialSidebar","previous":{"title":"Authentication with OpenID Connect","permalink":"/docs/guides/openid-connect"},"next":{"title":"FAQ","permalink":"/docs/faq"}}');var i=t(74848),o=t(28453);const r={sidebar_position:50},a="ServiceAccounts and Tokens",s={},u=[{value:"ServiceAccount in the Gardener API",id:"serviceaccount-in-the-gardener-api",level:2},{value:"ServiceAccount in the Shoot",id:"serviceaccount-in-the-shoot",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"serviceaccounts-and-tokens",children:"ServiceAccounts and Tokens"})}),"\n",(0,i.jsx)(n.p,{children:"For automated operations, you can create a ServiceAccount in either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The Gardener API to:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create, delete, modify Shoots"}),"\n",(0,i.jsx)(n.li,{children:"Create new admin kubeconfigs for Shoots"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["A specific Shoot:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"With fine-grained RBAC for certain namespaces in a cluster"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"serviceaccount-in-the-gardener-api",children:"ServiceAccount in the Gardener API"}),"\n",(0,i.jsx)(n.p,{children:"The easiest way to create a ServiceAccount for the Gardener API is via the Gardener Dashboard in the Members Page of a Project. You can then download a kubeconfig for a ServiceAccount to use it with kubectl, with a default token duration of 30 days."}),"\n",(0,i.jsx)(n.p,{children:"A ServiceAccount needs to be assigned Roles to read and write certain resources. A ServiceAccount with the Service Account Manager Role can create new tokens for itself with longer durations, which we can use to automate prolonged access. This example would generate a new token and save it to the existing kubeconfig file, which could be done periodically (until access gets revoked)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export KUBECONFIG=from-dashboard-kubeconfig.yaml\nNEW_TOKEN="$(kubectl create token my-serviceaccount --duration=48h)"\nkubectl config set-credentials my-serviceaccount --token=$NEW_TOKEN\n'})}),"\n",(0,i.jsx)(n.p,{children:"There is currently no explicit limit for the maximum allowed token duration. Please be aware that this could change in the future, and the API could return a token with a shorter duration than requested."}),"\n",(0,i.jsx)(n.h2,{id:"serviceaccount-in-the-shoot",children:"ServiceAccount in the Shoot"}),"\n",(0,i.jsx)(n.p,{children:"The Gardener API will only provide certificate-based Admin (full Shoot access) or Viewer (read-only access) kubeconfigs for a Shoot. Such kubeconfig files have an embedded client certificate with a set expiration date and cannot be revoked earlier than that, other than rotating the entire cluster Certificate Authority. It is not possible to create fine-grained RBAC to limit or extend the permissions of such a kubeconfig."}),"\n",(0,i.jsx)(n.p,{children:"This is why you should only use ServiceAccounts for automated operations of a cluster. ServiceAccounts can be deleted, audited, and have the exact permissions required. Here's how to create a ServiceAccount in the default Namespace, create a Token with a certain duration, and create a new kubeconfig file that contains that token:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl create serviceaccount my-service-account\n\nCLUSTER_NAME=$(kubectl config view --minify -o jsonpath='{.clusters[0].name}')\nCLUSTER_SERVER=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')\nCA_CERT=$(kubectl config view --minify --raw -o jsonpath='{.clusters[0].cluster.certificate-authority-data}')\nTOKEN=$(kubectl create token my-service-account --duration=48h)\n\ncat << EOF > sa-kubeconfig.yaml\napiVersion: v1\nkind: Config\nclusters:\n- name: ${CLUSTER_NAME}\ncluster:\n certificate-authority-data: ${CA_CERT}\n server: ${CLUSTER_SERVER}\ncontexts:\n- name: my-service-account@${CLUSTER_NAME}\ncontext:\n cluster: ${CLUSTER_NAME}\n user: my-service-account\ncurrent-context: my-service-account@${CLUSTER_NAME}\nusers:\n- name: my-service-account\nuser:\n token: ${TOKEN}\nEOF\n\nexport KUBECONFIG=sa-kubeconfig.yaml\nkubectl auth can-i --list\n...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You then need to create ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"RBAC"})," to allow that ServiceAccount certain operations."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var c=t(96540);const i={},o=c.createContext(i);function r(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);