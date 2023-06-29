#!/usr/bin/env bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# set user aka client name

user="p113"

if ! command -v nvm &> /dev/null
then
    echo "nvm not found, installing..."
    # update nvm from git
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
    source ~/.bashrc
fi

# update npm to the last version of 18
nvm install 20

# check for pnpm
if command -v pnpm >/dev/null 2>&1
then
 # update pnpm
 pnpm add -g pnpm 
else
 # install pnpm
 npm i -g pnpm
 pnpm setup
 source ~/.bashrc
fi
# update code
git pull

# install packages
pnpm install
# build front end
pnpm build
# add .htaccess
cp _htaccess build/.htaccess
# set user permissions
chown -R $user:$user build
chmod 755 build
# ask for node_modules removal
read -p "Remove the directory node_modules as it is not needed in Production mode ? (Y/n) " choice

if [ "$choice" == "n" ] || [ "$choice" == "N" ]
then
 echo "Le répertoire node_modules n'a pas été effacé."
else
 rm -rf node_modules
 echo "Le répertoire node_modules a été effacé."
fi
