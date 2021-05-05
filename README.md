# 23ke


# Start new deployment

export $MYNAME=foo
export $MYENV=development
export $23KEVERSION
mkdir 23ke-config-$MYNAME && cd 23ke-config-$MYNAME
git init
git submodule add -b $23KEVERSION git@github.com:23technologies/23ke.git
mkdir $MYENV && cd $MYENV
../23ke/init-new-env.sh  # copies and symlinks templates and creates new CA

./bin/
