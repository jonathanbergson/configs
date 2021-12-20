## Atalhos

```json
// Keybinding.json
[
  { "keys": ["super+b"], "command": "toggle_side_bar" },
  {
    "keys": ["super+shift+k"],
    "command": "run_macro_file",
    "args": { "file": "res://Packages/Default/Delete Line.sublime-macro" }
  },
  { "keys": ["alt+up"], "command": "swap_line_up" },
  { "keys": ["alt+down"], "command": "swap_line_down" }
]
```

## Configurações

```json
// Preferences.json
{
  // Material Theme - Configs
  "color_scheme": "Packages/Material Theme/schemes/Material-Theme-Darker.tmTheme",
  "theme": "Material-Theme-Darker.sublime-theme",
  "material_theme_accent_red": true, // red, orange, yellow, pink
  "material_theme_appbar_charcoal": true, // charcoal, red, orange, yellow, pink

  // Monokai Pro Theme - Configs
  "color_scheme": "Monokai Pro (Filter Spectrum).sublime-color-scheme",
  "theme": "Monokai Pro (Filter Spectrum).sublime-theme",

  // Default Configs
  "always_show_minimap_viewport": true,
  "bold_folder_labels": true,
  "draw_white_space": "all",
  "ensure_newline_at_eof_on_save": true,
  "folder_exclude_patterns": [".vscode", "coverage", "node_modules"],
  "font_face": "Fira Code",
  "font_options": ["gray_antialias"],
  "highlight_line": true,
  "ignored_packages": ["Vintage"],
  "line_padding_bottom": 2,
  "line_padding_top": 2,
  "overlay_scroll_bars": "enabled",
  "rulers": [80, 100],
  "shift_tab_unindent": true,
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "word_wrap": true,
  "wrap_width": 100
}
```
