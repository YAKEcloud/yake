package testing_test

import (
	"github.com/23technologies/23ke/testing"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

func init() {
	It("Creates working kind cluster", func(ctx SpecContext) {
		kubeconfig, name := testing.UseKindCluster(ctx, "v1.24.4")

		Expect(kubeconfig).To(BeAnExistingFile())
		Expect(name).NotTo(BeEmpty())

		// todo test cleanup
	})
}
