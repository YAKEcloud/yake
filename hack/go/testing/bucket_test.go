package testing_test

import (
	"github.com/23technologies/23ke/testing"
	"github.com/minio/minio-go/v7"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"os"
	"strings"
)

func init() {
	When("using a remote bucket", Ordered, func() {
		var s3Client *minio.Client
		var bucketName string

		BeforeAll(func(ctx SpecContext) {
			os.Setenv("TEST_MINIO_ENDPOINT", "minio-ci.ingress.23ke-releases.23t-prod.okeanos.dev")
			os.Setenv("TEST_MINIO_ACCESSKEY", "minio")
			os.Setenv("TEST_MINIO_SECRETKEY", "07c691b6dbb933b850acd540af665d9ddd9119ab")

			s3Client, bucketName = testing.UseRemoteBucket(ctx)
		})

		It("is writable", func(ctx SpecContext) {
			_, err := s3Client.PutObject(ctx, bucketName, "test-object", strings.NewReader("test"), -1, minio.PutObjectOptions{})

			Expect(err).NotTo(HaveOccurred())
		})

		It("is listable", func(ctx SpecContext) {
			ch := s3Client.ListObjects(ctx, bucketName, minio.ListObjectsOptions{
				Recursive: true,
			})

			Eventually(ch).Should(Receive())
			Eventually(ch).Should(BeClosed())
		})
	})
}
