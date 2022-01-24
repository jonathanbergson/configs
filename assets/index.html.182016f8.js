import{d as a}from"./app.bda2662a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=a(`<h2 id="flatpak" tabindex="-1"><a class="header-anchor" href="#flatpak" aria-hidden="true">#</a> Flatpak</h2><h4 id="instalar" tabindex="-1"><a class="header-anchor" href="#instalar" aria-hidden="true">#</a> Instalar</h4><p>Adicionar PPA:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:flatpak/stable
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> flatpak
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Adicionar GNOME Software Plugin:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnome-software-plugin-flatpak
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Adicionar Flatpak Repository:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="adicionar-softwares" tabindex="-1"><a class="header-anchor" href="#adicionar-softwares" aria-hidden="true">#</a> Adicionar Softwares</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>snap <span class="token function">install</span> insomnia
snap <span class="token function">install</span> spotify
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> Snap</h2><h4 id="adicionar-softwares-1" tabindex="-1"><a class="header-anchor" href="#adicionar-softwares-1" aria-hidden="true">#</a> Adicionar Softwares</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>snap <span class="token function">install</span> insomnia
snap <span class="token function">install</span> spotify
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,13);function i(r,l){return e}var o=s(n,[["render",i]]);export{o as default};
