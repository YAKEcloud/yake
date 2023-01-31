package testing

import (
	"context"
	"fmt"
	"github.com/23technologies/23kectl/pkg/common"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/apimachinery/pkg/util/wait"
	"os"
	"os/exec"
	"path"
	client2 "sigs.k8s.io/controller-runtime/pkg/client"
	"time"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"sigs.k8s.io/kind/pkg/cluster"
)

var clusterProvider = cluster.NewProvider()

func useKindCluster(ctx SpecContext, version string) (string, string) {
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

	//ip, _, err := net.ParseCIDR(dockerNodeCidr)
	//ipRangeEnd := make(net.IP, 4)
	//copy(ipRangeEnd, ip.To4())
	//ipRangeEnd[3] += 5
	//
	//ipAddressPool := metallbv1beta1.IPAddressPool{
	//	ObjectMeta: metav1.ObjectMeta{
	//		Name:      "address-pool",
	//		Namespace: "metallb-system"},
	//	Spec: metallbv1beta1.IPAddressPoolSpec{Addresses: []string{ip.String() + "-" + ipRangeEnd.String()}},
	//}
	//
	//l2Advertisement := metallbv1beta1.L2Advertisement{
	//	ObjectMeta: metav1.ObjectMeta{
	//		Name:      "empty",
	//		Namespace: "metallb-system"},
	//}
	//
	//_ = ipAddressPool
	//_ = l2Advertisement
	_, _, k8sClient, err := common.CreateKubeClient(kubeconfig)
	Expect(err).NotTo(HaveOccurred())

	// todo: get rid of dependency to kubectl
	cmd := exec.Command("kubectl", "apply", "--kubeconfig="+kubeconfig, "-f", "https://raw.githubusercontent.com/metallb/metallb/v0.13.7/config/manifests/metallb-native.yaml")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err = cmd.Run()
	Expect(err).NotTo(HaveOccurred())

	err = wait.PollUntilWithContext(ctx, time.Second, func(ctx context.Context) (bool, error) {
		var err error

		ls, err := labels.Parse("app=metallb")
		if err != nil {
			return false, err
		}

		list := &v1.PodList{}
		err = k8sClient.List(ctx, list, &client2.ListOptions{
			LabelSelector: ls,
			FieldSelector: nil,
			Namespace:     "metallb-system",
		})
		if err != nil {
			return false, err
		}

		if len(list.Items) == 0 {
			return false, nil
		}

	OUTER:
		for _, item := range list.Items {
			for _, c := range item.Status.Conditions {
				if c.Type == "Ready" && c.Status == "True" {
					continue OUTER
				}
			}

			return false, nil
		}

		return true, nil
	})
	Expect(err).NotTo(HaveOccurred())

	cmd = exec.Command("kubectl", "apply", "--kubeconfig="+kubeconfig, "-f", "metallb-config.yaml")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err = cmd.Run()
	Expect(err).NotTo(HaveOccurred())

	return kubeconfig, name
}
