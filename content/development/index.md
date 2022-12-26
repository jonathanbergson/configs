## Docker

Instalar `docker`:

:::: code-group
::: code-group-item Fedora
```shell
# Set up the repository
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager \
    --add-repo \
    https://download.docker.com/linux/fedora/docker-ce.repo

# Install Docker Engine
sudo dnf install docker-ce docker-ce-cli containerd.io docker-compose-plugin

sudo systemctl start docker
sudo systemctl enable docker.service

sudo docker run hello-world
```
:::

::: code-group-item Ubuntu
```shell
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```
:::

::: code-group-item MacOS
```shell
brew install docker --cask
```
:::
::::

Instalar `docker-compose`:

:::: code-group
::: code-group-item Fedora
```shell
sudo dnf install docker-compose
```
:::

::: code-group-item Ubuntu
```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
:::
::::

## ASDF

Instalar `ASDF`:

```shell
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.2
. $HOME/.asdf/asdf.sh
touch ~/.tool-versions
```

## Node.js

Instalar `nvm`:

:::: code-group
::: code-group-item ASDF
```shell
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git

asdf install nodejs latest
asdf install nodejs 16.16.0

asdf global nodejs 16.16.0
```
:::

::: code-group-item Linux
```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install --lts
```
:::

::: code-group-item MacOS
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install --lts
```
:::
::::

Configurar `npm`:

```shell
npm config set init-author-name "Jonathan Bergson"
npm config set init-author-email "contato@bergson.me"
npm config set init-author-url "https://bergson.me"
npm config set init-license "MIT"
```

Instalar pacotes globalmente:

```shell
npm i --location=global \
  yarn gitignore nodemon \
  yo generator-editorconfig \
  create-react-app react-native-cli \
  @vue/cli
```

## .NET

Baixar e instalar

::::code-group
:::code-group-item Linux
```bash
# Usando Snaps
sudo snap install dotnet-sdk --classic --channel=6.0 # Channels [3.1, 5.0, 6.0]
sudo snap alias dotnet-sdk.dotnet dotnet
```
:::

::: code-group-item MacOS
```bash
npx create-vuepress-site [optionalDirectoryName]
```
:::
::::

## Go

Baixar e instalar:

ASDF:

```shell
asdf plugin-add golang https://github.com/kennyp/asdf-golang.git
asdf install golang 1.19.4 
asdf global golang 1.19.4
```

``` shell
sudo tar -C /usr/local -xzf ~/Downloads/go1.17.1.linux-amd64.tar.gz
```

Para realizar o download, [clique aqui](https://golang.org/dl)

Adicionar ao $PATH:

```shell
# .bashrc ou .zshrc
export PATH=$PATH:/usr/local/go/bin
```

## Postgres

:::: code-group
::: code-group-item Fedora
```shell
sudo dnf install postgresql-server postgresql-contrib
```
:::

::: code-group-item Ubuntu
```shell
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

sudo apt-get update
sudo apt-get -y install postgresql

# Para de executar o postgresql ao iniciar o sistema
sudo service postgresql stop
sudo systemctl disable postgresql
```
:::

::: code-group-item MacOS
```shell
brew install docker --cask
```
:::
