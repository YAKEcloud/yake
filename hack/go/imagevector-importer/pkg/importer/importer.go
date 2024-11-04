package importer

import (
	"bytes"
	"container/ring"
	"fmt"
	"io"
	"io/ioutil"
	"math"
	"net/http"
	"net/url"
	"os"
	"path"
	"regexp"
	"strings"

	"gopkg.in/yaml.v3"
)

// ExportCharts Exports the configured charts to a directory
func ImportImageVectors(config Configuration) {

	test := new(ring.Ring)
	var outBytes []byte

	for _, cfg := range config.SrcCfg {
		if cfg.Version["fromFile"].(string) == "iterative" {
			if test.Len() == 1 && test.Value == nil {
				test.Value = cfg
			} else {
				tmp := ring.Ring{Value: cfg}
				test = test.Link(&tmp)
			}
			continue
		}
		// parse the version for the image vector from the specified file as regex
		// As the regex is homogeneous for helmreleases and extensions, this was the
		// simplest way to get the current versions
		fileForVersion, err := ioutil.ReadFile(cfg.Version["fromFile"].(string))
		if err != nil {
			panic(err)
		}
		tmp, err := getImageVector(cfg, fileForVersion)
		if err != nil {
			panic(err)
		}
		outBytes = append(outBytes, tmp...)
	}

	// Process the elements for which we do  not have a version specified in yake.
	// THe idea is as follows: The version is specified in the already contructed image
	// vector or will be present in one of the "future" image vectors. Therefore, iterate
	//over the ring of configs and try to construct the image vector. At least one config
	// should be able to produce a valid image vector per iteration. Therefore, the maximum
	// of iterations is for sure smaller than the number of remaining elemenents in the ring
	// squared.
	numRemainingConfigs := test.Len()
	maxRequiredIterations := int(math.Pow(float64(numRemainingConfigs), 2))
	for i := 0; i < maxRequiredIterations; i++ {
		if test.Len() == 1 && test.Value == nil {
			break
		}

		cur := test.Unlink(1)
		tmp, err := getImageVector(cur.Value.(SrcConfiguration), outBytes)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error retrieving image vector: %v\n", err)
			test = test.Link(cur)
			test = test.Next()
			continue
		}
		outBytes = append(outBytes, tmp...)
		test = test.Next()
	}

	fmt.Println(string(outBytes))
}

// getImageVector ...
func getImageVector(cfg SrcConfiguration, bytesForVersion []byte) ([]byte, error) {

	re, err := regexp.Compile(cfg.Name + "[ :\n]*(?:tag|version): v?(?P<version>[0-9]+.[0-9].+[0-9]+)")
	match := re.FindSubmatch(bytesForVersion)
	if len(match) == 0 {
		return nil, fmt.Errorf("couldn't retrieve version from input bytes", cfg)
	}
	version := "v" + string(match[1])

	// download the image vector for the current component and output it to stdout
	imageVectorUrl, err := url.JoinPath("https://raw.githubusercontent.com", cfg.Repo, version, cfg.ImageVector)
	resp, err := http.Get(imageVectorUrl)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	imageVectorAsBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	imageVector := make(map[string]any)
	err = yaml.Unmarshal(imageVectorAsBytes, &imageVector)
	if err != nil {
		return nil, err
	}

	// insert docker.io or docker.io/library, when it is missing in upstream image vector
	if images, ok := imageVector["images"].([]any); ok {
		for _, item := range images {
			repository := item.(map[string]any)["repository"].(string)
			repositorySplitted := strings.Split(repository, "/")
			if len(repositorySplitted) == 1 {
				item.(map[string]any)["repository"] = "docker.io/library/" + item.(map[string]any)["repository"].(string)
			} else if !strings.Contains(repositorySplitted[0], ".") {
				item.(map[string]any)["repository"] = "docker.io/" + item.(map[string]any)["repository"].(string)
			} else if repositorySplitted[0] == "docker.io" && len(repositorySplitted) == 2 {
				item.(map[string]any)["repository"] = path.Join(repositorySplitted[0], "library", repositorySplitted[1])
			}
		}
	} else {
		return nil, fmt.Errorf("imageVector downloaded from %s does not contain valid 'images' key", imageVectorUrl)
	}

	out := make(map[string]any)
	out[cfg.Name] = make(map[string]any)
	out[cfg.Name].(map[string]any)["imageVectorOriginal"] = imageVector

	var outBytes bytes.Buffer
	yamlEncoder := yaml.NewEncoder(io.Writer(&outBytes))
	yamlEncoder.SetIndent(2)
	err = yamlEncoder.Encode(out)
	if err != nil {
		return nil, err
	}

	return outBytes.Bytes(), nil
}
