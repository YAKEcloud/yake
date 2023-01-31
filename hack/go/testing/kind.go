package testing

import (
	"context"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"os"
	"path"
	"time"

	"github.com/23technologies/23kectl/pkg/common"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/apimachinery/pkg/util/wait"
	"k8s.io/apimachinery/pkg/util/yaml"
	k8sclient "sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/controller/controllerutil"

	metallbv1beta1 "go.universe.tf/metallb/api/v1beta1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"

	dockertypes "github.com/docker/docker/api/types"
	dockerclient "github.com/docker/docker/client"

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

	// create the k8s client
	_, _, k8sClient, err := common.CreateKubeClient(kubeconfig)
	Expect(err).NotTo(HaveOccurred())

	err = metallbv1beta1.AddToScheme(k8sClient.Scheme())
	Expect(err).NotTo(HaveOccurred())

	// dowload and apply metallb-native.yaml
	httpClient := http.Client{
		CheckRedirect: func(r *http.Request, via []*http.Request) error {
			r.URL.Opaque = r.URL.Path
			return nil
		},
	}
	resp, err := httpClient.Get("https://raw.githubusercontent.com/metallb/metallb/v0.13.7/config/manifests/metallb-native.yaml")
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	decoder := yaml.NewYAMLOrJSONDecoder(resp.Body, 1024)
	var decodedObj map[string]interface{}

	for indexInFile := 0; true; indexInFile++ {
		err := decoder.Decode(&decodedObj)
		if err == io.EOF {
			break
		}
		if err != nil {
			continue
		}
		if decodedObj == nil {
			continue
		}

		obj := &unstructured.Unstructured{Object: decodedObj}
		_, err = controllerutil.CreateOrUpdate(context.Background(), k8sClient, obj, func() error { return nil })
		Expect(err).NotTo(HaveOccurred())
	}

	// wait for the metallb pods to be ready
	err = wait.PollUntilWithContext(ctx, time.Second, func(ctx context.Context) (bool, error) {
		var err error

		ls, err := labels.Parse("app=metallb")
		if err != nil {
			return false, err
		}

		list := &corev1.PodList{}
		err = k8sClient.List(ctx, list, &k8sclient.ListOptions{
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

	// find out the cidr of the kind docker network and use some
	// ip addresses from that network for loadbalancers
	dockerClient, err := dockerclient.NewClientWithOpts(dockerclient.FromEnv)
	dockerNetwork, err := dockerClient.NetworkInspect(context.Background(), "kind", dockertypes.NetworkInspectOptions{})
	dockerNodeCidr := dockerNetwork.IPAM.Config[0].Subnet

	ip, _, err := net.ParseCIDR(dockerNodeCidr)
	ipRangeEnd := make(net.IP, 4)
	copy(ipRangeEnd, ip.To4())
	ipRangeEnd[3] += 5

	// create metallb objects.
	// See also https://kind.sigs.k8s.io/docs/user/loadbalancer/
	ipAddressPool := metallbv1beta1.IPAddressPool{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "address-pool",
			Namespace: "metallb-system"},
		Spec: metallbv1beta1.IPAddressPoolSpec{Addresses: []string{ip.String() + "-" + ipRangeEnd.String()}},
	}

	l2Advertisement := metallbv1beta1.L2Advertisement{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "empty",
			Namespace: "metallb-system"},
	}

	_, err = controllerutil.CreateOrUpdate(context.Background(), k8sClient, &ipAddressPool, func() error { return nil })
	Expect(err).NotTo(HaveOccurred())
	_, err = controllerutil.CreateOrUpdate(context.Background(), k8sClient, &l2Advertisement, func() error { return nil })
	Expect(err).NotTo(HaveOccurred())

	return kubeconfig, name
}
