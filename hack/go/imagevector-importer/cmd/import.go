/*
Copyright © 2022 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"github.com/gardener-community/gardener-chart-releaser/pkg/releaser"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// exportCmd represents the export command
var exportCmd = &cobra.Command{
	Use:   "import",
	Short: "Imports the imageVectors to the gardener configuration chart values (requires GITHUB_TOKEN)",
	Long: ``,
	Run: func(cmd *cobra.Command, args []string) {

		config := releaser.Configuration{}
		viper.Unmarshal(&config)

		releaser.ImportImageVectors(config)
	},
}

func init() {
	rootCmd.AddCommand(exportCmd)
}
