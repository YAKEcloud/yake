###############################################################################
# _ _    _ __   _      __   _ __   __    ___   ___
# ( '_`\ ( '__)/'_`\  /'_ `\( '__)/'__`\/',__)/',__)
# | (_) )| |  ( (_) )( (_) || |  (  ___/\__, \\__, \
# | ,__/'(_)  `\___/'`\__  |(_)  `\____)(____/(____/
# | |                ( )_) |
# (_)                 \___/'
#
# progress, the pluggable command line progress bar.
#
# progress is a lightweight, configurable script you can source into your own
# shell script to include a fancy progress bar informing your users about the
# progression of your program. You yourself decide what a unit of progress
# means and when progress begins or ends
#
# A basic usage example may look something like this:
#
# #!/bin/bash
# PROGRESS_NUMBER_OF_STEPS=10
# source progress.sh
#
# for i in $(seq 10); do
#   echo $i
#   sleep .1
#   progress_step
# done
#
# progress_end
#
# Here, we defined the number of steps our program was going to make and then
# included the progress script in our script. This made two functions
# available: progress_start and progress_end. You can call the former whenever
# you want to increment your progress bar and must call the latter at the end
# of your progress, under certain circumstances.
#
# progress is made to be very configurable. Here is a list of variables you can
# tweak, by setting them before you source the script:
#
# * PROGRESS_WIDTH: How many characters the progress bar should be wide.
#   The PROGRESS_WIDTH may be larger or smaller than the number of steps and
#   the progress will adapt itself. Note that when the progress_width is not
#   divisible by the number_of_steps, or the other way around, you must call
#   progress_end to fill up the progress bar at the end of your program.
# * PROGRESS_SYMBOL: The character to use for progress.
# * PROGRESS_FILL_SYMBOL: The character to use for progress not yet made.
# * PROGRESS_FORMAT: A semi-colon-delimited list of UNIX terminal format codes
#   to style the PROGRESS_SYMBOL.
# * PROGRESS_FILL_FORMAT: A semi-colon-delimited list of UNIX terminal format
#   codes to style the PROGRESS_FILL_SYMBOL.
# * PROGRESS_DEFER: Whether to start the progress bar immediately when sourced
#   or wait until progress_start is called (which you don't have to call if
#   you don't set this variable). The exact value does not matter, it just has
#   to be defined to take effect.
# * PROGRESS_INDICATOR_FORMAT: A semi-colon-delimited list of UNIX terminal
#   format codes to use for the step indicator (step/number of steps).
# * PROGRESS_PERCENT_FORMAT: A semi-colon-delimited list of UNIX terminal
#   format codes to use for the percent value to the right of the progress bar.
# * PROGRESS_STICKY: Whether or not to have the progress bar stay sticky
#   on the top of the terminal when it overflows the terminal's number of
#   lines.
#
# You can find a list of "UNIX terminal format codes" here:
# http://misc.flogisoft.com/bash/tip_colors_and_formatting. These codes allow
# you to change the foreground and background color, as well as make text bold
# or even hide something alltogether (for example if you don't want the
# percent, you can use format code 8).
#
# Also, progress exposes the variable progress_line_number, which you can
# modify yourself if you print more than one line of text in one step, for
# example (progress assumes by default that one step = one line). You can
# also set the number of lines printed since the last step by passing that
# number to progress_step as an argument.
###############################################################################

###############################################################################
# BASIC FUNCTIONS
###############################################################################

# Keep all variables in the 'progress' namespace because
# this script is intended to be sourced (to avoid collisions with
# users' variables)

function ceiling_divide {
  ((result=($1 + ($2 - 1))/$2))
  echo $result
}

function string_of_length {
  # Space-separate a sequene of N numbers and
  # replace each number with the wanted character
  seq $1 | tr '\n' ' ' | perl -pe "s/[0-9]+ /$2/g"
}

function move_up {
  # The escape sequence \033[<number>A moves the cursor <number> lines up
  # The carriage return '\r' moves the cursor to the start of the line
  echo -en "\033[${1}A\r"
}

function move_down {
  # The escape sequence \033[<number>B moves the cursor <number> lines down
  # and the carriage return '\r' moves the cursor to the far left again (communism)
  echo -en "\033[${1}B\r"
}

function print_progress {
  if [ $1 -gt $2 ]; then
    return 1
  fi

  # The indicator (current_steps/total_steps) width is two times the total
  # number, since ultimately we'll want to print "(total/total)", plus 3 for
  # the parantheses and forward slash
  indicator_width=$(echo $2 | awk '{ print length($1) * 2 + 3}')

  # printf allows us to right justify the text according to the maximum width
  indicator=$(printf "%${indicator_width}s" "($1/$2)")
  indicator="\033[${progress_indicator_format}m${indicator}\033[0m"

  percent=$(echo "(100.0 * $1) / $2" | bc)
  percent="\033[${progress_percent_format}m[${percent}%]\033[0m"

  # PROGRESS in bold (usually displayed as bright formats)
  echo -en "\033[1mPROGRESS\033[0m: $indicator $3 $percent"
}

###############################################################################
# VARIABLES
###############################################################################

if [ -z $PROGRESS_NUMBER_OF_STEPS ]; then
  echo -e "\033[31m[ERROR]\033[0m \$PROGRESS_NUMBER_OF_STEPS was not set!"
  exit -1
