package install

import (
	"context"
	"os"
	"path"

	"github.com/23technologies/23kectl/pkg/common"
	utils "github.com/23technologies/23kectl/pkg/fluxutils"
	"github.com/fluxcd/flux2/pkg/manifestgen"
	runclient "github.com/fluxcd/pkg/runtime/client"
	"github.com/minio/minio-go/v7"
	"github.com/spf13/viper"
	"k8s.io/cli-runtime/pkg/genericclioptions"
)

func installFlux(kubeconfigArgs *genericclioptions.ConfigFlags, kubeclientOptions *runclient.Options) error {
	// Install flux.
	// We just copied over github.com/fluxcd/flux2/internal/utils to 23kectl/pkg/utils
	// and use the Apply function as is

	tmpDir, err := manifestgen.MkdirTempAbs("", *kubeconfigArgs.Namespace)
	if err != nil {
		return err
	}

	defer os.RemoveAll(tmpDir)

	manifest, err := Container.CreateFluxManifest()
	if err != nil {
		return err
	}

	_, err = manifest.WriteFile(tmpDir)
	if err != nil {
		return err
	}

	_, err = utils.Apply(context.Background(), kubeconfigArgs, kubeclientOptions, tmpDir, path.Join(tmpDir, manifest.Path))
	if err != nil {
		return err
	}

	return nil
}

// createFluxManifests ...
func createFluxManifest() (*manifestgen.Manifest, error) {

	s3Client, err := common.CreateMinioClient()
	if err != nil {
		return nil, err
	}

	obj, err := s3Client.GetObject(context.Background(), viper.GetString("version"),
		"flux-system/gotk-components.yaml", minio.GetObjectOptions{})
	if err != nil {
		return nil, err
	}

	stat, err := obj.Stat()
	if err != nil {
		return nil, err
	}

	content := make([]byte, stat.Size)
	obj.Read(content)

	manifest := manifestgen.Manifest{
		Path: "flux-system/gotk-components.yaml",
	}
	manifest.Content = string(content)

	return &manifest, nil
}
