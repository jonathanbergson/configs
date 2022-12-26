## Apps

```shell
sudo apt install gnome-console gnome-text-editor
sudo apt install neofetch -y
```

## Flatpak

#### Instalar

Adicionar PPA:

```shell
sudo add-apt-repository ppa:flatpak/stable
sudo apt update
sudo apt install flatpak
```

Adicionar GNOME Software Plugin:

```shell
sudo apt install gnome-software-plugin-flatpak
```

Adicionar Flatpak Repository:

```shell
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### Adicionar Softwares

Navegadores:

```shell
flatpak install flathub com.brave.Browser
flatpak install flathub org.chromium.Chromium
flatpak install flathub com.google.Chrome
flatpak install flathub org.mozilla.firefox
```

Editores de texto:

```shell
flatpak install flathub com.jetbrains.Rider
flatpak install flathub com.jetbrains.WebStorm
flatpak install flathub com.sublimetext.three
flatpak install flathub com.visualstudio.code
flatpak install flathub io.atom.Atom
```

Ferramentas de desenvolvimento:

```shell
flatpak install flathub com.getpostman.Postman
flatpak install flathub rest.insomnia.Insomnia
```

Programas de mensagem:

```shell
flatpak install com.slack.Slack
flatpak install flathub com.discordapp.Discord
```

Programas de música e mídia:

```shell
flatpak install flathub com.obsproject.Studio
flatpak install flathub com.spotify.Client
flatpak install flathub org.videolan.VLC
```

Programas para designer:

```shell
flatpak install flathub org.blender.Blender
flatpak install flathub org.gimp.GIMP
flatpak install flathub org.kde.krita
```

Programas para game developer:

```shell
flatpak install flathub org.godotengine.Godot
flatpak install flathub com.unity.UnityHub
```

Apps para jogar:

```shell
flatpak install flathub com.valvesoftware.Steam
```

GNOME:

```shell
flatpak install flathub com.mattjakeman.ExtensionManager
```

## Snap

#### Adicionar Softwares

```shell
snap install insomnia
snap install spotify
```

### Softwares

#### Gerenciador de Extensões

![Gerenciador de Extensões do GNOME](./linux-gnome-extensions.png)

#### App Icons Taskbar

![Extensões do GNOME - App Icons Taskbar](./linux-gnome-extension-app-icons-taskbar.png)

#### Sound Output Device Chooser

![Extensões do GNOME - Sound Output Device Chooser](./linux-gnome-extension-sound-output-device-chooser.png)
