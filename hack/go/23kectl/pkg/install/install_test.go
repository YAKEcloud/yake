package install_test

import (
	"context"
	"fmt"
	"math/rand"
	"os"
	"strconv"

	"github.com/23technologies/23kectl/pkg/logger"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"

	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/envtest"

	kind "sigs.k8s.io/kind/pkg/cluster"
)

var k8sClient client.WithWatch
var s3Client *minio.Client
var kindProvider *kind.Provider

var bucketName string

var _ = BeforeSuite(func() {
	By("bootstrapping test environment")

	disposeLogger := logger.Init()
	defer disposeLogger()

	kindProvider = kind.NewProvider(kind.ProviderWithDocker())
	err := kindProvider.Create("kind",kind.CreateWithConfigFile("../../hack/kind.yaml") )
	Expect(err).To(BeNil())

	err = kindProvider.ExportKubeConfig("kind", "kubeconfig.yaml", false)
	Expect(err).To(BeNil())

	useKind := true
	testEnv := &envtest.Environment{UseExistingCluster: &useKind}
	cfg, err := testEnv.Start()
	Expect(err).NotTo(HaveOccurred())
	Expect(cfg).NotTo(BeNil())

	k8sClient, err = client.NewWithWatch(cfg, client.Options{})

	
	// client.ListOptions{
	// 	LabelSelector:         nil,
	// 	FieldSelector:         nil,
	// 	Namespace:             "",
	// 	Limit:                 0,
	// 	Continue:              "",
	// 	UnsafeDisableDeepCopy: new(bool),
	// 	Raw:                   &v1.ListOptions{},
	// }
	
	// manifestgen.Manifest{}
	// utils.Apply(ctx context.Context, rcg genericclioptions.RESTClientGetter, opts *client.Options, root string, manifestPath string)

	
	
	s3Client, err = minio.New(os.Getenv("MINIO_ENDPOINT"), &minio.Options{
		Creds:  credentials.NewStaticV4(os.Getenv("MINIO_ACCESSKEY"), os.Getenv("MINIO_SECRETKEY"), ""),
		Secure: true,
	})
	Expect(err).NotTo(HaveOccurred())

	bucketName = "23ke-run-" + strconv.Itoa(rand.Intn(10000))

	err = s3Client.MakeBucket(context.Background(), bucketName, minio.MakeBucketOptions{})
	Expect(err).NotTo(HaveOccurred())


})
	



var _ = Describe("Install", func() {


	It("Should print test", func() { fmt.Println("test") })
})

var _ = AfterSuite(func() {

	err := s3Client.RemoveBucket(context.Background(), bucketName)
	Expect(err).NotTo(HaveOccurred())
	
	err = kindProvider.Delete("kind", "kubeconfig.yaml")
	Expect(err).NotTo(HaveOccurred())

})
