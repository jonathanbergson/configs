---
title: Main
category: ''
---

# Configuracões

- Operational System
  - [Linux](https://github.com/jonathanbergson/configs/blob/master/docs/OS-LINUX.md)
  - [MacOS](https://github.com/jonathanbergson/configs/blob/master/docs/OS-MAC.md)
  - [Windows](https://github.com/jonathanbergson/configs/blob/master/docs/OS-WINDOWS.md)
- Other
  - [Browser](https://github.com/jonathanbergson/configs/blob/master/docs/BROWSER.md)
  - [Text Editor](https://github.com/jonathanbergson/configs/blob/master/docs/EDITORS.md)
  - [Softwares](https://github.com/jonathanbergson/configs/blob/master/docs/SOFTWARES.md)

## Developer Tools











## Linguagens de Programacão

### ASDF - Manage Runtime Versions

Instalar o gerenciador de versão:

```shell
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
cd ~/.asdf
git checkout "$(git describe --abbrev=0 --tags)"
```

### .NET Code

```shell
asdf plugin-add dotnet-core https://github.com/emersonsoares/asdf-dotnet-core.git
asdf list all dotnet-core
asdf install asdf global elixir 1.2.4
asdf global asdf global elixir 1.2.4
```

### Node

```shell
# MacOS
brew install coreutils
brew install gpg

# Linux
apt-get install dirmngr
apt-get install gpg
```

```shell
asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
bash ~/.asdf/plugins/nodejs/bin/import-release-team-keyring

asdf list all nodejs
asdf install nodejs latest
asdf global nodejs 13.11.0
```

###### Configurar NPM e pacotes globais:

```shell
npm config set init-author-name "Your name"
npm config set init-author-email "name@domain.com"
npm config set init-author-url "http://domain.com"
npm config set init-license "MIT"
```

```shell
npm i -g generator-editorconfig gitignore nodemon yarn yo
npm i -g create-react-app react-native-cli
```

###### Modo de instalação via NVM:

```shell
brew install nvm

export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion

nvm install --lts
```

## Docker

```shell
docker container run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer
```
