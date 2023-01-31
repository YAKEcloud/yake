package common

import (
	fluxutils "github.com/23technologies/23kectl/pkg/fluxutils"
	runclient "github.com/fluxcd/pkg/runtime/client"
	"k8s.io/cli-runtime/pkg/genericclioptions"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

func CreateKubeClient(kubeconfig string) (*genericclioptions.ConfigFlags, *runclient.Options, client.WithWatch, error) {
	var kubeconfigArgs = genericclioptions.NewConfigFlags(false)
	kubeconfigArgs.KubeConfig = &kubeconfig

	var kubeclientOptions = new(runclient.Options)
	kubeClient, err := fluxutils.KubeClient(kubeconfigArgs, kubeclientOptions)

	if err != nil {
		return nil, nil, nil, err
	}

	return kubeconfigArgs, kubeclientOptions, kubeClient, nil
}
