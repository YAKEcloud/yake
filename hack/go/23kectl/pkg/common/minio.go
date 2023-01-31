package common

import (
	"fmt"
	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
	"github.com/spf13/viper"
)

func CreateMinioClient() (*minio.Client, error) {
	endpoint := viper.GetString("bucket.endpoint")
	accessKeyID := viper.GetString("bucket.accesskey")
	secretAccessKey := viper.GetString("bucket.secretkey")
	secure := true
	// Initialize minio client object.
	s3Client, err := minio.New(endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKeyID, secretAccessKey, ""),
		Secure: secure,
	})

	if err != nil {
		return nil, fmt.Errorf(
			"couldn't create minio client (endpoint '%s', accesskey: '%s', secretkey: '%s', secure: %t) %w",
			endpoint,
			accessKeyID,
			secretAccessKey,
			secure,
			err)
	}

	return s3Client, nil
}
