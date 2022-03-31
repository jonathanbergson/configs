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

```shell
flatpak install flathub org.mozilla.firefox
flatpak install flathub com.spotify.Client

flatpak install flathub com.visualstudio.code
flatpak install flathub rest.insomnia.Insomnia
flatpak install flathub com.getpostman.Postman

flatpak install flathub com.valvesoftware.Steam
flatpak install flathub com.discordapp.Discord

flatpak install flathub org.godotengine.Godot
flatpak install flathub com.unity.UnityHub
flatpak install flathub org.blender.Blender
flatpak install flathub org.kde.krita
flatpak install flathub org.gimp.GIMP
flatpak install flathub org.videolan.VLC
flatpak install flathub com.obsproject.Studio
```

## Snap

#### Adicionar Softwares

```shell
snap install insomnia
snap install spotify
```
