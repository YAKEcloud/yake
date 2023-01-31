package install

import (
	"context"
	"fmt"

	"github.com/23technologies/23kectl/pkg/common"
	"github.com/AlecAivazis/survey/v2"
	"github.com/minio/minio-go/v7"
	"github.com/spf13/viper"
	"gopkg.in/yaml.v2"

	installv1 "github.com/23technologies/23kectl/pkg/install/v1"
)

func Install(kubeconfig string) error {

	yaml23kectl, err := fetch23kectlyaml()
	if err != nil {
		return err
	}

	installPkgVersion := yaml23kectl["installPkgVersion"]

	switch installPkgVersion {
	case "v1-trial":
		return installv1.Install(kubeconfig)
	case "v1":
		return installv1.Install(kubeconfig)
	default:
		return fmt.Errorf("your current version of 23kectl is too old to install the requested version. Please update 23kectl and try again")
	}
}

func queryBucketConfig() error {

	common.QueryConfigKey("version", func() (any, error) {
		prompt := &survey.Input{
			Message: "Please enter the version to install.",
		}
		var queryResult string
		err := survey.AskOne(prompt, &queryResult, common.WithValidator("required"))
		common.ExitOnCtrlC(err)
		if err != nil {
			return nil, err
		}
		return queryResult, nil
	})
	common.QueryConfigKey("bucket.endpoint", func() (any, error) {
		prompt := &survey.Input{
			Message: "Please enter the bucket endpoint, you got from 23T. This is part of your 23ke license.",
		}
		var queryResult string
		err := survey.AskOne(prompt, &queryResult, common.WithValidator("required"))
		common.ExitOnCtrlC(err)
		if err != nil {
			return nil, err
		}
		return queryResult, nil
	})

	common.QueryConfigKey("bucket.accesskey", func() (any, error) {
		prompt := &survey.Input{
			Message: "Please enter the accesskey, you got from 23T. This is part of your 23ke license.",
		}
		var queryResult string
		err := survey.AskOne(prompt, &queryResult, common.WithValidator("required"))
		common.ExitOnCtrlC(err)
		if err != nil {
			return nil, err
		}

		return queryResult, nil
	})

	common.QueryConfigKey("bucket.secretkey", func() (any, error) {
		prompt := &survey.Input{
			Message: "Please enter the secretkey, you got from 23T. This is part of your 23ke license.",
		}
		var queryResult string
		err := survey.AskOne(prompt, &queryResult, common.WithValidator("required"))
		common.ExitOnCtrlC(err)
		if err != nil {
			return nil, err
		}

		return queryResult, nil
	})

	return nil

}

func fetch23kectlyaml() (map[string]string, error) {

	err := queryBucketConfig()
	if err != nil {
		return nil, err
	}

	s3Client, err := common.CreateMinioClient()
	if err != nil {
		return nil, err
	}

	obj, err := s3Client.GetObject(context.Background(), viper.GetString("version"),
		"23kectl.yaml", minio.GetObjectOptions{})
	if err != nil {
		return nil, err
	}

	stat, err := obj.Stat()
	if err != nil {
		return nil, err
	}

	content := make([]byte, stat.Size)
	obj.Read(content)

	yaml23kectl := make(map[string]string)
	err = yaml.Unmarshal(content, yaml23kectl)
	if err != nil {
		return nil, err
	}

	return yaml23kectl, nil
}
