"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={slug:"build-cluster-with-caph",title:"Build Cluster with CAPH - the challanges when installing 23KE",authors:"rhizoet",tags:["gardener","caph","k8s"]},o=void 0,i={permalink:"/blog/build-cluster-with-caph",editUrl:"https://github.com/23technologies/23ke-docs/tree/main/blog/2023-05-12-build-cluster-with-caph.md",source:"@site/blog/2023-05-12-build-cluster-with-caph.md",title:"Build Cluster with CAPH - the challanges when installing 23KE",description:"TLDR;",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"gardener",permalink:"/blog/tags/gardener"},{label:"caph",permalink:"/blog/tags/caph"},{label:"k8s",permalink:"/blog/tags/k-8-s"}],readingTime:6.145,hasTruncateMarker:!1,authors:[{name:"Marius Wernicke",title:"DevOps Engineer",url:"https://github.com/rhizoet",imageURL:"https://github.com/rhizoet.png",key:"rhizoet"}],frontMatter:{slug:"build-cluster-with-caph",title:"Build Cluster with CAPH - the challanges when installing 23KE",authors:"rhizoet",tags:["gardener","caph","k8s"]},prevItem:{title:"Gardener Hackathon - May 2023",permalink:"/blog/Gardener Hackathon 2023"},nextItem:{title:"Hack-The-Garden - the Remote Hackathon Experience",permalink:"/blog/hack-the-garden"}},s={authorsImageUrls:[void 0]},u=[{value:"TLDR;",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup the management cluster",id:"setup-the-management-cluster",level:2},{value:"Modifications",id:"modifications",level:3},{value:"Setup the worker cluster",id:"setup-the-worker-cluster",level:2},{value:"Install of 23KE",id:"install-of-23ke",level:2},{value:"Summary",id:"summary",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tldr"},"TLDR;"),(0,r.kt)("p",null,"We recently built new Kubernetes clusters on Hetzner Cloud. We had several challenges to get the cluster up and running."),(0,r.kt)("p",null,"This started with the selection of the correct Kubernetes version, the CNI solution and the actual deployment of 23KE. Spoiler: We had to change the CNI solution and reset containerd."),(0,r.kt)("p",null,"If these instructions in this blog post are followed, you can build a working Gardener cluster. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Table of Contents")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tldr"},"TLDR;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-the-management-cluster"},"Setup the management cluster"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#modifications"},"Modifications")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-the-worker-cluster"},"Setup the worker cluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-of-23ke"},"Install of 23KE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#summary"},"Summary"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In times of rising costs and the reduction of the CO",(0,r.kt)("sub",null,"2")," footprint in all areas of life, we also wanted to reduce these sustainably in our day-to-day operations."),(0,r.kt)("p",null,"We had been running okeanos.dev on a managed kubernetes cluster on Azure. This is very expensive so we wanted to minimize these costs. In this case, the European cloud from Hetzner was the obvious choice. The following question was how we could best build a k8s cluster there."),(0,r.kt)("p",null,"After some research, ClusterAPI provider for Hetzner (CAPH) from ",(0,r.kt)("a",{parentName:"p",href:"https://syself.com/"},"Syself")," turned out to be the optimal solution."),(0,r.kt)("p",null,"When testing the provider, we had to overcome a few challenges, which we would like to discuss in the following."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You need to install some basic tools to work with CAPH and Gardener. It makes sense to set up a management vm (on Hetzner) running a kind cluster and on it the management cluster. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker-engine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installing-from-release-binaries"},"kind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cluster-api.sigs.k8s.io/user/quick-start.html#install-clusterctl"},"clusterctl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"kubectl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/installation/"},"flux")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://k9scli.io/topics/install/"},"k9s"))),(0,r.kt)("h2",{id:"setup-the-management-cluster"},"Setup the management cluster"),(0,r.kt)("p",null,"To start, let's create a kind cluster with a customized Kubernetes version (Currently it is important that the kubernetes version is ",(0,r.kt)("inlineCode",{parentName:"p"},">1.26"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster -n my-cluster --image=kindest/node:v1.25.9\n")),(0,r.kt)("p",null,"When the cluster is up, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/syself/cluster-api-provider-hetzner/blob/main/docs/topics/preparation.md"},"initialize the management cluster")," with CAPH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"clusterctl init --core cluster-api --bootstrap kubeadm --control-plane kubeadm --infrastructure hetzner\n")),(0,r.kt)("p",null,"and export your environment variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export HCLOUD_SSH_KEY="MY_SSH_KEY" \\\nexport CLUSTER_NAME="my-cluster" \\\nexport HCLOUD_REGION="nbg1" \\\nexport CONTROL_PLANE_MACHINE_COUNT=3 \\\nexport WORKER_MACHINE_COUNT=3 \\\nexport KUBERNETES_VERSION=1.25.9 \\\nexport HCLOUD_CONTROL_PLANE_MACHINE_TYPE=cpx31 \\\nexport HCLOUD_WORKER_MACHINE_TYPE=cpx41 \\\nexport HCLOUD_TOKEN="YOUR_HCLOUD_TOKEN_HERE"\n')),(0,r.kt)("p",null,"The region can be for sure anything else like ",(0,r.kt)("inlineCode",{parentName:"p"},"hel1"),"."),(0,r.kt)("p",null,"To be able to build the machines a secret must be created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic hetzner --from-literal=hcloud=$HCLOUD_TOKEN\n")),(0,r.kt)("p",null,"You can also still build yourself a customized node image, but we didn't do that. We used the Ubuntu 22.04 image, which is available from Hetzner."),(0,r.kt)("p",null,"Now let's create the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-cluster.yaml")," with the private network flavor as in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/syself/cluster-api-provider-hetzner/blob/main/docs/topics/quickstart.md"},"quickstart-guide"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"clusterctl generate cluster my-cluster --kubernetes-version v1.25.9 --control-plane-machine-count=3 --worker-machine-count=3 --flavor hcloud-network > my-cluster.yaml\n")),(0,r.kt)("h3",{id:"modifications"},"Modifications"),(0,r.kt)("p",null,"After creation you need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-cluster.yaml"),". Remove the following blocks (it gives two of them) because we need to reset the containerd config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- - content: |\n-     version = 2\n-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]\n-       runtime_type = "io.containerd.runc.v2"\n-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]\n-       SystemdCgroup = true\n-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.crun]\n-       runtime_type = "io.containerd.runc.v2"\n-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.crun.options]\n-       BinaryName = "crun"\n-       Root = "/usr/local/sbin"\n-       SystemdCgroup = true\n-     [plugins."io.containerd.grpc.v1.cri".containerd]\n-       default_runtime_name = "crun"\n-     [plugins."io.containerd.runtime.v1.linux"]\n-       runtime = "crun"\n-       runtime_root = "/usr/local/sbin"\n-   owner: root:root\n-   path: /etc/containerd/config.toml\n-   permissions: "0744"\n')),(0,r.kt)("p",null,"and add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+ - mkdir /etc containerd\n+ - containerd config default > /etc/containerd/confi.toml\n+ - sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml\n  - systemctl daemon-reload && systemctl enable containerd && systemctl start containerd\n+ - sysctl fs.inotify.max_user_instances=8192\n+ - sysctl fs.inotify.max_user_watches=524288\n")),(0,r.kt)("p",null,"The containerd-config is missing some options. In addition, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SystemdCgroup")," must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"inotify")," settings needs to be increased. Only then the ",(0,r.kt)("inlineCode",{parentName:"p"},"vpn-seed-server")," starts, which is created when a shoot is created."),(0,r.kt)("p",null,"When you have finished the modification, you can start building the worker cluster by appling the modified file on the management cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f my-cluster.yaml\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"watch clusterctl describe cluster my-cluster")," you can watch one control-plane and three workers are being built."),(0,r.kt)("h2",{id:"setup-the-worker-cluster"},"Setup the worker cluster"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," From now on you should make sure that you are working on the newly built cluster. Make sure that you have exported the Kubeconfig for the worker cluster!")),(0,r.kt)("p",null,"Get the kubeconfig of the worker cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"clusterctl get kubeconfig my-cluster > /path/to/my/worker-cluster.kc\n")),(0,r.kt)("p",null,"and export it to work on the cluster (you can do this on your local machine. You don't need to work anymore on the management vm):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=/path/to/my/worker-cluster.kc\n")),(0,r.kt)("p",null,'At the point of "Deploy a CNI solution" keep in mind not to install cilium like in the guide but ',(0,r.kt)("a",{parentName:"p",href:"https://docs.tigera.io/calico/latest/getting-started/kubernetes/helm"},"calico"),". We had a lot of trouble with cilium."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add projectcalico https://docs.tigera.io/calico/charts\nkubectl create namespace tigera-operator\nhelm install calico projectcalico/tigera-operator --version v3.25.1 --namespace tigera-operator\n")),(0,r.kt)("p",null,"Wait till calico is ready."),(0,r.kt)("p",null,"Now deploy the CCM for hcloud only. Set ",(0,r.kt)("inlineCode",{parentName:"p"},"privateNetwork.enabled=true")," because we need a private network to function properly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add syself https://charts.syself.com\nhelm upgrade --install ccm syself/ccm-hcloud --version 1.0.11 \\\n  --namespace kube-system \\\n  --set secret.name=hetzner \\\n  --set secret.tokenKeyName=hcloud \\\n  --set privateNetwork.enabled=true\n")),(0,r.kt)("p",null,"At the end we need a CSI to build volumes on hcloud:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat << EOF > csi-values.yaml\nstorageClasses:\n  - name: hcloud-volumes\n    defaultStorageClass: true\n    reclaimPolicy: Retain\nEOF\n\nhelm upgrade --install csi syself/csi-hcloud --version 0.2.0 \\\n  --namespace kube-system -f csi-values.yaml\n")),(0,r.kt)("p",null,"The remaining control planes should now be built and added to the cluster. Wait until the entire cluster has ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," status before proceeding."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:")),' If you want to transform the workload cluster into a management cluster, you need to do the "move"-steps in the guide. But its recommended to have a management vm with kind installed and hold there the management cluster.')),(0,r.kt)("h2",{id:"install-of-23ke"},"Install of 23KE"),(0,r.kt)("p",null,"If you plan to install 23KE, you need to keep in mind that there are a few customizations that need to be made for hcloud."),(0,r.kt)("p",null,"If you have installed 23KE and the data from the installation is in a repository, the following file need to be adjusted."),(0,r.kt)("p",null,"Add the following lines in ",(0,r.kt)("inlineCode",{parentName:"p"},"gardenlet-values.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'settings:\n+ loadBalancerServices:\n+   annotations:\n+     load-balancer.hetzner.cloud/location: nbg1\n+     load-balancer.hetzner.cloud/ipv6-disabled: "true"\n+     load-balancer.hetzner.cloud/disable-private-ingress: "true"\n')),(0,r.kt)("p",null,"Commit and push your changes. You can execute a ",(0,r.kt)("inlineCode",{parentName:"p"},"flux reconcile source git 23ke-config")," to speed up the things."),(0,r.kt)("p",null,"If any ingress won't get a public IP, you can add some annotations manualy e.g. for ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl annotate svc -n garden nginx-ingress-controller load-balancer.hetzner.cloud/location=nbg1 \\\n  load-balancer.hetzner.cloud/ipv6-disabled=true \\\n  load-balancer.hetzner.cloud/disable-private-ingress=true\n")),(0,r.kt)("p",null,"Now all things should come up as well as e.g. the dashboard should be accessible. If something is not running smoothly, the cluster can be inspected with k9s and you have an easy overview of what the problem is."),(0,r.kt)("p",null,"In the next steps, secrets can be added to connect to a public or private cloud. With these and a cloudprofile it is then possible to build and run shoots (k8s clusters)."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"With all these steps, it is possible for you to build a functional Gardener cluster on Hetzner Cloud. With this you can run a low cost K8s cluster and run what you want on it. Whereas 23KE is already very cool."),(0,r.kt)("p",null,"This setup has allowed us to drastically reduce the cost of a fully functional Gardener. As a pleasant side effect, we are no longer dependent on a cloud in the US, but now run Gardener in a data center in Germany with a German operator that is GDPR compliant and uses green electricity (good for our CO",(0,r.kt)("sub",null,"2")," footprint)."))}p.isMDXComponent=!0}}]);