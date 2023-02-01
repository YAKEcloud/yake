package testing

import (
	"context"
	"fmt"
	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"os"
	"time"
)

func UseRemoteBucket(ctx context.Context) (*minio.Client, string) {
	bucketName := fmt.Sprintf("23ke-run-%v", time.Now().UnixNano())

	s3Client, err := minio.New(os.Getenv("TEST_MINIO_ENDPOINT"), &minio.Options{
		Creds:  credentials.NewStaticV4(os.Getenv("TEST_MINIO_ACCESSKEY"), os.Getenv("TEST_MINIO_SECRETKEY"), ""),
		Secure: true,
	})
	Expect(err).NotTo(HaveOccurred())

	err = s3Client.MakeBucket(ctx, bucketName, minio.MakeBucketOptions{})
	Expect(err).NotTo(HaveOccurred())

	DeferCleanup(func() {
		err := s3Client.RemoveBucketWithOptions(context.Background(), bucketName, minio.RemoveBucketOptions{ForceDelete: true})
		Expect(err).NotTo(HaveOccurred())
	})

	return s3Client, bucketName
}
