package importer

type Configuration struct {
	SrcCfg []SrcConfiguration `mapstructure:"sources"`
}

type SrcConfiguration struct {
	Name        string         `mapstructure:"name"`
	Repo        string         `mapstructure:"repo"`
	Version     map[string]any `mapstructure:"version",omitempty`
	ImageVector string         `mapstructure:"imageVector"`
}
