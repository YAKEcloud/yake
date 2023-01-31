package common

import "github.com/spf13/viper"

func QueryConfigKey(configKey string, fn func() (any, error)) error {
	if !viper.IsSet(configKey) {
		result, err := fn()
		if err != nil {
			return err
		}

		viper.Set(configKey, result)
		viper.WriteConfig()
	}

	return nil
}
