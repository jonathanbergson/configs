## Atalhos

```yml
# keymap.cson
'atom-workspace':
  'cmd-b': 'tree-view:toggle'
  'cmd-g': 'github:toggle-git-tab'

'atom-workspace atom-text-editor:not([mini])':
  'cmd-[': 'pane:show-previous-item'
  'cmd-]': 'pane:show-next-item'
```

## Configurações

```yml
# config.cson
"*":
  core:
    telemetryConsent: "no"
    titleBar: "custom-inset"
  editor:
    fontFamily: "Fira Code, Menlo, Consolas, DejaVu Sans Mono, monospace"
    showIndentGuide: true
    showInvisibles: true
  welcome:
    showOnStartup: false
```
