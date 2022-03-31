import{d as a}from"./app.88b1f4a0.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h2 id="flatpak" tabindex="-1"><a class="header-anchor" href="#flatpak" aria-hidden="true">#</a> Flatpak</h2><h4 id="instalar" tabindex="-1"><a class="header-anchor" href="#instalar" aria-hidden="true">#</a> Instalar</h4><p>Adicionar PPA:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:flatpak/stable
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> flatpak
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Adicionar GNOME Software Plugin:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnome-software-plugin-flatpak
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Adicionar Flatpak Repository:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="adicionar-softwares" tabindex="-1"><a class="header-anchor" href="#adicionar-softwares" aria-hidden="true">#</a> Adicionar Softwares</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flatpak <span class="token function">install</span> flathub org.mozilla.firefox
flatpak <span class="token function">install</span> flathub com.spotify.Client

flatpak <span class="token function">install</span> flathub com.visualstudio.code
flatpak <span class="token function">install</span> flathub rest.insomnia.Insomnia
flatpak <span class="token function">install</span> flathub com.getpostman.Postman

flatpak <span class="token function">install</span> flathub com.valvesoftware.Steam
flatpak <span class="token function">install</span> flathub com.discordapp.Discord

flatpak <span class="token function">install</span> flathub org.godotengine.Godot
flatpak <span class="token function">install</span> flathub com.unity.UnityHub
flatpak <span class="token function">install</span> flathub org.blender.Blender
flatpak <span class="token function">install</span> flathub org.kde.krita
flatpak <span class="token function">install</span> flathub org.gimp.GIMP
flatpak <span class="token function">install</span> flathub org.videolan.VLC
flatpak <span class="token function">install</span> flathub com.obsproject.Studio
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> Snap</h2><h4 id="adicionar-softwares-1" tabindex="-1"><a class="header-anchor" href="#adicionar-softwares-1" aria-hidden="true">#</a> Adicionar Softwares</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>snap <span class="token function">install</span> insomnia
snap <span class="token function">install</span> spotify
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,13);function l(t,i){return e}var o=n(s,[["render",l]]);export{o as default};
