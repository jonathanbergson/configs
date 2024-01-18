import{r as c,o as r,c as p,a,w as e,b as s,F as u,e as n,d as o}from"./app.3eea2884.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const b={},m=s("h2",{id:"docker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),n(" Docker")],-1),k=s("p",null,[n("Instalar "),s("code",null,"docker"),n(":")],-1),g=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# Set up the repository"),n(`
`),s("span",{class:"token function"},"sudo"),n(" dnf -y "),s("span",{class:"token function"},"install"),n(` dnf-plugins-core
`),s("span",{class:"token function"},"sudo"),n(" dnf config-manager "),s("span",{class:"token punctuation"},"\\"),n(`
    --add-repo `),s("span",{class:"token punctuation"},"\\"),n(`
    https://download.docker.com/linux/fedora/docker-ce.repo

`),s("span",{class:"token comment"},"# Install Docker Engine"),n(`
`),s("span",{class:"token function"},"sudo"),n(" dnf "),s("span",{class:"token function"},"install"),n(` docker-ce docker-ce-cli containerd.io docker-compose-plugin

`),s("span",{class:"token function"},"sudo"),n(` systemctl start docker
`),s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(` docker.service

`),s("span",{class:"token function"},"sudo"),n(` docker run hello-world
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br")])],-1),h=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt"),n(` update
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt"),n(),s("span",{class:"token function"},"install"),n(" ca-certificates "),s("span",{class:"token function"},"curl"),n(` gnupg lsb-release
`),s("span",{class:"token function"},"curl"),n(" -fsSL https://download.docker.com/linux/ubuntu/gpg "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"sudo"),n(` gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token string"},[n('"deb [arch='),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("dpkg --print-architecture"),s("span",{class:"token variable"},")")]),n(` signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\
  `),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("lsb_release -cs"),s("span",{class:"token variable"},")")]),n(' stable"')]),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"tee"),n(" /etc/apt/sources.list.d/docker.list "),s("span",{class:"token operator"},">"),n(` /dev/null

`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt"),n(` update
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(` docker-ce docker-ce-cli containerd.io
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br")])],-1),f=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[n("brew "),s("span",{class:"token function"},"install"),n(` docker --cask
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),v=s("p",null,[n("Instalar "),s("code",null,"docker-compose"),n(":")],-1),_=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),n(" dnf "),s("span",{class:"token function"},"install"),n(` docker-compose
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),x=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"curl"),n(" -L "),s("span",{class:"token string"},[n('"https://github.com/docker/compose/releases/download/1.29.2/docker-compose-'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"uname"),n(" -s"),s("span",{class:"token variable"},")")]),n("-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"uname"),n(" -m"),s("span",{class:"token variable"},")")]),n('"')]),n(` -o /usr/local/bin/docker-compose
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"chmod"),n(` +x /usr/local/bin/docker-compose
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br")])],-1),q=o(`<h2 id="asdf" tabindex="-1"><a class="header-anchor" href="#asdf" aria-hidden="true">#</a> ASDF</h2><p>Instalar <code>ASDF</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.2
<span class="token builtin class-name">.</span> <span class="token environment constant">$HOME</span>/.asdf/asdf.sh
<span class="token function">touch</span> ~/.tool-versions
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h2><p>Instalar <code>nvm</code>:</p>`,5),w=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[n("asdf plugin "),s("span",{class:"token function"},"add"),n(` nodejs https://github.com/asdf-vm/asdf-nodejs.git

asdf `),s("span",{class:"token function"},"install"),n(` nodejs latest
asdf `),s("span",{class:"token function"},"install"),n(" nodejs "),s("span",{class:"token number"},"16.16"),n(`.0

asdf global nodejs `),s("span",{class:"token number"},"16.16"),n(`.0
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1),y=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"wget"),n(" -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"bash"),n(`
nvm `),s("span",{class:"token function"},"install"),n(` --lts
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br")])],-1),C=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"curl"),n(" -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"bash"),n(`
nvm `),s("span",{class:"token function"},"install"),n(` --lts
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br")])],-1),S=o(`<p>Configurar <code>npm</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> init-author-name <span class="token string">&quot;Jonathan Bergson&quot;</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> init-author-email <span class="token string">&quot;contato@bergson.me&quot;</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> init-author-url <span class="token string">&quot;https://bergson.me&quot;</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> init-license <span class="token string">&quot;MIT&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Instalar pacotes globalmente:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i --location<span class="token operator">=</span>global <span class="token punctuation">\\</span>
  <span class="token function">yarn</span> gitignore nodemon <span class="token punctuation">\\</span>
  yo generator-editorconfig <span class="token punctuation">\\</span>
  create-react-app react-native-cli <span class="token punctuation">\\</span>
  @vue/cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="net" tabindex="-1"><a class="header-anchor" href="#net" aria-hidden="true">#</a> .NET</h2><p>Baixar e instalar</p>`,6),I=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# Usando Snaps"),n(`
`),s("span",{class:"token function"},"sudo"),n(" snap "),s("span",{class:"token function"},"install"),n(" dotnet-sdk --classic --channel"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"6.0"),n(),s("span",{class:"token comment"},"# Channels [3.1, 5.0, 6.0]"),n(`
`),s("span",{class:"token function"},"sudo"),n(" snap "),s("span",{class:"token builtin class-name"},"alias"),n(` dotnet-sdk.dotnet dotnet
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br")])],-1),j=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[n("npx create-vuepress-site "),s("span",{class:"token punctuation"},"["),n("optionalDirectoryName"),s("span",{class:"token punctuation"},"]"),n(`
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),F=o(`<h2 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h2><p>Baixar e instalar:</p><p>ASDF:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>asdf plugin-add golang https://github.com/kennyp/asdf-golang.git
asdf <span class="token function">install</span> golang <span class="token number">1.19</span>.4 
asdf global golang <span class="token number">1.19</span>.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tar</span> -C /usr/local -xzf ~/Downloads/go1.17.1.linux-amd64.tar.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,5),A=n("Para realizar o download, "),D={href:"https://golang.org/dl",target:"_blank",rel:"noopener noreferrer"},$=n("clique aqui"),N=o(`<p>Adicionar ao $PATH:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># .bashrc ou .zshrc</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/go/bin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="postgres" tabindex="-1"><a class="header-anchor" href="#postgres" aria-hidden="true">#</a> Postgres</h2>`,3),O=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),n(" dnf "),s("span",{class:"token function"},"install"),n(` postgresql-server postgresql-contrib
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),B=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"sh"),n(" -c "),s("span",{class:"token string"},`'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'`),n(`
`),s("span",{class:"token function"},"wget"),n(" --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"sudo"),n(" apt-key "),s("span",{class:"token function"},"add"),n(` -

`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(` update
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(" -y "),s("span",{class:"token function"},"install"),n(` postgresql

`),s("span",{class:"token comment"},"# Para de executar o postgresql ao iniciar o sistema"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"service"),n(` postgresql stop
`),s("span",{class:"token function"},"sudo"),n(` systemctl disable postgresql
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br")])],-1),E=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[n("brew "),s("span",{class:"token function"},"install"),n(` docker --cask
`)])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1);function L(M,P){const l=c("CodeGroupItem"),t=c("CodeGroup"),i=c("ExternalLinkIcon");return r(),p(u,null,[m,k,a(t,null,{default:e(()=>[a(l,{title:"Fedora"},{default:e(()=>[g]),_:1}),a(l,{title:"Ubuntu"},{default:e(()=>[h]),_:1}),a(l,{title:"MacOS"},{default:e(()=>[f]),_:1})]),_:1}),v,a(t,null,{default:e(()=>[a(l,{title:"Fedora"},{default:e(()=>[_]),_:1}),a(l,{title:"Ubuntu"},{default:e(()=>[x]),_:1})]),_:1}),q,a(t,null,{default:e(()=>[a(l,{title:"ASDF"},{default:e(()=>[w]),_:1}),a(l,{title:"Linux"},{default:e(()=>[y]),_:1}),a(l,{title:"MacOS"},{default:e(()=>[C]),_:1})]),_:1}),S,a(t,null,{default:e(()=>[a(l,{title:"Linux"},{default:e(()=>[I]),_:1}),a(l,{title:"MacOS"},{default:e(()=>[j]),_:1})]),_:1}),F,s("p",null,[A,s("a",D,[$,a(i)])]),N,a(t,null,{default:e(()=>[a(l,{title:"Fedora"},{default:e(()=>[O]),_:1}),a(l,{title:"Ubuntu"},{default:e(()=>[B]),_:1}),a(l,{title:"MacOS"},{default:e(()=>[E]),_:1})]),_:1})],64)}var z=d(b,[["render",L]]);export{z as default};