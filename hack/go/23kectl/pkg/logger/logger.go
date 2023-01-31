package logger

import (
	"github.com/bombsimon/logrusr/v4"
	"github.com/go-logr/logr"
	"github.com/sirupsen/logrus"
	"github.com/sirupsen/logrus/hooks/writer"
	"io"
	"os"
)

var logger logr.Logger

// Init returns a teardown function to dispose off resources like open files.
func Init() func() {
	logrusLog := logrus.New()
	logrusLog.SetLevel(logrus.DebugLevel)
	logrusLog.SetOutput(io.Discard)

	logrusLog.AddHook(&writer.Hook{
		Writer: os.Stderr,
		LogLevels: []logrus.Level{
			logrus.ErrorLevel,
		},
	})

	file, _ := os.OpenFile("log.txt", os.O_WRONLY|os.O_APPEND|os.O_CREATE, 0600)
	_, _ = file.WriteString("============================================================\n")

	logrusLog.AddHook(&writer.Hook{
		Writer: file,
		LogLevels: []logrus.Level{
			logrus.ErrorLevel,
			logrus.InfoLevel,
			logrus.DebugLevel,
		},
	})

	logger = logrusr.New(logrusLog)

	return func() {
		if file != nil {
			file.Close()
		}
	}
}

func Get(name ...string) logr.Logger {
	if len(name) == 1 {
		return logger.WithName(name[0])
	} else {
		return logger
	}
}
