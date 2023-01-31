package installv1_test

import (
	"context"
	"os"
	"path"
	"testing"

	"github.com/23technologies/23kectl/pkg/logger"
	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"k8s.io/client-go/rest"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/envtest"

	sourcecontrollerv1beta2 "github.com/fluxcd/source-controller/api/v1beta2"
	kustomizecontrollerv1beta2 "github.com/fluxcd/kustomize-controller/api/v1beta2"
)

var tmpFolder, _ = os.MkdirTemp("", "23kectl-test-*")
var testKubeConfig = path.Join(tmpFolder, "testKubeConfig.yaml")

var cancel context.CancelFunc
var k8sClient client.WithWatch
var k8sTestEnv *envtest.Environment
var s3Client *minio.Client

var _ = BeforeSuite(func() {
	By("bootstrapping test environment")

	disposeLogger := logger.Init()
	defer disposeLogger()

	_, cancel = context.WithCancel(context.TODO())
	k8sTestEnv, k8sClient = createK8sTestenv(testKubeConfig)
	s3Client = createMinioClient()
})

var _ = AfterSuite(func() {
	cancel()
	By("tearing down the test environment")
	err := k8sTestEnv.Stop()
	Expect(err).NotTo(HaveOccurred())
})

func Test(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Suite")
}

func createK8sTestenv(configPath string) (*envtest.Environment, client.WithWatch) {
	testEnv := &envtest.Environment{}
	cfg, err := testEnv.Start()
	Expect(err).NotTo(HaveOccurred())
	Expect(cfg).NotTo(BeNil())

	// Create the *rest.Config for creating new clients
	baseConfig := &rest.Config{
		// gotta go fast during tests -- we don't really care about overwhelming our test API server
		QPS:   1000.0,
		Burst: 2000.0,
	}

	testUserInfo := envtest.User{Name: "test", Groups: []string{"system:masters"}}
	testUser, err := testEnv.ControlPlane.AddUser(testUserInfo, baseConfig)
	Expect(err).NotTo(HaveOccurred())
	kubeConfig, err := testUser.KubeConfig()
	Expect(err).NotTo(HaveOccurred())

	err = os.WriteFile(configPath, kubeConfig, 0644)
	Expect(err).NotTo(HaveOccurred())

	k8sClient, err := client.NewWithWatch(cfg, client.Options{})
	Expect(err).NotTo(HaveOccurred())
	Expect(k8sClient).NotTo(BeNil())

	err = sourcecontrollerv1beta2.AddToScheme(k8sClient.Scheme())
	Expect(err).NotTo(HaveOccurred())
	err = kustomizecontrollerv1beta2.AddToScheme(k8sClient.Scheme())
	Expect(err).NotTo(HaveOccurred())

	return testEnv, k8sClient
}

func createMinioClient() *minio.Client {
	endpoint := testConfig["bucket.endpoint"].(string)
	accessKeyID := testConfig["bucket.accesskey"].(string)
	secretAccessKey := testConfig["bucket.secretkey"].(string)

	// Initialize minio client object.
	s3Client, err := minio.New(endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKeyID, secretAccessKey, ""),
		Secure: false,
	})

	Expect(err).NotTo(HaveOccurred())

	return s3Client
}
