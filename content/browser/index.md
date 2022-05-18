## Extenções

##### Comuns

- 1Password - [all browser](https://1password.com/downloads/mac/#browsers)
- Fluid - [Website](https://fluidbrowser.com), [Chrome](https://chrome.google.com/webstore/detail/fluid-browser/lbechkjecpoldpfdbikjnabefdjahaok/related)
- Mate Translate - [website](https://twopeoplesoftware.com/mate), [Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/instant-translate/)
- Enhancer for YouTube - [Chrome](https://chrome.google.com/webstore/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/)

##### Privacidade

- DuckDuckGo Privacy Essentials - [Firefox](https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg)
- Ghostery - [Website](https://www.ghostery.com)
- HTTPS Everywhere - [Website](https://www.eff.org/https-everywhere)
- Privacy Badger - [Website](https://www.eff.org/privacybadger)

##### Desenvolvimento

- CodeCopy - [Repository](https://github.com/zenorocha/codecopy), [Chrome](https://chrome.google.com/webstore/detail/codecopy/fkbfebkcoelajmhanocgppanfoojcdmg), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/codecopy/)
- React Developer Tools - [Repository](https://github.com/facebook/react-devtools), [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), [Firefox](https://addons.mozilla.org/firefox/addon/react-devtools/)
- Redux DevTools Extension - [Repository](https://github.com/zalmoxisus/redux-devtools-extension), [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

### enhancer-for-youtube

#### Configurações

```json
{
  "version": "2.0.114.1",
  "settings": {
    "blur": 0,
    "brightness": 100,
    "contrast": 100,
    "grayscale": 0,
    "huerotate": 0,
    "invert": 0,
    "saturate": 100,
    "sepia": 0,
    "applyvideofilters": false,
    "backgroundcolor": "#000000",
    "backgroundopacity": 95,
    "blackbars": false,
    "blockads": true,
    "blockadsexceptforsubs": false,
    "blockautoplay": true,
    "blockhfrformats": false,
    "blockwebmformats": false,
    "cinemamode": true,
    "cinemamodewideplayer": true,
    "controlbar": {
      "active": true,
      "autohide": true,
      "centered": true,
      "position": "absolute"
    },
    "controls": [
      "not-interested",
      "cinema-mode",
      "speed-minus",
      "speed",
      "speed-plus"
    ],
    "controlsvisible": true,
    "controlspeed": false,
    "controlspeedmousebutton": false,
    "controlvolume": false,
    "controlvolumemousebutton": false,
    "customcolors": {
      "--main-color": "#00adee",
      "--main-background": "#111111",
      "--second-background": "#181818",
      "--hover-background": "#232323",
      "--main-text": "#eff0f1",
      "--dimmer-text": "#cccccc",
      "--shadow": "#000000"
    },
    "customcssrules": "",
    "customscript": "",
    "customtheme": false,
    "darktheme": true,
    "date": 1577481084178,
    "defaultvolume": true,
    "disableautoplay": true,
    "executescript": false,
    "expanddescription": true,
    "filter": "none",
    "hidecardsendscreens": true,
    "hidechat": true,
    "hidecomments": true,
    "hiderelated": true,
    "ignoreplaylists": false,
    "ignorepopupplayer": true,
    "localecode": "pt_BR",
    "localedir": "ltr",
    "message": false,
    "miniplayer": true,
    "miniplayerposition": "_top-left",
    "miniplayersize": "_400x225",
    "newestcomments": false,
    "overridespeeds": false,
    "pauseforegroundtab": true,
    "pausevideos": false,
    "popuplayersize": "640x360",
    "qualityembeds": "hd720",
    "qualityembedsfullscreen": "hd1080",
    "qualityplaylists": "hd1080",
    "qualityplaylistsfullscreen": "hd1080",
    "qualityvideos": "hd1080",
    "qualityvideosfullscreen": "hd1080",
    "reload": false,
    "reversemousewheeldirection": false,
    "selectquality": false,
    "selectqualityfullscreenoff": false,
    "selectqualityfullscreenon": false,
    "speed": 1,
    "speedvariation": 0.5,
    "stopvideos": false,
    "theatermode": true,
    "theme": "default-dark",
    "themevariant": "youtube-deep-dark-pink.css",
    "update": 0,
    "volume": 100,
    "volumemultiplier": 3,
    "volumevariation": 5,
    "whitelist": "",
    "wideplayer": false,
    "wideplayerviewport": false
  }
}
```

### stylus

Temas podem ser encontrados em User Styles, [clicando aqui](https://userstyles.org)

#### Manual do Usuário

```css
body {
  color: #dfe6e9;
}

body, input, textarea {
  background: #212529;
}

a {
  color: #faa613;
}

a:hover,
a:focus {
  color: #f33a3a;
}

a:visited {
  color: #b1740f;
}

figcaption {
  color: #636e72 !important;
}

.entry-title {
  color: #dfe6e9;
}
```

Configuração `URLs no domínio: manualdousuario.net`

Visitar [manualdousuario.net](https://manualdousuario.net)

#### Mac Magazine

```css
#bannertopo,
#banner-300x250-area,
#onesignal-slidedown-container {
    display: none !important;
}
```

Configuração `URLs no domínio: macmagazine.com.br`

Visitar [macmagazine.com.br](https://macmagazine.com.br)

#### Nexo Jornal

```css
[class^="PaywallBumper__wrap-container"],
[class^="PaywallBanner__container"],
[class^="Datawall__wrap-container"] {
  display: none;
}

.datawall-bump {
  overflow-x: auto;
  overflow-y: auto;
}
```

Configuração `URLs no domínio: nexojornal.com.br`

Visitar [nexojornal.com.br](https://nexojornal.com.br)

#### YouTube

```css
#secondary {
  display: none;
}
```

Configuração `URLs no domínio: youtube.com`

Visitar [youtube.com](https://youtube.com)
