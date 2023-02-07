package releaser

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"regexp"

	"gopkg.in/yaml.v3"
)

// ExportCharts Exports the configured charts to a directory
func ImportImageVectors(config Configuration) {

	for _, cfg := range config.SrcCfg {
		// parse the version for the image vector from the specified file as regex
		// As the regex is homogeneous for helmreleases and extensions, this was the
		// simplest way to get the current versions
		fileForVersion, err := ioutil.ReadFile(cfg.Version["fromFile"].(string))
		if err != nil {
			panic(err)
		}
		regexp.Match(cfg.Name , fileForVersion)
		re, err := regexp.Compile(cfg.Name + ".*\n.*version: (?P<version>[0-9]+.[0-9].+[0-9]+)")
		match := re.FindSubmatch(fileForVersion)
		version := "v" + string(match[1])


		// download the image vector for the current component and output it to stdout
		imageVectorUrl, err := url.JoinPath("https://raw.githubusercontent.com", cfg.Repo, version, cfg.ImageVector)
		resp, err := http.Get(imageVectorUrl)
		if err != nil {
			panic(err)
		}
		defer resp.Body.Close()
		imageVectorAsBytes, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			panic(err)
		}

		imageVector := make(map[string]any)
		err = yaml.Unmarshal(imageVectorAsBytes, &imageVector)
		if err != nil {
			panic(err)
		}
		out := make(map[string]any)
		out[cfg.Name] = make(map[string]any)
		out[cfg.Name].(map[string]any)["imageVectorOriginal"] = imageVector
		outBytes, err := yaml.Marshal(out)
		if err != nil {
			panic(err)
		}
		fmt.Println(string(outBytes))
	}
}
