/*
Copyright © 2022 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"github.com/yakecloud/yake/imagevector-importer/pkg/importer"
)

// exportCmd represents the export command
var exportCmd = &cobra.Command{
	Use:   "import",
	Short: "Imports the imageVectors to the gardener configuration chart values (requires GITHUB_TOKEN)",
	Long:  ``,
	Run: func(cmd *cobra.Command, args []string) {

		config := importer.Configuration{}
		viper.Unmarshal(&config)

		importer.ImportImageVectors(config)
	},
}

func init() {
	rootCmd.AddCommand(exportCmd)
}
