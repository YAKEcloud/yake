package common

import (
	"github.com/AlecAivazis/survey/v2"
	"github.com/go-playground/validator/v10"
)

// Available validators: https://pkg.go.dev/github.com/go-playground/validator/v10
func MakeValidatorFn(tag string) func(value interface{}) error {
	vtor := validator.New()

	return func(value interface{}) error {
		return vtor.Var(value, tag)
	}
}


func WithValidator(tag string) survey.AskOpt {
	return survey.WithValidator(MakeValidatorFn(tag))
}
