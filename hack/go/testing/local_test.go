package testing

import (
	"github.com/minio/minio-go/v7"
	. "github.com/onsi/ginkgo/v2"
)

var _ = Describe("Installing 23KE", func() {
	testKind("v1.24.4")
	// testKind("v1.25.1")
})

func testKind(v string) {
	Describe("on kind "+v, Ordered, func() {
		var kubeconfig string
		var s3Client *minio.Client
		var bucketName string

		BeforeAll(func(ctx SpecContext) {
			kubeconfig, _ = UseKindCluster(ctx, v)
			s3Client, bucketName = UseRemoteBucket(ctx)
		})

		XIt("Does stuff", func(ctx SpecContext) {
			_ = kubeconfig
			_ = s3Client
			_ = bucketName
		})
	})
}

var _ = XWhen("backups are configured", Ordered, func() {
	BeforeAll(func(ctx SpecContext) {

	})
})
