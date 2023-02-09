package testing

import (
	"context"
	"github.com/23technologies/23kectl/pkg/common"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	v1 "k8s.io/api/apps/v1"
	k8sclient "sigs.k8s.io/controller-runtime/pkg/client"
	"time"
)

func init() {
	It("can deploy a microservice", func() {
		_, _, client, err := common.CreateKubeClient()
		Expect(err).NotTo(HaveOccurred())

	})
}

func deployMicroservice(k8sClient k8sclient.Client, ctx context.Context) {
	// deploy sample shoot
	// kubectl apply -f "hack/ci/misc/shoot-microservice-$PROVIDER-$ZONE".yaml --context garden

	maxWait := 300 * time.Second
	percentage := 0
	lastPercentage := 0
	lastChange := time.Now()

	getProgress := func() {
		// kubectl --context garden get shoot microservice -n garden-testing -o jsonpath="{.status.lastOperation.state}"
	}

	_ = getProgress

	for getProgress() == "Succeeded" { // [ ! "$()" == "Succeeded" ]
		now := time.Now()           // NOW=$(date +%s)
		lastPercentage = percentage // LASTPERCENTAGE=$PERCENTAGE
		percentage = 0              // PERCENTAGE=$(kubectl --context garden get shoot microservice -n garden-testing -o jsonpath="{.status.lastOperation.progress}")

		if lastPercentage != percentage { // if [ "$LASTPERCENTAGE" -ne "$PERCENTAGE" ]; then
			lastChange = now // LASTCHANGE=$NOW
		} // fi

		if now.Sub(lastChange) >= maxWait { // if [ "$(( $NOW - $LASTCHANGE ))" -ge "$MAX_WAIT" ]; then
			panic("No progress in $MAX_WAIT seconds. Exiting.") // echo "No progress in $MAX_WAIT seconds. Exiting."

			// print debug info
			// kubectl --context garden get shoot microservice -n garden-testing -o yaml;
		} // fi

		time.Sleep(5 * time.Second) // sleep 5
	}

	dumpMicroserviceKubeconfig()
	applyMicroserviceYaml()

	time.Sleep(5 * time.Second) // sleep 5

	err := waitForCondition(
		k8sClient,
		ctx,
		&v1.Deployment{},
		"default",
		"loadgenerator",
		"Available",
	) // kubectl wait --for=condition=available --timeout=600s -n default deployment/loadgenerator --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml

	Expect(err).NotTo(HaveOccurred())
	// kubectl wait --for=condition=available --timeout=600s -n default deployment/loadgenerator --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml || { kubectl --context garden get shoot microservice -n garden-testing -o yaml; exit 1; }
}

func applyMicroserviceYaml() {
	// kubectl apply -n default -f hack/ci/misc/microservices-demo.yaml --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml
}

func dumpMicroserviceKubeconfig() {
	// kubectl get secret -n garden-testing microservice.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' --context garden > hack/ci/secrets/shoot-microservice-kubeconfig.yaml
}
