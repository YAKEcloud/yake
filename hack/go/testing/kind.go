package testing

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path"
	"time"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"sigs.k8s.io/kind/pkg/cluster"
)

var clusterProvider = cluster.NewProvider()

func useKindCluster(version string) (string, string) {
	name := fmt.Sprintf("kind-%v", time.Now().UnixNano())
	nodeImage := fmt.Sprintf("kindest/node:%v", version)
	kubeconfig := path.Join(os.TempDir(), fmt.Sprintf("kubeconfig-%s.yaml", name))

	DeferCleanup(func() {
		clusterProvider.Delete(name, kubeconfig)
		os.Remove(kubeconfig)
	})

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

	dockerClient, err := client.NewClientWithOpts(client.FromEnv)
	dockerNetwork, err := dockerClient.NetworkInspect(context.Background(), "kind", types.NetworkInspectOptions{})
	dockerNodeCidr := dockerNetwork.IPAM.Config[0].Subnet

	fmt.Println(dockerNodeCidr)

	// todo: get rid of dependency to kubectl
	err = exec.Command("kubectl", "apply", "--kubeconfig", kubeconfig, "-f", "https://raw.githubusercontent.com/metallb/metallb/v0.13.7/config/manifests/metallb-native.yaml").Run()
	Expect(err).NotTo(HaveOccurred())

	err = exec.Command("kubectl", "wait", "--kubeconfig", kubeconfig, "--namespace", "metallb-system", "--for=condition=ready", "pod", "--selector=app=metallb", "--timeout=90s").Run()
	Expect(err).NotTo(HaveOccurred())

	err = exec.Command("kubectl", "apply", "--kubeconfig", kubeconfig, "-f", "metallb-config.yaml").Run()
	Expect(err).NotTo(HaveOccurred())

	return kubeconfig, name
}
