"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94308],{75990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(85893),r=t(11151);const i={slug:"gardener-ext-dev",title:"Getting started with Gardener extension development",authors:"jensac",tags:["gardener","gardener-extensions"]},s=void 0,l={permalink:"/blog/gardener-ext-dev",editUrl:"https://github.com/yakecloud/yake/tree/main/docs/blog/2022-06-08-gardener-ext-dev.md",source:"@site/blog/2022-06-08-gardener-ext-dev.md",title:"Getting started with Gardener extension development",description:"TLDR;",date:"2022-06-08T00:00:00.000Z",formattedDate:"June 8, 2022",tags:[{label:"gardener",permalink:"/blog/tags/gardener"},{label:"gardener-extensions",permalink:"/blog/tags/gardener-extensions"}],readingTime:11.195,hasTruncateMarker:!1,authors:[{name:"Jens Schneider",title:"software engineer",url:"https://github.com/jensac",imageURL:"https://github.com/jensac.png",key:"jensac"}],frontMatter:{slug:"gardener-ext-dev",title:"Getting started with Gardener extension development",authors:"jensac",tags:["gardener","gardener-extensions"]},unlisted:!1,prevItem:{title:"A Single Point of Truth for Gardener Helm Charts",permalink:"/blog/gardener-chart-releaser"},nextItem:{title:"A Gardener Extension for universal Shoot Configuration",permalink:"/blog/gardener-ext-shoot-flux"}},a={authorsImageUrls:[void 0]},c=[{value:"TLDR;",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Basic workflows",id:"basic-workflows",level:2},{value:"The mininal working example",id:"the-mininal-working-example",level:2},{value:"Rapid prototyping on a Kubernetes cluster (tested with version 1.22.6)",id:"rapid-prototyping-on-a-kubernetes-cluster-tested-with-version-1226",level:3},{value:"Development in a real Gardener environment",id:"development-in-a-real-gardener-environment",level:3},{value:"Last words",id:"last-words",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"tldr",children:"TLDR;"}),"\n",(0,o.jsxs)(n.p,{children:["Recently, we developed the ",(0,o.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-mwe",children:"gardener-extension-mwe"}),", which serves as a minimal working example for Gardener extensions.\nIf you are only interested in the code, go and checkout the repository on github.\nIf you want to learn more, keep on reading."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Table of Contents"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#tldr",children:"TLDR;"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#basic-workflows",children:"Basic workflows"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#the-mininal-working-example",children:"The mininal working example"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#rapid-prototyping-on-a-kubernetes-cluster-tested-with-version-1226",children:"Rapid prototyping on a Kubernetes cluster (tested with version 1.22.6)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#development-in-a-real-gardener-environment",children:"Development in a real Gardener environment"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#last-words",children:"Last words"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["Starting the development of new ",(0,o.jsx)(n.a,{href:"https://gardener.cloud/",children:"Gardener"})," extensions can be challenging.\nAs the ",(0,o.jsx)(n.a,{href:"https://gardener.cloud/docs/",children:"Gardener documentation"})," is fairly complex and driven by the history of the project, getting into the overall concepts is not easy.\nMoreover, code examples for Gardener extensions reside in separate Git repositories lacking documentation.\nHowever, early in March 2022 the ",(0,o.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-shoot-networking-filter",children:"gardener-extension-shoot-networking-filter"})," was published, which comes at a more beginner friendly level than the e.g. the cloud-provider extensions.\nIn particular, it extends ",(0,o.jsx)(n.code,{children:"Shoot"})," clusters by the use of ",(0,o.jsx)(n.a,{href:"https://gardener.cloud/docs/gardener/concepts/resource-manager/#managedresource-controller",children:"managed resources"}),", which might be more straight-forward than the interaction with a cloud service provider as performed by e.g. the ",(0,o.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-provider-aws",children:"gardener-extension-provider-aws"}),".\nThus, ",(0,o.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-shoot-networking-filter",children:"gardener-extension-shoot-networking-filter"})," provides a reasonable starting point for new developments, which target at automated deployments into ",(0,o.jsx)(n.code,{children:"Shoot"})," clusters."]}),"\n",(0,o.jsxs)(n.p,{children:["However, going beyond the identification of a starting point, it makes sense to take a closer look at the concepts for extension development.\nIn the ",(0,o.jsx)(n.a,{href:"https://github.com/gardener/gardener/tree/master/extensions",children:"extension directory"})," of the Gardener Git repository, we find several Go-packages defining interfaces, which can be implemented by extension controllers.\nPut simply, we can search for files matching ",(0,o.jsx)(n.code,{children:"pkg/controller/*/actuator.go"}),", in order to find interfaces for controllers acting on the corresponding resources.\nE.g., if our controller defines a (golang)-type -- called ",(0,o.jsx)(n.code,{children:"actuator"})," -- implementing the interface defined in ",(0,o.jsx)(n.code,{children:"pkg/controller/extension/actuator.go"}),", the controller will reconcile resources of type ",(0,o.jsx)(n.code,{children:"*extensionsv1alpha1.Extension"}),".\nConsequently, the controller will take care for all the steps we define in the ",(0,o.jsx)(n.code,{children:"Reconcile"})," method of the ",(0,o.jsx)(n.code,{children:"actuator"}),", when ",(0,o.jsx)(n.code,{children:"Extension"})," resources are updated.\nOf course, there might be more complex scenarios where reconciling ",(0,o.jsx)(n.code,{children:"Extension"})," resources would be insufficient.\nIn these cases, other interfaces like e.g. defined in ",(0,o.jsx)(n.code,{children:"pkg/controller/infrastructure/actuator.go"})," would need to be implemented.\nHowever, these cases lie beyond the scope of this blog post."]}),"\n",(0,o.jsx)(n.p,{children:"Next, we will dive into some basic workflows for Gardener extension development."}),"\n",(0,o.jsx)(n.h2,{id:"basic-workflows",children:"Basic workflows"}),"\n",(0,o.jsxs)(n.p,{children:["In software engineering, it is reasonable to develop on a local machine with a controllable toolchain.\nAs already mentioned above, Gardener extensions are implemented in ",(0,o.jsx)(n.a,{href:"https://go.dev/",children:"Go"}),".\nTherefore, let's identify a few requirements for the development:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"An installation of Go"}),"\n",(0,o.jsxs)(n.li,{children:["A text editor, which (optionally) supports ",(0,o.jsx)(n.a,{href:"https://pkg.go.dev/golang.org/x/tools/gopls",children:"gopls"})]}),"\n",(0,o.jsxs)(n.li,{children:["A Go debugger, which is most likely to be ",(0,o.jsx)(n.a,{href:"https://github.com/go-delve/delve",children:"Delve"})]}),"\n",(0,o.jsxs)(n.li,{children:["A Gardener development environment. This can be setup by\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://gardener.cloud/docs/gardener/development/getting_started_locally/",children:"Running Gardener locally"})," (also checkout ",(0,o.jsx)(n.a,{href:"https://github.com/gardener/gardener/issues/5548",children:"#5548"}),", if you are running on Linux)"]}),"\n",(0,o.jsx)(n.li,{children:"Setting up a development Gardener on some cloud infrastructure. This definitely comes closer to the real world scenario your extension will eventually live in.\nThe block diagram below depicts the overall setup including the requirements from above."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502    Development Computer                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502                                              \u2502\n\u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n\u2502 \u2502             - Your toolchain             \u2502 \u2502\n\u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n\u2502                                              \u2502\n\u2502     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502\n\u2502     \u2502Kubeconfigs \u2502        \u2502Your code     \u2502   \u2502\n\u2502     \u2514\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2518        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2518   \u2502\n\u2502        \u2502      \u2502                    \u2502         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n         \u2502      \u2502                    \u2502\n         \u2502      \u2502apply               \u2502\n  apply  \u2502      \u2502resources           \u2502reconcile\nresources\u2502      \u2502                    \u2502resources\n         \u2502      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n         \u2502                         \u2502 \u2502\n         \u2502                         \u2502 \u2502\n         \u25bc                         \u25bc \u25bc\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502 Garden Cluster  \u2502       \u2502 Seed Cluster    \u2502\n   \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524       \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n   \u2502- Project        \u2502       \u2502- Extension      \u2502\n   \u2502- Seed           \u2502       \u2502- Controller     \u2502\n   \u2502- Shoot          \u2502       \u2502- ...            \u2502\n   \u2502- ...            \u2502       \u2502                 \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, the code for the extension controller is running on your local development machine, and reconciles resources, such as ",(0,o.jsx)(n.code,{children:"Extension"})," resources, in the ",(0,o.jsx)(n.code,{children:"Seed"})," cluster.\nOf course, you will not have dedicated clusters for the ",(0,o.jsx)(n.code,{children:"Garden"})," cluster and ",(0,o.jsx)(n.code,{children:"Seed"}),' cluster, when running Gardener locally.\nHowever, the overall buidling blocks stay conceptually the same.\nOnce these requirements are met, you are good to go for your first steps with Gardener extensions.\nWait! I have to setup an entire Gardener, if I want to rapidly prototype an extension controller?\nYes and No. Depending on your development/test case, it might be reasonable to "fake" a Gardener environment on a vanilla Kubernetes cluster. We will get to this development case below.\nFor rock solid testing, however, you most probably need a real world Gardener environment.']}),"\n",(0,o.jsx)(n.h2,{id:"the-mininal-working-example",children:"The mininal working example"}),"\n",(0,o.jsxs)(n.p,{children:["As of May 2022, we provide a Minimal Working Example (MWE) for gardener extensions.\nOf course, this example did not come out of nowhere.\nTherefore, we review the development process and break the example down to its components in the following:\nTaking a look at other extensions, it is observed that we need some boiler plate code for running our controller, so that it works together with all the other Gardener components.\nFor the MWE, we collected the relevant files and adjusted them to our needs.\nThus, we can have a look at the ",(0,o.jsx)(n.code,{children:"cmd"})," directory of the ",(0,o.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-mwe",children:"gardener-extension-mwe"})," and find a simple structure with 3 files, which are responsible for starting our controller and ensuring that it acts on the defined resources."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cmd\n\u2514\u2500\u2500 gardener-extension-mwe\n    \u251c\u2500\u2500 app\n    \u2502\xa0\xa0 \u251c\u2500\u2500 app.go\n    \u2502\xa0\xa0 \u2514\u2500\u2500 options.go\n    \u2514\u2500\u2500 main.go\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you want to start the development of a new extension, you do not need to worry too much about these files.\nMost probably, you can simple copy them over, and adjust some variables to your needs.\nActually, we also copied these files from the ",(0,o.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-shoot-networking-filter",children:"gardener-extension-shoot-networking-filter"})," and adjusted them to the needs of the MWE.\nGiven that we have the boilerplate code in the ",(0,o.jsx)(n.code,{children:"cmd"})," directory available now, we can go ahead and define a type which implements an ",(0,o.jsx)(n.code,{children:"actuator"})," interface.\nFor this, we need the files in the ",(0,o.jsx)(n.code,{children:"pkg"})," directory.\nLets take a look at the structure:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pkg\n\u2514\u2500\u2500 controller\n\t\u2514\u2500\u2500 lifecycle\n\t\t\u251c\u2500\u2500 actuator.go\n\t\t\u2514\u2500\u2500 add.go\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Also here, we find only two files, and the implementation of the interface is located in ",(0,o.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-mwe/blob/main/pkg/controller/lifecycle/actuator.go",children:(0,o.jsx)(n.code,{children:"actuator.go"})}),".\nThis is the place where most of the magic of your new controller happens.\nIn the case of the MWE, the actuator will only output logs, when ",(0,o.jsx)(n.code,{children:"Extension"})," resources are reconciled.\nObviously, all code is written in Go and consequently we will also need to pull in some dependencies.\nFor this, we need the files ",(0,o.jsx)(n.code,{children:"go.mod"})," and ",(0,o.jsx)(n.code,{children:"go.sum"}),".\nTypically, the source code of the dependencies is also committed to the repository, which comes at advantages and downsides.\nThe main advantage is that all code needed for building an application is available in the repository.\nOn the other hand, committing several 1000s lines of code during vendoring clutters the commit history of the repository.\nTherefore, we only provide the files mentioned above in the ",(0,o.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-mwe/commit/455c9c76876161bf8d5197e1330a9fc28f825baa",children:"initial commit"})," of the MWE and perform the vendoring (by running ",(0,o.jsx)(n.code,{children:"go mod vendor"}),") in ",(0,o.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-mwe/commit/3c238bdcc5697392d567d5b6e5f2cf6126b3c756",children:"another commit"}),".\nAt this state of the repository, we can already start and go the first steps with our new controller in a vanilla Kubernetes cluster."]}),"\n",(0,o.jsx)(n.h3,{id:"rapid-prototyping-on-a-kubernetes-cluster-tested-with-version-1226",children:"Rapid prototyping on a Kubernetes cluster (tested with version 1.22.6)"}),"\n",(0,o.jsxs)(n.p,{children:["Assuming you have read the ",(0,o.jsx)(n.a,{href:"#basic-workflows",children:"basic workflows"})," section, we are ready to dive into the exemplary development techniques.\nSo let's fetch the code and setup the repository:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/23technologies/gardener-extension-mwe.git\ncd gardener-extension-mwe\ngit checkout 3c238bd  # checkout the commit containing first vendoring\nmkdir dev\ncp PATH-TO/KUBECONFIG.yaml dev/kubeconfig.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now, we can already start our controller and should get some output showing that it was started:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go run ./cmd/gardener-extension-mwe --kubeconfig=dev/kubeconfig.yaml  --ignore-operation-annotation=true --leader-election=false\n"})}),"\n",(0,o.jsxs)(n.p,{children:["However, we will not observe any other output, since the controller is still freewheeling.\nRemember, reconciliation will be triggered on ",(0,o.jsx)(n.code,{children:"Extension"})," resources.\nAs our vanilla Kubernetes cluster does not know anything about ",(0,o.jsx)(n.code,{children:"Extension"}),' resources yet, we will have to "fake" the Gardener environment.\nIn other Gardener extensions, we find resources for a "fake" Gardener setup in the ',(0,o.jsx)(n.code,{children:"example"})," directory.\nTherefore, we prepared the ",(0,o.jsx)(n.code,{children:"example"})," directory in ",(0,o.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-mwe/commit/50f7136330e114ec2f795f3e30a756381dd4cbc6",children:"another commit"}),".\nLet's check it out:\nOpen a new terminal pane and navigate to your repository and go for"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"git checkout 50f7136 # this commit entails the example directory\nexport KUBECONFIG=dev/kubeconfig.yaml\nkubectl apply -f example/10-fake-shoot-controlplane.yaml\nkubectl apply -f example/20-crd-cluster.yaml\nkubectl apply -f example/20-crd-extension.yaml\nkubectl apply -f example/30-cluster.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, the cluster simulates a Gardener environment and we can apply an ",(0,o.jsx)(n.code,{children:"Extension"})," resource:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f example/40-extension.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:['Take another look at the terminal running our controller now.\nIt should have logged a "Hello World" message.\nOf course, we can also delete the ',(0,o.jsx)(n.code,{children:"Extension"})," resource again and the controller will tell us that the ",(0,o.jsx)(n.code,{children:"Delete"})," method was called."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl delete -f example/40-extension.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["As we have the code and a method to trigger its execution available now, we can go ahead for a more interactive approach based on the ",(0,o.jsx)(n.a,{href:"https://github.com/go-delve/delve",children:"Delve debugger"}),".\nLet's start all over again and run our controller using Delve"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"dlv debug ./cmd/gardener-extension-mwe -- --kubeconfig=dev/kubeconfig.yaml  --ignore-operation-annotation=true --leader-election=false\n"})}),"\n",(0,o.jsxs)(n.p,{children:["and we will end up in a commandline with a ",(0,o.jsx)(n.code,{children:"(dlv)"})," prompt.\nNext, we ask ",(0,o.jsx)(n.code,{children:"dlv"})," to break in the ",(0,o.jsx)(n.code,{children:"Reconcile"})," method"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"(dlv) b github.com/23technologies/gardener-extension-mwe/pkg/controller/lifecycle.(*actuator).Reconcile\n"})}),"\n",(0,o.jsx)(n.p,{children:"and continue the execution of the controller"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"(dlv) c\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Afterwards, you should observe some output of the controller, again.\nHowever, Delve will not break the execution until the ",(0,o.jsx)(n.code,{children:"Reconcile"})," method is called.\nThus, we apply the ",(0,o.jsx)(n.code,{children:"Extension"})," resource once again"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f example/40-extension.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["and Delve will stop in the ",(0,o.jsx)(n.code,{children:"Reconcile"})," method.\nNow, you can step through the code, see where it enters code paths pointing into the vendor directory, and inspect the values of certain variables.\nObviously, the amount of variables you can inspect is limited in the MWE, but e.g. we can have a look at the ",(0,o.jsx)(n.code,{children:"*extensionsv1alpha1.Extension"})," passed to the ",(0,o.jsx)(n.code,{children:"Reconcile"})," method"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"(dlv) p ex.ObjectMeta.Name\n"})}),"\n",(0,o.jsxs)(n.p,{children:["which should print ",(0,o.jsx)(n.code,{children:'"mwe"'}),".\nGenerally, this is a great way to approach unknown software, since you will quickly get a feeling for the different components.\nThus, we expect that you can benefit from this workflow, when developing your own extensions.\nEven though this approach offers capabilities for rapid prototyping, it is still limited, since we cannot act e.g. on ",(0,o.jsx)(n.code,{children:"Shoot"})," clusters as available in a real world Gardener.\nTherefore, we step into the development in a Gardener environment in the next section."]}),"\n",(0,o.jsx)(n.h3,{id:"development-in-a-real-gardener-environment",children:"Development in a real Gardener environment"}),"\n",(0,o.jsxs)(n.p,{children:["Developing and testing our extension in a real world Gardener requires a ",(0,o.jsx)(n.code,{children:"ControllerRegistration"})," resource in the ",(0,o.jsx)(n.code,{children:"Garden"})," cluster causing the installation of the controller in ",(0,o.jsx)(n.code,{children:"Seed"})," clusters.\nGenerally, the installation performed by Helm charts and consequently, we need to provide these charts in the repository.\nAlso for the MWE, we prepared the ",(0,o.jsx)(n.code,{children:"charts"})," directory containing all relevant Helmcharts for the deployment of the controller.\nNote that this set of charts is very limited and in production scenarios you might want to add something like a ",(0,o.jsx)(n.code,{children:"VerticalPodAutoscaler"})," as done e.g. in the ",(0,o.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-shoot-networking-filter",children:"gardener-extension-shoot-networking-filter"}),".\nHowever, implementing production ready charts goes beyond the scope of this post, and consequently the MWE charts were added in ",(0,o.jsx)(n.a,{href:"https://github.com/23technologies/gardener-extension-mwe/commit/beee274314ac628c65a3dcb4846dad577744b36a",children:"another commit"}),".\nThese charts target at running the controller in ",(0,o.jsx)(n.code,{children:"Seed"})," clusters.\nThus, in ",(0,o.jsx)(n.code,{children:"charts/gardener-extension-mwe/values.yaml"}),", the image for the deployment is defined.\nHowever, we do not want to push that image to a public container registry for each and every change we make to our code.\nMoreover, we want to run the controller on our local machine for development purposes.\nTherefore, we need to tweak the values before generating the ",(0,o.jsx)(n.code,{children:"controller-registration.yaml"}),".\nLet's go through it step by step:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/23technologies/gardener-extension-mwe.git\ncd gardener-extension-mwe\nmkdir dev\ncp PATH-TO/KUBECONFIG-FOR-SEED.yaml dev/kubeconfig.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Next, we generate the ",(0,o.jsx)(n.code,{children:"controller-registration.yaml"}),", such that the controller is not deployed to the seed cluster and we can hook-in the controller running locally.\nIn particular, we set ",(0,o.jsx)(n.code,{children:"replicaCount=0"})," and ",(0,o.jsx)(n.code,{children:"ignoreResources=true"})," in ",(0,o.jsx)(n.code,{children:"./charts/gardener-extension-mwe/values.yaml"}),", before generating the ",(0,o.jsx)(n.code,{children:"controller-registration.yaml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"yq eval -i '.replicaCount=0 | .ignoreResources=true' charts/gardener-extension-mwe/values.yaml\n./vendor/github.com/gardener/gardener/hack/generate-controller-registration.sh mwe charts/gardener-extension-mwe v0.0.1 example/controller-registration.yaml Extension:mwe\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's deploy the generated ",(0,o.jsx)(n.code,{children:"controller-registration.yaml"})," into the ",(0,o.jsx)(n.code,{children:"Garden"})," cluster:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"export KUBECONFIG=PATH-TO/GARDEN-CLUSTER-KUBECONFIG.yaml\nkubectl apply -f example/controller-registration.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["From now on, ",(0,o.jsx)(n.code,{children:"Extension"})," resources of the type ",(0,o.jsx)(n.code,{children:"mwe"})," will be deployed to ",(0,o.jsx)(n.code,{children:"Seed"})," clusters when new ",(0,o.jsx)(n.code,{children:"Shoot"})," clusters with"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"---\napiVersion: core.gardener.cloud/v1beta1\nkind: Shoot\nmetadata:\n  name: bar\n  namespace: garden-foo\nspec:\n  extensions:\n  - type: mwe\n...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["are created.\nIn our controller, the ",(0,o.jsx)(n.code,{children:"Reconcile"})," method will be triggered, when these ",(0,o.jsx)(n.code,{children:"Extension"})," resources are reconciled.\nTherefore, we can run the extension controller with Delve now"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'dlv debug ./cmd/gardener-extension-mwe -- --kubeconfig=dev/kubeconfig.yaml  --ignore-operation-annotation=true --leader-election=false --gardener-version="v1.44.4"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["and we can perform debugging operations as explained above.\nRemember, Delve will not break the execution until the ",(0,o.jsx)(n.code,{children:"Reconcile"})," method is called.\nNow, Gardener will create ",(0,o.jsx)(n.code,{children:"Extension"})," resources for ",(0,o.jsx)(n.code,{children:"Shoot"}),"s which will trigger the ",(0,o.jsx)(n.code,{children:"Reconcile"})," method of our controller.\nConsequently, we need a new terminal pane in the repository root and execute"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"export KUBECONFIG=PATH-TO/GARDEN-CLUSTER-KUBECONFIG.yaml\nkubectl apply -f example/50-shoot.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that it will take some time until the corresponding ",(0,o.jsx)(n.code,{children:"Extension"})," resource will be created in the ",(0,o.jsx)(n.code,{children:"Seed"})," cluster.\nHang on tight and wait for the ",(0,o.jsx)(n.code,{children:"Reconcile"})," method being executed.\nYou can start investigating where your code goes using Delve now.\nHappy hacking!"]}),"\n",(0,o.jsx)(n.h2,{id:"last-words",children:"Last words"}),"\n",(0,o.jsx)(n.p,{children:"This blog post shares our experience, when getting started with Gardener extension development.\nWe hope that this contribution helps you get started more quickly than us.\nIf you have any comment or ideas for improvements, do not hesitate to contact us.\nWe are always willing to improve our work."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);