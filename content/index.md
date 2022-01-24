## SSH

```shell{1}
ssh-keygen -C "Usuário, Sistema - Domingo, 1 Dezembro 2021"
# ou
ssh-keygen -t rsa -b 4096 -C "Username, Sistema - Domingo, 1 Dezembro 2021" -N "passphrase"
```

#### Copiar para área de transferencia

:::: code-group
::: code-group-item MacOS
```shell
cat ~/.ssh/id_rsa.pub | pbcopy
```
:::
::::

#### Criar arquivo de configuração para multiplas chaves

```shell
# work account
Host github.com-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_work

# personal account
Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_personal

Host bitbucket.org
  HostName bitbucket.org
  User git
  IdentityFile ~/.ssh/id_rsa_personal
```

Para ler sobre, [clique aqui](https://gist.github.com/jexchan/2351996)

## Git

Instalação:

:::: code-group
::: code-group-item Linux
```shell
sudo apt install git
```
:::

::: code-group-item MacOS
```shell
brew install git
brew install git-flow-avh
```
:::
::::

Configurar dados dos commits:

```shell
git config --global user.name "Fullname"
git config --global user.email "mail@domain.com"
```

Backup de repositórios:

```shell
git remote set-url --add --push origin git://original/repo.git
git remote set-url --add --push origin git://another/repo.git
```

Para ver o tutorial, [clique aqui](https://stackoverflow.com/questions/14290113/git-pushing-code-to-two-remotes)

## Shell

Para adicionar os snippets, basta baixar o repositório:

```shell
cd ~
git clone git@github.com:jonathanbergson/configs.git ~/www/github/jonathanbergson/configs
```

Adicionar a linha abaixo há no arquivo `.zshrc` ou `.bashrc`:

```shell
source ~/www/github/jonathanbergson/configs/default.sh
# ou
echo "\nsource ~/www/github/jonathanbergson/configs/default.sh" >> ~/.zshrc
```

## zsh

Instalar o `zsh`:

:::: code-group
::: code-group-item Linux
```shell
sudo apt install zsh
reboot
```
:::
::::

Mudar o `shell` default para o `zsh`:

```shell
chsh -s /bin/zsh
```

## oh-my-zsh

Instalar o `oh-my-zsh`:

:::: code-group
::: code-group-item Linux
```shell
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
:::

::: code-group-item MacOS
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
:::
::::

Para visualizar a página do projeto, [clique aqui](https://github.com/robbyrussell/oh-my-zsh)

### Plugins

Instalar o plugin `zsh-autosuggestions` para o `oh-my-zsh`:

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Adicionar o plugin ao arquivo `.zshrc`:

```shell
plugins=(
  git
  zsh-autosuggestions
)
```

### Themes

Baixar e instalar o tema:

```shell
git clone https://github.com/bhilburn/powerlevel9k.git $ZSH_CUSTOM/themes/powerlevel9k
git clone https://github.com/oskarkrawczyk/honukai-iterm-zsh.git $ZSH_CUSTOM/themes/honukai
git clone https://github.com/carloscuesta/materialshell.git $ZSH_CUSTOM/themes/materialshell
```

Para ativar o tema é necessário modificar o arquivo `.zshrc`:

```shell
# Default themes
ZSH_THEME="agnoster"
ZSH_THEME="gnzh"
ZSH_THEME="amuse"

# Custom themes
ZSH_THEME="powerlevel9k/powerlevel9k"
ZSH_THEME="honukai/honukai"
ZSH_THEME="materialshell/materialshell"
```

## Fontes

- [Fira Code](https://github.com/tonsky/FiraCode)
- [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono/releases/tag/v2.242)
