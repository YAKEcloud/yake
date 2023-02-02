package testing

import (
	"context"
	"io"
	"io/fs"
	"log"
	"net/http"
	"os"
	"regexp"
	"strings"
	"time"

	"github.com/23technologies/23kectl/pkg/common"
	"github.com/minio/minio-go/v7"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/util/yaml"
	k8sclient "sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/controller/controllerutil"

	"k8s.io/apimachinery/pkg/util/wait"

	kustomizecontrollerv1beta2 "github.com/fluxcd/kustomize-controller/api/v1beta2"
	"github.com/fluxcd/pkg/apis/meta"
	sourcecontrollerv1beta2 "github.com/fluxcd/source-controller/api/v1beta2"
)

var _ = When("backups are configured", Ordered, func() {
	var kubeconfig string
	var s3Client *minio.Client
	var bucketName string
	var k8sClient k8sclient.WithWatch
	var err error

	BeforeAll(func(ctx SpecContext) {
		kubeconfig, _ = UseKindCluster(ctx, "v1.24.4", false)
		_, _, k8sClient, err = common.CreateKubeClient(kubeconfig)
		Expect(err).NotTo(HaveOccurred())
		installFlux(k8sClient)

		// bucket preparation
		s3Client, bucketName = UseRemoteBucket(ctx)
		fsys := os.DirFS("../../../pre-gardener")
		fs.WalkDir(fsys, ".", func(path string, d fs.DirEntry, err error) error {
			if d.IsDir() {
				return nil
			}

			matched, err := regexp.MatchString("configuration.*|addons.*|helmrepositories.yaml", path)
			Expect(err).NotTo(HaveOccurred())
			if !matched {
				return nil
			}

			curFileAsBytes, err := os.ReadFile("../../../pre-gardener/" + path)
			curFileAsString := string(curFileAsBytes)
			curFileAsString = strings.Replace(curFileAsString, "GitRepository", "Bucket", 1)
			reader := strings.NewReader(curFileAsString)

			_, err = s3Client.PutObject(ctx, bucketName, "/pre-gardener/" + path, reader, reader.Size(), minio.PutObjectOptions{})
			Expect(err).NotTo(HaveOccurred())
			return nil
		})

		mainKs := `apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - addons.yaml
  - configuration.yaml 
`

		reader := strings.NewReader(mainKs)
		s3Client.PutObject(ctx, bucketName, "/pre-gardener/kustomization.yaml", reader, reader.Size(), minio.PutObjectOptions{})

		// cluster resources
		secConfig := corev1.Secret{
			ObjectMeta: metav1.ObjectMeta{
				Name:      "23ke-config",
				Namespace: common.FLUX_NAMESPACE,
			},
			Type: "Opaque",
		}
		_, err = controllerutil.CreateOrUpdate(ctx, k8sClient, &secConfig, func() error {
		secConfigData := `backups:
  enabled: false
  provider: azure
  region: germanywestcentral
  bucketName: gardener-backup
  credentials:
    storageAccount: <base64encoded storageAccountName>
    storageAccountAccessKey: <base64encoded storageAccountAccessKey>
    tenantID: ${AZURE_TENANT_ID}
    subscriptionID: ${AZURE_SUBSCRIPTION_ID}
    clientID: ${AZURE_SECRET_ID}
    clientSecret: ${AZURE_SECRET_VALUE}
`
			secConfig.StringData = map[string]string{
				"values.yaml": secConfigData,
			}
			return nil
		})
		Expect(err).NotTo(HaveOccurred())

		secBucket := corev1.Secret{
			ObjectMeta: metav1.ObjectMeta{
				Name:      common.BUCKET_SECRET_NAME,
				Namespace: common.FLUX_NAMESPACE,
			},
			Data: map[string][]byte{
				"accesskey": []byte(os.Getenv("TEST_MINIO_ACCESSKEY")),
				"secretkey": []byte(os.Getenv("TEST_MINIO_SECRETKEY")),
			},
			Type: "Opaque",
		}
		controllerutil.CreateOrUpdate(ctx, k8sClient, &secBucket, func() error { return nil })

		bucket23ke := sourcecontrollerv1beta2.Bucket{
			ObjectMeta: metav1.ObjectMeta{
				Name:      common.BUCKET_NAME,
				Namespace: common.FLUX_NAMESPACE,
			},
		}
		sourcecontrollerv1beta2.AddToScheme(k8sClient.Scheme())
		controllerutil.CreateOrUpdate(ctx, k8sClient, &bucket23ke, func() error {
			bucket23ke.TypeMeta = metav1.TypeMeta{
				APIVersion: "source.toolkit.fluxcd.io/v1beta2",
				Kind:       "Bucket",
			}

			bucket23ke.Spec = sourcecontrollerv1beta2.BucketSpec{
				Provider:   "",
				BucketName: bucketName,
				Endpoint:   os.Getenv("TEST_MINIO_ENDPOINT"),
				SecretRef: &meta.LocalObjectReference{
					Name: common.BUCKET_SECRET_NAME,
				},
				Interval: metav1.Duration{Duration: time.Second * 5},
			}
			return nil
		})

		ks23keBase := kustomizecontrollerv1beta2.Kustomization{
			ObjectMeta: metav1.ObjectMeta{
				Name:      common.BASE_23KE_KS_NAME,
				Namespace: common.FLUX_NAMESPACE,
			},
		}

		kustomizecontrollerv1beta2.AddToScheme(k8sClient.Scheme())
		controllerutil.CreateOrUpdate(ctx, k8sClient, &ks23keBase, func() error {
			ks23keBase.TypeMeta = metav1.TypeMeta{
				APIVersion: "kustomize.toolkit.fluxcd.io/v1beta2",
				Kind:       "Kustomization",
			}
			ks23keBase.Spec = kustomizecontrollerv1beta2.KustomizationSpec{
				Interval: metav1.Duration{
					Duration: time.Second * 5,
				},
				Path:  "./",
				Prune: true,
				SourceRef: kustomizecontrollerv1beta2.CrossNamespaceSourceReference{
					Kind: "Bucket",
					Name: common.BUCKET_NAME,
				},
			}
			return nil
		})

	})

	It("should create a bucket in ready state", func(ctx SpecContext) {
		innerCtx, innerCancel := context.WithTimeout(ctx, time.Minute)
		defer innerCancel()
		err := wait.PollUntilWithContext(innerCtx, time.Second, func(ctx context.Context) (done bool, err error) {

			bucket23ke := sourcecontrollerv1beta2.Bucket{}
			k8sClient.Get(ctx, k8sclient.ObjectKey{
				Namespace: common.FLUX_NAMESPACE,
				Name:      common.BUCKET_NAME,
			}, &bucket23ke)

			for _, item := range bucket23ke.Status.Conditions {
				if item.Type == "Ready" && item.Status == "True" {
					return true, nil
				}
			}
			return false, nil
		})
		Expect(err).NotTo(HaveOccurred())
	})

	It("should create a Kustomization in ready state", func(ctx SpecContext) {

		innerCtx, innerCancel := context.WithTimeout(ctx, time.Minute)
		defer innerCancel()
		err := wait.PollUntilWithContext(innerCtx, time.Second, func(ctx context.Context) (done bool, err error) {

			ks23keBase := kustomizecontrollerv1beta2.Kustomization{}
			k8sClient.Get(ctx, k8sclient.ObjectKey{
				Namespace: common.FLUX_NAMESPACE,
				Name:      common.BASE_23KE_KS_NAME,
			}, &ks23keBase)

			for _, item := range ks23keBase.Status.Conditions {
				if item.Type == "Ready" && item.Status == "True" {
					return true, nil
				}
			}
			return false, nil
		})
		Expect(err).NotTo(HaveOccurred())

	})

	It("should create a working kubeconfig", func() {
		Expect(kubeconfig).To(BeAnExistingFile())
	})

	_ = bucketName
	_ = s3Client

})

// installFlux ...
func installFlux(k8sClient k8sclient.Client) {
	httpClient := http.Client{
		CheckRedirect: func(r *http.Request, via []*http.Request) error {
			r.URL.Opaque = r.URL.Path
			return nil
		},
	}
	resp, err := httpClient.Get("https://github.com/fluxcd/flux2/releases/download/v0.38.2/install.yaml")
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

}
