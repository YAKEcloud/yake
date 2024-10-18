"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48671],{23829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=t(85893),r=t(11151);const l={slug:"build-cluster-with-caph",title:"Build Cluster with CAPH - the challanges when installing 23KE",authors:"rhizoet",tags:["gardener","caph","k8s"]},i=void 0,o={permalink:"/blog/build-cluster-with-caph",editUrl:"https://github.com/yakecloud/yake/tree/main/docs/blog/2023-05-12-build-cluster-with-caph.md",source:"@site/blog/2023-05-12-build-cluster-with-caph.md",title:"Build Cluster with CAPH - the challanges when installing 23KE",description:"TLDR;",date:"2023-05-12T00:00:00.000Z",tags:[{inline:!0,label:"gardener",permalink:"/blog/tags/gardener"},{inline:!0,label:"caph",permalink:"/blog/tags/caph"},{inline:!0,label:"k8s",permalink:"/blog/tags/k-8-s"}],readingTime:6.145,hasTruncateMarker:!1,authors:[{name:"Marius Wernicke",title:"DevOps Engineer",url:"https://github.com/rhizoet",imageURL:"https://github.com/rhizoet.png",key:"rhizoet",page:null}],frontMatter:{slug:"build-cluster-with-caph",title:"Build Cluster with CAPH - the challanges when installing 23KE",authors:"rhizoet",tags:["gardener","caph","k8s"]},unlisted:!1,prevItem:{title:"Gardener Hackathon - May 2023",permalink:"/blog/Gardener Hackathon 2023"},nextItem:{title:"Hack-The-Garden - the Remote Hackathon Experience",permalink:"/blog/hack-the-garden"}},a={authorsImageUrls:[void 0]},c=[{value:"TLDR;",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup the management cluster",id:"setup-the-management-cluster",level:2},{value:"Modifications",id:"modifications",level:3},{value:"Setup the worker cluster",id:"setup-the-worker-cluster",level:2},{value:"Install of 23KE",id:"install-of-23ke",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",sub:"sub",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"tldr",children:"TLDR;"}),"\n",(0,s.jsx)(n.p,{children:"We recently built new Kubernetes clusters on Hetzner Cloud. We had several challenges to get the cluster up and running."}),"\n",(0,s.jsx)(n.p,{children:"This started with the selection of the correct Kubernetes version, the CNI solution and the actual deployment of 23KE. Spoiler: We had to change the CNI solution and reset containerd."}),"\n",(0,s.jsx)(n.p,{children:"If these instructions in this blog post are followed, you can build a working Gardener cluster."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Table of Contents"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#tldr",children:"TLDR;"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#requirements",children:"Requirements"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#setup-the-management-cluster",children:"Setup the management cluster"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#modifications",children:"Modifications"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#setup-the-worker-cluster",children:"Setup the worker cluster"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#install-of-23ke",children:"Install of 23KE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#summary",children:"Summary"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["In times of rising costs and the reduction of the CO",(0,s.jsx)(n.sub,{children:"2"})," footprint in all areas of life, we also wanted to reduce these sustainably in our day-to-day operations."]}),"\n",(0,s.jsx)(n.p,{children:"We had been running okeanos.dev on a managed kubernetes cluster on Azure. This is very expensive so we wanted to minimize these costs. In this case, the European cloud from Hetzner was the obvious choice. The following question was how we could best build a k8s cluster there."}),"\n",(0,s.jsxs)(n.p,{children:["After some research, ClusterAPI provider for Hetzner (CAPH) from ",(0,s.jsx)(n.a,{href:"https://syself.com/",children:"Syself"})," turned out to be the optimal solution."]}),"\n",(0,s.jsx)(n.p,{children:"When testing the provider, we had to overcome a few challenges, which we would like to discuss in the following."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"You need to install some basic tools to work with CAPH and Gardener. It makes sense to set up a management vm (on Hetzner) running a kind cluster and on it the management cluster."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"docker-engine"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installing-from-release-binaries",children:"kind"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cluster-api.sigs.k8s.io/user/quick-start.html#install-clusterctl",children:"clusterctl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/",children:"kubectl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"helm"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://fluxcd.io/flux/installation/",children:"flux"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://k9scli.io/topics/install/",children:"k9s"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup-the-management-cluster",children:"Setup the management cluster"}),"\n",(0,s.jsxs)(n.p,{children:["To start, let's create a kind cluster with a customized Kubernetes version (Currently it is important that the kubernetes version is ",(0,s.jsx)(n.code,{children:">1.26"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kind create cluster -n my-cluster --image=kindest/node:v1.25.9\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When the cluster is up, ",(0,s.jsx)(n.a,{href:"https://github.com/syself/cluster-api-provider-hetzner/blob/main/docs/topics/preparation.md",children:"initialize the management cluster"})," with CAPH"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"clusterctl init --core cluster-api --bootstrap kubeadm --control-plane kubeadm --infrastructure hetzner\n"})}),"\n",(0,s.jsx)(n.p,{children:"and export your environment variables"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'export HCLOUD_SSH_KEY="MY_SSH_KEY" \\\nexport CLUSTER_NAME="my-cluster" \\\nexport HCLOUD_REGION="nbg1" \\\nexport CONTROL_PLANE_MACHINE_COUNT=3 \\\nexport WORKER_MACHINE_COUNT=3 \\\nexport KUBERNETES_VERSION=1.25.9 \\\nexport HCLOUD_CONTROL_PLANE_MACHINE_TYPE=cpx31 \\\nexport HCLOUD_WORKER_MACHINE_TYPE=cpx41 \\\nexport HCLOUD_TOKEN="YOUR_HCLOUD_TOKEN_HERE"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The region can be for sure anything else like ",(0,s.jsx)(n.code,{children:"hel1"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To be able to build the machines a secret must be created:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create secret generic hetzner --from-literal=hcloud=$HCLOUD_TOKEN\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also still build yourself a customized node image, but we didn't do that. We used the Ubuntu 22.04 image, which is available from Hetzner."}),"\n",(0,s.jsxs)(n.p,{children:["Now let's create the ",(0,s.jsx)(n.code,{children:"my-cluster.yaml"})," with the private network flavor as in the ",(0,s.jsx)(n.a,{href:"https://github.com/syself/cluster-api-provider-hetzner/blob/main/docs/topics/quickstart.md",children:"quickstart-guide"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"clusterctl generate cluster my-cluster --kubernetes-version v1.25.9 --control-plane-machine-count=3 --worker-machine-count=3 --flavor hcloud-network > my-cluster.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"modifications",children:"Modifications"}),"\n",(0,s.jsxs)(n.p,{children:["After creation you need to modify the ",(0,s.jsx)(n.code,{children:"my-cluster.yaml"}),". Remove the following blocks (it gives two of them) because we need to reset the containerd config"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'- - content: |\n-     version = 2\n-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]\n-       runtime_type = "io.containerd.runc.v2"\n-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]\n-       SystemdCgroup = true\n-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.crun]\n-       runtime_type = "io.containerd.runc.v2"\n-     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.crun.options]\n-       BinaryName = "crun"\n-       Root = "/usr/local/sbin"\n-       SystemdCgroup = true\n-     [plugins."io.containerd.grpc.v1.cri".containerd]\n-       default_runtime_name = "crun"\n-     [plugins."io.containerd.runtime.v1.linux"]\n-       runtime = "crun"\n-       runtime_root = "/usr/local/sbin"\n-   owner: root:root\n-   path: /etc/containerd/config.toml\n-   permissions: "0744"\n'})}),"\n",(0,s.jsx)(n.p,{children:"and add"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"+ - mkdir /etc containerd\n+ - containerd config default > /etc/containerd/confi.toml\n+ - sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml\n  - systemctl daemon-reload && systemctl enable containerd && systemctl start containerd\n+ - sysctl fs.inotify.max_user_instances=8192\n+ - sysctl fs.inotify.max_user_watches=524288\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The containerd-config is missing some options. In addition, the ",(0,s.jsx)(n.code,{children:"SystemdCgroup"})," must be set to ",(0,s.jsx)(n.code,{children:"true"})," and the ",(0,s.jsx)(n.code,{children:"inotify"})," settings needs to be increased. Only then the ",(0,s.jsx)(n.code,{children:"vpn-seed-server"})," starts, which is created when a shoot is created."]}),"\n",(0,s.jsx)(n.p,{children:"When you have finished the modification, you can start building the worker cluster by appling the modified file on the management cluster"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f my-cluster.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"watch clusterctl describe cluster my-cluster"})," you can watch one control-plane and three workers are being built."]}),"\n",(0,s.jsx)(n.h2,{id:"setup-the-worker-cluster",children:"Setup the worker cluster"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"NOTE:"})})," From now on you should make sure that you are working on the newly built cluster. Make sure that you have exported the Kubeconfig for the worker cluster!"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Get the kubeconfig of the worker cluster"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"clusterctl get kubeconfig my-cluster > /path/to/my/worker-cluster.kc\n"})}),"\n",(0,s.jsx)(n.p,{children:"and export it to work on the cluster (you can do this on your local machine. You don't need to work anymore on the management vm):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export KUBECONFIG=/path/to/my/worker-cluster.kc\n"})}),"\n",(0,s.jsxs)(n.p,{children:['At the point of "Deploy a CNI solution" keep in mind not to install cilium like in the guide but ',(0,s.jsx)(n.a,{href:"https://docs.tigera.io/calico/latest/getting-started/kubernetes/helm",children:"calico"}),". We had a lot of trouble with cilium."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm repo add projectcalico https://docs.tigera.io/calico/charts\nkubectl create namespace tigera-operator\nhelm install calico projectcalico/tigera-operator --version v3.25.1 --namespace tigera-operator\n"})}),"\n",(0,s.jsx)(n.p,{children:"Wait till calico is ready."}),"\n",(0,s.jsxs)(n.p,{children:["Now deploy the CCM for hcloud only. Set ",(0,s.jsx)(n.code,{children:"privateNetwork.enabled=true"})," because we need a private network to function properly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm repo add syself https://charts.syself.com\nhelm upgrade --install ccm syself/ccm-hcloud --version 1.0.11 \\\n  --namespace kube-system \\\n  --set secret.name=hetzner \\\n  --set secret.tokenKeyName=hcloud \\\n  --set privateNetwork.enabled=true\n"})}),"\n",(0,s.jsx)(n.p,{children:"At the end we need a CSI to build volumes on hcloud:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cat << EOF > csi-values.yaml\nstorageClasses:\n  - name: hcloud-volumes\n    defaultStorageClass: true\n    reclaimPolicy: Retain\nEOF\n\nhelm upgrade --install csi syself/csi-hcloud --version 0.2.0 \\\n  --namespace kube-system -f csi-values.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The remaining control planes should now be built and added to the cluster. Wait until the entire cluster has ",(0,s.jsx)(n.code,{children:"Ready"})," status before proceeding."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"NOTE:"})}),' If you want to transform the workload cluster into a management cluster, you need to do the "move"-steps in the guide. But its recommended to have a management vm with kind installed and hold there the management cluster.']}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"install-of-23ke",children:"Install of 23KE"}),"\n",(0,s.jsx)(n.p,{children:"If you plan to install 23KE, you need to keep in mind that there are a few customizations that need to be made for hcloud."}),"\n",(0,s.jsx)(n.p,{children:"If you have installed 23KE and the data from the installation is in a repository, the following file need to be adjusted."}),"\n",(0,s.jsxs)(n.p,{children:["Add the following lines in ",(0,s.jsx)(n.code,{children:"gardenlet-values.yaml"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'settings:\n+ loadBalancerServices:\n+   annotations:\n+     load-balancer.hetzner.cloud/location: nbg1\n+     load-balancer.hetzner.cloud/ipv6-disabled: "true"\n+     load-balancer.hetzner.cloud/disable-private-ingress: "true"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Commit and push your changes. You can execute a ",(0,s.jsx)(n.code,{children:"flux reconcile source git 23ke-config"})," to speed up the things."]}),"\n",(0,s.jsxs)(n.p,{children:["If any ingress won't get a public IP, you can add some annotations manualy e.g. for ",(0,s.jsx)(n.code,{children:"nginx-ingress-controller"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl annotate svc -n garden nginx-ingress-controller load-balancer.hetzner.cloud/location=nbg1 \\\n  load-balancer.hetzner.cloud/ipv6-disabled=true \\\n  load-balancer.hetzner.cloud/disable-private-ingress=true\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now all things should come up as well as e.g. the dashboard should be accessible. If something is not running smoothly, the cluster can be inspected with k9s and you have an easy overview of what the problem is."}),"\n",(0,s.jsx)(n.p,{children:"In the next steps, secrets can be added to connect to a public or private cloud. With these and a cloudprofile it is then possible to build and run shoots (k8s clusters)."}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"With all these steps, it is possible for you to build a functional Gardener cluster on Hetzner Cloud. With this you can run a low cost K8s cluster and run what you want on it. Whereas 23KE is already very cool."}),"\n",(0,s.jsxs)(n.p,{children:["This setup has allowed us to drastically reduce the cost of a fully functional Gardener. As a pleasant side effect, we are no longer dependent on a cloud in the US, but now run Gardener in a data center in Germany with a German operator that is GDPR compliant and uses green electricity (good for our CO",(0,s.jsx)(n.sub,{children:"2"})," footprint)."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(67294);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);