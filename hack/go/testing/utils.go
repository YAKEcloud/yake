package testing

import (
	"context"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/wait"
	"os"
	k8sclient "sigs.k8s.io/controller-runtime/pkg/client"
	"time"
)

func GetEnvDefault(name string) string {
	value, exists := os.LookupEnv(name)

	if exists {
		return value
	}

	return name
}

func waitForCondition(k8sClient k8sclient.Client, ctx context.Context, obj any, namespace string, name string, condition string) error {
	innerCtx, innerCancel := context.WithTimeout(ctx, time.Minute)
	defer innerCancel()

	return wait.PollUntilWithContext(innerCtx, time.Second, func(ctx context.Context) (done bool, err error) {
		k8sClient.Get(ctx, k8sclient.ObjectKey{
			Namespace: namespace,
			Name:      name,
		}, obj.(k8sclient.Object))

		type WithConditions struct {
			Status struct {
				Conditions []metav1.Condition
			}
		}

		for _, item := range obj.(WithConditions).Status.Conditions {
			if item.Type == condition && item.Status == "True" {
				return true, nil
			}
		}
		return false, nil
	})
}