fi

# These here can be configured externally
progress_number_of_steps=$PROGRESS_NUMBER_OF_STEPS
progress_width=${PROGRESS_WIDTH:-$PROGRESS_NUMBER_OF_STEPS}
progress_indicator_format=${PROGRESS_INDICATOR_FORMAT:-31}
progress_percent_format=${PROGRESS_PERCENT_FORMAT:-35}

# The symbol for actual progress made
progress_symbol=${PROGRESS_SYMBOL:-'\xE2\x96\xAC'}
progress_symbol=$(echo -en "$progress_symbol")

# The escape code for the progresss format
progress_format=${PROGRESS_FORMAT:-32}

# The symbol for progress not yet made
progress_fill_symbol=${PROGRESS_FILL_SYMBOL:-"$progress_symbol"}
progress_fill_format=${PROGRESS_FILL_FORMAT:-0}

# How many steps should equal an increment in one unit of progress
# This value is important when the number of steps is greater than the width
# because then it is not the case that one step = one extra bar of progress
# but rather k steps will equal one bar of progress, with k > 1
progress_divisor=$(ceiling_divide $progress_number_of_steps $progress_width)

# The step size needs to be stored for the other extreme case, where the width
# of the progress bar is greater (i.e. contains more units) than there are
# steps. In that case, each step constitutes a greater number of units for the
# progress bar.
progress_step_size=$(ceiling_divide $progress_width $progress_number_of_steps)

# One unit of progress (containing progress_step_size many characters)
progress_unit=$(string_of_length $progress_step_size "$progress_symbol")

# Throw in the escape codes. Note that the progress must be terminated with the
# format escape of the filler, to restore its format after inserting the progress
progress_unit=$(echo -en "\033[${progress_format}m$progress_unit\033[${progress_fill_format}m")

# One unit of filler we replace with each unit of progress each time
progress_fill_unit=$(string_of_length $progress_step_size "$progress_fill_symbol")

# The actual progress bar
progress_line=$(string_of_length $progress_width "$progress_fill_symbol")
progress_line="\033[${progress_fill_format}m${progress_line}\033[0m"

# How many steps we have made so far (out of $number_of_steps many)
# If the width is greater than the number of steps, we will have to
# advance the progress_index by more than 1 on each progress_step.
progress_step=0

# How many lines have been printed so far
progress_line_number=1
progress_max_lines=$(tput lines)
((progress_max_lines = progress_max_lines - 2))

###############################################################################
# PROGRESS FUNCTIONS
###############################################################################

function progress_step {

  # Don't overflow ...
  if [ -z $PROGRESS_STICKY ] && [ $progress_line_number -ge $progress_max_lines ]; then
    return 0
  elif [ $progress_step -gt $progress_number_of_steps ]; then
    return 0
  fi

  ((progress_step += 1))
  ((remainder=progress_step % progress_divisor))

  if [ $remainder -eq 0 ]; then
    # Replace one unit of the filler with one unit of progress
    progress_gsed_command="s/$progress_fill_unit/$progress_unit/"

    # If the fill symbol equals the progress symbol, we need to specify after
    # which match to start replacing, else we'll just match the first replacement
    # we made (since we'd be replacing e.g. xxxx with \033[31mx\033[0mxxx which
    # still contains x as the first text character, so next time we'd get
    # \033[31m\033[31mx\033[0m\033[0m instead of replacing the next fill character)
    if [ "$progress_fill_symbol" = "$progress_symbol" ]; then
        ((progress_index = progress_step / progress_divisor))
        progress_gsed_command="${progress_gsed_command}${progress_index}"
    fi
    progress_line="$(echo -e "$progress_line" | sed "$progress_gsed_command")"
  fi

  # We must always increment on the last step
  if [ $progress_step -eq $progress_number_of_steps ]; then
      ((progress_line_number += ${1:-1}))
  # Dont' increment when we've reached the end of the terminal
  elif [ $progress_line_number -lt $progress_max_lines ]; then
    # If nothing is passed, we increment by one (default), else if it is
    # -1, we do nothing (don't increment), else (if it's nonzero) we increment
    # by the given amount.
    if [ -z $1 ]; then
      ((progress_line_number += 1))
    elif [ $1 -ne -1 ]; then
      ((progress_line_number += $1))
    fi
  fi

  # Go back to the beginning of the line
  move_up $progress_line_number
  print_progress $progress_step $progress_number_of_steps "$progress_line"
  move_down $progress_line_number
}

# At the end, we fill up the progress bar. This is to account for when the step
# number and progress width are incompatible. This is the case when, for example,
# the width is greater than the number of steps and they are not divisible
function progress_end {
  if [ -z $PROGRESS_STICKY ] && [ $progress_line_number -ge $progress_max_lines ]; then
    return 0
  fi

  progress_line="$(echo -en "$progress_line" | perl -pe 's/$(echo $progress_fill_symbol)/'$progress_symbol'/g')"
  if [ $1 ]; then
    ((progress_line_number += $1))
  fi
  move_up $progress_line_number
  print_progress $progress_number_of_steps $progress_number_of_steps "$progress_line"
  move_down $progress_line_number
}

function progress_start {
  print_progress $progress_step $progress_number_of_steps "$progress_line"
  echo ""
}

if [ -z $PROGRESS_DEFER ]; then
  progress_start
fi
