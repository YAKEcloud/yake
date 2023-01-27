package testing

import (
	"fmt"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"os"
	"path"
	"sigs.k8s.io/kind/pkg/cluster"
	"time"
)

var clusterProvider = cluster.NewProvider()

func useKindCluster(version string) (string, string) {
	name := fmt.Sprintf("kind-%v", time.Now().UnixNano())
	nodeImage := fmt.Sprintf("kindest/node:%v", version)
	kubeconfig := path.Join(os.TempDir(), fmt.Sprintf("kubeconfig-%s.yaml", name))

	err := clusterProvider.Create(
		name,
		cluster.CreateWithNodeImage(nodeImage),
		cluster.CreateWithRetain(false),
		// cluster.CreateWithWaitForReady(5*time.Second),
		cluster.CreateWithKubeconfigPath(kubeconfig),
		cluster.CreateWithDisplayUsage(true),
		cluster.CreateWithDisplaySalutation(true),
	)
	Expect(err).NotTo(HaveOccurred())
	Expect(clusterProvider.List()).To(ContainElement(name))
	Expect(kubeconfig).To(BeAnExistingFile())

	// todo:
	// kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.7/config/manifests/metallb-native.yaml
	// kubectl wait --namespace metallb-system --for=condition=ready pod --selector=app=metallb --timeout=90s
	// kubectl apply -f metallb-config.yaml

	DeferCleanup(func() {
		clusterProvider.Delete(name, kubeconfig)
		os.Remove(kubeconfig)
	})

	return kubeconfig, name
}
