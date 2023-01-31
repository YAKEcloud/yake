package install

import (
	"context"
	"fmt"
	"github.com/pkg/errors"
	"time"

	"github.com/23technologies/23kectl/pkg/common"
	"github.com/23technologies/23kectl/pkg/logger"

	"github.com/fluxcd/pkg/apis/meta"
	sourcecontrollerv1beta2 "github.com/fluxcd/source-controller/api/v1beta2"
	"github.com/go-git/go-billy/v5/memfs"
	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing"
	"github.com/go-git/go-git/v5/plumbing/object"
	"github.com/go-git/go-git/v5/plumbing/transport"
	"github.com/go-git/go-git/v5/plumbing/transport/ssh"
	"github.com/go-git/go-git/v5/storage/memory"
	"github.com/spf13/viper"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

func create23keBucket(kubeClient client.WithWatch) error {

	log := logger.Get("create23kebucket")
	var err error

	bucket := viper.GetString("version")

	bucket23ke := sourcecontrollerv1beta2.Bucket{
		TypeMeta: metav1.TypeMeta{
			APIVersion: "source.toolkit.fluxcd.io/v1beta2",
			Kind:       "Bucket",
		},
		ObjectMeta: metav1.ObjectMeta{
			Name:      common.BUCKET_NAME,
			Namespace: common.FLUX_NAMESPACE,
		},
		Spec: sourcecontrollerv1beta2.BucketSpec{
			Provider:   "",
			BucketName: bucket,
			Endpoint:   viper.GetString("bucket.endpoint"),
			SecretRef: &meta.LocalObjectReference{
				Name: common.BUCKET_SECRET_NAME,
			},
			Interval: metav1.Duration{Duration: time.Minute},
		},
	}

	err = kubeClient.Create(context.TODO(), &bucket23ke, &client.CreateOptions{})
	if err != nil {
		log.Info("Couldn't create bucket source "+common.BUCKET_NAME, "error", err)
	}
	return nil
}

func createGitRepositories(kubeClient client.WithWatch) error {
	log := logger.Get("createGitRepositories")
	var err error

	gitRepoUrl := viper.GetString("admin.gitrepourl")
	gitRepoBranch := viper.GetString("admin.gitrepobranch")

	gitrepo23keconfig := sourcecontrollerv1beta2.GitRepository{
		TypeMeta: metav1.TypeMeta{
			APIVersion: "source.toolkit.fluxcd.io/v1beta2",
			Kind:       "GitRepository",
		},
		ObjectMeta: metav1.ObjectMeta{
			Name:      common.CONFIG_23KE_GITREPO_NAME,
			Namespace: common.FLUX_NAMESPACE,
		},
		Spec: sourcecontrollerv1beta2.GitRepositorySpec{
			URL:       gitRepoUrl,
			SecretRef: &meta.LocalObjectReference{Name: common.CONFIG_23KE_GITREPO_KEY},
			Interval:  metav1.Duration{Duration: time.Minute},
			Reference: &sourcecontrollerv1beta2.GitRepositoryRef{Branch: gitRepoBranch},
		},
		Status: sourcecontrollerv1beta2.GitRepositoryStatus{},
	}

	err = kubeClient.Create(context.TODO(), &gitrepo23keconfig, &client.CreateOptions{})
	if err != nil {
		// todo: is this really an error we want to swallow?
		log.Info("Couldn't create git source "+common.CONFIG_23KE_GITREPO_NAME, "error", err)
	}
	return nil
}

func updateConfigRepo(publicKeys *ssh.PublicKeys) error {
	log := logger.Get("updateConfigRepo")
	gitRepo := viper.GetString("admin.gitrepourl")

	var err error
	workTreeFs := memfs.New()

	fmt.Printf("Cloning config repo to memory\n")
	repository, err := git.Clone(memory.NewStorage(), workTreeFs, &git.CloneOptions{
		URL:        gitRepo,
		Auth:       publicKeys,
		NoCheckout: true,
	})
	if err != nil && !errors.Is(err, transport.ErrEmptyRemoteRepository) {
		return err
	}

	branchName := viper.GetString("admin.gitRepoBranch")

	// check whether the remote reference exists
	// if not, we create an orphaned branch, this is the same as git init would do and should
	// https://github.com/go-git/go-git/issues/370
	remoteRef, err := repository.Reference(plumbing.NewRemoteReferenceName("origin", branchName), true)
	if err != nil {
		repository.Storer.SetReference(plumbing.NewSymbolicReference(plumbing.HEAD, plumbing.NewBranchReferenceName(branchName)))
	}

	worktree, err := repository.Worktree()
	if err != nil {
		log.Info("Couldn't get worktree", "error", err)
	}

	// if the remoteRef was found we either checkout and create a local copy of the remote branch,
	// or, if the local branch already exists, we simply check it out
	if remoteRef != nil {
		_, err = repository.Reference(plumbing.NewBranchReferenceName(branchName), true)
		if err != nil {
			err = worktree.Checkout(&git.CheckoutOptions{
				Hash:   remoteRef.Hash(),
				Branch: plumbing.NewBranchReferenceName(branchName),
				Create: true,
			})
			if err != nil {
				return err
			}
		} else {
			err = worktree.Checkout(&git.CheckoutOptions{
				Branch: plumbing.NewBranchReferenceName(branchName),
			})
			if err != nil {
				return err
			}
		}
	}

	_, _ = worktree.Remove(".")

	fmt.Printf("Writing new config\n")

	err = writeConfigDir(workTreeFs, ".")
	if err != nil {
		return err
	}

	_, _ = worktree.Add(".")
	status, _ := worktree.Status()

	if status.IsClean() {
		log.Info("Worktree is clean. Not committing anything.")
	} else {
		log.Info("Commiting to config repo")
		_, err = worktree.Commit("Config update through 23kectl", &git.CommitOptions{
			Author: &object.Signature{
				Name:  "23ke Ctl",
				Email: "23kectl@23technologies.cloud",
				When:  time.Now(),
			},
		})
		if err != nil {
			return err
		}

		log.Info("Pushing to config repo")
		err = repository.Push(&git.PushOptions{
			Auth: publicKeys,
		})
		if err != nil {
			return err
		}
	}

	return nil
}
