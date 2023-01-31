package testing

import (
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

var _ = Describe("Installing 23KE", func() {
	testKind("v1.24.4")
	// testKind("v1.25.1")
})

func testKind(v string) {
	Context("on kind "+v, Ordered, func() {
		var kubeconfig string

		BeforeAll(func(ctx SpecContext) {
			kubeconfig, _ = useKindCluster(ctx, v)
		})

		It("should create a working kbueconfig", func() {
			Expect(kubeconfig).To(BeAnExistingFile())
		})
	})
}
