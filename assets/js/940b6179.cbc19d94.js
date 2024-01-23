"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18412],{17992:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(85893),s=t(11151);const o={sidebar_position:2,title:"Installation"},a=void 0,l={id:"installation/installation",title:"Installation",description:"Most easily, the installation can be performed by 23kectl, a configuration wizard for a basic setup. It is recommended to start with a basic setup and tweak it afterwards to the desired behavior.",source:"@site/versioned_docs/version-1.66.x/installation/installation.md",sourceDirName:"installation",slug:"/installation/",permalink:"/yake/docs/1.66.x/installation/",draft:!1,unlisted:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.66.x/installation/installation.md",tags:[],version:"1.66.x",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/yake/docs/1.66.x/installation/prerequisites"},next:{title:"Guides",permalink:"/yake/docs/1.66.x/category/guides"}},r={},c=[{value:"Basic Install Command",id:"basic-install-command",level:2},{value:"Help Commands",id:"help-commands",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Most easily, the installation can be performed by ",(0,i.jsx)(n.a,{href:"https://github.com/23technologies/23kectl",children:"23kectl"}),", a configuration wizard for a basic setup. It is recommended to start with a basic setup and tweak it afterwards to the desired behavior."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-install-command",children:"Basic Install Command"}),"\n",(0,i.jsxs)(n.p,{children:["Once your environment fulfills the ",(0,i.jsx)(n.a,{href:"./prerequisites",children:"prerequisites"})," and you have ",(0,i.jsx)(n.a,{href:"https://github.com/23technologies/23kectl",children:"23kectl"})," installed, you can start the installation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export KUBECONFIG=KUBECONFIG_FOR_BASE_CLUSTER\n23kectl install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command will create a ",(0,i.jsx)(n.code,{children:"config.yaml"})," file in the current directory which stores the configuration options collected by the wizard. If you do not want to export the ",(0,i.jsx)(n.code,{children:"KUBECONFIG"})," variable and/or use another configuration file name you can also run ",(0,i.jsx)(n.code,{children:"23kectl"})," like so"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"23kectl install --kubeconfig KUBECONFIG_FOR_BASE_CLUSTER --config=another-config.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After completing the wizard, you can watch the installation process in the cluster. Using ",(0,i.jsx)(n.code,{children:"kubectl"}),", you can watch flux resources like ",(0,i.jsx)(n.code,{children:"helmreleases"})," or ",(0,i.jsx)(n.code,{children:"kustomizations"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"kubectl get -n flux-system helmrelease --watch\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"kubectl get -n flux-system kustomization --watch\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once all ",(0,i.jsx)(n.code,{children:"helmreleases"}),' are in the "reconcile succeeded" state, the installation is complete.']}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For further configuration, see the ",(0,i.jsx)(n.a,{href:"/docs/category/architecture--configuration",children:"architecture and configuration"}),".\nIf you are interested in more sophisticated setups, have a look at the ",(0,i.jsx)(n.a,{href:"/docs/category/guides",children:"guides"})," provided in this documentation."]})}),"\n",(0,i.jsx)(n.h2,{id:"help-commands",children:"Help Commands"}),"\n",(0,i.jsx)(n.p,{children:"If you like to get some help on the command line you can invoke"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"23kectl install -h\n"})}),"\n",(0,i.jsx)(n.p,{children:"However, you will find more comprehensive information in this documentation."}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.p,{children:["If the installation process fails, i.e. ",(0,i.jsx)(n.code,{children:"helmrelease"}),"s and/or ",(0,i.jsx)(n.code,{children:"kustomization"}),"s do not get into a healthy state, you should"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check the credentials in your config file. If you have a typo somewhere, correct it and run the install command again."}),"\n",(0,i.jsxs)(n.li,{children:["Check whether your cloud credentials such as the DNS provider credentials are allowed to perform the required actions. Also consult the ",(0,i.jsx)(n.a,{href:"https://gardener.cloud/docs/",children:"Gardener documentation"})," in that case."]}),"\n",(0,i.jsxs)(n.li,{children:["Check which ",(0,i.jsx)(n.code,{children:"helmrelease"})," fails and check the resources deployed by this ",(0,i.jsx)(n.code,{children:"helmrelease"})," for ",(0,i.jsx)(n.code,{children:"events"})," showing errors."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If none of these help, there could be an issue in your base infrastructure. In that case, contact us or ",(0,i.jsx)(n.a,{href:"https://github.com/23technologies/23kectl/issues",children:"file an issue"}),". We're always happy to help."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(67294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);