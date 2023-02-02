package testing

import (
	"context"
	"fmt"
	"io"
	"io/fs"
	"log"
	"net/http"
	"os"
	"regexp"

	"github.com/23technologies/23kectl/pkg/common"
	"github.com/minio/minio-go/v7"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/util/yaml"
	k8sclient "sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/controller/controllerutil"
)

var _ = When("backups are configured", Ordered, func() {
	var kubeconfig string
	var s3Client *minio.Client
	var bucketName string

	BeforeAll(func(ctx SpecContext) {
		kubeconfig, _ = UseKindCluster(ctx, "v1.24.4", false)
		_, _, k8sClient, err := common.CreateKubeClient(kubeconfig)
		Expect(err).NotTo(HaveOccurred())
		installFlux(k8sClient)

		s3Client, bucketName = UseRemoteBucket(ctx)
		fsys := os.DirFS("../../../pre-gardener")
		fs.WalkDir(fsys, ".", func(path string, d fs.DirEntry, err error) error {

			if d.IsDir() {
				return nil
			}

			matched, err := regexp.MatchString("configuration/.*|addons/.*|addons.yaml|helmrepositories.yaml", path)
			Expect(err).NotTo(HaveOccurred())
			if !matched {
				return nil
			}

			_, err = s3Client.FPutObject(ctx, bucketName, "/pre-gardener/"+path, "../../../pre-gardener/"+path, minio.PutObjectOptions{})
			Expect(err).NotTo(HaveOccurred())
			return nil

		})

		fmt.Println("test")
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
