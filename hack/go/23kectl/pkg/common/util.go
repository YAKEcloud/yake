package common

import (
	"crypto/rand"
	"encoding/base64"
	"encoding/hex"
	"errors"
	"fmt"
	"os"
	"strings"

	"github.com/AlecAivazis/survey/v2/terminal"
	"github.com/fatih/color"
	"github.com/go-playground/validator/v10"
)

func PressEnterToContinue() {
	fmt.Println("Press the Enter Key to continue")
	fmt.Scanln()
}

func CoerceBase64String(s string) string {
	if isBase64String(s) {
		return s
	} else {
		return base64String(s)
	}
}

func isBase64String(s string) bool {
	err := validator.New().Var(s, "base64")
	return err == nil
}

func base64String(s string) string {
	bob := strings.Builder{}
	base64.NewEncoder(base64.StdEncoding, &bob).Write([]byte(s))

	return bob.String()
}

const colorErr = color.FgRed
const colorHighlight = color.FgBlue

// const colorSuccess = color.FgGreen
const colorWarn = color.FgYellow

var PrintErr = color.New(colorErr).PrintlnFunc()
var PrintHighlight = color.New(colorHighlight).PrintlnFunc()

// var printSuccess = color.New(colorSuccess).PrintlnFunc()
var PrintWarn = color.New(colorWarn).PrintlnFunc()

func RandHex(bytes int) string {
	byteArr := make([]byte, bytes)
	rand.Read(byteArr)
	return hex.EncodeToString(byteArr)
}


func ExitOnCtrlC(err error) {
	if errors.Is(err, terminal.InterruptErr) {
		fmt.Println("Ctrl+C, exiting.")
		os.Exit(1)
	} else if err != nil {
		panic(err)
	}
}
