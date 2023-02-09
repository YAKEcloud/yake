package install

import (
	"context"
	"fmt"
	"net/url"
	"os"
	"strings"

	"github.com/23technologies/23kectl/pkg/common"
	"golang.org/x/oauth2"

	"github.com/fluxcd/flux2/pkg/manifestgen/sourcesecret"
	"github.com/go-git/go-git/v5"
	gitconfig "github.com/go-git/go-git/v5/config"
	"github.com/go-git/go-git/v5/plumbing/transport"
	"github.com/go-git/go-git/v5/plumbing/transport/ssh"
	"github.com/go-git/go-git/v5/storage/memory"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/utils/pointer"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/envtest"
	k8syaml "sigs.k8s.io/yaml"

	gh "github.com/google/go-github/v36/github"
)

func generateDeployKey(kubeClient client.WithWatch, secretName string, repoUrl string) (*ssh.PublicKeys, error) {
	sec := corev1.Secret{}
	err := kubeClient.Get(context.Background(), client.ObjectKey{
		Namespace: common.FLUX_NAMESPACE,
		Name:      secretName,
	}, &sec)
	exists := err == nil

	testEnv := &envtest.Environment{}

	_ = testEnv
	var keys *ssh.PublicKeys

	if exists {
		keys, _ = ssh.NewPublicKeys("git", sec.Data["identity"], "")

		fmt.Println(`A key was already deployed to your cluster and I did not change it.`)

		Container.BlockUntilKeyCanRead(repoUrl, keys, string(sec.Data["identity.pub"]))

		return keys, nil
	} else {
		fluxRepoSecret := corev1.Secret{}
		repourl, err := url.Parse(repoUrl)
		if err != nil {
			return nil, err
		}

		// define some options for the generation of the flux source secret
		sourceSecOpts := sourcesecret.MakeDefaultOptions()
		sourceSecOpts.PrivateKeyAlgorithm = "ed25519"
		sourceSecOpts.SSHHostname = Container.GetSSHHostname(repourl)
		sourceSecOpts.Name = secretName

		// generate the flux source secret manifest and store it as []byte in the shootResources
		secManifest, err := sourcesecret.Generate(sourceSecOpts)
		if err != nil {
			return nil, err
		}
		// lastly, also deploy the flux source secret into the projectNamespace in the seed cluster
		// in order to reuse it, when other shoots are created
		err = k8syaml.Unmarshal([]byte(secManifest.Content), &fluxRepoSecret)

		if err != nil {
			return nil, err
		}
		fluxRepoSecret.SetNamespace(common.FLUX_NAMESPACE)

		fmt.Println(`I created an ssh key for you.`)

		err = kubeClient.Create(context.Background(), &fluxRepoSecret)
		if err != nil {
			return nil, err
		}

		keys, err = ssh.NewPublicKeys("git", fluxRepoSecret.Data["identity"], "")
		if err != nil {
			return nil, err
		}

		Container.BlockUntilKeyCanRead(repoUrl, keys, string(fluxRepoSecret.Data["identity.pub"]))

		return keys, nil
	}
}

func registerDeployKeyWithGithub(repoUrl, pubkey, token string) {

	// get a *github.Client	for the github token
	// this client will be used for interacting with the github api
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: token},
	)
	tokenClient := oauth2.NewClient(context.Background(), ts)
	client := gh.NewClient(tokenClient)

	owner := strings.Split(repoUrl, "/")[3]
	repo := strings.Split(repoUrl, "/")[4]
	repo = strings.Replace(repo, ".git", "", 1)

	key := gh.Key{
		Key:      pointer.String(pubkey),
		ReadOnly: pointer.Bool(false),
	}
	_, _, err := client.Repositories.CreateKey(context.Background(), owner, repo, &key)

	if err != nil {
		msg := err.Error()

		if !strings.Contains(msg, "key is already in use") {
			fmt.Println("Tried to add deploy key to github, but failed.", msg)
		}
	}
}

func blockUntilKeyCanRead(repoUrl string, keys *ssh.PublicKeys, pubkey string) {
	// add github deploy key automatically, when GH_TOKEN is provided
	if token, exists := os.LookupEnv("GH_TOKEN"); exists && keyCanRead(repoUrl, keys) != nil {
		registerDeployKeyWithGithub(repoUrl, pubkey, token)
	}

	var err error
	for {
		err = keyCanRead(repoUrl, keys)
		if err == nil {
			fmt.Println(`Read access granted.`)
			break
		}

		err := fmt.Errorf("make sure that %s can be accessed by this key:\n%s", repoUrl, err)
		fmt.Println(err.Error())

		common.PrintHighlight(strings.TrimSpace(pubkey))
		common.PressEnterToContinue()
	}
}

func keyCanRead(url string, publicKeys *ssh.PublicKeys) error {
	remote := git.NewRemote(memory.NewStorage(), &gitconfig.RemoteConfig{
		Name: "origin",
		URLs: []string{url},
	})

	_, err := remote.List(&git.ListOptions{
		Auth: publicKeys,
	})

	if err != nil && err != transport.ErrEmptyRemoteRepository {
		return err
	}
	return nil
}

func getSSHHostname(repourl *url.URL) string {
	return repourl.Host
}
