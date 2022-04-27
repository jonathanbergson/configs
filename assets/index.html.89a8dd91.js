import{r as l,o as p,c as r,b as s,a as c,F as t,d as n,e as a}from"./app.91c469a4.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";var o="/configs/assets/macos-dashboard-minimal.13d199f1.png",b="/configs/assets/macos-settings-hot-corners.ccd8031f.png",m="/configs/assets/macos-settings-keyboard-input-sources.e1c3e9be.png",u="/configs/assets/macos-settings-accessibility.c13c578c.png",d="/configs/assets/macos-apps-dozer-settings.21702890.png",k="/configs/assets/macos-apps-contexts-command-tab.9a4a73b7.png",f="/configs/assets/macos-apps-contexts-option-tab.png.71eea241.png";const h={},g=n(`<h2 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> Homebrew</h2><p>Instalar <code>homebrew</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/bin/ruby -e <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,3),w=a("Para visualizar a documenta\xE7\xE3o, "),v={href:"https://brew.sh/index_pt-br",target:"_blank",rel:"noopener noreferrer"},x=a("clique aqui"),_=n(`<h2 id="command-line" tabindex="-1"><a class="header-anchor" href="#command-line" aria-hidden="true">#</a> Command Line</h2><p>Instalar ferramentas de terminal</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Listar docker containers</span>
brew <span class="token function">install</span> ctop

<span class="token comment"># Listar diret\xF3rios</span>
brew <span class="token function">install</span> tree
tree -L <span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="fontes" tabindex="-1"><a class="header-anchor" href="#fontes" aria-hidden="true">#</a> Fontes</h2><p>Fontes que voc\xEA vai precisar para programar no mac:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> homebrew/cask-fonts/font-fira-code --cask
brew <span class="token function">install</span> homebrew/cask-fonts/font-source-code-pro --cask
brew <span class="token function">install</span> homebrew/cask-fonts/font-sans-forgetica --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="softwares" tabindex="-1"><a class="header-anchor" href="#softwares" aria-hidden="true">#</a> Softwares</h2><p>Navegadores:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> blisk --cask
brew <span class="token function">install</span> brave-browser --cask
brew <span class="token function">install</span> chromium --cask
brew <span class="token function">install</span> firefox --cask
brew <span class="token function">install</span> firefox-nightly --cask
brew <span class="token function">install</span> google-chrome --cask
brew <span class="token function">install</span> google-chrome-canary --cask
brew <span class="token function">install</span> homebrew/cask-versions/firefox-developer-edition --cask
brew <span class="token function">install</span> microsoft-edge --cask
brew <span class="token function">install</span> opera --cask
brew <span class="token function">install</span> opera-developer --cask
brew <span class="token function">install</span> torbrowser --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Editores de texto:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew xinstall android-studio --cask
brew xinstall atom --cask
brew xinstall hyper --cask
brew <span class="token function">install</span> intellij-idea --cask  <span class="token comment"># JetBrains</span>
brew <span class="token function">install</span> iterm2 --cask
brew <span class="token function">install</span> mark-text --cask <span class="token comment"># Markdown Editor</span>
brew <span class="token function">install</span> sublime-text --cask
brew <span class="token function">install</span> visual-studio-code --cask
brew <span class="token function">install</span> webstorm --cask <span class="token comment"># JetBrains</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Ferramentas de desenvolvimento:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> dash --cask
brew <span class="token function">install</span> docker --cask
brew <span class="token function">install</span> github --cask
brew <span class="token function">install</span> gitkraken --cask
brew <span class="token function">install</span> insomnia --cask
brew <span class="token function">install</span> postman --cask
brew <span class="token function">install</span> react-native-debugger --cask
brew <span class="token function">install</span> reactotron --cask
brew <span class="token function">install</span> sourcetree --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Gerenciadores de banco de dados:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> datagrip --cask
brew <span class="token function">install</span> navicat-for-postgresql --cask
brew <span class="token function">install</span> pgadmin4 --cask
brew <span class="token function">install</span> postico --cask
brew <span class="token function">install</span> sequel-pro --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Programas de mensagem:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> discord --cask
brew <span class="token function">install</span> franz --cask
brew <span class="token function">install</span> messenger --cask
brew <span class="token function">install</span> slack --cask
brew <span class="token function">install</span> telegram-desktop --cask
brew <span class="token function">install</span> whatsapp --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Programas de email:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> mailspring --cask
brew <span class="token function">install</span> thunderbird --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Programas de m\xFAsica e m\xEDdia:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> audacity --cask
brew <span class="token function">install</span> deezer --cask
brew <span class="token function">install</span> fl-studio --cask
brew <span class="token function">install</span> iina --cask
brew <span class="token function">install</span> lmms --cask
brew <span class="token function">install</span> spotify --cask
brew <span class="token function">install</span> stremio --cask <span class="token comment"># Tipo o Pop Corntime</span>
brew <span class="token function">install</span> vlc --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Programas para designer:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> blender --cask
brew <span class="token function">install</span> gimp --cask
brew <span class="token function">install</span> inkscape --cask
brew <span class="token function">install</span> krita --cask
brew <span class="token function">install</span> sketchbook --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Programas para pixel art:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> aseprite --cask
brew <span class="token function">install</span> hexels --cask
brew <span class="token function">install</span> magicavoxel --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Programas para game developer:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> mono
brew <span class="token function">install</span> dotnet-sdk --cask
brew <span class="token function">install</span> godot --cask
brew <span class="token function">install</span> unity-hub --cask
brew <span class="token function">install</span> visual-studio --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Apps para jogar:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> battle-net --cask
brew <span class="token function">install</span> epic-games --cask
brew <span class="token function">install</span> openemu --cask
brew <span class="token function">install</span> retroarch-metal --cask
brew <span class="token function">install</span> steam --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Utilit\xE1rios:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> 1password --cask
brew <span class="token function">install</span> alfred --cask
brew <span class="token function">install</span> balenaetcher --cask
brew <span class="token function">install</span> bartender --cask
brew <span class="token function">install</span> calibre --cask <span class="token comment"># Conversor de e-Books</span>
brew <span class="token function">install</span> cheatsheet --cask
brew <span class="token function">install</span> cleanmymac  --cask<span class="token comment"># CleanMyMac X</span>
brew <span class="token function">install</span> command-tab-plus --cask
brew <span class="token function">install</span> contexts --cask
brew <span class="token function">install</span> day-o --cask
brew <span class="token function">install</span> deepl --cask <span class="token comment"># Tipo Google Traduto</span>
brew <span class="token function">install</span> dozer --cask <span class="token comment"># Tipo o Vanilla e Bartender</span>
brew <span class="token function">install</span> google-backup-and-sync --cask <span class="token comment"># Google Drive</span>
brew <span class="token function">install</span> google-drive-file-stream --cask
brew <span class="token function">install</span> hiddenbar --cask <span class="token comment"># Tipo o Vanilla e Bartender</span>
brew <span class="token function">install</span> iexplorer --cask
brew <span class="token function">install</span> keeweb --cask
brew <span class="token function">install</span> onlyoffice --cask
brew <span class="token function">install</span> rocket --cask
brew <span class="token function">install</span> the-unarchiver --cask
brew <span class="token function">install</span> transmission --cask
brew <span class="token function">install</span> vanilla --cask
brew <span class="token function">install</span> virtualbox --cask
brew <span class="token function">install</span> webtorrent --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>Prote\xE7\xE3o de tela, frescura de quem usa mac:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> fliqlo --cask
brew <span class="token function">install</span> padbury-clock --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="drivers" tabindex="-1"><a class="header-anchor" href="#drivers" aria-hidden="true">#</a> Drivers</h2><p>Instalar drivers:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> logitech-options --cask
brew <span class="token function">install</span> homebrew/cask-drivers/razer-synapse --cask
brew <span class="token function">install</span> xbox360-controller-driver-unofficial --cask
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="appstore" tabindex="-1"><a class="header-anchor" href="#appstore" aria-hidden="true">#</a> AppStore</h2><p>Instalar softwares direto da AppStore:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## Install</span>
brew <span class="token function">install</span> mas

<span class="token comment">## Singin</span>
mas signin mas@example.com <span class="token string">&quot;13245678&quot;</span>

<span class="token comment">## Software to install</span>
<span class="token comment"># Apple</span>
mas <span class="token function">install</span> <span class="token number">409183694</span>     <span class="token comment"># Keynote</span>
mas <span class="token function">install</span> <span class="token number">409203825</span>     <span class="token comment"># Numbers</span>
mas <span class="token function">install</span> <span class="token number">409201541</span>     <span class="token comment"># Pages</span>

<span class="token comment"># Browser</span>
mas <span class="token function">install</span> <span class="token number">1077036385</span>    <span class="token comment"># Fluid Browser</span>

<span class="token comment"># Message</span>
mas <span class="token function">install</span> <span class="token number">918858936</span>     <span class="token comment"># Airmail 3</span>
mas <span class="token function">install</span> <span class="token number">1059655371</span>    <span class="token comment"># Newton</span>
mas <span class="token function">install</span> <span class="token number">1176895641</span>    <span class="token comment"># Spark</span>

<span class="token comment"># Utility</span>
mas <span class="token function">install</span> <span class="token number">775737590</span>     <span class="token comment"># iA Writer</span>
mas <span class="token function">install</span> <span class="token number">441258766</span>     <span class="token comment"># Magnet</span>

<span class="token comment"># Other</span>
mas <span class="token function">install</span> <span class="token number">926121450</span>     <span class="token comment"># Coinverter</span>
mas <span class="token function">install</span> <span class="token number">1081413713</span>    <span class="token comment"># GIF Brewery 3</span>
mas <span class="token function">install</span> <span class="token number">1437226581</span>    <span class="token comment"># Horo</span>
mas <span class="token function">install</span> <span class="token number">884952790</span>     <span class="token comment"># iTranslate</span>

<span class="token comment">#MacPaw</span>
mas <span class="token function">install</span> <span class="token number">935235287</span>     <span class="token comment"># Encrypto</span>
mas <span class="token function">install</span> <span class="token number">1090488118</span>    <span class="token comment"># Gemini 2</span>
mas <span class="token function">install</span> <span class="token number">425424353</span>     <span class="token comment"># The Unarchiver</span>
mas <span class="token function">install</span> <span class="token number">1266674560</span>    <span class="token comment"># Wallpaper Wizard</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="sistema" tabindex="-1"><a class="header-anchor" href="#sistema" aria-hidden="true">#</a> Sistema</h2><h3 id="dashboard" tabindex="-1"><a class="header-anchor" href="#dashboard" aria-hidden="true">#</a> Dashboard</h3><p>Organiza\xE7\xE3o de apps:</p><p><img src="`+o+'" alt="Organiza\xE7\xE3o da dashboard dos meus apps"></p><h3 id="preferencias" tabindex="-1"><a class="header-anchor" href="#preferencias" aria-hidden="true">#</a> Prefer\xEAncias</h3><p>Cantos de acesso r\xE1pido:</p><p><img src="'+b+'" alt="Prefer\xEAncias dos cantos de acesso r\xE1pido"></p><p>Teclado:</p><p><img src="'+m+'" alt="Prefer\xEAncias do teclado"></p><p>Configurar arrastar e soltar no trackpad:</p><p><img src="'+u+'" alt="Prefer\xEAncias do trackpad"></p><h3 id="softwares-1" tabindex="-1"><a class="header-anchor" href="#softwares-1" aria-hidden="true">#</a> Softwares</h3><h4 id="dozer" tabindex="-1"><a class="header-anchor" href="#dozer" aria-hidden="true">#</a> Dozer</h4><p><img src="'+d+'" alt="Configura\xE7\xF5es do Dozer"></p><h4 id="contexts" tabindex="-1"><a class="header-anchor" href="#contexts" aria-hidden="true">#</a> Contexts</h4><p>Atalho <code>Command-Tab</code>:</p><p><img src="'+k+'" alt="Configura\xE7\xF5es do atalho Command-Tab"></p><p>Atalho <code>Option-Tab</code>:</p><p><img src="'+f+'" alt="Configura\xE7\xF5es do atalho Option-Tab"></p>',58);function y(P,C){const e=l("ExternalLinkIcon");return p(),r(t,null,[g,s("p",null,[w,s("a",v,[x,c(e)])]),_],64)}var q=i(h,[["render",y]]);export{q as default};
